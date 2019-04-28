+++
categories = []
date = "2019-04-24T11:00:00-04:00"
draft = true
slug = "building-lunch-money"
tags = []
title = "Life in Fukuoka: Building an app, freelancing, and living abroad"

+++
<p class="note">TL;DR: Lived in Japan for 5 months and spent most of that time developing a budgeting app from scratch, working as a freelance software engineer, learning Japanese and getting acquainted with the local culture. <a href="https://money.lunchbag.ca">Sign up for the private beta here</a> or keep reading for the story, process, and motivation behind this.</p>

Last August, Justin and I booked our round-trip tickets from Toronto to Asia leaving January 3 and returning May 8th. Our plan was to <a href="/fukuoka" target="_blank">live in Japan</a> for the majority of our time abroad while working as freelance software engineers.

<!-- At the time, I was working as a <a href="https://lunchbag.dev">freelance software engineer</a> and Justin was about to quit his full-time job to transition into freelancing as well. This would mark the culmination of a plan we had set in motion a few months prior– we knew that if we were going to be living abroad for a considerable amount of time, we had to plan our income streams around that and the best solution was for us both to be working temporary contracts remotely. -->

We knew that leaving a familiar place for such a long time would force us to wrap up everything we had going on currently. Ideally, when we arrive to our new home, we would start with a mostly free calendar to focus on whatever we want.

<span class="highlight">So, that "whatever we want" for me ended up being an app that I have been itching to develop for a while.</span>

This is the story of my journey in creating this app from scratch and how it fit in with other commitments such as freelancing, living/traveling abroad, learning Japanese, and hosting our visiting friends and family.

# October 2017: The Inception

The story starts way back to when Justin and I moved to Toronto to start our life together in October 2017. <span class="highlight">One of the first things we did was set up a budgeting spreadsheet.</span> It started off simple and innocent just tracking our daily transactions and eventually, it amounted to over 20 tabs and dozens of cross-sheet equations. Our routine and process strengthened while our DIY budget tool, strained by our lack of expertise in spreadsheet formulas, stagnated. As this was happening, the idea of turning it into an app, which would allow for more computational freedom, started to float around in my head.

<img src="/uploads/google-sheets.jpg" class="expanded" />
<span class="credit">Redacted</span>

# September 2018: Finding Purpose Abroad

We are about 3 months from our departure date and going through a small crisis trying to figure out exactly how we were going to pass our time abroad. Beyond our travel dates and work situation, we had no plan for what we would actually be doing; we just knew we wanted to use this time away to accelerate our personal growth. Some ideas we had that did not materialize included getting into calligraphy, learning some form of martial arts, joining some local sports league, and taking online courses in something we were interested in, like digital animation.

On a trip to visit Justins’ family, it was revealed that my sister-in-law was still using the budgeting spreadsheet I had set her up with a few months prior and was looking to get her boyfriend on it, too! <span class="highlight">This catalyzed the decision to build the app version and I resolved to work on it while in Japan.</span>

We also decided to take a break from our current freelancing contracts starting around Christmas time and ending the first week of February so that we could start our trip without work obligations and settle into Japan at our own pace.

# November 2018: Design Kick-off

I couldn’t wait to get started, so I fired up Sketch and began making some initial designs to get the creative juices flowing.

<img src="/uploads/design.jpg" class="expanded" />
<span class="caption">The first design iteration of the Transactions page based on the layout of our spreadsheet</span>

# December 2018: Programming Kick-off

I decided to start programming during the Christmas break. First step was to figure out my stack. I explored a few different ideas and eventually landed on a mix of new (Typescript, <a href="https://react.semantic-ui.com" target="_blank">Semantic UI</a>) and familiar (Node.js, React, PostgreSQL) technologies.

I was pretty excited to get into Typescript– I’d heard a lot of good things but the opportunity to use it just hadn't come up. I was also curious about what it would be like to work with a UI framework like Semantic and excited at the idea that it would save me a lot of time and CSS-induced headaches. It was nice that I would be learning something new with this project! This is important because if I spend a considerable amount of time on this and it falls flat, I will at least have an up-to-date skill set.

Prior to starting, I wanted to set a clear goal in case I lose track. <span class="highlight">I decided the first milestone would be to get my web app to the point where Justin and I could completely switch off our spreadsheet.</span>

# January 2019: The Arrival and Settling into a Routine

Justin and I are both the type of people who will happily stay up late working on something that interests us, just to wake up early the next morning to pick back where we left off. We both get really into what we’re doing at the moment. For me this is an incredibly elusive feeling and a mode in which I can hammer out a bunch of work and feel like a million bucks after.

