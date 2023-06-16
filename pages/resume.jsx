import React from "react";
import Image from "next/image";
import ProfileImg from "../public/assets/emily-headshot.jpg";
import Link from "next/link";
import Education from "../components/EducationSkills";
import Experience from "../components/Experience";

const resume = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-end items-end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[51vh] bg-black/70' />
				<div className='flex justify-end items-end mx-auto absolute top-[57%] max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[45vh] object-cover z-2'>
					<Image
						className='object-cover w-[45vh] h-[45vh] rounded-sm absolute z-1'
						src={ProfileImg}
						alt='/'
					/>
				</div>
				<div className='absolute top-[70%] max-w-[1240px] px-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='text-6xl bfont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a] py-2'>
						Emily Smith
					</h2>
					<p className='text-md tracking-widest'>
						Web Design & Front-End Development
					</p>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 px-4 grid lg:grid-cols-5 gap-8 py-8'>
				<div className='px-2 col-span-3'>
					<div className='py-4'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
							About Me
						</p>
						<p className='py-2 px-6'>
							I am a diligent individual with experience in web design,
							development and health information technology. I can quickly learn
							new software and programs to meet the needs of the project within
							specified deadlines. I have created solutions that improve
							communication, productivity, and project management within
							organizations.
						</p>
						<p className='py-2 px-6'>
							I am resourceful and take initiative in identifying and resolving
							problems. I have strong work ethics, pay close attention to
							detail, and am capable of working independently. I am able to
							adapt to changes and am self-motivated.
						</p>
					</div>
					<Experience />
					<div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-4 pt-5 pb-10'>
						<a
							href='https://github.com/emi-smith/drag-and-drop-to-do'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2'>View Updated Portfolio</button>
						</a>
						<a
							href='https://drag-and-drop-to-do.vercel.app/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2'>View LinkedIn Profile</button>
						</a>
					</div>
				</div>
				<Education />
			</div>
			<div className='flex w-full justify-end pt-2 px-6 pb-8'>
				<Link href='/#projects'>
					<p className='px-4 cursor-pointer text-[#62806a]'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default resume;
