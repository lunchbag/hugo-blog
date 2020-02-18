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

# Mistake: Having an ill-prepared launch

Lunch Money's launch was by-and-large unplanned and accidental, but this wasn't the mistake.

It was late August, and my product had been in public beta for a few weeks with 60 or so users. On a whim one day, I posted on Hacker News' Show HN. I asked a few friends to upvote it and I waited only to watch my post go into page 2 of "new" where it would surely never see the light of day again.

Then, two days later, I was granted a second chance. The Hacker News moderators bestowed my post to the bottom of the front page which effectively marked the launch of Lunch Money. Readers dutifully upheld Lunch Money's standing on the front page for nearly 24 hours. I ended up getting a huge uptick in traffic that day and 1000 signups.

![](/uploads/Screen Shot 2020-02-18 at 8.00.56 PM.png)

About two hours into the launch, I started to get notifications and emails that users couldn't connect their accounts via Plaid. I was freaking out and I instantly thought that Plaid was rate-limiting me. I spammed the Plaid support channel and the two friends I know who work at Plaid, crying for help. That is until I realized that it was my own dumb fault because I accidentally left my Plaid environment to development which only supported 100 connected accounts. I depleted my free test accounts which I had been diligently rationing up until this point.

**Lesson learned: Have tests in place to check critical environment variables are properly set before deploying to production**

![](/uploads/Screen Shot 2020-02-18 at 8.23.37 PM.png)<span class="caption">A simple test could have saved me a ton of headache</span>

Next, I ran into issues with a third-party email service provider, Sendgrid. I was using Sendgrid to send confirmation emails to new users as they signed up for Lunch Money. The issue was twofold which I discovered while prematurely celebrating the first fix. I had hit my 100 emails per day limit due to being on the free plan, so I quickly upgraded to a paid plan. Then, for some reason, Sendgrid rate limited me! I had to use their support chat (which, kudos to them was VERY responsive) in order to have them lift it.

**Lessons learned: Ensure your current plans with third-party services you depend on are sufficient and monitor usage on launch day to catch issues before they arise**

