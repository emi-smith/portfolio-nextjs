import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Logo from "../public/assets/NavLogo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#62806a");
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
			setLinkColor("#62806a");
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
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image src={Logo} alt='/' width='125' height='50' />
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
						<Link href='/#Main'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>Home</li>
						</Link>
						<Link href='/#About'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>About</li>
						</Link>
						<Link href='/#Skills'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>Skills</li>
						</Link>
						<Link href='/#Projects'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>
								Projects
							</li>
						</Link>
						<Link href='/#Contact'>
							<li className='ml-10 text-sm uppercase hover:bottom-b'>
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
							? "fixed left-0 top-0 w[75%] sm:w-[60%] md:-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image src={Logo} alt='/' width='87' height='45' />
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-85% md:w-[90%] py-4 text-center'>
								Let&apos;s Create Together.
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/#Main'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#About'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#Skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#Projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/#Contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-40 '>
							<p className='uppercase tracking-widest text-center text-[#62806a]'>
								Let&apos;s Connect
							</p>
							<div className='flex item-center justify-between my-4 gap-4 w-full sm:w-[85%]'>
								<div
									onClick={() => setNav()}
									className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'
								>
									<FaLinkedinIn />
								</div>
								<div
									onClick={() => setNav()}
									className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'
								>
									<FaGithub />
								</div>
								<div
									onClick={() => setNav()}
									className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'
								>
									<AiOutlineMail />
								</div>
								<div
									onClick={() => setNav()}
									className='rounded-full shadow-lg shadow-gray-400 p-3 curser-pointer hover:scale-105 ease-in duration-300'
								>
									<BsPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
