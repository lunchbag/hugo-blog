+++
categories = []
date = ""
description = ""
draft = true
images = []
slug = ""
tags = []
title = "4 life and career decisions that prepared me for solopreneurship"

+++
Hello! 👋  My name is Jen and I’m the founder, engineer, designer and customer support at Lunch Money, a personal finance and budgeting web app.

It often comes as a surprise to people when they find out that Lunch Money is built and maintained by a single person.

> It’s really inspiring and reassuring (as a fellow solo founder) to see that a single person can build so much value.

> By the way, extremely impressed by the UX and usability, top notch stuff. Hard to believe this is something built and managed by a single person, especially considering the level of both design and back end dev.

> I signed up over the weekend as a trial user, and was amazed at the UX, snappiness and polish. Hard to believe it's run by just one person.

> Wow! It’s phenomenal what one person has built in an year. You must be a productivity machine gun. Inspiring.

> Is this still a one-person-project? I’m so impressed.

It was never part of my life goals to start my own company and I hadn't thought about it even after I started working on Lunch Money. It was only until I saw success during launch that I decided to quit my freelancing jobs to pursue this endeavour full-time. The aggregate of my life and work experience allowed me to transition easily into the role.

In this article, I will go into 4 specific life and career decisions that I consider foundational to my solopreneurship journey.

## **Joining the right company**

### On size of company

I started my career at Twitter, where I worked for three and a half years. Between joining and leaving, the company had 10x'ed in employees, jumping from about 300 to over 3000. I was able to experience in fast motion the evolution of a company, from small start-up to a public company. While it was a bumpy ride, it was apparent how this growth affected the engineering culture (in both good & bad ways) and it was valuable to take away lessons in growing a product from a front-row seat.

If I had joined a company that was already large and established, it would have been harder for me to experience these changes first-hand. For instance, seeing how relatively relaxed processes were in the beginning to needing to write detailed post-mortems and hold numerous sync meetings weekly helped me understand that there is a right time to upgrade from scrappy behaviour but also where such processes might have been more of a hindrance than benefit.

### On mentorship

At the beginning of my career, I undervalued mentorship. It took nearly 3 years into my time at Twitter to finally recognize the importance and the impact of having a good mentor. On my last team, I worked with a number of seasoned engineers who were friends  from before and moved to Twitter together via an acquisition. They were definitely the smartest engineers I may ever have the privilege to work with in my career and they undoubtedly accelerated my growth by holding me to high standards for coding and testing.

### On transferrable skills

I had never given much thought to how important transferrable skills were until I realized that being a software engineer at any company did not result in the same set of experiences and skills.

A friend told me a story of how working at \[unnamed large software company\] simplified a lot of processes for the sake of moving quickly. For instance, databases could be spun up via one-click deploy coupled with homegrown configuration files for adjustments. They'd later on realize as they were job hunting that setting up a data store was not so straight forward, but all the difficult parts had been abstracted out and they never got the chance to peek under the hood.

Consider two internships I had during my college years. The first was at Qualcomm– a large well-known international company with decades of proven engineering expertise. The second was a small seed-funded start-up of 3 founders, another intern and myself that had recently pivoted and arguably hadn't found their product market fit yet.

Granted that Qualcomm is in a totally different field of embedded software and hardware engineering, a lot of the tech I worked with was proprietary. I learned virtually no transferrable hard skills during my double-term internship at Qualcomm.

At the smaller (now defunct) start-up, I learned how to use Github. I worked with open source projects for the first time. I learned how to communicate with clients as I was building apps for them. I learned how to think about web versus mobile design. I learned a ton of Javascript. These are all skillsets I am still tapping into today.

If you're aspiring to eventually run your own business, chances are you do not plan to stay at any one company for over 4 years. Therefore, you need to be strategic with the company you choose to join. Your time is valuable!

## **Optimizing experience breadth-to-depth ratio**

I feel strongly that working on three different teams at Twitter helped me gain experience critical to being able to run Lunch Money on my own today. I stayed on each team for roughly 1 year, having made significant impact on each before moving onto another team.

My first team was the Observability team which was responsible for building a Mixpanel for internal use. I was specifically hired to work on the front-end side of things so I had full autonomy over the UI and UX of these dashboards. I myself wasn't a hardcore user of this tool, so I talked a lot with other engineers and was able to hone my skills of listening to their issues or feature requests and figuring out what was feasible.

![](/uploads/observability.png) <span class="caption">I designed data visualization and monitoring systems using Ruby on Rails and backbone.js at Twitter</span>

