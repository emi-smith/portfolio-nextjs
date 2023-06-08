import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
	return (
		<div id='Main' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						Let&apos;s create something together
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I&apos;m{" "}
						<span className='bfont-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
							Emily
						</span>
					</h1>
					<h2 className='py-2  text-gray-700'>
						I focus on design and front-end development.
					</h2>
					<p className='pt-8 pb-2 text-gray-600 max-w-[70%] m-auto'>
						My passion for design and development grew during my time in college
						and running my jewelry business. Between computer science classes
						and teaching myself how to code, I built a website for my previous
						jewelry business. This experience helped me realize that web design
						and development is my true passion. I love the creative process,
						thrive on being challenged, and enjoy problem-solving. I am deeply
						passionate about every project I work on, whether it is my own or
						for others.{" "}
					</p>
					<p className='pt-2 pb-8 text-gray-600 max-w-[70%] m-auto'>
						My focus is on creating user-friendly and mobile-responsive designs
						and front-end development. There is nothing more frustrating than
						clicking into a website on your mobile device and finding it
						unusable.{" "}
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-10 '>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-5 curser-pointer hover:scale-110 active:bg-[#9ca89a] ease-in duration-300'>
							<BsPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
