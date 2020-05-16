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
Hello! 👋 My name is Jen and I'm the founder, engineer, designer and customer support at Lunch Money, a personal finance and budgeting web app.

In short, I am a company of one. I am the one who answers the customer support emails and I am the one who codes and deploys features. I am the one who updates our API docs and knowledge base, the one who writes and sends out our bi-monthly newsletters and the one who designed the logo.

# A "typical" week

A week is never typical as there is an endless list of things to do and all that changes are the priorities.

In the last 7 days as the company of one behind Lunch Money, here's what I got done:

* **Product:** Launched an internal beta testers program
* **Engineering:** Wrapped up a 2-week long refactor of some core components on the client-side
* **Marketing:** Sent out a newsletter to 3000+ people about the latest features on Lunch Money
* **Engineering:** Started and finished 2 major features: advanced transaction filters and "every two weeks" recurring
* **Product:** Launched and announced new features (in addition to other improvements and bug fixes) to beta testers
* **Support:** Replied to over 100 support tickets
* **Networking:** Had 5x one hour networking Zoom calls
* **Marketing:** Experienced a surge in sign ups due to being mentioned on a Dutch podcast

# Learning to juggle it all

My favorite thing about being a solo founder is all the different hats I get to wear. I love being able to switch between tasks to keep the job interesting and my mind refreshed.

For instance, working on feature improvements and bug fixes might tire me out at which point I'll switch over to a marketing-related task. This allows me to use a different part of my brain which feels like a break while still being productive overall.

_Case in point: I just finished a major refactor and pushed out 2 major features to beta, so writing this blog post right now feels like a vacation for my brain._

If it's not already obvious, I like being hyper-efficient (without burning myself out, obviously). Even though I am a solo founder and have only a singular available thread at any given time, I can still automate, optimize and parallelize processes. As a simple example, a few weeks ago I decided I should send out a user survey to new subscribers. I realized I should immediately take the time to prepare that because once it's sent out, I could forget about it for 3 weeks while responses trickle in. After I finish my next few tasks, I'll have a bunch of survey results waiting for me to parse and analyze.

