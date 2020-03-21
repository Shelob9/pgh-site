import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";

export default ({ data }) => {
	const { allJsonJson } = data;
	const categrories = allJsonJson.nodes[0].diy;
	console.log(categrories);
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
						<h1 className="text-5xl text-black-700">
							Do It Yourself Resources
						</h1>
						{categrories.map(category => (
							<React.Fragment key={category.title}>
								<h2 className="text-3xl text-black-500">{category.title}</h2>
								<ul className="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
									{category.links.map(link => (
										<li className={"mb-6"} key={link.link}>
											<a href={link.link}>{link.title}</a>
										</li>
									))}
								</ul>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query DIYQuery {
		allJsonJson {
			nodes {
				diy {
					title
					links {
						link
						title
					}
				}
			}
		}
	}
`;
