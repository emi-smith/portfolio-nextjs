import React from "react";
import Image from "next/image";
import ProfileImg from "../public/assets/emily-headshot.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const resume = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-end items-end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[51vh] bg-black/70' />
				<div className='flex justify-end items-end mx-auto absolute top-[57%] max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[45vh] object-cover z-2'>
					<Image
						className='object-cover w-[45vh] h-[45vh] rounded-sm absolute z-1'
						// Layout='fill'
						src={ProfileImg}
						alt='/'
					/>
				</div>
				<div className='absolute top-[70%] max-w-[1240px] px-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='text-6xl bfont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a] py-2'>
						Emily Smith
					</h2>
					<p className='text-md tracking-widest'>
						Web Design & Front-End Development
					</p>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 px-4 grid lg:grid-cols-5 gap-8 py-8'>
				<div className='px-2 col-span-3'>
					<div className='py-4'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
							About Me
						</p>
						<p className='py-2 px-6'>
							I am a diligent individual with experience in web design,
							development and health information technology. I can quickly learn
							new software and programs to meet the needs of the project within
							specified deadlines. I have created solutions that improve
							communication, productivity, and project management within
							organizations.
						</p>
						<p className='py-2 px-6'>
							I am resourceful and take initiative in identifying and resolving
							problems. I have strong work ethics, pay close attention to
							detail, and am capable of working independently. I am able to
							adapt to changes and am self-motivated.
						</p>
					</div>
					<div className='py-4'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
							Experience
						</p>
						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>
								Web Design | Front-End Development
							</p>
							<p className='px-2 text-[#9ca89a]'>Freelance</p>
							<p className='px-2 text-xs text-gray-500'>
								Jul 2021 - Present · 2 yrs
							</p>
							<p className='py-2 px-2'>
								I have spent this time working towards a career in UX/UI design
								and front-end development. I have been focusing on the following
								areas:
							</p>
							<p className='py-2 px-2'>
								Building my portfolio, projects to add to my portfolio, and
								business development.
							</p>
							<p className='py-2 px-2'>
								Taking additional computer science, design and development
								courses to strengthen CSS, HTML, JavaScript, design, and general
								development knowledge.
							</p>
							<p className='py-2 px-2'>
								Began learning React, Next.JS, Tailwind.
							</p>
							<p className='py-2 px-2'>
								I am currently focusing on strengthening my JavaScript skills by
								taking additional courses, reading additional JavaScript books,
								and creating JavaScript focused projects. Currently I am working
								on a drag and drop to do list in JavaScript. Next I will be
								focusing on learning more React, Next.JS, Tailwind, and CSS
								animation.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Em&apos;s Shore landing page
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Drag and drop to do list
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Simple sticky notes
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Portfolio with Next.js
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Project management app
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										CSS
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										HTML
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										JavaScript
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Next.js
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Tailwind
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										React
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Git
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										GitHub
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Vercel
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Figma
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Invision
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Miro
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Notion
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Appsheet
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>

						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>
								Outreach and Enrollment Specialist | Marketing
							</p>
							<p className='px-2 text-[#9ca89a]'>
								Kaniksu Community Health (Formerly Kaniksu Health Services)
							</p>
							<p className='px-2 text-xs text-gray-500'>
								Sep 2020 - Jul 2021 · 11 mos
							</p>

							<p className='py-2 px-2'>
								Created and implemented new processes for marketing, outreach,
								and patient assistance.
							</p>
							<p className='py-2 px-2'>
								Perform marketing research, design and develop marketing
								collateral for website, social media, clinics, and throughout
								the community.
							</p>
							<p className='py-2 px-2'>
								Work collaboratively with KHS staff to provide education and
								assistance to patients.
							</p>
							<p className='py-2 px-2'>
								Marketing research, development, design, and documentation
								review. Work closely with team members to create new processes
								to improve marketing and outreach efforts. Develop and manage
								multiple KHS outreach projects.
							</p>
							<p className='py-2 px-2'>
								Design, develop and manage Patient Newsletter. Take lead on
								creating KHS patient newsletter, Effectively communicate with
								marketing team and KHS staff to create and manage Kaniksu Health
								Insider patient newsletter.
							</p>
							<p className='py-2 px-2'>
								Design and develop internal applications for marketing and
								patient assistance staff use.
							</p>
							<p className='py-2 px-2'>
								Create KHS website pages and social media posts. Update website
								as needed and post to social media regularly.
							</p>
							<p className='py-2 px-2'>
								Create training documents for patient assistance training and
								train new patient assistance staff.
							</p>
							<p className='py-2 px-2'>
								Provide patient and community insurance enrollment assistance
								and support.
							</p>
							<p className='py-2 px-2'>
								Coordinate in-reach and outreach activities to help eligible
								health center patients and service area residents.
							</p>
							<p className='py-2 px-2'>
								Daily use of Microsoft Office, Google programs, and NextGen EHR.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Outreach app
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Marketing app
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										KHS Patient News Letter
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Diaper Bank
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										KHS website pages & updates
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Surveys
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Forms
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Training Documents
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Appsheet
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Weebly
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										MailChimp
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Google Workspace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Microsoft Office
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Adobe
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Marketing
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										SEO
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										NextGen
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>

						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>Small Business Owner</p>
							<p className='px-2 text-[#9ca89a]'>Em&apos;s Shore</p>
							<p className='px-2 text-xs text-gray-500'>
								Mar 2015 - Oct 2020 · 5 yrs 8 mos
							</p>
							<p className='py-2 px-2'>Run and operate www.emsshore.com</p>
							<p className='py-2 px-2'>
								Website design and development; WordPress, CSS, HTML, and
								JavaScript.
							</p>
							<p className='py-2 px-2'>
								Execute regular website maintenance to include adding and
								maintaining products within woocommerce.
							</p>
							<p className='py-2 px-2'>
								Optimize SEO for Em&apos;s Shore to include creating and
								executing an SEO marketing strategy.
							</p>
							<p className='py-2 px-2'>
								Execute all day to day administrative and management duties to
								ensure the business is operating smoothly to include daily sales
								and order fulfillment duties.
							</p>
							<p className='py-2 px-2'>
								Manage small business finances utilizing QuickBooks and perform
								additional bookkeeping duties.
							</p>
							<p className='py-2 px-2'>
								Create and maintain material/product database, along with
								additional inventory management duties. Responsible for all
								material research and purchasing.
							</p>
							<p className='py-2 px-2'>
								Perform all marketing, advertising, and customer service duties.
							</p>
							<p className='py-2 px-2'>
								Design and create handcrafted jewelry.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Em&apos;s Shore landing page
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Em&apos;s Shore website
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Material database
									</p>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Product database
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Wordpress
									</p>

									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										CSS
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										HTML
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										JavaScript
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Adobe
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										WooCommerce
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										MailChimp
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Squarespace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Wix
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Google Workspace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Microsoft Office
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Access
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Marketing
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										SEO
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>

						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>HIM Technician</p>
							<p className='px-2 text-[#9ca89a]'>Adventist Health</p>
							<p className='px-2 text-xs text-gray-500'>
								Feb 2019 - Oct 2019 · 9 mos
							</p>
							<p className='py-2 px-2'>
								Sole ROI clerk for the hospital and 13 ancillary clinics.
								Processing patient ROI requests, continuation of care, transfer
								of care, Subpoena and Legal requests, workers comp, billing
								requests, and routing payable requests to our third-party copy
								service. As well as requests for insurance, audits, and
								radiology image discs and push requests.
							</p>
							<p className='py-2 px-2'>
								Trained coworkers on processing ROI requests as well as how to
								use, navigate, and search for information in our EHRs and all
								associated programs. Created brochures and training aids for
								current and new staff.
							</p>
							<p className='py-2 px-2'>
								Created and implemented new processes for the HIM Department.
							</p>
							<p className='py-2 px-2'>
								Problem solve difficult situations for patients, other
								departments, providers, hospital and clinic staff.
							</p>
							<p className='py-2 px-2'>
								Trained on ED, outpatient and inpatient analysis.
							</p>
							<p className='py-2 px-2'>
								When time permitted, helped prep and scan incoming charts for
								analysis. Scan charts from clinics and incoming records to
								patients EMR.
							</p>
							<p className='py-2 px-2'>
								Answer phone calls, emails, ran rounds to gathering charts from
								the hospital and clinics, as well as run records to patients.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Training documents
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Epic
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Cerner
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Google Workspace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Microsoft Office
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Adobe
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>

						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>Sr. Customer Care Associate</p>
							<p className='px-2 text-[#9ca89a]'>Adventist Health</p>
							<p className='px-2 text-xs text-gray-500'>
								Jul 2018 - Feb 2019 · 8 mos
							</p>
							<p className='py-2 px-2'>
								Daily use of phones, secure messaging, fax/copy machines,
								Microsoft Word and Excel, Outlook, and HomeWorks EMR.
							</p>
							<p className='py-2 px-2'>
								Gather patient information in Epic, Cerner, and HomeWorks for
								patient care, and to complete daily tasks.
							</p>
							<p className='py-2 px-2'>
								Effectively communicate with Physicians MA&apos;s, Insurance
								companies, and other health care settings.
							</p>
							<p className='py-2 px-2'>
								Schedule and process patient referrals. Contact insurance
								companies to obtain authorizations for patients visits.
							</p>
							<p className='py-2 px-2'>
								Gather patient referral information, prepare referral packets
								for clinicians to start patient care and admit patients.
							</p>
							<p className='py-2 px-2'>
								Input and update patient information in HomeWorks EMR, after
								patient admission, discharge, or PHI changes.
							</p>
							<p className='py-2 px-2'>
								Print and fax orders for signature, then process signed and
								returned orders for billing purposes.
							</p>
							<p className='py-2 px-2'>
								Effectively work in a fast-paced environment and provide quality
								service to patients and staff.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Training documents
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Cerner
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										HomeWorks
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Google Workspace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Microsoft Office
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Adobe
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>

						<div className='pb-4 px-4'>
							<p className='pt-2 px-2 text-xl'>HIM Technician Intern</p>
							<p className='px-2 text-[#9ca89a]'>Adventist Health</p>
							<p className='px-2 text-xs text-gray-500'>
								Jul 2018 - Sep 2018 · 3 mos
							</p>
							<p className='py-2 px-2'>
								Processed patient ROI requests, continuation of care, transfer
								of care, Subpoena and Legal requests, workers comp, billing
								requests, and routing payable requests to our third-party copy
								service. As well as requests for insurance, audits, and
								radiology image discs and push requests.
							</p>
							<p className='py-2 px-2'>
								Trained on emergency, outpatient and inpatient analysis.
							</p>
							<p className='py-2 px-2'>
								Prep and scan incoming charts for analysis. Scan charts from
								clinics and incoming records to patients EMR.
							</p>
							<p className='py-2 px-2'>
								Answer phone calls, emails, ran rounds to gathering charts from
								the hospital and clinics, as well as run records to patients.
							</p>
							{/* JOB RELATED PROJECTS AND SKILLS */}
							<div className='grid grid-cols-1 pb-8 px-2 w-full justify-content-center gap-4'>
								<div className='flex flex-wrap justify-start gap-x-6 gap-y-2'>
									<p className='flex justify-center rounded-lg w-auto font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#62806a] to-[#9ca89a]'>
										Training documents
									</p>
								</div>
								<div className='flex flex-wrap justify-start gap-4'>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Epic
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Cerner
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Google Workspace
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Microsoft Office
									</p>
									<p className='flex justify-center rounded-lg shadow-[#62806a]/60 shadow-md w-auto px-6 bg-[#9ca89a]/20 text-[#62806a] outline outline-[1.5px] outline-[#62806a]'>
										Adobe
									</p>
								</div>
							</div>
							{/* END OF JOB RELATED PROJECTS AND SKILLS */}
						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-4 pt-5 pb-10'>
						<a
							href='https://github.com/emi-smith/drag-and-drop-to-do'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2'>View Updated Portfolio</button>
						</a>
						<a
							href='https://drag-and-drop-to-do.vercel.app/'
							target='_blank'
							rel='noreferrer'
						>
							<button className='px-8 py-2'>View LinkedIn Profile</button>
						</a>
					</div>
				</div>
				<div className='col-span-5 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl px-6 py-6 bg-gradient-to-br from-[#ecf0f3] to-[#9ca89a] '>
					<div className='p-6'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
							Education
						</p>
						<div className='px-4 pb-2'>
							<p className='pt-2 text-xl'>Dakota State University</p>
							<p className='px-2 text-[#9ca89a]'>
								Health Information Technology
							</p>
							<p className='px-2 text-xs text-gray-500'>
								Associate&apos;s of Applied Science
							</p>
							<p className='px-2 text-xs text-gray-500'>2014 - 2017</p>
						</div>
						<div className='px-4 pb-2'>
							<p className='pt-2 text-xl'>CollegeAmerica</p>
							<p className='px-2 text-[#9ca89a]'>
								Business Management & Accounting
							</p>
							<p className='px-2 text-xs text-gray-500'>
								Associate&apos;s of Applied Science
							</p>
							<p className='px-2 text-xs text-gray-500'>2009 - 2012</p>
						</div>
						<div className='px-4 pb-2'>
							<p className='pt-2 text-xl'>Laramie County Community College</p>
							<p className='px-2 text-[#9ca89a]'>General Studies</p>
							<p className='px-2 text-xs text-gray-500'>2005 - 2006</p>
						</div>
					</div>
					<div className='p-6 pb-2'>
						<p className=' uppercase py-2 text-xl tracking-widest text-[#62806a]'>
							Skills
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Web design
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Web development
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Responsive web design
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Graphic design
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Marketing
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> SEO
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> E-commerce
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Debugging
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Critical thinking
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Attention to detail
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Problem solving
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Multitasking
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Time management
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Strong work ethics
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Programming Languages
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> HTML
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Libraries & Frameworks
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Next.js
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Tools & Platforms
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> VS Code
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> GitHub
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Git
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Vercel
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Figma
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Invision
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Miro
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Adobe
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Notion
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Dubsado
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> WordPress
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> WooCommerce
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Squarespace
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Weebly
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Wix
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> MailChimp
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> QuickBooks
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Microsoft Office
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Google Workspace
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> AppSheet
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Currently strengthening skills in
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Next.js
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Next areas of focus
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React Native
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Web Animation
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Advance in UX/UI
							</p>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Currently Reading
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<div className='grid grid-cols-1 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> JavaScript & JQuery
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Jon Duckett
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Eloquent JavaScript
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Marijn Haverbeke
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Clean Code
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Robert Cecil Martin
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Refactoring
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Martin Fowler
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> The Pregmatic
									Programmer
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Dave Thomas, Andy Hunt
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Pro Git
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Scott Chacon, Ben Straub
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Communicating Design
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Dan M. Brown
								</p>
							</div>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Current Courses
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Foundations
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by The Odin Project
								</p>
							</div>
							<div className='py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Full Stack Javascript
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by The Odin Project
								</p>
							</div>
						</div>
					</div>
					<div className='p-6'>
						<p className=' uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Previous Courses
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<div className='grid grid-cols-1 lg:col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> React Fundamentals
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Udemy
								</p>
							</div>
							<div className='grid grid-cols-1 lg:col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> React JS for Beginners
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Udemy
								</p>
							</div>
							<div className='grid grid-cols-1 lg:col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> JavaScript Essentials
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Udemy
								</p>
							</div>
							<div className='grid grid-cols-1 lg:col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Python Bootcamp
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Udemy
								</p>
							</div>
							<div className='grid grid-cols-1 lg:col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> Web Development
									Bootcamp
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by Udemy
								</p>
							</div>
							<div className='grid grid-cols-1 col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='pr-1' /> CS50&apos;s
									Introduction to Computer Science
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by edX - HarvardX
								</p>
							</div>
						</div>
					</div>
					<div className='p-6'>
						<p className='w-full uppercase pt-2 text-transparent bg-clip-text bg-gradient-to-r text-[#9ca89a]'>
							Future Courses
						</p>
						<div className='px-4 grid justify-items-start grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-4'>
							<div className='grid grid-cols-1 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='flex item-start pr-1' /> Full
									Stack Open
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by University of Helsinki
								</p>
							</div>
							<div className='grid grid-cols-1 col-span-2 py-2'>
								<p className='text-gray-600 flex items-center'>
									<RiRadioButtonFill className='flex items-start pr-1' />
									CS50&apos;s Web Programming with Python and JavaScript
								</p>
								<p className='text-gray-600 text-xs italic px-4 flex items-center'>
									by edX - HarvardX
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full justify-end pt-2 px-6 pb-8'>
				<Link href='/#projects'>
					<p className='px-4 cursor-pointer text-[#62806a]'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default resume;
