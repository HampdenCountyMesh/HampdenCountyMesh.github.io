# Data Access and Observed Activity

This document describes how Hampden County Mesh should handle observed mesh activity data, MQTT-backed tooling, broker/data-feed access, map feeds, analyzer feeds, and CoreScope-style integrations.

It replaces the separate notes that would otherwise live in:

* `broker-data-access.md`
* `mqtt.md`
* `observed-activity-data.md`

The goal is to keep one clear policy for public-safe activity data instead of repeating the same privacy and access rules across several files.

## Current Status

Automated public activity publishing is not live on the main website yet.

The public map address is:

`https://map.hampdencountymesh.org/`

For now, that address redirects to the Coverage page:

`https://hampdencountymesh.org/coverage.html`

Local MQTT services are for testing and site-maintained infrastructure work only unless a future public-safe access plan is created.

CoreScope is currently treated as local observed-activity tooling unless or until it is intentionally published through a public Hampden County Mesh map path.

Do not describe local broker access, local CoreScope access, local observer feeds, or local MQTT feeds as public services unless they are intentionally configured, maintainable, and reviewed for privacy.

## What Observed Activity Means

Observed activity means something was heard, logged, reported, mapped, summarized, or shown by a system or public-safe source.

Observed activity may come from:

* A site-maintained observer
* Local logs
* MQTT testing
* CoreScope local tooling
* Public analyzers
* Public feeds
* Manual local notes
* Community reports
* MeshMapper, for MeshCore field testing
* Field testing
* Future dashboards or integrations

Observed activity does not automatically prove:

* Direct reachability from every location
* Two-way communication
* Complete area coverage
* Current live status
* That a device is fixed in place
* That Hampden County Mesh owns the device
* That Hampden County Mesh controls the device
* That the data is complete
* Emergency-ready communications

## Current Local Support Systems

### MeshCore-Hub

MeshCore-Hub is a site-maintained support system used for local infrastructure development, MQTT testing, observer/logging work, CoreScope testing, and future public-safe map or activity-summary work.

Current or possible services may include:

* Mosquitto MQTT
* CoreScope local observed-activity tooling
* Observer-related logging
* Development scripts
* Local data storage for testing

Do not publish:

* Private IP addresses
* SSH details
* Usernames
* Passwords
* Broker credentials
* Admin URLs
* Internal paths
* Private logs
* Screenshots showing private configuration

### Hampden Room Observer

The Hampden Room Observer is a site-maintained MeshCore observer.

It helps show what can be heard from its location. It improves visibility, not necessarily radio coverage.

Do not describe observer output as complete county-wide coverage or as proof that every visible node can be reached from every other location.

### CoreScope

CoreScope may be useful as local or future public observed-activity tooling.

Until it is intentionally published through a public map path, describe it as local support tooling.

Before any CoreScope-style service becomes public, confirm:

* What data is shown
* What data is hidden
* Whether private locations are exposed
* Whether raw packet contents are exposed
* Whether credentials or backend details are exposed
* Whether node names reveal private details
* Whether public wording explains observed activity correctly
* Whether the service can be maintained
* Whether there is a fallback plan if the service is down

## MQTT

MQTT is used or may be used for infrastructure experimentation, observer-related testing, local logging, and future observed-activity tooling.

For Hampden County Mesh, MQTT should be described as a support and reporting tool.

Good wording:

* MQTT testing
* observer reporting
* local logging
* activity reported to a broker
* observed activity
* public-safe activity data where available
* site-maintained systems
* support infrastructure
* CoreScope-style observed-activity tooling

Avoid wording that suggests:

* complete coverage
* guaranteed communication
* emergency service capability
* control of all nearby mesh activity
* ownership of all visible nodes
* public broker access when no public broker exists

## Broker and Data Access

Public anonymous broker access is not currently offered.

If access is ever offered, it should be:

* Read-only
* Authenticated
* Limited by ACLs
* Limited to intended topics
* Revocable
* Logged where appropriate
* Documented privately
* Shared out-of-band, not committed to GitHub

Do not publish public broker credentials in this repository.

Avoid anonymous public access unless there is a clear reason and the privacy/security consequences are understood.

Requests for trusted integration access can be sent to:

`contact@hampdencountymesh.org`

Security concerns should go to:

`security@hampdencountymesh.org`

## Future Integration Requests

Future data or broker access requests may come from:

