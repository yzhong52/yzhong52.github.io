---
title: "Introducing Vandaycare.ca"
excerpt: "Finding daycare in Vancouver is notoriously hard. I built a tool that turns a 14-page weekly PDF into an interactive map — filtered by your baby's age."
header:
  teaser: /assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.png
  overlay_image: /assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.png
---

# Introducing Vandaycare.ca: A Daycare With Vacancy Map for Vancouver Parents

As part of parental leave, one of my goals is to figure out daycare for my baby girl before I return to work.

However, it is notoriously challenging to find daycare in Vancouver because of the limited spots available. I was told that parents have to join a waitlist as soon as they know they are pregnant, since it can take years before they get accepted.

On the website https://www.westcoast.org/choosing-child-care/search they publish a pretty useful PDF weekly, listing the daycares that are currently available or accepting new applications. However, this is an aggregation of manual inputs. It is 14 pages long this week([Vacancy_List_Updated_-_April_2026.pdf](https://www.wstcoast.org/application/files/2417/7646/6400/Vacancy_List_Updated_-_April_2026_-.pdf)) with a mix of daycares across all ages in various locations.

It is incredibly tedious to parse through this PDF week over week, look up where they are, etc.

So I built a tool https://vandaycare.ca. It automatically downloads the PDF, finds out more information about each daycare including its geo location, and renders it on a map.

I also wanted to filter for daycares that accept babies under 1 year old. So I added a birthday input, and the map view automatically filters out the irrelevant daycares.

The remaining daycares matching my baby girl's age are rendered nicely on the map. I can then easily see where they are, check their info (phone number, email, etc.), and decide if I'd like to get in touch.

I hope this will be useful for other parents in Vancouver as well. If you are also looking for daycare for your little one, check it out! 

---

<video controls width="100%" style="border-radius: 8px; margin-bottom: 1rem;">
  <source src="/assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.mov" type="video/mp4" />
</video>

If you'd like to contribute or have feedback, you can reach out to me on [LinkedIn](https://www.linkedin.com/in/yuchen52/), [GitHub](https://github.com/yzhong52/Vancouver-Daycare), [X](https://x.com/yzhong52), or [Medium](https://yuchen52.medium.com/).

