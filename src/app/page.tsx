import Container from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Главная | Coin',
};

const Main = () => {
	return (
		<>
			<Container>
				<h1>hello</h1>
			</Container>
		</>
	);
};

export default Main;
