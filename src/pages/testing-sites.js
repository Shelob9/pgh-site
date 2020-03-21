import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LocationMap from "../components/LocationMap";
import LocationCard from "../components/LocationCard";
const TestingSite = props => {
	const { title, path, children, lat, lng } = props;
	return (
		<div
			className="min-h-600 bg-gray-100 rounded-lg border-gray-400 p-6"
			style={{ height: "600px" }}
		>
			<div className="flex mb-4">
				<div className="w-1/2 h-12">
					<h2>
						<Link
							to={path}
							className="text-2xl text-black-700 hover:text-indogo-600 hover:underline"
						>
							{title}
						</Link>
					</h2>
					<div>{children}</div>
					<LocationCard {...props} />
					<Link to={path} className="hover:text-indogo-600 hover:underline">
						More Information
					</Link>
				</div>
				<div className="w-1/2 bg-gray-500 h-12">
					<LocationMap {...{ lat, lng }} width="500px" />
				</div>
			</div>
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
					<h1 className="text-4xl md:text-5xl text-black-700 px-2">
						Testing Sites
					</h1>
				</div>

				<div className="flex flex-wrap mt-10 md:mt-20">
					{services.map(({ node }) => (
						<TestingSite key={node.frontmatter.path} {...node.frontmatter}>
							<div>{node.excerpt}</div>
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
						path
						title
						address_1
						city
						state
						zip
						lng
						lat
						hours
						location_name
						organization_name
						link
					}
					excerpt
				}
			}
		}
	}
`;

export default TestingSites;