The danger to this is that we can easily lose sight of other priorities. <span class="highlight">We have additional goals that are important to us, so we prioritized finding an effective daily routine that could best set ourselves up for overall success.</span>

## Fitness

The first thing we did after moving into our apartment was look for a neighbourhood gym. It was crucial that we kept our fitness regimen since we would be spending a considerable amount of time in front of the computer every day. Also, we were living in the land of ramen noodles and we knew we would be trying lots of new food and eating a lot!

## Cooking

I knew from the beginning that I wanted to learn Japanese cuisine and experiment with ingredients that are not as readily available or affordable in Toronto. We are already used to cooking at home, so we were looking forward to keeping that up while abroad since it's generally the more frugal and healthier option.

## Language learning

Since we were going to be living in a foreign city that doesn't see many Western tourists, we agreed that we should learn enough basic Japanese to get by everyday life. We set aside time every day to practice Japanese via apps like <a href="https://www.memrise.com/" target="_blank">Memrise</a>, <a href="https://www.lingodeer.com/" target="_blank">Lingodeer</a> and <a href="https://www.tandem.net" target="_blank">Tandem</a> in addition to going out to restaurants and coffee shops to try to make small talk with shop owners.

# February 2019: Running on nitro

February was by far the most productive month, clocking in about 88 hours of work on Lunch Money. It was our first full month in Fukuoka and we had very minimal external obligations. We also found a free co-working space ("the Start-up Cafe") that we ended up holing ourselves in nearly every day for at least a couple of hours. At the end of February, The Start-Up Cafe closed for renovations and would not re-open until after we leave Japan.

It was very sad at first, but ultimately it was a huge blessing that the Start-Up Cafe closed because it forced us to find other options. As a result, we started working out of various Starbucks and Manu Coffees in different neighbourhoods allowing us to weave in exploring more of the city with working every day!

## Milestones

<span class="highlight">On February 9, I reached my first goal and got Justin and I up and running on an internal alpha.</span> I had a working version of Lunch Money with the basic features from our spreadsheet. It was glorious and Justin immediately filed a handful of bugs. Perfect!

I also started freelancing again. I scheduled daily standup meetings for 7:30am, forcing myself to wake up by then. Although I had more commitments now, it actually helped me get by on a more rigid schedule. Prior to this, we were getting up at much later hours in the day.

# March 2019 and April 2019: Final stretches

By contrast, March and April were much busier since both our parents visited and we found ourselves out and about a lot more as Spring approached. We spent a total of 3 weeks out of town– in Tokyo to meet up with Justin's parents and in Okinawa and Taipei. Finally, my parents visited us in Fukuoka for about 2.5 weeks. <span class="highlight">All in all, this translated into a forced but much-needed break away from Lunch Money.</span> I still kept up my freelancing commitments but the rest of the time was mostly spent sightseeing and passing quality time with our loved ones.

## Milestones

By this point, Justin and I are using Lunch Money every day and it has very much become part of our routine now! The spreadsheet, which had served us very well for over a year, officially retired.

![](/uploads/chart.svg)

During my time in Japan, I was able to spend <span class="highlight">215 hours working on Lunch Money</span> while <span class="highlight">going to the gym 41 times during the 83 days</span> we were in town and signed up, and we also <span class="highlight">cooked two-thirds of our meals at home</span>. <i>Yes, I keep tabs on everything.</i>

# Reflection: The Hard Parts

## Losing motivation

Inevitably, I would lose motivation. I wondered often why I was even doing this in the first place. Who would even use it? When you’re a one-person team working on everything from design to coding to marketing, you’re supposed to carry knowledge of the grand vision all the way down to the name of every individual variable. It's easy to lose sight of the motivation when you're knee deep in bugs and code and sometimes hard to see the light at the end of a tunnel on a day when you feel you weren't as productive as you should have been. <span class="highlight">Shout out to my husband for periodically reigniting my fire!</span>

## "Proper" use of time abroad

I occasionally questioned how we were spending our time. We were in an enviable situation living in a new country with much to discover yet we were spending almost all our time working on our computers. Was that pretty lame? Was it considered squandering our opportunity here? I would sometimes try to to de-glorify our travels abroad because I felt guilty for not doing more "fun" things that were typical of a vacation.

But this wasn't a vacation! It was a challenge to explain our situation to people and equally difficult to convey that we were having a great time just going to a coffee shop to work for 4 to 6 hours a day whenever possible. The freedom to work endlessly on a passion project is something that is fun, luxurious, and normally out-of-reach for us.

