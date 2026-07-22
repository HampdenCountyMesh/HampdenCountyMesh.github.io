# Hampden County Mesh Documentation

This directory contains internal supporting documentation for Hampden County Mesh maintainers and contributors.

The `/docs/` directory is excluded from the generated public website. Beginner-facing and public educational material belongs in `/guides/` or another public site page.

## Documentation Index

### [Asset Credits and Usage](ASSETS.md)

Licensing, attribution, photographs, branding, contributor media, metadata, privacy review, and file organization.

### [Data Access and Observed Activity](data-access-and-observed-activity.md)

Observed MeshCore activity, MQTT access, regional integrations, public-data boundaries, location information, and map output.

### [Discord](discord.md)

Discord channels, roles, onboarding, technical-help guidance, moderation, and privacy expectations.

### [Infrastructure](infrastructure.md)

Project-maintained hosting, Mosquitto, CoreScope, observer systems, storage, public services, and maintenance checks.

### [Map Subdomain](map-subdomain.md)

Configuration and maintenance notes for `map.hampdencountymesh.org` and the public live map.

## Purpose

Documentation in this directory should help maintainers understand:

- What systems and services exist
- What each system does
- Which components are public
- Which details must remain private
- How systems relate to the public website
- What must be checked when something changes
- What is active, experimental, incomplete, or retired

Technical maintenance details should remain here rather than turning public guides into infrastructure manuals.

## Documentation Standards

Keep documentation:

- Accurate and current
- Clear about what is active, planned, experimental, or retired
- Specific enough to support maintenance
- Consistent with the public website
- Free of unnecessary repetition
- Careful about private infrastructure and access details

Do not commit:

- Passwords or broker credentials
- Private keys or access tokens
- Active `.env` files
- Administrative login details
- Private messages
- Exact non-public installation locations
- Information that could provide unauthorized access

Use placeholders in public examples.

Security-sensitive information and reporting should follow [`../SECURITY.md`](../SECURITY.md).

## Public Project Links

- Website: https://hampdencountymesh.org/
- Guides: https://hampdencountymesh.org/guides/
- Live map: https://map.hampdencountymesh.org/
- Activity analyzer: https://analyzer.hampdencountymesh.org/
- Updates: https://hampdencountymesh.org/updates/
- Discord join route: https://hampdencountymesh.org/join/github-docs/
- Building Better Mesh Coverage: https://hampdencountymesh.org/building-better-mesh-coverage.html
- Western Massachusetts MeshMapper: https://psf.meshmapper.net/

MeshMapper is an independent MeshCore field-testing project and is not operated by Hampden County Mesh. It should not be presented as a Meshtastic field-testing tool.

## Maintenance

When a system or public service changes:

1. Update the document responsible for that subject.
2. Check the public website, guides, navigation, sitemap, README, and update posts for related references.
3. Remove stale future-tense descriptions after a service becomes active.
4. Remove or clearly mark retired paths and systems.
5. Check public links and tracked Discord routes.
6. Keep unfinished work clearly separated from active services.

Avoid copying the same policy or technical explanation into several files. Link to the document responsible for that subject instead.

Related repository documents:

- [`../README.md`](../README.md)
- [`../CONTRIBUTING.md`](../CONTRIBUTING.md)
- [`../CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)
- [`../SECURITY.md`](../SECURITY.md)
- [`../.github/SUPPORT.md`](../.github/SUPPORT.md)
