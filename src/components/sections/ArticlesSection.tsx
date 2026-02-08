import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<Locale, { kicker: string; tagline: string }> = {
	en: {
		kicker: "Article",
		tagline: "Short essays and notes—designed for quick insight.",
	},
	fr: {
		kicker: "Article",
		tagline: "Essais et notes courts—conçus pour un aperçu rapide.",
	},
	ar: { kicker: "مقال", tagline: "مقالات قصيرة وملاحظات—مصممة لرؤى سريعة." },
	es: {
		kicker: "Articulo",
		tagline: "Ensayos cortos y notas—diseñados para una visión rápida.",
	},
};

const ArticleCard = ({ cover, title, caption, link, delay }: any) => {
	return (
		<Link
			to={link}
			className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-transform duration-500 hover:-translate-y-2"
			style={{
				animation: "fade-up 0.8s ease-out forwards",
				animationDelay: `${delay}s`,
				opacity: 0,
			}}
		>
			<div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
				<img src={cover} alt={title} className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-br from-[#0b1530]/60 to-transparent" />
			</div>

			<div className="p-5 flex items-center justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
						Article
					</p>
					<h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
						{title}
					</h3>
					<p className="text-slate-200/80 mt-2 text-sm">{caption}</p>
				</div>
				<span className="text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1">
					→
				</span>
			</div>
		</Link>
	);
};

const ArticlesSection = () => {
	const { t, language } = useLanguage();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const text = copy[language as keyof typeof copy];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.2 },
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const featured = articles[0];
	const others = articles.slice(1, 4);

	return (
		<section
			id="articles"
			ref={sectionRef}
			className="relative bg-[#070d1e] text-white py-20 md:py-24 overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#0c1530] via-[#091025] to-[#04070f]"
				aria-hidden
			/>

			<div className="relative container mx-auto px-6 md:px-10">
				<motion.div
					className="max-w-3xl"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.6 }}
				>
					<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
						{t("articles.subtitle")}
					</p>
					<h2 className="text-3xl md:text-5xl font-semibold text-white mt-3">
						{t("articles.title")}
					</h2>
					<p className="text-slate-200/80 mt-3 max-w-2xl">{text.tagline}</p>
				</motion.div>

				<div
					className={`mt-10 grid md:grid-cols-3 gap-6 ${visible ? "" : "opacity-0"}`}
					style={{
						animation: visible ? "fade-up 0.8s ease-out forwards" : undefined,
					}}
				>
					{featured && (
						<ArticleCard
							key={featured.id}
							cover={featured.cover}
							title={featured.title[language as keyof typeof featured.title]}
							caption={
								featured.caption[language as keyof typeof featured.caption]
							}
							link={`/articles/${featured.slug}`}
							delay={0.12}
						/>
					)}

					{others.map((a, idx) => (
						<ArticleCard
							key={a.id}
							cover={a.cover}
							title={a.title[language as keyof typeof a.title]}
							caption={a.caption[language as keyof typeof a.caption]}
							link={`/articles/${a.slug}`}
							delay={0.22 + idx * 0.08}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArticlesSection;
