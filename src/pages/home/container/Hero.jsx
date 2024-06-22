import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
	return (
		<section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
			{/* right side */}
			<div className="mt-10 lg:w-1/2">
				<h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left max-w-[540px]">
					Read the most interesting articles
				</h1>
				<p className="text-dark-light mt-4 text-center md:text-xl lg:text-left">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
					illo possimus deserunt quos vel, praesentium unde repellendus iure
					voluptatem officia repudiandae eaque perferendis soluta amet
					cupiditate pariatur, distinctio ea nesciunt!
				</p>
				<div className="flex flex-col gap-y-2.5 mt-10 relative ">
					<div className="relative">
						<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead]" />
						<input
							type="text"
							className="placeholder:font-bold placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 font-semibold text-dark-soft focus:outline-none shadow-lg"
							placeholder="Search article"
						/>
					</div>
					<button
						className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
						type="button"
					>
						Search
					</button>
				</div>
				<div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
					<span className="text-dark-light font-semibold italic lg:mt-4">
						Popular Tags:
					</span>
					<ul className="flex flex-wrap gap-2.5 mt-3">
						<li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-bold">
							Design
						</li>
						<li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-bold">
							User Experiences
						</li>
						<li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-bold">
							User Interfaces
						</li>
					</ul>
				</div>
			</div>

			{/* left side */}
			<div className="hidden lg:block lg:w-1/2">
				<img className="w-full" src={images.HeroImage} alt="Hero Article" />
			</div>
		</section>
	);
};

export default Hero;
