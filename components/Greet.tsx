import React from 'react';

type GreetProps = {
	name: String
	unreadMessages?: Number;
	isLoggedIn: Boolean;
};

const Greet = (props: GreetProps) => {
	const { unreadMessages = 0 } = props;

	return (
		<div>
			{props.isLoggedIn ? (
				<h2>
					{`Welcome ${props.name}! you have ${unreadMessages} unread messages.`}
				</h2>
			) : (
				<h2>{`Welcome guest. You have ${unreadMessages} unread messages.`}</h2>
			)}
		</div>
	);
};

export default Greet;
