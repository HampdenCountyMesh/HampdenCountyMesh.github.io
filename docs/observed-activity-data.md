# Observed Activity Data

This document describes how Hampden County Mesh should handle observed mesh activity data for the website, maps, dashboards, logs, public data files, and future integrations.

Observed activity data should help people understand what has been heard, logged, reported, mapped, or shown by public-safe systems. It should not expose private locations, private systems, credentials, private messages, or sensitive setup details.

## Purpose

Observed activity data may be used to support:

* Coverage page notes
* Public activity indicators
* Observer documentation
* Local use notes
* Local radio observations
* Wardriving notes
* Field-testing notes
* MQTT-backed experiments
* Future dashboards or maps
* Future Discord summaries or relay output
* Public-safe status indicators

Observed activity is not the same thing as guaranteed coverage.

Observed activity should not imply that Hampden County Mesh owns, operates, endorses, or manages every visible node, observer, repeater, marker, packet, or device.

## Current Status

The website may include support for observed activity data, but automated local activity publishing should only be described as live when it is actually working and maintainable.

Current or planned public data files may include:

```text
assets/data/observed-activity.json
assets/data/status.json
assets/data/nodes.json
assets/data/activity-map.json
```

Use the actual current repository path when linking from website code.

If a file is manually maintained, test data, placeholder data, or not yet connected to live systems, say that clearly.

Use status labels like:

* not automated yet
* manually maintained
* testing
* public-safe sample data
* live where available
* temporarily unavailable
* retired

Avoid labels like:

* complete
* guaranteed
* county-wide
* emergency-ready
* all nodes
* all traffic

## What Observed Activity Means

Observed activity means something was heard, logged, reported, mapped, or shown by a system or source.

Possible sources include:

* Site-maintained observers
* Local logs
* MQTT testing
* Public analyzers
* Public feeds
* Manual local notes
* Community reports
* Wardriving
* Field testing
* Dashboards
* Maps
* Nearby regional tools
* Internet-connected paths

Observed activity may show that something was seen by a system. It does not always prove that a user can reach that device directly over radio from their current location.

## Direct Radio vs Reported Data

When possible, distinguish between these result types:

```text
direct_radio
observer
mqtt
map
dashboard
local_log
wardriving
field_test
manual_note
public_source
unknown
```

Plain-language examples:

* Direct radio: a device heard another device over radio from its current location.
* Observer: a site-maintained or public observer heard activity from its own location.
* MQTT: activity was reported through an MQTT broker or MQTT-backed tool.
* Map or dashboard: activity appeared in a public or local display.
* Local log: activity was recorded by a local system.
* Wardriving: activity was captured during mobile coverage testing.
* Field test: activity was captured during a deliberate test from a real place.
* Manual note: someone reported local use, device behavior, or a device check.
* Public source: information came from an existing public source.
* Unknown: the source was not confirmed.

This distinction matters because a map result, MQTT result, observer result, wardriving result, or field-test result does not always mean direct local radio coverage for another user.

## Public Wording

Use careful public wording.

Good wording:

* observed activity
* recently observed activity
* activity heard by site-maintained systems
* activity reported by public sources
* activity shown by public tools where available
* local radio observations
* local use notes
* public-safe activity summaries
* wardriving observations
* field-testing results

Avoid wording that suggests ownership or guaranteed reach:

* our network covers this area
* all nodes are online
* this proves coverage
* every node shown is operated by Hampden County Mesh
* county-wide coverage
* emergency-ready coverage
* guaranteed communications

## Privacy Rules

Do not publish observed activity data that exposes:

* Private keys
* Channel keys
* Passwords
* API tokens
* Broker credentials
* Admin URLs
* Private IP addresses
* Wi-Fi details
* SSH details
* Private messages
* Exact private home locations
* Exact private node coordinates
* Sensitive telemetry
* Unreviewed raw logs
* Usernames or identifiers that should not be public
* Information someone shared privately and did not agree to publish

When exact detail is not needed, generalize it.

## Location Handling

Public observed activity should usually use general locations.

Usually safe:

* Town
* General area
* Public park
* Public landmark
* Road corridor
* Broad neighborhood
* General hill or valley area
* Western Hampden County
* Central Hampden County
* Eastern Hampden County

Use caution with:

* Exact coordinates
* Home locations
* Private repeaters
* Private observer locations
* Private infrastructure locations
* Small private sites that are easy to identify
* Exact private routes

If exact location sharing is not clearly intentional and safe, generalize or omit it.

## Suggested Public Data Fields

A public observed-activity item may use fields like:

