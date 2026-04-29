---
title: "OpenVault: Teaching an AI to Be My Banker"
excerpt: "How I built a CLI that lets an AI agent log in to my bank accounts and track my net worth over time."
---

Keeping track of net worth across multiple bank accounts is surprisingly hard. I was a big fan of mint.com for exactly this reason — it gave me a single view of everything over time.

But that didn't work very well at the time. It suffers from flakiness - The bank connections broke from time to time. I also had doubts about how much I should trust a 3rd party company with all my financial information.

Despite that, I continued using it until it got shutdown. 

Then I didn't always have an up-to-date view of my own finances.

I think the fragility comes from the integrations. HTML parsers break as soon as a webpage is updated; official APIs are non-trivial since different banks may have different integrations.

I think LLMs can change that story. We don't have to create fragile HTML parsers or integrate with various unreliable APIs. Since AI understands websites semantically, what if I just let an AI log in to my various bank accounts and pull the information for me?

That's OpenVault.

Very simple CLI that use AI to login to all my bank accounts periodically, keep track of all my accounts and their balances over time. 

- Support 100% banks. As long as there is a website, this AI agent will know how to navigate and download information that I need. It will automatically update its memory as the banking website evolve (self learning and self improvment).
- Fully automated, the only blocker was two-factor authentication. But after I built https://github.com/yzhong52/auto-relay, AI agent can have access to all my two-factor authentication codes. That's a scary thought, but I trust my agent more than 3rd party app.

If you are interested in this tool, check it out here https://github.com/yzhong52/OpenVault.

It is only a CLI now. But I think it opens a lot of doors moving forward. 

- Since we have all the financial data across all different institutions (banks), we can have a full understanding of the assets and make better-informed decisions on assets allocation: budgeting, fraud detection.
- We can let agents to login to different accounts and do trades, manage & monitor loan payments, etc. for us. But this probably need to wait for stronger more power models, in case it goes rogue.
- We can vibe a pretty yet customized UI on top just like mint.com
