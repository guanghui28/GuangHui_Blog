import { BsCheckLg } from "react-icons/bs";
import { images } from "../constants";

const ArticleCard = ({ className }) => {
	return (
		<article className={`rounded-xl overflow-hidden shadow-md ${className}`}>
			<img
				src={images.PostImage}
				alt="article image"
				className="w-full object-cover object-center h-auto lg:h-48 xl:h-60"
			/>
			<div className="p-5">
				<h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
					Future of work
				</h2>
				<p className="text-dark-light mt-3 text-sm md:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at
					accusantium sequi aliquam.
				</p>
				<div className="flex flex-nowrap justify-between items-center mt-6">
					<div className="flex items-center gap-x-2 md:gap-x-2.5">
						<img
							src={images.PostProfileImage}
							alt="post profile image"
							className="w-9 h-9 md:w-10 md:h-10"
						/>
						<div className="flex flex-col">
							<h4 className="font-bold italic text-dark-soft text-sm md:text-base">
								Viola Manisa
							</h4>
							<div className="flex items-center gap-x-2">
								<span className="bg-green-300 w-fit bg-opacity-20 p-1.5 rounded-full">
									<BsCheckLg className="w-3 h-3 text-green-600" />
								</span>
								<span className="italic text-dark-light text-xs md:text-sm">
									Verified Writer
								</span>
							</div>
						</div>
					</div>
					<span className="font-bold text-dark-light italic text-sm md:text-base">
						02 May
					</span>
				</div>
			</div>
		</article>
	);
};

export default ArticleCard;
