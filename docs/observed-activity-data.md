# Observed Activity Data

This document describes how Hampden County Mesh should handle observed mesh activity data for the website, maps, dashboards, logs, public data files, and future integrations.

Observed activity data should help people understand what has been heard, logged, reported, or shown by public-safe systems. It should not expose private locations, private systems, credentials, private messages, or sensitive setup details.

## Purpose

Observed activity data may be used to support:

* Coverage page notes
* Public activity indicators
* Observer documentation
* Local use notes
* Local radio observations
* MQTT-backed experiments
* Future dashboards or maps
* Future Discord summaries or relay output
* Public-safe status indicators

Observed activity is not the same thing as guaranteed coverage.

Observed activity should not imply that Hampden County Mesh owns, operates, endorses, or manages every visible node, observer, repeater, marker, packet, or device.

## Current status

The website may include support for observed activity data, but automated local activity publishing should only be described as live when it is actually working and maintainable.

Current or planned public data file:

```text
data/observed-activity.json
```

If the file is manually maintained, test data, placeholder data, or not yet connected to live systems, say that clearly.

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

## What observed activity means

Observed activity means something was heard, logged, reported, or shown by a system or source.

Possible sources include:

* Site-maintained observers
* Local logs
* MQTT testing
* Public analyzers
* Public feeds
* Manual local notes
* Community reports
* Dashboards
* Maps
* Nearby regional tools
* Internet-connected paths

Observed activity may show that something was seen by a system. It does not always prove that a user can reach that device directly over radio from their current location.

## Direct radio vs reported data

When possible, distinguish between these result types:

```text
direct_radio
observer
mqtt
map
dashboard
local_log
manual_note
public_source
unknown
```

Plain-language examples:

* Direct radio: a device heard another device over radio from its current location.
* Observer: a site-maintained or public observer heard activity from its own location.
* MQTT: activity was reported through an MQTT broker or MQTT-backed tool.
* Map or dashboard: activity appeared in a public or local display.
* Manual note: someone reported local use, device behavior, or a device check.
* Unknown: the source was not confirmed.

This distinction matters because a map result, MQTT result, or observer result does not always mean direct local radio coverage.

## Public wording

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

Avoid wording that suggests ownership or guaranteed reach:

* our network covers this area
* all nodes are online
* this proves coverage
* every node shown is operated by Hampden County Mesh
* county-wide coverage
* emergency-ready coverage
* guaranteed communications

## Privacy rules

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

## Location handling

Public observed activity should usually use general locations.

Usually safe:

* Town
* General area
* Public park
* Public landmark
* Road corridor
* Broad neighborhood
* General hill or valley area
* Western / central / eastern Hampden County

Use caution with:

* Exact coordinates
* Home locations
* Private repeaters
* Private observer locations
* Private infrastructure locations
* Small private sites that are easy to identify

If exact location sharing is not clearly intentional and safe, generalize or omit it.

## Suggested public data fields

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

## Suggested source types

Use source types such as:

```text
direct_radio
observer
mqtt
map
dashboard
local_log
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
* `manual_note`: reported by a person from local use, a device check, or a public-safe observation.
* `public_source`: taken from an existing public source.
* `unknown`: source is unclear or not yet verified.

## Suggested status values

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

A node, observer, mobile device, MQTT source, or dashboard item may be visible at one time and unavailable later.

Public pages should avoid implying that older activity is still live.

Useful labels:

* last heard
* last updated
* recently observed
* manually updated
* data may be delayed
* data may be incomplete
* not a complete coverage map

## Data review checklist

Before publishing observed activity data, check:

* Does it expose a private location?
* Does it expose credentials or keys?
* Does it reveal an admin URL, private IP, or internal system?
* Does it include a private message?
* Does it include exact coordinates that should be generalized?
* Does it imply ownership of independent devices?
* Does it imply guaranteed coverage?
* Is the data stale?
* Is the source type clear?
* Is the location precision clear?
* Are private details removed?

## Example public-safe note

```text
Observed MeshCore activity was reported from the Westfield area by a public-safe source. This summary does not include exact private locations.
```

## Example unsafe note

```text
Private node at 123 Example Street, exact coordinates 42.xxxxxx, -72.xxxxxx, broker password visible in log.
```

Do not publish notes like that.

## File handling

Public data files should be reviewed before commit.

Current or future observed-activity files may include:

* `data/observed-activity.json`
* `data/status.json`
* `data/nodes.json`
* future generated summary files

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

Future automation may generate observed activity summaries from logs, MQTT, observers, analyzers, or other sources.

Automation should not publish raw data blindly.

Before enabling automation, confirm:

* Private fields are removed.
* Exact private coordinates are generalized or omitted.
* Credentials are never written into public files.
* Output files are valid JSON.
* Failure states are handled.
* Data age is shown clearly.
* Public wording is accurate.
* The system can be maintained.

## Discord output

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

## Related documentation

* `docs/infrastructure.md`
* `docs/mqtt.md`
* `docs/observers.md`
* `docs/nodes.md`
* `docs/discord.md`
* `docs/ASSETS.md`

Related public pages:

* https://hampdencountymesh.org/coverage.html
* https://hampdencountymesh.org/guides/nodes-repeaters-observers.html
* https://hampdencountymesh.org/guides/using-your-node.html
* https://hampdencountymesh.org/guides/radio-aids.html
* https://hampdencountymesh.org/guides/sharing-safely.html

## Project disclaimer

Hampden County Mesh is a community education and hobby effort. It is not an emergency service or a replacement for 911.
