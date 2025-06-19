import type { FC, ReactNode } from 'react';

import '@/styles/style.css';

interface ILoginLayout {
	children: Readonly<ReactNode>;
}

/**
 * Компонент `LoginLayout`, используемый для обёртки страницы входа.
 *
 * Этот макет просто возвращает переданные дочерние элементы без дополнительной структуры.
 * Полезен для изоляции маршрута авторизации от основной части приложения (например, без хедера или бокового меню).
 *
 * @param children - React-элементы, которые будут отображаться внутри макета.
 * @returns Отрисованные дочерние элементы.
 */

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
	return <div className='overflow-hidden px-0'>{children}</div>;
};

export default LoginLayout;
