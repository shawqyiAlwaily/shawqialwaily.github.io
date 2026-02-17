import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import BookDetail from "./pages/BookDetail";
import Biography from "./pages/Biography";
import Books from "./pages/Books";
import Articles from "./pages/Articles";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import ArticleDetail from "./pages/ArticleDetail";
import Events from "./pages/Events"; // Add this
import EventDetail from "./pages/EventDetail"; // Add this
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<LanguageProvider>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/biography" element={<Biography />} />
						<Route path="/books" element={<Books />} />
						<Route path="/books/:slug" element={<BookDetail />} />
						<Route path="/articles" element={<Articles />} />
						<Route path="/articles/:slug" element={<ArticleDetail />} />
						<Route path="/events" element={<Events />} /> {/* Add this */}
						<Route path="/events/:slug" element={<EventDetail />} />{" "}
						{/* Add this */}
						<Route path="/work" element={<Work />} />
						<Route path="/work/:id" element={<WorkDetail />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/cv" element={<CV />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</LanguageProvider>
	</QueryClientProvider>
);

export default App;
