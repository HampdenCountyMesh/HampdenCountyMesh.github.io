# Data Access and Observed Activity

This document describes how Hampden County Mesh handles observed MeshCore activity, MQTT data, public map output, analyzer output, and trusted regional integrations.

It is intended for maintainers and contributors. It must not contain live credentials, private keys, broker passwords, tokens, or information that would provide unauthorized access.

## Current Public Services

### Live Map

Public address:

`https://map.hampdencountymesh.org/`

The map displays geolocated MeshCore packet activity observed through participating systems.

It is a partial activity view. It does not represent every node, packet, observer, or radio path in Western Massachusetts.

### Analyzer

Public address:

`https://analyzer.hampdencountymesh.org/`

The analyzer provides more detailed packet, node, path, and observer information through the project’s CoreScope deployment.

The map and analyzer are MeshCore activity tools. They should not be described as Meshtastic maps.

## What Observed Activity Means

Observed activity means that a packet, node, path, or other event was heard or reported by a participating system.

Observed activity may come from:

- A MeshCore observer
- MQTT packet reporting
- CoreScope
- Local logs
- A trusted regional feed
- A public analyzer
- MeshMapper field testing
- A public-safe community report

Observed activity does not automatically prove:

- Direct reachability from a particular user
- Two-way communication
- Complete regional coverage
- Continuous availability
- That a device is fixed in place
- That Hampden County Mesh owns or operates the device
- That every packet in the region was received
- That the displayed route is currently usable

## Current Data Flow

The current high-level flow is:

1. Participating MeshCore observers receive radio packets.
2. Appropriate packet data is published through MQTT.
3. CoreScope consumes the configured packet feed.
4. CoreScope stores and processes observed activity.
5. The public map displays geolocated packet activity.
6. The analyzer provides more detailed activity views.

A quiet map does not necessarily indicate a failure. Activity may be absent, lack location information, or not reach a participating observer.

## MQTT and Broker Access

MQTT is used as project support infrastructure for observer reporting, packet transport, logging, and CoreScope ingestion.

The broker is not offered as an anonymous public community broker.

General access rules:

- Anonymous access remains disabled
- Credentials are not committed to this repository
- Access is granted only when there is a clear project or integration need
- Read-only or narrowly limited access is preferred
- Access should be restricted through ACLs where practical
- Credentials must be revocable
- Credentials are shared privately, not through GitHub or public Discord channels
- Public documentation may explain the data flow without publishing connection details

Requests for legitimate integration access may be sent to:

`contact@hampdencountymesh.org`

Security concerns should be sent to:

`security@hampdencountymesh.org`

## Topic Structure and Regional Namespace

The general MeshCore packet topic shape is:

    meshcore/{IATA}/{PUBKEY}/packets

For Hampden County Mesh, the local regional namespace is:

    BAF

BAF refers to the Westfield-Barnes regional identifier used for Hampden County Mesh activity.

Do not use BDL as the default HCM namespace. BDL may appear only when specifically documenting Connecticut systems, historical configuration, or a neighboring integration.

Public examples should use placeholders rather than real public keys, usernames, passwords, or hostnames.

Example:

    meshcore/BAF/example-public-key/packets

## Trusted Regional Integrations

Hampden County Mesh may share selected observed activity outbound with trusted neighboring systems or regional tools.

Examples may include:

- Neighboring mesh communities
- Regional map operators
- Analyzer operators
- Documentation or research projects
- Public-safe activity aggregators

Before enabling or changing an integration, confirm:

- Who operates the receiving system
- What data is needed
- Which topics are required
- Whether read-only or outbound-only sharing is sufficient
- Whether access can be limited and revoked
- Whether private content or non-public locations could be exposed
- Who should be contacted if the integration fails
- Whether the public output describes the data accurately

Neighboring systems remain independent services. Sharing data with them does not make them part of Hampden County Mesh infrastructure.

## Public Data Boundaries

Public activity output may include:

- Public node names
- Packet timestamps
- Public keys used by MeshCore
- Packet types
- Repeater paths
- Observer attribution
- Coordinates intentionally included in packets
- Signal and routing information
- General activity summaries

Public output must not expose:

- Passwords or authentication secrets
- Broker credentials
- Private keys
- API tokens or webhook secrets
- Administrative interfaces
- Decrypted private messages
- Private configuration files
- Non-public installation details
- Sensitive logs
- Information that would provide unauthorized access

