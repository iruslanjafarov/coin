import type { FC, ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
	className?: string;
}

/**
 * Компонент контейнера, который оборачивает дочерние элементы в div с максимальной шириной
 * и опциональным пользовательским классом для стилизации.
 *
 * @param props - Свойства, передаваемые в компонент контейнера.
 * @param props.children - Дочерние компоненты или элементы, которые будут отрендерены внутри контейнера.
 * @param props.className - Опциональный класс для дополнительной стилизации.
 * @returns Контейнер с дочерними элементами и применённым классом.
 */

const Container: FC<IContainer> = ({ children, className }) => {
	return (
		<div className={`max-w-[1000px] w-full mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
