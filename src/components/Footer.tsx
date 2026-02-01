import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/content";
import {
	Twitter,
	Linkedin,
	Youtube,
	Instagram,
	Phone,
	Mail,
	Heart,
} from "lucide-react";

const Footer = () => {
	const { t, isRTL } = useLanguage();

	const socialLinks = [
		{ icon: Twitter, url: personalInfo.socialLinks.twitter, label: "Twitter" },
		{
			icon: Linkedin,
			url: personalInfo.socialLinks.linkedin,
			label: "LinkedIn",
		},
		{ icon: Youtube, url: personalInfo.socialLinks.youtube, label: "YouTube" },
		{
			icon: Instagram,
			url: personalInfo.socialLinks.instagram,
			label: "Instagram",
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
				<div className="text-center space-y-4">
					<span className="text-cyan-200/80 tracking-[0.3em] uppercase text-xs md:text-sm">
						{isRTL ? "تواصل" : "Get in touch"}
					</span>
					<h3 className="font-playfair text-3xl md:text-4xl font-bold text-white">
						{isRTL ? "مستعد للاجتماعات" : "Ready for strategic conversations"}
					</h3>
					<p className="text-slate-200/80 text-base md:text-lg max-w-2xl mx-auto">
						{isRTL
							? "متاح للمكالمات الاستشارية والخطابات الرئيسية. الرد خلال 24 ساعة (UTC+2)."
							: "Available for advisory calls and keynotes with replies within 24 hours (UTC+2)."}
					</p>
					<div className="flex items-center justify-center gap-4">
						<div className="w-12 h-px bg-cyan-300/70" />
						<div className="w-2 h-2 rotate-45 bg-cyan-300/70" />
						<div className="w-12 h-px bg-cyan-300/70" />
					</div>
				</div>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/10">
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								background:
									"linear-gradient(135deg, rgba(124,193,255,0.12), rgba(91,230,255,0.06))",
							}}
						/>
						<div className="relative flex flex-col gap-4 h-full">
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-cyan-400/15 flex items-center justify-center">
									<Phone className="w-5 h-5 text-cyan-200" />
								</div>
								<div>
									<p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
										{isRTL ? "الاتصال" : "Phone"}
									</p>
									<p className="text-lg font-semibold text-white">
										Direct lines
									</p>
								</div>
							</div>
							<div className="space-y-3 text-slate-200 font-medium">
								<div className="flex items-center justify-between gap-3">
									<span>+20 100 230 7197</span>
									<a
										href="tel:+201002307197"
										aria-label="Call Egypt"
										className="text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-cyan-400/20 transition-colors"
									>
										{isRTL ? "اتصال مصر" : "Call Egypt"}
									</a>
								</div>
								<div className="flex items-center justify-between gap-3">
									<span>+251 912 601 933</span>
									<a
										href="tel:+251912601933"
										aria-label="Call Ethiopia"
										className="text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-cyan-400/20 transition-colors"
									>
										{isRTL ? "اتصال إثيوبيا" : "Call Ethiopia"}
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg shadow-cyan-500/10">
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								background:
									"linear-gradient(135deg, rgba(91,230,255,0.1), rgba(88,213,255,0.04))",
							}}
						/>
						<div className="relative flex flex-col gap-4 h-full">
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
									<Mail className="w-5 h-5 text-white" />
								</div>
								<div>
									<p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
										{isRTL ? "البريد" : "Email"}
									</p>
									<p className="text-lg font-semibold text-white">
										Direct inbox
									</p>
								</div>
							</div>
							<div className="text-slate-200 font-medium break-all">
								<a
									href="mailto:shawqialwaily@outlook.com"
									className="hover:text-cyan-200 transition-colors"
									aria-label="Email Shawqi"
								>
									shawqialwaily@outlook.com
								</a>
							</div>
							<div>
								<a
									href="mailto:shawqialwaily@outlook.com?subject=Speaking%20%2F%20Advisory%20Inquiry"
									className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-cyan-400/20 transition-colors"
								>
									{isRTL ? "إرسال بريد" : "Email me"}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<a
						href="mailto:shawqialwaily@outlook.com?subject=Speaking%20%2F%20Advisory%20Inquiry"
						className="group inline-flex items-center px-6 py-3 rounded-md bg-white text-[#0b132b] font-semibold shadow-lg shadow-cyan-400/15 transition-transform duration-300 hover:-translate-y-1"
					>
						{isRTL ? "احجز مكالمة" : "Schedule a call"}
						<span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
							→
						</span>
					</a>
				</div>
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
						<p>Designed & developed by | <a href="mailto:kindehenok@egmail.com">Henok Demelash</a></p>

						
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