I eventually realized these feelings showed that for whatever reason, I was much too concerned about what people were thinking of us. 

In the end, we are not leaving Fukuoka as strangers to the city. We saved a lot of the sightseeing and day trips for when my parents visited which ended up being a fantastic decision since we were able to share all the joys of new discoveries together. Justin and I effectively ate our way through Fukuoka which is surely our favorite way of getting to know a new place.

# Reflection: The Good Parts

## Getting organized on my own

I loved being able to start a big project from scratch and figuring out the best ways to organize everything from notes to tasks to time tracking. To keep track of features and bugs, I used <a href="https://asana.com" target="_blank">Asana</a> religiously. For time-tracking on both Lunch Money and my contracting work, I used <a href="http://try.hrv.st/2-104977" target="_blank">Harvest</a> which I highly recommend for its ease of use and beautiful design.

## Going at my own pace

Although it was overwhelming how much I had to do on top of the basic coding (adding analytics, error tracking, design, setting up domains and e-mails, figuring out branding, etc), I enjoyed having such varying tasks. For instance, it was nice to have something completely unrelated to programming that I could do whenever I got mentally exhausted from staring at code.

## Getting help from the technical hubby

Justin helped me a lot by lending a hand with parts I’m weak at. He's saved my butt a few times helping me properly set up my environments, fix my error tracking, and he even wrote my currency rate fetching script!

# Lunch Money: How it's different

On to the app! There are 3 key differences from other major budgeting apps that were core to our spreadsheet and very important to us and our lifestyle.

## Multi-currency supported natively

Multicurrency support is a non-negotiable to us because we have money in both American and Canadian banks and we like to keep track of our cash spending in local currencies when we are travelling. <span class="highlight">Lunch Money was designed from the beginning with multi-currency in mind.</a>

<img src="/uploads/transactions.jpg" class="expanded" />
<span class="caption">Choose from over 50 currencies to use in your budget!</span>

Transactions are tracked in their native currency. For example, a transaction from our Canadian credit card might show up as CA$30.00 while our Japanese yen spending displays ¥1,800. When we calculate your total spending for the month, we add everything up in your primary currency according to current exchange rates.

## Recurring expenses are not part of the budget!

It never made sense to me why other budgeting apps make you include your recurring expenses in the monthly budget. If you know that every month, you’ll be paying exactly whatever amount for a Netflix subscription, gym membership and car insurance, why carry the mental burden of categorizing and remembering those amounts for your budget every month?

We recognized this when we were doing our spreadsheet, so I created a Recurring Expenses sheet that kept track of our monthly and annual expenses. I really like this system because <span class="highlight">it’s able to tell us exactly how much money we need to simply get through the month</span>. If you need to cut spending, recurring expenses should be the first ones to consider.

<img src="/uploads/recurring.jpg" class="expanded" />
<span class="caption">Recurring expenses show up in their own page so you can easily see your minimum monthly expenditures</span>

In Lunch Money, recurring expenses are not categorized and show up as a separate type of transaction. If you connect your bank accounts to Lunch Money, we will automatically detect which of your transactions are recurring expenses! This makes setting up your account easier.

## Re-budget every month with last month's data

I don’t like the concept of rolling over budgets because <span class="highlight">I believe that we should be building good habits rather than trying to cover up bad ones</span>!

Justin and I’s end-of-the-month routine revolves around setting the next month’s budget. We do so by looking at what we budgeted for the current month and how much we were over or under. This might let us know that we were wildly unrealistic last month and that we should be more prudent going forward.

<img src="/uploads/budget.jpg" class="expanded" />
<span class="caption">Set this month's budget by seeing your budget from last month versus how much you actually spent!</span>

We also consider upcoming events that might need some extra budgeting. For instance, upcoming weddings would require extra budgeting in the Gifts category. This monthly reflection and planning helps us come up with a reasonable budget for the forthcoming month and is something that gets better with time! It will take a while, and <span class="highlight">along the way you will strengthen your ability to predict and anticipate future spending</span>.

# Sign up for beta

What I am looking for now are friends and strangers alike who are interested in a new budgeting solution, and ideally those who would find the multi-currency feature useful and have banking institutions in Canada and America. I am excited to see where Lunch Money could go and what others think of it!

If you made it this far and like what you see, please <a href="https://money.lunchbag.ca">sign up for the beta</a> which will likely be ready around the beginning of June.