* CoreScope operators
* Regional mesh map maintainers
* Analyzer operators
* Neighboring mesh communities
* Research or documentation projects
* Public dashboard maintainers

Before offering access to a broker, feed, map service, analyzer, or CoreScope-style integration, confirm:

* Who is requesting access?
* What project or tool will use the data?
* What topics or feeds are actually needed?
* Is read-only access enough?
* Can access be limited by ACL?
* Can access be revoked quickly?
* Will exact private locations be exposed?
* Will private messages be exposed?
* Will broker credentials be stored safely?
* Will public output explain observed activity carefully?
* Is the integration maintainable?
* Who should be contacted if something breaks or needs to be revoked?

If the answers are unclear, do not provide access yet.

## Example Private Configuration Shape

This is an example only. Do not commit real credentials.

    Broker: mqtts://example.invalid:8883
    Topic: meshcore/BDL/+/packets
    Username: read-only-user
    Password: provided out-of-band
    IATA filter: BDL
    Access type: read-only
    Public access: no

Use fake values in public documentation. Real broker hostnames, usernames, passwords, certificates, access notes, and ACL details should be shared privately only when needed.

## Topic Notes

Expected MeshCore packet topic shape:

    meshcore/{IATA}/{PUBKEY}/packets

For Hampden County Mesh planning, the expected regional alignment is currently:

    BDL

Do not assume BAF unless that changes later.

## Source Types

When documenting observed activity, use source labels that describe where the information came from.

Useful source types:

* `direct_radio`
* `observer`
* `mqtt`
* `map`
* `dashboard`
* `local_log`
* `corescope`
* `meshmapper`
* `meshmapper_field_test`
* `meshcore_field_test`
* `field_test`
* `manual_note`
* `public_source`
* `unknown`

Avoid source names that overclaim. For example, use `meshcore_field_test` instead of `meshcore_coverage_check`.

## Public Wording

Use careful wording when observed activity is shown publicly.

Good wording:

* observed activity
* activity heard by an observer
* activity heard by site-maintained systems
* activity heard from this general area
* activity reported by a public source
* activity shown by a public map or dashboard
* field-testing result
* MeshMapper field-testing result
* local radio observation
* public-safe activity note
* activity summary
* partial observed-activity view

Avoid wording that suggests:

* guaranteed coverage
* complete coverage
* confirmed county-wide communication
* emergency-ready communication
* ownership of all nodes
* control of all nearby devices
* a complete live network view
* replacement for official emergency services

## Privacy Rules

Do not publish observed activity data, MQTT-derived data, broker-derived data, logs, screenshots, or map output that exposes:

* Private keys
* Owner keys
* Passwords
* API tokens
* Broker credentials
* Webhook URLs
* Wi-Fi details
* Admin URLs
* Private IP addresses
* Exact private home locations
* Exact private observer locations
* Exact private gateway locations
* Exact private repeater locations
* Exact private node coordinates
* Private messages
* Sensitive screenshots
* Raw sensitive logs
* Device names that reveal private addresses
* Usernames or identifiers that should not be public
* Sensitive telemetry
* Information someone shared privately and did not agree to publish

When public location context is useful, prefer:

* Town
* General area
* Public landmark
* Public park
* Hill or ridge
* Road corridor
* Broad terrain description
* Approximate region

Use exact coordinates only when they are intentionally public, safe, and appropriate.

## Credential Handling

Never commit MQTT credentials, broker credentials, API tokens, webhook URLs, certificates, private keys, or `.env` files containing secrets to the repository.

If a credential is accidentally committed or posted:

1. Remove it from the public location.
2. Rotate the credential.
3. Check whether it was exposed in Git history, Discord, logs, screenshots, or other public places.
4. Update documentation only with safe placeholder examples.

Use placeholders in public docs:

    MQTT_HOST=example-broker
    MQTT_PORT=1883
    MQTT_USERNAME=example-user
    MQTT_PASSWORD=do-not-commit-real-passwords

## Data Review Before Publishing

Before publishing public observed activity data, check:

* Does this reveal an exact private location?
* Does this expose a private observer location?
* Does this identify someone who did not agree to be identified?
* Does this include credentials, keys, tokens, admin URLs, or private IPs?
* Does this include private messages?
* Does this make a private installation easier to tamper with?
* Does the wording overclaim coverage or ownership?
* Does the public page explain what the data can and cannot prove?
* Is the data source documented?
* Is the update process maintainable?

If the answer is unclear, do not publish the data yet.

## Data File Expectations

