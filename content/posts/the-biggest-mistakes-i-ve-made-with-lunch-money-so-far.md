+++
categories = []
date = 2020-02-17T16:00:00Z
description = ""
draft = true
images = []
slug = ""
tags = []
title = "The biggest mistakes I've made with Lunch Money (so far)"

+++
It's been 6 months since the official launch of Lunch Money so I thought I would take this time to reflect on the biggest mistakes I've made (so far).

Launch Day woes

Likely I haven't shared the full story of Lunch Money's accidental launch outside of this post on Indie Hackers. (https://www.indiehackers.com/product/lunch-money/got-on-front-page-of-hacker-news-today--LnVqxbaYPHu7vsPBx39)

I'm not sure if not having a well-planned launch was a mistake or not because everything ended up working out in the end. There are a lot of resources on the internet that detail how to have a great launch day and all the ways and strategies to post on Product Hunt. For some reason, it didn't even cross my mind to post on Product Hunt. I am a very self-conscious person which is admittedly is almost debilitating sometimes. At the time, Lunch Money had a fraction of the features that it has today, but was good enough for a public launch. I posted Lunch Money on the most unpromising channels and obviously not much came from them. Then on a whim one day, on August 27, I posted on Hacker News' Show HN section. I asked a few friends to upvote it and I waited only to watch my post go into page 2 of new, otherwise known as oblivion.

Then, on August 29, my post re-appeared at the bottom of the front page where the masses upheld its position. I ended up getting a massive amount of traffic that day (10k+ pageviews) and 1000 signups. Looking back now, it was exhilarating but in the moment it was like someone forced me onto a 24 hour rollercoaster with no warning which is sometimes the best way to go into it.

Less than an hour after launch, a bunch of users on HN was commenting that they couldn't connect their accounts via Plaid. I was freaking out and I instantly thought that Plaid was rate-limiting me. I spammed the Plaid support channel and the two friends I know who work at Plaid, crying for help. That is until I realized that it was my own dumb fault because I accidentally left my Plaid environment to development which only supported 100 connected accounts. So within the first hour-ish of launch, I depleted my free test accounts which I had been diligently rationing up until this point.

Next, I ran into issues with Sendgrid. The issue was twofold which was even worse, kinda like when you peel away what you thought was the crux of the problem only to discover something stinkier underneath. First of all, I had hit my 100 emails per day limit due to being on the free plan, so I quickly upgraded to a paid plan. Then, for some reason, Sendgrid rate limited me! I had to use their support chat (which, kudos to them was VERY responsive) in order to have them lift it. 

Lessons learned
* Have tests in place to check critical environment variables are properly set
* Ensure your third-party services are ready to handle a large volume

Charging too low

Pricing is hard, let's get that out of the way. You just have to randomly pick a number and get a feel for how potential users think. The number I chose was apparently very low– $3 per month or $30 per year. I initially thought that since I didn't have a mobile app, that it would be a deal breaker for a lot of people so I would have to price my product low enough for them to justify using it. I anchored a lot around our lack of a mobile app and I tried to overcompensate for it. 

Surprisingly, during my launch, I quickly learned that a mobile app was in fact not a dealbreaker for most people, and I was getting feedback over the next few weeks that my pricing was too low! If your users are telling you your price is too low, it's even lower than you think.

It became obvious that the majority of users were more interested in the core features and that I should focus on continuing to develop the product than to halt it in favor of spawning a half baked product on another platform.

Charging too high

Over the course of 4 weeks, I experimented with pricing. I basically raised my price every time I came out with a new major feature, which, at that time, I was coming out with new features on a weekly basis. These are core features to the product today, such as CSV import (+2/month) and the Query Tool (+1/month). My pricing basically went from $3/month to $5/month to $6/month and finally $8/month. 

At $8/month, I noticed a significant drop in user signups. However, this mistake is exponential and leads into the next point..

Offering too long of a free trial

At launch time, we were offering a 45-day free trial. The idea was to allow users to use the product for an entire month, and then some, so they would be able to experience the whole budgeting monthly cycle on Lunch Money. Also, YNAB who I perceived to be my biggest competitor was offering a 38 free trial on sign up and I thought that by offering a longer free trial and a cheaper offering, Lunch Money would be more appealing.

While I could have been right about that, it wasn't worth the extremely long sales cycle that came with offering a 45 day free trial PLUS a 1 week free trial extension. Major facepalm. At the longest, users were not going to convert until almost 2 months after initially signing up. This made assessing product-market fit an extremely long process. Eventually, at the advice of a friend much more savvy than me, I decided to shorten the free trial length to 14 days. While it was way shorter and I ran the risk of users not having enough time to assess the product, I felt the shorter trial might instill some urgency in users, and I wa still offering the 1 week free trial extension.

It's worth mentioning now that this thought and the thought that I was charging too little ran in parallel so I actually ended up increasing the pricing to $8/month AND decreasing the free trial length to 14 days starting the same day. I changed two very important variables at the same time. My sign ups dropped drastically and I had no idea of knowing if it was because I was charging too high or my trial length was too short.

Getting rid of "early adopter" too early

Another mistake I made was somehow convincing myself that Lunch Money was a full-featured product that could be stripped of the early adopter labelling. This was a huge mistake because 1. the product was in fact not there yet. I should have easily known this judging by the number of major features I had left to implement. I think that I had let early user feedback and praise get the best of me and allowed me to think that I was further along in my product development than I actually was. 

I also thought that as long as I still had this notion that we were still an early adopter product, that people would be hesitant to try it out. Well I was dead wrong because as it turns out, the type of users that I want at the moment are people who are excited to be early adopters. They will be more forgiving and tend to share more feedback. This creates an awesome feedback loop and opportunity for back-and-forth dialogue that will make the user feel heard and help me understand my users better.

Being too afraid to share my story

For a month and a half, we didn't have an About page. Our landing page was a single-pager that scrolled for what seemed like endlessly because I erroneously thought that would help my SEO. I wasn't sure how Lunch Money would be perceived if people found out there was a singular engineer behind a personal finance app. After some initial feedback, I decided to implement an About page and also start sending a welcome email to new users introducing myself as the one-woman team behind the product as well as a link to the origin story. The feedback was amazing and according to my analytics, the About page is one of the most visited page (this makes sense because I find that I also gravitate towards the About/Company page first when I discover a new product).

So, turns out people love the whole indie developer story, and a lot of them also wanted to support a female solo founder to boot. This was incredibly heartwarming and I learned to embrace my story more.

https://twitter.com/LunchbagLabs/status/1180518703487733766

On a recent user survey sent out, 20% of responses mentioned the fact that it was an indie developer as a favorite thing about Lunch Money.

Assuming user dealbreakers

I started Lunch Money as a web app because that is the platform in which I'm most comfortable and I can iterate quickest on. Since I was building Lunch Money off of my spreadsheet, I liked having more screen real estate to design a proper user interface that would be as functional as it was beautiful. I also have a lot more experience designing and coding for web apps than mobile apps.

Prior to launching, I had successfully convinced myself that no one would take my app seriously because it wasn't available on mobile. It also didn't help that a lot of my friends were asking about a mobile app when I first showed them Lunch Money. I was fairly convinced that I would have to price my product low enough to entice people to use my app despite having an app. (first mistake)

On August 8, about 3 weeks before the accidental launch, I made it my mission to learn Dart and create a mobile version of Lunch Money using Flutter. For some reason, this made complete sense to me– I would halt product development and write a mobile app to parity using a language I had no experience in and a framework that was touted to be totally different from any other framework that I had used. And somehow I would develop a web app and a mobile app in parallel and manage that all as a one-person team. Easy peasy?

What ended up happening was I would spend a few hours reading documentation, listening to podcasts, etc and then get distracted by a core feature that I really wanted to develop, so I would develop that and then try to get back to mobile development. After a week I would only have a single component to show for and it wasn't even styled properly. Thank goodness for my procrastination because by the time my launch happened, I quickly realized that a mobile app was not so much of a dealbreaker than I thought. Of course there were a few users who were mobile-only but there was way more other users who were just excited about the product itself and for the stage I was in, it was more important to focus on core product features.

I'm so glad I didn't start working on a mobile app early on. This would have posed a lot of issues, like keeping parity with both web and mobile. The web version was changing so quickly with certain features being completely re-written in the last 6 months. That would have surely taken twice or more the amount of time had I also had to consider the mobile app. Furthermore, from my previous development experience with mobile apps, there would be a lot more headaches such as dealing with those who don't always update their app, or those on older devices.

Going forward