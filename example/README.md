# Garden Tailwind CSS Example

This is a mock implementation of a Zendesk-styled product using
[Tailwind CSS](https://tailwindcss.com/) and the
[@zendeskgarden/tailwindcss](https://github.com/zendeskgarden/tailwindcss)
plugin. It includes no custom styling, with all styles being provided
by Garden design tokens.

This is not a fully functioning prototype. It is a showcase for different
technologies and techniques to apply Garden design tokens with Tailwind.

## Technologies

- [create-react-app](https://create-react-app.dev/) with Typescript as the starter project
- [Craco](https://github.com/gsoft-inc/craco) to allow PostCSS customization without CRA ejection
- [Tailwind CSS](https://tailwindcss.com/) and the
[@zendeskgarden/tailwindcss](https://github.com/zendeskgarden/tailwindcss) plugin
- [CSS Modules](https://github.com/css-modules/css-modules) for component scoped styles
- [focus-visible polyfills](https://github.com/csstools/postcss-focus-visible) for `:focus-visible` support across browsers
- [PurgeCSS](https://purgecss.com) to reduce the size of TailwindCSS style utilities
