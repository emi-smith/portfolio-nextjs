import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
	AiOutlineBehance,
	AiOutlineSlack,
	AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Main = () => {
	return (
		<div id='Main' className='w-full h-auto md:h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div className='flex justify-center content-center flex-wrap flex-col mt-32'>
					<p className='text-base font-light tracking-wider mb-4 text-[#628069]'>
						Let&apos;s Create Something Together
					</p>
					<h1 className='py-4 text-[30px] sm:text-[50px] text-gray-700'>
						Hi, I&apos;m{" "}
						<span className='bfont-extrabold text-transparent text-[45px] sm:text-[70px] bg-clip-text bg-gradient-to-r from-[#628069] to-[#9ca89a]'>
							Emily
						</span>
					</h1>
					<h2 className='py-2 mb-4 max-w-[95%] md:max-w-[70%] m-2 font-medium text-gray-700 text-lg sm:text-3xl'>
						I focus on design and front-end development.
					</h2>
					<p className='mb-[14.4px] text-gray-600 max-w-[95%] md:max-w-[70%] m-auto'>
						My passion for design and development grew during my time in college
						and developing my jewelry business. Between classes, running my
						business, being a wife and mom of three, I taught myself how to code
						and built a website for my jewelry business. This experience helped
						me realize that web design and development is my true passion. I
						love the creative process, thrive on being challenged, and enjoy
						problem-solving. I am deeply passionate about every project I work
						on, whether it is my own or for others.{" "}
					</p>
					<p className='mb-[14.4px] pb-6 text-gray-600 max-w-[95%] md:max-w-[70%] m-auto'>
						My focus is on creating user-friendly and mobile-responsive designs
						and front-end development. There is nothing more frustrating than
						clicking into a mobile website and finding it unusable.{" "}
					</p>
					<div className='flex items-center justify-center gap-6 sm:gap-10 max-w-[330px] m-auto mb-2 my-10 '>
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
							href={"https://em-front-end-dev.slack.com/archives/C05J3LM7B0A"}
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
								<AiOutlineSlack color='#628069' />
							</div>
						</Link>
						<Link
							target='_blank'
							href={"https://www.behance.net/Em_FrontEndDev"}
						>
							<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
								<AiOutlineBehance color='#628069' />
							</div>
						</Link>
						<Link target='_blank' href={"https://twitter.com/Em_FrontEndDev"}>
							<div className='rounded-full shadow-lg shadow-gray-400 p-[14px] w-[44px] h-[44px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
								<AiOutlineTwitter color='#628069' />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
