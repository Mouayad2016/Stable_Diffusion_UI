import React from "react";
import { useSelector } from "react-redux";

function Gallery() {
	const images = useSelector((state) => state.imageStore.images);

	return (
		<div className='w-full'>
			<div className='w-full bg-gray-50 rounded-md mb-24'>
				{!images.length && (
					<p className='p-8 text-black font-mono'>
						You don't have any images yet. Start creating by making a query! For
						example, try entering: "Sunny day at the beach with dolphins."
					</p>
				)}
				<div className='gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
					{[...images].reverse().map((img, index) => (
						<div key={index} className='overflow-hidden rounded-lg shadow-lg'>
							<img
								src={`data:image/jpeg;base64,${img.image}`}
								alt={`Generated from: ${img.query}`}
								className='w-full h-auto object-cover object-center'
							/>
							<div className='bg-white p-2 text-center text-sm font-semibold text-gray-800'>
								{img.query}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Gallery;
