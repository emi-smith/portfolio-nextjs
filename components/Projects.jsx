import React from "react";
import ProjectItem from "./ProjectItem";
import stickynoteprojectimage from "../public/assets/projects/sticky-note-project-image.png";

const Projects = () => {
	return (
		<div className='w-full'>
			<div className='max-w-[1240px] mx-auto px-z py-16'>
				<p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
					Projects
				</p>
				<h2 className='py-4'>What I've Build</h2>
				<div className='grid md:grid-cols-2 gap-4'>
					<ProjectItem
						title='Sticky Notes'
						backgroundImg={stickynoteprojectimage}
						projecturl='https://sticky-notes-gilt.vercel.app/'
					/>
					<ProjectItem
						title='Will Update Projects'
						backgroundImg={stickynoteprojectimage}
						projecturl='https://sticky-notes-gilt.vercel.app/'
					/>
					<ProjectItem
						title='Will Update Projects'
						backgroundImg={stickynoteprojectimage}
						projecturl='https://sticky-notes-gilt.vercel.app/'
					/>
					<ProjectItem
						title='Will Update Projects'
						backgroundImg={stickynoteprojectimage}
						projecturl='https://sticky-notes-gilt.vercel.app/'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
