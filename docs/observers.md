# Observer Notes

This document describes observer systems used or planned for Hampden County Mesh.

Observer systems help show what mesh activity can be heard from a particular location or system. They are useful for logs, maps, dashboards, troubleshooting, and future observed-activity summaries.

An observer improves visibility. It does not automatically improve radio coverage, guarantee communication, or prove that all nearby devices are reachable from every location.

## Purpose

Observer systems may support:

* Mesh activity observation
* Signal awareness
* Local logging
* MQTT reporting
* Public-safe activity summaries
* Future map or dashboard work
* Troubleshooting
* Field testing comparisons
* General understanding of local mesh behavior

Observed activity should be described carefully. It may show what a specific observer heard, what a public source reported, or what appeared in a log, dashboard, MQTT feed, or map.

It should not imply that Hampden County Mesh owns, operates, endorses, or manages every visible node, packet, marker, observer, repeater, or device.

## Current observer

### Hampden Room Observer

Role:

* MeshCore observer
* Room observer
* Site-maintained observation system

Hardware:

* Heltec V3

Firmware / system:

* LetsMesh / MeshCore observer firmware

Status:

* Operational
* Manually documented

Purpose:

* Observe nearby MeshCore activity
* Support local signal awareness
* Support future observed-activity summaries
* Support future mapping, dashboard, or status work where appropriate
* Help distinguish between direct field tests and activity heard by a fixed observer

Public notes:

* This observer helps show what can be heard from its location.
* It does not represent all mesh activity in Hampden County.
* It does not prove county-wide coverage.
* It should not be described as owning or controlling nearby independent nodes.
* Public output should be reviewed for privacy before being published.

Do not publish:

* Exact private location
* Private keys
* Owner keys
* Wi-Fi details
* Broker credentials
* Admin URLs
* Private IP addresses
* Sensitive logs
* Screenshots showing credentials or private configuration

Related files:

* `docs/infrastructure.md`
* `docs/nodes.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`

## What an observer can show

An observer can help answer questions like:

* Is any mesh activity being heard from this general area?
* Was a node or packet observed recently?
* Did a field test show up in logs?
* Did a device appear through a public tool, observer, MQTT feed, or local log?
* Are there changes in observed activity over time?
* Is an observer still reporting?

An observer may be useful for comparing field notes against fixed-location logs.

For example, someone may test from a park, hill, road corridor, window, or parking lot, then compare their notes with what a fixed observer heard around the same time.

## What an observer cannot prove by itself

An observer cannot prove:

* Complete county-wide coverage
* Guaranteed two-way communication
* Emergency-ready service
* That every visible node is owned by Hampden County Mesh
* That a node is fixed in place
* That a node is still online now
* That a user at another location can directly reach the same device
* That all traffic is being observed
* That a map or dashboard is complete

Observed data is useful, but it should be presented with context.

## Source types

When documenting observer-related activity, try to identify the source type.

Useful source types:

```text id="c2wm36"
direct_radio
observer
mqtt
map
dashboard
local_log
manual_note
public_source
unknown
```

Examples:

* `observer` means a known observer heard or reported the activity.
* `mqtt` means the activity came through an MQTT-backed path.
* `map` means the activity appeared on a public or local map.
* `local_log` means the activity was seen in a local log.
* `manual_note` means a person reported it from a field test or signal check.
* `unknown` means the source is not clear enough to describe confidently.

## Public wording

Use careful wording when describing observer data.

Good wording:

* observed activity
* activity heard by a site-maintained observer
* activity reported by public sources
* observer logs
* public-safe activity summary
* recently observed activity
* activity shown where available

Avoid wording like:

* this proves coverage
* all nodes are online
* county-wide network coverage
* guaranteed communication
* Hampden County Mesh operates all shown nodes
* complete activity map

## Privacy and location handling

Observer data may contain location or identity clues. Treat it carefully.

Public notes should usually use:

* General area
* Town
* Public landmark
* Broad terrain description
* Public park or road corridor
* Western / central / eastern Hampden County

Avoid publishing:

* Exact private coordinates
* Home addresses
* Private node locations
* Private observer locations
* Private repeater locations
* Raw logs with sensitive details
* Private messages
* Keys, passwords, or credentials
* Device details someone did not intend to publish

If exact data is not necessary, generalize it.

## Logs

Observer logs can be useful for troubleshooting and future activity summaries, but raw logs should be reviewed before being shared publicly.

Before publishing log excerpts, check for:

* Private messages
* Coordinates
* Private node names
* Keys
* Credentials
* Broker details
* Private IP addresses
* Admin URLs
* Usernames
* Internal paths
* Sensitive timestamps or routines

Use short, public-safe summaries when possible instead of raw logs.

## MQTT reporting

Observers may report activity through MQTT or another backend path.

MQTT-backed observer data should be documented in:

* `docs/mqtt.md`
* `docs/observed-activity-data.md`

Do not publish:

* Broker usernames
* Broker passwords
* Private broker hostnames
* Private IP addresses
* Admin URLs
* Full raw payloads that have not been reviewed

Public notes should describe what the data represents, not expose how to access private systems.

## Maintenance notes

Useful public-safe observer maintenance fields:

```text id="ohku4m"
Observer name:
Role:
Hardware:
Firmware or software:
Status:
General area:
Power:
Network path:
Last checked:
What it appears to hear:
Known issues:
Public output enabled: yes / no
Private details removed before sharing: yes / no
Notes:
```

Do not include live credentials or sensitive access details in maintenance notes.

## Future observers

Additional observers may be useful later, especially if placed in different general areas or terrain conditions.

Future observer notes should include:

* General area
* Purpose
* Hardware
* Firmware or software
* Whether it is temporary or long-term
* Whether public output is enabled
* What kind of data it reports
* What privacy limits apply
* How stale data is handled

Do not publish exact private observer locations unless sharing is clearly intentional and safe.

## Future integrations

Future observer-related integrations may include:

* Public activity summaries
* Status page updates
* Coverage page layers
* MQTT-backed dashboards
* Discord status summaries
* Observer health checks
* Maintenance alerts
* Field testing comparisons

Do not describe these as live until they are actually working and maintainable.

Automated observer output should be reviewed for usefulness and privacy before it is published to the website, Discord, or public data files.

## Related documentation

* `docs/infrastructure.md`
* `docs/nodes.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/infrastructure.html
* https://hampdencountymesh.org/status.html
* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/guides/nodes-repeaters-observers.html
* https://hampdencountymesh.org/guides/coverage-and-signal-checks.html
* https://hampdencountymesh.org/guides/operating-aids.html
