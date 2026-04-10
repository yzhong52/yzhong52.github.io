---
title: "Auto Relay: Forward Your SMS"
excerpt: "How I built an Android app to unblock 2-factor authentication for AI agents."
header:
  teaser: /assets/images/Gemini_Generated_Image_47fczl47fczl47fc.png
  overlay_image: /assets/images/Gemini_Generated_Image_47fczl47fczl47fc.png
---

As I've been trying to automate more of my life away with AI agents,
I keep running into the same wall: apps that require 2-factor
authentication via SMS.

The agent can't read my texts. Workflow blocked.

The obvious work around is to forward incoming messages to an 
email address the agent can access.

There are existing apps for this — but most of them have one or more
of these problems:

- Complicated UI
- Ads
- Not free
- Closed source

That last one matters most, especially for something as sensitive as SMS.

Building is cheap these days, so I figured why not just build my own?

**Auto Relay** is a fully open-source Android app that automatically
forwards incoming SMS/RCS messages — minimalist UI, no ads, free, and
every forwarding action is logged as an activity in the app so you
always know what was sent where.

It also supports forwarding to another phone number, which is handy if you (like me) have two phones but don’t want to carry both all the time.

I’ve been using it for a few days now, and it’s been working great.

If you’re building agentic workflows and keep getting blocked by SMS verification, check it out:

https://github.com/yzhong52/auto-relay

![Auto Relay](/assets/images/auto-relay.png)

---

Side note: I used Claude, Gemini, and Codex to build this — and even had them review each other’s code.

Each one filled in gaps the others couldn’t. For example, Claude struggled with RCS handling, which Codex handled quite well. Gemini worked seamlessly with Android Studio and was especially strong at fixing warnings and updating dependencies.

Together, they got the job done.
