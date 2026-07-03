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
* MeshCore coverage-check notes
* Field-testing notes
* MQTT-backed experiments
* Future dashboards or maps
* Future Discord summaries or relay output
* Public-safe status indicators

Observed activity is not the same thing as guaranteed coverage.

Observed activity should not imply that Hampden County Mesh owns, operates, endorses, or manages every visible node, observer, gateway, repeater, marker, packet, or device.

## Current Status

The website may include support for observed activity data, but automated local activity publishing should only be described as live when it is actually working and maintainable.

Current or planned public data files may include:

```text
assets/data/observed-activity.json
assets/data/status.json
assets/data/nodes.json
assets/data/activity-map.json