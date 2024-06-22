import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../../../components/ArticleCard";

const Articles = () => {
	return (
		<section className="container mx-auto flex flex-wrap px-5 py-10 md:gap-5 ">
			<div className="flex flex-wrap px-5 py-10 gap-5">
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
			</div>

			<button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
				<span>More articles</span>
				<FaArrowRight className="w-3 h-3" />
			</button>
		</section>
	);
};

export default Articles;
