# Node Notes

This document tracks public-safe notes about known Hampden County Mesh devices, site-maintained mesh hardware, and important node roles.

It should not include private keys, passwords, exact private coordinates, private home addresses, broker credentials, admin URLs, private IP addresses, owner keys, or sensitive deployment details.

## Purpose

This file is used to document:

* Site-maintained nodes
* Observers
* Repeaters
* Portable devices
* Outdoor infrastructure
* General device roles
* Public-safe maintenance notes
* General status notes

This document is not intended to list every independent mesh device in Hampden County.

A device being heard, mapped, observed, or mentioned does not mean it is owned, operated, endorsed, or maintained by Hampden County Mesh.

## Public-safe status terms

Use simple status labels:

* `active`
* `operational`
* `testing`
* `offline`
* `maintenance needed`
* `retired`
* `unknown`

Avoid overclaiming with terms like:

* guaranteed coverage
* county-wide coverage
* emergency-ready
* official public safety system
* complete network

## Documented site-maintained devices

### Hampden Room Observer

Role:

* Observer

System:

* MeshCore / LetsMesh observer firmware

Hardware:

* Heltec V3

Status:

* Operational
* Manually documented

Purpose:

* Mesh activity observation
* Local radio visibility
* Observer logging
* Public activity context where appropriate
* Future observed-activity data support

General location:

* Hampden County area

Public notes:

* This observer helps show what can be heard from its location.
* It improves visibility, not necessarily radio coverage.
* Observer data should be described as observed activity.
* It should not be treated as proof of complete county-wide coverage.
* It should not imply ownership of all nodes or activity shown by public tools.

Do not publish:

* Exact private location
* Private keys
* Owner keys
* Wi-Fi details
* Broker credentials
* Admin URLs
* Private logs containing sensitive details

Related documentation:

* `docs/observers.md`
* `docs/observed-activity-data.md`
* `docs/mqtt.md`
* `docs/infrastructure.md`

### HampdenCountyTreeNode

Role:

* Outdoor fixed node
* Solar node
* Long-term deployment test

System:

* MeshCore

Hardware:

* Seeed SenseCAP Solar Node P1-Pro

Status:

* Active
* Manually documented

Purpose:

* Outdoor mesh infrastructure
* Long-term placement learning
* Solar node testing
* Local radio behavior learning

General location:

* Hampden County area

Public notes:

* This node is used to learn from a longer-term outdoor placement.
* Public notes should use general location language unless exact sharing is intentionally safe.
* Maintenance notes should track whether it is active, reachable, powered, and physically secure.

Do not publish:

* Exact private coordinates
* Install details that would expose a private location
* Private keys
* Owner keys
* Admin details
* Photos that reveal a private location unintentionally

Related documentation:

* `docs/infrastructure.md`
* `docs/observed-activity-data.md`
* `docs/ASSETS.md`
* `guides/node-setups.html`
* `guides/radio-aids.html`

### Cassiopeia

Role:

* Portable device
* Companion/test node

System:

* MeshCore

Hardware:

* Seeed Wio Tracker L1 Pro

Status:

* Active / testing

Purpose:

* Portable local use
* Mobile use
* Local range and placement comparison
* Beginner guide and photo documentation support

General location:

* Used around Hampden County and nearby areas

Public notes:

* This device is useful for portable checks and learning how MeshCore behaves from different places.
* Public notes should describe general areas, not exact private locations.
* Photos of the device should be checked for EXIF data, screens, reflections, addresses, plates, and other private details before publishing.

Do not publish:

* Owner keys
* Private keys
* Exact private locations
* Private messages
* Sensitive screenshots
* Photos with unreviewed metadata

Related documentation:

* `docs/ASSETS.md`
* `guides/using-your-node.html`
* `guides/radio-aids.html`
* `guides/node-setups.html`

## Support systems

Some systems support nodes but are not themselves normal mesh nodes.

### MeshCore-Hub

Role:

* Local support system
* MQTT testing
* Logging and development system

Status:

* Operational
* Development and support role

Platform:

* HP Stream laptop
* Linux-based system

Purpose:

* MQTT broker testing
* Observer and log work
* Local infrastructure development
* Future support for status files, activity summaries, or automation

Notes:

* This system is documented in `docs/infrastructure.md` and `docs/mqtt.md`.
* It should not be treated as a public broker unless intentionally configured and documented that way.
* Do not publish private IPs, SSH details, admin URLs, credentials, broker passwords, or sensitive paths.

## Node documentation template

Use this template when documenting a new node, repeater, observer, or portable device.

```text
Node name:
Role: Portable node / Fixed node / Repeater / Observer / Room server / Hub / Bridge
System: MeshCore / Meshtastic / Other
Hardware:
Firmware or software:
Status: active / operational / testing / offline / maintenance needed / retired / unknown
General area:
Power:
Antenna:
Antenna placement:
Indoor / outdoor:
Temporary / long-term:
Purpose:
What it appears to hear:
What appears to hear it:
Result source: direct radio / observer / MQTT / map / dashboard / local log / unknown
Maintainer or contact, if safe to share:
Private details removed before sharing: yes / no
Notes:
```

## Public location guidance

For public notes, use general areas unless exact sharing is clearly intentional and safe.

Usually safe:

* Town
* Public park
* Public landmark
* General hill or valley area
* Road corridor
* Broad neighborhood
* “western Hampden County”
* “near Mount Tom”
* “Westfield area”

Avoid posting publicly:

* Exact home addresses
* Exact private coordinates
* Private deployment locations
* Private repeater locations
* Private infrastructure locations
* Photos that reveal private locations
* Someone else’s location without permission

## Maintenance notes

Use this template when checking a site-maintained device.

```text
Maintenance note
Node or system name:
Date checked:
Checked by:
Status:
Power:
Battery or solar status:
Antenna:
Mounting:
Firmware or software:
What changed:
Needs attention:
Private details removed before sharing: yes / no
Notes:
```

Maintenance notes should help future maintainers understand whether something is still active, what changed, and what needs to be checked again.

## Observed activity notes

When a node appears on a map, analyzer, dashboard, MQTT feed, or observer log, describe it carefully.

Observed activity may mean something was:

* Heard directly over radio
* Heard by an observer
* Reported through MQTT
* Shown on a public map
* Logged by a local system
* Shared by a community member
* Seen through an internet-connected path

It does not always mean:

* The node is directly reachable from your location
* Hampden County Mesh owns the node
* The node is fixed
* The node is still online
* Coverage is complete
* The data is current

## Privacy and safety

Do not commit:

* Private keys
* Owner keys
* Passwords
* Broker credentials
* API tokens
* Admin URLs
* Private IP addresses
* Wi-Fi details
* SSH details
* Exact private node coordinates
* Private home addresses
* Sensitive logs
* Screenshots with private details
* Photos that reveal private locations unintentionally

When in doubt, generalize the note or keep the detail private.

## Related documentation

* `docs/infrastructure.md`
* `docs/observers.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/guides/nodes-repeaters-observers.html
* https://hampdencountymesh.org/guides/node-setups.html
* https://hampdencountymesh.org/guides/radio-aids.html
* https://hampdencountymesh.org/guides/using-your-node.html
* https://hampdencountymesh.org/guides/sharing-safely.html
* https://hampdencountymesh.org/coverage.html

## Project disclaimer

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
