---
title: "OpenVault: Teaching an AI to Be My Banker"
excerpt: "How I built a CLI that lets an AI agent log in to my bank accounts and track my net worth over time."
---

Keeping track of net worth across multiple bank accounts is tediuous.
I used to rely on Mint (mint.com) for exactly this reason: it gave me a single, unified view over time.

But it never worked that well in practice.
Connections were flaky, bank integrations would break, and I wasn’t entirely comfortable trusting a third-party service with all of my financial data.

Despite that, I continued using it until it got shutdown. 

After that, I no longer had a reliable, up-to-date view of my finances.

I think the fragility comes from the integrations. HTML parsers break as soon as a webpage is updated; official APIs are non-trivial since different banks may have different integrations.

I think the root problem is the integrations.
HTML parsers break as soon as a website changes, and official APIs are inconsistent and often difficult to work with across different banks.

Since AI understands websites semantically, what if I just let an AI agetn log in to my various bank accounts and pull the information for me?

That's OpenVault.

Very simple CLI that use LLM to login to all my bank accounts periodically, keep track of all my accounts and their balances over time. 

- Support majority of the banks. As long as there is a website, this AI agent will know how to navigate and download information that I need. It will automatically update its memory as the banking website evolve (self learning and self improvment).
- Fully automated. The only remaining blocker was two-factor authentication. But after I built https://github.com/yzhong52/auto-relay, AI agent can have access to all my two-factor authentication codes. (That's a scary thought, but I trust my agent more than 3rd party app.)


It is only a CLI now. But I think it opens a lot of doors moving forward. 

- Since we have all the financial data across all different institutions, we can have a full understanding of the assets and make better-informed decisions on assets allocation, budgeting, etc.
- Eventually, agents that can take action—moving money, managing payments, even trading. (But this probably need to wait for stronger, more reliable models.)
- We create a pretty yet customized UI on top.

If you are interested in this tool, check it out here https://github.com/yzhong52/OpenVault.

