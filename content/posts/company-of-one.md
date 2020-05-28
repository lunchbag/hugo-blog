+++
categories = []
date = 2020-05-18T16:00:00Z
description = "Hello! 👋 My name is Jen and I'm the founder, engineer, designer and customer support at Lunch Money, a personal finance and budgeting web app."
images = ["/uploads/40k2.png"]
slug = "company-of-one"
tags = []
title = "$40k ARR check-in: Optimizations as a company of one"

+++
Hello! 👋 My name is Jen and I'm the founder, engineer, designer and customer support at [Lunch Money](https://lunchmoney.app), a personal finance and budgeting web app.

In short, I am a company of one. I answer the customer support emails and I code and deploy new features. I also manage the <a href="https://developers.lunchmoney.app" target="_blank">API docs</a> and <a href="https://support.lunchmoney.app" target="_blank">knowledge base</a>, poke around the logs when there are issues, write the <a href="https://lunchmoney.app/sample_newsletter" target="_blank">bi-monthly newsletters</a> and I designed the logo!

As the company scales, so too must all aspects of my work which I break down into 4 parts: customer support, engineering, product and marketing.

**Finding opportunities for process optimization is honestly one of the more fun parts of running a business**. I greatly attribute these to how I've been able to stay both solo & sane up until now, currently with 500+ users and $40,000+ ARR. In this post, I'm excited to share some of my most successful strategies along with anecdotes from my experience working on Lunch Money.

# Learning to juggle it all

In the last 14 days, here's what I got done across all departments:

