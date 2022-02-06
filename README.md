<div align="center">
  <img src="public/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Google</h1>
  <p>A tribute and log of beloved products and services killed by Google.</p>
</div>

<div align="center">

[![Netlify Status](https://img.shields.io/netlify/320a7a15-ce8b-4dba-befa-4c7922d5db9c)](https://app.netlify.com/sites/killedbygoogle/deploys) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/killedbygoogle?color=%231da1f2&label=%40killedbygoogle&style=flat-square)](https://twitter.com/killedbygoogle)

</div>

## Contribute

To add a product, gather the following information:

- Name of Product (`name`)
- Launch Date (`dateOpen`)
- Discontinued Date (`dateClose`)
- Description (`description`)
- Link (`link`) - Relevant link to the source.
- Type (`type`) - one of App, Service or Hardware

If you are not familiar with or do not want to use `git`, submit a [new issue](https://github.com/codyogden/killedbygoogle/issues/new?template=add-an-obituary.md) requesting the change. If you are already familiar with `git`, follow these steps:

1. If you haven't already, start by [forking](https://help.github.com/en/articles/fork-a-repo) this repository. 
1. [Create a new branch](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) in your fork. Name it using the product you want to add 
1. Switch to that branch (should happen automatically if you've just created it) and open the `graveyard.json` file
1. Run `yarn && yarn kill` to start the product addition CLI. This will prompt you for the information and validate you entry as you go. It will write the product information into the `graveyard.json` file for you.
1. After the CLI, run `yarn test` to ensure that the `graveyard.json` is formatted properly and all values are valid.
1. Commit your work in git and [create a Pull Request (PR)](https://help.github.com/en/articles/creating-a-pull-request) using the newly created branch.

For code contributions outside of `graveyard.json`, check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Editorial Guidelines

#### Description
The description should be a single sentence describing the product. It should begin with the products name. For example, "Google Reader was an RSS/Atom feed aggregator." It will be attached to a generated sentence like "Killed about 5 years ago, Google Reader was an RSS/Atom feed aggregator."

Please be respectful, only use past tense.

#### Link
Link should be a resource that mentions the discontinuation date and talks about the product. Links to Wikipedia or a news organization should be prioritized. **Please do not use Google Support articles, linking to the product's URL, the product's marketing URL, or other Google-provided links.** Google removes these links quickly after a service is ended.

#### Type
The type should be either `app`, `service`, or `hardware` as a string.
