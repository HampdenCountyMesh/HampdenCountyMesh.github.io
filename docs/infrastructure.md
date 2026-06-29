# Infrastructure

This document summarizes site-maintained infrastructure and support systems for Hampden County Mesh.

It is intended for continuity, maintenance, and public-safe documentation. It should not include private credentials, private IP addresses, admin URLs, exact private locations, passwords, keys, or sensitive access details.

## Overview

Hampden County Mesh maintains a small set of support systems used for local mesh learning, observer work, logging, MQTT testing, documentation, field testing, and future public-safe activity views.

These systems support the website and local documentation work. They should not be described as proof that Hampden County Mesh owns or operates every node, observer, repeater, packet, marker, or device visible in the broader mesh ecosystem.

Use careful wording:

* site-maintained systems
* observed activity
* activity heard by site-maintained systems
* activity reported by public sources
* public sources where available
* local radio observations
* support infrastructure
* field testing
* wardriving results

Avoid wording that suggests complete coverage, guaranteed communication, emergency service capability, or ownership of all nearby mesh activity.

## Current Site-Maintained Systems

### Hampden Room Observer

Purpose:

* Mesh activity observation
* Local radio visibility
* Observer logging
* Public activity context where appropriate
* Future observed-activity data support

Status:

* Operational
* Manually documented

Hardware:

* Heltec V3

Notes:

* The observer helps show what can be heard from its location.
* An observer improves visibility, not necessarily radio coverage.
* Observer data should be described as observed activity, not as a complete map of all mesh activity.
* Do not publish private keys, exact private location details, credentials, or sensitive configuration.

### MeshCore-Hub

Purpose:

* Local infrastructure development
* MQTT testing
* Log collection
* Backend experiments
* Future support for status files, observer tools, or activity summaries

Status:

* Operational
* Development and support role

Platform:

* HP Stream laptop
* Linux-based system

Services and tools may include:

* Mosquitto MQTT
* Logging tools
* Development environment
* Local scripts
* Data storage for logs and testing

Notes:

* This system should be treated as support infrastructure.
* Do not publish private IP addresses, SSH details, usernames, passwords, broker credentials, or admin URLs.
* Local MQTT testing does not automatically mean there is a public broker.
* Public-facing automation should only be documented as live after it is working and maintainable.

### HampdenCountyTreeNode

Purpose:

* Outdoor mesh infrastructure
* Long-term deployment testing
* Local placement learning
* Solar node testing
* Local radio behavior learning

Status:

* Active
* Manually documented

Hardware:

* Seeed SenseCAP Solar Node P1-Pro

Location:

* General Hampden County area

Notes:

* Do not publish exact private coordinates or install details unless intentionally public and safe.
* Public notes should describe the node by general area, purpose, role, and observed behavior.
* Maintenance notes should be kept current enough that the node can be checked, updated, or removed if needed.

### Cassiopeia

Purpose:

* Portable field testing
* Mobile or temporary mesh testing
* Wardriving support
* Local placement comparison
* Device and antenna testing

Status:

* Active
* Manually documented

Hardware:

* Seeed Wio Tracker L1 Pro

Location:

* Portable / mobile

Notes:

* Cassiopeia should not be mapped as a fixed location.
* Public notes should describe field testing in general areas unless exact sharing is clearly safe.
* Wardriving or field-testing results should be treated as observations, not guaranteed coverage.
* Do not publish exact private routes, private addresses, or sensitive screenshots.

## Supporting Files and Data

Infrastructure-related public files may include:

* status data
* node or system data
* observed-activity data
* coverage or map data
* guide pages
* public-safe notes
* manually maintained status text

Possible repository paths may include:

* `assets/data/status.json`
* `assets/data/nodes.json`
* `assets/data/observed-activity.json`
* `assets/data/activity-map.json`
* `assets/data/hampden-county-towns.geojson`
* `assets/data/hampden-county-outline.geojson`

Use the actual current repository path when linking from website code.

These files should avoid private information.

Do not commit:

* Private node coordinates
* Private home addresses
* Private keys
* Broker passwords
* API tokens
* Admin URLs
* Private IP addresses
* Wi-Fi details
* SSH details
* Sensitive logs
* Screenshots showing credentials or private messages

## Observed Activity

Observed activity may come from:

* Site-maintained observers
* Local logs
* MQTT testing
* Public analyzers
* Public feeds
* Manual local notes
* Community reports
* Wardriving
* Field testing
* Future dashboards or integrations

Observed activity should be described carefully.

It may show that something was heard, logged, reported, mapped, or displayed by a system. It does not necessarily prove direct radio reachability from a user’s location, and it does not imply that Hampden County Mesh owns every device shown.

## MQTT and Backend Notes

MQTT and backend services are useful for development, logging, observer work, dashboards, and future integrations.

Current MQTT-related documentation should be kept in:

* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/observers.md`

General rule:

Public documentation may describe what MQTT is used for, but should not expose credentials, broker passwords, private hostnames, internal IP addresses, admin details, private system paths, or access instructions for private systems.

Local MQTT testing should not be described as a public broker unless a public broker actually exists and is intended to be supported.

## Discord and GitHub Integrations

Current public-facing integrations may include:

* GitHub webhook updates to Discord
* Manual status updates
* Documentation updates
* Future bot or relay planning notes

Future integrations may include:

* Observer status summaries
* MQTT-to-Discord relay output
* Mesh activity summaries
* Dashboard updates
* Automated status checks

Do not describe a future integration as live until it is actually working and maintainable.

Automated relay output should have a clear purpose and a clear channel before it is enabled. It should stay separate from normal discussion so automated messages do not bury human conversation.

## Maintenance Expectations

For each site-maintained system, keep enough public-safe information to answer:

* What is it?
* What is its role?
* Is it active, testing, offline, or retired?
* What general hardware is used?
* What public-facing function does it support?
* What should not be published?
* Where should related notes be kept?

Maintenance notes should avoid private access details.

Useful public-safe maintenance fields:

```text
System name:
Role:
General area:
Status:
Hardware:
Software or firmware:
Last checked:
Public notes:
Private details removed before sharing: yes / no
```

## Public Status Language

Use:

* active
* operational
* testing
* manually documented
* offline
* retired
* future work
* not automated yet

Avoid overclaiming with language like:

* guaranteed
* complete
* county-wide coverage
* emergency-ready
* official public safety system
* all nodes
* all traffic

## Future Work

Future infrastructure work may include:

* Additional fixed nodes
* Additional observers
* Improved public-safe status summaries
* Better observed-activity data handling
* MQTT logging improvements
* Dashboard or map improvements
* Coverage page observed-activity layers
* Discord bot or relay integrations
* More maintainable backend automation

Future work should be documented as future work until it is live.

## Related Documentation

* `docs/nodes.md`
* `docs/observers.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/guides/node-setups.html
* https://hampdencountymesh.org/guides/radio-aids.html
* https://hampdencountymesh.org/guides/using-your-node.html
* https://hampdencountymesh.org/guides/sharing-safely.html

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
