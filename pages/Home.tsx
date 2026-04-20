import React from "react";
import PageTransition from "../components/PageTransition";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";
import CapabilityMatrix from "../components/CapabilityMatrix";
import EducationSection from "../components/EducationSection";
import {
	ArrowDown,
	Cpu,
	Globe,
	Terminal,
	ArrowUpRight,
	Code,
	Database,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="min-h-[90vh] flex flex-col justify-center px-6 relative border-b border-gray-200 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 border-l border-gray-200 hidden md:block" />
				<div className="absolute bottom-20 left-6 flex gap-4 text-gray-300 font-mono text-xs">
					<span>COORD: 30.4278° N, 9.5981° W</span>
					<span>STATUS: ONLINE</span>
				</div>

				<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-lab-green/10 text-lab-green text-xs font-mono font-bold rounded-full border border-lab-green/20">
								<span className="w-2 h-2 bg-lab-green rounded-full animate-pulse"></span>
								AVAILABLE FOR NEW CONTRACTS
							</div>
							<h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tight mb-6">
								Architecting <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-lab-green to-lab-yellow">
									Intelligence.
								</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed mb-8">
								Full Stack Web Developer & AI Engineer specializing in building
								production-ready intelligent systems and scalable web
								applications.
							</p>

							<div className="flex gap-4">
								<NavLink
									to="/projects"
									className="px-8 py-4 bg-lab-text text-white font-mono text-sm font-bold hover:bg-lab-green transition-all shadow-lg hover:shadow-lab-green/30"
								>
									EXPLORE WORK
								</NavLink>
								<NavLink
									to="/contact"
									className="px-8 py-4 border border-gray-300 text-lab-text font-mono text-sm font-bold hover:border-lab-green hover:text-lab-green transition-all"
								>
									INITIATE CONTACT
								</NavLink>
							</div>
						</motion.div>
					</div>

					{/* Abstract Visual - The "Lab" Window */}
					<div className="relative h-[400px] md:h-[600px] w-full hidden md:flex items-center justify-center">
						<div className="relative w-64 h-64 md:w-96 md:h-96">
							{/* Rotating Rings */}
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
								className="absolute inset-0 border border-gray-200 rounded-full"
							/>
							<motion.div
								animate={{ rotate: -360 }}
								transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
								className="absolute inset-8 border border-gray-300 rounded-full border-dashed"
							/>
							<motion.div
								animate={{ rotate: 180 }}
								transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
								className="absolute inset-16 border border-lab-yellow/50 rounded-full"
							/>

							{/* Central Core */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-24 h-24 bg-lab-green blur-3xl opacity-20 rounded-full animate-pulse" />
								<div className="w-32 h-32 bg-white border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center p-4 z-10 backdrop-blur-sm bg-opacity-80">
									<span className="font-mono text-4xl font-bold text-lab-text">
										98%
									</span>
									<span className="font-mono text-[10px] text-gray-500 uppercase mt-1">
										Efficiency
									</span>
								</div>
							</div>

							{/* Floating Cards */}

							{/* Card 1: Neural Net (Top Right) */}
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -top-10 -right-10 bg-white p-4 shadow-lg border-l-4 border-lab-green max-w-[150px]"
							>
								<div className="flex items-center gap-2 mb-1">
									<Cpu size={14} className="text-lab-green" />
									<span className="font-bold text-xs">Neural Net</span>
								</div>
								<div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
									<div className="w-[80%] h-full bg-lab-green"></div>
								</div>
							</motion.div>

							{/* Card 2: Deployment (Bottom Left) */}
							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1,
								}}
								className="absolute -bottom-5 -left-5 bg-white p-4 shadow-lg border-l-4 border-lab-yellow max-w-[150px]"
							>
								<div className="flex items-center gap-2 mb-1">
									<Terminal size={14} className="text-lab-yellow" />
									<span className="font-bold text-xs">Deployment</span>
								</div>
								<span className="text-[10px] text-gray-400 font-mono">
									v4.2.0 Stable
								</span>
							</motion.div>

							{/* Card 3: Full Stack (Top Left) */}
							<motion.div
								animate={{ y: [0, -5, 0] }}
								transition={{
									duration: 4.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.2,
								}}
								className="absolute -top-4 -left-12 bg-white p-4 shadow-lg border-t-4 border-lab-text max-w-[150px]"
							>
								<div className="flex items-center gap-2 mb-1">
									<Code size={14} className="text-lab-text" />
									<span className="font-bold text-xs">Full Stack</span>
								</div>
								<div className="text-[10px] text-gray-400 font-mono">
									TS / React / Next.js
								</div>
							</motion.div>

							{/* Card 4: AI Data (Bottom Right) */}
							<motion.div
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 5.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1.5,
								}}
								className="absolute bottom-8 -right-16 bg-white p-4 shadow-lg border-b-4 border-lab-green max-w-[150px]"
							>
								<div className="flex items-center gap-2 mb-1">
									<Database size={14} className="text-lab-green" />
									<span className="font-bold text-xs">ML Models</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-[10px] text-gray-400 font-mono">
										High Precision
									</span>
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-300">
					<ArrowDown size={24} />
				</div>
			</section>

			{/* Philosophy Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="col-span-1">
							<h2 className="text-sm font-mono font-bold text-lab-green tracking-widest mb-4">
								CORE_PHILOSOPHY
							</h2>
							<p className="text-3xl font-bold font-sans">
								Code is not just syntax.
								<br />
								It is structured thought.
							</p>
						</div>
						<div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="p-6 bg-lab-gray hover:bg-white border border-transparent hover:border-gray-200 transition-all group">
								<div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:border-lab-green transition-colors">
									<Cpu
										size={20}
										className="text-gray-600 group-hover:text-lab-green"
									/>
								</div>
								<h3 className="font-bold mb-2">Systematic Precision</h3>
								<p className="text-sm text-gray-600">
									Building redundant, type-safe, and scalable architectures that
									withstand exponential growth.
								</p>
							</div>
							<div className="p-6 bg-lab-gray hover:bg-white border border-transparent hover:border-gray-200 transition-all group">
								<div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:border-lab-yellow transition-colors">
									<Globe
										size={20}
										className="text-gray-600 group-hover:text-lab-yellow"
									/>
								</div>
								<h3 className="font-bold mb-2">Human-AI Symbiosis</h3>
								<p className="text-sm text-gray-600">
									Designing interfaces where artificial intelligence augments
									human capability rather than replacing it.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-24 bg-lab-gray/30 border-y border-gray-200">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex justify-between items-end mb-16">
						<div>
							<h2 className="text-sm font-mono font-bold text-lab-green tracking-widest mb-2">
								CASE_STUDIES
							</h2>
							<h3 className="text-3xl font-bold">Selected Deployments</h3>
						</div>
						<NavLink
							to="/projects"
							className="hidden md:flex items-center gap-2 text-sm font-bold border-b-2 border-transparent hover:border-lab-yellow transition-all"
						>
							VIEW ARCHIVE <ArrowUpRight size={16} />
						</NavLink>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{PROJECTS.slice(0, 2).map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</section>

			{/* Education Section */}
			{/* <EducationSection /> */}

			{/* Tech Stack Matrix */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="mb-12 text-center max-w-2xl mx-auto">
						<h2 className="text-sm font-mono font-bold text-lab-green tracking-widest mb-2">
							CAPABILITY_MATRIX
						</h2>
						<h3 className="text-3xl font-bold mb-4">Operational Stack</h3>
						<p className="text-gray-600">
							A live diagnostic of current technical proficiencies and tooling
							familiarity.
						</p>
					</div>
					<CapabilityMatrix />
				</div>
			</section>

			{/* CTA */}
			<section className="py-32 bg-lab-text text-white relative overflow-hidden">
				<div
					className="absolute inset-0 bg-lab-green/10"
					style={{
						backgroundImage:
							"radial-gradient(circle at 50% 50%, rgba(20, 83, 45, 0.4), transparent 70%)",
					}}
				></div>
				<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
					<h2 className="text-4xl md:text-6xl font-bold mb-8">
						Ready to engineer the future?
					</h2>
					<p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
						Currently accepting proposals for high-impact AI integration and
						full-stack architecture projects.
					</p>
					<NavLink
						to="/contact"
						className="inline-block px-10 py-5 bg-white text-lab-text font-bold font-mono hover:bg-lab-yellow transition-colors"
					>
						INITIATE_PROTOCOL_V1
					</NavLink>
				</div>
			</section>
		</PageTransition>
	);
};

export default Home;
