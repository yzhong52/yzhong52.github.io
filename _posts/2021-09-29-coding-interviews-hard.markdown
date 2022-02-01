---
title: "Engineering Titles: Whether We Should Have Them"
header:
  overlay_image: /assets/images/kelly-sikkema-CbZC2KVnK8s-unsplash.jpg
  teaser: /assets/images/kelly-sikkema-CbZC2KVnK8s-unsplash.jpg
  overlay_filter: 0.5
  caption: "Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema) on [Unsplash](https://unsplash.com/s/photos/coding-puzzle)"
categories:
  - culture
tags:
  - engineering
  - titles
toc: true
---

There are three types of technical interviews:

- coding
- system design
- behavior

The coding interview is the most essential to software engineers. 

As an entry-level software engineer, you may face 3 - 5 rounds of interviews, with each round ranging from 45 minutes to 1 hour, and they are most likely all coding interviews. Sure you might also get sprinkled a few behavior questions. But they won't hold as much weight since you wouldn't have a whole lot of stories to tell anyway.

As an engineer gain more experience, system design interviews, and behavior interviews become more and more important, especially for tech lead and engineering management roles.
Nevertheless, coding is always in the picture. There is at least still one coding interview round to make sure that you have the basic fundamentals about what software engineer is all about.

Today, let's discuss coding interviews - how it comes to be and why it becomes so hard nowadays.

## The Rocky Road to Become a Coding Interviewer

Comparing to the other two types of interviews, coding interviews are certainly easier to learn.

If you want to become an interviewer for coding interviews, the training process is more or less the following:

1. Come up with a new problem
2. Test the new problem on your fellow colleagues
3. Test the new problem on candidates
4. Graduate as a certified interviewer

Step 1 - comping up with a new interview problem - is the trickiest and most time-consuming. 

**The problem's complexity needs to be just right.**
If it is too hard, then no one can pass. 
If it is too easy, then everybody can pass.
In either case, it is hard to tell the good candidates apart from the bad.

**The problem needs to be novel.** 
Ideally, it should be a problem that cannot be found on the internet directly.
Otherwise, we'll be hiring people that have seen the problems beforehand instead of those that are smart.

**The problem should be interesting.**
It is a huge commitment for candidates to participate in an interview, especially for those who already have a job.
We want to be respectful and grateful.
And we want the candidates to have fun and have a good interviewing experience.

**The problem is relevant to the nature of the work.**
Ideally, the problem should originate from the day-to-day work and can test the skills that a candidate needs to do well in the job.
That's why most companies have banded brain teasers, dynamic programming problems, or NP-hard problems.

I personally spent months and went through multiple iterations before I settled down a set of problems that I was happy with.

More often than not, we don't ask new interviewers to come up with new coding problems. We sometimes try to reuse existing problems that are developed by other interviewers in the company, and sometimes use problems that we can find on the internet (either with or without modifications). 

Training to become an interview is like chopping down trees in a forest. It is not a trivial process. Finding a good interview problem is like find an ax. Without that, one may never become a coding interviewer. With that, the remaining steps will still require work, but it is more predictable. 

## A Known Set of Good Problems

Unsurprisingly, it is very costly to train an interviewer. And because of that, more often than not, we skip the part where we require the new interviewers to come up with original coding problems.

There is another problem with reusing existing problems developed by other employees in the company.

1) The problem set is small since it is hard to come up with new ones. If a problem can now be used by multiple interviewers, it will be challenging for the interview coordinators -- for the same candidates, we have to make sure that the same problem won't get asked multiple times by different interviewers. 
2) As the company grows, and more and more interviewers conducted, coding problems will eventually get leaks. We can require all candidates to sign the non-disclosure agreement (NDA). But inevitably, problems would still get leaked. Imagine a big tech company with 100k engineers. Disregarding turnover, assuming the hiring rate is 10%, then it requires 1 million interviews. Even if there is just 0.1% of candidates disrespect the NDA, there would still have 1000 leaks.

To solve the problem of not having enough coding problems, interviewers eventually turn to the internet for inspiration.

Given the constraint of 45 minutes, there are only so many ways to ask coding questions. Even for the problems that are claimed to be newly invented, we can often find similar problems on the internet. 

If going to interviews tomorrow, don't be too surprised to see the exact same problem that you practiced before on LeetCode. 

