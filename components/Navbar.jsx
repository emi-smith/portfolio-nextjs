import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineBehance,
	AiOutlineSlack,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "../public/assets/NavLogo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#628069");
	const [position, setPosition] = useState("fixed");
	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === "/sticky-notes"
			//   ||
			//   router.asPath === '/crypto' ||
			//   router.asPath === '/netflix' ||
			//   router.asPath === '/twitch'
		) {
			setNavBg("transparent");
			setLinkColor("#ecf0f3");
		} else {
			setNavBg("#ecf0f3");
			setLinkColor("#628069");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-6'>
				<Link href='/'>
					<Image
						src={Logo}
						alt='logo of ES for Emily Smith'
						width='80'
						height='50'
					/>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
						<Link href='/#Main'>
							<li className='ml-10 text-sm uppercase hover:text-[#9ca89a] hover:bottom-b'>
								Home
							</li>
						</Link>
						<Link href='/#About'>
							<li className='ml-10 text-sm uppercase hover:text-[#9ca89a] hover:bottom-b'>
								About
							</li>
						</Link>
						<Link href='/#Skills'>
							<li className='ml-10 text-sm uppercase hover:text-[#9ca89a] hover:bottom-b'>
								Skills
							</li>
						</Link>
						<Link href='/#Projects'>
							<li className='ml-10 text-sm uppercase hover:text-[#9ca89a] hover:bottom-b'>
								Projects
							</li>
						</Link>
						<Link href='/#Contact'>
							<li className='ml-10 text-sm uppercase hover:text-[#9ca89a] hover:bottom-b'>
								Contact
							</li>
						</Link>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
				}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500"
							: "fixed right-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className='flex w-full items-center justify-end'>
							<div
								style={{ color: `${linkColor}` }}
								onClick={handleNav}
								className='self-start cursor-pointer'
							>
								<AiOutlineClose size={20} />
							</div>
						</div>
					</div>
					<div className='px-4 flex justify-center flex-col'>
						<ul className='uppercase font-light'>
							<Link href='/#Main'>
								<li
									onClick={() => setNav(false)}
									className='text-center tracking-[1px] my-[15px] text-[#628069] hover:text-[#9ca89a] text-[20px]'
								>
									Home
								</li>
							</Link>
							<Link href='/#About'>
								<li
									onClick={() => setNav(false)}
									className='text-center tracking-[1px] my-[15px] text-[#628069] hover:text-[#9ca89a] text-[20px]'
								>
									About
								</li>
							</Link>
							<Link href='/#Skills'>
								<li
									onClick={() => setNav(false)}
									className='text-center tracking-[1px] my-[15px] text-[#628069] hover:text-[#9ca89a] text-[20px]'
								>
									Skills
								</li>
							</Link>
							<Link href='/#Projects'>
								<li
									onClick={() => setNav(false)}
									className='text-center tracking-[1px] my-[15px] text-[#628069] hover:text-[#9ca89a] text-[20px]'
								>
									Projects
								</li>
							</Link>
							<Link href='/#Contact'>
								<li
									onClick={() => setNav(false)}
									className='text-center tracking-[1px] my-[15px] text-[#628069] hover:text-[#9ca89a] text-[20px]'
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-8 '>
							<p className='uppercase text-[18px] tracking-[1.5px] text-center text-[#628069]'>
								Let&apos;s Connect
							</p>
							<div className='flex item-center justify-center my-4 gap-3 sm:gap-5 w-full'>
								<Link href={"https://www.linkedin.com/in/emily-smith-em/"}>
									<div className='rounded-full shadow-lg shadow-gray-400 p-[12px] w-[40px] h-[40px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
										<FaLinkedinIn color='#628069' />
									</div>
								</Link>
								<Link href={"https://github.com/emi-smith"}>
									<div className='rounded-full shadow-lg shadow-gray-400 p-[12px] w-[40px] h-[40px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
										<FaGithub color='#628069' />
									</div>
								</Link>
								<Link href={"https://design-front-end-dev.slack.com/"}>
									<div className='rounded-full shadow-lg shadow-gray-400 p-[12px] w-[40px] h-[40px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
										<AiOutlineSlack color='#628069' />
									</div>
								</Link>
								<Link href={"https://www.behance.net/Em_FrontEndDev"}>
									<div className='rounded-full shadow-lg shadow-gray-400 p-[12px] w-[40px] h-[40px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
										<AiOutlineBehance color='#628069' />
									</div>
								</Link>
								<Link href={"https://twitter.com/Em_FrontEndDev"}>
									<div className='rounded-full shadow-lg shadow-gray-400 p-[13px] w-[40px] h-[40px] curser-pointer hover:scale-110 hover:bg-[#9ca89a] ease-in duration-300'>
										<AiOutlineTwitter color='#628069' />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
