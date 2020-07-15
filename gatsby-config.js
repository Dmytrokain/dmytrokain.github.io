require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Ginger Blog`,
    twitterLink: `https://twitter.com/dmytrokain`,
    githubLink: `https://github.com/Dmytrokain`,
    author: `Dmytro Kayinskyy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folders: ["1GHmKGEs7W2tuQ-OUytTH9nKmNF6hJs9Z"],  // Ginger0Blog on GD
      },
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: ["gatsby-remark-images"],
        },
    },
  ],
}
