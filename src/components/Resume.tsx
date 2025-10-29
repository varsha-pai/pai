
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const skills = [
	{ category: 'Programming', items: ['Python', 'C', 'Java', 'JavaScript', 'SQL'] },
	{ category: 'Frameworks & Libraries', items: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'scikit-learn'] },
	{ category: 'Tools & Technologies', items: ['Github', 'Docker', 'Cloud Services', 'DBMS', 'REST APIs'] },
];

const experiences = [
	{
		title: 'AI/ML Intern',
		company: 'MirrorPhotos LLC',
		period: 'Feb 2025 - Sep 2025',
		description: [
			'Engineered a robust in-app credit economy by architecting a dynamic system to seamlessly manage the real-time allocation and deduction of points based on player actions and achievements to Gamify the overall Learning Experience',
			'Orchestrated a secure, end-to-end payment processing pipeline for in-app purchases by integrating the Stripe API for transactions and leveraging Supabase to securely persist and manage all sensitive payment-related data',
			'Explored various advanced AI models such as GPT 4.1, Claude Sonnet and Gemini 2.5 for debugging and building',
		],
		skills: ['Stripe', 'React', 'Typescript', 'Supabase'],
	},
	{
		title: 'Full Stack Developer Intern',
		company: 'URSC (U R Rao Satellite Center)',
		period: 'Sept 2025 – Oct 2025',
		description: [
			'Developed and integrated a custom Django application into a document management system to enable a user-driven permission request workflow.',
			'Implemented a granular access control policy (’See But Not Enter’) by defining custom permissions to conditionally display content based on user ACLs.',
			'Created distinct user-facing interfaces for requesting access and administrator-facing interfaces for managing (approving/denying) requests within the platform.',
			'Configured and deployed the customized application stack using Docker Compose, managing container dependencies, volumes, and environment variables for cross-platform compatibility.'
		],
		skills: ['Django', 'Docker Compose', 'Access Control']
	},
	{
		title: 'Design Team Lead',
		company: 'NODEDOTAI',
		period: 'June 2023 - Present',
		description: 'Leading the design initiatives for AI-based projects, managing a team of designers, and ensuring cohesive visual strategies.',
		skills: ['Leadership', 'Team Management', 'Canva', 'Project Coordination & Planning', 'Communication'],
	},
];

const projects = [
	{
		title: 'Non-Invasive Blood Group Detection',
		description: 'Developed an AI system to detect blood groups without invasive procedures using computer vision and machine learning.',
		technologies: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
	},
	{
		title: 'SAR Image Colorization using Deep Learning',
		description: [
			'Engineered an image-to-image translation system to convert Synthetic Aperture Radar (SAR) data into photorealistic optical images (Black and white Satellite images to RGB Images)',
			'Implemented a Pix2pix Generative Adversarial Network (GAN) and enhanced image quality by optimizing the model to minimize L1 and L2 reconstruction losses',
		],
		technologies: ['Python', 'TensorFlow', 'PyTorch', 'GANs', 'Image Processing', 'Image-to-Image Translation', 'Deep Learning'],
	},
];

const certifications = [
	{ title: 'Google Cloud Platform Fundamentals', issuer: 'Google' },
	{ title: 'Machine Learning with Python', issuer: 'Infosys Springboard' },
	{ title: 'Power BI', issuer: 'Infosys Springboard' },
	{ title: 'Network Fundamentals', issuer: 'Infosys Springboard' },
];

const getTechColor = () => 'bg-blue-100 text-blue-900 border-blue-400';


const Resume = () => (
	<section id="resume" className="py-20 bg-white">
		<div className="container mx-auto px-6">
			<div className="flex justify-between items-center mb-12">
				<h2 className="text-3xl font-bold reveal">
					<span className="font-handwritten text-4xl text-blue-900">Resume</span>
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
				<div className="md:col-span-5 space-y-8">
					<Card className="border-none shadow-md reveal">
						<CardContent className="p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-full bg-primary/10">
									<FileText className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-semibold text-blue-900">Technical Skills</h3>
							</div>
							<div className="space-y-6">
								{skills.map((skillGroup) => (
									<div key={skillGroup.category}>
										<h4 className="font-medium text-yellow-800 mb-3">{skillGroup.category}</h4>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<Badge key={skill} variant="secondary" className={getTechColor()}>
													<span className="text-blue-900">{skill}</span>
												</Badge>
											))}
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
					<Card className="border-none shadow-md reveal">
						<CardContent className="p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-full bg-primary/10">
									<FileText className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-semibold text-blue-900">Certifications</h3>
							</div>
							<div className="space-y-4">
								{certifications.map((cert, index) => (
									<div key={index} className="group">
										<div className="flex justify-between items-start">
											<div>
												<h4 className="font-medium text-yellow-800">{cert.title}</h4>
												<p className="text-sm text-yellow-600">{cert.issuer}</p>
											</div>
										</div>
										{index < certifications.length - 1 && (
											<Separator className="my-3" />
										)}
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="md:col-span-7 space-y-8">
					<Card className="border-none shadow-md reveal">
						<CardContent className="p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-full bg-primary/10">
									<FileText className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-semibold text-blue-900">Work Experience</h3>
							</div>
							<div className="space-y-6">
								{experiences.map((exp, index) => (
									<div key={index} className="group">
										<div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
											<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
												<h4 className="font-medium text-yellow-800">{exp.title} at {exp.company}</h4>
												<span className="text-sm text-yellow-600">{exp.period}</span>
											</div>
											{Array.isArray(exp.description) ? (
												<ul className="list-disc pl-6 text-blue-900 mb-3">
													{exp.description.map((desc, i) => (
														<li key={i}>{desc}</li>
													))}
												</ul>
											) : (
												<p className="text-blue-900 mb-3">{exp.description}</p>
											)}
											<div className="flex flex-wrap gap-2">
												{exp.skills.map((skill) => (
													<Badge key={skill} variant="outline" className="border-primary/30">
														<span className="text-blue-900">{skill}</span>
													</Badge>
												))}
											</div>
										</div>
										{index < experiences.length - 1 && (
											<Separator className="my-5" />
										)}
									</div>
								))}
							</div>
						</CardContent>
					</Card>
					<Card className="border-none shadow-md reveal">
						<CardContent className="p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-full bg-primary/10">
									<FileText className="h-5 w-5 text-primary" />
								</div>
								<h3 className="text-xl font-semibold text-blue-900">Major Projects</h3>
							</div>
							<div className="space-y-6">
								{projects.map((project, index) => (
									<div key={index} className="group">
										<div className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-secondary before:rounded-full">
											<h4 className="font-medium text-yellow-800 mb-2">{project.title}</h4>
											<div>
												{Array.isArray(project.description) ? (
													<ul className="list-disc pl-6 text-blue-900 mb-3">
														{project.description.map((desc, i) => (
															<li key={i}>{desc}</li>
														))}
													</ul>
												) : (
													<p className="text-blue-900 mb-3">{project.description}</p>
												)}
												<div className="flex flex-wrap gap-2">
													{project.technologies.map((tech, i) => (
														<Badge key={`${tech}-${i}`} variant="outline" className={getTechColor()}>
															<span className="text-blue-900">{tech}</span>
														</Badge>
													))}
												</div>
												{project.demo && (
													<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 mr-4 text-primary underline text-sm">Live Demo</a>
												)}
												{project.github && (
													<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary underline text-sm">GitHub</a>
												)}
											</div>
										</div>
										{index < projects.length - 1 && (
											<Separator className="my-5" />
										)}
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</section>
);

export default Resume;

