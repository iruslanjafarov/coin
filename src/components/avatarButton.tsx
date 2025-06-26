import { ReactNode, FC } from 'react';

interface IAvatarButton {
	onClick: () => void;
	children: ReactNode;
}

/**
 * Компонент кнопки для выпадающего меню под аватаром пользователя.
 *
 * Отрисовывает стилизованную кнопку для действий в меню, таких как
 * навигация или выход из аккаунта. Предназначен для повторного использования с единым стилем.
 *
 * @param onClick - Функция обратного вызова, вызываемая при клике на кнопку.
 * @param children - React-узел, представляющий содержимое кнопки.
 *
 * @returns JSX-элемент — стилизованная кнопка для использования внутри выпадающего меню аватара.
 */

const AvatarButton: FC<IAvatarButton> = ({ onClick, children }) => {
	return (
		<button
			className='block px-4 py-2 w-full text-left text-sm tracking-tight hover:bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200'
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default AvatarButton;
