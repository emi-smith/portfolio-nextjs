import React from "react";
import Image from "next/image";
import ProfileImg from "../public/assets/emily-headshot.jpg";
import Link from "next/link";
import Education from "../components/EducationSkills";
import Experience from "../components/Experience";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const resume = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-end items-end w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70'>
					<div className='flex justify-end items-end mx-auto absolute top-[50%] max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[50vh] object-cover z-2'>
						<Image
							className='object-cover w-[45vh] h-[45vh] rounded-sm absolute z-1'
							src={ProfileImg}
							alt='Headshot of a female.'
						/>
					</div>
					<div className='absolute bottom-[0%] max-w-[1240px] px-[12px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
						<h2 className='text-5xl font-bold sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#628069] to-[#9ca89a] py-2'>
							Emily Smith
						</h2>
						<p className='text-sm sm:text-base tracking-widest px-[4px]'>
							Web Design & Front-End Development
						</p>
					</div>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto p-2 lg:px-4 grid lg:grid-cols-5 gap-8 py-8'>
				<div className='px-2 col-span-5 lg:col-span-3'>
					{/* <div className='py-4'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#628069]'>
							About Me
						</p>
						<p className='py-2 sm:px-4'>
							A diligent individual with experience in web design and
							development with a background in health information technology.
							Proficient learning new software and programs quickly to meet
							project needs within specified deadlines. Demonstrates the ability
							to create solutions that enhance communication, productivity, and
							project management. Resourceful and proactive in identifying and
							resolving problems.
						</p>
					</div> */}
					<Experience />
					<div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:gap-10 w-full pt-5 pb-10'>
						<a
							className='justify-self-center w-[75%] hover:md:scale-105 ease-in-out duration-300'
							href='https://emsmith.info'
							target='_blank'
							rel='noreferrer'
						>
							<button className='w-full text-center p-2 text-sm md:text-md hover:md:scale-100'>
								WordPress Portfolio
							</button>
						</a>
						<a
							className='justify-self-center w-[75%] hover:md:scale-105 ease-in-out duration-300'
							href='https://www.linkedin.com/in/emily-smith-em/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='w-full text-center p-2 text-sm md:text-md hover:md:scale-100'>
								LinkedIn Profile
							</button>
						</a>
					</div>
				</div>
				<Education />
			</div>
			<div className='w-full h-auto text-center'>
				<div className='max-w-[1240px] w-full h-full min-h-[100px] mx-auto p-2 pt-5 flex justify-start items-start'>
					<Link href='/#projects'>
						<p className='px-4 cursor-pointer text-[#628069]'>Back</p>
					</Link>
				</div>
			</div>
			<div className='flex justify-center fixed right-10 bottom-0 py-12'>
				<Link href='/resume'>
					<div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
						<HiOutlineChevronDoubleUp className='text-[#628069]' size={25} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default resume;
