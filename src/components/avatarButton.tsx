import { ReactNode, FC } from 'react';

interface IAvatarButton {
	onClick: () => void;
	children: ReactNode;
}

/**
 * AvatarButton component used within a dropdown menu under the user's avatar.
 *
 * Renders a styled button element for dropdown actions such as
 * navigation or logout. Designed to be reusable with consistent styling.
 *
 * @param onClick - Callback function triggered on button click.
 * @param children - React node representing the button's content.
 *
 * @returns JSX.Element - A styled button used inside avatar dropdown.
 */

const AvatarButton: FC<IAvatarButton> = ({ onClick, children }) => {
	return (
		<button
			className='block px-4 py-2 w-full text-left text-sm tracking-tight hover:bg-gray-100 rounded-xl cursor-pointer transition-colors duration-200'
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default AvatarButton;
