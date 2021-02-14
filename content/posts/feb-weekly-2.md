+++
categories = []
date = 2021-02-13T16:00:00Z
description = "Wow, where did the week go? Luckily I can answer that question since I time-track! In the last 7 days, I put in roughly 40 hours of work. Let’s use this time breakdown as a template for this week’s retrospective."
draft = true
images = ["/uploads/ogimgblogweekly2.png"]
slug = "feb-weekly-2"
tags = []
title = "Weekly #2 - Prioritization, (more) hiring and a case study!"

+++
Wow, where did the week go?

Luckily I can answer that question since I use the [Daily Time Tracking](http://dailytimetracking.com/) app!

In the last 7 days, I put in roughly 40 hours of work. Let's use this time breakdown as a template for this week's retrospective.

### Engineering: 17 hours, 9 minutes

I often get asked how I prioritize features or decide what to work on next. In the beginning, I worked tirelessly to get Lunch Money to feature parity with other personal financial apps. Now we're past that and it's no longer obvious what the next big feature should be.

Recently I set up a [feature request board](https://feedback.lunchmoney.app) so I (and other users) can see what the top requested features are. While it's been useful and insightful, the most requested features are not necessarily what's next on the docket.

One of the ways I exercise my freedom as a solopreneur is that I generally work on whatever I want. This, for me, keeps things fun, interesting and most importantly, sustainable. Of course, whatever I want usually aligns with what my users want because I want my users to be happy!

If I force myself to keep coding when I don't feel like it, I'd probably lose interest and that would be fatal to my SaaS business. I never want to get to a point where I dread working on Lunch Money.

Being a Lunch Money user myself and chatting with users on a daily basis, I have a really good idea of what features will continue to differentiate Lunch Money from the rest, and what feature updates will improve the experience for existing users. These two principles are always top of mind when I prioritize features.

The other factor is how large of a task I feel like working on– maybe it's been a while since I shipped a major feature (1+ week) and I'm feeling up for it again (they are really draining!). Or maybe I want to knock something out in a day or two. Based on the bandwidth I'm willing to commit for the next task, I scan our Canny to see what feature matches my criteria.

All that being said, the latest new feature for Lunch Money is manual crypto tracking! If users don't want to connect to their wallets or exchanges directly, they can choose from over 300 cryptocurrencies to track manually. We pull in the latest exchange rates every 15 minutes. As far as I know, none of the top personal finance apps out there offer this and we already have close to 100 manually tracked tokens so far.

### Support: 6 hours, 28 minutes

I don't love that I am spending so many hours on customer support every week. This is something I need to actively work on reducing more. I've written before on how I [optimize my customer support flows](https://lunchbag.ca/company-of-one) as a company of one but I guess Lunch Money has since levelled up and this is one of those scaling problems that are good to have.

Technically, I could still keep going and spend time on support, but it's getting to the point where it doesn't make sense. I would rather have 6 extra hours a week to code, chill or do whatever else I want.

Issues related to Plaid come up the most frequently, cost me the most time all the while being the most tedious yet straightforward to handle. It usually involves grabbing some debug logs, opening up a support ticket with Plaid and proceeding to play middleman between my user and Plaid for the next few days.

I've started the process of setting up a shared inbox and writing down common support workflows on how to handle Plaid-related support tickets. I've also posted a position for a part-time customer support agent on Upwork and already I'm seeing some very promising candidates! 

It's super important to me that whoever I hire to interact with our users can maintain Lunch Money's brand voice as friendly, helpful and delightful. I'll likely start them off on just Plaid-related issues as I think it's still important for me to interact directly with users when it comes to bug reports. (Side note– since setting up our Canny, I've gotten close to 0 feature requests in my support inbox!)

### Setting up for EU expansion: 3 hours, 50 minutes

After nearly 2 years of back and forth with Plaid, I finally received word that we're officially able to expand to Europe by supporting GDPR-compliant bank syncing for our European users!

This week, I started a pilot program to have a slow and controlled onboarding of users.

I first reached out to churned users who specifically noted they wanted to wait until EU bank syncing was available. Next, I reached out to existing users. Finally, I sent out a newsletter to all our subscribers with an open call to join the pilot. Over 65 people have shown interest so far and nearly 50% of them are not yet paying Lunch Money users. So far, I am pretty excited about these numbers.

### Engineering (General): 6 hours, 10 minutes

"Minor" bug fixes and "minor" feature improvements don't seem so minor anymore after I realize I spent over 6 hours on them. This is mostly from revamping the visual filter for the Accounts page and supporting multiple file uploads for our CSV importing tool (see our latest changelog entry [here](https://feedback.lunchmoney.app/changelog/153)). Time really flies when you're coding.

### Contractor prep: 3 hours, 33 minutes

To recap from [last week's retrospective](https://lunchbag.ca/feb-weekly-1), I hit a bit of a snag while trying to hire for an apprentice. I realized instead that I need to hire a marketing assistant who could execute. 

A Lunch Money user reached out to me and proposed that she and a colleague come onboard as a team of two to help me with my marketing needs on a project basis. It was almost exactly what I wanted to hear and we spent some time going back and forth on expectations. Finally, we jumped on a call to meet face-to-face and even ended up finding out that we were practically neighbours growing up in the suburbs of Toronto!

I spent time this week writing out a project brief to outline exactly what needs to be done. I'll essentially have her and her colleague rewrite the copy for our [marketing site](https://lunchmoney.app), specifically the feature-specific pages. Deadline should be the end of the month, so we'll see how that goes!

### Preparing email newsletter: 2 hours, 32 minutes

Did it really take me 2 and a half hours to prepare and send out our latest feature newsletter? :facepalm:

### Miscellaneous: 47 minutes

Other random small tasks like replying to emails can really add up!

# What went well

## Lunch Money

* Netlify published [their case study on the engineering behind Lunch Money](https://www.netlify.com/blog/2021/02/10/the-url-is-the-interface-lunch-money-web-app-scales-on-the-jamstack)! For a long time, I've been wanting to write about our architecture so when Netlify proposed spotlighting Lunch Money as a web app on the Jamstack, I was ecstatic! I'm still in shock that a huge and successful company like Netlify put the time and effort into writing a case study on my little app!
* Launched two major features this week– manual crypto tracking and bank syncing support for some EU banks! Both of these features help further differentiate Lunch Money from the other personal finance and budgeting apps out there.
* Got unstuck on the hiring front– excited to see how the project-based work goes for rewriting our landing page and also I'm fantasizing about the extra time I will gain when I hire someone to help with support.

## Personal life

* Having the week "off" for Lunar New Year was great! It felt nice to wake up every day and have a more-or-less free schedule. The streets were very empty and barely any restaurants were open so I ended up cooking a lot (which I enjoy and don't do enough of!).

# What didn't go so well

## Lunch Money

* I wasn't able to get done any of the onboarding/walkthrough material that I set out to do. I get many 1 or 2 cancellation requests every week with the reason "the product is too difficult to use" and a few requests for tutorials on how to get started so it really sucks to feel like the "delightfully simple" part of our tagline is slowly starting to not ring true anymore.

## Personal life

* My brand new running shoes broke! Something came loose inside the fabric and now it  chafes against the back of my foot. I went back to the Nike store and they told me that they will start the return process which would likely take 3 (!!) weeks.

# Next goals

* Make moves on outsourcing tasks so I can reclaim my time and focus on what I enjoy most– engineering & writing.
* Plan out what effective onboarding tutorials and walkthrough guides would look like.