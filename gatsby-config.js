module.exports = {
  siteMetadata: {
    siteUrl: "https://www.example.com",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "assets", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
  ],
};
