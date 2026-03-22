---
title: Highlight All Cells With Formula In Google Sheets
tags:
  - Google Sheets Hacks
toc: false
---

* Step 1: Click on `Formate` > `Conditional Formatting`
* Step 2: In the settings:
  - Change **Apply to range** to the whole sheet (such as A1:AA1006 in this example)
  - Change the **Format rules** to: Custom Formula is `=ISFORMULA(A1:AA)`
* Step 3: Profit!

![center](/assets/images/google-sheets-highlight-formula.png)