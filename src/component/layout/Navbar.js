import CenterLayout from "./CenterLayout";

function Navbar() {
	return (
		<div className='fixed top-0 right-0 left-0 py-2 sm:h-[60px] bg-black bg-opacity-75 z-50 flex items-center'>
			<div className='w-full'>
				<CenterLayout>
					<div className='w-full'>
						<div className='text-white text-md'>
							This app provides a seamless interface for the Stable Diffusion
							image generation model made for{" "}
							<a
								className='text-blue-500 font-bold'
								href='https://www.qura.law'
							>
								Lawlabs AB
							</a>
							.
						</div>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default Navbar;
