import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import {
	Menu,
	X,
	Linkedin,
	Phone,
	Mail,
	Twitter,
	Facebook,
	BookOpen,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { personalInfo } from "@/data/content";

const Header = () => {
	const { t, isRTL } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMenuOpen(false);
		};

		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [isMenuOpen]);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// Ensure menu is closed on any route change
	useEffect(() => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
			document.body.style.overflow = "";
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	const navItems = [
		{ href: "/", label: t("nav.home") },
		{ href: "/biography", label: t("nav.biography") },
		{ href: "/articles", label: t("nav.articles") },
		{ href: "/books", label: t("nav.books") },
	];

	const navigate = useNavigate();
	const scrollToSection = (href: string) => {
		// Navigate to dedicated routes instead of scrolling
		navigate(href);
		setIsMenuOpen(false);
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-40 transition-all duration-500",
				isScrolled
					? "bg-[#0b1530]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-3"
					: "bg-transparent py-6",
			)}
		>
			<div className="container mx-auto px-4 md:px-8">
				<div className="flex items-center justify-end gap-4">
					<LanguageSwitcher />

					{/* Hamburger Menu */}
					<div ref={menuRef} className="relative">
						<button
							className={cn(
								"p-2 rounded-lg transition-all duration-300",
								isScrolled
									? "hover:bg-muted"
									: "hover:bg-primary-foreground/10",
							)}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							<div className="relative w-6 h-6">
								<Menu
									className={cn(
										"w-6 h-6 absolute inset-0 transition-all duration-300",
										isScrolled ? "text-white" : "text-white",
										isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
									)}
								/>
								<X
									className={cn(
										"w-6 h-6 absolute inset-0 transition-all duration-300",
										isScrolled ? "text-white" : "text-white",
										isMenuOpen
											? "opacity-100 rotate-0"
											: "opacity-0 -rotate-90",
									)}
								/>
							</div>
						</button>

						{/* Full-width Dropdown Panel */}
						{isMenuOpen && (
							<>
								{/* Backdrop */}
								<div
									className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
									onClick={() => setIsMenuOpen(false)}
								/>

								{/* Panel */}
								<div
									className={cn(
										"fixed top-0 left-0 right-0 z-50 h-[80vh] bg-primary text-white shadow-lg transition-transform duration-500 ease-out",
										"animate-slide-down",
										"border-b border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
									)}
									role="dialog"
									aria-modal="true"
								>
									<button
										onClick={() => setIsMenuOpen(false)}
										aria-label="Close menu"
										className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shadow-md"
									>
										<X className="w-6 h-6" />
									</button>

									<div className="h-full container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0">
										{/* Left: Brand & Social */}
										<div
											className={cn(
												"h-full flex flex-col justify-between py-10 md:py-12",
												isRTL ? "md:pl-10" : "md:pr-10",
											)}
										>
											<div>
												<h2 className="font-playfair text-3xl md:text-5xl font-bold text-white">
													Shawqi Al-Waily
												</h2>
											</div>
											<div className="flex flex-col gap-3 text-white/80">
												<a
													href="http://x.com/shawky39851988"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
												>
													<Twitter className="w-5 h-5 text-white" />
													<span className="text-white">X</span>
												</a>

												<a
													href="https://www.facebook.com/shawki.mohammed.1"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
												>
													<Facebook className="w-5 h-5 text-white" />
													<span className="text-white">Facebook</span>
												</a>

													<a
														href={personalInfo.socialLinks.linkedin}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
													>
														<Linkedin className="w-5 h-5 text-white" />
														<span className="text-white">LinkedIn</span>
													</a>

													<a
														href={personalInfo.socialLinks.academia}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
													>
														<BookOpen className="w-5 h-5 text-white" />
														<span className="text-white">Academia</span>
													</a>
											</div>
										</div>

										{/* Right: Nav & Contact */}
										<div
											className={cn(
												"py-10 md:py-12 flex flex-col gap-10 md:gap-12 text-left",
												isRTL ? "md:border-r md:pr-12" : "md:border-l md:pl-12",
												"border-white/20",
											)}
										>
											<nav className="grid gap-5 md:gap-6">
												{navItems.map((item) => (
													<button
														key={item.href}
														onClick={() => scrollToSection(item.href)}
														className="text-left text-2xl md:text-4xl font-semibold md:font-bold text-white hover:text-white/80 transition-colors"
													>
														{item.label}
													</button>
												))}
											</nav>

											<div className="pt-4">
												<div className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">
													Contact
												</div>
												<div className="flex flex-col gap-2 text-lg">
													<a
														href="tel:+201002307197"
														className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
													>
														<Phone className="w-4 h-4 text-white" />
														<span className="text-white">+20 100 230 7197</span>
													</a>
													<a
														href="tel:+251912601933"
														className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
													>
														<Phone className="w-4 h-4 text-white" />
														<span className="text-white">+251 912 601 933</span>
													</a>
													<a
														href="mailto:shawqialwaily@outlook.com"
														className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
													>
														<Mail className="w-4 h-4 text-white" />
														<span className="text-white">
															shawqialwaily@outlook.com
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