In the last 3 months, I averaged 6.5 hours of work per day for a total of a 45.5 hour work week (as in I don't take weekends off). I'm also not breaking my back running my business and I have time to live a normal life outside of work.

I would greatly attribute being able to make it this far to the optimizations I've identified and implemented when the time called for it. 

As the company scales, so too must all aspects of my work, which I break down into 4 parts: customer support, engineering, product and marketing. Finding these opportunities for process elimination and simplification is honestly one of the more fun parts of running a company which is why I'm excited to share some of my most successful strategies and some anecdotes from own experiences. 

# Optimizing Customer Support

Good customer support is imperative to a SaaS business such as Lunch Money, especially in the early stages. Showing your users that their feedback is heard and makes a difference is a great way to build customer loyalty and turn your first few customers into your champions. Consistently providing stellar customer support is a long-term investment for your business.

I always thought that if I were to hire someone, it would first be a customer support agent but I've since been moving away from that idea. I've experienced first hand the positive feedback loop that's made possible by having a direct and open line of communication with users and I don't want to risk ideas or frustrations being lost in translation.

On average, I receive 400 support emails per month. I always had a hunch that customer support would be the most important and the hardest part of the business to scale, especially if I wanted to stay a company of one.

## How do support tickets work at Lunch Money?

All support emails go directly to my email inbox. Every page of Lunch Money has access to a "Feedback widget" located at the bottom right corner. Clicking on it opens up a text area wherein users can submit feedback, questions, bug reports, or whatever else is on their mind. It then gets sent straight through to my inbox.

![](/uploads/screenshot-submit-bug-3.png)

I'll never forget launch day when we amassed 1000 sign ups and well over 100 support tickets in the span of a few hours. I stayed up that night replying to every single one before I finally went to bed. I am an inbox-zero fanatic and I view my email as a To-Do list. My personal philosophy is that any email that is not archived has an action waiting on me.

Obviously, this wasn't sustainable with the volume of support emails I was receiving on a daily basis. It was difficult to wake up every day to my main inbox full of unread emails. It was the worst kind of reminder of all the things I've yet to do.

![](https://media.giphy.com/media/AaBhK3dHsk0XS/giphy.gif)

Finally, I didn't want to add complexity (or money) to the situation by re-routing support emails to some third-party service or other inbox and I still wanted support tickets to come directly to my inbox.

## Self-triage support tickets

I realized seemingly much too late that I could have users triage their own support tickets. All this required was the addition of a simple dropdown above the text area in the feedback box with the following options:

1. Bug report
2. Question
3. Feature request
4. General feedback

![](/uploads/screen-shot-2020-05-15-at-9.15.34-pm.png)

I modified the email that gets sent to include this classification in the subject line. Next, I set up some simple filters and labels in Gmail such that emails of different types would skip my inbox and land into one of the subfolder split by tag.

![](/uploads/screen-shot-2020-05-15-at-9.19.24-pm.png)

With this system in place, support tickets would land in respective folders within my email, but skipping my inbox.

The positive effects of this change were felt immediately. Seeing _Question (4), Bug Reports (2), Feature Requests (4)_ is a million times less stressful than having 10 unread emails sitting in my main inbox. It feels good to be able to intentionally set aside time to address support tickets at night rather than having them interrupt and distract me as they roll in throughout the day.

I'm also able to instantly prioritize support tickets. For example, I'll look at bug reports more frequently than feature requests because a bug report can denote a serious issue within the app whereas a feature request is usually a "nice to have" and doesn't require my immediate attention.

![](/uploads/screen-shot-2020-05-15-at-10.49.27-pm.png)

## Creating specific support flows

While common questions can be quickly identified and handled with the addition of a simple FAQ page, common issues requiring personalized support may arise. In Lunch Money's case, I get a lot of support tickets related to bank syncing.

Here is a typical interaction:

**User:** I am having issues with my Chase accounts.  
**Me:** What types of issues are you having?  
**User:** I am not getting transactions.  
**Me:** Please let me know a sample transaction that you're missing and I will look into it for you.

There are at least 3 emails exchanged before the issue can enter the resolution phase.

Eventually, I implemented a specific support flow for bank syncing issues to address 99% of the issues that arise. I stuck this in the Details section of synced accounts, right above the big red "Delete Account" button. I was finding the users were hitting this button to "fix" their account, not knowing that this actually makes things more complicated when they eventually re-link the same bank account and end up with duplicate transactions.

![](/uploads/screen-shot-2020-05-15-at-9.22.41-pm.png)

The flow runs through the common scenarios of bank syncing issues (My balance is wrong, I am missing transactions, My account is not syncing, etc) and presents related resolutions before allowing the user to submit a ticket.

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me now, users will see this notice when they select the "My account is not syncing" options. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

![](/uploads/screen-shot-2020-05-15-at-9.22.53-pm.png)

Similarly, if a user states their account balance is wrong, the form will ask for the correct balance and upon submitting, we've already got all the information we need to start resolving the issue right away.

## Use text elements to demystify

Customer support is an effective way to uncover all the pitfalls and ways users are getting confused while using your app. Use these as hints for where you might be missing tooltips or an opportunity to implement a walkthrough.

![](/uploads/screen-shot-2020-05-16-at-2.32.03-pm.png)

A common complaint or reason for cancellation is that international users realized much too late that automatic bank syncing isn't available outside of US/Canada. Even though I tried to communicate this as much as I could in our landing page, 

![](/uploads/screen-shot-2020-05-16-at-2.27.58-pm.png)

Certain elements and concepts that might be obvious to me as the designer and creator of the app may not be obvious at all to someone who's looking at the UI for the first time. When someone writes in inquiring about a feature, I sometimes ask why they were confused or if they noticed the existing tooltips I had in place. Often times I'll find out that the tooltip had confusing language or was too hidden away.

# Optimizing engineering & product

## Always ship the MVP

The notion of an MVP should not end at first launch. Every major feature should also be thought of as having a minimum viable state. If you spend time trying to tick off every task for a feature before launch, you run the risk of taking too long to ship or leading yourself astray with elements that aren't even important.

For instance, I recently launched the ability to nest categories into Category Groups. The MVP involved a lot of server-side work to make sure budgeting logic was intact and totals were being calculated properly. For example, you can budget for an entire category group as well as the nested categories within, but we shouldn't allow the sum of the nested categories to exceed the category group's budget. We also want to make sure the monthly spending for a category group correctly reflects the sum of spending of the children categories.

Once I got that core logic built out, I started working on the front-end. The spectrum of what I could have accomplished here was quite large. At the minimum, the user should be able to create a category group and assign existing categories to that group. Basic update and delete functionality would also need to be implemented. But how fancy was I going to get next?

I could implement drag-and-drop or allow users to create a new category when creating a new category group. I could also implement features to allow CRUD operations from both the category group details modal and the children category details modal.

In the end, I shipped Category Groups with only the basic functionality because I wanted to get it out the door as soon as possible. I figured if any of the extra features were important, then I would hear about it from users. Then I could validate spending time implementing that feature and in turn making those users extra happy to know that their feedback was heard and addressed in a matter of days. Everybody wins!

## Automate tasks at the right time

While automating tasks can save you a lot of time in the long-term, it doesn't always make sense to automate right off the bat. Doing the manual heavy-lifting first will give you a sense of what's useful to automate and when the time is right.

![](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)

### Account cancellations

I manually handled account cancellations for the first few month. 

A user that wanted to cancel their account would click on a button which would trigger an email send to me about this user. I would then email them personally to let them know I would be deleting their data and also ask why they were canceling. I had only ever gotten 2 responses and I would go on to manually delete their data from the database and third-party services.

Eventually, it took an accidental cancellation of a paying user's account to make me realize that I needed a smarter way to handle account deletions.

The current flow in Lunch Money to delete your account involves a quick survey asking for the reason why someone is canceling their account, along with an optional text area to write comments and a checkbox to indicate if they would like to stay on our newsletter for updates. There's also a double confirm button so I can be sure this user really wants to delete their account.

![](/uploads/screen-shot-2020-05-15-at-11.52.40-pm.png)

After this, I still manually cancel their Stripe subscription and manually issue any refunds (for some reason, I don't trust Stripe to handle this automatically for me in a clean way. Call me paranoid from their weird pro-ration strategies) and I manually assign a deletion date to their account which is also used by an automated worker that purges data after trial expirations.

The volume I get for account cancelations (on average less than 1 per day) is not high enough yet for me to automate the rest of this, but if it picks up I'll know what to automate next.

### Referral program

Something that I'm glad I didn't spend the time to automate was our referral program. If an existing user refers a new user and the new user subscribes to a plan, then both users will receive credit for 1 month. Seems simple enough but under the hood, this can be quite complex. For one, the two users could have signed up with different pricing plans, so we'll have to figure out just how much their credit is worth.

I decided I wanted to just get the referral program out the door first and see just how many people would be using it. Worst comes to worst, I'll be manually applying a lot of credits.

In the end, the referral program didn't bring on as many new users as I thought it would. It was not a pain at all to manually process rewards for those who did, and in fact it was a good experience to figure out all the edge cases. If I had spent time conjuring up all the edge cases and automating this process, it would not have been worth it.

## Keep tasks organized

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

## Tag low-hanging fruits

Riffing off of my Clickup setup, I use a tag which is the Apple emoji to denote which tasks are low-hanging fruits, that is, quick tasks that usually require as little as one line and as much as 5 minutes to fix.

I find that keeping these around and marking them as such can really help raise spirits on those days where you feel sluggish. Still being able to get something done is a great way to get a quick dose of dopamine that might help you get out of a slump.

# Optimizing marketing

## Timing marketing pushes

At Lunch Money, a big part of our business is employing the services of Plaid for bank syncing. Something to consider is that Plaid charges on a monthly basis. What this means is that if a user signs up on April 30, connects a bank account and doesn't end up subscribing at the end of their 14-day trial, Plaid will charge me for this user in both April & May's invoices.

This realization coupled with my intense aversion to paying more than I need to has shaped a lot of practices at Lunch Money.

For one, our data retention policy used to be 30 days which means if your trial ends and you didn't put in your billing information, we'll consider you "churned" and will delete your data in 30 days. However, this certainly guarantees that I'll be paying one more month than I need to for churned users who connected bank accounts. So this grace period before data deletion has been revised to 5 days.

With a 14-day trial, the potential for a 1 week trial extension and a 5 day grace period, I have realized it is in my best interest to schedule marketing pushes towards the beginning of the month. At longest, a churned user would last 26 days in our system and making sure these 26 days ends before the start of a new month is a priority!

Therefore, marketing pushes under my control, such as publicizing blog posts and launches will always be in the first few days of the calendar month. Once I switched over to this method, my Plaid bills has gone down significantly.

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

## Talk to others

Being a company of one doesn't mean you can't have anyone to lean on. Network with other people, especially those specialize in verticals you're not as familiar with. Of course, make sure you offer as much back as you're looking for.

My company is part of my long-term goal as are the relationships I'm making during this journey.

## Have hobbies outside of work

This is super important to stay well-rounded, not only as a person but for your own sanity! What keeps me occupied outside of Lunch Money is learning Chinese. I take 3 classes a week, 1.5 hours each. Even though sometimes it's really hard to peel away from work, I know in the end it's a nice forced break that I probably would otherwise never take.

## Celebrate the small wins

This is something I need to get better at– celebrating the small wins much more than you get down on when things go wrong. Celebrate at every milestone! It doesn't have to be something large and elaborate. Whenever my MRR increases or my user base increases to an arbitrarily special number, I always mention it to my husband and my parents and they always help me find ways to celebrate.