```json
{
  "id": "example-activity-001",
  "label": "Example observed activity",
  "system": "MeshCore",
  "source_type": "observer",
  "general_area": "Westfield area",
  "timestamp": "2026-06-19T00:00:00Z",
  "status": "observed",
  "description": "Example public-safe activity note.",
  "location_precision": "general_area",
  "public_safe": true,
  "notes": "Private details removed before publishing."
}
```

Use fake example values in documentation.

Do not use real private coordinates, real private identifiers, or live credentials in examples.

## Suggested Source Types

Use source types such as:

```text
direct_radio
observer
mqtt
map
dashboard
local_log
wardriving
field_test
manual_note
public_source
unknown
```

Definitions:

* `direct_radio`: heard directly over radio by the reporting device.
* `observer`: heard by an observer.
* `mqtt`: reported through an MQTT-backed path.
* `map`: shown on a map.
* `dashboard`: shown on a dashboard or status tool.
* `local_log`: recorded in a local log.
* `wardriving`: captured during mobile coverage testing.
* `field_test`: captured during a deliberate test from a real place.
* `manual_note`: reported by a person from local use, a device check, or a public-safe observation.
* `public_source`: taken from an existing public source.
* `unknown`: source is unclear or not yet verified.

## Suggested Status Values

Use status values such as:

```text
observed
testing
manual
stale
offline
unknown
removed
```

Definitions:

* `observed`: activity was recently or previously observed.
* `testing`: item is part of a test or development workflow.
* `manual`: item was manually documented.
* `stale`: item may no longer be current.
* `offline`: related system is known to be offline.
* `unknown`: current status is not known.
* `removed`: item should no longer appear publicly.

## Staleness

Observed activity can become stale quickly.

A node, observer, mobile device, MQTT source, dashboard item, map point, or field-test result may be visible at one time and unavailable later.

Public pages should avoid implying that older activity is still live.

Useful labels:

* last heard
* last updated
* recently observed
* manually updated
* data may be delayed
* data may be incomplete
* not a complete coverage map

## Data Review Checklist

Before publishing observed activity data, check:

* Does it expose a private location?
* Does it expose credentials or keys?
* Does it reveal an admin URL, private IP address, or internal system?
* Does it include a private message?
* Does it include exact coordinates that should be generalized?
* Does it reveal a private route or private routine?
* Does it imply ownership of independent devices?
* Does it imply guaranteed coverage?
* Is the data stale?
* Is the source type clear?
* Is the location precision clear?
* Are private details removed?

## Example Public-Safe Note

```text
Observed MeshCore activity was reported from the Westfield area by a public-safe source. This summary does not include exact private locations.
```

## Example Unsafe Note

```text
Private node at 123 Example Street, exact coordinates 42.xxxxxx, -72.xxxxxx, broker password visible in log.
```

Do not publish notes like that.

## File Handling

Public data files should be reviewed before commit.

Current or future observed-activity files may include:

* `assets/data/observed-activity.json`
* `assets/data/status.json`
* `assets/data/nodes.json`
* `assets/data/activity-map.json`
* future generated summary files

Use the actual current repository path when linking from website code.

Before committing data files, search for:

```text
password
token
key
secret
private
admin
broker
mqtt
lat
lon
longitude
latitude
ip
http://
https://
```

Location fields are not automatically bad, but they should be reviewed carefully.

## Automation

Future automation may generate observed activity summaries from logs, MQTT, observers, analyzers, wardriving, field testing, or other sources.

Automation should not publish raw data blindly.

Before enabling automation, confirm:

* Private fields are removed.
* Exact private coordinates are generalized or omitted.
* Credentials are never written into public files.
* Raw private messages are not published.
* Output files are valid JSON.
* Failure states are handled.
* Data age is shown clearly.
* Public wording is accurate.
* The system can be maintained.

## Discord Output

Future Discord output may include observed activity summaries or status messages.

Automated Discord output should:

* Have a clear purpose.
* Use a dedicated channel when appropriate.
* Avoid flooding normal discussion.
* Avoid raw private data.
* Avoid exact private locations.
* Make the source type clear.
* Avoid implying complete coverage.

Do not post raw MQTT payloads publicly unless they have been reviewed for privacy and usefulness.

## Related Documentation

* `docs/infrastructure.md`
* `docs/mqtt.md`
* `docs/observers.md`
* `docs/nodes.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/guides/node-setups.html
* https://hampdencountymesh.org/guides/using-your-node.html
* https://hampdencountymesh.org/guides/radio-aids.html
* https://hampdencountymesh.org/guides/sharing-safely.html

Only link to public pages that currently exist. If a guide is planned but not live, keep it out of public navigation until it is ready.

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
