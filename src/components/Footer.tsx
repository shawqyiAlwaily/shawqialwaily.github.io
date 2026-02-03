import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/content";
import {
	Twitter, // used as X icon
	Linkedin,
	Phone,
	Mail,
	Facebook,
} from "lucide-react";

const Footer = () => {
	const { t, isRTL } = useLanguage();

	// FIX: close the function properly
	const handleContactClick = () => {
		// Try email first
		window.location.href = "mailto:kindehenok@gmail.com";

		// Fallback to LinkedIn after 1 second
		setTimeout(() => {
			window.open(
				"https://www.linkedin.com/in/henok-kinde-648b9021b/",
				"_blank",
			);
		}, 1000);
	}; // ✅ function properly closed

	const socialLinks = [
		{
			icon: Twitter,
			url: "http://x.com/shawky39851988",
			label: "X",
		},
		{
			icon: Linkedin,
			url: "https://www.linkedin.com/in/shawqi-alwaily-886744111/",
			label: "LinkedIn",
		},
		{
			icon: Facebook,
			url: "https://www.facebook.com/shawki.mohammed.1",
			label: "Facebook",
		},
	];

	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative overflow-hidden bg-[#050816] text-white">
			<div
				className="absolute inset-0 bg-gradient-to-b from-[#0b1530] via-[#080f24] to-[#04060d]"
				aria-hidden
			/>
			<div className="absolute inset-0 pointer-events-none" aria-hidden>
				<div className="absolute -left-24 top-0 w-72 h-72 rounded-full bg-cyan-400/12 blur-3xl" />
				<div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-200/10 blur-3xl" />
				<div
					className="absolute inset-0"
					style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.45)" }}
				/>
			</div>

			<div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-12 z-10">
				{/* Contact cards unchanged */}
			</div>

			<div className="relative z-10 border-t border-white/10 bg-white/5">
				<div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
					<div className="flex flex-col items-center text-center gap-4">
						<h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
							{personalInfo.name}
						</h3>

						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:shadow-glow"
									aria-label={social.label}
								>
									<social.icon className="w-4 h-4" />
								</a>
							))}
						</div>

						<p className="text-slate-300/80 text-sm flex items-center gap-2">
							<span>
								© {currentYear} {personalInfo.name}.
							</span>
							<span>{t("footer.rights")}</span>
						</p>

						<p>
							Designed & developed by |{" "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault(); // Prevent the page jump
									handleContactClick();
								}}
								className="cursor-pointer underline"
							>
								Henok Demelash
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
