+++
categories = []
date = 2020-05-18T16:00:00Z
description = "WIP :)"
draft = true
images = []
slug = "optimizations-for-a-company-of-one"
tags = []
title = "Optimizations for a company of one"

+++
Hello! 👋 My name is Jen and I'm the founder, engineer, designer and customer support at [Lunch Money](https://lunchmoney.app), a personal finance and budgeting web app.

In short, I am a company of one. I answer the customer support emails and I code and deploy new features. I also manage our <a href="https://developers.lunchmoney.app" target="_blank">API docs</a> and <a href="https://support.lunchmoney.app" target="_blank">knowledge base</a>, poke around the logs when there are issues, write our <a href="https://lunchmoney.app/sample_newsletter" target="_blank">bi-monthly newsletters</a> and I also designed the logo!

As the company scales, so too must all aspects of my work which I break down into 4 parts: customer support, engineering, product and marketing.

**Finding opportunities for process elimination and simplification is honestly one of the more fun parts of running a business**. I greatly attribute these optimizations to how I've been able to stay both solo & sane up until now, currently with 500+ users and $35,000+ ARR. In this post, I'm excited to share my most successful strategies along with anecdotes from my experience working on Lunch Money.

# Learning to juggle it all

In the last 14 days, here's what I got done across all departments:

