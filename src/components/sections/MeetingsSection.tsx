import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { meetings } from "@/data/content";
import { MapPin, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fr, ar } from "date-fns/locale";

const MeetingsSection = () => {
	const { t, language, isRTL } = useLanguage();
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const locales = { en: undefined, fr: fr, ar: ar };
		return format(date, "MMMM d, yyyy", {
			locale: locales[language as keyof typeof locales],
		});
	};

	return (
		<section
			id="meetings"
			ref={sectionRef}
			className="relative py-24 md:py-32 bg-background overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-[0.02]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(hsl(var(--primary)) 1px, transparent 1px)",
						backgroundSize: "100% 80px",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 md:px-8 relative z-10">
				{/* Section Header */}
				<div
					className={`text-center mb-16 md:mb-20 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
				>
					<span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
						{t("meetings.subtitle")}
					</span>
					<h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
						{t("meetings.title")}
					</h2>
					<div className="flex items-center justify-center gap-4 mt-6">
						<div className="w-12 h-px bg-accent" />
						<div className="w-2 h-2 rotate-45 bg-accent" />
						<div className="w-12 h-px bg-accent" />
					</div>
				</div>

				{/* Timeline */}
				<div className="max-w-4xl mx-auto">
					<div
						className={`relative ${isRTL ? "pr-8 md:pr-12" : "pl-8 md:pl-12"}`}
					>
						{/* Timeline Line */}
						<div
							className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/30 ${isRTL ? "right-0" : "left-0"}`}
						/>

						{/* Timeline Items */}
						<div className="space-y-12">
							{meetings.map((meeting, index) => (
								<div
									key={meeting.id}
									className={`timeline-item relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
									style={{ animationDelay: `${0.2 + index * 0.15}s` }}
								>
									<div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent/30">
										{/* Date Badge */}
										<div
											className={`flex items-center gap-2 text-accent text-sm font-medium mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
										>
											<Calendar className="w-4 h-4" />
											<span>{formatDate(meeting.date)}</span>
										</div>

										{/* Title */}
										<h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-3">
											{meeting.title[language as keyof typeof meeting.title]}
										</h3>

										{/* Location */}
										<div
											className={`flex items-center gap-2 text-primary text-sm mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
										>
											<MapPin className="w-4 h-4 text-primary" />
											<span>
												{
													meeting.location[
														language as keyof typeof meeting.location
													]
												}
											</span>
										</div>

										{/* Description */}
										<p className="text-primary leading-relaxed">
											{
												meeting.description[
													language as keyof typeof meeting.description
												]
											}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MeetingsSection;
