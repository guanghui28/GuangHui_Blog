import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import { images } from "../../constants";
import MainLayout from "../../layout/MainLayout";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentContainer from "../../components/comments/CommentContainer";

const breadCrumbsData = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Article title",
		link: "/blog/1",
	},
];

const postsData = [
	{
		_id: "1",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: new Date().toISOString(),
	},
	{
		_id: "2",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: new Date().toISOString(),
	},
	{
		_id: "3",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: new Date().toISOString(),
	},
	{
		_id: "4",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: new Date().toISOString(),
	},
	{
		_id: "5",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: new Date().toISOString(),
	},
];

const tagsData = [
	"Medical",
	"Lifestyle",
	"Learn",
	"Healthy",
	"Food",
	"Diet",
	"Education",
];

const ArticleDetail = () => {
	return (
		<MainLayout>
			<section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
				<article className="flex-1">
					<BreadCrumb data={breadCrumbsData} />
					<img
						src={images.PostImage}
						alt="laptop"
						className="rounded-xl w-full"
					/>
					<Link
						to="/blog?category=selectedCategory"
						className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
					>
						EDUCATION
					</Link>
					<h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
						Help children get better education
					</h1>
					<div className="mt-4 text-dark-soft">
						<p className="leading-7">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Necessitatibus odit fugit, omnis natus dolorum dolor odio ipsum
							facilis delectus quod eius dolore totam earum velit consectetur et
							ullam, quidem distinctio. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Doloribus iste cupiditate ut, consectetur
							nesciunt porro, non cum soluta nemo expedita voluptatibus amet
							harum, voluptatum illo? Ab veniam quidem eum similique?
						</p>
					</div>

					<CommentContainer className="mt-10" />
				</article>

				<SuggestedPosts
					header="Latest Articles"
					posts={postsData}
					tags={tagsData}
					className="mt-8 lg:mt-0 lg:max-w-xs"
				/>
			</section>
		</MainLayout>
	);
};

export default ArticleDetail;