* **Product:** Launched an internal beta testers program and two sets of new features to test
* **Engineering:** Wrapped up a 2-week long refactor of some core components on the client-side
* **Engineering:** Launched a major feature: advanced transaction filters
* **Engineering:** Closed 13 tickets related to feature improvements and bug fixes
* **Marketing:** Sent out a newsletter outlining the latest new features
* **Marketing:** This blog post
* **Marketing:** Added new pages to the marketing site ([Rules](https://lunchmoney.app/features/rules) and [Collaboration](https://lunchmoney.app/features/collaboration)) and updated the icons in [Features](https://lunchmoney.app/features)
* **Support:** Received 239 inbound support tickets and sent out 358 emails

What makes all this work bearable for me is the fact that there is so much variety (which, of course, is the spice of life!). I love being able to switch between tasks to keep the job interesting and my mind refreshed while still being productive overall.

_Case in point: I just finished a major refactor and pushed out 2 major features to beta, so writing this blog post right now feels like a vacation for my brain._

To state the obvious, I enjoy being hyper-efficient (without burning myself out, of course). Even though I am a single person, I can still automate, optimize and parallelize processes.

# Optimizing engineering & product

## Implement safeguards

<i>Ah, the blissful beginnings of Lunch Money when I'd push code directly to production several times a day.</i>

At 500+ users now, those days are long gone and I've since needed to adopt the more boring but responsible approach of implementing safeguards to prevent shipping faulty code.

For one, <b>I've been thoroughly reviewing my own code before every change</b>. Every major feature, improvement and bug fix lives in a feature branch that I still, by habit from the corporate days, prepend with `jen/`. After verifying everything works great locally, I make sure to take a break first, whether that's working on a completely unrelated task, going for a meal or going to bed. The point of this is to ensure that I'm code reviewing with a clear head.

While adhering to these standards of code reviewing myself may add extra time to my overall process, it potentially saves hours of bug-fixing, answering related support tickets and self-loathing (I'm half-kidding here) down the line if I accidentally ship bad code.

<center><blockquote class="twitter-tweet"><p lang="en" dir="ltr">New phase of Lunch Money– no more pushing major features straight to production 🤯😂 <a href="https://t.co/RYsz7BnU3L">https://t.co/RYsz7BnU3L</a></p>— Jen (@lunchbag) <a href="https://twitter.com/lunchbag/status/1256987437600927744?ref_src=twsrc%5Etfw">May 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center>

<b>I also recently implemented an internal beta-testing program open to Lunch Money subscribers.</b> With more users accessing my app on a regular basis, the stakes are higher to ship a version that's as bug-free as possible.

As an engineering team of one, it's nearly impossible to always get it right the first time, despite having tests (what if I missed an edge case?) or testing locally extensively (how I think my users will use a feature is not always so).

The beta-testing program has provided some additional benefits. It's nice to have a cohort of users with whom I can have a more candid conversation about Lunch Money and it's also a great way to show users that their feedback is valued!

## Automate later than you need to

While automating tasks can save a lot of time in the long-term, it doesn't always make sense to automate right off the bat.

<img src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png" style="max-width: 480px; border:0px"/><span class="caption">Obligatory XKCD comic (<a href="https://xkcd.com/1205/" target="_blank">link</a>)</span>

Automating too late is not a bad thing. I'll have done the manual work enough times to understand how to eventually automate the task and what edge cases to look out for. I equate it to doing a job yourself before hiring someone– it's always better to grok the requirements first to some degree so you can understand how to best utilize who you've brought on (and appreciate them more!).

I manually triggered the emails for bi-monthly account summaries for months because I wasn't confident the sending cadence was reasonable. After observing open rates and collecting user feedback, these are now automated to go out on the 5th & 25th of every month.

Something that I'm glad I didn't spend the time to automate at all was the referral program. If an existing user refers a new user and the new user subscribes to a plan, then both users will receive credit for 1 month.

In the end, the referral program only brought on 11 extra users. It was not a pain at all to manually process rewards for those who did. If I had spent time conjuring up all the edge cases and automating this process, it would not have been worth the time investment.

## Keep low-hanging fruits in the back pocket

In my task management system, I use a tag (🍏) to denote which tasks are low-hanging fruits. For the uninitiated, low-hanging fruits are quick tasks that are easy to knock out, such as one-liners or 5-minute fixes.

<img src="https://media.giphy.com/media/YP1Jb0JNc7kqFDbdjm/giphy.gif"/>

I find that keeping these around and tackling them on days when you feel generally unmotivated can really help raise spirits. Still being able to get something completed and shipped is a great way to get out of a slump.

# Optimizing marketing

## Timing marketing pushes

At Lunch Money, a big part of the business is using the services of Plaid for bank syncing. Plaid charges on a monthly basis which means that if a user signs up on April 30, connects a bank account immediately and doesn't end up subscribing at the end of their 14-day trial, they will charge me for this user in both April & May's invoices.

This realization coupled with my intense aversion to paying more than I need to has shaped a lot of practices at Lunch Money.

For one, the data retention policy used to be 30 days which means if your trial ends and you didn't put in your billing information, your data will be deleted in 30 days. This certainly guarantees that I'll be overpaying for churned users and is the reason why the data retention policy has since been revised to 5 days.

In total, a user who does not end up subscribing can spend up to 26 days in the Lunch Money system. This comprises of a 14-day trial, the potential for a 1 week trial extension and a 5 day grace period. Assuming enough users connect their bank accounts, the best way to minimize my costs for churned users is to ensure their lifetimes are within one calendar month.

<img src="/uploads/calendar-1.png" style="border:0px;"/>

As a result, I always schedule marketing pushes such as blog posts and product launches in the first few days of the month. When I came to this realization, my next Plaid bill went down for the first time.

## Merging marketing and engineering for a combo win

Taking this a step further, the perk of having a spike in new users is that their trial periods more-or-less overlap. Usually when a new user signs up, they will poke around the product and maybe send in a bug report, a feature request or another piece of feedback. If I reply and address their feedback by putting in a fix or shipping their requested feature within days, more often than not, they end up converting into a happy customer.

I've therefore identified the following cycle to maximize potential conversions from spikes in user signups:

<img src="/uploads/gantt-2.png" style="border: 0px;"/>

After a marketing push, let's say a product launch, I will see an immediate increase in signups lasting about 3 days and then slowly trailing off.

Over the next few days, I'll start hearing from these new users via support tickets. I prioritize responding to them and I get to work. Showing these users that I'm committed to improving Lunch Money based on their feedback is a great and honest sales tactic.

About 3 days before the initial wave of user trials ends, I wrap up my engineering sprint and send out a newsletter detailing the latest features and improvements. This re-enforces to new users that the product is under continuous development.

Finally, I have a drip campaign that automatically notifies users a few days before their trial expires and on the actual date of expiry. This period of time is when I typically see most users convert 🤞.

# Optimizing Customer Support

I used to think that if I were to hire someone, it would first be a customer support agent but I've since been moving away from that idea. Users are constantly surprised (in a good way!) when they realize the founder is responding to their bug reports or feature requests directly.

**Consistently providing great customer support is a long-term investment for Lunch Money** as it is undoubtedly a great way to turn customers into champions. As I receive and respond to support tickets, I'm also able to identify and overhaul the common sources of trouble for users.

I've always believed that customer support would be the most important and the hardest part of the business to scale, especially if I have the goal of staying a company of one.

Corroborating data from <a href="https://emailmeter.com">EmailMeter</a> and my database, it seems my changes are making a difference. Despite a growing user base, inbound support emails remain fairly steady!

<img src="/uploads/screen-shot-2020-05-21-at-4-20-15-pm.png"/><span class="caption">Handling support on my own should be sustainable at least for the foreseeable future!</span>

## How do support tickets work at Lunch Money?

A feedback button is located at the bottom right corner of every page. Clicking on it opens up a text area wherein users can submit feature requests, questions, bug reports, or whatever else is on their mind. My server then bundles up the feedback with relevant user information into an email and sends it directly to my inbox.

![](/uploads/submit-bug.png)

## Self-triage support tickets

I practice inbox-zero and I view my email as a To-Do list. My personal philosophy is that any unarchived email has an action waiting on me. From the beginning, it made sense for me to combine support emails with any other emails I would get in my inbox because I weigh them all equally in importance.

I've been consistently receiving over 100 support tickets every week for the last 3 months. While I can still reply to everyone within a reasonable amount of time, it wasn't optimal to wake up every day to my main inbox full of unread emails.

![](https://media.giphy.com/media/AaBhK3dHsk0XS/giphy.gif)
<span class="caption">Waking up and innocently checking my phone</span>

The biggest issues were:

1. Every email was coming through to my main inbox, and
2. Priority order was by date received which is indicative of the actual urgency 0% of time.

To address these, I revamped the support flow to have users triage their own support tickets and I set up some simple filters in Gmail:

<img src="/uploads/filters.png" style="border:0px;" />

With this system in place, support tickets would land in respective folders within my email, but skipping my inbox.

The built-in priority system is also helpful. For instance, I'll look at bug reports more frequently than feature requests because a bug report can denote a serious issue within the app whereas a feature request is usually a "nice to have" and doesn't require my immediate attention.

<img src="/uploads/screen-shot-2020-05-19-at-3-50-57-pm.png" style="max-width: 250px" /><span class="caption">This is so much better than seeing 18 unread emails in my inbox.</span>

## Create specific support flows

While common questions can be quickly identified and handled with the addition of an FAQ page, common issues requiring personalized support are a bit trickier to generalize. In Lunch Money's case, I get a lot of support tickets related to bank syncing.

Here is a sample interaction:

**User:** I am having issues with my Chase accounts.  
**Me:** What types of issues are you having?  
**User:** I am not getting transactions.  
**Me:** Please let me know a sample transaction that you're missing and I will look into it for you.

There are at least 3 emails exchanged before the issue can enter the resolution phase.

Eventually, I implemented a specific support flow to address 99% of the issues that arise. I made this accessible from the details pop-up of their synced account, where one would be poking around if something was amiss.

<img src="/uploads/troubleshooting.png" style="max-width: 400px" />

The flow runs through the common scenarios of bank syncing issues (wrong account balance, missing transactions, delayed syncing, etc). It presents routine resolutions before allowing the user to submit a ticket or requests specific additional information along with the submission.

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me now, users will see this notice when they select the "My account is not syncing" option. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

![](/uploads/screen-shot-2020-05-15-at-9-22-53-pm.png)

# Optimizing yourself

## Practice context-switching

Shortly after I started working on Lunch Money, <a href="https://lunchbag.ca/lunch-money" target="_blank">I was also freelancing for two different companies (while living abroad in a new city I was excited to discover, no less.)</a>. With limited waking hours in a day and so much I both needed and wanted to do, I ended up getting really good at context-switching.

I woke up at 7:30am every day to attend a stand-up meeting for one company. By 11:30am, I wrapped up 4 hours of work total for both companies just in time to go to the gym and eat lunch. After lunch, I headed over to a co-working space where I'd finish up any remaining freelancing work before spending the rest of the afternoon and evening on Lunch Money. I juggled all 3 for 7 months before I finally decided it was time to go full-time on my own project.

<img src="/uploads/screen-shot-2020-05-26-at-9-45-19-pm.png" style="border:0;"/>

This intense context-switching and practice of self-discipline trained me for the life of a solopreneur. Being able to switch between engineering, marketing and customer support in the blink of an eye helps with my overall time efficiency and being constantly aware of the bigger picture is my source of motivation for getting through a tedious task.

## Be grounded & well-rounded

When I was in high school, I remember being told that between two otherwise equal candidates– one having 99% average and no extra-curriculars and the other with 89% average and numerous affiliations with different clubs, the latter is the one who would get accepted to medical school. The reason is because medical schools do not want someone who is all about studying because during stressful times, they might go crazy whereas the one who deliberately makes time for interests will likely stay grounded.

Well I didn't get close to going to medical school, but I feel the lesson can be extracted for any high-stress career. A wearer of many hats is by nature well-rounded after all.

Having hobbies that are not work-related is really helpful. I've been consistently attending in-person classes to strengthen my Mandarin Chinese since July 2019. While being pulled away for 2+ hours every other day during the work week isn't always welcomed at the time, I usually feel good about getting out of the house or focusing on something that isn't work-related and it allows me to get back to the grind with a clearer mind.

<center><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Even though I feel that I'm not due for R&R and that I'd rather code through the weekend, I know it'll be good to get away for a little bit and focus on hobbies I haven't had time for lately, like:<br>- exploring nature 🏞️<br>- reading 📚<br>- catching up on my Mandarin studies 🇹🇼</p>— Jen (@lunchbag) <a href="https://twitter.com/lunchbag/status/1231192764882112513?ref_src=twsrc%5Etfw">February 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center>

## Celebrate the small wins and have fun

As a company of one, the hard truth is that the company's success is highly dependent on me and will only ever be as successful as I allow it to be, either intentionally or unintentionally.

But success is also defined by me, and can have multiple levels each being a reason for celebration. I feel incredibly blessed to have a supportive partner and parents in my journey who are willing to celebrate all the milestones, both big (500 users) and small (5 users) with me.

Lastly, I hate calling Lunch Money work because I don't feel that it fits the sentiments generally associated with work. I'd rather equate it to being able to play video games all day and get paid for it. Sometimes I'll hit a hard level but that only makes me want to keep going at it. Genuinely enjoying what you do is the best optimization and will take you far.

<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"/>