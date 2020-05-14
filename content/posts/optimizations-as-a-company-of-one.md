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

In short, I am a company of one. I am the one who answers the customer support emails and I am the one who deploys major features. I am the one who updates our API docs and knowledge base, the one who designs, writes and sends out our bi-monthly newsletters and I am the one who designed the logo.

I also have a life outside of Lunch Money! I am happily married and always make time to eat regular meals and attend Chinese class 3 days a week for 1.5 hours. I also attend 1-hour tutoring sessions twice a week. And we have a healthy social life, made even more possible by the advent of Zoom.

In the last 7 days, I averaged 6 hours of work per day for a total of a 45 hour work week.

The reason I'm sharing this is because I want to demystify the solo founder lifestyle and share some optimizations that I've picked up along the way that has made this attainable for me.

## A "typical" week

A week is never typical. In fact, very rarely do I plan specific tasks more than 2 days ahead of time aside from tasks such as sending out newsletter updates or deploying a set of features.

I typically think about my tasks in terms of product, engineering and marketing. There's also support but that happens sporadically.

In the last 7 days as the company of one behind Lunch Money, here's what I got done:

* **\[Product\]** Launched an internal beta testers program
* **\[Engineering\]** Wrapped up a 2-week long refactor of some core components
* **\[Marketing\]** Sent out a newsletter to 3000+ people about the latest features on Lunch Money
* **\[Engineering\]** Started and finished 2 major features: advanced transaction filters and "every two weeks" recurring
* **\[Product\]** Launched to beta testers
* **\[Support\]** Replied to over 100 support tickets
* **\[Networking\]** Had 5x one hour networking Zoom calls
* **\[Marketing\]** Experienced a surge in sign ups due to being mentioned on a Dutch podcast

My favorite thing about being a solo founder is all the different hats I get to wear. I love being able to switch between completely different tasks because I feel it keeps the job interesting and helps refresh my mind. For instance, working on feature improvements and bug fixes might tire me out and switching over to a marketing tasks allows me to use a different part of my brain and it feels like a break while still being productive overall. _I just finished a major refactor and pushed out 2 major changes to beta, so writing this blog post right now feels like a vacation for my brain._

If it's not already obvious, I like being hyper-efficient. Even though I am a solo founder, I can still run things in parallel. As an example, a few weeks ago I sent out a quarterly user survey to new subscribers. Sending that out quickly took virtually no time but for the next 3 weeks I could work on other things while the survey was collecting responses.

As Lunch Money grows in user base and complexity, I have been able to identify various areas for improvements and optimizations in order to alleviate the overall workload. I will now share my best tips, peppered in with anecdotes from my own app and experiences, and hopefully you'll be able to draw some learnings and inspirations for your own situation.

## Optimizing Customer Support

Customer support is one of the most important pillars of a SaaS business and should not slip. I always thought that if I were to hire someone, it would be to do customer support but I've been slowly moving away from that idea. The fact that I get to speak directly the users and that users know it's me on the other end of that email is so valuable to Lunch Money's branding and commitment to users.

### How do support tickets work at Lunch Money?

Don't be shocked, but all support emails go directly to my email inbox. Every page of Lunch Money has access to a "Feedback widget" at the bottom right of the screen. Clicking on it opens up a textarea wherein users can submit feedback, questions, bug reports, or whatever else is on their mind and it sends it through to straight to my inbox.

<Screenshot>

I'll never forget launch day when we amassed 1000 sign ups and well over 100 support tickets in the span of a few hours. I stayed up that night replying to every single one before I finally went to bed. I mean, there was no way I could ignore it. I am an inbox-zero fanatic.

Obviously this wasn't sustainable. It was difficult to wake up every day to have my main inbox full of unread emails, but I also didn't want to add complexity (or money) to the situation by re-routing support emails to some third-party service or other inbox. 

### Have users self-triage support tickets

One of the best optimizations I've ever made is to have users self-triage their support tickets. All this required was the addition of a simple dropdown above the text area in the feedback box with the following options:

1. Bug report
2. Question
3. Feature request
4. General feedback

I modified server code to include this new typing in the subject line. Next, I set up some simple filters and labels in Gmail such that emails of different types would skip my inbox and land into one of the subfolder split by tag.

The best thing about this optimization is that it's free. The second best thing is that it keeps my inbox fairly decluttered. I'm also able to implement a "priority" system when responding to support tickets. For instance, I'll pay more attention to bug reports than say, feature requests because a bug report can denote a serious issue within the app whereas a feature request is usually a "nice to have".

The positive effects of this change were felt immediately. Seeing (5) next to "Question" is a million times less stressful than having 5 unread emails sitting in my main inbox. Plus, with the preview feature, I can't ignore those emails and they can easily derail my current train of thought or task. Now, it feels good that I can intentionally address support tickets rather than having them interrupt my day as they come in.

### From canned responses to FAQs

I get a lot of the same questions and feature requests via email. The most common ones are about the Plaid/Capital One integration and whether or not we'll have a mobile app. 

In the beginning, I would type the response out by hand and it would vary slightly between every email. Then, I would just copy one response and paste it in an Evernote titled "Canned Responses" and use that same template for future questions.

Finally, I put together a knowledge base and one of the first pages I implemented was an FAQ. I sat down and wrote a thoughtful answer for each of these questions which I can now direct users to when they ask about it.

Being able to identify the most common questions and making the answers to these widely accessible is a simple way to address these straight away.

### Creating specific support flows

 While some common questions are a simple question and answer, there are sometimes common issues that can't quite be generalized with a blanket statement. For instance, I get a lot of support tickets about automatic imports. These are highly personal as they depend on the institution, the type of account, etc.

Here is a typical interaction regarding issues with bank syncing:

User: I am having issues with my Chase accounts.  
Me: What types of issues are you having? Is it with just one account or multiple accounts?  
User: I am not getting transactions.  
Me: If you're missing transactions, please let me know a sample transaction and I will look into it for you.

With the above, there are at least 3 emails exchanged before the issue can even begin to enter the resolution phase.

Eventually, I decided to create a specific support flow for bank syncing issues. I stuck this in the Details modal of synced accounts, right above the big red "Delete Account" button. I was finding the users were hitting this button to "fix" their account, not knowing that this actually makes things more complicated when they eventually re-link the same bank account and end up with duplicate transactions.

The specific flow runs through the common scenarios of bank syncing issues (My balance is wrong, I am missing transactions, My account is not syncing, etc) and presents some common resolutions before allowing the user to submit a ticket.

For instance, a common issue is that persistent 2FA will cause Plaid to lose connection frequently. Instead of hearing it from me, users will see this notice when they select the "My account is not syncing" options. Once they confirm that 2FA is not the issue, then they will be able to submit a support ticket.

If a user states their account balance is wrong, then we'll ask right away what the correct balance should be. Bam, we've already got all the information we need to start resolving the issue the second they submit their ticket!

### Use tooltips to instantly demystify

One of the great things about being the one doing customer support is being aware of all the pitfalls and ways users are getting confused while using your app. Use these as hints for where you might be missing tooltips.

## Optimizing engineering

### Keep your tasks organized

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

### Tag your low-hanging fruits

Riffing off of my Clickup setup, I use a tag which is the Apple emoji to denote which tasks are low-hanging fruits, that is, quick tasks that usually require as little as one line and as much as 5 minutes to fix. 

I find that keeping these around and marking them as such can really help raise spirits on those days where you feel sluggish. Still being able to get something done is a great way to get a quick dose of dopamine that might help you get out of a slump.

## Optimizing marketing

## Optimizing yourself

### Write everything down

### Talk to others

### Have hobbies outside of work

### Celebrate the small wins

* Email inbox as to do list
* Write every down. Keep evernote organized
* get into a rhythm with engineering
* big push > engineer > newsletter
* support

* filters
* user self-triaging
* pepper in tool tips
* specific flows to decrease back and forth for common issues