'use client';

import Container from '@/components/container';

/**
 * Основной компонент для отображения списка элементов с индикатором загрузки во время получения данных.
 * Использует кастомный хук `useItems` для загрузки данных и отображает спиннер при загрузке.
 *
 * @returns Основной раздел страницы с элементами или индикатором загрузки.
 */

const Main = () => {
	return (
		<main>
			<section className='flex w-full h-full fixed justify-center items-center'>
				<Container className='flex justify-center items-center'>
					<h1 className='bg-black text-white text-4xl w-fit text-center px-1 py-2 rounded-lg'>
						Продукт в разработке
					</h1>
				</Container>
			</section>
		</main>
	);
};

export default Main;
