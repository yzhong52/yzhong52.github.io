---
title: "System Design in Layman’s Terms — Design a Coffee Shop"
excerpt: "A starting point to design a large-scale distributed system"
header:
  image: https://miro.medium.com/max/1273/1*p6WLZLcUkkHLumITrxMdqw.jpeg
  teaser: https://miro.medium.com/max/1273/1*p6WLZLcUkkHLumITrxMdqw.jpeg
  caption: Photo by [The Creative Exchange](https://unsplash.com/photos/d1ngW7SNehM) on [Unsplash](https://unsplash.com/)
tags:
  - Distributed Systems
toc: true
---

Though I am a software engineer, I always dream about opening a coffee shop one day. A while ago, I wrote about [compilation from the perspective of two people ordering poutines](https://yzhong-cs.medium.com/what-is-compiling-584171268d4e). Today, let’s talked about system design from the perspective of a coffee shop owner, Joe.

# System Design Jargon

We’ll cover these system design topics:

![](https://miro.medium.com/max/569/1*Lh_4nyYfX9W0ThFVtxyaMA.png)

Don’t
 worry if you haven’t heard about any of these. We won’t actually talk
about them. Here, I want to tell you the five steps for building a
successful coffee shop. That’s it. No big deal. Just five steps.
Hopefully, after going over these, you will be able to point out what
each of them represents.

# A New Coffee Shop

Since
 it is still in the early stage, Joe, the coffee shop owner, has not
hired anyone. On one hand, he is accepting orders from a customer in the
 front. On the other hand, he also turns around and makes coffees for
the customer. Once the coffee is ready, he delivers the coffee to the
customer.

![](https://miro.medium.com/max/749/1*4cvw9Mr86C9Q5xQ0IRkWhQ.png)

At this point, we have a single worker in the coffee shop — the owner Joe himself.

# A Simple Coffee Shop

Everything works perfectly fine
 if there is only one customer in the shop at a time. When there are
multiple customers, some of them will have to wait when Joe is busy
making coffee for the previous customer.

This is not a very nice user experience, is it?

In
 order to maximize profit and create a better experience, Joe thinks it
is better to avoid having the customers wait to place their order.

He creates two roles in the coffee shop: cashier and barista.

He hires a cashier to take orders from the customers and a barista who is dedicated to making coffee in the back.

Since
 the cashier is only responsible for taking orders and accepting
payments, it is usually fast. After the order is placed, the cashier
will turn around and yell at the barista to let them know about the new
order.

If
 the barista is not making coffee at the moment, they will start making
it right away. If they are busy making coffee for another customer, they
 remember the order and make it next.

As a matter of fact, it could also be the cashier who remembers the orders. Just one of them needs to do that.

![.png](https://miro.medium.com/max/1240/1*un7pHctjGxGr0wCe-rHK8g.png)

At this point, we have a total of two employees working in the coffee shop.

# A Good Coffee Shop

This continues to work well for a while until the coffee shop becomes so popular that there are a lot more customers.

Joe realizes that customers now have to wait to place an order. Some of them leave in the process (timeout).

To address that, Joe hires one more cashier to take orders.

Though
 that only solves part of the problem, not long after, some customers
start complaining since they are waiting forever to have their coffee
made. Joe immediately hires two more baristas.

However,
 this introduces an even bigger problem. Now with all the yelling
between the cashiers and baristas, it is hard to keep track of which
order is taken care of. Some orders are being made twice, while some
orders are missed. The customers are sad and angry, and the cashiers and
 baristas are all stressed out.

To
 address that chaos, Joe comes up with a system with a bulletin board
and some sticky notes. No more yelling around and remembering which
orders have been fulfilled. Every time a new order is placed, the
cashier will write it down on a sticky note. This is the information to
be written on the sticky note:

- The name of the customer
- The type of coffee that is ordered (e.g. latte, cappuccino, americano, espresso, etc.)
- Size of the coffee (e.g. small, medium, large, etc.)

Then
 the cashier will stick it on the bulletin board in order. A barista
will take the first sticky note from the board. This way, it is
first-come, first-served. That is fair to everyone.

The coffee shop is working pretty well at this point with one little caveat.

Since
 we now have two cashiers, it becomes confusing when customers walk into
 the store. It is not clear to them where they should go and whom they
should talk to. Joe hires one more person to greet customers and guide
them to the right cashier who is least busy. He names this new employee
the Greeter.

![](https://miro.medium.com/max/1273/1*JLsGlglB8T702niQK3Q87A.png)

At this point, we have a total of six employees working in the coffee shop: one greeter, two cashiers, and three baristas.

# A Successful Coffee Shop

The
 business continues to do well. Joe hires one more cashier and two more
baristas. Now we have a total of three cashiers and five baristas.

If
 we look at the fleet of employees in the coffee shop, almost every
position has multiple employees except for one — the greeter. And the
greeter becomes a critical part of the shop.

The
 coffee shop can be pretty chaotic when the greeter goes to the washroom
 or takes a lunch break. The shop owner decides to hire a second
greeter.

Frankly,
 it is not really necessary the majority of the time and it may feel
like a waste of money. But for the sake of providing a first-class
customer experience, Joe decides to do it anyway.

The
 coffee shop has been very successful at this point. One thing that
bothers Joe is that he never really knows how many coffees are sold each
 day. He realizes that a key component of a successful business is
missing: bookkeeping.

Other than knowing how much coffee is sold each day, here are a few more reasons why bookkeeping is so important:

- Sometimes, there may be mistakes and a customer comes back to the shop to argue
that they ordered a latte, but they were given a cappuccino. We need the records to verify that.
- We want to analyze what is popular and what is not so that we can adapt and adjust the menu in the future.
- By the end of the year, we also need to calculate how much money we make so that we can report taxes.
- We can look at the sales records in the past few days to predict which kind of coffee beans will run out and when.

Finally,
 Joe buys a huge ledger book. He asks the cashiers to write down the
transactions in the ledger book at the same time as they put the sticky
notes on the bulletin board.

![](https://miro.medium.com/max/1273/1*l3WBUIRjbVXNu8DBLaXxiQ.png)

At this point, we have a total of ten employees working in the coffee shop: two greeters, three cashiers, and five baristas.

# A Second Coffee Shop

Finally, Joe decides to take the successful coffee shop to the next level by opening a second store!

With
 the experience of the first coffee shop, it feels straightforward. He
needs to find a new location, hire some employees, buy a new bulletin
board, a new ledger book, and then it is ready to go.

Joe
 picks a location that is on the other side of town. Previously, people
would have to travel across town to buy coffee. Now they can go visit
the store that is closer to them. The customers are happier and it
brings more revenue to the coffee shop.

![](https://miro.medium.com/max/1273/1*jaTH0gdLRGZey0bdaUZeAw.png)

Time
 goes by. It has been almost a year. On one particular day, a pipe
bursts in the kitchen in the first coffee shop. While Joe calls for
contractors to fix the broken pipe and repair/replace some damaged
equipment, he also puts up a big fat sign in front of the store. It
reads:

> Dear Customers,
>
> Unfortunately,
>  we had a flood in our kitchen and we will be out of business for the
> next few days. To get our amazing coffee, you can go to our store at 123
>  King Street.
>
> Sincerely yours,<br/>
> Coffee Shop

While
 the situation is bad and stressful, Joe is glad that he opened the
second store. He is still able to serve those loyal customers who are
willing to head to the second store.

# The End

Here is the end of the story for Joe.

We
 have introduced the cashier, the barista, the greeter, a bulletin
board, and the ledger book. Can you guess what each of them represents
which of the system design jargons at the beginning of the article?

![](https://miro.medium.com/max/1240/1*1VXIXU_SxOwzJGzzGEGdJA.png)

[The answers are on GitHub](https://gist.github.com/yzhong52/6a96ab9c3b5099fa8e91c70b9b25ddb7).
