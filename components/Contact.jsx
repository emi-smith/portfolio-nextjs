import React from "react";
import Image from "next/image";
import {
	AiOutlineCodepen,
	AiOutlineSlack,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
	return (
		<div id='Contact' className='w-full lg:h-screen '>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full pl-4'>
				<p className=' uppercase text-xl tracking-widest text-[#628069]'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* Left */}
					<div className='col-span-3 lg:col-span-2 w-[96%] md:w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div className='flex flex-col items-center justify-evenly'>
								<Image
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ContactImg}
									alt='person holding a phone sitting in 7front of a computer'
									width='550'
									height='600'
								/>
							</div>
							<div className='flex flex-col items-center justify-evenly'>
								<h2 className='py-6 text-center'>Emily Smith</h2>
								<p className='py-2 text-center'>
									I focus on design and front-end development.
								</p>
								<p className='py-2 text-center'>
									I am available for freelance, contract, part-time or full-time
									positions. Let&apos;s get in contact.
								</p>
							</div>
							<div>
								<p className='flex flex-col items-center justify-evenly uppercase pt-8 pb-2'>
									Connect with Me
								</p>
								<div className='flex items-center justify-center gap-4 sm:gap-16 md:gap-12 max-w-[330px] m-auto py-10 '>
									<Link
										target='_blank'
										href={"https://www.linkedin.com/in/emily-smith-em/"}
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
											<FaLinkedinIn color='#628069' />
										</div>
									</Link>
									<Link target='_blank' href={"https://github.com/emi-smith"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
											<FaGithub color='#628069' />
										</div>
									</Link>
									<Link
										target='_blank'
										href={
											"https://em-front-end-dev.slack.com/archives/C05J3LM7B0A"
										}
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
											<AiOutlineSlack color='#628069' />
										</div>
									</Link>
									<Link target='_blank' href={"https://codepen.io/EmSmith"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
											<AiOutlineCodepen color='#628069' />
										</div>
									</Link>
									<Link
										target='_blank'
										href={"https://twitter.com/Em_FrontEndDev"}
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
											<AiOutlineTwitter color='#628069' />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className='col-span-3 w-[96%] md:w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Name</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
										name='name'
									/>
								</div>

								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Phone Number</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
										name='phone number'
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='email'
										name='email'
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='text'
										name='subject'
									/>
								</div>

								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300'
										rows='10'
										name='message'
									></textarea>
								</div>
								<button className='w-full p-2 h-10 text-gray-100 mt-6 hover:font-bol hover:scale-105 ease-in-out duration-[3s, 1s]'>
									Send Message
								</button>
								<div className='flex justify-center p-3'>
									<p className='italic text-xs text-slate-600'>
										This form intentionally does not submit data.
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center fixed right-10 bottom-0 py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in-out duration-300'>
							<HiOutlineChevronDoubleUp className='text-[#628069]' size={25} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
