import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/emily-headshot.jpg";

const About = () => {
	return (
		<div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2 pl-4'>
					<p className=' uppercase text-1 tracking-widest text-[#62806a]'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>
						I am a diligent individual with experience in web design,
						development and health information technology. I can quickly learn
						new software and programs to meet the needs of the project within
						specified deadlines. I have created solutions that improve
						communication, productivity, and project management within
						organizations.
					</p>
					<p className='py-2 text-gray-600'>
						I am resourceful and take initiative in identifying and resolving
						problems. I have strong work ethics, pay close attention to detail,
						and am capable of working independently. I am able to adapt to
						changes and am self-motivated.
					</p>

					<Link href='/resume'>
						<p className='flex justify-center py-4 text-[#62806a] cursor-pointer'>
							VIEW MY RESUME.
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image
						className='rounded-xl'
						src={AboutImg}
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
