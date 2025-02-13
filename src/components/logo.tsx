import { FC } from 'react';

import Image from 'next/image';

interface ILogo {
	src: string;
	alt: string;
	className?: string;
}

/**
 * Logo Component
 *
 * A functional React component that displays an image logo. The logo is wrapped in a `div` with background and padding for styling.
 * Optionally, additional CSS classes can be passed through the `className` prop to customize the appearance of the container.
 * The logo image is responsive, and the size is fixed at 32px width.
 *
 * @component
 * @param props - Component props.
 * @param props.src - The source URL of the logo image.
 * @param props.alt - The alt text for the logo image.
 * @param [props.className=''] - Optional additional CSS class to style the container.
 * @returns A element representing the logo wrapped in a styled container.
 */

const Logo: FC<ILogo> = ({ src, alt, className = '' }) => {
	return (
		<div
			className={`bg-white transition-transform duration-200 hover:-translate-y-0.5 p-2 flex items-center justify-center rounded ${className}`}
		>
			<Image src={src} alt={alt} width={32} className='w-[32px]' />
		</div>
	);
};

export default Logo;