* **Product:** Launched an internal beta testers program and two sets of new features to test
* **Engineering:** Wrapped up a 2-week long refactor of some core components on the client-side
* **Engineering:** Launched a major feature: advanced transaction filters
* **Engineering:** Closed 13 tickets related to feature improvements and bug fixes
* **Marketing:** Sent out a newsletter outlining the latest new features
* **Support:** Received 239 inbound support tickets and sent out 358 emails
* **Marketing:** This blog post
* **Marketing:** Added new pages to the marketing site ([Rules](https://lunchmoney.app/features/rules) and [Collaboration](https://lunchmoney.app/features/collaboration)) and updated the icons in [Features](https://lunchmoney.app/features)

In the last 3 months, I averaged 6.5 hours of work per day for a total of a 45.5 hour work week (as in I don't take weekends off). Overall, I feel calm and zen despite the ever-increasing workload and responsibilities.

What makes all this work bearable for me is the fact that there is so much variety. I love being able to switch between tasks to keep the job interesting and my mind refreshed.

For instance, working on feature improvements and bug fixes might tire me out at which point I'll switch over to a marketing-related task. This gives me a break while still being productive overall.

_Case in point: I just finished a major refactor and pushed out 2 major features to beta, so writing this blog post right now feels like a vacation for my brain._

To state the obvious, I like being hyper-efficient (without burning myself out, of course). Even though I am a single person, I can still automate, optimize and parallelize processes.

# Optimizing engineering & product

## Ship the MVP, then iterate based on feedback

The notion of an MVP should not be tossed after your initial launch. Every major feature should also be thought of as having a minimum viable state. If I spend time trying to tick off every task for a feature before launch, I run the risk of taking too long to ship or leading yourself astray with elements that aren't even important.

Whenever I start on a new major feature, <b>I always start by listing off the Must haves and the Nice-to-haves</b>. The Must-haves are non-negotiable and core to the feature itself where as Nice-to-haves are totally optional and while they may impact user experience, at the end of the day, the feature can be shipped without it.

It's then helpful to order my lists in descending order of importance. When it becomes obvious that I need to cut scope and ship as soon as possible, it'll be easy to see that the features to cull are at the bottom of the list.

<img src="/uploads/cycle-1.png" style="border:0px"/>
<span class="caption">Develop the minimum viable feature first, then let user feedback guide subsequent iterations</span>

If any of the missed features are desirable, I would hear about it from users. Then I could validate spending time implementing that feature and in turn making those users extra happy to know that their feedback was heard and addressed. Everybody wins!

## Automate later than you need to

While automating tasks can save a lot of time in the long-term, it doesn't always make sense to automate right off the bat.

<img src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png" style="max-width: 480px; border:0px"/><span class="caption">Obligatory XKCD comic (<a href="https://xkcd.com/1205/" target="_blank">link</a>)</span>

Automating too late is not a bad thing. I'll have done the manual work enough times to understand how to eventually automate the task and what edge cases to look out for. I equate it to doing a job yourself before hiring someone– it's always better to grok the requirements first to some degree so you can understand how to best utilize who you've brought on (and appreciate them more!).

A few aspects of Lunch Money which I handled manually first include sending out trial-ending emails, bi-weekly digests summarizing account status and carrying out user-initiated account cancellations.

Something that I'm glad I didn't spend the time to automate at all was our referral program. If an existing user refers a new user and the new user subscribes to a plan, then both users will receive credit for 1 month.

I decided I wanted to get the referral program out the door first and see how many people would be using it. Worst comes to worst, I'll be manually applying a lot of credits.

In the end, the referral program didn't bring on as many new users as I thought it would. It was not a pain at all to manually process rewards for those who did. If I had spent time conjuring up all the edge cases and automating this process, it would not have been worth the time investment.

## Keep low-hanging fruits in your back pocket

In my task management system, I use a tag (🍏) to denote which tasks are low-hanging fruits. For the uninitiated, low-hanging fruits are quick tasks that are easy to knock out, such as one-liners or 5-minute fixes.

<img src="https://media.giphy.com/media/YP1Jb0JNc7kqFDbdjm/giphy.gif"/>

I find that keeping these around and tackling them on days when you feel generally unmotivated can really help raise spirits. Still being able to get something completed and shipped is a great way to get out of a slump.

## Be your own toughest code reviewer

It's easy to throw together code and push to production the second it works locally, but after acquiring a few hundred paying users, I figured I need to be more responsible!

For the past 6 months, I've been thoroughly reviewing my own code after every change. Every major feature, improvement and bug fix lives in a feature branch that I still, by habit, prepend with `jen/`. After verifying everything works great locally and before starting to code review, I always make sure to take some sort of break, whether that's working on a completely unrelated task, going for a meal or going to bed. The point of this is to ensure I'm code reviewing with a clear head.

While adhering to these standards of code reviewing myself may add extra time to my overall process, it could save hours of bug-fixing, answering related support tickets and self-loathing (I'm half-kidding here) down the line if I accidentally ship bad code.

# Optimizing marketing

## Timing marketing pushes

At Lunch Money, a big part of our business is employing the services of Plaid for bank syncing. Something to consider is that Plaid charges on a monthly basis. What this means is that if a user signs up on April 30, connects a bank account immediately and doesn't end up subscribing at the end of their 14-day trial, Plaid will charge me for this user in both April & May's invoices.

This realization coupled with my intense aversion to paying more than I need to has shaped a lot of practices at Lunch Money.

For one, our data retention policy used to be 30 days which means if your trial ends and you didn't put in your billing information, we will delete your data in 30 days. This certainly guarantees that I'll be paying one more month than I need to for churned users who connected bank accounts and is the reason why our data retention policy has since been revised to 5 days.

In total, a user who does not end up subscribing can spend up to 26 days in the Lunch Money system. This comprises of a 14-day trial, the potential for a 1 week trial extension and a 5 day grace period. Assuming enough users connect their bank accounts, the best way to minimize my costs for churned users is to ensure these users' lifetimes are within one calendar month.

<img src="/uploads/calendar-1.png" style="border:0px;"/>

Marketing pushes under my control, such as publicizing blog posts and product launches, are therefore always scheduled in the first few days of the month. When I came to this realization, my next Plaid bill went down for the first time.

## Merging marketing and engineering for a combo win

Taking this a step further, the perk of having a spike in new users is that their trial periods more-or-less overlap. Usually when a new user signs up, they will poke around the product and maybe send in a bug report, a feature request or another piece of feedback. If I reply and address their feedback by putting in a fix or shipping their requested feature within days, more often than not, they end up converting into a happy customer.

I've therefore identified the following cycle to maximize potential conversions from spikes in user signups:

<img src="/uploads/gantt-2.png" style="border: 0px;"/>

After a marketing push, let's say a product launch, I will see an immediate increase in signups lasting about 3 days and then slowly trailing off.

Over the next few days, I'll start hearing from these new users via support tickets. I prioritize responding to them and I get to work. Showing these users that I'm committed to improving Lunch Money based on their feedback is a great and honest sales tactic.

About 3 days before the initial wave of user trials ends, I wrap up my engineering sprint and send out a newsletter detailing the latest features and improvements. This re-enforces to new users that the product is under continuous development.

Finally, we have a drip campaign that automatically notifies a few days before their trial expires and on the actual date of expiry. This period of time is when I typically see most users convert.

# Optimizing Customer Support

Offering stellar customer support is undoubtedly a great way to leave an impression on your users and turn your first few customers into your champions. Consistently providing great service is a long-term investment for Lunch Money.

I always thought that if I were to hire someone, it would first be a customer support agent but I've since been moving away from that idea. I've experienced first hand the positive feedback loop that's made possible by having a direct and open line of communication with users and I don't want to risk ideas or frustrations being lost in translation.

**I've always believed that customer support would be the most important and the hardest part of the business to scale**, especially if I have the goal of staying a company of one and continuing to respond to all support emails myself.

Corroborating data from <a href="https://emailmeter.com">EmailMeter</a> and my database, it seems my optimizations are making a difference. Despite a growing user base, inbound support requests remain fairly steady!

<img src="/uploads/screen-shot-2020-05-21-at-4-20-15-pm.png"/><span class="caption">Handling support on my own should be sustainable at least for the foreseeable future!</span>

## How do support tickets work at Lunch Money?

Every page of Lunch Money has access to a feedback button located at the bottom right corner. Clicking on it opens up a text area wherein users can submit feature requests, questions, bug reports, or whatever else is on their mind. My server then bundles up the feedback with relevant user information into an email and sends it directly to my inbox.

![](/uploads/submit-bug.png)

I practice inbox-zero and I view my email as a To-Do list. My personal philosophy is that any unarchived email has an action waiting on me. From the beginning, it made sense for me to combine support emails with any other emails I would get in my inbox because I weigh them all equally in importance.

## Self-triage support tickets

I've been consistently receiving over 100 support tickets every week for the last 3 months. While this is still sustainable, as in, I can reply to every support ticket within a reasonable amount of time, it's not optimal. It was difficult to wake up every day to my main inbox full of unread emails as a nagging reminder for all the unknown things I've yet to do.

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

While common questions can be quickly identified and handled with the addition of a simple FAQ page, common issues requiring personalized support are a bit trickier to generalize. In Lunch Money's case, I get a lot of support tickets related to bank syncing.

Here is a typical interaction:

**User:** I am having issues with my Chase accounts.  
**Me:** What types of issues are you having?  
**User:** I am not getting transactions.  
**Me:** Please let me know a sample transaction that you're missing and I will look into it for you.

There are at least 3 emails exchanged before the issue can enter the resolution phase.

Eventually, I implemented a specific support flow to address 99% of the issues that arise. I made this accessible from the details pop-up of their synced account, where one would be poking around if something seems amiss.

<img src="/uploads/troubleshooting.png" style="max-width: 400px" />

The flow runs through the common scenarios of bank syncing issues (wrong account balance, missing transactions, delayed syncing, etc) and presents routine resolutions before allowing the user to submit a ticket.

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me now, users will see this notice when they select the "My account is not syncing" option. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

![](/uploads/screen-shot-2020-05-15-at-9-22-53-pm.png)

Similarly, if a user states their account balance is wrong, the form will ask for the correct balance and upon submitting, we've already got all the information we need to start resolving the issue right away.

## Bake support into your product

Customer support is an effective way to uncover all the pitfalls and ways users are getting confused while using your app. Use these as hints for where you might be missing tooltips or an opportunity to implement a walkthrough. I'll sometimes ask why they were confused or if they noticed the existing tooltips I had in place. Often times I'll find out that the tooltip had confusing language or was too hidden away.

<img src="/uploads/screen-shot-2020-05-16-at-2.32.03-pm.png" style="max-width: 300px" /><span class="caption">Users were getting confused about the purpose of this white line so I added a tooltip</span>

A common question I hear from users outside of US and Canada is when international bank syncing will be available. I've been getting lots of sign ups particularly from the Netherlands lately due to a tech influencer there mentioning Lunch Money in various places over the last few months.

The first few mentions, I received many frustrated support tickets about the lack of bank syncing support. A few converted to using CSV importing when I mentioned this was a viable option.

Before the most recent mention, I changed the second step of our onboarding screen to include links and options if bank syncing isn't available:

![](/uploads/screen-shot-2020-05-16-at-2.27.58-pm.png)
<span class="caption">The first two options leads the user to another screen where we outline alternative methods for importing transactions. The last link leads users to <a href="https://support.lunchmoney.app/importing-transactions/automatic-imports#support-for-international-banks">this FAQ page</a>.</span>

After being recently plugged in a Dutch podcast, we received hundreds of new sign ups and an expected spike in support tickets. What was unexpected, however, was how not one person inquired about international bank syncing!

# Optimizing yourself

## Practice context-switching

Shortly after I started working on Lunch Money, <a href="https://lunchbag.ca/lunch-money" target="_blank">I was also freelancing for two different companies (while living abroad in a new city I was excited to discover, no less.)</a>. With limited waking hours in a day and so much I both needed and wanted to do, I ended up getting really good at context-switching.

I would wake up at 7:30am every day to attend a stand-up meeting for one company. By 11:30am, I would have wrapped up 4 hours of work total for both companies just in time to go to the gym and eat lunch. After lunch, I headed over to a co-working space where I'd  finish up any remaining freelancing work before spending the rest of the afternoon and evening on Lunch Money. I juggled all 3 consistently for 9 months before I finally decided it was time to go full-time on my own project.

<img src="/uploads/screen-shot-2020-05-26-at-9-45-19-pm.png" style="border:0;"/>

This intense context-switching and practice of self-discipline trained my brain for life of a solopreneur. Being able to switch between engineering, marketing and customer support in the blink of an eye has been invaluable and knowing how much more I have to do gives me the motivation to get through a tedious task.

## Have hobbies that are not work-related

When I was in high school, I was told that between two otherwise equal candidates– one having 99% average but no extra-curriculars and the other with 89% average but with numerous affiliations with different clubs, the latter is the one who would get accepted to medical school. The reason is because medical schools don't want someone who is all about studying because during stressful times, they might go crazy whereas the one who deliberately makes time for interests will tend to stay more grounded.

Well I didn't even get close to going to medical school, but I feel the lesson can be extracted for any high-stress career. 

Since July 2019, I've been attending in-person classes to strengthen my Mandarin Chinese. While being pulled away for 2+ hours every other day during the work week isn't always welcomed at the time, I usually feel good about getting out of the house or focusing on something that isn't work-related and it allows me to get back into the grind with a clearer mind.

## Celebrate the small wins and have fun

As a company of one, the hard truth is that the company's success is highly dependent on me and will only ever be as successful as I allow it to be, either intentionally or unintentionally. 

But success is also defined by me, and can have multiple levels each bearing their own reason for celebration. I feel incredibly blessed to have a supportive partner and parents in my journey who are willing to celebrate all the milestones, both big (500 users) and small (50 users) with me.

Lastly, I hate calling Lunch Money work because I don't feel like it fits the sentiments generally associated with work. I'd rather equate it to being able to play video games all day and get paid for it. Sometimes I'll hit a hard level but that only makes me want to keep going at it. Genuinely enjoying what you do is the best optimization and will take you far.

<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"/>