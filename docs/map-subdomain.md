# Map Subdomain

Public map address:

`https://map.hampdencountymesh.org/`

## Current Status

The map subdomain is reserved for future Hampden County Mesh map and observed-activity work.

Current temporary behavior:

`map.hampdencountymesh.org` redirects to `https://hampdencountymesh.org/coverage.html`.

This is intentional. The public map service is not published at the map subdomain yet, so the subdomain points to the Coverage page instead of showing a broken or unfinished service.

CoreScope is currently being used as local observed-activity tooling on `MeshCore-Hub`, but it should not be described as the public Hampden County Mesh map until the public map path is intentionally configured, maintainable, and reviewed for privacy.

## Future Use

The map subdomain may later point to CoreScope or another live or near-live public-safe map.

Likely future uses include:

* Public-safe observed MeshCore activity
* Local and regional map views
* Packet or activity summaries where appropriate
* Observer-derived activity where safe to publish
* Links to public tools and neighboring regional maps
* Hampden County and Western Massachusetts terrain context
* CoreScope-style observed-activity views

## Privacy and Safety Rules

The map subdomain must not publish:

* Private node locations
* Private observer locations
* Private gateway locations
* Private repeater locations
* Broker credentials
* API tokens
* Passwords
* Private messages
* Raw sensitive logs
* Admin URLs
* Private IP addresses
* Exact home locations
* Unreviewed screenshots or packet captures

Use general areas, towns, public landmarks, or broad terrain descriptions unless exact sharing is clearly intentional and safe.

For detailed data, broker, MQTT, CoreScope, and observed-activity rules, use `docs/data-access-and-observed-activity.md`.

## Wording Rules

Use wording like:

* observed activity
* public-safe activity
* activity heard by participating systems
* activity heard by site-maintained systems
* activity reported by public sources
* regional public tools
* partial observed-activity view
* local reference map
* map-support tooling

Avoid wording like:

* complete coverage
* guaranteed coverage
* county-wide network
* emergency-ready
* official public safety map
* all nodes
* all traffic
* Hampden County Mesh-owned nodes

## Future Launch Checklist

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

## Related Documentation

* `docs/README.md`
* `docs/infrastructure.md`
* `docs/data-access-and-observed-activity.md`
* `docs/ASSETS.md`
* `docs/discord.md`

Related public pages:

* `https://hampdencountymesh.org/coverage.html`
* `https://hampdencountymesh.org/updates/`
* `https://hampdencountymesh.org/guides/sharing-safely.html`

## Emergency and Safety Note

Hampden County Mesh is a community education and hobby effort. It is not an emergency service, public safety system, or replacement for 911.