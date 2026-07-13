# Security Policy

This policy explains how to report security issues affecting Hampden County Mesh websites, repositories, maps, integrations, and project-maintained infrastructure.

Do not report sensitive security issues through public GitHub issues, Discord channels, comments, or social posts.

## Reporting a Security Issue

Send reports to:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)

Include, when relevant:

- A clear description of the issue
- Where the issue was found
- Steps needed to reproduce it
- The possible impact
- Screenshots, logs, or examples with unrelated private details removed
- Whether credentials, private data, or non-public locations may have been exposed

Do not include live passwords, private keys, API tokens, broker credentials, or other active secrets in the initial report. Describe the type of information involved and wait for instructions if securely transferring it is necessary.

## Scope

This policy applies to security issues involving Hampden County Mesh-maintained:

- Websites and GitHub repositories
- GitHub Pages configuration
- Public map and boundary files
- Discord integrations and bots
- Webhooks and automations
- MQTT, observer, analyzer, and logging infrastructure
- Project documentation
- Other systems operated specifically for Hampden County Mesh

Accidental publication of the following is also in scope:

- Passwords, private keys, tokens, or broker credentials
- Channel keys or webhook URLs
- Non-public administrative endpoints or infrastructure details
- Exact private node or installation locations
- Private messages or personal information
- Logs, screenshots, or files containing sensitive data

## Out of Scope

Hampden County Mesh does not own or operate every node, repeater, observer, packet, map marker, radio, or third-party service visible through regional mesh tools.

Issues involving independent operators, equipment vendors, neighboring communities, third-party applications, or unrelated infrastructure should generally be reported to the appropriate maintainer.

An issue is in scope when it affects an HCM-maintained system, repository, integration, document, or public data presentation.

## What Not to Post Publicly

Do not open a public issue or discussion containing:

- Passwords, keys, tokens, or credentials
- Private messages or personal information
- Exact private installation locations
- Details that could provide unauthorized access to a system
- Sensitive screenshots, logs, or configuration files
- Information belonging to someone else without permission

Use the security email address instead.

## Response and Remediation

Reports will be reviewed as promptly as practical. Hampden County Mesh is a volunteer-run community project, so response times may vary.

Depending on the issue, maintainers may:

- Remove or redact exposed content
- Rotate credentials, keys, or tokens
- Disable an affected integration or webhook
- Generalize private location information
- Update documentation or configuration
- Review related files for similar exposure
- Contact third-party maintainers when the issue is outside HCM control

Information copied into Git history, caches, screenshots, Discord messages, or third-party services may take longer to address.

## Responsible Disclosure

Please allow reasonable time for investigation and remediation before publishing details about a vulnerability or sensitive exposure.

Good-faith reporting intended to improve project security is appreciated. Do not:

- Access accounts or systems without permission
- Collect more private data than is necessary to demonstrate an issue
- Disrupt services, community spaces, or radio systems
- Attempt to maintain access after testing
- Publish credentials, private messages, or private locations
- Use a report as justification for unrelated testing

## Related Documents

- `README.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `.github/SUPPORT.md`
- `docs/discord.md`
- `docs/data-access-and-observed-activity.md`
- `docs/infrastructure.md`
- `docs/map-subdomain.md`