+++
categories = []
date = ""
description = ""
draft = true
images = []
slug = ""
tags = []
title = "On solopreneurship: 4 life and career decisions that had the greatest impact"

+++
Hello! 👋  My name is Jen and I’m the founder, engineer, designer and customer support at Lunch Money, a personal finance and budgeting web app.

It often comes as a surprise to people when they find out that Lunch Money is built and maintained by a single person.

> It’s really inspiring and reassuring (as a fellow solo founder) to see that a single person can build so much value.

> By the way, extremely impressed by the UX and usability, top notch stuff. Hard to believe this is something built and managed by a single person, especially considering the level of both design and back end dev.

> I signed up over the weekend as a trial user, and was amazed at the UX, snappiness and polish. Hard to believe it's run by just one person.

> Wow! It’s phenomenal what one person has built in an year. You must be a productivity machine gun. Inspiring.

> Is this still a one-person-project? I’m so impressed.

**In this new written series, I'd like to deep dive into solopreneurship and my personal journey with it.** It was never part of my life goals to start my own company and I hadn't thought about it even after I started working on Lunch Money. It was only until I saw success during launch that I decided to quit my freelancing jobs to pursue this endeavour full-time. The aggregate of my life and work experience allowed me to transition easily into the role.

In this article, I will go into the 4 life and career decisions to which I attribute my greatest and significant growth and experience-building periods.

## **Join the right company**

### On size of company

I started my career at Twitter, where I worked for three and a half years. When I joined, there were maybe 300 employees and by the time I left, the company had 10x'ed to over 3000. I was able to experience in fast motion the foundational timeline of a company, from small start-up to a public company. It was apparent through the stages how this growth affected the culture within the engineering department in both good and bad ways and while it was a bumpy ride, it was fascinating to take away a lot of lessons in growing a product from a front-row seat.

If I had joined a company that was already large and established, it would have been harder for me to experience these changes first-hand. For instance, seeing how relatively relaxed processes were in the beginning to needing to write detailed post-mortems and hold numerous sync meetings weekly was important to understand that there is a right time to change things and where such processes might have been more of a hindrance than benefit.

### On mentorship

At the beginning of my career, I undervalued mentorship. It took 3 years after joining my last team at Twitter to realize the importance and the impact of having a good mentor. I worked with a team of older engineers who were friends and moved to Twitter together via an acquisition. They were definitely the smartest engineers I may ever work with in my career and they undoubtedly accelerated my growth by holding me to high standards for code and testing.

### On transferrable skills

I never thought about how important transferrable skills were until I realized not everyone had the same fortunate experiences I had at Twitter. 

A friend told me a story of how working at \[unnamed large software company\] simplified a lot of processes for the sake of moving fast. For instance, one-click deploy of a database with homegrown configuration files for adjustments. They'd later on realize as they were job hunting that spinning up a data store was not so straight forward, but all the difficult parts had been abstracted out and they never got the chance to peek under the hood.

Consider two internships I had during my college years. The first was at Qualcomm– a large well-known international company with decades of proven engineering expertise. The second was a small seed-funded start-up of 3 founders, another intern and myself that arguably hadn't found their product market fit yet.

Granted that Qualcomm is in a totally different field of embedded software and hardware engineering, a lot of the tech I worked with was proprietary. I learned virtually no transferrable hard skills during my double-term internship at Qualcomm.

At the smaller start-up, I learned how to use Github. I worked with open source projects for the first time. I learned how to communicate with clients as I was building apps for them. I learned how to think about web versus mobile design. I learned a ton of Javascript. These are all skillsets I am still tapping into today.

If you're aspiring to eventually run your own business, chances are you do not plan to stay at any one company for over 4 years. Therefore, you need to be strategic with the company you choose to join. Your time is valuable!

## **Optimize experience breadth-to-depth ratio**

I feel strongly that working on three different teams at Twitter helped me gain the most experience. I stayed on each team for roughly 1 year, having made significant impact on each before moving onto another team.

My first team was the Observability team which was responsible for building a Mixpanel for internal use. I was specifically hired to work on the front-end side of things so I had full autonomy over the UI and UX of these dashboards. I myself wasn't a hardcore user of this tool, so I talked a lot with other engineers and was able to hone my skills of listening to their issues or feature requests and figuring out what was feasible.

![](/uploads/observability.png) <span class="caption">I designed data visualization and monitoring systems using Ruby on Rails and backbone.js at Twitter</span>

