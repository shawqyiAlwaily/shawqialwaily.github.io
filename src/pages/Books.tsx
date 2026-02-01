import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BooksSection from "@/components/sections/BooksSection";

const Books = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-24">
				<BooksSection />
			</main>
			<Footer />
		</div>
	);
};

export default Books;
