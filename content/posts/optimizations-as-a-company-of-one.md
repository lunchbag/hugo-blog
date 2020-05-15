+++
categories = []
date = ""
description = "WIP :)"
draft = true
images = []
slug = ""
tags = []
title = "Optimizations as a company of one"

+++
Hello! My name is Jen and I'm the founder, engineer, designer and customer support at Lunch Money, a personal finance and budgeting web app.

In short, I am a company of one. I am the one who answers the customer support emails and I am the one who codes and deploys features. I am the one who updates our API docs and knowledge base, the one who writes and sends out our bi-monthly newsletters and I am the one who designed the logo.

In the last 7 days, I averaged 6 hours of work per day for a total of a 45 hour work week which means I also had time to live a normal life outside of work.

The reason I'm sharing this is because I want to demystify the solo founder lifestyle and share some optimizations that I've picked up along the way that has made this attainable for me.

## A "typical" week

A week is never typical. In fact, very rarely do I plan specific tasks more than 2 days ahead of time aside from tasks such as sending out newsletter updates or deploying a set of features.

I typically think about my tasks in terms of product, engineering and marketing. There's also support but that happens regardless of whatever else is going on.

In the last 7 days as the company of one behind Lunch Money, here's what I got done:

* **Product:** Launched an internal beta testers program
* **Engineering:** Wrapped up a 2-week long refactor of some core components on the client-side
* **Marketing:** Sent out a newsletter to 3000+ people about the latest features on Lunch Money
* **Engineering:** Started and finished 2 major features: advanced transaction filters and "every two weeks" recurring
* **Product:** Launched new features (in addition to other improvements and bug fixes) to beta testers
* **Support:** Replied to over 100 support tickets
* **Networking:** Had 5x one hour networking Zoom calls
* **Marketing:** Experienced a surge in sign ups due to being mentioned on a Dutch podcast

## Learning to juggle it all

My favorite thing about being a solo founder is all the different hats I get to wear. I love being able to switch between completely different tasks because I feel it keeps the job interesting and helps refresh my mind.

For instance, working on feature improvements and bug fixes might tire me out and switching over to a marketing tasks allows me to use a different part of my brain and it feels like a break while still being productive overall.

_Case in point: I just finished a major refactor and pushed out 2 major changes to beta, so writing this blog post right now feels like a vacation for my brain._

If it's not already obvious, I like being hyper-efficient (without burning myself out, obviously). Even though I am a solo founder and have only a singular available thread at any given time, I can still automate, optimize and parallelize processes. As a simple example, a few weeks ago I sent out a quarterly user survey to new subscribers. Sending that out quickly took virtually no time but for the next 3 weeks I could work on other things while the survey was collecting responses.

As Lunch Money grows in user base and complexity, I have been able to identify various areas for improvements and optimizations in order to alleviate the overall workload. In this post, I will share my most successful strategies, peppered with anecdotes from my own app and experiences.

## Optimizing Customer Support

Customer support is one of the most important pillars of a SaaS business and should not slip. I always thought that if I were to hire someone, it would be to do customer support but I've been slowly moving away from that idea. The fact that I get to speak directly the users and that users know it's me on the other end of that email is so valuable to Lunch Money's branding and commitment to users and I don't want to risk ideas or frustrations being lost in translation.

On average, I receive almost 400 support emails per month and I had to figure out a way to continuously stay on top of this. I always knew that this would be the hardest part of the business to scale if I wanted to stay a company of one.

### How do support tickets work at Lunch Money?

All support emails go directly to my email inbox. Every page of Lunch Money has access to a "Feedback widget" at the bottom right of the screen. Clicking on it opens up a text area wherein users can submit feedback, questions, bug reports, or whatever else is on their mind and it sends it through to straight to my inbox.

<Screenshot>

I'll never forget launch day when we amassed 1000 sign ups and well over 100 support tickets in the span of a few hours. I stayed up that night replying to every single one before I finally went to bed. I mean, there was no way I could ignore it. I am an inbox-zero fanatic.

Obviously this wasn't sustainable. It was difficult to wake up every day to have my main inbox full of unread emails, but I also didn't want to add complexity (or money) to the situation by re-routing support emails to some third-party service or other inbox.

### Have users self-triage support tickets

One of the best optimizations I've ever made is to have users triage their own support tickets. All this required was the addition of a simple dropdown above the text area in the feedback box with the following options:

1. Bug report
2. Question
3. Feature request
4. General feedback

I modified server code to include this in the subject line. Next, I set up some simple filters and labels in Gmail such that emails of different types would skip my inbox and land into one of the subfolder split by tag.

The best thing about this optimization is that it's free and simple to implement. The second best thing is that it keeps my inbox fairly decluttered. I'm also able to implement a "priority" system when responding to support tickets. For instance, I'll look at bug reports more than feature requests because a bug report can denote a serious issue within the app whereas a feature request is usually a "nice to have" and doesn't require my immediate attention.

