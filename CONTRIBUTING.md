# Contributing to Hampden County Mesh

Hampden County Mesh is a volunteer-run Western Massachusetts community for MeshCore, Meshtastic, and local mesh radio.

Contributions do not need to involve code or advanced radio knowledge. Small corrections and practical local information are useful.

## Ways to Contribute

Contributions may include:

- Website fixes
- Documentation corrections
- Guide improvements
- Accessibility improvements
- Broken-link and typo fixes
- Public-safe device or antenna notes
- Coverage and field-testing observations
- Map and data-presentation improvements
- Bug reports and feature requests
- Suggestions for workshops, demonstrations, or learning sessions

## Before You Start

Review:

- `README.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `docs/README.md`

For larger changes, open an issue first so the direction can be discussed before substantial work is done.

General contact:

[contact@hampdencountymesh.org](mailto:contact@hampdencountymesh.org)

## Reporting Issues

Use public GitHub issues for non-sensitive matters such as:

- Broken links
- Display or mobile-layout problems
- Documentation errors
- Guide suggestions
- Accessibility problems
- Public-safe feature requests
- Incorrect or stale project information

Include, when relevant:

- The affected page or file
- What you expected
- What happened instead
- Browser or device information
- A screenshot with private details removed
- A suggested correction

Do not include credentials, private messages, non-public locations, or sensitive infrastructure information in a public issue.

## Security Issues

Do not report vulnerabilities or exposed secrets through public issues.

Send sensitive reports to:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)

See `SECURITY.md` for scope and reporting guidance.

## Writing Standards

Public documentation should be:

- Clear and practical
- Understandable to beginners
- Accurate about the current state of the project
- Careful not to promise coverage or reliability
- Clear about the difference between HCM-operated systems and independent regional activity
- Specific enough to be useful without exposing unnecessary private details

Do not describe planned features as live or active systems as merely planned.

Useful terms include:

- Observed activity
- Field testing
- Regional settings
- Participating observers
- Public map data
- Independent nodes and services

Avoid claims such as:

- Guaranteed coverage
- Complete county-wide coverage
- Every visible node belongs to Hampden County Mesh
- All displayed nodes are currently reachable
- Emergency-ready or public-safety coverage

## Local Observations and Field Testing

Useful contributions may include:

- General location or public landmark
- Device and antenna used
- Indoor or outdoor placement
- Approximate height
- What was heard or reached
- What did not work
- Relevant terrain or building conditions
- Whether the result came from direct radio, MeshMapper, an observer, the live map, or another tool

Exact private locations are usually unnecessary. Towns, parks, road corridors, landmarks, and broad areas are often enough.

For MeshCore field testing, use the Western Massachusetts MeshMapper region:

https://psf.meshmapper.net/

MeshMapper is not used for Meshtastic field testing.

The HCM live observed-activity map is:

https://map.hampdencountymesh.org/

Detailed packet and path information is available through:

https://analyzer.hampdencountymesh.org/

## Photos and Media

Before contributing an image, screenshot, or map capture, check for:

- Credentials, keys, or tokens
- Private messages or administrative pages
- Exact private locations or coordinates
- Personal documents or account details
- People who did not agree to be shown
- GPS or other embedded metadata

See `docs/ASSETS.md` for licensing, attribution, and media-handling guidance.

## Pull Requests

When submitting a pull request:

1. Keep the change focused.
2. Describe what changed and why.
3. Reference related issues when applicable.
4. Check spelling, links, and page layout.
5. Test desktop and mobile presentation where practical.
6. Remove sensitive or unnecessary private information.
7. Update related files when a change affects navigation, metadata, tracking, or documentation.

## Website Structure

The site uses shared Jekyll layouts and includes.

Normal pages generally use:

```yaml
---
layout: default
title: Page Title
description: Short page description.
nav: guides
---
```

Guide pages generally use:

```yaml
---
layout: guide
title: Guide Title
description: Short guide description.
lede: Short introduction.
---
```

Do not duplicate the shared HTML shell, header, footer, metadata, fonts, or favicon markup inside individual pages.

Shared components include:

- `_layouts/default.html`
- `_layouts/guide.html`
- `_layouts/update.html`
- `_layouts/join-redirect.html`
- `_includes/head.html`
- `_includes/header.html`
- `_includes/footer.html`
- `_includes/discord-cta.html`
- `_data/nav.yml`
- `_data/guides.yml`

The `docs/` directory contains maintainer and contributor documentation and is excluded from the generated public site.

## Current Public Pages

Current primary pages include:

- `/`
- `/guides/`
- `/guides/getting-started.html`
- `/guides/recommended-settings.html`
- `/guides/meshcore-basics.html`
- `/guides/meshtastic-basics.html`
- `/guides/sharing-safely.html`
- `/building-better-mesh-coverage.html`
- `/coverage.html`
- `/updates/`

The primary navigation is:

- Home
- Guides
- Map
- Updates

The Map navigation item links to:

https://map.hampdencountymesh.org/

The Coverage page remains a secondary page for observed activity and MeshMapper information.

## Discord Links and Tracking

Public website buttons should use the shared Discord include rather than raw invite URLs:

```liquid
{% include discord-cta.html source="guides" text="Join Discord" class="btn primary" %}
```

Existing tracked sources include:

- `general`
- `404`
- `better-coverage`
- `card`
- `coverage`
- `flier`
- `getting-started`
- `guides`
- `home-bottom`
- `home-hero`
- `site-nav`
- `updates`

When adding a new tracked source:

1. Create the matching route under `join/`.
2. Add the source to `_includes/discord-cta.html`.
3. Use that source value in the page include.

Do not place raw Discord invite links in normal public pages unless there is a specific reason.

## Retired Paths

Do not add new links to removed pages, including:

- `about.html`
- `infrastructure.html`
- `status.html`
- `guides/coverage-and-signal-checks.html`
- `guides/documenting-a-node.html`
- `guides/contributing-notes.html`
- `guides/hosting-a-session.html`
- `guides/operating-aids.html`
- `guides/nodes-repeaters-observers.html`
- `guides/discord.html`

Use the current Guides, Coverage, Building Better Mesh Coverage, Map, and Updates pages instead.

## Community Expectations

Contributors must follow `CODE_OF_CONDUCT.md`.

Keep discussion focused on facts, documentation, safety, and practical project needs. Harassment, threats, hate speech, discriminatory abuse, and targeted intimidation are not acceptable.

## Questions

For non-sensitive contribution questions, open a GitHub issue or contact:

[contact@hampdencountymesh.org](mailto:contact@hampdencountymesh.org)

Discord-related questions:

[discord@hampdencountymesh.org](mailto:discord@hampdencountymesh.org)

Security reports:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)