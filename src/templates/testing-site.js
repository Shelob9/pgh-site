import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/markdown-github.css";
import Location from "../components/Location";
export default ({ data }) => {
	const { testingSite } = data;
	const lat = 40.4875553;
	const lng = -79.9197436;
	const title = testingSite.frontmatter.title;
	return (
		<Layout headerClass="relative bg-white" bodyClass="px-0 md:px-0 lg:px-0">
			<SEO title={title} />

			<div className="min-h-screen flex flex-col items-start bg-no-repeat bg-fixed bg-cover">
				<div className="mt-56 bg-white w-full pb-16 mb-20 skew-y-5">
					<div className="container mx-auto px-6 md:px-10 lg:px-24 pt-16 -skew-y-5">
						<h2 className="text-5xl text-indigo-700">{title}</h2>
						<div className="markdown-body">
							<div dangerouslySetInnerHTML={{ __html: testingSite.html }}></div>
						</div>
						<div>
							<Location lat={lat} lng={lng} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($id: String) {
		testingSite: markdownRemark(id: { eq: $id }) {
			frontmatter {
				path
				image
				title
			}
			html
		}
	}
`;
