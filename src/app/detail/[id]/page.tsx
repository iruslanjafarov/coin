interface IDetail {
	params: Promise<{ id: string }>;
}

const Detail = async ({ params }: IDetail) => {
	const { id } = await params;

	return <h1>{id}</h1>;
};

export default Detail;
