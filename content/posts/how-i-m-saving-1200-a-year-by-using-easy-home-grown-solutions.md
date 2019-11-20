+++
categories = []
date = ""
draft = true
slug = ""
tags = []
title = "How I'm saving $1200 a year by using easy home-grown solutions"

+++
Frugality is in my blood. Through determination, grit and discpline, my parents were able to pay off a mortgage early on minimum wage jobs. I learned a lot about the value of a dollar from them and have been frugal (or money-conscious) throughout my travels. This has permeated all aspects of my life now, as a self-proclaimed “froodie”– a frugal foodie (sure you can pay top dollar for the best food, but the real gems are when you pay unfathomable value for the taste) and the founder of a budgeting app. So it’s no surprise that I found myself comparing pricing and evaluating if it was more worth it to just roll my own version.

I'm a big advocate for doing your due diligence before you spend. Don't get me wrong though, I am willing to spend money if it's worth my time.

Most of the time it definitely was, so I was able to “save” or rather, not spend or delay spending money on certain services.

Of course, as Lunch Money grows and scales, some of these solutions may not make sense anymore or may get overloaded, at which point I would re-evaluate. But the point is that while bootstrapping and getting Lunch Money through its infancy, ..

## Knowledge Base

**Type: Customer support tools**

**Set up time cost: 15 minutes**

**Savings: $4+/month or $48+ annually (Helpscout offered at $25/month, Notion offered at $4 - $8 per month, Zendesk offered at $10/month)**

Lunch Money was growing in complexity from all the features and improvements I had been implementing based on feedback. I was also starting to get support emails asking about the same few things. I figured it would be a good time to start thinking about a Docs system.

Something like Discourse would be cool to have eventually when I could build a community around Lunch Money, but for now it didn’t make sense and since features were still evolving, I didn’t want to have to worry so much about outdated answers. Also the price point is ridiculous starting at $100 per month.

I looked at many other solutions and they seemed to be rolled into what is known as customer service tools. The most popular option I could find was Zendesk, whose support docs system is an add-on, so you have to subscribe to a base plan first which would cost you at least $10 per month.

Even at the cheapest, it looked like about $10/month for a hosted version. These all seemed worth it because they offered templates that were already hooked up and fully-featured and all you had to do was provide the content.

I started browsing through Theme marketplaces for Jekyll or Hugo templates, since that’s what I’m familiar with and I know they are super easy to deploy. I found one that was simple, intuitive and not overloaded with extra features, and it costed $60.

So this template would pay for itself after 6 months. Another way of looking at it is in terms of how much I value my time. Let’s say I value my time at $60/hour. I probably can't build as good looking and functional Jekyll or Hugo site in an hour, and it’s not really worth it for me to find out if that’s true or not. So I ended up buying the template and saved myself a recurring charge.

## **Support Requests**

**Set up time cost - 15 minutes**

**Savings - $29+/month**

**Front - $12 / month**

**Helpscout - $25/month**

**Zendesk - $5 - $19/month**

While browsing customer support tools, I noticed many of them also offered a feedback system or a way of handling support requests. The price range of these ranged from $5/month to $60/month!

For support emails, I hooked up my domain to Mailgun (free) to route all emails to my personal inbox. For a feedback system, I have a button which is accessible from every page on Lunch Money where users can quickly enter feedback into a text area and hit Send. This sent as a message in Slack through my webhook. However, after launching, I quickly realized this was not feasible. I was getting a ton of feedback and it was starting to get buried in all my other alerts. It became very tedious to go through all my feedback in a Slack channel– I remembered the scrolling through past history experience in Slack was horrible. Also, it wasn’t a good searchable interface since I wasn’t playing for Slack (obviously), there would be no history.

Eventually I changed the feedback system to email me the feedback instead and I upgraded from using Mailgun to GSuite ($6/month) so I could have a separate inbox and not worry about routing issues with Mailgun. This made my workflow much easier since I could just reply to the email instead of copying and pasting the email address between Slack and Chrome.

