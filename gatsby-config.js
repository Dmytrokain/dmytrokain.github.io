module.exports = {
  siteMetadata: {
    title: `Ginger Blog`,
    twitterLink: `https://twitter.com/dmytrokain`,
    githubLink: `https://github.com/Dmytrokain`,
    email: `dimikowowik@gmail.com`,
    author: `Dmytro Kayinskyy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/site_icon.png`,
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
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
