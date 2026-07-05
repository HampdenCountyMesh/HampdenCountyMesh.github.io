# Broker and Data Access

This document describes how Hampden County Mesh should handle future requests for broker access, map feeds, analyzer feeds, or CoreScope-style integrations.

## Current Status

Public anonymous broker access is not currently offered.

Local MQTT services are for testing and site-maintained infrastructure work only unless a future public-safe access plan is created.

## Future Integration Requests

Future requests may come from:

- CoreScope operators
- Regional mesh map maintainers
- Analyzer operators
- Neighboring mesh communities
- Research or documentation projects
- Public dashboard maintainers

Requests can be sent to:

`contact@hampdencountymesh.org`

Security concerns should go to:

`security@hampdencountymesh.org`

## Access Model

If access is ever offered, it should be:

- Read-only
- Authenticated
- Limited by ACLs
- Limited to intended topics
- Revocable
- Logged where appropriate
- Documented privately
- Shared out-of-band, not committed to GitHub

Do not publish public broker credentials in this repository.

## Public Wording

Use:

“Limited read-only data access may be available for trusted map, analyzer, or research integrations.”

Avoid:

“Public broker open to everyone.”

Avoid anonymous public access unless there is a clear reason and the privacy/security consequences are understood.

## Example Private Configuration Shape

This is an example only. Do not commit real credentials.

Broker: `mqtts://mqtt.example.hampdencountymesh.org:8883`

Topic: `meshcore/BDL/+/packets`

Username: `read-only-user`

Password: provided out-of-band

IATA filter: `BDL`

## Topic Notes

Expected MeshCore packet topic shape:

`meshcore/{IATA}/{PUBKEY}/packets`

For Hampden County Mesh planning, the expected regional alignment is currently:

`BDL`

Do not assume BAF unless that changes later.

## Do Not Share Publicly

Do not publish:

- MQTT usernames
- MQTT passwords
- Broker admin URLs
- Private broker hostnames
- Private IP addresses
- API tokens
- Private keys
- Internal system paths
- Exact private observer locations
- Exact private gateway locations
- Private messages
- Raw sensitive logs
