import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { events } from "@/data/content";
import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	MapPin,
	Image as ImageIcon,
	X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Define types with unique names
interface EventImageData {
	url: string;
	caption: {
		en: string;
		fr: string;
		ar: string;
		es: string;
	};
}

interface EventData {
	id: string;
	slug: string;
	title: Record<string, string>;
	caption: Record<string, string>;
	description: Record<string, string>;
	cover: string;
	date: string;
	location: Record<string, string>;
	images: EventImageData[];
}

const EventDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const { language, isRTL } = useLanguage();
	const [isLoaded, setIsLoaded] = useState(false);
	const [lightboxImageIdx, setLightboxImageIdx] = useState<number | null>(null);

	const event = events.find((e) => e.slug === slug) as EventData | undefined;

	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, [slug]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		if (lightboxImageIdx !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [lightboxImageIdx]);

	if (!event) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]">
				<div className="text-center px-4">
					<h1 className="text-4xl font-playfair font-bold text-white mb-4">
						Event Not Found
					</h1>
					<p className="text-slate-200/80 mb-8">
						The event you're looking for doesn't exist or has been moved.
					</p>
					<Button
						onClick={() => navigate("/#events")}
						className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
					>
						Back to Events
					</Button>
				</div>
			</div>
		);
	}

	const title =
		event.title[language as keyof typeof event.title] || event.title.en;
	const caption =
		event.caption[language as keyof typeof event.caption] || event.caption.en;
	const description =
		event.description[language as keyof typeof event.description] ||
		event.description.en;
	const location =
		event.location[language as keyof typeof event.location] ||
		event.location.en;
	const cover = event.cover;
	const images = event.images || [];

	const date = new Date(event.date).toLocaleDateString(language, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	// Lightbox navigation
	const nextImage = () => {
		if (lightboxImageIdx === null) return;
		setLightboxImageIdx((lightboxImageIdx + 1) % images.length);
	};

	const prevImage = () => {
		if (lightboxImageIdx === null) return;
		setLightboxImageIdx((lightboxImageIdx - 1 + images.length) % images.length);
	};

	// Helper function to get caption in current language
	const getImageCaption = (image: EventImageData): string => {
		const caption = image.caption[language as keyof typeof image.caption];
		return caption || image.caption.en;
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e] text-white">
			<Header />

			<main className="relative pt-24 overflow-hidden">
				{/* Hero Section */}
				<section className="relative py-16 md:py-20 overflow-hidden">
					<div className="absolute inset-0">
						<img
							src={cover}
							alt=""
							className="w-full h-full object-cover opacity-30"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-[#5c3a8a] via-[#5c3a8a]/95 to-[#5c3a8a]" />
					</div>

					<div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Link
								to="/#events"
								className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-8 group ${
									isRTL ? "flex-row-reverse" : ""
								}`}
							>
								{isRTL ? (
									<ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
								) : (
									<ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
								)}
								<span className="font-medium">Back to Events</span>
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-200 text-sm uppercase tracking-wider mb-6">
								Event & Photography
							</span>

							<h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								{title}
							</h1>

							<div
								className={`flex flex-wrap items-center gap-6 text-slate-200/80 text-sm mb-8 ${isRTL ? "justify-end" : "justify-start"}`}
							>
								<span className="flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									{date}
								</span>
								<span className="flex items-center gap-2">
									<MapPin className="w-4 h-4" />
									{location}
								</span>
								{images.length > 0 && (
									<span className="flex items-center gap-2">
										<ImageIcon className="w-4 h-4" />
										{images.length} {images.length === 1 ? "photo" : "photos"}
									</span>
								)}
							</div>

							<p className="text-xl md:text-2xl text-slate-200/90 font-light leading-relaxed max-w-3xl mx-auto md:mx-0 border-l-4 border-cyan-200/50 pl-6">
								{caption}
							</p>
						</motion.div>
					</div>
				</section>

				{/* Content Section */}
				<section className="relative py-12 md:py-16">
					<div className="container mx-auto px-4 md:px-8 max-w-4xl">
						{/* Description */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-12 text-lg text-slate-200/90 leading-relaxed"
						>
							<p>{description}</p>
						</motion.div>

						{/* Photo Gallery */}
						{images.length > 0 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="mt-16"
							>
								<h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-8 flex items-center gap-3">
									<ImageIcon className="w-6 h-6 text-cyan-200" />
									Event Gallery
								</h2>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
									{images.map((image: EventImageData, idx: number) => {
										const imageCaption = getImageCaption(image);
										return (
											<motion.div
												key={idx}
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
												className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer"
												onClick={() => setLightboxImageIdx(idx)}
											>
												<img
													src={image.url}
													alt={imageCaption}
													className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-[#5c3a8a] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
												<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
													<p className="text-white text-sm line-clamp-2">
														{imageCaption}
													</p>
												</div>
											</motion.div>
										);
									})}
								</div>
							</motion.div>
						)}

						{/* Back Button */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mt-16 pt-8 border-t border-white/20"
						>
							<div
								className={`flex ${isRTL ? "justify-start" : "justify-end"}`}
							>
								<Button
									onClick={() => navigate("/#events")}
									variant="outline"
									className="bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40"
								>
									{isRTL ? (
										<>
											Back to Events
											<ArrowRight className="w-4 h-4 mr-2" />
										</>
									) : (
										<>
											<ArrowLeft className="w-4 h-4 mr-2" />
											Back to Events
										</>
									)}
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			{/* Lightbox */}
			<AnimatePresence>
				{lightboxImageIdx !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
						onClick={() => setLightboxImageIdx(null)}
					>
						{/* Close button */}
						<button
							onClick={() => setLightboxImageIdx(null)}
							className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
						>
							<X className="w-8 h-8" />
						</button>

						{/* Navigation */}
						{images.length > 1 && (
							<>
								<button
									onClick={(e) => {
										e.stopPropagation();
										prevImage();
									}}
									className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/30 hover:bg-black/50 rounded-full p-3"
								>
									<ArrowLeft className="w-6 h-6" />
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										nextImage();
									}}
									className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/30 hover:bg-black/50 rounded-full p-3"
								>
									<ArrowRight className="w-6 h-6" />
								</button>
							</>
						)}

						{/* Image */}
						<motion.div
							key={lightboxImageIdx}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className="relative max-w-7xl max-h-[90vh] px-4"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={images[lightboxImageIdx].url}
								alt={getImageCaption(images[lightboxImageIdx])}
								className="max-w-full max-h-[80vh] object-contain rounded-lg"
							/>

							{/* Caption */}
							<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
								<p className="text-white text-center text-lg">
									{getImageCaption(images[lightboxImageIdx])}
								</p>
								<p className="text-white/60 text-center text-sm mt-2">
									{lightboxImageIdx + 1} / {images.length}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<Footer />
		</div>
	);
};

export default EventDetail;