I would have probably stayed on that team if it weren't for my manager and another team that was looking to "borrow" an engineer for some high priority growth initiatives. My manager volunteered me and I was excited to work on a public-facing project for once. Little did I know there was a breakdown in communication and the receiving team, hearing that I was coming from "Platform Engineering", assumed that I was a backend and Scala wiz.

Despite my initial uneasiness, I tapped into my "fake it til you make it" mentality and I ended up learning Scala on the job. It wasn't easy going from Javascript to a strongly-typed language but a few late nights and with the help of some very patient engineers, I was able to help ship a couple of high impact features including being the sole backend engineer supporting the World Cup new user experience efforts.

A few months later I switched to an infrastructure-level team working on messaging (SMS, push notifications and email) efforts where I ended up rewriting from scratch the entire infrastructure that interpreted text messages.

All in all, I left Twitter with an incredible breadth and depth of experience– having worked up and down the stack, in both existing codebases and greenfield projects, on my own and under the watchful eye of staff engineers. I gained an unreal amount of confidence in my engineering abilities and more importantly, my ability to learn a new technology quickly.

## **Building something from scratch**

In my early 20s, I got really into electronic dance music (EDM). I found myself going out dancing most Thursday, Friday and Saturday nights. Since San Francisco was home to numerous clubs, it became a chore to discover events. For the most part, you had to go to each individual venue's website and navigate their calendars to find what was coming up. From there, some event pages were on Facebook while others were on ticketing platforms like Eventbrite, Ticketfly, etc.

A friend who grew up in the bay area and was a veteran in the scene told me about a site that used to aggregate all EDM events into a calendar which was wildly popular until they eventually shut down. I thought this was a fantastic idea amd well within my technical scope at the time so I got to work.

I hammered out a minimal viable product (MVP) in Ruby on Rails (thanks to having learned this on the job at Twitter). The MVP was basically a one-pager with a list of manually-inserted events for the next 2 weeks. I started to tell my friends about the site and it proved invaluable. Over the course of several weeks, word of mouth spread and my site eventually peaked at 1000 WAU.

![](/uploads/futuraretro1.png)
<span class="caption">The first iteration of futuraretro</span>

Fuelled my passion, I poured hours of effort into growing my site. I learned to incorporate the Gracenote API which would automatically label each event with the genre of EDM. The Eventbrite and Ticketfly APIs helped to automate some of the event additions. I implemented a form submission where people could suggest events to add. I started a Facebook community (grew to 1000+) and learned about how to put out basic ads. I sent out weekly emails via Mailchimp and made a few bucks every month with affiliate ads.

![](/uploads/futuraretro2.png)
<span class="caption">The second and last redesign of futuraretro</span>

The coolest part (which I've yet to re-experience with Lunch Money) was when I met someone at a show. I asked them if they had heard of my site and they pulled up their phone to show me it was the last site they had visited. That blew my mind!

The eventual fade of my interest in EDM took my site down with it. The point is, build something from scratch. It can be anything. This started as a one pager and it slowly grew with interest. While it didn't get anywhere significant, I learned a ton and strengthened my muscle of "learning by doing". Since then, I've launched a number of other micro-sites spawned from short-lived curiosities and interests. Your first few projects may not end up being the breakthrough ones but will help you get used to putting yourself out there and launching things.

## **Taking a sabbatical**

Moving out of San Francisco permanently and taking a sabbatical helped strip away the biases that were stemming from my environment. If you were to ask me when I was living in San Francisco why I would want to start a company, my honest answer would probably be related to boosting my ego, gaining clout among my Silicon Valley peers, or making a ton of money so I could afford a little condo in the Mission.

I took significant time off to travel before settling back down in Toronto in 2017. I sought after experiences I knew I would never come across otherwise. I ended up living in various abodes in Northeastern Thailand, among the poorest villages in the country. I also spent time in the French countryside where wages are low yet cost of living was manageable. I was reminded of the other joys in life– family, nature and community.

![](/uploads/sabbatical.jpg)<span class="caption">Pure joy in the Burgundy countryside where I spent 5 weeks as a bartender and waitress at a French restaurant</span>

Being in a totally new environment helped me see almost right away that I wanted to end back up in Toronto, not San Francisco. Everything I thought I wanted when I was back in San Francisco was in the framework of that environment. I realized I instead wanted to be closer, both physically and emotionally, to my parents– a thought that rarely came up during the hustle of San Francisco. For the first time in a long time, I saw a path in my life leading to happiness that wasn't directly correlated to money.