If public observed activity data files are added later, they should be:

* Public-safe
* Small enough for GitHub Pages or the chosen hosting path
* Documented
* Valid JSON, GeoJSON, or another clearly documented format
* Free of credentials and private details
* Reviewed before publication
* Removed or updated if stale
* Clearly separated from private logs or backend data

Old placeholder public data files such as `nodes.json`, `status.json`, and `observed-activity.json` should not be referenced as active unless they are recreated intentionally with a current maintained workflow.

Future data locations may include:

* `data/`
* `assets/data/`
* a dedicated map service
* a CoreScope-style public service
* another documented public-safe feed

Do not add public data files just to make the repository look ready. Add them only when there is a real maintained workflow.

## Suggested Public Data Fields

Use general fields where possible, such as:

* `source_type`
* `system`
* `general_area`
* `last_observed`
* `summary`
* `public_note`
* `status`
* `updated_at`

Be careful with fields such as:

* `lat`
* `lon`
* `latitude`
* `longitude`
* `coordinates`
* `address`
* `owner`
* `exact_location`

Exact location fields should not be used for private nodes, private observers, private gateways, private repeaters, or private home installs.

## Relationship to the Coverage Page

The Coverage page should remain practical and public-facing.

It may include:

* Terrain notes
* MeshMapper links
* Local testing notes
* Public-safe map planning notes
* Future activity summaries when ready

It should not imply:

* Complete local coverage
* Guaranteed reach
* Live public automation before it exists
* Ownership of independent nodes
* Control over nearby mesh activity

## Relationship to MeshMapper

MeshMapper is a separate public tool.

It can be useful for reviewing MeshCore field testing around Western Massachusetts, but it is not operated by Hampden County Mesh.

When referencing MeshMapper:

* Make clear that it is separate
* Do not imply Hampden County Mesh owns its data
* Do not treat every result as direct local reach
* Do not add private details to public map screenshots
* Use it only in MeshCore field-testing context, not as a Meshtastic tool

## Relationship to the Map Subdomain

The public map address is:

`https://map.hampdencountymesh.org/`

For now, it redirects to the Coverage page.

If broker-backed, observer-backed, MQTT-backed, or CoreScope-style map access becomes public later, the map subdomain should be updated only after privacy review, basic reliability checks, and public wording cleanup.

Before replacing the temporary redirect with a live service:

* HTTPS works without browser warnings
* The service loads from `https://map.hampdencountymesh.org/`
* The service has Hampden County Mesh branding or clear local context
* The default region is appropriate for local use
* Private locations are not exposed
* Broker credentials are not exposed
* Raw private messages are not exposed
* Backend/admin routes are not exposed
* The Coverage page links to the map
* The Updates page has a short launch note
* Public wording makes clear that the map is a partial observed-activity view
* The public page explains what the map can and cannot prove
* There is a simple fallback plan if the map service is down

## Discord and Website Output

MQTT-to-Discord, observer-to-Discord, CoreScope-to-website, or activity-summary integrations may be useful later, but they should have a clear purpose and a clear channel before being enabled.

Automated output should not bury normal discussion.

Possible future output may include:

* Observer status summaries
* Site-maintained system status
* Short activity summaries
* Maintenance alerts
* Test-feed updates
* Public map updates

Do not post raw MQTT payloads publicly unless they have been reviewed for privacy and usefulness.

## Public Examples

Public examples should use fake values.

Good example:

    Broker: local test broker
    Host: not public
    Port: 1883
    Authentication: enabled
    Status: testing
    Public access: no

Avoid example values that look real or reveal internal setup details.

When topic examples are needed, use generic names:

    hcm/observed/test
    hcm/status/example-node
    hcm/observer/example

## Maintenance Notes

Update this file when:

* Public observed activity data is added
* Public data files are removed
* A live map becomes active
* A dashboard becomes active
* CoreScope or another map tool becomes public
* MQTT or broker data starts feeding public pages
* Broker access policy changes
* Read-only access is offered to a trusted integration
* Topic structure changes
* Regional alignment changes
* Privacy or credential rules need clarification
* Public wording changes
* Related guide pages change

Related documentation:

* `docs/README.md`
* `docs/infrastructure.md`
* `docs/map-subdomain.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* `https://hampdencountymesh.org/coverage.html`
* `https://hampdencountymesh.org/updates/`
* `https://hampdencountymesh.org/guides/sharing-safely.html`

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service, public safety system, or replacement for 911.