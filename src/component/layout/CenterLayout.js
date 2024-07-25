export default function CenterLayout({ children }) {
	return (
		<div className='flex items-center justify-center'>
			<div className='container mx-auto px-4 md:px-[70px] max-w-screen-2xl'>
				{children}
			</div>
		</div>
	);
}
