import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className=' uppercase text-1 tracking-widest text-[#5651e5]'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>
						Description of myself, what I do, what I like to do, my strengths.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<p className='py-2 text-gray-600'>
						Description of myself, what I do, what I like to do, my strengths.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<p className='py-2 text-gray-600 underline cursor-pointer'>
						Check out some of my latest projects.
					</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image
						className='rounded-xl'
						src='/../public/assets/emily-headshot.jpg'
						alt='/'
						width='300'
						height='300'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
