import { FC } from 'react';

/**
 * Компонент Spinner, отображающий индикатор загрузки с золотистой окантовкой.
 * Использует CSS-анимацию для непрерывного вращения, показывая состояние загрузки.
 *
 * @returns Компонент спиннера для отображения во время загрузки.
 */

const Spinner: FC = () => {
	return (
		<div className='w-16 h-16 border-4 border-t-[#FFD700] border-r-[#FFD700] rounded-full animate-spin'></div>
	);
};

export default Spinner;
