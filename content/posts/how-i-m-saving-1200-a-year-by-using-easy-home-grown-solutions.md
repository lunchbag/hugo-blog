+++
categories = []
date = ""
draft = true
slug = ""
tags = []
title = "How I save $1200 a year by rolling my own solutions as a one-person team"

+++
Hi there, my name is Jen. I am the the one-person engineering, design and support team building Lunch Money, a multicurrency personal finance tool for the modern-day spender. 

Frugality is in my blood. Early on in life, I learned the value of a dollar from my parents and have been become particularly frugal (or money-conscious) since I quit my full-time job 4 years ago. This has permeated all aspects of my life now, as a self-proclaimed “froodie”– a frugal foodie (sure you can pay top dollar for the best food, but the real gems are when you find unfathomable value for the taste) and as the founder of a budgeting app. So it’s no surprise that in building my app, I found myself evaluating if paying for a service was more or less worth the time it would take to just roll my own solution.

To clarify, I'm not trying to say that I am never willing to spend money. I'm a big believer that time is money, so if you value your time at a certain rate, then you can easily figure out if spending 1 to 2 hours engineering your own solution is worth not paying $50/month for a service.

I have outlined 4 of my home-grown solutions which are currently saving me in total over $100 per month and I am confident these solutions can sustain Lunch Money to its first 1000 users. As we get close to that number, I will surely re-evaluate these solutions. But until then, here they are!

# Knowledge Base

### The problem: Lots of repeated information in support requests

Since launching, I've been getting a steady stream of support requests and questions from users. That along with the fact that I was pushing out new features and improvements on the daily means a lot of information I was conveying would quickly be outdated. 

I was also noticing a lot of the same questions. While this was a strong indicator that certain parts of the product could be more intuitive or have a walkthrough, I felt it was nearing the time for Lunch Money to have a centralized knowledge base.

### The hunt for a solution

Something like Discourse would be cool to have eventually when I could build a community around Lunch Money, but for now it didn’t make sense and since features were still evolving, I didn’t want to have to worry so much about outdated answers. Also the price point is ridiculous starting at $100 per month.

I looked into other solutions and found that they seemed to be rolled into what is known as customer service tools. The most popular option I could find was Zendesk, whose support docs system is an add-on, so you have to subscribe to a base plan first which would cost you at least $10 per month.

I also found other solutions such as Helpscout, offered at $25/month and packed with features, as well as startups using Notion as a knowledge base. Though this lacks analytics and the general look and feel of a knowledge base, the price came in lower at $4, up to $8 per month.

So, even at the cheapest, it looked like on average about $10/month for a decently-featured hosted version that would allow you to host on your own domain. From afar, it seemed almost worth it giving that they're offering beautiful templates that were already hooked up and fully-featured and all you had to do was provide the content.

### Deciding to host my own

I ended up realizing that all I really needed was a template. All the other features that were offered were not so useful to me, and at least not useful enough for me to justify the monthly price. This led me to browsing Themeforest for some Jekyll or Hugo themes since I was familiar with these static-site generators and I wasn't looking for the bloat that came with a Wordpress or Ghost site.

I started browsing through Theme marketplaces for Jekyll or Hugo templates, since that’s what I’m familiar with and I know they are super easy to deploy. I found one that was simple, intuitive and not overloaded with extra features, and it costed $60.

![](/uploads/Screenshot 2019-11-20 11.07.57.png)<span class="caption">Lunch Money's knowledge base, powered by Jekyll (free) template from Themeforest for one-time payment of $49</span>

It took me 10 minutes to find a beautiful, simple template that met my basic needs and it costed a one-time fee of $49. So this template would pay for itself after 5 months. Another way of looking at it is in terms of how much I value my time. Let’s say I value my time at $75/hour. I probably can't build as good looking and functional Jekyll or Hugo site in less than an hour, and it’s not really worth it for me to find out if that’s true or not. So I ended up buying the template and saved myself a recurring charge. I added some basic content, pushed it to Github and deployed it for free with Netlify.

### Final Cost and Savings

