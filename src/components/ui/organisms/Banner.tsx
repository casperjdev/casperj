export default function Banner() {
	return (
		<main className='w-full h-[calc(100svh-3rem+2px)] flex flex-col justify-center items-start gap-1 px-[10vw] bg-banner bg-opacity-85 backdrop-blur-sm overflow-hidden z-10'>
			<div className='w-max h-[clamp(1.5rem,15vw,7.5rem)] text-neutral-300 text-[clamp(1rem,10vw,5rem)] whitespace-nowrap tracking-widest'>
				<div className='opacity-5 overflow-hidden animate-banner'>
					casper<b className='text-red-400'>j</b>
				</div>
				<div className='-translate-y-[clamp(1.5rem,15vw,7.5rem)] overflow-hidden animate-bannerDelayed'>
					casper<b className='text-red-400'>j</b>
				</div>
			</div>
			<div className='w-max h-[clamp(0.375rem,3.75vw,1.875rem)] text-red-400 text-[clamp(0.25rem,2.5vw,1.25rem)] whitespace-nowrap tracking-[0.125rem]'>
				<div className='opacity-5 overflow-hidden animate-banner'>Kacper Jeznach</div>
				<div className='-translate-y-[clamp(0.375rem,3.75vw,1.875rem)] overflow-hidden animate-bannerDelayed'>
					Kacper Jeznach
				</div>
			</div>
		</main>
	);
}
