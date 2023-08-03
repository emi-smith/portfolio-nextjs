import React from "react";
import Image from "next/image";
import DragDropImg from "../public/assets/projects/drag-drop-desktop.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const dragDrop = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10' />
				<Image
					className='object-cover w-full h-[50vh] absolute z-1'
					Layout='fill'
					src={DragDropImg}
					alt='Image of a drag and drop to do list for desktop and mobile devices.'
				/>
				<div className='absolute top-[70%] max-w-[1240px] px-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2 text-[22px] sm:text-[32px]'>
						Drag & Drop To Do List
					</h2>
					<h3 className='py-2 text-[12px] sm:text-[16px]'>
						HTML / CSS / JavaScript
					</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto justify-items-center p-2 px-4 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className=' uppercase py-2 text-lg tracking-widest text-[#628069]'>
						Project
					</p>
					<h2 className='pb-2'>Overview</h2>
					<p className='pb-2'>
						A simple drag and drop to do list. My goal with this project was to
						dive deeper into accepting user input and store the data to local
						storage. Learn how to capture multiple inputs and store them in an
						array, As well as save, get, edit, and update the array in local
						storage. As well as learning how to allow users to filter, edit,
						complete, and delete items. As well as learn more about touch
						events.
					</p>
					<p className='pb-2'>This project is currently in progress.</p>
					<div className='grid grid-cols-2 justify-items-center gap-10 w-full pt-5 pb-10 my-6'>
						<a
							className='justify-self-center w-[100%] md:w-[55%] hover:scale-105 ease-in-out duration-300'
							href='https://github.com/emi-smith/drag-and-drop-to-do'
							target='_blank'
							rel='noreferrer'
						>
							<button className='w-full text-center p-2 text-sm hover:font-500'>
								View Code
							</button>
						</a>
						<a
							className='justify-self-center w-[100%] md:w-[55%] hover:scale-105 ease-in-out duration-300'
							href='https://drag-and-drop-to-do.vercel.app/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='w-full text-center p-2 text-sm hover:font-500'>
								View Project
							</button>
						</a>
					</div>
				</div>
				<div className='col-span-4 md:col-span-1 w-[75%] sm:w-[100%] shadow-xl shadow-gray-400 rounded-xl py-4'>
					<div className='p-4'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' size='14' color='#628069' />{" "}
								HTML
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' size='14' color='#628069' />{" "}
								CSS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' size='14' color='#628069' />{" "}
								Javascript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' size='14' color='#628069' />{" "}
								Git
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' size='14' color='#628069' />{" "}
								GitHub
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='cursor-pointer text-[#628069] hover:text-[#9ca89a]'>
						Back
					</p>
				</Link>
			</div>
		</div>
	);
};

export default dragDrop;
