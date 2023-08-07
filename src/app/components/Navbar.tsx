import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='bg-yellow-100 p-4 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <Link href='/' className='text-amber-600/90 no-underline hover:text-amber-600'>Milkshake</Link>
      </div>
		</nav>
	);
}
