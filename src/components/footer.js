import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { graphql } from "gatsby";

const Footer = ({ data, className, ...props }) => {
	console.log(data);
	className = cx(
		"w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
		className
	);
	return (
		<>
			<div className={className} {...props}>
				<div className="flex-initial text-xl font-semibold">Title</div>
				<div>
					<ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
						<li className="mx-3">
							<Link to="/">Home</Link>
						</li>
						<li className="mx-3">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="mx-3">
							©2020 Josh Pollock. License:{" "}
							<a href="https://creativecommons.org/licenses/by-sa/4.0/">
								CC BY-SA 4.0
							</a>
							| <a href={"https://github.com/Shelob9/pgh-site"}>Please reuse</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
export default Footer;
