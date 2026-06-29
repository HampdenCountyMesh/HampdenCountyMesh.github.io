# MQTT Notes

This document describes how MQTT is used or may be used by site-maintained Hampden County Mesh support systems.

It is intended for documentation and continuity. It should not include broker passwords, usernames, private hostnames, private IP addresses, admin URLs, tokens, private keys, or other sensitive access details.

## Overview

MQTT is used for infrastructure experimentation, observer-related testing, local logging, and future observed-activity tooling.

For Hampden County Mesh, MQTT should be described as a support and reporting tool. It is not the same thing as direct radio coverage, and it should not be used to imply ownership of every node, packet, marker, observer, or repeater visible in public tools.

Use careful wording:

* MQTT testing
* observer reporting
* local logging
* activity reported to a broker
* observed activity
* public activity data where available
* site-maintained systems
* support infrastructure

Avoid wording that suggests complete coverage, guaranteed communication, emergency service capability, or control of all nearby mesh activity.

## Current Local Broker

Current local broker:

* MeshCore-Hub

Software:

* Mosquitto MQTT

Status:

* Operational
* Local testing and support role

Notes:

* The broker is part of site-maintained support infrastructure.
* Do not publish broker credentials.
* Do not publish private hostnames, private IP addresses, admin URLs, or internal network details.
* Do not describe the broker as a public service unless it is intentionally configured, documented, and maintained as one.

## Current Uses

Current or near-current MQTT uses may include:

* Local infrastructure testing
* Observer-related experiments
* Log collection
* Broker testing
* Backend development
* Testing possible status or activity summaries
* Testing possible observed-activity data workflows

MQTT-related work should be documented as testing unless it is live, public, and maintainable.

## Possible Future Uses

Possible future MQTT-related work may include:

* Public-safe status summaries
* Observed activity summaries
* Dashboard support
* Coverage page observed-activity support
* Discord bot or relay integrations
* Observer health checks
* Infrastructure alerts
* Log processing
* Local activity snapshots

Do not describe these as live until they are actually working and maintainable.

## MQTT and Observed Activity

MQTT can help move data between systems. For example, an observer or support system may report activity into a broker, and another tool may read that data to produce a dashboard, public data file, log, map layer, or Discord update.

That does not always mean the activity came from direct radio at the viewer’s location.

When documenting an MQTT result, try to distinguish between:

* Direct radio result
* Observer result
* MQTT-reported result
* Dashboard result
* Public map result
* Local log result
* Unknown source

Useful public wording:

```text
Activity reported by a site-maintained observer.
```

```text
Activity shown from an MQTT-backed test feed.
```

```text
Observed activity where available.
```

Avoid wording like:

```text
This proves coverage.
```

```text
All nodes are online.
```

```text
Hampden County Mesh operates these nodes.
```

```text
This is an emergency-ready network.
```

## Data Safety

MQTT messages, logs, and payloads may contain more information than expected.

Before publishing MQTT-derived data, check for:

* Private node locations
* Exact coordinates
* Private keys
* Channel keys
* Broker credentials
* Usernames
* Private messages
* Device identifiers that should not be public
* Private IP addresses
* Admin URLs
* Timestamps that reveal private routines
* Sensitive telemetry
* Anything shared privately and not intended for publication

Public data should be generalized when exact detail is not needed.

## Credential Handling

Never commit MQTT credentials to the repository.

Do not commit:

* Broker usernames
* Broker passwords
* API tokens
* Webhook URLs
* Private certificates
* Private keys
* `.env` files containing secrets
* Config files containing live credentials
* Screenshots showing credentials

If a credential is accidentally committed or posted:

1. Remove it from the public location.
2. Rotate the credential.
3. Check whether it was exposed in Git history, Discord, logs, or screenshots.
4. Update documentation only with safe placeholder examples.

Use placeholders in public docs:

```text
MQTT_HOST=example-broker
MQTT_PORT=1883
MQTT_USERNAME=example-user
MQTT_PASSWORD=do-not-commit-real-passwords
```

## Public Examples

Public examples should use fake values.

Good example:

```text
Broker: local test broker
Host: not public
Port: 1883
Authentication: enabled
Status: testing
Public access: no
```

Avoid example values that look real or reveal internal setup details.

## Topic and Payload Notes

MQTT topics and payloads should be reviewed before being made public.

Avoid publishing topic names or payload examples if they reveal:

* Private node names
* Private locations
* Usernames
* Internal hostnames
* Internal service names
* Credentials
* Sensitive system layout

When examples are needed, use generic names.

Example:

```text
hcm/observed/test
hcm/status/example-node
hcm/observer/example
```

## Discord Integrations

MQTT-to-Discord or observer-to-Discord integrations may be useful later, but they should have a clear purpose and a clear channel before being enabled.

Automated output should not bury normal discussion.

Possible future Discord output may include:

* Observer status summaries
* Site-maintained system status
* Short activity summaries
* Maintenance alerts
* Test-feed updates

Do not post raw MQTT payloads publicly unless they have been reviewed for privacy and usefulness.

## Dashboard and Website Integrations

Future website or dashboard integrations may use MQTT-derived data.

Before publishing MQTT-derived website data, confirm:

* The data source is understood.
* Private details are removed.
* Exact private locations are generalized or omitted.
* The page explains what the data represents.
* The page avoids implying ownership of all visible nodes.
* The system is maintainable enough to keep online.
* Failure states are handled clearly.

Good public framing:

```text
Observed activity from site-maintained systems and public sources where available.
```

## Maintenance Notes

Useful public-safe MQTT maintenance fields:

```text
System:
Role:
Broker type:
Status:
Public access: yes / no
Authentication enabled: yes / no
Current use:
Last checked:
Known issues:
Private details removed before sharing: yes / no
Notes:
```

Do not include live credentials or private access details in maintenance notes.

## Related Documentation

* `docs/infrastructure.md`
* `docs/observers.md`
* `docs/observed-activity-data.md`
* `docs/nodes.md`
* `docs/discord.md`

Related public pages:

* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/guides/node-setups.html
* https://hampdencountymesh.org/guides/using-your-node.html
* https://hampdencountymesh.org/guides/radio-aids.html
* https://hampdencountymesh.org/guides/sharing-safely.html

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
