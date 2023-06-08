import React from "react";
import Image from "next/image";
const Skills = () => {
	return (
		<div id='Skills' className='w-full lg:h-screen p-2 pl-4'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className=' uppercase text-1 tracking-widest text-[#62806a]'>
					Skills
				</p>
				<h2 className='py-4'>What I can do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/html-logo.png'
									width='64'
									height='64'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>HTML</h2>
							</div>
						</div>
					</div>
					<div className='flex p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 justify-center items-center'>
						<div className='grid grid-cols-3 gap-6 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/../public/assets/skills/css-logo.png'
									width='64'
									height='64'
									alt='/'
								/>
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
									src='/../public/assets/skills/javascript-logo.png'
									width='64'
									height='64'
									alt='/'
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
									src='/../public/assets/skills/tailwind-css-logo.png'
									width='64'
									height='64'
									alt='/'
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
								<Image
									src='/../public/assets/skills/react-logo.png'
									width='64'
									height='64'
									alt='/'
								/>
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
									src='/../public/assets/skills/github-logo.png'
									width='64'
									height='64'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center col-span-2'>
								<h2>GitHub</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
