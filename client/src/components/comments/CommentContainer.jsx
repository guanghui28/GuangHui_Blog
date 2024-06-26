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

	const getRepliesHandler = (commentId) => {
		return comments
			.filter((comment) => comment.parent === commentId)
			.sort((a, b) => {
				return (
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
				);
			});
	};

	const addCommentHandler = (value, parent = null, replyOnUser = null) => {
		const newComment = {
			_id: Math.random().toString(),
			user: {
				_id: "a",
				name: "Mohammad Rezaii",
			},
			desc: value,
			post: "1",
			parent,
			replyOnUser,
			createdAt: new Date().toISOString(),
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

	const deleteCommentHandler = (commentId) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment._id !== commentId)
		);
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
						deleteComment={deleteCommentHandler}
						replies={getRepliesHandler(comment._id)}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentContainer;
