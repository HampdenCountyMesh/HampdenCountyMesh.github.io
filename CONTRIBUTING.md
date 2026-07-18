# Contributing to Hampden County Mesh

Hampden County Mesh is a volunteer-run community project for MeshCore, Meshtastic, and local mesh radio in Western Massachusetts.

Contributions do not need to involve code or advanced radio knowledge. Corrections, local observations, accessibility improvements, and practical suggestions are useful.

## Ways to Contribute

Contributions may include:

- Website, guide, and documentation improvements
- Broken-link, typo, and accessibility fixes
- Bug reports and feature suggestions
- Public-safe device and antenna notes
- Coverage and field-testing observations
- Map and data-presentation improvements
- Ideas for workshops, demonstrations, and community projects

For larger changes, open an issue before doing substantial work so the direction can be discussed.

General questions may be sent to:

[contact@hampdencountymesh.org](mailto:contact@hampdencountymesh.org)

## Reporting Issues

Use public GitHub issues for non-sensitive problems such as broken links, layout problems, documentation errors, accessibility issues, and stale information.

Include, when useful:

- The affected page or file
- What you expected
- What happened instead
- Browser or device information
- A screenshot with private details removed
- A suggested correction

Do not post credentials, private messages, exact private locations, or sensitive infrastructure information in a public issue.

Security issues and exposed secrets should be sent to:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)

See `SECURITY.md` for details.

## Documentation Standards

Public material should be:

- Clear and understandable to beginners
- Accurate about the current state of the project
- Careful not to promise coverage or reliability
- Clear about what HCM operates and what belongs to independent users or services
- Useful without exposing unnecessary private information

Do not describe planned features as active. Avoid claims of guaranteed coverage, complete regional coverage, or public-safety reliability.

## Field Observations

Useful field reports may include:

- A town, public landmark, road corridor, or broad area
- Device and antenna used
- Indoor or outdoor placement
- Approximate height
- What worked and what did not
- Relevant terrain, buildings, or vegetation
- Whether the result came from direct radio, MeshMapper, an observer, the live map, or another tool

Exact private addresses and coordinates are usually unnecessary.

MeshMapper is used for MeshCore field testing, not Meshtastic:

https://psf.meshmapper.net/

HCM public activity tools:

- https://map.hampdencountymesh.org/
- https://analyzer.hampdencountymesh.org/

## Photos and Screenshots

Before contributing media, remove or obscure:

- Credentials, keys, and tokens
- Private messages and administrative pages
- Exact private locations and coordinates
- Personal documents and account details
- People who did not agree to be shown
- GPS and other unnecessary embedded metadata

See `docs/ASSETS.md` for licensing and attribution guidance.

## Pull Requests

When submitting a pull request:

1. Keep the change focused.
2. Explain what changed and why.
3. Reference related issues when applicable.
4. Check spelling, links, and page layout.
5. Test desktop and mobile presentation where practical.
6. Remove sensitive or unnecessary private information.
7. Update related navigation or metadata when needed.

The site uses shared Jekyll layouts and includes. Do not duplicate the site header, footer, metadata, fonts, or other shared page structure inside individual pages.

Maintainer and repository-structure notes belong in `docs/README.md`.

## Discord Links

Public site buttons should use the shared Discord include rather than a raw invite URL:

```liquid
{% include discord-cta.html source="guides" text="Join Discord" class="btn primary" %}
```

New tracking routes or changes to the Discord include should be coordinated through an issue or pull request.

## Community Expectations

Contributors must follow `CODE_OF_CONDUCT.md`.

Harassment, threats, hate speech, discriminatory abuse, and targeted intimidation are not acceptable.

## Questions

For general contribution questions, open a GitHub issue or email:

[contact@hampdencountymesh.org](mailto:contact@hampdencountymesh.org)

Discord questions:

[discord@hampdencountymesh.org](mailto:discord@hampdencountymesh.org)

Security reports:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)
