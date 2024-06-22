import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentContainer = ({ className, logginedUserId }) => {
	const [comments, setComments] = useState([]);
	const mainComments = comments.filter((comment) => !comment.parent);
	const [affectedComment, setAffectedComment] = useState(null);

	useEffect(() => {
		(async () => {
			const commentData = await getCommentsData();
			setComments(commentData);
		})();
	}, []);

	console.log(comments);

	const addCommentHandler = (value, parent = null, replyOnUser = null) => {
		const newComment = {
			_id: "10",
			user: {
				_id: "a",
				name: "Mohammad Rezaii",
			},
			desc: value,
			post: "1",
			parent,
			replyOnUser,
			createdAt: "2022-12-31T17:22:05.092+0000",
		};

		setComments((prev) => [newComment, ...prev]);
		setAffectedComment(null);
	};

	const updateCommentHandler = (value, commentId) => {
		const updatedComments = comments.map((comment) => {
			if (comment._id === commentId) {
				return {
					...comment,
					desc: value,
				};
			}
			return comment;
		});

		setComments(updatedComments);
		setAffectedComment(null);
	};

	return (
		<div className={`${className}`}>
			<CommentForm btnLabel="Send" formSubmitHandler={addCommentHandler} />

			<div className="space-y-4 mt-8">
				{mainComments.map((comment) => (
					<Comment
						key={comment._id}
						comment={comment}
						logginedUserId={logginedUserId}
						affectedComment={affectedComment}
						setAffectedComment={setAffectedComment}
						addComment={addCommentHandler}
						updateComment={updateCommentHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentContainer;
