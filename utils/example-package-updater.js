/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const stringifyPackage = require('stringify-package');
const detectIndent = require('detect-indent');
const detectNewline = require('detect-newline');

module.exports.readVersion = function (contents) {
  return JSON.parse(contents).dependencies['@zendeskgarden/tailwindcss'];
};

module.exports.writeVersion = function (contents, version) {
  const json = JSON.parse(contents);
  const indent = detectIndent(contents).indent;
  const newline = detectNewline(contents);

  json.dependencies['@zendeskgarden/tailwindcss'] = version;
  json.devDependencies['@zendeskgarden/tailwindcss'] = version;

  return stringifyPackage(json, indent, newline);
};

module.exports.isPrivate = function (contents) {
  return JSON.parse(contents).private;
};
