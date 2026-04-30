---
title: "OpenVault: Let an AI Agent Be My Banker"
excerpt: "How I built a CLI that lets an AI agent log in to my bank accounts and track my net worth over time."
---

Keeping track of net worth across multiple bank accounts is tedious.
I used to rely on Mint (mint.com) for exactly this reason: it gave me a single, unified view over time.

But it never worked that well in practice.
Connections were flaky, bank integrations would break, and I wasn’t entirely comfortable trusting a third-party service with all of my financial data.

Despite that, I continued using it until it got shut down.

After that, I no longer had a reliable, up-to-date view of my finances.

I think the root problem is the integrations.
HTML parsers break as soon as a website changes, and official APIs are inconsistent and often difficult to work with across different banks.

Since AI understands websites semantically, what if I just let an AI agent log in to my various bank accounts and pull the information for me?

That’s OpenVault.

Very simple CLI that uses an LLM to log in to all my bank accounts periodically, keep track of all my accounts and their balances over time.

- Works with many banks out of the box. Tested with Schwab, TD, Wealthsimple, Questrade, and Tangerine. In theory, as long as there is a website, the agent will know how to navigate and download information that we need. It will automatically update its memory as the banking website evolves (self learning and self improvement).
- Fully automated. The only remaining blocker was two-factor authentication. But after I built https://github.com/yzhong52/auto-relay, AI agent can have access to all my two-factor authentication codes. 


It is only a CLI now. But I think it opens doors moving forward.

- We can create a pretty yet customized UI on top.
- Since we have all the financial data across all different institutions, we can have a full understanding of the assets and make better-informed decisions on asset allocation, budgeting, etc.
- Eventually, agents that can take action—moving money, managing payments, even trading. (But this probably needs to wait for stronger, more reliable models.)

If you are interested in this tool, check it out here https://github.com/yzhong52/OpenVault.

