---
title: "Introducing Vandaycare.ca"
excerpt: "Finding daycare in Vancouver is notoriously hard. I built a tool that turns a 14-page weekly PDF into an interactive map — filtered by your baby's age."
header:
  teaser: /assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.png
  overlay_image: /assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.png
---

# Introducing Vandaycare.ca: A Daycare With Vacancy Map for Vancouver Parents

As part of parental leave, one of my goals is to figure out daycare for my daughter before I return to work.

That turns out to be much harder than I expected. Daycare spots in Vancouver are limited, and I was told that some parents join waitlists as soon as they know they are pregnant because it can take years to get in.

Westcoast Child Care Resource Centre publishes a weekly PDF of daycares that currently have vacancies or are accepting new applications:
[Vacancy_List_Updated_-_April_2026.pdf](https://www.westcoast.org/application/files/2417/7646/6400/Vacancy_List_Updated_-_April_2026_-.pdf).

It is useful, but also pretty tedious to work through. This week's PDF is 14 pages long, mixes together different age groups and neighborhoods, and still requires manually looking up where each daycare is.

So I built https://vandaycare.ca.

It automatically downloads the weekly PDF, enriches each daycare with more information including geolocation, and renders everything on an interactive map.

I also wanted a way to filter for daycares that accept infants, so I added a birthday input. Based on your child's age, the map filters out irrelevant results automatically.

That means I can quickly see which daycares are actually relevant, where they are, and how to contact them.

I hope this is useful for other parents in Vancouver too. If you're looking for childcare for your little one, give it a try:

https://vandaycare.ca

---

<video controls width="100%" style="border-radius: 8px; margin-bottom: 1rem;">
  <source src="/assets/posts/2026-04-18-introducing-vandaycare-ca/2026-04-18-vandaycare.mov" type="video/mp4" />
</video>

If you have feedback, want to contribute, or spot a daycare entry that looks off, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/yuchen52/), [GitHub](https://github.com/yzhong52/Vancouver-Daycare), [X](https://x.com/yzhong52), or [Medium](https://yuchen52.medium.com/).