I would have probably stayed on that team if it weren't for my manager and another team that was looking to "borrow" an engineer for some high priority growth initiatives. My manager volunteered me and I was excited to work on a public-facing project for once. Little did I know there was a breakdown in communication and the receiving team, hearing that I was coming from "Platform Engineering", assumed that I was a backend and Scala wiz.

Despite my initial uneasiness, I tapped into my "fake it til you make it" mentality and I ended up learning Scala on the job. It wasn't easy going from Javascript to a strongly-typed language but a few late nights and with the help of some very patient engineers, I was able to help ship a couple of high impact features including being the sole backend engineer supporting the World Cup new user experience efforts.

A few months later I switched to an infrastructure-level team working on messaging (SMS, push notifications and email) efforts. I continued writing Scala under the mentorship of some of the most seasoned engineers at Twitter at the time and I ended up rewriting the entire infrastructure that interpreted text messages from scratch.

All in all, I left Twitter with an incredible amount of experience– having worked up and down the stack, in existing codebases and greenfield projects, on my own and under the watchful eye of staff engineers. I gained an unreal amount of confidence in my engineering abilities and more importantly, my ability to learn a new technology quickly. 

## **Build something from scratch**

In my early 20s, I got really into electronic dance music (EDM). I found myself going out dancing most Thursday, Friday and Saturday nights. Since San Francisco was home to numerous clubs, it became a chore to discover events. For the most part, you had to go to each individual club's website and navigate their calendars to find what was coming up. From there, some events were on Facebook while others were on ticketing platforms like Eventbrite, Ticketfly, etc. 

A friend who grew up in the bay area and was a veteran in the scene told me about a now-defunct site that used to aggregate all EDM events into a calendar which was wildly popular. I thought this was a fantastic idea, well within my technical scope at the time and I got to work.

For the first time in a while, I stayed home during weekends instead of going out to hammer out an MVP in Ruby on Rails (thanks to having learned this on the job at Twitter). The MVP was basically a one-pager with a list of manually-inserted events sorted by date. I started to tell my friends about the site and it proved invaluable. Eventually, word of mouth spread and my site peaked at 1000 WAU.

![](/uploads/futuraretro1.png)
<span class="caption">The first iteration of futuraretro</span>

The site evolved over the next few months. I learned to incorporate the Gracenote API which would automatically label each event with the genre of EDM. The Eventbrite and Ticketfly APIs helped to automate some of the event additions. I implemented a form submission where people could suggest events to add. I started a Facebook community (grew to 1000+) and learned about how to put out basic ads. I sent out weekly emails via Mailchimp and made a few bucks every month with affiliate marketing.

![](/uploads/futuraretro2.png)
<span class="caption">The second and last redesign of futuraretro</span>

Unfortunately, the eventual fade of my interest in EDM claimed my site as a casualty.

The coolest part (which I've yet to re-experience with Lunch Money) was when I met someone at a show. I asked them if they had heard of my site and they pulled up their phone to show me it was the last site they had visited. That blew my mind!

The point is, build something from scratch. It can be anything. This started as a one pager and it slowly grew with interest. While it didn't go anywhere significant, I learned a ton and strengthened the muscle of "learning by doing". Your first few projects may not end up being the breakthrough ones but they are invaluable in experience. It will also help you get used to putting yourself out there and launching things.

## **Take a sabbatical**

Moving out of San Francisco permanently and taking a sabbatical helped strip away the biases that were stemming from my environment. If you were to ask me when I was living in San Francisco why I would want to start a company, my honest answer would probably be something related to boosting my ego, gaining clout among my Silicon Valley peers, or making a ton of money so I could afford a little condo in the Mission.

I took significant time off to travel before settling back down in Toronto in 2017. I sought after experiences I knew I would never come across otherwise. I ended up living in various abodes in Northeastern Thailand, among the poorest villages in the country. I also spent time in the French countryside where wages are low, and cost of living was manageable. I was reminded of the other joys in life– family, nature and community.

![](/uploads/sabbatical.jpg)<span class="caption">Pure joy in a large field of 

Being in a totally new environment helped me see almost right away that I wanted to end back up in Toronto, not San Francisco. Everything I wanted when I was back in San Francisco was in the framework of that environment. I wanted to be closer, both physically and emotionally, to my parents– a thought that rarely came up during the hustle of San Francisco. 

I realized I never wanted to work for someone else again and seeing as I had the best summer of my life with very little spending, that money wasn't as crucial to my happiness as I thought it would be.