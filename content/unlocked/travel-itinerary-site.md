+++
title = "Build Your Own Travel Itinerary App (with AI)"
date = 2026-09-10
slug = "travel-itinerary-69c7af"
subtitle = "The exact prompt I used to turn an AI agent into a mobile trip companion: a tabbed app with your whole itinerary, day trips, and a booking checklist. Copy it, answer a few questions, and build your own for your next trip."
noindex = true

[_build]
  render = "always"
  list = "never"
+++

This is a prompt you can hand to an AI agent to build your own travel itinerary app: a webpage with your whole trip on it that you can pull up on your phone. It's for anyone with a trip coming up who wants a plan shaped around them instead of a generic list, whether or not you write code.

The example below is the app my family used across three weeks in Europe. I hosted it on my website behind a password so we could all pull it up on our phones: the full day-by-day plan, every flight and transfer, a running list of what still needed booking, and a map of day-trip ideas with drive times from wherever we were staying. Here are a few of the tabs:

<div class="app-shots">
  <figure><img src="/uploads/travel-itinerary/europe-2026-days.png" alt="The Days tab: a day-by-day timeline with flight cards and times" loading="lazy" /><figcaption>🗓️ Days</figcaption></figure>
  <figure><img src="/uploads/travel-itinerary/europe-2026-overview.png" alt="The Overview tab: the whole trip at a glance plus a calendar" loading="lazy" /><figcaption>📅 Overview</figcaption></figure>
  <figure><img src="/uploads/travel-itinerary/europe-2026-trips.png" alt="The Trips tab: a map of day-trip ideas with drive times" loading="lazy" /><figcaption>🗺️ Day trips</figcaption></figure>
  <figure><img src="/uploads/travel-itinerary/europe-2026-book.png" alt="The Book tab: a checklist of things left to book" loading="lazy" /><figcaption>📋 To book</figcaption></figure>
</div>

## How to use it

1. Open your AI agent (I use Claude Code, but any coding assistant works).
2. Copy the whole prompt below and paste it in.
3. It will interview you about your trip, then build the app. Answer honestly, especially about energy, pace, and who you're traveling with.
4. Open it in your browser, then keep talking to the agent: swap a restaurant, add a day trip, make the mornings lazier.

{{< prompt >}}
You're going to help me build a personal travel companion app for an upcoming trip,
designed for my phone, as a single self-contained webpage: one file, nothing to
install or set up, so it is easy to host and keeps working offline even with no
signal. It should feel like a friend who knows these places planned it, not a
generic tourist checklist.

STEP 1: INTERVIEW ME FIRST
Before you write any code, interview me. Ask a few questions at a time, not all at
once, and use my answers to shape everything. If an answer opens something up, ask
a follow-up. Cover at least:

- Where I'm going and the exact dates. Whether it's one city or several stops, and
  whether it's the whole trip or one leg of a longer one.
- Where I'm staying at each stop, and how I get between places (flights, trains,
  drives, a cruise, transfers).
- My arrival time on the first day and departure time on the last. (A mid-afternoon
  landing is a half day, not a full one. Plan around it.)
- Who I'm traveling with (solo, partner, kids, parents, friends), and whether any
  day carries special weight: a last night, a birthday, a reunion. Build those days
  around the moment, not the sightseeing.
- My energy and pace: pack it in, or slow and spacious. Early riser or slow mornings.
- What I love (food, art, history, nature, shopping, nightlife, just wandering) and
  what I want to avoid (crowds, long lines, lots of walking, tourist traps).
- Dietary needs, mobility considerations, budget feel, and any non-negotiable must-dos.
- Anything already booked or planned (hotels, tours, dinners, tickets), so you can
  build around it rather than over it.
- Plans I want to make or add, and any ideas I already have for specific days, so we
  can slot them into the right place.

Don't start building until the days can feel genuinely personal.

STEP 2: BUILD THE APP
Build the app with a fixed bottom tab bar (like a native phone app) and these tabs.
Keep all my trip details together in one clearly labeled place so they're easy to
find and change as plans shift, without me having to dig through code.

- OVERVIEW: the whole trip at a glance. Each stop or leg as a card with its dates,
  location, where I'm staying, and a one-line note (a typical-weather line is a nice
  touch). Below that, a simple month calendar spanning the trip.
- DAYS: a day-by-day timeline. Group entries under each date. Each entry has a time,
  a short title, and a category that is color-coded and icon-tagged (transport,
  lodging, food, activity, work, info). Show flights and trains as tidy cards with
  departure and arrival times, route, and a booking or confirmation note. If I'm
  traveling with others, let entries be tagged by who they apply to.
- TRAVEL: every flight, train, transfer, and long drive in one place, in order, so I
  can see all the logistics at a glance. Make it filterable by type, and show times
  and whether each leg is booked.
- TO BOOK: a checklist of things I still need to book or pack. Each item can be
  checked off, and it remembers what I've checked when I come back to it.
- DAY TRIPS: ideas for day trips from my base(s). Include a map with a pin for each
  idea, and cards grouped by theme with a one-line reason to go and the drive time
  from wherever I'm staying. Be honest about what's worth the trip.
- GUIDE: practical know-before-you-go notes for the places I'm visiting: getting
  around, a few local tips, useful phrases, payment and tipping norms, anything that
  saves me a search while I'm there.

DESIGN AND BEHAVIOR
- Made for the phone first. Fast, clean, readable one-handed. The bottom tab bar stays fixed.
- A light and dark look that matches my phone's setting.
- Everything it needs built in, so it keeps working offline on the plane.
- Real, specific, named places with a reason each one earns its spot. For any day I
  flagged as special, make it quieter and build it around the moment.

When it's built, show it to me and ask what I want to adjust.
{{< /prompt >}}

That's it. Paste it, answer the questions, and you'll have your whole trip as a webpage. To make it accessible on your phone the way we did, ask the agent to help you host it behind a password once you're happy with it. And nothing is locked in: as your trip goes on, you can always ask the agent to add stops, remove things, or update plans as they change. Have a wonderful time.
