# Infrastructure

This document summarizes project-maintained infrastructure used by Hampden County Mesh.

It is intended for continuity and maintenance. Because the repository is public, do not include passwords, tokens, private keys, broker credentials, private addresses, exact non-public installation locations, SSH details, or instructions that could provide unauthorized access.

Data-sharing, MQTT-access, privacy, and observed-activity rules belong in `docs/data-access-and-observed-activity.md`.

## Public Services

### Website

https://hampdencountymesh.org/

The public website is hosted through GitHub Pages and contains guides, updates, project information, and tracked Discord join routes.

Repository:

https://github.com/HampdenCountyMesh/HampdenCountyMesh.github.io

### Live Map

https://map.hampdencountymesh.org/

The map displays geolocated MeshCore activity heard through participating systems.

It is a partial activity view, not a complete inventory of regional nodes or radio paths.

### Activity Analyzer

https://analyzer.hampdencountymesh.org/

The analyzer is the public CoreScope interface for more detailed MeshCore packet, node, path, and observer information.

### Health Check

https://healthcheck.hampdencountymesh.org/app

Health Check gives a user a test code to send on the MeshCore `#health-check` channel, then reports which participating observers received that message.

A result confirms observer reception of that message. It is not a complete coverage test or a guarantee of a reliable two-way route.

The map, analyzer, and health check are MeshCore tools. They should not be described as Meshtastic tools.

## MeshCore-Hub

MeshCore-Hub is the primary project-maintained support host.

Platform:

- HP Stream laptop
- Linux
- Docker
- Internal and removable storage for application data, logs, and backups

Current roles:

- Mosquitto MQTT
- CoreScope
- Observer-data ingestion
- Packet and activity storage
- Public map, analyzer, and health-check support
- Local logging
- Maintenance scripts

Persistent project data is stored under:

`/meshdata/`

CoreScope data is stored under:

`/meshdata/corescope-data/`

These paths may be documented publicly, but credentials, internal addresses, administrative access details, and private configuration values must remain private.

## Mosquitto MQTT

Mosquitto provides MQTT transport for observer reporting, packet movement, integrations, logging, and CoreScope ingestion.

Operating expectations:

- Anonymous access remains disabled
- Credentials are not committed to the repository
- The broker is not presented as an anonymous public community service
- Access is limited to clear project or integration needs
- External sharing should be narrowly scoped and revocable

Topic structure, regional namespaces, external feeds, and public-data boundaries are documented in:

`docs/data-access-and-observed-activity.md`

## CoreScope

CoreScope processes observed MeshCore activity for the public map and analyzer.

Active Docker service:

`corescope`

Persistent data:

`/meshdata/corescope-data/`

Local host port:

`8090`

Public visitors should use the map and analyzer hostnames rather than the local port.

The service should:

- Restart automatically after host reboots
- Store persistent data outside the container
- Remain accessible publicly only through the intended HTTPS services
- Avoid exposing administrative controls, credentials, private configuration, decrypted messages, or sensitive logs

## MeshCore Health Check

The health-check service listens for matching test codes and reports which participating observers received them.

Active Docker service:

`mesh-health-check`

Local host port:

`3090`

Public visitors should use the Health Check HTTPS address rather than the local port.

The service should:

- Explain the exact channel and test-code steps on its public page
- Expire or discard test codes according to its configured behavior
- Avoid exposing credentials, private messages, internal addresses, or sensitive logs
- Distinguish one-way observer reception from guaranteed two-way communication

## Observer Systems

Participating MeshCore observers supply activity to the project data pipeline.

The primary local observer is a Heltec V3 running MeshCore observer firmware.

An observer improves visibility into radio activity it can hear. It does not necessarily improve radio coverage and cannot provide a complete view of the regional mesh.

Public descriptions should use wording such as:

- Observed MeshCore activity
- Activity heard by participating systems
- Geolocated packet activity
- Partial regional activity view

Do not imply that every visible node is reachable, project-owned, or continuously online.

## Radio and Field Equipment

Hampden County Mesh uses fixed, portable, and experimental MeshCore equipment for testing and regional participation.

This may include:

- Solar-powered relay nodes
- Portable companion devices
- Room observers
- Experimental outdoor nodes
- Antenna and placement test equipment

Public notes generally need only:

- Device role
- Hardware type
- General area
- Current status
- Publicly relevant behavior

Exact private placement details should only be published with permission and a clear public reason.

## Data Flow

The high-level activity flow is:

1. Participating observers receive MeshCore radio packets.
2. Appropriate packet data is published through MQTT.
3. CoreScope consumes and processes the configured feed.
4. The live map displays geolocated activity.
5. The analyzer provides more detailed activity views.

This represents observed activity, not guaranteed end-to-end communication or complete regional coverage.

## Maintenance Checks

After infrastructure, observer, map, analyzer, or health-check changes, verify:

- The website, map, analyzer, and health check load over HTTPS
- CoreScope is receiving current packet data
- Geolocated activity appears when suitable packets are received
- Packet, path, node, and observer views work
- A generated health-check code can be reported by a participating observer
- The map opens in an appropriate regional view
- Mobile controls remain usable
- Containers recover after a host reboot
- Public links remain current
- No credentials, private content, or administrative controls are exposed
- Public wording matches actual service behavior

A quiet map does not by itself indicate a failure. Check observer input, MQTT flow, and CoreScope ingestion before treating it as an outage.

## Service Failures

The main website should remain usable when the map, analyzer, or health check is temporarily unavailable.

Do not redirect a failed service to an unrelated site or present stale information as current activity. A clear unavailable or maintenance response is preferable.

## External Tools

Western Massachusetts MeshMapper:

https://psf.meshmapper.net/

MeshMapper is an independent MeshCore field-testing service and is not operated by Hampden County Mesh.

It should not be described as HCM infrastructure or as a Meshtastic field-testing tool.

## Documentation Updates

Review this document when:

- Public service addresses change
- Host responsibilities change
- Storage paths change
- MQTT or CoreScope deployment changes
- Observer systems are added or removed
- Restart, backup, or recovery procedures change
- A service becomes active, retired, or replaced

Also review:

- `README.md`
- `docs/README.md`
- `docs/data-access-and-observed-activity.md`
- `SECURITY.md`
- Relevant update posts
- Public navigation and service links

## Related Documentation

- `docs/data-access-and-observed-activity.md`
- `docs/ASSETS.md`
- `docs/discord.md`
- `SECURITY.md`

Related public pages:

- https://hampdencountymesh.org/
- https://hampdencountymesh.org/simulator/
- https://hampdencountymesh.org/network-tools/
- https://hampdencountymesh.org/building-better-mesh-coverage.html
- https://hampdencountymesh.org/updates/
- https://hampdencountymesh.org/guides/meshcore-basics.html
- https://hampdencountymesh.org/guides/sharing-safely.html
