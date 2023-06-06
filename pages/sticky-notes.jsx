import React from "react";
import Image from "next/image";
import stickynoteprojectimage from "../public/assets/projects/sticky-note-project-image.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const stickynotes = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10' />
				{/* <Link href='https://sticky-notes-gilt.vercel.app/'>View Project</Link> */}
				<Image
					className='object-cover w-full h-[50vh] absolute z-1'
					Layout='fill'
					src={stickynoteprojectimage}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] px-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Sticky Notes</h2>
					<h3>HTML / CSS / JavaScript</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 px-4 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p className=' uppercase py-2 text-xl tracking-widest text-[#5651e5]'>
						Project
					</p>
					<h2 className='pb-2'>Overview</h2>
					<p>
						This app was built using React JS and is hosted on Firebase. Users
						are able to search properties based on an Address, City, or ZIP code
						to retrieve a list of active properties currently for sale. You will
						be able to view property information as well as the specific
						location of the property integrated with the Google Maps API. User
						authentication is available so you can signup and signin to your
						account with an email address in order to save your favorite
						properties. This is made possible with Zillow API.
					</p>

					<div className='grid grid-cols-2 justify-items-center pt-5 pb-10'>
						<a
							href='https://github.com/fireclint/property-finder'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2 mt-4 mr-8'>Code</button>
						</a>
						<a
							href='https://property-finder-development.web.app/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2 mt-4'>Demo</button>
						</a>
					</div>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
					<div className='p-2'>
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
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default stickynotes;
