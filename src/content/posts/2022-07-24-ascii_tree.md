---
title: Do you want to draw a tree in plain text?
header:
    overlay_image: /assets/images/adarsh-kummur-zThTy8rPPsY-unsplash.jpg
    teaser: /assets/images/adarsh-kummur-zThTy8rPPsY-unsplash.jpg
    caption: Photo by [Adarsh Kummur](https://unsplash.com/photos/zThTy8rPPsY) on [Unsplash](https://unsplash.com/)
    overlay_filter: 0.5
toc: false
---

Have you ever deal with tree structure in your career as an engineer? Is there a time when you want to leave some comments about the tree structure in code? 

I just built this little tool `ascii_tree` that can render a tree (defined with markdown format) with some ASCII characters.

## How To Use

Step 1. Define the tree structure in markdown format and save that in a file (i.e. `tree.md`):

```
#Root
##Child 1
##Child 2
```

Step 2. Render:

```
$ ascii_tree --input tree.md
        ┌──────┐        
        │ Root │        
        └──┬───┘        
     ┌─────┴──────┐     
┌────┴────┐  ┌────┴────┐
│ Child 1 │  │ Child 2 │
└─────────┘  └─────────┘
```

Source code in GitHub <https://github.com/yzhong52/ascii_tree>. All built in Rust. I would love some feedback and contributions are welcome too!

