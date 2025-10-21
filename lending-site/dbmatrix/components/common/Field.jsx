import React from "react";
function Field({ label, children, htmlFor, error }) {
	const id = htmlFor || getChildId(children);
	return (
		<div className="aximo-account-field">
			{label && (
				<label htmlFor={id} className="mb-1">
					{label}
				</label>
			)}
			{children}
			{error && <span className="text-danger">{error.message}</span>}
		</div>
	);
}
function getChildId(children) {
	const child = React.Children.only(children);

	// eslint-disable-next-line no-unsafe-optional-chaining
	if ("id" in child?.props) {
		return child.props.id;
	}
}
export default Field;
