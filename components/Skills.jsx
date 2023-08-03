import React from "react";
import Image from "next/image";
import HtmlImg from "../public/assets/skills/html-logo.png";
import CssImg from "../public/assets/skills/css-logo.png";
import JavascriptImg from "../public/assets/skills/javascript-logo.png";
import TailwindImg from "../public/assets/skills/tailwind-css-logo.png";
import ReactImg from "../public/assets/skills/react-logo.png";
import GithubImg from "../public/assets/skills/github-logo.png";
import NextJsImg from "../public/assets/skills/nextjs-logo-transparent.png";

const Skills = () => {
	return (
		<div id='Skills' className='w-full lg:h-screen p-2 pl-4'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className=' uppercase text-xl tracking-widest text-[#628069]'>
					Skills
				</p>
				<h2 className='py-4'>What I can do</h2>
				<div className='w-[96%] md:w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image src={HtmlImg} width='64' height='64' alt='HTML5 logo' />
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>HTML</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image src={CssImg} width='64' height='64' alt='CSS3 Logo' />
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>CSS</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={JavascriptImg}
									width='64'
									height='64'
									alt='JavaScript logo'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>JavaScript</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={TailwindImg}
									width='64'
									height='64'
									alt='Tailwind CSS logo'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>Tailwind</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image src={ReactImg} width='64' height='64' alt='React logo' />
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>React</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={GithubImg}
									width='64'
									height='64'
									alt='GitHub logo'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>GitHub</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={NextJsImg}
									width='64'
									height='64'
									alt='Next.js logo'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>Next.js</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<svg
									width='64'
									height='50'
									viewBox='0 0 76 65'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M37.5274 0L75.0548 65H0L37.5274 0Z' fill='#000000' />
								</svg>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>Vercel</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
