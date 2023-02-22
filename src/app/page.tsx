import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div className='w-full'>
				<main className='flex justify-center items-center m-auto h-screen flex-col'>
          <div className='opacity-70'>
          <Image height={500} width={500} alt="logo" src="/logo4.png"></Image>
          </div>
					<div className='text-8xl '>
						{/* Welcome to <a href='https://nextjs.org'>Next.js 13!</a> */}
					</div>
					<div className='text-4xl my-10 '>
          </div>
				</main>
			</div>
		</main>
	);
}
