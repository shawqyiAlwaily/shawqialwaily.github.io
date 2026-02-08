import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type * as THREE from "three";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, useTexture } from "@react-three/drei";
import { MathUtils } from "three";
import { books } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<Locale, { kicker: string; tagline: string }> = {
	en: {
		kicker: "Book",
		tagline:
			"Works positioned as strategic instruments—each crafted to translate insight into action.",
	},
	fr: {
		kicker: "Livre",
		tagline:
			"Des ouvrages conçus comme des instruments stratégiques—chacun pour convertir l'analyse en action.",
	},
	ar: {
		kicker: "كتاب",
		tagline:
			"أعمال موضوعة كأدوات استراتيجية—كل منها مصمم لتحويل الرؤية إلى فعل.",
	},
	es: {
		kicker: "Book",
		tagline:
			"Works positioned as strategic instruments—each crafted to translate insight into action.",
	},
};

type BookCardProps = {
	cover: string;
	title: string;
	kicker: string;
	featured?: boolean;
	link: string;
	delay: number;
};

const BookMesh = ({ cover, hovered }: { cover: string; hovered: boolean }) => {
	const meshRef = useRef<THREE.Mesh>(null);
	const texture = useTexture(cover);

	useFrame((_, delta) => {
		if (!meshRef.current) return;
		const targetRot = hovered ? 0.45 : 0.12;
		const targetLift = hovered ? 0.35 : 0;
		meshRef.current.rotation.y = MathUtils.lerp(
			meshRef.current.rotation.y,
			targetRot,
			delta * 3,
		);
		meshRef.current.position.y = MathUtils.lerp(
			meshRef.current.position.y,
			targetLift,
			delta * 3,
		);
	});

	return (
		<Float
			speed={hovered ? 1 : 0.4}
			floatIntensity={0.4}
			rotationIntensity={0.2}
		>
			<mesh ref={meshRef} castShadow receiveShadow>
				<boxGeometry args={[1.8, 2.6, 0.2]} />
				<meshStandardMaterial map={texture} roughness={0.35} metalness={0.25} />
			</mesh>
		</Float>
	);
};

const BookCard = ({
	cover,
	title,
	kicker,
	featured,
	link,
	delay,
}: BookCardProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<Link
			to={link}
			className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-cyan-500/10 transition-transform duration-500 hover:-translate-y-2 ${
				featured ? "md:col-span-2" : ""
			}`}
			style={{
				animation: "fade-up 0.8s ease-out forwards",
				animationDelay: `${delay}s`,
				opacity: 0,
			}}
		>
			<div className="relative h-64 md:h-80">
				<Canvas
					className="absolute inset-0"
					camera={{ position: [0, 0, 4.5], fov: 30 }}
					onPointerEnter={() => setHovered(true)}
					onPointerLeave={() => setHovered(false)}
				>
					<color attach="background" args={["#0a1224"]} />
					<ambientLight intensity={0.45} />
					<directionalLight
						intensity={1.2}
						position={[1.5, 2, 3]}
						color="#b8e9ff"
					/>
					<Suspense
						fallback={
							<Html center className="text-white/60 text-sm">
								Loading…
							</Html>
						}
					>
						<BookMesh cover={cover} hovered={hovered} />
						<Environment preset="city" />
					</Suspense>
				</Canvas>
				<div className="absolute inset-0 bg-gradient-to-br from-[#2d1b47]/70 via-transparent to-[#2d1b47]/50" />
			</div>
			<div className="relative p-6 flex items-center justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
						{kicker}
					</p>
					<h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
						{title}
					</h3>
				</div>
				<span className="text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1">
					→
				</span>
			</div>
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{ boxShadow: "inset 0 0 80px rgba(140,255,232,0.18)" }}
			/>
		</Link>
	);
};

const BooksSection = () => {
	const { t, language } = useLanguage();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const text = copy[language];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.2 },
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const featured = books[0];
	const others = books.slice(1, 3);

	return (
		<section
			id="books"
			ref={sectionRef}
			className="relative bg-[#2d1b47] text-white py-24 md:py-28 overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#2d1b47] via-[#3a1e5c] to-[#5c3a8a]"
				aria-hidden
			/>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute -left-32 -top-32 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
				<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-300/10 blur-3xl" />
			</div>

			<div className="relative container mx-auto px-6 md:px-10">
				<motion.div
					className="max-w-3xl"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.6 }}
				>
					<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
						{t("books.subtitle")}
					</p>
					<h2 className="text-3xl md:text-5xl font-semibold text-white mt-3">
						{t("books.title")}
					</h2>
					<p className="text-slate-200/80 mt-3 max-w-2xl">{text.tagline}</p>
				</motion.div>

				<div
					className={`mt-12 grid md:grid-cols-3 gap-6 ${
						visible ? "" : "opacity-0"
					}`}
					style={{
						animation: visible ? "fade-up 0.8s ease-out forwards" : undefined,
					}}
				>
					{featured && (
						<BookCard
							key={featured.id}
							cover={featured.cover}
							title={featured.title[language as keyof typeof featured.title]}
							kicker={text.kicker}
							featured
							link={`/books/${featured.slug}`}
							delay={0.15}
						/>
					)}
					{others.map((book, idx) => (
						<BookCard
							key={book.id}
							cover={book.cover}
							title={book.title[language as keyof typeof book.title]}
							kicker={text.kicker}
							link={`/books/${book.slug}`}
							delay={0.25 + idx * 0.1}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default BooksSection;
