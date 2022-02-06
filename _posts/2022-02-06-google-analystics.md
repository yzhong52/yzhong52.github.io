---
title: "Add Google Analytics to minimal-mistakes Jekyll Theme"
header:
  teaser: /assets/images/google_analytics/realtime.png
toc: true
---

In this post, we'll show how to set up google analytics to track your website traffic with minimal-mistakes Jekyll Theme.

## Step-by-step

Step 1: Login to <https://analytics.google.com> to create a new Property. 

![](/assets/images/google_analytics/create_property.png)

Step 2: Add a new data stream.

![](/assets/images/google_analytics/add_data_stream.png)

Step 3: From there, we can find the `MEASUREMENT ID`:

![](/assets/images/google_analytics/copy_measurement_ID.png)

Step 4: Add the following to the `_config.yml` file. And replace `tracking_id` with the `MEASUREMENT ID` from the previous step.

```
analytics:
  provider: "google-gtag"
  google:
    tracking_id: G-**********
    anonymize_ip: true
```

And that's it. 

## Testing

The analytics block is only included when the site is running under production environment. To test locally, we can set the environment to production by prepend the serve command with `JEKYLL_ENV=production`:

```
JEKYLL_ENV=production bundle exec jekyll serve
```

Open <https://analytics.google.com>, and we should be able see the web traffic now being tracked. 

![](/assets/images/google_analytics/realtime.png)