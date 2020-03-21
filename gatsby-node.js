exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const result = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						id
						frontmatter {
							path
						}
					}
				}
			}
		}
	`);
	const services = result.data.allMarkdownRemark.edges;
	services.forEach(function({ node }) {
		const { path } = node.frontmatter;
		createPage({
			path,
			component: require.resolve("./src/templates/testing-site.js"),
			context: {
				id: node.id
			}
		});
	});
};
