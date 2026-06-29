# Security Policy

This document explains how to report security issues affecting Hampden County Mesh websites, repositories, Discord-related systems, public data files, documentation, and site-maintained support infrastructure.

Do not report sensitive security issues through public GitHub issues, public Discord channels, or public comments.

## Reporting a Vulnerability or Sensitive Exposure

If you discover a security issue, exposed secret, unsafe public data exposure, or vulnerability affecting Hampden County Mesh, contact:

[security@hampdencountymesh.org](mailto:security@hampdencountymesh.org)

Please include, when safe and relevant:

* A clear description of the issue
* Where the issue was found
* Steps to reproduce the issue
* Potential impact
* Screenshots, logs, or examples with private details removed where possible
* Whether credentials, private locations, keys, private messages, or private data may have been exposed

Do not include live passwords, private keys, API tokens, or sensitive credentials in plain text unless there is no safer way to explain the issue.

If the report involves exposed credentials, private keys, exact private node locations, private infrastructure details, or other sensitive information, keep the report private and use the security email address.

## Scope

This policy applies to security issues involving Hampden County Mesh-maintained:

* Website files
* GitHub repositories
* Public website data files
* GitHub Pages configuration
* Discord-related integrations
* Webhooks
* Observer documentation
* MQTT or logging documentation
* Status or activity data files
* Public documentation that accidentally exposes sensitive information

This policy also applies to accidental publication of sensitive information, including:

* Private keys
* Channel keys
* Passwords
* API tokens
* Broker credentials
* Webhook URLs
* Admin URLs
* Private IP addresses
* SSH details
* Exact private node, observer, or repeater locations
* Private home addresses
* Sensitive screenshots
* Raw logs containing sensitive data
* Private messages or private identifiers that should not be public

## Out of Scope

Hampden County Mesh does not own or operate every node, observer, repeater, map marker, public feed, radio, device, packet, or third-party system that may appear in nearby mesh or radio tools.

Issues involving independent nodes, third-party services, neighboring communities, public analyzers, device vendors, radio services, or unrelated infrastructure may need to be reported to those maintainers instead.

If the issue affects Hampden County Mesh documentation, public data, website wording, GitHub repository content, Discord-related integrations, or site-maintained systems, it is in scope.

## What Not to Post Publicly

Do not open a public issue or post publicly if the report includes information that could expose private systems, private people, credentials, private locations, private messages, or details that could help someone compromise a device, account, server, broker, webhook, or service.

Use [security@hampdencountymesh.org](mailto:security@hampdencountymesh.org) instead.

## Response Expectations

Reports will be reviewed as promptly as practical.

Hampden County Mesh is a small community effort, so response times may vary. A reasonable effort will be made to:

* Acknowledge legitimate reports
* Investigate the issue
* Remove or reduce exposed sensitive information
* Rotate exposed credentials where applicable
* Update affected documentation or data files
* Reduce repeat exposure where practical
* Credit good-faith reporters when appropriate and desired

## After a Report Is Received

Depending on the issue, maintainers may:

* Remove exposed content from the public site or repository
* Rotate exposed credentials or keys
* Redact or generalize private location information
* Update affected documentation
* Update public data files
* Disable a webhook, token, integration, or automation
* Review related files for similar exposure
* Add a note to reduce the chance of the same problem happening again

Some remediation may take longer if the issue involves Git history, screenshots, third-party caches, Discord messages, or data copied outside the repository.

## Responsible Disclosure

Please allow reasonable time for investigation and remediation before publicly disclosing a vulnerability or sensitive exposure.

Good-faith security research intended to improve the safety of Hampden County Mesh systems is appreciated.

Do not use security research as a reason to:

* Access accounts without permission
* Interfere with systems
* Exfiltrate private data
* Disrupt community spaces
* Abuse radio systems
* Publish private locations
* Share credentials or private keys
* Attempt persistence on any system

## Emergency and Safety Note

Hampden County Mesh is not an emergency service, not a replacement for 911, and not an official public safety system.

For immediate danger or emergencies, contact the appropriate emergency services directly.

## Related Documents

* `README.md`
* `CONTRIBUTING.md`
* `CODE_OF_CONDUCT.md`
* `SUPPORT.md`
* `docs/discord.md`
* `docs/observed-activity-data.md`
