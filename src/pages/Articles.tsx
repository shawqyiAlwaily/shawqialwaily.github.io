import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlesSection from "@/components/sections/ArticlesSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Articles = () => {
	const { t, isRTL } = useLanguage();

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-24">
				<div className="container mx-auto px-4 md:px-8 py-6">
					<Link
						to="/#articles"
						className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
					>
						{isRTL ? (
							<ArrowRight className="w-5 h-5" />
						) : (
							<ArrowLeft className="w-5 h-5" />
						)}
						<span className="font-medium">{t("articles.backToArticles")}</span>
					</Link>
				</div>

				<ArticlesSection />
			</main>
			<Footer />
		</div>
	);
};

export default Articles;
