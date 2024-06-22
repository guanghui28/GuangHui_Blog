import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";

const App = () => {
	return (
		<div className="font-opensans">
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/blog/:id" element={<ArticleDetail />} />
			</Routes>
		</div>
	);
};

export default App;
