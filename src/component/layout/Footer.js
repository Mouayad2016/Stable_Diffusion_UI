import CenterLayout from "./CenterLayout";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className='h-full bg-black flex flex-col gap-6 pt-6 text-white'>
			<CenterLayout>
				<div className='flex flex-col gap-11'>
					<div className={`flex font-mono space-x-12 md:space-x-0 font-bold `}>
						<div className={`hidden lg:flex flex-col item flex-grow gap-6 `}>
							<p className='text-xl'>Contact information</p>
							<div className='flex items-center '>
								<img
									alt='Mouayad Mouayad'
									className='w-32 h-32 rounded-lg object-cover'
									src='images/team/mouayad_mouayad.png'
									height={300}
									width={300}
								></img>
								<div className='h-5/6 w-[0.5px] mr-4'></div>

								<div
									className={`flex h-full flex-col items-start justify-center text-gray-300`}
								>
									<p className='text-sm font-bold'>Fullstack Developer</p>
									<p className='text-sm font-bold'>Mouayad Mouayad</p>
									<div className='flex flex-col text-sm text-blue-300'>
										<a href='mailto:mouayad1998@hotmail.com' className=''>
											mouayad1998@hotmail.com
										</a>
										<a href='tel:+46733524957'>+46 733 524 957</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>

			<CenterLayout>
				<div className='flex lg:hidden flex-col justify-center gap-6 text-white'>
					<p className='text-lg font-bold '>Contact information</p>
					<div className='flex items-center'>
						<img
							alt='Mouayad Mouayad'
							className={`w-32 h-32 rounded-lg object-cover mr-4`}
							src='images/team/mouayad_mouayad.png'
							height={300}
							width={300}
						></img>
						<div className='h-5/6 w-[0.5px] mr-4'></div>

						<div className='flex h-full flex-col items-start justify-center text-gray-300 font-mono gap-2'>
							<p className='text-sm md:text-md font-bold'>
								Fullstack Developer
							</p>
							<p className='text-sm md:text-md font-bold'>Mouayad Mouayad</p>
							<a
								href='mailto:mouayad1998@hotmail.com'
								className='text-blue-300 text-sm md:text-md '
							>
								mouayad1998@hotmail.com
							</a>
							<a
								href='tel:+46733524957'
								className='text-blue-300 text-sm md:text-md'
							>
								+46 733 524 957
							</a>
						</div>
					</div>
				</div>
			</CenterLayout>
			<div className='flex flex-col gap-6'>
				<div className='w-full h-[1px] bg-gray-700'></div>
				<CenterLayout>
					<div className='pb-6 flex justify-start items-center text-sm md:text-md text-white'>
						<p>&copy; {currentYear} Mouayad Mouayad 25/07/2024</p>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default Footer;
