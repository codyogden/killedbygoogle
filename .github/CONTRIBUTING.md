<div align="center">
  <img src="../assets/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Google</h1>
  <p>A tribute and log of beloved products and services killed by Google.</p>
</div>

## Contributing Guide

### Pull Request

If you are altering anything other than `graveyard.json`, you should ensure that your Pull Request will pass continuous integration. Run `yarn test` which will perform these three actions:

1. ESLint
2. Jest
3. Build

There is currently no continuous delivery running on this project, so **commit the production build** that results from any changes you make to the codebase.

### Continuous Integration
Every PR must pass CI checks before it can be updated or merged into production.
