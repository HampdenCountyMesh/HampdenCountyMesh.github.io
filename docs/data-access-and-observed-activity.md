# Data Access and Observed Activity

This document explains how Hampden County Mesh handles observed MeshCore activity, MQTT data, public map and analyzer output, and regional data sharing.

It is intended for maintainers and contributors. Do not add credentials, private keys, tokens, broker passwords, administrative addresses, or other information that could provide unauthorized access.

## Public Services

### Live Map

https://map.hampdencountymesh.org/

The live map displays geolocated MeshCore activity heard through participating systems.

It is a partial activity view. It does not represent every node, packet, observer, or usable radio path in Western Massachusetts.

### Activity Analyzer

https://analyzer.hampdencountymesh.org/

The analyzer provides more detailed MeshCore packet, node, path, and observer information through the project’s CoreScope deployment.

### Health Check

https://healthcheck.hampdencountymesh.org/app

Health Check matches a temporary test code sent on the MeshCore `#health-check` channel with reports from participating observers.

Its result means that a listed observer heard that test message. It does not establish complete coverage, two-way reachability, or a reliable route to every node.

The map, analyzer, and health check are MeshCore tools. They should not be described as Meshtastic tools.

## What Observed Activity Means

Observed activity means that a packet, node, path, or related event was heard or reported by a participating system.

It may come from:

- A MeshCore observer
- MQTT packet reporting
- CoreScope
- Local logs
- A trusted regional feed
- MeshMapper field testing
- A public-safe community report

Observed activity does not automatically prove:

- Direct reachability from a particular user
- Two-way communication
- Complete regional coverage
- Continuous availability
- That a device is fixed in place
- That Hampden County Mesh owns or operates the device
- That every regional packet was received
- That a displayed route is currently usable

A quiet map does not necessarily indicate a service failure. Activity may be absent, may not contain location information, or may not reach a participating observer.

## High-Level Data Flow

The general data flow is:

1. Participating MeshCore observers receive radio packets.
2. Appropriate packet data is published through MQTT.
3. CoreScope consumes and processes the configured packet feed.
4. The live map displays geolocated activity.
5. The analyzer provides more detailed activity views.

Detailed host, account, credential, and administrative information belongs in private configuration—not in this repository.

## MQTT Access

MQTT supports observer reporting, packet transport, logging, integrations, and CoreScope ingestion.

The project broker is not offered as an anonymous public community broker.

General rules:

- Anonymous access remains disabled
- Credentials are never committed to the repository
- Access requires a clear project or integration need
- Read-only or narrowly limited access is preferred
- ACL restrictions should be used where practical
- Access must be revocable
- Credentials are shared privately
- Public documentation may explain the data flow without publishing connection details

Integration questions may be sent to:

[contact@hampdencountymesh.org](mailto:contact@hampdencountymesh.org)

Security concerns should be sent to:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)

## Topic Structure and Regional Namespace

The general MeshCore packet topic shape is:

    meshcore/{IATA}/{PUBKEY}/packets

The Hampden County Mesh regional namespace is:

    BAF

BAF is the Westfield-Barnes regional identifier used for HCM activity.

Do not use BDL as the default HCM namespace. BDL may appear when documenting Connecticut systems, neighboring integrations, or historical configuration.

Public examples should use placeholders rather than real usernames, passwords, hostnames, or other access details.

Example:

    meshcore/BAF/example-public-key/packets

## Regional Integrations

Hampden County Mesh may share selected observed activity with trusted neighboring communities, regional maps, analyzers, or other public-safe tools.

Before enabling or changing an integration, confirm:

- Who operates the receiving system
- What data is needed
- Which topics or fields are required
- Whether outbound-only or read-only access is sufficient
- Whether access can be limited and revoked
- Whether private content or non-public locations could be exposed
- Who maintains the integration
- Whether the receiving service describes the data accurately

Neighboring systems remain independent. Sharing data with them does not make them part of Hampden County Mesh infrastructure.

## Public Data Boundaries

Public activity output may include:

- Public node names
- Packet timestamps
- MeshCore public keys
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

A MeshCore public key is not the same as a private key and may legitimately appear in activity data.

Local addresses, device identifiers, and network details should be removed when they reveal internal access information or serve no public purpose.

## Messages and Location Information

Do not publish decrypted private messages or content intended for a restricted audience.

Before exposing a new packet field or message type, confirm that it is appropriate for public display.

Coordinates intentionally transmitted by a device may appear in public activity tools. Their presence does not establish:

- Ownership by Hampden County Mesh
- Permission to enter or visit the location
- Accuracy of the location
- Continuous device availability
- A complete infrastructure inventory

Do not manually add exact private locations without permission.

For explanatory notes, prefer a town, general area, public landmark, road corridor, hill, ridge, or broad regional description.

## Public Wording

Preferred wording includes:

- Observed MeshCore activity
- Activity heard by participating systems
- Geolocated packet activity
- Partial regional activity view
- Packet activity reported through MQTT
- Independent nodes and observers
- Field-testing results

Avoid claims such as:

- Complete regional coverage
- Guaranteed communication
- Every node is online
- Every visible node belongs to Hampden County Mesh
- All regional traffic is displayed
- Exact infrastructure ownership
- Official public-safety network

## MeshMapper

Western Massachusetts MeshMapper:

https://psf.meshmapper.net/

MeshMapper is an independent project used for MeshCore field testing and recorded coverage observations.

MeshMapper and the HCM live map display different information:

- MeshMapper records field-test and coverage observations
- The HCM map displays geolocated activity heard by participating systems

MeshMapper should not be presented as a Meshtastic field-testing tool.

## Review After Data Changes

After changes to MQTT ingestion, CoreScope, the map, the analyzer, or Health Check, verify that:

- The public map, analyzer, and health check load correctly
- New packet activity reaches the expected systems
- Geolocated activity appears where expected
- Packet, path, and observer information remains accurate
- No credentials, private content, or administrative controls are exposed
- Public wording still matches the data being displayed

## Maintenance

Update this document when:

- MQTT topic structures change
- The BAF namespace changes
- Broker access policy changes
- A regional integration is added or removed
- Public map or analyzer fields change
- Health-check collection or result behavior changes
- New packet content is displayed publicly
- The map or analyzer hostname changes
- The health-check hostname or public path changes
- Privacy or access rules change

Related documentation:

- `docs/infrastructure.md`
- `docs/ASSETS.md`
- `SECURITY.md`
- `https://hampdencountymesh.org/guides/sharing-safely.html`
- `https://hampdencountymesh.org/building-better-mesh-coverage.html`
