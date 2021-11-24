import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer flex-row">
			{/* about app */}
			<div className="block-1">
				<div className="block-1_1 flex-row">
					<div className="block-1_1_1">About MUMMLY</div>
					<div className="block-1_1_2">Terms Of Use</div>
					<div className="block-1_1_3">Privacy Policy</div>
				</div>
				<div className="block-1_2">
					<p className="block-1_2_1">
						By continuing past this page, you agree to our Terms of
						Service, Cookie Policy, Privacy Policy and Content
						Policies. All trademarks are properties of their
						respective owners. 2008-2021 © MUMMLY Ltd. All rights
						reserved.
					</p>
				</div>
			</div>
			{/* icons */}
			<div className="block-2">
				<p
					style={{
						fontSize: "14px",
						fontWeight: "500",
						paddingBottom: "7px",
						color: "rgba(255, 255, 255, 0.6)",
						marginTop: "-15px",
					}}
				>
					Connect with us
				</p>
				<div className="block-2_1">
					<i
						width="40px"
						height="40px"
						class="fa fa-facebook-square media-icon"
					></i>
					<i class="fa fa-twitter-square media-icon"></i>
				</div>
			</div>
			{/* store */}
			<div className="block-3">
				<p
					style={{
						fontSize: "14px",
						fontWeight: "500",
						paddingBottom: "7px",
						color: "rgba(255, 255, 255, 0.6)",
						marginTop: "-5px",
					}}
				>
					MUMMLY APP
				</p>
				<div className="block-3_1">
					<img
						className="store-icon"
						src="https://bit.ly/3xm3i6c"
						alt=""
					/>
					<img
						className="store-icon"
						src="https://bit.ly/3HQixsB"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
