# Observer Notes

This document describes observer systems used or planned for Hampden County Mesh.

Observer systems help show what mesh activity can be heard from a particular location or system. They are useful for logs, maps, dashboards, troubleshooting, local comparisons, and future observed-activity summaries.

An observer improves visibility. It does not automatically improve radio coverage, guarantee communication, or prove that all nearby devices are reachable from every location.

## Purpose

Observer systems may support:

* Mesh activity observation
* Local radio visibility
* Local logging
* MQTT reporting
* Public-safe activity summaries
* Future map or dashboard work
* Troubleshooting
* Local use comparisons
* Field-testing comparisons
* MeshCore coverage checks
* General understanding of local mesh behavior

Observed activity should be described carefully. It may show what a specific observer heard, what a public source reported, or what appeared in a log, dashboard, MQTT feed, or map.

It should not imply that Hampden County Mesh owns, operates, endorses, or manages every visible node, packet, marker, observer, repeater, gateway, or device.

## Current Observer

### Hampden Room Observer

Role:

* MeshCore observer
* Room observer
* Site-maintained observation system

Hardware:

* Heltec V3

Firmware / system:

* LetsMesh / MeshCore observer firmware

Status:

* Operational
* Manually documented

Purpose:

* Observe nearby MeshCore activity
* Support local radio visibility
* Support future observed-activity summaries
* Support future mapping, dashboard, or status work where appropriate
* Help distinguish between direct local radio use and activity heard by a fixed observer

Public notes:

* This observer helps show what can be heard from its location.
* It does not represent all mesh activity in Hampden County.
* It does not prove county-wide coverage.
* It should not be described as owning or controlling nearby independent nodes.
* Public output should be reviewed for privacy before being published.

Do not publish:

* Exact private location
* Private keys
* Owner keys
* Wi-Fi details
* Broker credentials
* Admin URLs
* Private IP addresses
* Sensitive logs
* Screenshots showing credentials or private configuration

Related files:

* `docs/infrastructure.md`
* `docs/nodes.md`
* `docs/mqtt.md`
* `docs/observed-activity-data.md`

## What an Observer Can Show

An observer can help answer questions like:

* Is any mesh activity being heard from this general area?
* Was a node or packet observed recently?
* Did a local use attempt show up in logs?
* Did a device appear through a public tool, observer, MQTT feed, or local log?
* Are there changes in observed activity over time?
* Is an observer still reporting?
* How do field-testing or MeshCore coverage-check results compare with a fixed observer?

An observer may be useful for comparing local radio observations against fixed-location logs.

For example, someone may use a node from a park, hill, road corridor, window, vehicle, or parking lot, then compare what they saw with what a fixed observer heard around the same time.

## What an Observer Cannot Prove by Itself

An observer cannot prove:

* Complete county-wide coverage
* Guaranteed two-way communication
* Emergency-ready service
* That every visible node is owned by Hampden County Mesh
* That a node is fixed in place
* That a node is still online now
* That a user at another location can directly reach the same device
* That all traffic is being observed
* That a map or dashboard is complete

Observed data is useful, but it should be presented with context.

## Source Types

When documenting observer-related activity, try to identify the source type.

Useful source types:

```text
direct_radio
observer
mqtt
map
dashboard
local_log
meshmapper
meshcore_coverage_check
field_test
manual_note
public_source
unknown