A public key transmitted by MeshCore is not the same as a private key and may legitimately appear in activity data.

Local addresses, device identifiers, and network details should be evaluated in context rather than treated as automatically secret. Remove them when they reveal internal access details or serve no public purpose.

## Location Information

Coordinates may appear when a device intentionally includes location information in a packet.

Their presence does not establish:

- Ownership by Hampden County Mesh
- Permission to visit or access the location
- Continuous device availability
- Accuracy of the reported location
- A complete infrastructure inventory

Do not add exact private locations manually without permission.

When adding explanatory notes, prefer:

- Town
- General area
- Public landmark
- Park
- Road corridor
- Hill or ridge
- Broad regional description

## Private Messages and Packet Content

Do not publish decrypted private messages or content intended for a restricted audience.

Public channels and packet metadata may appear in analyzer or map tooling when they are already part of the intentionally public MeshCore activity stream.

Before exposing a new packet field or message type, confirm that it is appropriate for public display.

## Credential Handling

Never commit:

- MQTT usernames or passwords
- Broker credentials
- API tokens
- Webhook URLs containing secrets
- Certificates or private keys
- `.env` files containing active secrets
- Administrative login details

Use placeholders in documentation:

    MQTT_HOST=example.invalid
    MQTT_PORT=1883
    MQTT_USERNAME=example-user
    MQTT_PASSWORD=not-a-real-password

If a credential is exposed:

1. Remove it from the public location.
2. Rotate or revoke it.
3. Check Git history, screenshots, logs, Discord, and caches.
4. Update affected configuration.
5. Report the issue according to `SECURITY.md`.

Removing a secret from the latest commit does not make the old value safe.

## Public Wording

Use wording such as:

- Observed MeshCore activity
- Activity heard by participating systems
- Geolocated packet activity
- Partial regional activity view
- Packet activity reported through MQTT
- Independent nodes and observers
- Public map data
- Field-testing results

Avoid claims such as:

- Complete regional coverage
- Guaranteed communication
- Every node is online
- Every visible node belongs to Hampden County Mesh
- All regional traffic is displayed
- Exact infrastructure ownership
- Official public-safety network

## Map and Analyzer Review

After changes to MQTT ingestion, CoreScope, the map, or the analyzer, verify:

- The map loads over HTTPS
- The analyzer loads over HTTPS
- New packet activity reaches CoreScope
- Geolocated packets appear on the map
- Packet and path views work in the analyzer
- The expected observer attribution appears
- The default map area remains appropriate
- The preferred dark map layer remains available
- No credentials or administrative controls are exposed
- Mobile controls remain usable
- Public wording still matches the data being displayed

## Relationship to MeshMapper

MeshMapper is used for MeshCore field testing and recorded coverage checks.

Western Massachusetts region:

`https://psf.meshmapper.net/`

MeshMapper is an independent project and is not operated by Hampden County Mesh.

MeshMapper results and the HCM live map show different information:

- MeshMapper records field-testing results and coverage observations
- The HCM map displays geolocated activity heard by participating systems

MeshMapper should not be presented as a Meshtastic field-testing tool.

## Relationship to the Coverage Page

The Coverage page remains a public entry point for:

- The HCM live map
- The analyzer
- MeshMapper
- Field-testing information
- Building Better Mesh Coverage

It should not duplicate the detailed broker, MQTT, or data-handling rules in this document.

Public page:

`https://hampdencountymesh.org/coverage.html`

## Maintenance

Update this document when:

- MQTT topic structures change
- The BAF namespace changes
- Broker access policy changes
- A trusted integration is added or removed
- Public map fields change
- CoreScope behavior changes
- New packet content is exposed publicly
- The map or analyzer hostname changes
- Privacy or credential-handling rules need clarification

Also review:

- `README.md`
- `docs/README.md`
- `docs/infrastructure.md`
- `SECURITY.md`
- `coverage.html`
- Relevant update posts

## Related Documentation

- `docs/README.md`
- `docs/infrastructure.md`
- `docs/ASSETS.md`
- `docs/discord.md`
- `SECURITY.md`

Related public services:

- `https://map.hampdencountymesh.org/`
- `https://analyzer.hampdencountymesh.org/`
- `https://hampdencountymesh.org/coverage.html`
- `https://hampdencountymesh.org/building-better-mesh-coverage.html`
- `https://hampdencountymesh.org/guides/sharing-safely.html`