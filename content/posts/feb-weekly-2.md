+++
categories = []
date = ""
description = ""
draft = true
images = []
slug = "feb-weekly-2"
tags = []
title = "Weekly #2 - New features"

+++
Wow, where did the week go?

Luckily I can answer that question since I use the [Daily Time Tracking](http://dailytimetracking.com/) app!

This week, I put in roughly 40 hours of work in the last 7 days. Let's use this time breakdown as a template for this week's retrospective.

### Engineering: 17 hours, 9 minutes

I often get asked how I prioritize features or decide what to work on next. It's honestly an ever-changing mix of what users want and what I feel like working on. Now that Lunch Money has reached feature parity with most other personal finance apps, I no longer feel the same urgency as I did in our first year to get out as many features as I can.

Granted I have a Canny now so I can see what my users want. While that would drive the roadmap at any other company, one of the ways I exercise my freedom of being a solopreneur and to keep things fun and interesting for me is that unless there is a serious bug, I generally work on whatever I feel most interested in.

For example, I find that I cannot work on two major features one after the other. In between, I need to do some little bug fixes or move off engineering completely for a few days. If I forced myself to keep coding, I'll probably lose interest and that would likely be fatal to my SaaS.

The funny thing is, I sometimes downplay what is going to be a major feature. Literally this next feature came about because I looked at the feature request and said, "well, I'm sure I can knock this one one out quickly".

17 hours later over the span of 3 days, we now offer manual crypto tracking and we already have close to 100 tokens being tracked already. I would call that a win!

### Support: 6 hours, 28 minutes

I don't love that I am spending so many hours on customer support every week. This is something I need to actively work on reducing more. I've written before about how I optimize my customer support flows but I guess this is one of those scaling problems that are good to have now.

Issues related to Plaid cost me the most time, and it's also the most straightforward to handle. Hit Plaid's API for a user's details, confirm the issue, grab some debug logs, and open up a support ticket with Plaid and proceed to play middleman between my user and Plaid. 

I started to write down common Plaid issues and instructions on what I do to handle them and I've already posted an opening for a part-time customer support agent on Upwork. It's super important to me that whoever I hire to interact with our users can uphold Lunch Money's brand voice as friendly, helpful and delightful. We'll see how that goes!

### Setting up for EU expansion: 3 hours, 50 minutes

After nearly 2 years of being shut out of Plaid's EU offerings, I finally received word that we're able to officially expand to Europe and support GDPR-compliant bank syncing for our European users! As such, I've started a pilot program to make sure everything runs smoothly and to have a slow and controlled onboarding of users.

I first reached out to existing users and then sent out a newsletter to all our subscribers with an open call to join the Pilot program. Over 60 people have shown interest so far with nearly 40% of people who are not Lunch Money users.

But why did this take nearly 4 hours? I spent a lot of time compiling a list of emails, writing email templates for users depending on whether they were signed up already and a bit of engineering work to distinguish the EU bank syncing folks from the US/Canada one, since they take a slightly different code path.

### Engineering (General): 6 hours, 10 minutes

File everything from bug fixes to minor improvements here, as what's listed in our latest changelog entry [here](https://feedback.lunchmoney.app/changelog/153).

### Hiring: 3 hours, 33 minutes

As a sort of continuation from [last week's retrospective](https://lunchbag.ca/feb-weekly-1), I hit a bit of a snag while trying to hire for an apprentice. I realized I need to hire someone who was more like a marketing manager/assistant. A Lunch Money user actually reached out and proposed that she and a colleague come onboard as a team to help me on a project basis. It was almost exactly what I wanted to hear and we spent some time going back and forth on expectations. Finally, we jumped on a call to meet face-to-face and even ended up finding out that we grew up within the same neighbourhood in the suburbs of Toronto!

I then spent time writing out a long project statement. I'll essentially have her and her colleague rewrite the copy for our landing page, specifically the feature-specific pages. Deadline should be the end of the month, so we'll see how that goes!

### Preparing email newsletter: 2 hours, 32 minutes

Did it really take me 2 and a half hours to prepare and send out our latest feature newsletter? :facepalm:

### Miscellaneous: 30 minutes

Other random small tasks like replying to emails and setting up Lunch Money for Lunch Money again (spoiler alert: I got massively derailed and barely did any onboarding/walkthrough work!)

# What went well

## Lunch Money

* Netlify published [their case study on the engineering behind Lunch Money](https://www.netlify.com/blog/2021/02/10/the-url-is-the-interface-lunch-money-web-app-scales-on-the-jamstack)! This was really cool to work with Phil Hawksworth on. For a long time, I've been wanting to write a blog post on our architecture so when I found out that Netlify wanted to write one for their blog to spotlight web apps on the Jamstack, I was ecstatic! I'm still in shock that a huge company like Netlify put the time and effort into writing a case study on little ol' me!
* Launched two major features this week– manual crypto tracking and bank syncing support for some EU banks! Both of these features help further differentiate Lunch Money from the other personal finance and budgeting apps out there.
* Got unstuck on the hiring front– excited to see how the project-based work goes for rewriting our landing page material and also fantasizing about the extra time I will regain if I end up hiring someone to help with support.

## Personal life

* Having the week "off" for Lunar New Year was great! It felt nice to wake up every day and have a more-or-less free schedule. The streets were very empty and barely any restaurants were open so I ended up cooking more this week than I have in the last few months.

# What didn't go so well

## Lunch Money

* I wasn't able to get done any of the onboarding/walkthrough material that I set out to do. I get many 1 or 2 cancellation requests every week with the reason "the product is too difficult to use" and a few requests for tutorials on how to get started so it really sucks to feel like the delightfully "simple" part of our tagline is slowly starting to not ring as true anymore. 

## Personal life

* My brand new running shoes broke! A hard piece in between the fabric came loose and now juts out, causing it to chafe against the back of my foot. The retail landscape and return policies in Taiwan are a bit unfamiliar to me and I was worried that since the purchase was from over 30 days ago, that I would be totally out of luck. I went back to the Nike store and they told me that they would take the shoes and start an overseas return process that would likely take 3 (!!) weeks. So I guess in 3 weeks, I'll either be returned my faulty shoes or be given a credit. The worst part is that since it's Lunar New Year, the return process will take a bit longer _and_ there are virtually no sales anymore so my replacement shoes will cost much more than the original ones I bought on sale.

# Next goals

* Make moves on outsourcing tasks so I can reclaim my time and focus on what I enjoy most– engineering & writing.
* Plan out what effective onboarding tutorials and walkthrough guides would look like.