# Hampden County Mesh Documentation

This directory contains supporting documentation for Hampden County Mesh.

These files are meant to help with continuity, maintenance, troubleshooting, public site updates, and shared understanding of the systems behind the website.

The `/docs/` folder is for supporting documentation. It is different from the public guide pages in `/guides/`.

The `/guides/` folder contains public-facing educational pages for beginners and community members.

## Documentation Index

### Community and Coordination

* `discord.md`  
  Notes about the Discord server, channels, roles, onboarding, moderation expectations, GitHub integration, and future bot or relay planning.

### Website Assets

* `ASSETS.md`  
  Notes about website images, icons, file naming, photo permissions, EXIF cleanup, screenshots, map assets, third-party assets, and media usage.

### Infrastructure and Systems

* `infrastructure.md`  
  Main overview of site-maintained systems, local support hardware, MeshCore-Hub, CoreScope, Mosquitto, observer work, portable devices, fixed nodes, and general infrastructure status.

* `data-access-and-observed-activity.md`  
  Notes about observed activity, MQTT-backed tooling, broker or data-feed access, CoreScope-style integrations, public-safe data rules, source types, privacy review, and what must not be published.

* `map-subdomain.md`  
  Notes about `map.hampdencountymesh.org`, the current Coverage redirect, future public map expectations, launch checklist, and public map wording.

## Purpose

Documentation in this folder should help maintainers understand:

* What exists
* What it is for
* What is public
* What is private
* What still needs manual checking
* What should not be overclaimed
* Where related public pages live

This folder should support the public site without turning beginner-facing guide pages into dense technical manuals.

## Privacy and Safety

Do not commit private or sensitive information to this folder.

Do not include:

* Private keys
* Passwords
* API tokens
* Broker credentials
* Admin URLs
* Private IP addresses
* Exact private node locations
* Exact private observer locations
* Exact private gateway locations
* Exact private repeater locations
* Private home addresses
* Sensitive screenshots
* Photos that reveal private locations unintentionally
* Details someone shared privately and did not agree to publish

When documentation needs to describe a location, use a general area, town, public landmark, or broad terrain description unless exact sharing is clearly intentional and safe.

Detailed data, broker, MQTT, observed-activity, and CoreScope rules should live in `data-access-and-observed-activity.md` instead of being repeated in every file.

## Public Wording

Public-facing wording should describe Hampden County Mesh as a community, not as the owner or operator of every nearby device.

Good wording:

* Hampden County Mesh
* local mesh radio community
* radio education in Western Massachusetts
* practical off-grid communications
* site-maintained systems
* public sources
* observed activity
* field testing
* MeshCore field testing
* MeshMapper field testing

Avoid wording that suggests:

* complete coverage
* guaranteed communication
* ownership of all nodes
* control of all nearby mesh activity
* emergency service capability
* replacement for 911 or official emergency services

Use care with wording like “network.” When used publicly, it should usually describe the people and community, not imply ownership of one official device network.

## Map and Data Readiness

The public map address is:

https://map.hampdencountymesh.org/

For now, that address redirects to the Coverage page while future live or near-live map tooling is prepared.

Future map, bot, broker, observer, MQTT, or CoreScope-related work should follow the privacy and safety rules in:

* `data-access-and-observed-activity.md`
* `map-subdomain.md`
* `infrastructure.md`

## Maintenance Notes

Keep documentation practical and current.

When something changes, update the relevant file instead of leaving stale assumptions in place. If a file becomes obsolete, remove it or replace it with a short current note.

Good documentation should answer:

* What changed?
* Why does it matter?
* Is it public or private?
* What should be checked later?
* Does the public site need to be updated too?
* Does any related guide page need to be updated too?

Avoid copying the same long privacy or observed-activity language into every document. Link to the main related file instead.

## Related Public Pages

Public website:

https://hampdencountymesh.org/

Map address:

https://map.hampdencountymesh.org/

Guide library:

https://hampdencountymesh.org/guides/

Coverage:

https://hampdencountymesh.org/coverage.html

Updates:

https://hampdencountymesh.org/updates/

Getting Started:

https://hampdencountymesh.org/guides/getting-started.html

Recommended Settings:

https://hampdencountymesh.org/guides/recommended-settings.html

MeshCore Basics:

https://hampdencountymesh.org/guides/meshcore-basics.html

Meshtastic Basics:

https://hampdencountymesh.org/guides/meshtastic-basics.html

Sharing Safely:

https://hampdencountymesh.org/guides/sharing-safely.html

Discord join route:

https://hampdencountymesh.org/join/

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service, public safety system, or replacement for 911.