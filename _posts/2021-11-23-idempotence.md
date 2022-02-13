---
title: "A Deep Dive Into Idempotence"
excerpt: "What is idempotence and how can you use it properly"
header:
  overlay_image: https://miro.medium.com/max/700/1*dvQcYrdWbzCwXPNUsvX9oA.jpeg
  teaser: https://miro.medium.com/max/700/1*dvQcYrdWbzCwXPNUsvX9oA.jpeg
  overlay_filter: 0.5
  caption: "Photo by [Bundo Kim](https://unsplash.com/@bundo) on [Unsplash](https://unsplash.com)"
tags:
  - Distributed Systems
toc: true
---

Published here https://medium.com/p/1a39393df7e6/edit

Idempotence is a topic that can be both simple and hard. Here, we start from simple with a trivial use case in a single state application. Then we'll go deep, to discuss the most complicated use case for building a highly reliable system with multiple states. 

## What's Idempotence

Let's start from [Wikipedia](https://en.wikipedia.org/wiki/Idempotence):

> Idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.  

But what does it really mean by "not changing the result"? I see two ways that we interpret it:

1. No matter how many times I made the same request, I will always receive the same response.
2. No matter how many times I made the same request, I won't change the state of the system.

The two statements sound similar and both seem to be correct from the surface. However, the second statement is more appropriate. We'll discuss further in the following sections. 

## Idempotence in Single State System

Let's consider a very simply system with a single running service on top of a single database. 

![](/assets/images/idempotence/Idempotence_client_1.generated.png)
    
The database keep track of user accounts. Each account simply have 2 properties: `UserID` and `Name`.

![](/assets/images/idempotence/account-table.generated.png)

And let's assume the service provides 4 basic **CRUD** operations (**CREATE**, **READ**, **UPDATE**, and **DELETE**). 

These APIs are defined as the following:

```
createUser(userId, name)
readUser(userId) -> User
updateUser(userId, name)
deleteUser(userId)
```

Let's take the **READ** operation as an example. It is commonly agreed that **READ** is idempotent. 

However, if we make a **READ** request, and encounter a network error (i.e. timeout), and retry, we won't necessarily get the same response as the initial request. Why?

Because some other actor of the system might have changed the state of the system. For example, `updateUser` might have been called between the 1st and 2nd **READ**. 

