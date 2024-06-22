import MainLayout from "../../layout/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
	return (
		<MainLayout>
			<Hero />
			<Articles />
			<CTA />
		</MainLayout>
	);
};

export default HomePage;
