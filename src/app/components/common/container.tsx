type Props = {
	children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
	return <div className='container mx-auto h-full'>{children}</div>;
};

export default Container;