For the **CREATE** operation, if we get a network error during the `createUser` request, then the state of the system becomes non-deterministic, just like [Schrödinger's cat](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat).

If the record has not been created, then the retry will just trigger the normal insertion into the database.

If the record has already been created, that's when things get interesting. What should we respond to the client? 
Consider the following two options:

1. `Error: Your record {userId: 'yuchen123', name: 'Yuchen'} already exist`
2. `Success: Your record {userId: 'yuchen123', name: 'Yuchen'} is created`

Both options are valid. From the client's point of view, to return the same response may be more user-friendly since the client only cares about the result of the **CREATE** operation. 

However, on the other hand, we could also argue that a different response provides more transparency, making it clear that the previous request was successful.

## A Case With Two Clients

If we have two clients, and both of them are making the same request to create a user: 

```
createUser(userId: 'yuchen123', name: 'Yuchen')
```

![](/assets/images/idempotence/Idempotence_client_2.generated.png)


Assuming the network was not stable, both of the requests from client A and client B successfully reached the server. However, neither of them receive a response. 

A bit later, both of the clients retry and both of them receive an error message:

`Error: Your record {userId: 'yuchen123', name: 'Yuchen'} already exist`

Interestingly, with the current setup, there is no way for us to know which of the two client's initial requests was successful. 

One common approach is to introduce an `idempotentKey`. It is also sometimes referred to as `idempotentToken`, `requestId`, `nonceToken`, etc.

Now let's change the create request to the following.

```
createUser(userId, name, idempotentKey)
```

And the requests from Client A and Client B can now be different:

From Client A:

```
createUser(userId: 'yuchen123', name: 'Yuchen', idempotentKey: 'a2906959')
```

From Client B:

```
createUser(userId: 'yuchen123', name: 'Yuchen', idempotentKey: 'b54ed6d9')
```

Now from the server-side, when inserting this record into the database, we also include the `idempotentKey`. 

![](/assets/images/idempotence/account-table-idempotent.generated.png)

When a client retries, it will use the same `idempotentKey` from its previous request. With this, we can then identify which client's request was successful earlier.

For example, if we see a record with idempotentKey being `a2906959` in the database, we can then return the following to the two clients.

Response to Client A: 

```
Success: Your record {userId: 'yuchen123', name: 'Yuchen'} is created
```

Response to Client B: 

```
Error: Your record {userId: 'yuchen123', name: 'Yuchen'} already exist
```

Noticing that we are using short strings (`'a2906959'`, `'b54ed6d9'`) as the `idempotentKey`. But in practice, we need to make sure that they are unique across different clients. 

## A Dilemma Between At-most Once vs At-least Once

Large scale distributed system is unreliable and unpredictable by the nature. A server can crash at any given point of time. 

A while ago, I described a system for ordering coffee in the blog post [System Design in Layman’s Terms](https://betterprogramming.pub/system-design-in-laymans-terms-design-a-coffee-shop-e1abb42dd123). Over there I wrote:

> ... the cashiers write down the transactions in the ledger book at the same time as they put the sticky notes on the bulletin board.

But I didn't explain how they can do that **at the same time**. What happens if the cashier writes down the order on a sticker note for the barista, gets distracted by a phone call, and then forgets to write down the transaction on the ledge book afterward? 

![](/assets/images/idempotence/coffee_shop_presentation_v4_idempotent.generated.png)

A situation like this is widely discussed in distributed message queues. When we have a new message from the message queue, should we:

1. first acknowledge that we received the message and then process it or;
2. process the message first and only acknowledge the message once the processing is completed? 

Choosing between (1) and (2) will result in **at-most once** and **at-least once** delivery respectfully. 

One solution is with atomic commit protocol, which is discussed in detail in the book **Designing Data-Intensive Applications**:

> If either the message delivery or the database transaction fails, both are aborted, and so the message broker may safely redeliver the message later. Thus, by atomically committing the message and the side effects of its processing, we can ensure that the message is effectively processed exactly once, even if it required a few retries before it succeeded. The abort discards any side effects of the partially completed transaction.   
> — **Kleppmann, Martin**

This, however, sounds nice to have on paper, is extremely hard to achieve in practice. In the next section, we'll look into a different way to approach this problem — with idempotence. 

## Idempotence in Multi-State System

A complex system can consist of many components. But conceptually, they can be categorized into two categories: 

* States 
* Computations

A computation is what will change the state of an object. It is a small unit of executable function, and is also referred to as a step, or a task.

Depending on which of the two categories we focus on, such a system is sometimes called a [State Machine](https://en.wikipedia.org/wiki/Finite-state_machine) if we focus on the states; and is sometimes called [workflow](https://atscaleconference.com/2021/03/08/powering-developer-productivity/) if we focus on the computations. Academically, this is also known as the [Saga Design Pattern](https://microservices.io/patterns/data/saga.html).

Since the system can crash at any given point in time, to make the system highly reliable, the trick is to make every computation idempotent so that we can retry them in case of network failures.

The way to enable idempotent is no different than the discussion we had above about a single-state system — by adding an `idempotentKey` to the request. On the server side, we put the request into the database and respond to the client immediately with an acknowledgment that the request is received. Any subsequent request will be ignored since a request with this `idempotentKey` is already present in our system. 

It is important to point out that this system is asynchronous. We have a separate worker that will fulfill the request. 

![](/assets/images/idempotence/idempotent_worker.generated.png)

A system like this becomes highly reliable. The worker can crash at any time and it would be fine. For example, the worker crash when processing the user's credit card. We are supposed to change the state of the transaction from "Pending Charge" to "Charged". Since the worker dies, we don't know if we've changed the user's credit card successfully. What do we do? We simply retry once the worker is restarted.

From the client's point of view, it can poll for the results. Alternatively, it can also rely on some separate notification systems (e.g. email) to get notified once the request is fulfilled. 

In short, in complex systems with multiple states and computations, the trick to make them highly reliable is to make requests idempotent. 

## Where Idempotence are important?

So, when don't we just make all requests idempotent? 

Some requests can obviously benefit from idempotence. For example, credit card transactions as we mentioned above. As a matter of fact, most (if not all) payment infrastructure supports idempotence: such as payment API from [strip](https://stripe.com/docs/api/idempotent_requests) or [square](https://developer.squareup.com/docs/working-with-apis/idempotency).

But idempotence is also expensive. It is more complicated to implement and it also has latency implications. Therefore, some services may simply not make sense to be idempotent. For example,

- We don't need idempotency in a logging system. If the system is restarted, it is ok to have duplicated log messages.
- We don't want idempotency in streaming services such as VoIP calls, or collaborative editing applications (such as GDoc). In these systems, we prioritize availability over consistency. 

As Thomas Sowell once said:

> There are no solutions, there are only trade-offs; and you try to get the best trade-off you can get, that's all you can hope for.
> 
> — **Thomas Sowell**

He was speaking in the context of economics. But the same can apply to us engineers as well. We need to decide which operations are critical and we need to make idempotent, which are less critical and is good enough with either at-least once or at-most once. 

## The End

That's it for today. As always, thanks a lot for reading. Do you have to use idempotence in your work? What is it that you are building? What do you find most challenging while implementing that? I would love to hear from you too!





---

# Other Random Note

Imagine in the old days, when the internet was not available. If you are away from home and send your mom a letter. If you do not get a letter back from her after a while, what would you do? You will send another letter. 

It is the same for computers. Network conditions are unpredictable. Whenever the client, during the network request, can encounter a network error, or a timeout. To increase the reliability of the communications, a simple technique that we use is retry, retry with the exact same message, until we get a definite response from the client. 

Delete operation can only happen once in theory. If the item is deleted with the first request, then any consecutive requests will not be able to delete it again. For the first request, we can respond with “Item deleted”, for any consecutive requests, we can respond with “Item does not exist”. In either case, the client knows that the operation is successful and can stop retrying. 

## Making Create Request Idempotent 

This can be easily achieved with database constraints. 

## Update Request Idempotent

The best way to achieve this is through data versioning or CAP (Compare And Put).

