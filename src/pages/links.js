import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";

export default ({ data }) => {
	const { allJsonJson } = data;
	const links = allJsonJson.edges[0].node.basic;
	console.log(links);
	const title = "Links";
	return (
		<Layout
			headerclassName="relative bg-white"
			bodyclassName="px-0 md:px-0 lg:px-0"
		>
			<SEO title={title} />

			<div className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover bg-gray-100 rounded-lg border-gray-400 p-6">
				<div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
					<div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
						<h1 className="text-5xl text-black-700">Links</h1>
						<h2 className="text-3xl text-black-500">Health Departments</h2>
						<ul className="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
							{links.map(link => (
								<li className={"mb-6"}>
									<a href={link.link}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query LinksQuery {
		allJsonJson {
			edges {
				node {
					basic {
						link
						title
					}
				}
			}
		}
	}
`;
