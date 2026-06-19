# Infrastructure

This document summarizes site-maintained infrastructure and support systems for Hampden County Mesh.

It is intended for continuity, maintenance, and public-safe documentation. It should not include private credentials, private IP addresses, admin URLs, exact private locations, passwords, keys, or sensitive access details.

## Overview

Hampden County Mesh maintains a small set of support systems used for local mesh learning, signal checks, observer work, logging, and future public activity views.

These systems support the website and local documentation work. They should not be described as proof that Hampden County Mesh owns or operates every node, observer, repeater, packet, marker, or device visible in the broader mesh ecosystem.

Use careful wording:

* site-maintained systems
* observed activity
* activity heard by project-operated systems
* public sources where available
* local signal notes
* support infrastructure

Avoid wording that suggests complete coverage, guaranteed communication, or ownership of all nearby mesh activity.

## Current site-maintained systems

### Hampden Room Observer

Purpose:

* Mesh activity observation
* Local signal awareness
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
* Linux Mint

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
* Local coverage and placement learning
* Solar node testing

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

## Supporting files and data

Infrastructure-related public files may include:

* `status.json`
* `nodes.json`
* coverage or map data
* guide pages
* public notes
* manually maintained status text

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

## Observed activity

Observed activity may come from:

* Site-maintained observers
* Local logs
* MQTT testing
* Public analyzers
* Public feeds
* Manual field notes
* Community reports
* Future dashboards or integrations

Observed activity should be described carefully.

It may show that something was heard, logged, reported, or displayed by a system. It does not necessarily prove direct radio reachability from a user’s location, and it does not imply that Hampden County Mesh owns every device shown.

## MQTT and backend notes

MQTT and backend services are useful for development, logging, observer work, dashboards, and future integrations.

Current MQTT-related documentation should be kept in:

* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/observers.md`

General rule:

Public documentation may describe what MQTT is used for, but should not expose credentials, broker passwords, private hostnames, internal IPs, or admin details.

## Discord and GitHub integrations

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

Automated relay output should have a clear purpose and a clear channel before it is enabled.

## Maintenance expectations

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

## Public status language

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

## Future work

Future infrastructure work may include:

* Additional fixed nodes
* Additional observers
* Improved public status summaries
* Better observed-activity data handling
* Coverage and signal check documentation
* MQTT logging improvements
* Dashboard or map improvements
* Discord bot or relay integrations
* More maintainable backend automation

Future work should be documented as future work until it is live.

## Related documentation

* `docs/nodes.md`
* `docs/observers.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/infrastructure.html
* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/status.html
* https://hampdencountymesh.org/guides/nodes-repeaters-observers.html
* https://hampdencountymesh.org/guides/documenting-a-node.html
* https://hampdencountymesh.org/guides/operating-aids.html