My feedback system works great for me now. When new feedback comes in, I get an email with the message, the user’s name, email and user ID. It has all the information I need in case I need to look something up in the database. Then I can just hit reply and start a thread with the user. If it’s a feature request, I will note down the user in my task management system so I know who to contact when I’ve implemented a change. Finally, I archive the email. My work email is essentially an inbox so I like to keep it clean and as close to empty as possible!

I imagine as Lunch Money grows and support tickets grow, this might become unsustainable but honestly I feel pretty good about the system for maybe 10x more volume.

\+ gmail labels, snooze

## Notifications and Alerting

**Time cost - 10 minutes**

**Savings**

This doesn’t replace anything specific, but it’s a great way to get free alerting.

Basically, if you don’t have a Slack channel for your project, start one! Slack is really powerful, especially if you already use it, it’s just an extra channel and it’s a very effective notification system also. Webhooks is where all the power is. Basically you can send a formatted request to a webhook and a bot that you set up will send that message in any channel.

Here’s what I have webhooks set up to notify me about:

1. When a new user signs up
2. When a user converts by entering their billing information
3. When a user provides one-off form submissions, such as when I requested for interest in an API

I highly recommend at least implementing a webhook for when a new user signs up and set the new message notification tone to something pleasant. It will give you a slight jolt of dopamine and motivation whenever you hear that sound!

## Drip Campaign

 **- Postmark $75**

**Time cost - 1+ hour**

**Savings - $50+/month**

**Drip $49/month for 1000 users**

Let’s talk about drip campaigns. They are crucial to customer engagement and guiding your users to eventual conversion. However, every tool out there designed to help you manage your drip campaigns are overloaded with features and really expensive. I’m talking $50+ per month. Also, they require yet another integration since you’ll want to update the service with your customer’s actions and traits so they can be targeted properly. Overall, I felt it was a lot of extra overhead for a cost that was way too high.

So I started thinking about implementing my own drip campaign. I figured I could start off pretty simple and just emailed a user over the course of their trial 3 times: once when they sign up, one week before their trial ends to offer a trial extension, and the day their trial is over.

These were all pretty simple queries to the database. I store the join dates for all users as well as a type so I know how long their trial is. I’d also have to hit the Stripe API to make sure that I wasn’t asking them to subscribe when they already had. This was another nice thing– I could query all the information I needed directly when I needed it, instead of playing telephone between multiple services.

So using my favorite things in the world– Redis queues with Bull– I created a daily repeating worker which would, for each email type, query the database and retrieve all eligible users, double check their Stripe status and double check that they haven’t already been sent this email (safeguarding in case the queue hiccups and the job repeats itself as is in the Bull documentation) and sends them the email.

For these emails, I use Postmark as my email service provider. I’m a big fan of Postmark after experiencing the lowest lows with Sendgrid and Mailgun. Basically all my emails to outlook or [hotmail.com](http://hotmail.com) emails were not being delivered. They didn’t even show up in the spam box and they were not bouncing either. They were just lost in email purgatory somewhere. This is due to the fact that their free tiers are so popular that spammers will eventually cause these shared IPs to be blacklisted by certain email providers. Postmark has rigid selection process to ensure spammers do not get on their platform and so they boast really high deliverability rates. The best part is they offer a $75 credit to bootstrapped startups which gets you 7 months of free service if you send under 10,000 emails a month.

My solution is working great for me so far as I have no complaints. I have all the stats I need from Postmark regarding click-through rates and open rates. I can corroborate that easily by querying my database to see how many actually extended their trial. I have also since added a 4th email: if you extend your trial, we send an email to follow up on how the extension is going. The key is to make your homegrown solution robust and extensible from the beginning. I can’t see a reason yet why I would switch to a paid full-service tool anytime soon!