# Hampden County Mesh Documentation

This directory contains supporting documentation for Hampden County Mesh.

These files are meant to help with continuity, maintenance, troubleshooting, public site updates, and shared understanding of the systems behind the website.

The `/docs/` folder is for supporting documentation. It is different from the public guide pages in `/guides/`.

The `/guides/` folder contains public-facing educational pages for beginners and community members.

The `/docs/` folder may include more technical notes, maintenance notes, implementation details, and background information for people helping maintain the site or related systems.

## Documentation Index

### Community and Coordination

* `discord.md`
  Notes about the Discord server, channels, roles, onboarding, moderation expectations, and future integrations.

### Website Assets

* `ASSETS.md`
  Notes about website images, icons, file naming, photo permissions, EXIF cleanup, screenshots, map assets, and media usage.

### Infrastructure and Systems

* `infrastructure.md`
  Notes about site-maintained systems, local support hardware, server roles, and general infrastructure layout.

* `nodes.md`
  Notes about documented nodes, repeaters, observers, portable devices, and other mesh-related hardware.

* `observers.md`
  Notes about observer devices, what they hear, what they report, and how observed activity should be described.

* `mqtt.md`
  Notes about MQTT, brokers, uplinks, logging, public activity feeds, and related backend work.

* `observed-activity-data.md`
  Notes about how observed activity data should be collected, described, published, limited, and explained.

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
* Private home addresses
* Sensitive screenshots
* Photos that reveal private locations unintentionally
* Details someone shared privately and did not agree to publish

When documentation needs to describe a location, use a general area, town, public landmark, or broad terrain description unless exact sharing is clearly intentional and safe.

## Observed Activity Wording

When documenting maps, dashboards, observers, logs, MQTT feeds, or public activity data, use careful wording.

Observed activity means something was heard, logged, reported, mapped, or shown by a system or public source. It does not mean Hampden County Mesh owns or operates every node, marker, packet, observer, repeater, or device shown.

Use wording like:

* observed activity
* activity heard by site-maintained systems
* activity reported by public sources
* public activity data where available
* local radio observations
* local use information
* wardriving observations
* field-testing results

Avoid wording that suggests:

* complete coverage
* guaranteed communication
* ownership of all nodes
* control of all nearby mesh activity
* emergency service capability
* replacement for 911 or official emergency services

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

Use care with wording like “network.” When used publicly, it should usually describe the people and community, not imply ownership of one official device network.

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

## Related Public Pages

Public website:

https://hampdencountymesh.org/

Guide library:

https://hampdencountymesh.org/guides/

Coverage:

https://hampdencountymesh.org/coverage.html

Node setups:

https://hampdencountymesh.org/guides/node-setups.html

Radio aids:

https://hampdencountymesh.org/guides/radio-aids.html

Sharing safely:

https://hampdencountymesh.org/guides/sharing-safely.html

Discord join route:

https://hampdencountymesh.org/join/

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
