# The EPIC site of StatsCraft

[![Build Status](https://travis-ci.org/statscraft/statscraft.svg?branch=master)](https://travis-ci.org/statscraft/statscraft)

Hugo based static website of the [StatsCraft](https://www.statscraft.org.il) monitoring conference.

## How to add an event
Create the event content md page
```
hugo new content/event/2023.md -k event
mkdir data/y2023
```
Change `params.current` in `config/_default/config.yml` 

## Event data files
Every year we have different sponsors and organizers, whose data is in that year's data folder:
- `organizers.yml` - lists organizers, their social links, companies etc.
- `sponsors.yml` - lists sponsors, logos, details etc.