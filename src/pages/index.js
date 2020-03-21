import React from "react";
import cx from "classnames";
import home from "../images/undraw_taking_notes_tjaf.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TestingSite = props => (
	<div className="w-full md:w-1/2 lg:w-1/3 mt-2">
		<div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
			<p className="text-2xl w-full">
				<Link
					to={props.path}
					className="text-2xl text-black-700 hover:text-indogo-600 hover:underline"
				>
					{props.title}
				</Link>
			</p>
			<p>{props.excerpt}</p>
			<a
				href={props.path}
				className={
					"py-2 px-4   text-base text-black font-bold uppercase rounded shadow-md hover:-translate-1"
				}
			>
				Learn More
			</a>
		</div>
	</div>
);

function Index({ data }) {
	const services = data.services.edges;

	const { title, description } = data.site.siteMetadata;
	return (
		<Layout headerClass="relative bg-white">
			<SEO title="Home" />
			<div className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center">
				<div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
					<h1 className="text-3xl md:text-5xl text-black-700 leading-tight">
						{title}
					</h1>
					<p className="text-base">{description}</p>
				</div>
				<div className="flex flex-wrap justify-center items-stretch -mx-2">
					{data.allMarkdownRemark.edges.map(testingSite => (
						<TestingSite
							{...testingSite.node.frontmatter}
							excerpt={testingSite.node.excerpt}
						/>
					))}
				</div>

				<div className="flex flex-col mt-10 md:mt-16">
					<p className="mb-2 text-4xl text-gray-800 self-center">
						Our Features
					</p>

					<div className="flex flex-wrap justify-center items-stretch -mx-2">
						<div className="w-full md:w-1/2 lg:w-1/3 mt-2">
							<div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
								<div className="w-16 h-16 mb-4">
									<img alt="branding" src={branding} />
								</div>
								<p className="text-2xl w-full">Free Consultation</p>
								<p>New clients recieve an obligation free consultation.</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 mt-2">
							<div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
								<div className="w-16 h-16 mb-4">
									<img alt="processing" src={processing} />
								</div>
								<p className="text-2xl w-full">Certified Accountants</p>
								<p>All members of our team are certified accountants.</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 mt-2">
							<div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
								<div className="w-16 h-16 mb-4">
									<img alt="modeling" src={modeling} />
								</div>
								<p className="text-2xl w-full">Tax Compliance</p>
								<p>We stay up to date on the latest changes to the tax code.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query {
		services: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/content/services/" } }
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

		site {
			siteMetadata {
				title
				description
			}
		}
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

export default Index;
