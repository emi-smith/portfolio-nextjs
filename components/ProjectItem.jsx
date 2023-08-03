import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, technology, backgroundImg, projecturl }) => {
	return (
		<div
			id='ProjectId'
			className='relative flex items-center justify-center h-auto w-[96%] md:w-full shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 group hover:bg-gradient-to-r from-[#628069] to-[#9ca89a]'
		>
			<Image
				className='rounded-xl group-hover:opacity-10'
				src={backgroundImg}
				alt='Placeholder for project images, images changes on the click of a new project.'
			/>
			<div className='hidden h-full w-full group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<div className='flex flex-col justify-center content-center h-full w-full'>
					<h3 className='text-[18px] sm:text-[32px] text-white tracking-wider text-center'>
						{title}
					</h3>
					<p className='pb-4 pt-2 text-[14px] sm:text-[20px] text-white text-center'>
						{technology}
					</p>
					<div className='flex justify-center content-center w-full h-14'>
						<Link className='flex justify-center w-full' href={projecturl}>
							<p className='self-center justify-self-center hover:scale-110 w-[75%] sm:w-[46%] lg:w-2/5 h-4/5 tracking-[1.5px] text-center py-2.5 px-2 rounded-lg bg-white text-[#628069] hover:text-[#9ca89a] font-medium text-base cursor-pointer hover:font-semibold'>
								More Details
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
