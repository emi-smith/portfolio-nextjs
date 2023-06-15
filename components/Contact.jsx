import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
	return (
		<div id='Contact' className='w-full lg:h-screen '>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full pl-4'>
				<p className=' uppercase text-xl tracking-widest text-[#62806a]'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* Left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div className='flex flex-col items-center justify-evenly'>
								<Image
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ContactImg}
									alt='/'
									width='550'
									height='600'
								/>
							</div>
							<div className='flex flex-col items-center justify-evenly'>
								<h2 className='py-6'>Emily Smith</h2>
								<p className='py2'>
									I focus on design and front-end development.
								</p>
								<p className='py-2'>
									I am available for freelance, contract, part-time or full-time
									positions. Let&apos;s get in contact.
								</p>
							</div>
							<div>
								<p className='flex flex-col items-center justify-evenly uppercase pt-8 pb-2'>
									Connect with Me
								</p>
								<div className='flex items-center justify-center gap-12 max-w-[330px] m-auto py-10 '>
									<Link href={"https://www.linkedin.com/in/emily-smith-em/"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
											<FaLinkedinIn />
										</div>
									</Link>
									<Link href={"https://github.com/emi-smith"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
											<FaGithub />
										</div>
									</Link>
									<Link href={"mailto:emilysmith.design.dev@gmail.com"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
											<AiOutlineMail />
										</div>
									</Link>
									<Link href={"/resume"}>
										<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
											<BsPersonLinesFill />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='name'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='phone number'
										/>
									</div>
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
								<button className='w-full p-4 text-gray-100 mt-6'>
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
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
							<HiOutlineChevronDoubleUp className='text-[#62806a]' size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
