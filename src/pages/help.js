import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";
import LocationMap from "../components/LocationMap";
import LocationCard from "../components/LocationCard";

const MoreInfoCard = ({ link, organization_name }) => (
	<div className="px-3 py-1 text-md font-bold text-gray-700 mr-2">
		<h2 className={"font-semibold"}>More Information</h2>
		<div className="px-6 py-4">
			<div className="bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
				<a href={link}>{organization_name}</a>
			</div>
		</div>
	</div>
);
export default ({ data }) => {
	const title = "Help Others";
	return (
		<Layout
			headerclassName="relative bg-white"
			bodyclassName="px-0 md:px-0 lg:px-0"
		>
			<SEO title={title} />

			<div className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover bg-gray-100 rounded-lg border-gray-400 p-6">
				<div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
					<div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
						<h1 className="text-5xl text-black-700">{title}</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query HelpQuery {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/content/helps" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						path
						title
					}
					excerpt
				}
			}
		}
	}
`;
