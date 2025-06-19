import { FC } from 'react';

import Image from 'next/image';

interface ILogo {
	src: string;
	alt: string;
	className?: string;
}

/**
 * Компонент Logo — функциональный React-компонент для отображения логотипа в виде изображения.
 *
 * Логотип обёрнут в div с фоном и отступами для стилизации.
 * Дополнительно можно передать CSS-класс через `className` для кастомизации внешнего вида контейнера.
 * Изображение логотипа адаптивное, ширина фиксирована 32px.
 *
 * @param props - Свойства компонента.
 * @param props.src - URL-адрес изображения логотипа.
 * @param props.alt - Альтернативный текст для изображения логотипа.
 * @param [props.className=''] - Опциональный CSS-класс для стилизации контейнера.
 * @returns Элемент, представляющий логотип в стилизованном контейнере.
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
