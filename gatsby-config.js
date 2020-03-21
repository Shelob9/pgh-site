module.exports = {
	siteMetadata: {
		title: `Pittsburgh Coronavirus (COVID-19)`,
		description: `Testing sites and other ways to help prevent the spread of the novel coronavirus in Western, PA`,
		author: `@josh412`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-tailwind--serif`,
				short_name: `serif`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffb81c`,
				display: `minimal-ui`,
				icon: `static/favicon.png`
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/content`,
				name: "testing-sites"
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./json`
			}
		},
		"gatsby-transformer-remark",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-purgecss",
			options: {
				tailwind: true,
				purgeOnly: ["src/css/style.css"]
			}
		},
		"gatsby-plugin-offline"
	]
};
