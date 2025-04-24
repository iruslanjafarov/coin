import { FC } from 'react';

interface IDetail {
	params: { id: number };
}

const Detail: FC<IDetail> = ({ params }) => {
	return <h1>{params?.id}</h1>;
};

export default Detail;
