const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className="absolute flex items-center w-full z-50 h-12 bottom-0 bg-gradient-to-r from-lime-600 to-lime-700">
			<p className="ml-4 text-white hidden sm:block">All rights reserved. {currentYear}</p>
		</div>
	)
};

export default Footer;