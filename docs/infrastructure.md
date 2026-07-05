# Infrastructure

This document summarizes site-maintained infrastructure and support systems for Hampden County Mesh.

It is intended for continuity, maintenance, and public-safe documentation. It should not include private credentials, private IP addresses, admin URLs, exact private locations, passwords, keys, or sensitive access details.

## Overview

Hampden County Mesh maintains a small set of support systems used for local mesh learning, observer work, logging, MQTT testing, documentation, field testing, MeshMapper field testing, and future public-safe activity views.

These systems support the website and local documentation work. They should not be described as proof that Hampden County Mesh owns or operates every node, observer, gateway, repeater, packet, marker, or device visible in the broader mesh ecosystem.

Detailed rules for MQTT, broker access, CoreScope data, public feeds, source types, privacy review, and observed-activity wording live in `docs/data-access-and-observed-activity.md`.

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
* Public activity publication is not automated on the main website yet

Hardware:

* Heltec V3

System:

* MeshCore / LetsMesh observer firmware

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
* CoreScope local observed-activity testing
* Future support for public-safe map, status, observer, or activity-summary work

Status:

* Operational
* Development and support role

Platform:

* HP Stream laptop
* Linux-based system

Services and tools may include:

* Mosquitto MQTT
* CoreScope local observed-activity tooling
* Logging tools
* Development environment
* Local scripts
* Data storage for logs and testing

Notes:

* This system should be treated as support infrastructure.
* CoreScope is local tooling unless it is intentionally published through the public map subdomain.
* Local MQTT testing does not automatically mean there is a public broker.
* Public-facing automation should only be documented as live after it is working, maintainable, and reviewed for privacy.
* Do not publish private IP addresses, SSH details, usernames, passwords, broker credentials, admin URLs, private paths, or internal access details.

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

System:

* MeshCore

Location:

* General Hampden County area

Notes:

* Do not publish exact private coordinates or install details unless intentionally public and safe.
* Public notes should describe the node by general area, purpose, role, and observed behavior.
* Maintenance notes should track whether it is active, reachable, powered, and physically secure.
* Public notes should not imply guaranteed coverage from its location.

### Cassiopeia

Purpose:

* Portable field testing
* Mobile or temporary mesh testing
* MeshCore field-testing support
* Local placement comparison
* Device and antenna testing

Status:

* Active
* Manually documented

Hardware:

* Seeed Wio Tracker L1 Pro

System:

* MeshCore

Location:

* Portable / mobile

Notes:

* Cassiopeia should not be mapped as a fixed location.
* Public notes should describe field testing in general areas unless exact sharing is clearly safe.
* MeshMapper and field-testing results should be treated as observations, not guaranteed coverage.
* Do not publish exact private routes, private addresses, or sensitive screenshots.

## Supporting Files and Data

Infrastructure-related public files may include:

* boundary data
* map-support data
* guide pages
* public-safe notes
* manually maintained status text
* future public-safe observed-activity data

Possible repository paths may include:

* `data/`
* `data/boundaries/`
* `assets/data/`
* `docs/`
* `guides/`
* a dedicated public map service
* a CoreScope-style public service

Use the actual current repository path when linking from website code.

Old placeholder public data files such as `nodes.json`, `status.json`, and `observed-activity.json` should not be referenced as active unless they are recreated intentionally with a current maintained workflow.

## Observed Activity

Observed activity may come from:

* Site-maintained observers
* Local logs
* MQTT testing
* CoreScope local tooling
* Public analyzers
* Public feeds
* Manual local notes
* Community reports
* MeshMapper, for MeshCore field testing
* Field testing
* Future dashboards or integrations

Observed activity should be described carefully.

It may show that something was heard, logged, reported, mapped, or displayed by a system. It does not necessarily prove direct radio reachability from a user’s location, and it does not imply that Hampden County Mesh owns every device shown.

For detailed observed-activity rules, use `docs/data-access-and-observed-activity.md`.

For MeshCore field testing, Hampden County Mesh points people toward MeshMapper:

https://meshmapper.net/

## MQTT, CoreScope, and Backend Notes

MQTT and backend services are useful for development, logging, observer work, dashboards, maps, and future integrations.

CoreScope is currently treated as local observed-activity tooling unless or until it is intentionally published through a public Hampden County Mesh map path.

Current backend-related documentation should be kept in:

* `docs/data-access-and-observed-activity.md`
* `docs/map-subdomain.md`

General rule:

Public documentation may describe what MQTT, observers, and CoreScope-style tooling are used for, but should not expose credentials, broker passwords, private hostnames, internal IP addresses, admin details, private system paths, or access instructions for private systems.

Local MQTT testing should not be described as a public broker unless a public broker actually exists and is intended to be supported.

Local CoreScope testing should not be described as the public Hampden County Mesh map unless the public map service is intentionally configured, maintainable, and reviewed for privacy.

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
* CoreScope-style public map updates

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

    System name:
    Role:
    General area:
    Status:
    Hardware:
    Software or firmware:
    Public access: yes / no
    Last checked:
    Public notes:
    Private details removed before sharing: yes / no

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
* local tooling
* public map not published yet

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
* Coverage page observed-activity summaries
* Public map service through `map.hampdencountymesh.org`
* Discord bot or relay integrations
* More maintainable backend automation

Future work should be documented as future work until it is live.

## Related Documentation

* `docs/README.md`
* `docs/data-access-and-observed-activity.md`
* `docs/map-subdomain.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/updates/
* https://hampdencountymesh.org/guides/getting-started.html
* https://hampdencountymesh.org/guides/recommended-settings.html
* https://hampdencountymesh.org/guides/meshcore-basics.html
* https://hampdencountymesh.org/guides/meshtastic-basics.html
* https://hampdencountymesh.org/guides/sharing-safely.html

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service, public safety system, or replacement for 911.