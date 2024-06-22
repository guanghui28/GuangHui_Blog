import {
	FaFacebookSquare,
	FaRedditSquare,
	FaTwitterSquare,
	FaWhatsappSquare,
} from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const SocialShareButtons = ({ url, title }) => {
	return (
		<div className="w-full flex justify-between">
			<a href="/" target="_blank" rel="noreferrer">
				<FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
			</a>
			<a href="/" target="_blank" rel="noreferrer">
				<FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
			</a>
			<a href="/" target="_blank" rel="noreferrer">
				<FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
			</a>
			<a href="/" target="_blank" rel="noreferrer">
				<FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
			</a>
		</div>
	);
};

export default SocialShareButtons;
