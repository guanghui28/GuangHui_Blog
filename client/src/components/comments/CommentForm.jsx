import { useState } from "react";

const CommentForm = ({
	btnLabel,
	formSubmitHandler,
	formCancelHandler = null,
	initialText = "",
}) => {
	const [value, setValue] = useState(initialText);

	const submitHandler = (e) => {
		e.preventDefault();
		formSubmitHandler(value);
		setValue("");
	};
	return (
		<form
			onSubmit={submitHandler}
			className="flex flex-col items-end border border-primary rounded-lg p-4"
		>
			<textarea
				rows="5"
				className="w-full focus:outline-none bg-transparent"
				placeholder="Leave your comment here..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div className="flex flex-col-reverse items-center gap-2 pt-2 min-[420px]:flex-row">
				{formCancelHandler && (
					<button
						onClick={formCancelHandler}
						className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500"
					>
						Cancel
					</button>
				)}
				<button
					type="submit"
					className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold"
				>
					{btnLabel}
				</button>
			</div>
		</form>
	);
};

export default CommentForm;