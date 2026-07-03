# Node Notes

This document tracks public-safe notes about known Hampden County Mesh devices, site-maintained mesh hardware, and important node roles.

It should not include private keys, passwords, exact private coordinates, private home addresses, broker credentials, admin URLs, private IP addresses, owner keys, or sensitive deployment details.

## Purpose

This file is used to document:

* Site-maintained nodes
* Observers
* Gateways
* Repeaters
* Portable devices
* Outdoor infrastructure
* General device roles
* Public-safe maintenance notes
* General status notes

This document is not intended to list every independent mesh device in Hampden County.

A device being heard, mapped, observed, or mentioned does not mean it is owned, operated, endorsed, or maintained by Hampden County Mesh.

## Public-Safe Status Terms

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

## Documented Site-Maintained Devices

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
* Public notes should not imply guaranteed coverage from its location.

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
* `guides/nodes-repeaters-observers.html`
* `guides/sharing-safely.html`

### Cassiopeia

Role:

* Portable device
* Companion node
* Field-testing node

System:

* MeshCore

Hardware:

* Seeed Wio Tracker L1 Pro

Status:

* Active
* Manually documented

Purpose:

* Portable local use
* Mobile use
* Local range and placement comparison
* MeshCore coverage-check support
* Beginner guide and photo documentation support

General location:

* Portable / mobile
* Used around Hampden County and nearby areas

Public notes:

* This device is useful for portable checks and learning how MeshCore behaves from different places.
* Cassiopeia should not be mapped as a fixed location.
* Public notes should describe general areas, not exact private locations.
* Field-testing, MeshMapper, and MeshCore coverage-check results should be treated as observations, not guaranteed coverage.
* Photos of the device should be checked for EXIF data, screens, reflections, addresses, plates, and other private details before publishing.

Do not publish:

* Owner keys
* Private keys
* Exact private locations
* Private messages
* Sensitive screenshots
* Exact private routes
* Photos with unreviewed metadata

Related documentation:

* `docs/ASSETS.md`
* `docs/observed-activity-data.md`
* `guides/nodes-repeaters-observers.html`
* `guides/sharing-safely.html`

## Support Systems

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
* Do not publish private IP addresses, SSH details, admin URLs, credentials, broker passwords, usernames, or sensitive paths.

## Node Documentation Template

Use this template when documenting a new node, repeater, observer, gateway, or portable device.

```text
Node name:
Role: Portable node / Fixed node / Repeater / Observer / Gateway / Room server / Hub / Bridge
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
Result source: direct_radio / observer / mqtt / map / dashboard / local_log / meshmapper / meshcore_coverage_check / field_test / manual_note / public_source / unknown
Maintainer or contact, if safe to share:
Private details removed before sharing: yes / no
Notes: