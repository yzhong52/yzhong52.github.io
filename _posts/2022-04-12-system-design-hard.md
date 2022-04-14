---
title: "Why System Design Are So Hard?"
excerpt: "And how should you deal with it?"
header:
  overlay_image: /assets/images/denys-nevozhai-_QoAuZGAoPY-unsplash.jpg
  teaser: /assets/images/denys-nevozhai-_QoAuZGAoPY-unsplash.jpg
  overlay_filter: 0.5
  caption: "Photo by [Denys Nevozhai](https://unsplash.com/photos/_QoAuZGAoPY) on [Unsplash](https://unsplash.com)"
tags:
  - Career
  - Distributed Systems
toc: true
---

A while back, I wrote a post about [Why Coding Interviews Are Getting So Hard?](https://medium.com/p/5a8231326299) Similar to coding problems, system design is also an important part of the interview process, especially when you are interviewing for any backend system roles.

Arguably, system design is more important than coding. Coding interviews often determine whether or not you will get an offer, whereas system design interviews determine what level of offer it will be. For senior roles, there sometimes can be even more system design rounds than coding rounds.

A lot of people find system design interviews intimidating. That includes myself, and a lot of co-workers and friends that I talk to. Today, I would like to spend some time discussing why system design interviews are so hard.

## Where Does System Design Come From

As complex as it may sound, system design is actually very simple at the core. Any large-scale distributed systems consist of server machines (computers). And each machine has three important resources: CPU, memory, and disk.

The problem is that each of these resources is finite. If we can infinitely scale up, then we wouldn’t have to deal with a lot of the problems that we are going to discuss in system design.

What happens if we cannot fit the data we need in memory? What happens if we cannot store the data on a disk on a single machine? What if the computation is so expensive that it will take forever for a single machine to solve? All these are simple reasons why we want more than one machine in the system.

As a matter of fact, even if we can infinitely scale up, such that we have a machine that has more CPU cores, more memory, and disk storage than we need, we would still want multiple machines. That’s because machinery is never reliable. They can break at any given point in time. Disk, CPU, and memory, all can fail, and so are other glue components in a machine.

Multiple machines are connected via a network. However, network connections are also unreliable. Machines can send packages to each other with various protocols. Unfortunately, none of the protocols can guarantee that a package will be delivered successfully.

Network, similar to CPU, Memory, and disk, is also a finite resource. Topologically, we also need to think about how to layout the machines and the applications so that we can avoid saturating the network link.

We have to consider natural disasters like storms, lightning strikes, floods, earthquakes, etc. With that, we introduce multiple data centers to deal with [disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery). It may seem intimidating when thinking about multiple data centers or multiple regions. By the end of the day, the only thing that is drastically different is network latency, everything else is more or less the same.

Data are often replicated for higher durability, not only across multiple machines but also across multiple data centers. This way, when a subset of machines dies, we would still be able to retrieve the data from some other machines.

Then how do we deal with inconsistency? What if the same piece of data stored on machine A and machine B are different? We can use master-slave architecture. We still need to decide which machine is the primary and which are the secondaries. There comes the need for [leader election](https://aws.amazon.com/builders-library/leader-election-in-distributed-systems/). Then various approaches for solving consensus are developed, such as the very famous [Paxos protocol](https://martinfowler.com/articles/patterns-of-distributed-systems/paxos.html).

Another problem with multiple machines is time synchronization. Each machine has a clock of its own. Even though we tried our best to synchronize them, because there are network delays, there is no way to be absolutely precise. How do we know who is the first to book the last room in a hotel on a particular day? We then need to use some [distributed lock](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html).

And so far, all the discussions above only focus on the system itself. But we haven’t paid much attention to the user traffic. To reduce the latency for end-users, we want to deploy machines closer to the users. They are sometimes referred to as [edge locations](https://www.lastweekinaws.com/blog/what-is-an-edge-location-in-aws-a-simple-explanation/), or [POP (point of presence)](https://www.cs.unc.edu/xcms/wpfiles/50th-symp/Moorthy.pdf).

Starting from a few fundamental resources (CPU, memory, disk, network), we discussed a few system design concepts. However, we only covered a small subset of them, and there are a lot more, for example, DNS, load balancers, service registry and discovery, databases, caches, distributed message queues, authentication (security), and the list goes on. And a lot of these are complex topics of their own.

That’s what system design is mostly about — using a lot of the higher-level components to solve the problem of unreliable machines with finite resources.

## A Broad Domain

System design problems are almost always presented as some product or product feature. Here are some examples:

- When interviewing for Robinhood, you may get asked about how to design a trading system.
- When interviewing for Airbnb, you may get asked about how to design a hotel booking system.
- When interviewing for Amazon, you may get asked about how to design an online marketplace.
- When interviewing for Netflix, you may get asked about how to video recommendation system.
- When interviewing for Facebook, you may get asked about how to design a chat application.
- …

Engineers tend to ask about a system that they work on daily. On the other hand, there is also no guarantee that you will be asked about the system that the team is building because they might assume that it is too easy to guess.

That’s one of the first reasons why system design feels so intimidating. Each company is in a different domain. One domain can be drastically different than another. We never know what we will get asked to design. Depending on the requirements for reliability and latency, the approach that we can take can be drastically diff from one another.

## Not Related to Your Work

A system design interview is similar to a coding interview in the sense that neither of them is directly related to your day-to-day work.

For coding, you may be asked to solve a graph problem with dynamic programming and bit manipulation. But it is rarely something that you need to implement for real at work.

That’s similar with system design. You might have years of experience working as a system engineer managing a banking transaction system that focuses on high reliability and audibility. The fact that you cannot design an efficient chat application within 30 minutes, does not necessarily mean that you are a bad engineer. You might be a database engineer building the most efficient and reliable database system used by the millions, but you may not have knowledge or need to be knowledgeable about the different types of [load balancers](https://www.nginx.com/resources/glossary/load-balancing/), since that’s never something that you will have to deal with at work.

The world is not only complex, but also constantly evolving. Even if you are a seasoned veteran Software Engineer with years of experience, may have in-depth knowledge about a specific type of system. But system design, in general, requires a much greater breadth of knowledge than just your day-to-day work.

## Vague Problem Statement

It is common that the problem statement is vague to begin with. For example,

> Interviewer: “How do you design a deployment system?”
> 

Scenario 1:

You thought “Oh no, I’ve never heard about a deployment system. How do I go about designing one?” You get nervous, trying to reach the back of your brain trying to remember where you might have heard about this term. You couldn’t come up with anything meaningful to say. Your heart starts beating and beads of sweat start dripping down your forehead. You hope that you can dig a hole in the ground and jump inside. That is it. it is time to pack your bag and go home. How miserable, you thought.

Scenario 2:

You said “Aha, I’ve dealt with that before with my current job. I know exactly how it should be. We will use Jenkins. It is free and open-source. And our code can be built and deployed with Jenkins. Done. Quick and easy.” Nailed it in one minute. Now what? Let’s move on to the next question?

Actually, the interview might be trying to ask about a system for the fire department to effectively deploy firefighters to the field in wildfire season.

---

The two scenarios above are a bit extreme but hopefully, you get the idea that they are both bad.

They are intentionally vague to mimic the real-world work environment where the requirement may not be clear. It is up to the candidate to ask for follow-up questions to clarify.

In system design interviews, only half of it is about evaluating your breadth and depth of knowledge, the other half is about evaluating your communication skills.

The fact that you have to ask questions to clarify the intention of the interview can feel very unnatural. As a candidate, It might feel like you are the interviewer for a moment. It is something to get used to and needs some practice. To a certain degree, it may even feel like role play.

If you are not familiar with the system being asked, you are supposed to ask a lot of questions to learn about what it is and then work on a solution. If you are familiar with the system, you are still supposed to ask a lot of questions to make sure that you gather the requirement accurately without jumping to any conclusion prematurely.

If you don’t know these expectations, you might get confused. Why is the interviewer being such a snob asking such a weird question?

## There Is No Right Answer

Unlike coding problems, there are some good and bad solutions, there is an optimal solution. In system design, there is hardly any answer is the optimal solution.

For example, in the recent decade, there are a lot of hype about [NoSQL](https://en.wikipedia.org/wiki/NoSQL). One common argument for NoSQL is because of it is more scalable than traditional SQL databases. However, it is also well known that Facebook, having billions of users, [stores most of its user data in MySQL](https://www.youtube.com/watch?v=5RfFhMwRAic); YouTube, with billions of monthly viewers, also [stores the metadata in MySQL](https://www.youtube.com/watch?v=5yDO-tmIoXY). Not debating the fact that NoSQL is more scalable in general, it is also important to point out the fact that there is argumentation to be made either way.

System design in some sense is like playing with Lego. After learning all the available components in a large-scale distributed system, designing a new system is about putting boxes on the canvas and drawing some arrows between them. Candidates often worry too much about choosing the most efficient tool to draw the most elegant boxes and arrows. Especially in remote settings, how do we do system design interviews without a whiteboard? Can we effectively draw with a mouse and keyboard? Actually, being able to draw a nice diagram is not the hard part. It doesn't matter too much.

What matters is explaining why you choose each of the box, what are the trade-offs, what are other alternatives, etc. If you decided to use [HBase](https://hbase.apache.org/) as the database, you have to explain why. Why not use [Cassandra](https://cassandra.apache.org/_/index.html), why not [PostgreSQL](https://www.postgresql.org/), why not [Hive](https://hive.apache.org/)? How do you handle indexing and [sharding](https://en.wikipedia.org/wiki/Shard_%28database_architecture%29)? How do you avoid hot-spotting problems? How do you make sure the system can scale and meet increased demand? How do you handle failures?

System design is never about getting the optimal solution. It is about understanding the requirements. It is about proposing various options and discussing their trade-offs. It is about knowing the what & why and being able to communicate them well.

## What’s Next

In coding interviews, you may spend months preparing for it and still fail interviews left and right. Then you might start questioning the meaning of life. Why am I doing this? What values do I bring to the society by practicing over and over again how to [trap rainwater with hypothetical cubs](https://leetcode.com/problems/trapping-rain-water/)? Why am I not using this time learning new technologies that I can use in my work or I can use to launch a new startup?

System design interviews are different.

A lot of system design interviews are focusing on real-world, hard, and practical computer problems. And a lot of these problems, you may never encounter at work if you don’t actively look for them.

Even though system design seems to be a very broad and never-ending topic, it too, has a limited set of problems and a limited set of approaches. They are fun to learn and they are useful to learn too.

By systematically studying system design, you will likely be able to look at the problems you have at work from a different angle. When presented with a problem, you can come up with 2 or 3 different approaches and can articulate the trade-offs better. You may point out more points of failure and come up with more effective ways to handle the failures.

By tackling all these hypothetical scalability issues, chances are, by the time you have a great idea for a startup, this knowledge can help you bypass a lot of the early pitfalls. Hopefully, it is less likely that you will build a system that is not scalable and causes a lot of problems down the road.

One of the beauties of system design is that there are no limits. There are new theories being proposed over time, new algorithms being developed, and better solutions being implemented. Let’s be open-minded. Stay hungry. And keep learning!

That’s it for today. Thanks for reading! I am hoping to complete this series by writing one piece for behavior problems too. But that’s for another day.

{% include published link="https://betterprogramming.pub/47a7473a5d9c" %}
