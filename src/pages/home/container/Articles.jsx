import ArticleCard from "../../../components/ArticleCard";

const Articles = () => {
	return (
		<section className="container mx-auto flex flex-wrap px-5 py-10 md:gap-5">
			<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
			<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
			<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
		</section>
	);
};

export default Articles;
