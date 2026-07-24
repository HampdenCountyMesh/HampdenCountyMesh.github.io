---
title: Interactive MeshCore simulator is live
date: 2026-07-24
description: Step through MeshCore flooding, learned direct paths, repeaters, and simplified terrain effects in a new interactive simulator.
tags:
  - Website
  - MeshCore
---

Hampden County Mesh now has an [interactive MeshCore simulator](/simulator/) for people who want to see how messages move instead of only reading about routing.

Start with a first direct message. The simulator shows the message flooding through reachable repeaters, a flood-routed delivery report returning, and a path being stored. Then follow the on-screen prompt to compare that run with a later direct message, a channel flood, and recovery from a broken path.

The map is generated for the demonstration. Mountains block simulated radio paths, while wooded areas reduce simulated range. A running log keeps the status changes and transmission count from each scenario on the current map.

This is an educational network model, not a firmware emulator or an RF coverage forecast. Real radio performance also depends on hardware, antennas, elevation, buildings, interference, timing, settings, firmware versions, and the nodes available at that moment.

We also added a [Network Tools guide](/network-tools/) that explains when to use the live map, Health Check, and the more advanced Activity Analyzer. New users can stay with the simulator, Getting Started guide, and live map until they need the troubleshooting tools.