## Coding Problems Become Harder and Harder

There is an old Chinese saying "道高一尺，魔高一丈".

If candidates are sheep, then interviewers are wolves. Sheep learn to run faster and faster because they want to survive, and so are the wolves.

Years ago, there aren't any interview practicing materials. New grads would review their Data Structure & Algorithm textbooks to prepare for coding interviews.

In 2008, Cracking the Coding Interview was published. It quickly became the bible for interviewers, and candidates too.
Soon after, interviewers learned to avoid problems from this book since they are all well-known.

Around 2016, LeetCode became a popular coding interview preparation platform. The problem set is constantly growing too, from a bit over a hundred, to a few hundred, now over two thousand!

Problems are tagged on these practicing platforms too. Not only would we know which companies ask which problem, but also how often.
Candidates that know to use these platforms have an unfair advantage over those that do not. 

At this point, it is hard to imagine anyone able to land a job offer at some big tech companies without practicing for interviewers rigorously.

Some companies are trying to fight this. There is an internal document at Google called "The LeetCode Problem", discussing how to deal with this -- to prevent people from practicing on LeetCode to pass the Google interview.

Not only the problems are getting harder and harder, but the requirement for completeness and correctness also becomes higher.

In the past, it might be land a job offer if you can explain the approach well, and leave behind some reasonable pseudo-codes. Now since everyone else is able to produce perfectly clean code in one go, you may look bad if you are making a lot of little mistakes here and there.

And you might have thought you did well coming up with the optimal solution during the interview. But a few days later, you still got a rejection email from the recruiter. It is likely that your interviewer still had 2 - 3 follow-up problems.

It is much like a never-ending war, the bar for coding interviews just gets raised higher and higher.

## Is It Fair?

One day, I was interviewing a seasonal engineer from a solid company/startup. 

He did horribly bad. And he knew that he did horribly bad. 

At the end of the interview, we always give candidates a few minutes to ask questions. So that it is an opportunity for them to learn a little bit more about the company, the culture, the product, or the team. 

For this candidate, he clearly gave up. He complained: 
> "Do you think it is fair? I have decades of industry experience, but I now have to compete with new grads on data structure and algorithm problems?"

He looked sad. And I felt sad.

And there is also [this tweet from Max Howell](https://twitter.com/mxcl/status/608682016205344768?s=20) after falling a Google interview:

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off. 

So, is it fair? 

There is no debate that it is not perfect. We sometimes may have passed on great engineers if they didn't put the hours into preparing for the interviews. But on the other hand, we also are also fairly confident that candidates hired this way, at least, know some computer science fundamentals.

Are there any other alternatives? 

How about we have sample project(s) that candidates can work on in a full development environment? They can use their favorite IDE, with compilers setup if they want. This can simulate a real work environment as close as possible. 

However, it is even more costly to create such project(s). And it would still be hard to be fair for candidates using different programming languages.
If we do end up creating multiple projects, it is still very hard to make sure they share the same level of complexity.

The way that coding interviewers are being conducted nowadays, might not be perfect. But we don't really have other better solutions.

## What Now?

Where would it end up a few years from now?

Would we be able to come up with a better approach to evaluate candidates? Would it be fairer, less time-consuming, and less intense for candidates?

Or would it get even crazier? Would it require the skill for [competitive programming](https://en.wikipedia.org/wiki/Competitive_programming) to land a job in the industry?

It is hard to predict, but I am eager to see. 

I always want to consider it as a game. We are all in the game. The rules of the game might involve overtime. But if we want to play, we have to follow the rules.

IMHO, these are at least what we can do:

As an interviewer, try to avoid problems that you can find on the internet or at least tweak them; try to avoid problems that clearly require practicing, ie. dynamic programming.

As a candidate, prepare for the interviews as hard as you can. Frankly speaking, that may not be the best way to use your time. But you need to do what you need to do. And after the interview, don't share the problems whether you signed the NDA or not.

## Disclaimer

A final disclaimer, the world is big and diverse. All the discussions above are based on my very limited experience. And they might be wrong in a different context.

And what’s your experience? And what are your thoughts? What works and what not? What do you struggle with? What do you enjoy? What do you think can be improved? If you like sharing, I would very much love to hear from you! 