**Set up time cost:** 10 minutes to find the template, 5 minutes to deploy to Github and Netlify (obviously excluding content-writing time)

**Paid solutions:**

* Notion offered at $4 - $8 per month
* Freshdesk offered at $15/month
* Helpscout offered at $25/month

**Estimated savings:** $10 per month or $120 per year

# Support Requests

While researching customer support tools, I noticed they also feature a way of handling customer service requests. At those price points, I simply couldn't justify it. I also used a service like Freshdesk exclusively at my first start-up and I can't exactly pinpoint the value it brought from separating out support requests from my normal inbox.

Here's the thing– your first few customers are so important. They will be your champions later on. It's imperative to give top-notch service from the very beginning. For me, this means support requests have a high priority and deserve to go to my work inbox which I check most frequently. I don't see myself installing another app on my phone or needing to have yet another tab always open on my Chrome.

And let's be real– if you're a one person team, you don't need a shared inbox!

### Setting up my support email for free

To allow users to email us at support@lunchmoney.app, I hooked up the domain to Mailgun (free) [to receive emails and route them appropriately to my inbox](https://documentation.mailgun.com/en/latest/quickstart-receiving.html#inbound-routes-and-parsing). This initially saved me the $6 it would cost to get on GSuite and have Google manage my work domain. While I was happy with this solution for the first few months, I quickly noticed issues with relying on a free tier for something as important as my email. I was experiencing almost no deliverability to outlook.com and hotmail.com email addresses. This is because spammers also tend to use these services (Mailgun, Sendgrid) and "polluting" the shared IPs that are used in these free tiers, causing them to be blacklisted by email service providers.

Eventually, I grew frustrated enough with the deliverability issues that I upgraded from Mailgun to GSuite. 

In short, having every form of communication from my users arrive in my work inbox has simplified my work flow. Furthermore, I use tags and the snooze feature religiously, and if you have a good system, this can also improve your workflow.

### Final Cost and Savings

**Set up time cost:** 15 minutes to set up Mailgun and/or GSuite

**Paid solutions:**

* Zendesk offered at $5/month
* Front offered at $12 per month
* HiverHQ offered at $15/month
* Helpscout offered at $25/month

**Estimated savings:** $15 per month or $180 per year

**Set up time cost - 15 minutes**

# Notifications and Alerting

**Time cost - 10 minutes**

**Savings**

For a feedback system, I have a button which is accessible from every page on Lunch Money where users can quickly enter feedback into a text area and hit Send. This sent as a message in Slack through my webhook. However, after launching, I quickly realized this was not feasible. I was getting a ton of feedback and it was starting to get buried in all my other alerts. It became very tedious to go through all my feedback in a Slack channel– I remembered the scrolling through past history experience in Slack was horrible. Also, it wasn’t a good searchable interface since I wasn’t playing for Slack (obviously), there would be no history.

My feedback system works great for me now. When new feedback comes in, I get an email with the message, the user’s name, email and user ID. It has all the information I need in case I need to look something up in the database. Then I can just hit reply and start a thread with the user. If it’s a feature request, I will note down the user in my task management system so I know who to contact when I’ve implemented a change. Finally, I archive the email. My work email is essentially an inbox so I like to keep it clean and as close to empty as possible!

I imagine as Lunch Money grows and support tickets grow, this might become unsustainable but honestly I feel pretty good about the system for maybe 10x more volume.

This doesn’t replace anything specific, but it’s a great way to get free alerting.

Basically, if you don’t have a Slack channel for your project, start one! Slack is really powerful, especially if you already use it, it’s just an extra channel and it’s a very effective notification system also. Webhooks is where all the power is. Basically you can send a formatted request to a webhook and a bot that you set up will send that message in any channel.

Here’s what I have webhooks set up to notify me about:

1. When a new user signs up
2. When a user converts by entering their billing information
3. When a user provides one-off form submissions, such as when I requested for interest in an API

I highly recommend at least implementing a webhook for when a new user signs up and set the new message notification tone to something pleasant. It will give you a slight jolt of dopamine and motivation whenever you hear that sound!

# Drip Campaign

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