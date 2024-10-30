# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [4.0.2](https://github.com/zendeskgarden/tailwindcss/compare/v4.0.1...v4.0.2) (2024-10-30)


### Bug Fixes

* **deps:** update dependency @zendeskgarden/css-bedrock to v10 ([#250](https://github.com/zendeskgarden/tailwindcss/issues/250)) ([e17d70b](https://github.com/zendeskgarden/tailwindcss/commit/e17d70b960a1ce9eba6bed920b62ca1efa4953b7))

## [4.0.1](https://github.com/zendeskgarden/tailwindcss/compare/v4.0.0...v4.0.1) (2024-10-08)


### Bug Fixes

* dark mode shadows ([#243](https://github.com/zendeskgarden/tailwindcss/issues/243)) ([e0ce600](https://github.com/zendeskgarden/tailwindcss/commit/e0ce60099e2d871069b291333f026dbfd156ff4e))

## [4.0.0](https://github.com/zendeskgarden/tailwindcss/compare/v3.1.1...v4.0.0) (2024-10-03)


### ⚠ BREAKING CHANGES

* Utility colors now map to the new v9 [color](https://garden.zendesk.com/design/color) palette
  - Expanded to support light & dark modes. See [theme colors](https://garden.zendesk.com/components/theme-object#colors) for details.
  - No longer offers secondary color muted (i.e. `royal-M400`) variants
- Adds new `opacity` utilities that correspond to v9 [theme opacity](https://garden.zendesk.com/components/theme-object#opacity)

### Features

* upgrade to Garden theming v9 ([#242](https://github.com/zendeskgarden/tailwindcss/issues/242)) ([b54e338](https://github.com/zendeskgarden/tailwindcss/commit/b54e33850599fef8c331328e3ada03630433ea65))


### Bug Fixes

* **deps:** update dependency postcss to v8.4.31 [security] ([#181](https://github.com/zendeskgarden/tailwindcss/issues/181)) ([1c76ffd](https://github.com/zendeskgarden/tailwindcss/commit/1c76ffdb512f3d4027d1324a7f5b9efa0c38b276))
* **deps:** update dependency styled-components to v6 ([#179](https://github.com/zendeskgarden/tailwindcss/issues/179)) ([4a1f89e](https://github.com/zendeskgarden/tailwindcss/commit/4a1f89e9617b033dd1889a43fca5033d3960d5e1))

## [4.0.0-next.0](https://github.com/zendeskgarden/tailwindcss/compare/v3.1.1...v4.0.0-next.0) (2024-04-29)


### ⚠ BREAKING CHANGES

* upgrade to Garden theming v9 (pre-release) (#223)

### Features

* upgrade to Garden theming v9 (pre-release) ([#223](https://github.com/zendeskgarden/tailwindcss/issues/223)) ([0e91f68](https://github.com/zendeskgarden/tailwindcss/commit/0e91f687b6fe84344d622c6cbfda411d86d515ff))


### Bug Fixes

* **deps:** update dependency postcss to v8.4.31 [security] ([#181](https://github.com/zendeskgarden/tailwindcss/issues/181)) ([1c76ffd](https://github.com/zendeskgarden/tailwindcss/commit/1c76ffdb512f3d4027d1324a7f5b9efa0c38b276))
* **deps:** update dependency styled-components to v6 ([#179](https://github.com/zendeskgarden/tailwindcss/issues/179)) ([4a1f89e](https://github.com/zendeskgarden/tailwindcss/commit/4a1f89e9617b033dd1889a43fca5033d3960d5e1))

### [3.1.1](https://github.com/zendeskgarden/tailwindcss/compare/v3.1.0...v3.1.1) (2023-07-20)

## [3.1.0](https://github.com/zendeskgarden/tailwindcss/compare/v3.0.1...v3.1.0) (2023-06-16)


### Features

* **plugin:** update focus ring styles ([#164](https://github.com/zendeskgarden/tailwindcss/issues/164)) ([143a0fe](https://github.com/zendeskgarden/tailwindcss/commit/143a0fe4a8c562d54c904cb76e0e1a4983e57354))


### Bug Fixes

* **deps:** update dependency @testing-library/react to v13 ([#124](https://github.com/zendeskgarden/tailwindcss/issues/124)) ([37b2ec1](https://github.com/zendeskgarden/tailwindcss/commit/37b2ec1170255841ea3d50675cfebcd6052b1bbf))
* **deps:** update dependency @testing-library/user-event to v14 ([#123](https://github.com/zendeskgarden/tailwindcss/issues/123)) ([a97a617](https://github.com/zendeskgarden/tailwindcss/commit/a97a617eded2962492e74eafc5d3fbc5d12f60c1))
* **deps:** update dependency @types/react to v18 ([#125](https://github.com/zendeskgarden/tailwindcss/issues/125)) ([59d1d1d](https://github.com/zendeskgarden/tailwindcss/commit/59d1d1d6dedefbd6e806ca1074898f7fcfb6b295))
* **deps:** update dependency @types/react-dom to v18 ([#126](https://github.com/zendeskgarden/tailwindcss/issues/126)) ([903279c](https://github.com/zendeskgarden/tailwindcss/commit/903279cca5a086ef7e0501c916f1189c99ec8222))
* **deps:** update dependency postcss-focus-visible to v7 ([#136](https://github.com/zendeskgarden/tailwindcss/issues/136)) ([a016135](https://github.com/zendeskgarden/tailwindcss/commit/a016135e7d005ea8334ceb55d9bc445ab4819353))
* **deps:** update react monorepo to v18 ([#127](https://github.com/zendeskgarden/tailwindcss/issues/127)) ([9563c8c](https://github.com/zendeskgarden/tailwindcss/commit/9563c8cb2c7d6e6f675a92966f794b414911a34c))
* **postcss-focus-visible:** correct breaking focus ([#163](https://github.com/zendeskgarden/tailwindcss/issues/163)) ([8e99cdb](https://github.com/zendeskgarden/tailwindcss/commit/8e99cdb19c8d6e60fe27a03fded3057b552babf1))

### [3.0.1](https://github.com/zendeskgarden/tailwindcss/compare/v3.0.0...v3.0.1) (2022-02-10)


### Bug Fixes

* restore styles.css package dist ([#114](https://github.com/zendeskgarden/tailwindcss/issues/114)) ([34c6019](https://github.com/zendeskgarden/tailwindcss/commit/34c60192e76ee318de7a7b08e44ce0c74c79d1f7))

## [3.0.0](https://github.com/zendeskgarden/tailwindcss/compare/v2.0.0...v3.0.0) (2021-12-28)


### ⚠ BREAKING CHANGES

* **deps:** bumps `tailwindcss` peer dependency from v2.0 to 3.0.

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

### Bug Fixes

* **deps:** update all non-major dependencies ([#68](https://github.com/zendeskgarden/tailwindcss/issues/68)) ([e79ac63](https://github.com/zendeskgarden/tailwindcss/commit/e79ac639a93badcb28fa7808569323c84c599748))
* **deps:** update all non-major dependencies ([#77](https://github.com/zendeskgarden/tailwindcss/issues/77)) ([5288eeb](https://github.com/zendeskgarden/tailwindcss/commit/5288eeb1debc3b2ebfb445b9c38d1a84d3e7a029))
* **deps:** update all non-major dependencies ([#78](https://github.com/zendeskgarden/tailwindcss/issues/78)) ([85f528e](https://github.com/zendeskgarden/tailwindcss/commit/85f528e281aaecafc2192f2a87afa0b1ac2f81d5))
* **deps:** update all non-major dependencies ([#84](https://github.com/zendeskgarden/tailwindcss/issues/84)) ([b4a39ad](https://github.com/zendeskgarden/tailwindcss/commit/b4a39ada856286d9e1188bc1817fbabf99fe02ef))
* **deps:** update all non-major dependencies ([#93](https://github.com/zendeskgarden/tailwindcss/issues/93)) ([ff5d401](https://github.com/zendeskgarden/tailwindcss/commit/ff5d40193cdf775cd63c3b9f0531fc067fe2ef36))
* **deps:** update dependency @testing-library/react to v12 ([#81](https://github.com/zendeskgarden/tailwindcss/issues/81)) ([c5d4fad](https://github.com/zendeskgarden/tailwindcss/commit/c5d4fad73c301c09e79acc26ad45c38c8810ddc3))
* **deps:** update dependency @testing-library/user-event to v13 ([#65](https://github.com/zendeskgarden/tailwindcss/issues/65)) ([98a9482](https://github.com/zendeskgarden/tailwindcss/commit/98a9482fffe787dd4afbf9e0ba8efb075e3140e2))
* **deps:** update dependency @types/node to v14 ([#74](https://github.com/zendeskgarden/tailwindcss/issues/74)) ([9b4d6db](https://github.com/zendeskgarden/tailwindcss/commit/9b4d6db8d78fb49c1b48642de949eb962709dc5a))
* **deps:** update dependency @zendeskgarden/css-bedrock to v9 ([#75](https://github.com/zendeskgarden/tailwindcss/issues/75)) ([865a6c6](https://github.com/zendeskgarden/tailwindcss/commit/865a6c68e77c615aabf990400c25f5a17ec5d0f7))
* **deps:** update dependency postcss to v7.0.36 [security] ([#67](https://github.com/zendeskgarden/tailwindcss/issues/67)) ([4d86e6d](https://github.com/zendeskgarden/tailwindcss/commit/4d86e6db4f2ad39d34c931d98b54c3fdec1e21f3))


* **deps:** update dependency tailwindcss to v3 ([#100](https://github.com/zendeskgarden/tailwindcss/issues/100)) ([287dfca](https://github.com/zendeskgarden/tailwindcss/commit/287dfcaa21c7a7a8e012cc41817681dbf5467887))

## [2.0.0](https://github.com/zendeskgarden/tailwindcss/compare/v1.1.0...v2.0.0) (2021-03-29)


### ⚠ BREAKING CHANGES

* upgrade to Tailwind CSS 2.0 (#60)

### Features

* upgrade to Tailwind CSS 2.0 ([#60](https://github.com/zendeskgarden/tailwindcss/issues/60)) ([8918401](https://github.com/zendeskgarden/tailwindcss/commit/8918401140ba1ba0e811d70d42bc4bc83f16efbd))


### Bug Fixes

* **deps:** update all non-major dependencies ([#40](https://github.com/zendeskgarden/tailwindcss/issues/40)) ([83278a3](https://github.com/zendeskgarden/tailwindcss/commit/83278a310acfa4607c608c46d693fc42351f789c))
* **deps:** update all non-major dependencies ([#50](https://github.com/zendeskgarden/tailwindcss/issues/50)) ([566ad2f](https://github.com/zendeskgarden/tailwindcss/commit/566ad2ff3ac27366e4369fd3097e37719c22b38f))
* **deps:** update dependency @craco/craco to v6 ([#56](https://github.com/zendeskgarden/tailwindcss/issues/56)) ([94160bd](https://github.com/zendeskgarden/tailwindcss/commit/94160bde519bc144502ed5a4f930bccc93bdffe5))
* **deps:** update dependency @types/react to v17 ([#57](https://github.com/zendeskgarden/tailwindcss/issues/57)) ([48c416f](https://github.com/zendeskgarden/tailwindcss/commit/48c416f6542e6ce96f2d275bd62e8eefac584664))
* **deps:** update dependency @types/react-dom to v17 ([#58](https://github.com/zendeskgarden/tailwindcss/issues/58)) ([8edcaa7](https://github.com/zendeskgarden/tailwindcss/commit/8edcaa7587b61161b990606a72ee0a4665b2a7b2))
* **deps:** update dependency envalid to v7 ([#59](https://github.com/zendeskgarden/tailwindcss/issues/59)) ([f69abfb](https://github.com/zendeskgarden/tailwindcss/commit/f69abfb1c71a7d75125fc9294c71275c5b2a4c2a))
* **deps:** update dependency polished to v4 ([#44](https://github.com/zendeskgarden/tailwindcss/issues/44)) ([8237a17](https://github.com/zendeskgarden/tailwindcss/commit/8237a17b190ce1c36fd30b08a9755f8096746b8a))
* **deps:** update dependency react-scripts to v4 ([#45](https://github.com/zendeskgarden/tailwindcss/issues/45)) ([a1fae04](https://github.com/zendeskgarden/tailwindcss/commit/a1fae04869062335144b8cf5209ff224e6e3949f))
* **deps:** update react monorepo to v17 ([#46](https://github.com/zendeskgarden/tailwindcss/issues/46)) ([61f237e](https://github.com/zendeskgarden/tailwindcss/commit/61f237e0311bfe2adc8323cb5ec94e7102812dc7))

## [1.1.0](https://github.com/zendeskgarden/tailwindcss/compare/v1.0.2...v1.1.0) (2020-10-20)


### Features

* include pre-built utility styles ([#39](https://github.com/zendeskgarden/tailwindcss/issues/39)) ([ad2d164](https://github.com/zendeskgarden/tailwindcss/commit/ad2d164678aa8ebbc2ba25c85d76271bbb88e8e8))


### Bug Fixes

* npm publish ([#38](https://github.com/zendeskgarden/tailwindcss/issues/38)) ([c6884a1](https://github.com/zendeskgarden/tailwindcss/commit/c6884a1037eb40be1feafbc7aab178b1e7365f56))

### [1.0.2](https://github.com/zendeskgarden/tailwindcss/compare/v1.0.1...v1.0.2) (2020-09-30)


### Bug Fixes

* remove unintended product colors ([#37](https://github.com/zendeskgarden/tailwindcss/issues/37)) ([6ffefe1](https://github.com/zendeskgarden/tailwindcss/commit/6ffefe10453eea9455c94901a1b969c5dd385a6a))

### [1.0.1](https://github.com/zendeskgarden/tailwindcss/compare/v1.0.0...v1.0.1) (2020-09-22)


### Bug Fixes

* ensure preflight styles are removed when Garden bedrock is applied ([#36](https://github.com/zendeskgarden/tailwindcss/issues/36)) ([f23ec2d](https://github.com/zendeskgarden/tailwindcss/commit/f23ec2d17d5e950570522096e5dcce01e350ff95))
* **deps:** update all non-major dependencies ([#23](https://github.com/zendeskgarden/tailwindcss/issues/23)) ([191f007](https://github.com/zendeskgarden/tailwindcss/commit/191f007cbb735bdd27900b5dc2bdbd0181662ba8))
* **deps:** update dependency @testing-library/react to v11 ([#32](https://github.com/zendeskgarden/tailwindcss/issues/32)) ([8b6ba1d](https://github.com/zendeskgarden/tailwindcss/commit/8b6ba1d159bb79c39308cc91bde939762677c9ba))
* **deps:** update dependency @testing-library/user-event to v12.1.6 ([#35](https://github.com/zendeskgarden/tailwindcss/issues/35)) ([76c7cd5](https://github.com/zendeskgarden/tailwindcss/commit/76c7cd5e93716373de44809bf82592f664605c3b))
* **deps:** update dependency autoprefixer to v10 ([#33](https://github.com/zendeskgarden/tailwindcss/issues/33)) ([5e0659a](https://github.com/zendeskgarden/tailwindcss/commit/5e0659a4b56e017ea8419ea004fd5b6c84d2713e))

## [1.0.0](https://github.com/zendeskgarden/tailwindcss/compare/v0.1.1...v1.0.0) (2020-09-03)


### Bug Fixes

* **build:** allow standard-version deployments to update all yarn workspaces ([#21](https://github.com/zendeskgarden/tailwindcss/issues/21)) ([ce53c88](https://github.com/zendeskgarden/tailwindcss/commit/ce53c88f26b3bcd822323d5b685e4eca9395f4ea))
* **deps:** pin dependencies ([#10](https://github.com/zendeskgarden/tailwindcss/issues/10)) ([4d57c13](https://github.com/zendeskgarden/tailwindcss/commit/4d57c136e191e6c1ec8a09ac1d613a3240f05422))
* **deps:** update dependency @testing-library/jest-dom to v5 ([#14](https://github.com/zendeskgarden/tailwindcss/issues/14)) ([dcf3a16](https://github.com/zendeskgarden/tailwindcss/commit/dcf3a167b2940c40aecd6f26906e3c86923513ca))
* **deps:** update dependency @testing-library/react to v10 ([#15](https://github.com/zendeskgarden/tailwindcss/issues/15)) ([625de36](https://github.com/zendeskgarden/tailwindcss/commit/625de3628f07c256db79e43690b31df6e582719d))
* **deps:** update dependency @testing-library/user-event to v12 ([#16](https://github.com/zendeskgarden/tailwindcss/issues/16)) ([ed344a2](https://github.com/zendeskgarden/tailwindcss/commit/ed344a2cf0a241421fa0e71a2244105d88d8f37f))
* **deps:** update dependency @types/jest to v26 ([#17](https://github.com/zendeskgarden/tailwindcss/issues/17)) ([c5b61fa](https://github.com/zendeskgarden/tailwindcss/commit/c5b61fa36ca943baaae48c18eaa11d1342bf07ff))

### [0.1.1](https://github.com/zendeskgarden/tailwindcss/compare/v0.1.0...v0.1.1) (2020-07-22)

## 0.1.0 (2020-07-22)


### Features

* implement initial plugin ([#3](https://github.com/zendeskgarden/tailwindcss/issues/3)) ([1fc116e](https://github.com/zendeskgarden/tailwindcss/commit/1fc116e8a7533e2bc31a7f3afd7adf6126ea18c1))
* introduce create-react-app example with mock web widget implementation ([#7](https://github.com/zendeskgarden/tailwindcss/issues/7)) ([6bf3187](https://github.com/zendeskgarden/tailwindcss/commit/6bf3187649cd2246b6dcc257856175e291bea204))
