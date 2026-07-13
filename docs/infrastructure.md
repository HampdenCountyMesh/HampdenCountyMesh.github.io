# Infrastructure

This document summarizes project-maintained infrastructure used by Hampden County Mesh.

It is intended for continuity and maintenance. Because this repository is public, it must not contain passwords, private keys, tokens, broker credentials, private addresses, exact non-public installation locations, or instructions that would provide unauthorized access.

Detailed data-access and observed-activity rules belong in `docs/data-access-and-observed-activity.md`.

## Current Public Services

### Website

Public address:

https://hampdencountymesh.org/

The website is hosted through GitHub Pages and contains the public guides, updates, coverage information, and tracked Discord join routes.

The website repository is:

https://github.com/HampdenCountyMesh/HampdenCountyMesh.github.io

### Live Map

Public address:

https://map.hampdencountymesh.org/

The map displays geolocated MeshCore packet activity observed through participating systems.

It is not a complete inventory of every regional node or radio path. Quiet periods, incomplete locations, and activity that never reaches a participating observer are expected.

The preferred public presentation uses:

- Hampden County Mesh branding
- A dark map layer
- A Western Massachusetts regional view
- Clear observed-activity wording
- No public administrative controls or credentials

### Analyzer

Public address:

https://analyzer.hampdencountymesh.org/

The analyzer is the public CoreScope interface for more detailed packet, node, path, and observer information.

The map and analyzer display MeshCore activity. They should not be described as Meshtastic activity tools.

### MeshMapper

Western Massachusetts MeshMapper region:

https://psf.meshmapper.net/

MeshMapper is used for MeshCore field testing and recorded coverage checks.

It is an independent project and is not operated by Hampden County Mesh. It should not be presented as a Meshtastic field-testing tool.

## MeshCore-Hub

MeshCore-Hub is the primary project-maintained support host.

### Platform

- HP Stream laptop
- Linux
- Docker
- Internal and removable storage used for application data, logs, and backups

### Current Roles

MeshCore-Hub supports:

- Mosquitto MQTT
- CoreScope
- Observer data ingestion
- Packet and activity storage
- Public map and analyzer services
- Local logging
- Supporting scripts and maintenance work

### Storage

Persistent project data is kept under:

`/meshdata/`

CoreScope data is stored under:

`/meshdata/corescope-data/`

Paths may be documented where useful, but the repository must not contain private credentials, internal addresses, SSH access details, or sensitive configuration values.

## Mosquitto MQTT

Mosquitto provides the local MQTT transport used by participating observer systems and CoreScope.

General operating expectations:

- Anonymous access remains disabled
- Credentials are not committed to this repository
- Public documentation may describe the data flow without publishing connection secrets
- The broker should not be described as a public community broker unless that becomes an intentionally supported service
- External data sharing should be outbound-only unless a different arrangement is deliberately configured

Topic and feed details belong in:

`docs/data-access-and-observed-activity.md`

## CoreScope

CoreScope is the active observed-activity platform used for the public map and analyzer.

The active Docker service is named:

`corescope`

The service uses persistent storage under:

`/meshdata/corescope-data/`

The local service currently uses host port:

`8090`

Public visitors should use the map and analyzer hostnames rather than the local port.

The container should use a restart policy that allows it to recover after a host reboot.

Do not expose:

- Administrative controls
- Broker credentials
- Private configuration files
- Internal-only addresses
- Decrypted private messages
- Sensitive logs

## Observer Systems

Hampden County Mesh maintains or participates in observer systems that supply MeshCore activity to the project’s data pipeline.

The primary local observer is a Heltec V3 running MeshCore observer firmware.

An observer improves visibility into activity that it can hear. It does not necessarily improve radio coverage and does not provide a complete view of the regional mesh.

Public documentation should describe data as:

- Observed MeshCore activity
- Activity heard by participating systems
- Geolocated packet activity
- Partial regional activity

It should not claim:

- Every node is visible
- Every displayed node is currently reachable
- Every packet in the region is captured
- Every visible device belongs to Hampden County Mesh

## Radio Infrastructure and Field Devices

The project uses a mixture of fixed, portable, and experimental MeshCore devices for testing and regional participation.

These may include:

- Fixed solar-powered relay nodes
- Portable companion devices
- Room observers
- Experimental outdoor nodes
- Antenna and placement test equipment

A detailed public inventory of exact node locations is not required for maintaining the website or map services.

Public notes should generally use:

- Device role
- General area
- Hardware type
- Current status
- Publicly relevant behavior

Exact private placement details should only be published when the location owner has agreed and there is a clear reason to make the location public.

## Data Flow

The current high-level activity flow is:

1. Participating MeshCore observer systems receive radio packets.
2. Observer systems publish appropriate packet data through MQTT.
3. CoreScope consumes the configured packet feed.
4. CoreScope stores and processes observed activity.
5. The public map displays geolocated packet activity.
6. The analyzer provides more detailed activity views.

This flow represents observed activity, not guaranteed end-to-end radio coverage.

Data formats, MQTT topics, external sharing, and access boundaries belong in:

`docs/data-access-and-observed-activity.md`

## Public Wording

Use wording such as:

- Active
- Operational
- Testing
- Observed activity
- Participating observers
- Project-maintained infrastructure
- Partial regional view
- Independent nodes and services

Avoid wording such as:

- Complete county-wide coverage
- Guaranteed communication
- All nodes are online
- All regional traffic
- Every visible node belongs to Hampden County Mesh
- Official public-safety network

## Maintenance Checks

After infrastructure, map, analyzer, or observer changes, verify:

- The website still loads
- HTTPS works for the map and analyzer
- The expected Hampden County Mesh branding appears
- The map opens in an appropriate regional view
- The preferred dark map layer remains available
- CoreScope is receiving current packet data
- The map displays geolocated activity when such packets are received
- Analyzer pages load correctly
- Mobile map controls remain usable
- No credentials or administrative controls are exposed
- Containers recover after a host reboot
- Public website links remain correct
- Public wording still matches actual system behavior

A quiet map does not by itself indicate a failure. Check observer input, MQTT flow, and CoreScope ingestion before assuming the public service is broken.

## Service Failure and Fallback

The main website and Coverage page should remain usable when the live map or analyzer is temporarily unavailable.

Do not redirect a failed service to an unrelated site or present stale information as current activity.

A simple unavailable or maintenance response is preferable to a misleading redirect.

## Documentation Updates

When infrastructure changes, review:

- `README.md`
- `docs/README.md`
- `docs/data-access-and-observed-activity.md`
- `SECURITY.md`
- `coverage.html`
- Relevant update posts
- Navigation and public links
- Map and analyzer descriptions

Remove stale future-tense descriptions once a service becomes active.

Do not duplicate long data-access, security, or privacy rules in every infrastructure document. Link to the primary document instead.

## Related Documentation

- `docs/README.md`
- `docs/data-access-and-observed-activity.md`
- `docs/ASSETS.md`
- `docs/discord.md`
- `SECURITY.md`

Related public pages:

- https://hampdencountymesh.org/
- https://hampdencountymesh.org/coverage.html
- https://hampdencountymesh.org/building-better-mesh-coverage.html
- https://hampdencountymesh.org/updates/
- https://hampdencountymesh.org/guides/meshcore-basics.html
- https://hampdencountymesh.org/guides/sharing-safely.html