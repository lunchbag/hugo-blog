+++
categories = []
date = ""
description = ""
draft = true
images = []
slug = ""
tags = []
title = "How queues automate processes in Lunch Money"

+++
Asynchronous task processing in Node.js with Bull

Bull is a Node library that implements a fast and robust queue system based on [redis](https://redis.io/).

Although it is possible to implement queues directly using Redis commands, this library provides an API that takes care of all the low-level details and enriches Redis basic functionality so that more complex use-cases can be handled easily.

If you are new to queues you may wonder why they are needed after all. Queues can solve many different problems in an elegant way, from smoothing out processing peaks to creating robust communication channels between microservices or offloading heavy work from one server to many smaller workers, etc.

Automated and scheduled tasks 

**Currency fetcher**

Fetching daily currency exchange rates for over 180 currencies.

**Drip campaign**

Welcome email

Trial ending email (via Stripe)

Trial extension email (via Stripe)

Trial extension-ending email (via Stripe)

**Account deletions**

Every day, a job to purge accounts

**Syncing transactions**

Webhook-triggered. Fetching, processing all happens via queues

**Syncing balance history**

**Sending email digests**

Operation-heavy tasks

**Bulk deletion and insertions**

**Start fresh**

**Unlinking accounts and assets**

**User registration**