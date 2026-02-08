import React, { Suspense, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useLanguage } from "@/contexts/LanguageContext";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<
	Locale,
	{
		kicker: string;
		title: string;
		body: string;
		ctaPrimary: string;
		ctaSecondary: string;
	}
> = {
	en: {
		kicker: "Strategic advisory",
		title: "Strategic Communication at the Center of Power",
		body: "Advisory, authorship, and institutional leadership across Africa and beyond. Decisions aligned, stakeholders synchronized, language designed to move policy and capital.",
		ctaPrimary: "Engage in strategic consultation",
		ctaSecondary: "Explore authored frameworks",
	},
	fr: {
		kicker: "Conseil stratégique",
		title: "Communication stratégique au centre du pouvoir",
		body: "Conseil, rédaction et leadership institutionnel à travers l'Afrique et au-delà. Des décisions alignées, des parties prenantes synchronisées, une langue conçue pour faire bouger les politiques et les capitaux.",
		ctaPrimary: "Engager une consultation stratégique",
		ctaSecondary: "Découvrir les cadres publiés",
	},
	ar: {
		kicker: "الاستشارة الاستراتيجية",
		title: "الاتصال الاستراتيجي في مركز صنع القرار",
		body: "استشارات وتأليف وقيادة مؤسسية عبر أفريقيا وخارجها. قرارات متناغمة، أصحاب مصلحة متزامنون، ولغة مصممة لدفع السياسات ورأس المال.",
		ctaPrimary: "ابدأ استشارة استراتيجية",
		ctaSecondary: "استكشف الأطر المؤلفة",
	},
	es: {
		kicker: "Asesoría estratégica",
		title: "Comunicación estratégica en el centro del poder",
		body: "Asesoría, autoría y liderazgo institucional en África y más allá. Decisiones alineadas, partes interesadas sincronizadas, lenguaje diseñado para impulsar políticas y capital.",
		ctaPrimary: "Iniciar consulta estratégica",
		ctaSecondary: "Explorar marcos publicados",
	},
};

type LightFollowerProps = {
	mouse: { x: number; y: number };
};

const LightFollower = ({ mouse }: LightFollowerProps) => {
	const ref = useRef<THREE.DirectionalLight>(null);
	useFrame(() => {
		if (!ref.current) return;
		ref.current.position.x = mouse.x * 4;
		ref.current.position.y = mouse.y * 3;
	});
	return (
		<directionalLight
			ref={ref}
			intensity={1.1}
			position={[0, 2, 4]}
			color="#8be0ff"
		/>
	);
};

const AbstractForm = () => {
	const meshRef = useRef<THREE.Mesh>(null);
	const materialProps = useMemo(
		() => ({
			metalness: 0.6,
			roughness: 0.25,
			color: "#7dd3fc",
			envMapIntensity: 1,
		}),
		[],
	);

	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x += 0.0025;
		meshRef.current.rotation.y += 0.003;
		meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
	});

	return (
		<Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.5}>
			<mesh ref={meshRef} castShadow receiveShadow>
				<icosahedronGeometry args={[2.3, 1]} />
				<meshStandardMaterial {...materialProps} />
			</mesh>
		</Float>
	);
};

const HeroSection = () => {
	const { language } = useLanguage();
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const text = copy[language];

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
		const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
		setMouse({ x, y });
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen bg-[#5c3a8a] text-white overflow-hidden"
			onMouseMove={handleMouseMove}
		>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute inset-0 bg-gradient-to-br from-[#5c3a8a] via-[#0b1d3f] to-[#020712]" />
				<div
					className="absolute inset-0 mix-blend-screen opacity-40"
					style={{
						background:
							"radial-gradient(circle at 30% 20%, rgba(124,193,255,0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgba(140,255,232,0.18), transparent 40%)",
					}}
				/>
				<Canvas
					shadows
					camera={{ position: [0, 0, 9], fov: 42 }}
					className="absolute inset-0"
				>
					<Suspense fallback={null}>
						<color attach="background" args={["#5c3a8a"]} />
						<ambientLight intensity={0.35} />
						<LightFollower mouse={mouse} />
						<pointLight intensity={0.6} position={[0, -2, 4]} color="#58d5ff" />
						<AbstractForm />
					</Suspense>
				</Canvas>
				<div className="absolute inset-0 backdrop-blur-[60px] opacity-25" />
				<div
					className="absolute inset-0"
					style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }}
				/>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-24 md:pt-32 md:pb-32">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.4 }}
					transition={{ duration: 0.6 }}
				>
					<div
						className="max-w-4xl space-y-8"
						style={{
							transform: `perspective(1200px) rotateX(${
								mouse.y * 2.5
							}deg) rotateY(${mouse.x * 2.5}deg)`,
							transition: "transform 0.25s ease-out",
						}}
					>
						<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
							{text.kicker}
						</p>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
							{text.title}
						</h1>
						<p className="text-lg md:text-xl text-slate-200/85 max-w-3xl">
							{text.body}
						</p>
						<div className="flex flex-wrap gap-3 pt-2">
							<a
								href="#consultation"
								className="group inline-flex items-center px-5 py-3 rounded-md bg-white text-[#0b132b] font-medium shadow-lg shadow-cyan-400/15 transition-transform duration-300 hover:-translate-y-1"
							>
								{text.ctaPrimary}
								<span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
									→
								</span>
							</a>
							<a
								href="#books"
								className="inline-flex items-center px-5 py-3 rounded-md border border-white/20 text-white/85 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
							>
								{text.ctaSecondary}
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
