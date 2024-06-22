import CommentForm from "./CommentForm";

const CommentContainer = ({ className }) => {
	return (
		<div className={`${className}`}>
			<CommentForm btnLabel="Send" />
		</div>
	);
};

export default CommentContainer;
