import React from "react";
import ProjectItem from "./ProjectItem";
import StickyNotesImg from "../public/assets/projects/sticky-note-project-image.png";
import EsLandingPage from "../public/assets/projects/es-home-web.png";
import DragDropImg from "../public/assets/projects/drag-drop-desktop.png";
import PortfolioNextJs from "../public/assets/projects/portfolio-nextjs.png";

const Projects = () => {
	return (
		<div id='Projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-z py-16 pl-4'>
				<p className=' uppercase text-xl tracking-widest text-[#628069]'>
					Projects
				</p>
				<h2 className='py-4'>What I&apos;ve Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title="Em's Shore Landing Page"
						technology='HTML, CSS, JavaScript'
						backgroundImg={EsLandingPage}
						projecturl='/ems-shore'
					/>
					<ProjectItem
						title='Drag and Drop To Do List'
						technology='HTML, CSS, JavaScript'
						backgroundImg={DragDropImg}
						projecturl='/drag-drop'
					/>
					<ProjectItem
						title='Simple Sticky Notes'
						technology='HTML, CSS, JavaScript'
						backgroundImg={StickyNotesImg}
						projecturl='/sticky-notes'
					/>
					<ProjectItem
						title='Portfolio Next.js'
						technology='Next.js, Tailwind'
						backgroundImg={PortfolioNextJs}
						projecturl='/portfolio-nextjs'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