If you want to read the "full story" of the launch and my feelings at the end of the day, [check this Indie Hackers post](https://www.indiehackers.com/product/lunch-money/got-on-front-page-of-hacker-news-today--LnVqxbaYPHu7vsPBx39).

# Mistake: Assuming user sentiment 

I started Lunch Money as a web app since that is the platform I'm most comfortable with and I can iterate quickest on. I like the idea of having more screen real estate for a proper user interface and I also have a lot more experience (and fun!) designing and coding for web apps over mobile apps.

However, at the back of my mind I always felt that I would need to have a mobile app. Who would use a new budgeting app if it was not mobile-first? Who even owns a laptop or desktop computer anymore?

I had a fully-functioning web app that was mobile responsive but I had truly convinced myself that no one would take my app seriously because it wasn't available natively on iOS or Android. Though I wasn't going to let this be a barrier to launching, I ended up pricing my product low enough as compensation. I was also overly apologetic in my copy. I had a line that promised that a mobile app was coming soon and the current offering had a special "pre-mobile" pricing.

After launching, I realized through user feedback that a mobile app was not the dealbreaker I hyped it up to be. Of course, there were a few users who made it clear they would only subscribe once a mobile version was available, but there were way more people who were just excited about the potential of Lunch Money itself. It became obvious that I should focus on continuing to develop the product rather than halting it in favour of spawning a half-baked version on another platform.

**Lesson learned: Don't assume what is and isn't important to your users. Focus on an MVP and wait for feedback.**

Looking back now, it was the right decision to hold off on a mobile app. Keeping parity with both web and mobile while iterating regularly on the product would be nearly impossible. The web version changed so quickly with many features having been completely re-written in the last 6 months. That would have surely taken twice or more the amount of time if I also had to consider the mobile app whose update cycles would be at the mercy of Apple and Google.

This is not to say that Lunch Money will never had a mobile app. I'm still working on rounding out core features and as the product approaches stability, we'll spend time thinking seriously about a mobile app. Whether that involves hiring a contractor, outsourcing the development or encouraging users to build their own via our developer API is still up in the air!

# Mistake: Charging too low...

As mentioned earlier, I priced Lunch Money initially to overcompensate for the lack of a mobile app. The first offering was at $3/month or $30/year.

I was getting feedback over the next few weeks that my pricing was too low! If your users are telling you your price is too low, it's even lower than you think.

# Mistake: ... and charging too high

Over the course of 4 weeks, I experimented with pricing. I basically raised my price every time I came out with a new major feature, which, at that time, was happening on a weekly basis. These are core features to the product today, such as CSV import (+$2/month) and the Query Tool (+$1/month). My pricing basically went from $3/month to $5/month to $6/month and finally $8/month.

# Mistake: Offering too long of a free trial

At launch time, we were offering a 45-day free trial. The idea was to allow users the experience of a whole budgeting monthly cycle to assess Lunch Money. Also, YNAB, who I perceived to be my biggest competitor, was offering a 38-day free trial so I thought that with a longer trial and lower price, Lunch Money would be more appealing.

While I could have been right about that, it wasn't worth the extremely long sales cycle that came with offering a 45-day free trial PLUS the option for a 1 week free trial extension. Major facepalm. At the longest, users were not going to convert until almost 2 months after initially signing up. This made assessing product-market fit an extremely long process. Eventually, at the advice of a friend much smarter than me, I decided to shorten the free trial length to 14 days. Even though I now ran the risk of users not having enough time to assess the product, I felt the shorter trial might instill some urgency in users, and I was still offering the option for a 1 week trial extension.

**Lesson learned: Be aware of the downfalls of offering too long of a free trial**

It's worth mentioning now that this realization and the realization that I was charging too little happened in parallel so I actually ended up increasing the pricing to $8/month AND decreasing the free trial length to 14 days starting the same day. I changed two very important variables at the same time. My sign ups dropped drastically and I had no idea of knowing if it was because I was charging too high or my trial length was too short.

**Lesson learned: If you're testing major changes, do not change two variables at the same time.**

Recovery: I ended up sticking with the shorter trial length and offering a discount off $8/month. I now felt that I had a goal to raise Lunch Money's worth to be $8/month and until I got there, I would offer a percentage discount. I started off with a 30% discount for Cyber Week which had great reception and it is now at 20% off which amounts to $6.40/month. I also sent out a user feedback survey recently which asked questions regarding pricing. I'm now confident the current trial length and monthly pricing are both reasonable.

# Mistake: Being too afraid to share my story

For a month and a half, we didn't have an About page. I wasn't sure how Lunch Money would be perceived if people found out there was a singular engineer behind a personal finance app. I wrote an article on my personal blog that would link Lunch Money to me, but it would only be discoverable by those eager enough to read the origin story.

After some initial feedback, I decided to implement an About page and also start sending a welcome email to new users introducing myself as the one-woman team behind the product as well as a link to the origin story. The feedback was amazing and according to my analytics, the About page is one of the most visited page.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Let's not be strangers anymore 👋 We finally have an About page! <a href="https://t.co/koZiMSAM3o">https://t.co/koZiMSAM3o</a></p>— Lunch Money (@LunchbagLabs) <a href="https://twitter.com/LunchbagLabs/status/1180518703487733766?ref_src=twsrc%5Etfw">October 5, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So, turns out people love the whole indie developer story, and a lot of them also wanted to support a female solo founder to boot. This was incredibly heartwarming and I learned to embrace my story more.

![](/uploads/Screen Shot 2020-02-18 at 8.18.31 PM.png)<span class="caption">On a recent user survey sent out, 20% of responses mentioned the fact that it was an indie developer as a favorite thing about Lunch Money.</span>