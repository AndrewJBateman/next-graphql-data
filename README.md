# :zap: Next GraphQL Data

* A Next.js React app using GraphQL & Apollo-Server-Micro to get data from a JSON file.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/next-graphql-data?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/next-graphql-data?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/next-graphql-data?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/next-graphql-data?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Next GraphQL Data](#zap-next-graphql-data)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General Info

* Displays data from the [xxGraphQL API](https://rickandmortyapi.com/graphql).
* Next.js is for server-rendered react apps. It has automatic code splitting, simple page-based routing, built-in CSS support and hot reloading. Every component file in the pages folder is treated as a page.
* Apollo Client used to fetch data using GraphQL.
* GraphQL only return the data requested. Data only served from a single end-point. Lots of companies use it. GraphQL makes tawsks more complex and there are possible performance issues that would not occur using REST with a web cache.
* [GraphQL Code Generator](https://www.graphql-code-generator.com/) to generate code from GraphQL schema - configured using a `condegen.yml` file
* [Mantine AppShell](https://mantine.dev/core/app-shell/) used to provide a responsive shell for the app. with header and navbar

## :camera: Screenshots

![Example screenshot](./imgs/list.png).

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) javascript runtime using the [Chrome V8 engine](https://v8.dev/).
* [React v18](https://reactjs.org/) Javascript library.
* [GraphQL v15](https://github.com/graphql/graphql-js) API query language
* [apollo-server-micro v3](https://yarnpkg.com/package/apollo-server-micro) Node.js GraphQL server for Micro
* [Next v12](https://nextjs.org/) minimalist framework for rendering react apps on the server.
* [TypeGraphQL v1](https://typegraphql.com/) modern framework for GraphQL API in Node.js
* [Mantine v4](https://mantine.dev/) React components library
* [tabler icons react v1](https://www.npmjs.com/package/tabler-icons-react), here is [the icon list](https://tabler-icons.io/)

## :floppy_disk: Setup

* `yarn install` to install dependencies
* `yarn dev` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## :computer: Code Examples

* `_app.js` function to display app contents using Hydrate (DOM pre-built using Server-Side HTML Rendering)

```javascript
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
```

## :clipboard: Status & To-Do List

* Status: Working using JSON data file
* To-Do: Replace JSON data with actual API data, Put nav at top

## :clap: Inspiration

* [Jack Herrington: NextJS + GraphQL Blueprint: Professional Grade Setup](https://www.youtube.com/watch?v=XzE-PzALyDc)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
