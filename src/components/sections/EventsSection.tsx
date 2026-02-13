import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";
import {
	Calendar,
	MapPin,
	Image as ImageIcon,
	ArrowRight,
	ArrowLeft,
} from "lucide-react";
/* eslint-disable @typescript-eslint/no-explicit-any */

type Locale = "en" | "fr" | "ar" | "es";

const copy: Record<
	Locale,
	{ subtitle: string; title: string; tagline: string }
> = {
	en: {
		subtitle: "Events & Photography",
		title: "Events & Engagements",
		tagline: "Recent speaking engagements, panels, and global forums.",
	},
	fr: {
		subtitle: "Événements et Photographie",
		title: "Événements et Engagements",
		tagline: "Conférences récentes, panels et forums mondiaux.",
	},
	ar: {
		subtitle: "الفعاليات والصور",
		title: "الفعاليات والمشاركات",
		tagline: "المشاركات الحديثة في المحافل والمنتديات العالمية.",
	},
	es: {
		subtitle: "Eventos y Fotografía",
		title: "Eventos y Participaciones",
		tagline: "Conferencias recientes, paneles y foros globales.",
	},
};

const EventCard = ({ event, delay }: any) => {
	const { language, isRTL } = useLanguage();

	const title =
		event.title[language as keyof typeof event.title] || event.title.en;
	const caption =
		event.caption[language as keyof typeof event.caption] || event.caption.en;
	const location =
		event.location[language as keyof typeof event.location] ||
		event.location.en;

	const date = new Date(event.date).toLocaleDateString(language, {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	const imageCount = event.images?.length || 0;

	return (
		<Link
			to={`/events/${event.slug}`}
			className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
			style={{
				animation: "fade-up 0.8s ease-out forwards",
				animationDelay: `${delay}s`,
				opacity: 0,
			}}
		>
			<div className="relative h-56 md:h-64 overflow-hidden">
				<img
					src={event.cover}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					onError={(e) => {
						e.currentTarget.src =
							"https://via.placeholder.com/600x400?text=Event+Image";
					}}
				/>

				<div className="absolute inset-0 bg-gradient-to-t from-[#5c3a8a] via-[#5c3a8a]/40 to-transparent opacity-80" />

				<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
					<span className="text-xs text-white flex items-center gap-1">
						<Calendar className="w-3 h-3 text-cyan-200" />
						{date}
					</span>
				</div>

				{imageCount > 0 && (
					<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
						<span className="text-xs text-white flex items-center gap-1">
							<ImageIcon className="w-3 h-3 text-cyan-200" />
							{imageCount}
						</span>
					</div>
				)}

				<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
					<span className="text-xs text-white flex items-center gap-1">
						<MapPin className="w-3 h-3 text-cyan-200" />
						{location.split(",")[0]}
					</span>
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-lg md:text-xl font-semibold text-white leading-tight line-clamp-2 mb-2">
					{title}
				</h3>

				<p className="text-slate-200/80 text-sm line-clamp-2">{caption}</p>

				{event.images && event.images.length > 0 && (
					<div className="mt-4 flex items-center gap-2">
						<div className="flex -space-x-2">
							{event.images.slice(0, 3).map((img: any, idx: number) => (
								<div
									key={idx}
									className="w-7 h-7 rounded-full border-2 border-white/20 overflow-hidden bg-white/10"
								>
									<img
										src={img.url}
										alt=""
										className="w-full h-full object-cover"
										onError={(e) => {
											e.currentTarget.src =
												"https://via.placeholder.com/50x50?text=Photo";
										}}
									/>
								</div>
							))}
							{event.images.length > 3 && (
								<div className="w-7 h-7 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-xs text-white">
									+{event.images.length - 3}
								</div>
							)}
						</div>
						<span className="text-xs text-slate-300/70">
							{isRTL ? "عرض المعرض" : "View gallery"}
						</span>
					</div>
				)}

				<div className="mt-4 flex items-center justify-between">
					<span
						className={`inline-flex items-center gap-1 text-cyan-200/80 text-sm transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "group-hover:-translate-x-1" : ""}`}
					>
						{!isRTL ? "View event" : "عرض الفعالية"}
						{!isRTL ? " →" : " ←"}
					</span>
				</div>
			</div>
		</Link>
	);
};

const EventsSection = () => {
	const { language, isRTL } = useLanguage(); // Removed 't' since we're not using translation keys
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const text = copy[language as keyof typeof copy] || copy.en;

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.2 },
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	// Show latest 3 events
	const latestEvents = [...events]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	// Don't render if no events
	if (!latestEvents.length) {
		return null;
	}

	return (
		<section
			id="events"
			ref={sectionRef}
			className="relative bg-[#5c3a8a] text-white py-20 md:py-24 overflow-hidden"
		>
			{/* Background with subtle pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e]" />
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
					backgroundSize: "40px 40px",
				}}
			/>

			<div className="relative container mx-auto px-6 md:px-10">
				{/* Header - Using direct text from copy object */}
				<motion.div
					className="max-w-3xl"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.35 }}
					transition={{ duration: 0.6 }}
				>
					<p className="uppercase tracking-[0.25em] text-sm text-cyan-200/70">
						{text.subtitle}
					</p>
					<h2 className="text-3xl md:text-5xl font-semibold text-white mt-3">
						{text.title}
					</h2>
					<p className="text-slate-200/80 mt-3 max-w-2xl text-lg">
						{text.tagline}
					</p>
				</motion.div>

				{/* Events Grid */}
				<div
					className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700 ${
						visible ? "opacity-100" : "opacity-0"
					}`}
				>
					{latestEvents.map((event, idx) => (
						<EventCard key={event.id} event={event} delay={0.12 + idx * 0.08} />
					))}
				</div>

				{/* View All Link */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 text-center"
				>
					<Link
						to="/events"
						className={`inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-all group`}
					>
						{isRTL ? (
							<>
								عرض كل الفعاليات والصور
								<ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
							</>
						) : (
							<>
								View all events & photos
								<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
							</>
						)}
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default EventsSection;
