import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TestingSite = ({ title, url, children }) => {
	return (
		<div className="w-full sm:w-1/2 md:w-1/3 p-2">
			<Link
				to={url}
				className="text-2xl text-indigo-700 hover:text-indogo-600 hover:underline"
			>
				{title}
			</Link>
			<p>{children}</p>
		</div>
	);
};

const TestingSites = ({ data }) => {
	const services = data.allMarkdownRemark.edges;

	return (
		<Layout headerClass="bg-white relative">
			<SEO title="COVID-19 Testing Site In Pittsburgh, PA" />

			<div className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center">
				<div className="container w-3/4 md:w-1/2 mt-20 font-serif font-hairline self-start">
					<h1 className="text-4xl md:text-5xl text-indigo-700 px-2">
						Testing Sites
					</h1>
				</div>

				<div className="flex flex-wrap mt-10 md:mt-20">
					{services.map(({ node }) => (
						<TestingSite
							title={node.frontmatter.title}
							url={node.frontmatter.path}
							key={node.frontmatter.path}
						>
							{node.excerpt}
						</TestingSite>
					))}
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query Query {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/content/testing-sites/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						path
					}
					excerpt
				}
			}
		}
	}
`;

export default TestingSites;
