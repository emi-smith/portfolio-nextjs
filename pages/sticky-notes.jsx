import React from "react";
import Image from "next/image";
import StickyNoteImg from "../public/assets/projects/sticky-note-project-image.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const stickyNotes = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10' />
				<Image
					className='object-cover w-full h-[50vh] absolute z-1'
					Layout='fill'
					src={StickyNoteImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] px-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Simple Sticky Notes</h2>
					<h3>HTML / CSS / JavaScript</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 px-4 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
						Project
					</p>
					<h2 className='pb-2'>Overview</h2>
					<p>
						A simple sticky note project, my goal with this project was to learn
						how to get and store data to local storage. I will be building a
						drag and drop to do list to get more experience with JavaScript and
						local storage.
					</p>

					<div className='grid grid-cols-2 justify-items-center pt-5 pb-10'>
						<a
							href='https://github.com/emi-smith/sticky-notes'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2 mt-4 mr-8'>View Code</button>
						</a>
						<a
							href='https://sticky-notes-gilt.vercel.app/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2 mt-4'>View Project</button>
						</a>
					</div>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
					<div className='p-4'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> HTML
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Javascript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Git
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> GitHub
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='cursor-pointer text-[#62806a]'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default stickyNotes;
