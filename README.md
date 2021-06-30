# datamodel-typescript
Typescript interfaces that model data used on the Sophize platform.

## Publishing to npm
This library is published to npm at https://www.npmjs.com/package/sophize-datamodel. To publish a new version of the library to npm, do the following:

* Make sure that the types are in sync with json schema with
  ```
  quicktype -s schema ../datamodel-json/all_resources.json -o ./types.ts --converters all-objects
  ```
* Update the version number in file `package.json`
* Publish a new release [here](https://github.com/Sophize/sophize-datamodel/releases). Use the version number to set the `Tag version` and `Release Title` fields. The release will be published to npm using a GitHub action.

For publishing locally, compile using `.\build.sh` and publish using `npm publish`.
