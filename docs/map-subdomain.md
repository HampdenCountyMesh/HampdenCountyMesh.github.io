# Map Subdomain

Public map address:

`https://map.hampdencountymesh.org/`

## Current Status

The map subdomain is reserved for future Hampden County Mesh map and observed-activity work.

Current temporary behavior:

`map.hampdencountymesh.org` redirects to `https://hampdencountymesh.org/coverage.html`.

This is intentional. The live map service is not running yet, so the subdomain points to the Coverage page instead of showing a broken or unfinished service.

## Future Use

The map subdomain may later point to CoreScope or another live or near-live public-safe map.

Likely future uses include:

- Public-safe observed MeshCore activity
- Local and regional map views
- Packet or activity summaries where appropriate
- Observer-derived activity where safe to publish
- Links to public tools and neighboring regional maps
- Hampden County and Western Massachusetts terrain context

## Privacy and Safety Rules

The map subdomain must not publish:

- Private node locations
- Private observer locations
- Private gateway locations
- Private repeater locations
- Broker credentials
- API tokens
- Passwords
- Private messages
- Raw sensitive logs
- Admin URLs
- Private IP addresses
- Exact home locations
- Unreviewed screenshots or packet captures

Use general areas, towns, public landmarks, or broad terrain descriptions unless exact sharing is clearly intentional and safe.

## Wording Rules

Use wording like:

- observed activity
- public-safe activity
- activity heard by participating systems
- regional public tools
- partial view
- local reference map

Avoid wording like:

- complete coverage
- guaranteed coverage
- county-wide network
- emergency-ready
- official public safety map
- all nodes
- all traffic
- Hampden County Mesh-owned nodes

## Future Launch Checklist

Before replacing the temporary redirect with a live service:

- HTTPS works without browser warnings
- The service loads from `https://map.hampdencountymesh.org/`
- The service has Hampden County Mesh branding or clear local context
- The default region is appropriate for local use
- Private locations are not exposed
- Broker credentials are not exposed
- Raw private messages are not exposed
- The Coverage page links to the map
- The Updates page has a short launch note
- Public wording makes clear that the map is a partial observed-activity view
