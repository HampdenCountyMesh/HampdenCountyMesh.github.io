# Hampden County Mesh Documentation

This directory contains supporting documentation for Hampden County Mesh.

These files are meant to help with continuity, maintenance, troubleshooting, public site updates, and shared understanding of the systems behind the website.

## Documentation index

### Community and coordination

* `discord.md`
  Notes about the Discord server, channels, roles, onboarding, moderation expectations, and future integrations.

### Website assets

* `ASSETS.md`
  Notes about website images, icons, file naming, photo permissions, EXIF cleanup, screenshots, map assets, and media usage.

### Infrastructure and systems

* `infrastructure.md`
  Notes about site-maintained systems, local support hardware, server roles, and general infrastructure layout.

* `nodes.md`
  Notes about documented nodes, repeaters, observers, portable devices, and other mesh-related hardware.

* `observers.md`
  Notes about observer devices, what they hear, what they report, and how observed activity should be described.

* `mqtt.md`
  Notes about MQTT, brokers, uplinks, logging, public activity feeds, and related backend work.

* `observed-activity-data.md`
  Notes about how observed activity data should be collected, described, published, and limited.

## Purpose

The `/docs/` folder is for supporting documentation. It is different from the public guide pages in `/guides/`.

The `/guides/` folder contains public-facing educational pages for beginners and community members.

The `/docs/` folder may include more technical notes, maintenance notes, implementation details, and background information for people helping maintain the site or related systems.

## Privacy and safety

Do not commit private or sensitive information to this folder.

Do not include:

* Private keys
* Passwords
* API tokens
* Broker credentials
* Admin URLs
* Private IP addresses
* Exact private node locations
* Private home addresses
* Sensitive screenshots
* Photos that reveal private locations unintentionally
* Details someone shared privately and did not agree to publish

When public documentation needs to describe a location, use a general area, town, public landmark, or broad terrain description unless exact sharing is clearly intentional and safe.

## Observed activity wording

When documenting maps, dashboards, observers, logs, MQTT feeds, or public activity data, use careful wording.

Observed activity means something was heard, logged, reported, or shown by a system or public source. It does not mean Hampden County Mesh owns or operates every node, marker, packet, observer, repeater, or device shown.

Use wording like:

* observed activity
* activity heard by site-maintained systems
* activity reported by public sources
* local signal notes
* public activity data where available

Avoid wording that suggests complete coverage, ownership of all nodes, or guaranteed communication.

## Maintenance notes

Keep documentation practical and current.

When something changes, update the relevant file instead of leaving stale assumptions in place. If a file becomes obsolete, remove it or replace it with a short current note.

Good documentation should help someone understand:

* What exists
* What it is for
* What is public
* What is private
* What still needs manual checking
* What should not be overclaimed
* Where related public pages live

## Related public pages

Public website:

https://hampdencountymesh.org/

Guide library:

https://hampdencountymesh.org/guides/

Radio Reference:

https://hampdencountymesh.org/radio-reference.html

Discord join route:

https://hampdencountymesh.org/join/