The positive effects of this change were felt immediately. Seeing _Question (4), Bug Reports (2), Feature Requests (4)_ is a million times less stressful than having 10 unread emails sitting in my main inbox with the little text preview which can easily derail my current train of thought. Now, it feels good to intentionally address support tickets rather than having them interrupt my day as they come in.

### From canned responses to FAQs

I get a lot of the same questions and feature requests via email. The most common ones are about the Plaid/Capital One integration and whether or not we'll have a mobile app.

In the beginning, I would type the response out by hand and it would vary slightly between every email. Then, I smartened up and pasted this response in an Evernote to eventually create a trove of canned responses to re-use for commonly-asked questions.

Finally, I put together a knowledge base and one of the first pages I implemented was an FAQ. I sat down and wrote a thoughtful answer for each of these questions which I can now direct users to when they ask about it.

Being able to identify the most common questions and making the answers to these widely accessible is a simple way to address these straight away.

### Creating specific support flows

While some common questions are a simple question and answer, there are sometimes common issues that can't quite be generalized with a blanket statement. For instance, I get a lot of support tickets about automatic imports. These are highly personal as they depend on the institution, the type of account, etc.

Here is a typical interaction regarding issues with bank syncing:

**User:** I am having issues with my Chase accounts.  
**Me:** What types of issues are you having? Is it with just one account or multiple accounts?  
**User:** I am not getting transactions.  
**Me:** If you're missing transactions, please let me know a sample transaction and I will look into it for you.

With the above, there are at least 3 emails exchanged before the issue can even begin to enter the resolution phase.

Eventually, I decided to create a specific support flow for bank syncing issues. I stuck this in the Details modal of synced accounts, right above the big red "Delete Account" button. I was finding the users were hitting this button to "fix" their account, not knowing that this actually makes things more complicated when they eventually re-link the same bank account and end up with duplicate transactions.

The specific flow runs through the common scenarios of bank syncing issues (My balance is wrong, I am missing transactions, My account is not syncing, etc) and presents some common resolutions before allowing the user to submit a ticket.

<Screenshot>

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me, users will see this notice when they select the "My account is not syncing" options. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

<Screenshot>

Similarly, if a user states their account balance is wrong, then we'll ask right away what the correct balance should be. Bam, we've already got all the information we need to start resolving the issue the second they submit their ticket!

### Use tooltips to instantly demystify

One of the great things about being the one doing customer support is being aware of all the pitfalls and ways users are getting confused while using your app. Use these as hints for where you might be missing tooltips.

Some things that might be obvious to me as the designer and creator of the app may not be obvious at all to someone who's looking at the UI for the first time. When someone writes in inquiring about a feature, take note and even consider asking why they were confused or if they noticed any existing tooltips you had in place. Maybe your tooltip has confusing language.

## Optimizing engineering

### Keep tasks organized

Whatever your preferred task management system is, it's imperative that it is kept up-to-date, organized and readable! You don't ever want to feel like something is too overwhelming or messy and slowly avoid using it. If it gets to that point, I would suggest starting fresh.

This is what I did when I moved from Asana to ClickUp. Asana is great but had a lot of premium features I wanted, and since at the time, they only sell memberships in groups of 5, it was impossible to justify paying that much just to use their product. On the other head, ClickUp is packed with features all available for a reasonable price of $5.

I was going to export and import tasks but ultimately decided to start fresh. There's nothing worse than having old, stale tasks sit around and cluttering your To Do list.

In Clickup, you can have various lists under a project each with custom statuses. Here's how I have mine set up:

* Project (Engineering)
  * List: Current Roadmap
    * Status: Groomed
    * Status: Ready
    * Status: In Progress
    * Status: Waiting
    * Status: In Beta
    * Status: In Production
    * Status: Done
  * List: Backlog
    * Status: Long-term
      * Tasks that might make sense a few months later
    * Status: Short-term
      * Tasks that will likely be done sooner rather than later
    * Status: Archived
      * Tasks that will not be done, either because it doesn't fit the scope of the product or it's outdated
  * List: Triage
    * This is the only place I allow things to get messy. No tags, just text

### Tag low-hanging fruits

Riffing off of my Clickup setup, I use a tag which is the Apple emoji to denote which tasks are low-hanging fruits, that is, quick tasks that usually require as little as one line and as much as 5 minutes to fix.

I find that keeping these around and marking them as such can really help raise spirits on those days where you feel sluggish. Still being able to get something done is a great way to get a quick dose of dopamine that might help you get out of a slump.

### Always ship the MVP

One thing I've learned is that the notion of an MVP does not end at first launch. Every major feature should also thought of as having a minimum viable state. If you spend time trying to perfect and code every task for a feature before launch, you run the risk of taking too long to ship or leading yourself astray.

For instance, I recently launched Category Groups for nesting categories and creating an organization hierarchy in Lunch Money. The MVP involved a lot of server-side work to make sure budgeting logic was intact and totals were being calculated properly. For example, you can budget for an entire category group as well as the nested categories within, but we shouldn't allow the sum of the nested categories to exceed the category group's budget.

### Automate tasks at the right time

While automating can save you a lot of time in the long-term, it makes sense sometimes to do the manual heavy-lifting in the beginning before spending time to automate something.

