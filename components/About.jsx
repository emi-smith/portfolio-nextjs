import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/emily-headshot.jpg";

const About = () => {
	return (
		<div id='About' className='md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 lg:gap-20'>
				<div className='flex flex-col col-span-2 pl-4 gap-5 mb-6'>
					<p className=' uppercase text-xl tracking-widest h-[16px] text-[#628069]'>
						About
					</p>
					<h2 className=''>Who I Am</h2>
					<p className=' text-gray-600'>
						A diligent individual with experience in web design and development
						with a background in health information technology. Proficient
						learning new software and programs quickly to meet project needs
						within specified deadlines. Demonstrates the ability to create
						solutions that enhance communication, productivity, and project
						management. Resourceful and proactive in identifying and resolving
						problems.
					</p>

					<div className='flex justify-center content-center items-center w-full h-[50px]'>
						<Link className='p-0 mr-4 md:mr-0' href='/resume'>
							<p className='pt-[2px] flex justify-center items-center font-quick rounded-[4px] shadow-btnShadow hover:shadow-btnHoverShadow w-[200px] hover:w-[208px] h-[42px] hover:h-[46px] hover:font-medium font-semibold text-[14px] tracking-wide hover:tracking-widest	text-[#628069;] cursor-pointer'>
								VIEW MY EXPERIENCE
							</p>
						</Link>
					</div>
				</div>
				<div className='w-[70%] md:w-full h-auto my-20 mx-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
					<Image
						className='rounded-xl'
						src={AboutImg}
						alt='Headshot of female'
						width='100%'
						height='auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
