import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio Next.js</title>
				<meta name='description' content='Project created by Emily Smith' />
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