#### Account cancellations

Account cancellations were something that I manually handled for the first month-ish. A user who wanted to cancel their account would click on a button which would trigger an email send to me about this user. I would then email them personally to let them know I would be deleting their data and also ask why they were canceling. I had only ever gotten 2 responses and I would go on to manually delete their data from the database and third-party services.

Eventually, it took an accidental cancellation of a paying user's account to make me realize that I needed a smarter way to handle account deletions.

The current flow in Lunch Money to delete your account involves a quick survey asking for the reason why someone is canceling their account, along with an optional text area to write comments and a checkbox to indicate if they would like to stay on our newsletter for updates. There's also a double confirm button so I can be sure this user really wants to delete their account. 

After this, I still manually cancel their Stripe subscription and manually issue any refunds (for some reason, I don't trust Stripe to handle this automatically for me in a clean way. Call me paranoid from their weird pro-ration strategies) and I manually assign a deletion date to their account which is also used by an automated worker that purges data after trial expirations.

The volume I get for account cancelations (on average less than 1 per day) is not high enough yet for me to automate the rest of this, but if it picks up I'll know what to automate next.

#### Referral program

Something that I'm glad I didn't spend the time to automate was our referral program. If an existing user refers a new user and the new user subscribes to a plan, then both users will receive credit for 1 month. Seems simple enough but under the hood, this can be quite complex. For one, the two users could have signed up with different pricing plans, so we'll have to figure out just how much their credit is worth. 

I decided I wanted to just get the referral program out the door first and see just how many people would be using it. Worst comes to worst, I'll be manually applying a lot of credits. 

In the end, the referral program didn't bring on as many new users as I thought it would. It was not a pain at all to manually process rewards for those who did, and in fact it was a good experience to figure out all the edge cases. If I had spent time conjuring up all the edge cases and automating this process, it would not have been worth it.

Account cancelation, workers

## Optimizing marketing

### Timing marketing pushes

At Lunch Money, a big part of our business is employing the services of Plaid for bank syncing. Something to consider is that Plaid charges on a monthly basis. What this means is that if a user signs up on April 30 and connects a bank account, and in May the end up churning, Plaid will charge me for this user in both April & May's invoices.

This realization coupled with my intense aversion to paying more than I need to has shaped a lot of practices at Lunch Money.

For one, our data retention policy used to be 30 days which means if your trial ends and you didn't put in your billing information, we'll consider you "churned" and will delete your data in 30 days. However, this certainly guarantees that I'll be paying one more month than I need to for churned users who connected bank accounts. So this grace period before data deletion has been revised to 5 days.

With a 14-day trial, the potential for a 1 week trial extension and a 5 day grace period, I have realized it is in my best interest to schedule marketing pushes towards the beginning of the month. At longest, a churned user would last 26 days in our system and making sure these 26 days ends before the start of a new month is a priority!

Therefore, marketing pushes under my control, such as publicizing blog posts and launches will always be in the first few days of the calendar month. Once I switched over to this method, my Plaid bills has gone down significantly.

### Merging marketing and engineering for a combo win

Taking this a step further, the perk of having a spike in new users is that their trial period more-or-less overlap. I've therefore gotten into the following cycle to take full advantage of this:

Day 1-4: Big marketing push, acquire lots of new users over the next few days!

Day 2-7: Usually lots of new support tickets, bug reports, features requests come in. I prioritize the ones I can and get to work. Being able to show these new users that I'm committed to improving Lunch Money based on their feedback is a great and honest "sales tactic".

Somewhere between day 7 and 10, I will send out a newsletter with all the new features and improvements I was able to get done. Doing this within the trial period will (hopefully) show new users that the product is under continuous improvement!

## Optimizing yourself

Lastly, as a company of one, the hard truth is that the company will only ever be as successful as you allow it to be. And sometimes you are your own worst enemy. It's important to practice self-care, delegate when you can and keep yourself well-rounded.

### Write everything down

Our brains are not wired to remember all our shower thoughts long-term. I always have Evernote handy to quickly jot down all sorts of ideas I have, no matter how crazy or obvious. One of the worst feelings and remembering how excited you were about an idea but having no clue what that idea was!

### Talk to others

Being a company of one doesn't mean you can't have anyone to lean on. Network with other people, especially those specialize in verticals you're not as familiar with. Of course, make sure you offer as much back as you're looking for.

My company is part of my long-term goal as are the relationships I'm making during this journey.

### Have hobbies outside of work

This is super important to stay well-rounded, not only as a person but for your own sanity! What keeps me occupied outside of Lunch Money is learning Chinese. I take 3 classes a week, 1.5 hours each. Even though sometimes it's really hard to peel away from work, I know in the end it's a nice forced break that I probably would otherwise never take.

### Celebrate the small wins

This is something I need to get better at– celebrating the small wins much more than you get down on when things go wrong. Celebrate at every milestone! It doesn't have to be something large and elaborate. Whenever my MRR increases or my user base increases to an arbitrarily special number, I always mention it to my husband and my parents and they always help me find ways to celebrate.