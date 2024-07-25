import CenterLayout from "./CenterLayout";

function Header() {
	return (
		<div
			className={`relative lg:h-[850px] h-screen min-h-[950px]  flex flex-col justify-between`}
		>
			<img
				alt='SveaSoft Design'
				width={2500}
				height={2500}
				src='/images/bg/stockholm.jpg'
				className='absolute w-auto min-w-full h-full object-cover'
			/>

			<div className='flex flex-col h-full sm:justify-center justify-center'>
				<CenterLayout>
					<div className='absolute inset-0 bg-black opacity-50 z-20'></div>

					<div className='relative z-30 flex flex-col items-start justify-center md:justify-start mt-20 md:mt-40 '>
						<div className='max-w-5xl'>
							<h1
								className={`text-white lg:text-7xl md:text-5xl text-4xl font-bold 
									font-archivo
								`}
							>
								Welcome to our API Integration with Stable Diffusion
							</h1>
						</div>
						<div className='h-6'></div>
						<div className='lg:max-w-3xl md:max-w-2xl sm:max-w-xl'>
							<p className='  text-white text-xl font-medium '>
								Experience the power of AI to generate stunning images
								effortlessly. Our platform leverages the cutting-edge Stable
								Diffusion API, providing you with a seamless and intuitive
								interface to create amazing visuals. Whether you're an artist,
								designer, or just someone who loves beautiful imagery, our tool
								is designed to make your creative process easier and more
								enjoyable. Dive in and start creating your masterpiece today!
							</p>
						</div>
						<div className='h-6'></div>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default Header;
