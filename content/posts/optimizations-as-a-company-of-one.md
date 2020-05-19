+++
categories = []
date = 2020-05-18T16:00:00Z
description = "WIP :)"
draft = true
images = []
slug = ""
tags = []
title = "Optimizations as a company of one"

+++
Hello! 👋 My name is Jen and I'm the founder, engineer, designer and customer support at [Lunch Money](https://lunchmoney.app), a personal finance and budgeting web app.

In short, I am a company of one. I am the one who answers the customer support emails and I am the one who codes and deploys new features. I am the one who updates our API docs and knowledge base, the one who writes and sends out our bi-monthly newsletters and the one who designed the logo.

As the company scales, so too must all aspects of my work, which I break down into 4 parts: customer support, engineering, product and marketing. **Finding opportunities for process elimination and simplification is honestly one of the more fun parts of running a business** which is why I'm excited to share some of my most successful strategies and some anecdotes from own experiences in this post.

# Learning to juggle it all

In the last 14 days, here's what I got done across all departments:

* **Product:** Launched an internal beta testers program and two sets of new features to test
* **Engineering:** Wrapped up a 2-week long refactor of some core components on the client-side
* **Engineering:** Launched a major feature: advanced transaction filters
* **Engineering:** Closed 13 tickets related to feature improvements and bug fixes
* **Marketing:** Sent out a newsletter outlining the latest and greatest in Lunch Money
* **Support:** Received 235 inbound support tickets and sent out 466 emails
* **Marketing:** This blog post
* **Support:** Analyzed 100+ survey results on the product
* **Marketing:** Added new pages to the marketing site ([Rules](https://lunchmoney.app/features/rules) and [Collaboration](https://lunchmoney.app/features/collaboration)) and updated the icons in [Features](https://lunchmoney.app/features)

In the last 3 months, I averaged 6.5 hours of work per day for a total of a 45.5 hour work week (as in I don't take weekends off). I feel that in the last few months I have gained nearly full control of my workload and overall, I feel even-keeled.

Weirdly enough, what makes all this work bearable for me is the fact that there is so much variety. I love being able to switch between tasks to keep the job interesting and my mind refreshed.

For instance, working on feature improvements and bug fixes might tire me out at which point I'll switch over to a marketing-related task. This gives me a break while still being productive overall.

_Case in point: I just finished a major refactor and pushed out 2 major features to beta, so writing this blog post right now feels like a vacation for my brain._

If it's not already obvious, I like being hyper-efficient (without burning myself out, obviously). Even though I am a single person, I can still automate, optimize and parallelize processes. 

# Optimizing Customer Support

Offering stellar customer support is imperative to a SaaS business such as Lunch Money, especially in the early stages. It's a great way to leave an impression on your users and turn your first few customers into your champions. Consistently providing great customer support is a long-term investment for your business.

<img src="https://media.giphy.com/media/J5dnUnvAyCc8cHqcJB/giphy.gif"/>

I always thought that if I were to hire someone, it would first be a customer support agent but I've since been moving away from that idea. I've experienced first hand the positive feedback loop that's made possible by having a direct and open line of communication with users and I don't want to risk ideas or frustrations being lost in translation.

According to <a href="https://emailmeter.com">EmailMeter</a>, in April, I received 532 emails and I sent out 930 with an average response time of 13 hours. **I've always believed that customer support would be the most important and the hardest part of the business to scale**, especially if I have the goal of staying a company of one and continuing to respond to all support emails myself.

## How do support tickets work at Lunch Money?

Every page of Lunch Money has access to a "Feedback widget" located at the bottom right corner. Clicking on it opens up a text area wherein users can submit feedback, questions, bug reports, or whatever else is on their mind. My server then bundles up the feedback with relevant user information into an email and sends it directly to my inbox.

![](/uploads/submit-bug.png)

I practice inbox-zero and I view my email as a To-Do list. My personal philosophy is that any unarchived email has an action waiting on me. From the beginning, it made sense for me to combine support emails with any other emails I would get in my inbox because I weigh them all equally in importance.

Finally, no matter how out of hand things got, I would not want to add complexity (or money) to the situation by re-routing support emails to some third-party service. As long as it's just me doing support, I should be able to handle it in a singular place.

## Self-triage support tickets

I'll never forget launch day when we amassed 1000 signups and well over 100 support tickets in the span of a few hours. I stayed up that night replying to every single one before I finally went to bed.

The same situation would happen again whenever Lunch Money experienced a spike in signups, usually once a month.

While this was still sustainable, as in, I could reply to every support ticket within a reasonable amount of time, it wasn't optimal. It was difficult to wake up every day to my main inbox full of unread emails. It was a nagging reminder for all the unknown things I've yet to do.

![](https://media.giphy.com/media/AaBhK3dHsk0XS/giphy.gif)
<span class="caption">Waking up and innocently checking my phone</span>

The biggest issues were therefore:

1. Every email was coming through to my main inbox, and
2. Priority order was dictated by date received which is indicative of the actual urgency 0% of time.

To address these two issues, I revamped the support flow to have users triage their own support tickets. All this required was the addition of a simple dropdown above the text area in the feedback box with the following options:

1. Bug report
2. Question
3. Feature request
4. General feedback

<img src="/uploads/screen-shot-2020-05-15-at-9-15-34-pm.png" style="max-width: 400px" /><span class="caption">This simple feedback widget has processed thousand support tickets since day 1!</span>

I modified the email that gets sent to include this classification in the subject line. Next, I set up some simple filters and labels in Gmail such that emails of different types would skip my inbox and land into one of the subfolder split by tag.

<img src="/uploads/screen-shot-2020-05-15-at-9.19.24-pm.png" style="max-width: 430px" />

With this system in place, support tickets would land in respective folders within my email, but skipping my inbox.

The positive effects of this change were felt immediately. Seeing _Question (4), Bug Reports (2), Feature Requests (4)_ is a million times less stressful than having 10 unread emails sitting in my main inbox. It also feels good to intentionally set aside time to address support tickets at night rather than having them interrupt and distract me as they roll in throughout the day.

The built-in priority system is also helpful. For instance, I'll look at bug reports more frequently than feature requests because a bug report can denote a serious issue within the app whereas a feature request is usually a "nice to have" and doesn't require my immediate attention.

<img src="/uploads/screen-shot-2020-05-19-at-3-50-57-pm.png" style="max-width: 250px" /><span class="caption">This is so much better than seeing 18 unread emails in my inbox.</span>

## Creating specific support flows

While common questions can be quickly identified and handled with the addition of a simple FAQ page, common issues requiring personalized support are a bit trickier to generalize. In Lunch Money's case, I get a lot of support tickets related to bank syncing.

Here is a typical interaction:

**User:** I am having issues with my Chase accounts.  
**Me:** What types of issues are you having?  
**User:** I am not getting transactions.  
**Me:** Please let me know a sample transaction that you're missing and I will look into it for you.

There are at least 3 emails exchanged before the issue can enter the resolution phase.

After a few months of these types of support emails, I implemented a specific support flow for synced accounts to address 99% of the issues that arise. I stuck this in the Details section of synced accounts, right above the big red "Delete Account" button. I was finding the users were hitting this button to "fix" their account, not knowing that this actually makes things more complicated when they eventually re-link the same bank account and end up with duplicate transactions.

<img src="/uploads/screen-shot-2020-05-15-at-9.22.41-pm.png" style="max-width: 400px" />

The flow runs through the common scenarios of bank syncing issues (wrong account balance, missing transactions, delayed syncing, etc) and presents routine resolutions before allowing the user to submit a ticket.

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me now, users will see this notice when they select the "My account is not syncing" option. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

![](/uploads/screen-shot-2020-05-15-at-9-22-53-pm.png)

Similarly, if a user states their account balance is wrong, the form will ask for the correct balance and upon submitting, we've already got all the information we need to start resolving the issue right away.

## Identify and patch pitfalls

Customer support is an effective way to uncover all the pitfalls and ways users are getting confused while using your app. Use these as hints for where you might be missing tooltips or an opportunity to implement a walkthrough. I'll sometimes ask why they were confused or if they noticed the existing tooltips I had in place. Often times I'll find out that the tooltip had confusing language or was too hidden away.

<img src="/uploads/screen-shot-2020-05-16-at-2.32.03-pm.png" style="max-width: 300px" /><span class="caption">Users were getting confused about the purpose of this white line so I added a tooltip</span>

A common question I hear from users outside of US and Canada is when international bank syncing will be available. I've been getting lots of sign ups particularly from the Netherlands lately due to a tech influencer there mentioning Lunch Money in various places over the last few months.

The first few mentions, I received many frustrated support tickets about the lack of bank syncing support. A few converted over to using CSV importing when I mentioned this was a viable option.

Before the most recent mention, I changed the second step of our onboarding screen to include links and options if bank syncing isn't available:

![](/uploads/screen-shot-2020-05-16-at-2.27.58-pm.png)
<span class="caption">The first two options leads the user to another screen where we outline alternative methods for importing transactions. The last link leads users to <a href="https://support.lunchmoney.app/importing-transactions/automatic-imports#support-for-international-banks">this FAQ page</a>.</span>

After being recently plugged in a Dutch podcast, we received hundreds of new sign ups and a spike in support tickets, but not one person inquired about international bank syncing!

# Optimizing engineering & product

## Ship the MVP, then iterate based on feedback

The notion of an MVP should not be tossed after your initial launch. Every major feature should also be thought of as having a minimum viable state. If you spend time trying to tick off every task for a feature before launch, you run the risk of taking too long to ship or leading yourself astray with elements that aren't even important.

Whenever I start on a new major feature, <b>I always start by listing off the Must haves and the Nice-to-haves</b>. The Must-haves are non-negotiable and core to the feature itself where as Nice-to-haves are totally optional and while they may impact user experience, at the end of the day the feature can be shipped without it.

I've definitely convinced myself before that the fancy drag-and-drop functionality is imperative, so it's also important to order your lists in descending order of importance. When it becomes obvious that I need to cut scope and ship as soon as possible, it'll be easy to see that the features to cull are at the bottom of the list.

<img src="/uploads/cycle-1.png" style="border:0px"/>
<span class="caption">Develop your minimum viable feature first, then let user feedback guide subsequent iterations</span>

If any of the missed features are desirable, I would hear about it from users. Then I could validate spending time implementing that feature and in turn making those users extra happy to know that their feedback was heard and addressed. Everybody wins!

## Balance automation and manual work

While automating tasks can save you a lot of time in the long-term, it doesn't always make sense to automate right off the bat. Doing the manual heavy-lifting first will give you a sense of what's useful to automate and when the time is right.

### Automating too late is not a bad thing

I manually handled account cancellations for the first few month.

A user that wanted to cancel their account would click on a button which would trigger an email send to me about this user. I would then email them personally to let them know I would be deleting their data and also ask why they were canceling. I had only ever gotten 2 responses and I would go on to manually delete their data from the database and third-party services.

Eventually, it took an accidental cancellation of a paying user's account to make me realize that I needed a smarter way to handle account deletions.

The current flow in Lunch Money to delete your account involves a quick survey asking for the reason why someone is canceling their account, along with an optional text area to write comments and a checkbox to indicate if they would like to stay on our newsletter for updates. There's also a double confirm button so I can be sure this user really wants to delete their account.

![](/uploads/screen-shot-2020-05-15-at-11.52.40-pm.png)

After this, I still manually cancel their Stripe subscription and manually issue any refunds (for some reason, I don't trust Stripe to handle this automatically for me in a clean way. Call me paranoid from their weird pro-ration strategies) and I manually assign a deletion date to their account which is also used by an automated worker that purges data after trial expirations.

The volume I get for account cancelations (on average less than 1 per day) is not high enough yet for me to automate the rest of this, but if it picks up I'll know what to automate next.

* Automating emails being sent out
* Digests

### But automating too early can be

Something that I'm glad I didn't spend the time to automate was our referral program. If an existing user refers a new user and the new user subscribes to a plan, then both users will receive credit for 1 month. Seems simple enough but under the hood, this can be quite complex. For one, the two users could have signed up with different pricing plans, so we'll have to figure out just how much their credit is worth.

I decided I wanted to just get the referral program out the door first and see just how many people would be using it. Worst comes to worst, I'll be manually applying a lot of credits.

In the end, the referral program didn't bring on as many new users as I thought it would. It was not a pain at all to manually process rewards for those who did, and in fact it was a good experience to figure out all the edge cases. If I had spent time conjuring up all the edge cases and automating this process, it would not have been worth it.

## Keep tasks organized

Whatever your preferred task management system is, it's imperative that it is kept up-to-date, organized and readable! You don't ever want to feel like something is too overwhelming or messy and slowly avoid using it. If it gets to that point, I would suggest starting fresh.

This is what I did when I moved from Asana to ClickUp. Asana is great but had a lot of premium features I wanted, and since at the time, they only sell memberships in groups of 5, it was impossible to justify paying that much just to use their product. On the other head, ClickUp is packed with features all available for a reasonable price of $5.

I was going to export and import tasks but ultimately decided to start fresh. There's nothing worse than having old, stale tasks sit around and cluttering your To Do list.

In Clickup, you can have various lists under a project each with custom statuses. Here's how I have mine set up:

<img src="/uploads/clickup-tasks.png" style="border:0px"/>

During support, I will haphazardly add tasks to Triage. Triage is a safe place– you can add anything you want here and you can worry about it later. I think it's important to have a compartmentalized place where you can dump ideas to sort out later. On the flip side, if your entire To-Do list is treated that way, you probably won't want to be spending much time in there anyway.

Every 2 weeks or so, I will work on polishing up the tasks in Triage and merging them appropriately if a duplicate or similar task exists. Then I'll either move into the Long-term or Short-term section of the Backlog. I will also go through the Backlog to see if anything can be Archived or should be moved to the Current Roadmap.

## Tag low-hanging fruits

Riffing off of my Clickup setup, I use a tag which is the Apple emoji to denote which tasks are low-hanging fruits, that is, quick tasks that usually require as little as one line and as much as 5 minutes to fix.

I find that keeping these around and marking them as such can really help raise spirits on those days where you feel sluggish. Still being able to get something done is a great way to get a quick dose of dopamine that might help you get out of a slump.

# Optimizing marketing

## Timing marketing pushes

At Lunch Money, a big part of our business is employing the services of Plaid for bank syncing. Something to consider is that Plaid charges on a monthly basis. What this means is that if a user signs up on April 30, connects a bank account and doesn't end up subscribing at the end of their 14-day trial, Plaid will charge me for this user in both April & May's invoices.

This realization coupled with my intense aversion to paying more than I need to has shaped a lot of practices at Lunch Money.

For one, our data retention policy used to be 30 days which means if your trial ends and you didn't put in your billing information, we'll consider you "churned" and will delete your data in 30 days. However, this certainly guarantees that I'll be paying one more month than I need to for churned users who connected bank accounts. So this grace period before data deletion has been revised to 5 days.

With a 14-day trial, the potential for a 1 week trial extension and a 5 day grace period, I have realized it is in my best interest to schedule marketing pushes towards the beginning of the month. At longest, a churned user would last 26 days in our system and making sure these 26 days ends before the start of a new month is a priority!

<img src="/uploads/calendar-1.png" style="border:0px;"/>

Therefore, marketing pushes under my control, such as publicizing blog posts and launches will always be in the first few days of the calendar month. Once I switched over to this method, my Plaid bills has gone down significantly and that's always a reason to celebrate.

## Merging marketing and engineering for a combo win

Taking this a step further, the perk of having a spike in new users is that their trial period more-or-less overlap. I've therefore gotten into the following cycle to take full advantage of this:

![](/uploads/marketing-push-trigger.svg)

Day 1-4: Big marketing push, acquire lots of new users over the next few days!

Day 2-7: Usually lots of new support tickets, bug reports, features requests come in. I prioritize the ones I can and get to work. Being able to show these new users that I'm committed to improving Lunch Money based on their feedback is a great and honest "sales tactic".

Somewhere between day 7 and 10, I will send out a newsletter with all the new features and improvements I was able to get done. Doing this within the trial period will (hopefully) show new users that the product is under continuous improvement!

# Optimizing yourself

Lastly, as a company of one, the hard truth is that the company will only ever be as successful as you allow it to be. And sometimes you are your own worst enemy. It's important to practice self-care, delegate when you can and keep yourself well-rounded.

## Write everything down

Our brains are not wired to remember all our shower thoughts long-term. I always have Evernote handy to quickly jot down all sorts of ideas I have, no matter how crazy or obvious. One of the worst feelings and remembering how excited you were about an idea but having no clue what that idea was!

## Have hobbies outside of work

This is super important to stay well-rounded, not only as a person but for your own sanity! What keeps me occupied outside of Lunch Money is learning Chinese. I take 3 classes a week, 1.5 hours each. Even though sometimes it's really hard to peel away from work, I know in the end it's a nice forced break that I probably would otherwise never take.

## Celebrate the small wins

This is something I need to get better at– celebrating the small wins much more than you get down on when things go wrong. Celebrate at every milestone! It doesn't have to be something large and elaborate. Whenever my MRR increases or my user base increases to an arbitrarily special number, I always mention it to my husband and my parents and they always help me find ways to celebrate.