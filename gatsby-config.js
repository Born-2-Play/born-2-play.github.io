module.exports = {
	siteMetadata: {
		siteUrl: "https://born-2-play.net",
		title: "Born2Play",
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "to-fill",
			},
		},
		// {
		// 	resolve: 'gatsby-plugin-i18n',
		// 	options: {
		// 		langKeyDefault: 'en',
		// 		useLangKeyLayout: false
		// 	}
		// },
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`en`, `fr`],
				defaultLanguage: `en`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: `https://born-2-play.net`,
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false
				},
				pages: [
					{
						matchPath: '/'
					}
				]
			}
		},
		// "gatsby-plugin-react-helmet",
		// {
		//   resolve: "gatsby-plugin-manifest",
		//   options: {
		//     icon: "src/images/icon.png",
		//   },
		// },
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "locale",
				path: "./src/locales"
			}
		},
	],
};
