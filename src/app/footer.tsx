const Footer = () => {
	return (
		<footer className='absolute bottom-0 text-xl py-3'>
			<div className='flex items-center'>
				<h2>Ruslan Jafarov</h2>
				<div className='h-[20px] mx-2 border-r border-gray-400' />
				<h2>{new Date().getFullYear()}</h2>
			</div>
		</footer>
	);
};

export default Footer;
