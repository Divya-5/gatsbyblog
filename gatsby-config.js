let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful");
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: "x1bpp2mpev05",
  accessToken: "V33WXw-Q9pUFrU3G4x21LkV-0PyQaXULK7Li4bR9cgM"
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  );
}

module.exports = {
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    }
  ]
};
