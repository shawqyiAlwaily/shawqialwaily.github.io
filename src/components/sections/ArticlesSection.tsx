import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft } from "lucide-react"; // ← Add these icons

/* eslint-disable @typescript-eslint/no-explicit-any */

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

const ArticleCard = ({ title, caption, link, delay }: any) => {
	const { isRTL } = useLanguage();

	return (
		<Link
			to={link}
			className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
			style={{
				animation: "fade-up 0.8s ease-out forwards",
				animationDelay: `${delay}s`,
				opacity: 0,
			}}
		>
			<p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
				Article
			</p>
			<h3 className="text-lg md:text-xl font-semibold text-white leading-tight mt-2">
				{title}
			</h3>
			<p className="text-slate-200/80 mt-2 text-sm line-clamp-3">{caption}</p>
			<span
				className={`inline-flex items-center gap-1 mt-4 text-cyan-200/80 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "group-hover:-translate-x-1" : ""}`}
			>
				Read more {!isRTL && "→"}
				{isRTL && "←"}
			</span>
		</Link>
	);
};

const ArticlesSection = () => {
	const { t, language, isRTL } = useLanguage(); // ← get isRTL
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

	const displayArticles = articles.slice(0, 3); // keep only 3

	return (
		<section
			id="articles"
			ref={sectionRef}
			className="relative bg-[#5c3a8a] text-white py-20 md:py-24 overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]"
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
					<p className="text-slate-200/80 mt-3 max-w-2xl mb-8">{text.tagline}</p>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="bg-white/5 border border-cyan-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50"
				>
					<div className="flex-1">
						<h3 className="text-xl md:text-2xl font-semibold text-white mb-2 flex items-center gap-2">
							<span className="text-2xl">🎓</span> {isRTL ? "منشورات أكاديمية" : "Academic Publications"}
						</h3>
						<p className="text-slate-300">
							{isRTL 
								? "يمكن العثور على جميع المقالات والأبحاث الأكاديمية كاملة على حسابي الرسمي في موقع Academia.edu"
								: "All of my comprehensive academic articles and published research papers can be found on my official Academia.edu profile."}
						</p>
					</div>
					<a
						href="https://independent.academia.edu/shawkyAbdelgayed"
						target="_blank"
						rel="noopener noreferrer"
						className={`px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${isRTL ? "flex-row-reverse" : ""}`}
					>
						{isRTL ? "زيارة المنصة" : "Visit Academia.edu"}
						{isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
					</a>
				</motion.div>

				<div
					className={`mt-10 grid md:grid-cols-3 gap-6 transition-opacity duration-700 ${
						visible ? "opacity-100" : "opacity-0"
					}`}
				>
					{displayArticles.map((article, idx) => (
						<ArticleCard
							key={article.id}
							title={article.title[language as keyof typeof article.title]}
							caption={
								article.caption[language as keyof typeof article.caption]
							}
							link={`/articles/${article.slug}`}
							delay={0.12 + idx * 0.08}
						/>
					))}
				</div>

				{/* 🔽 New "View all articles" button – same style as events */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 text-center"
				>
					<Link
						to="/articles"
						className={`inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-all group`}
					>
						{isRTL ? (
							<>
								عرض كل المقالات
								<ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
							</>
						) : (
							<>
								View all articles
								<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
							</>
						)}
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default ArticlesSection;
