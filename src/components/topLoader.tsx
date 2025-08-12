import NextTopLoader from 'nextjs-toploader';

/**
 * TopLoader
 *
 * Глобальный компонент индикатора загрузки в верхней части страницы с использованием `nextjs-toploader`.
 *
 * Отображает визуальную полоску загрузки при смене маршрутов.
 * Стилизован с использованием желтого цвета и плавной анимации. Спиннер отключен для более чистого вида.
 *
 * @returns JSX-элемент, представляющий индикатор прогресса загрузки.
 */

export const TopLoader = () => (
	<NextTopLoader color='#e6c200' easing='ease' showSpinner={false} />
);
