import Image from 'next/image';
import Posts from './components/blog/Blog';

export default function Home() {
	return (
		<main>
			<div className='w-full'>
				<main className='flex justify-center items-center m-auto h-[95vh] flex-col'>
					<div className='opacity-70'>
						<Image height={500} width={500} alt='logo' src='/logo4.png'></Image>
					</div>
					<Posts />
				</main>
			</div>
		</main>
	);
}
