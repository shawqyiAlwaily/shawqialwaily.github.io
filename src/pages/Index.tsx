import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import AuthorityMetricsSection from "@/components/sections/AuthorityMetricsSection";
import BeliefBlocksSection from "@/components/sections/BeliefBlocksSection";
import ValuePanelsSection from "@/components/sections/ValuePanelsSection";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const BooksSection = lazy(() => import("@/components/sections/BooksSection"));
const ArticlesSection = lazy(
	() => import("@/components/sections/ArticlesSection"),
);
import Footer from "@/components/Footer";

const Index = () => {
	const location = useLocation();

	useEffect(() => {
		// Handle hash navigation (e.g., returning from book detail)
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
		}
	}, [location]);

	return (
		<div className="relative min-h-screen bg-background">
			<Header />

			<main>
				<Suspense fallback={<div className="min-h-[50vh] #2d1b47" />}>
					<HeroSection />
				</Suspense>
				<AuthorityMetricsSection />
				<BeliefBlocksSection />
				<ValuePanelsSection />
				<Suspense fallback={<div className="min-h-[60vh] bg-[#2d1b47]" />}>
					<BooksSection />
				</Suspense>
				<Suspense fallback={<div className="min-h-[60vh] bg-[#2d1b47]" />}>
					<ArticlesSection />
				</Suspense>
				<ConsultationCTA />
			</main>

			<Footer />
		</div>
	);
};

export default Index;
