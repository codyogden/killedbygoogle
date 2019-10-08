<div align="center">
  <img src="src/assets/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Google</h1>
  <p>A tribute and log of beloved products and services killed by Google.</p>
</div>

<div align="center">

[![GitHub Actions](https://github.com/codyogden/killedbygoogle/workflows/build/badge.svg)](https://actions-badge.atrox.dev/codyogden/killedbygoogle/goto) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE) [![Netlify Status](https://img.shields.io/netlify/320a7a15-ce8b-4dba-befa-4c7922d5db9c)](https://app.netlify.com/sites/killedbygoogle/deploys) [![Twitter Follow](https://img.shields.io/twitter/follow/killedbygoogle?color=%231da1f2&label=%40killedbygoogle&style=flat-square)](https://twitter.com/killedbygoogle)



</div>

## Contribute

Create branch with your product killedbygoogle exe: `name-product-killed` . 
Never use the `master` branch to create a pull request. If you need help, read [How to Create a Pull Request on GitHub](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

To add a product, add it to `graveyard.json` file. You'll need the following information:

- Name of Product (`name`)
- Launch Date (`dateOpen`)
- Discontinued Date (`dateClose`)
- Description (`description`)
- Link (`link`)
- Type (`type`)

The object should be appended to `graveyard.json` in the following format (note the alphabetical order of keys):

```
  {
    "dateClose": "YYYY-MM-DD",
    "dateOpen": "YYYY-MM-DD",
    "description": "[Product Name] was a single sentence overview of the product or service.",
    "link": "https://any.link-to-a.source/will/work-and-wikipedia-is-cool",
    "name": "[Product Name]",
    "type": "app|service|hardware"
  }
```

For code contributions outside of `graveyard.json`, check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Description
The description should be a single sentence describing the product. It should begin with the products name. For example, "Google Reader was an RSS/Atom feed aggregator." It will be attached to a generated sentence like "Killed about 5 years ago, Google Reader was an RSS/Atom feed aggregator."

Please be respectful, only use past tense.

### Link
Link should be a resource that mentions the discontinuation date and talks about the product. Wikipedia is perfect.

### Type
The type should be either `app`, `service`, or `hardware` as a string.

## Thanks Where Thanks is Due
I'd like to thank the [Wikimedia Foundation](https://wikimediafoundation.org) and [Internet Archive](https://archive.org/) for their wonderful resources, including the ability to track down broken links, home page graphics, and screenshots of services from the past. They have been invaluable tools in gathering information and content for Killed by Google. If you are able, I encourage you to make a donation to these organizations for the wonderful work they do in sharing knowledge and preserving history.
