# Hampden County Mesh Documentation

This directory contains supporting documentation for Hampden County Mesh maintainers and contributors.

The `/docs/` folder is excluded from the generated public website. Public educational pages belong in `/guides/`.

## Documentation Index

### `ASSETS.md`

Licensing, attribution, privacy review, file naming, photographs, screenshots, icons, branding, and third-party media.

### `data-access-and-observed-activity.md`

Observed activity, MQTT data, broker access, public feeds, map data, privacy boundaries, and external integrations.

### `discord.md`

Discord structure, channels, roles, onboarding, moderation, integrations, and bot planning.

### `infrastructure.md`

Project-maintained servers, observers, brokers, CoreScope, fixed nodes, and related technical systems.

### `map-subdomain.md`

Configuration and maintenance notes for `map.hampdencountymesh.org`, the live activity map, and related public wording.

## Purpose

Documentation in this folder should help maintainers understand:

- What systems and services exist
- What each system is used for
- Which parts are public
- Which details must remain private
- How public pages relate to project infrastructure
- What needs to be updated when a system changes
- What remains incomplete or needs further testing

Technical details should remain here rather than turning beginner-facing guides into infrastructure manuals.

## Current Public Services

The primary public services are:

- Website: https://hampdencountymesh.org/
- Guides: https://hampdencountymesh.org/guides/
- Live map: https://map.hampdencountymesh.org/
- Analyzer: https://analyzer.hampdencountymesh.org/
- Coverage and MeshMapper page: https://hampdencountymesh.org/coverage.html
- Updates: https://hampdencountymesh.org/updates/
- Discord join route: https://hampdencountymesh.org/join/

The live map displays geolocated MeshCore packet activity observed through participating systems.

The analyzer provides more detailed packet, path, node, and observer information.

The Coverage page remains a secondary public page for MeshMapper and field-testing information.

## Documentation Standards

Keep documentation:

- Accurate and current
- Clear about what is active, planned, or retired
- Specific enough to support maintenance
- Careful about credentials and non-public infrastructure
- Consistent with the public website
- Free of unnecessary repeated warnings and disclaimers

Do not commit passwords, private keys, API tokens, broker credentials, private messages, or information that could provide unauthorized access.

Private locations and infrastructure details should only be documented when necessary, appropriate, and intentionally safe to publish in the repository.

Security-sensitive information should follow `SECURITY.md`.

## Public Wording

Hampden County Mesh should generally be described as a volunteer-run community project.

Use wording such as:

- Observed MeshCore activity
- Participating observers
- Regional mesh activity
- Field testing
- Project-maintained systems
- Independent nodes and services

Avoid implying:

- Complete regional coverage
- Guaranteed communications
- Ownership of every visible node or packet
- That every displayed device is currently reachable
- That independent regional systems are operated by Hampden County Mesh

## Maps and Observed Activity

The public map is active at:

https://map.hampdencountymesh.org/

Observed activity is not a complete inventory of the regional mesh. Quiet periods, incomplete locations, and partial radio paths are expected.

More detailed rules for public data, MQTT, broker access, and observed-activity integrations belong in:

- `data-access-and-observed-activity.md`
- `infrastructure.md`
- `map-subdomain.md`

For MeshCore field testing, use the Western Massachusetts MeshMapper region:

https://psf.meshmapper.net/

MeshMapper is an independent project and is not operated by Hampden County Mesh. It should not be presented as a Meshtastic field-testing tool.

## Maintenance

When a system or public service changes:

1. Update the relevant file in `/docs/`.
2. Check whether the website, guides, navigation, sitemap, README, or update posts also need changes.
3. Remove stale descriptions of active systems as planned or future work.
4. Check related links and tracked Discord routes.
5. Record unfinished work clearly without presenting it as live.

If a document becomes obsolete, remove it or replace it with a brief current note rather than leaving outdated instructions in place.

## Related Public Pages

- Website: https://hampdencountymesh.org/
- Guides: https://hampdencountymesh.org/guides/
- Getting Started: https://hampdencountymesh.org/guides/getting-started.html
- Recommended Settings: https://hampdencountymesh.org/guides/recommended-settings.html
- MeshCore Basics: https://hampdencountymesh.org/guides/meshcore-basics.html
- Meshtastic Basics: https://hampdencountymesh.org/guides/meshtastic-basics.html
- Sharing Safely: https://hampdencountymesh.org/guides/sharing-safely.html
- Building Better Mesh Coverage: https://hampdencountymesh.org/building-better-mesh-coverage.html
- Coverage: https://hampdencountymesh.org/coverage.html
- Updates: https://hampdencountymesh.org/updates/