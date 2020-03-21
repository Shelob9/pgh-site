import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
	return (
		<Layout>
			<SEO title="Contact" />

			<div className="min-h-screen mb-6 flex flex-col items-start">
				<div className="w-full mt-24 font-serif font-hairline">
					<h1 className="text-4xl md:text-5xl text-black-700">Contact</h1>
				</div>
				<div
					className="w-full  mt-10 px-6 py-4"
					style={{
						boxShadow:
							"0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
					}}
				>
					<p className="text-base">
						This site was created by
						<a href="https://joshpress.net">Josh Pollock</a>
					</p>
					<p className="text-base">
						Please feel free to reach out via
						<a href="https://twitter.com/josh412"> Twitter</a> or email
						JPollock412 [at] gmail
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
