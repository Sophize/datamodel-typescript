# datamodel-typescript
Typescript interfaces that model data used on the Sophize platform.


## Publish to npm
This library is published to npm at https://www.npmjs.com/package/sophize-datamodel

### Publishing steps
To publish a new version of the library to npm, do the following:

* Make sure that the types are in sync with json schema with
  ```
  quicktype -s schema ../datamodel-json/all_resources.json -o ./types.ts --converters all-objects
  ```
* Update the version number in file `package.json`
* Compile using `tsc` and publish using `npm publish`
* Publish a new release [here](https://github.com/Sophize/datamodel-typescript/releases). Use the version number to set the `Tag version` and `Release Title` fields.
