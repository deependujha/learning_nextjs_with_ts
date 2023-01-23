import React from 'react';

type PeopleArray = {
	people: {
		first: String;
		last: String;
	}[];
};

const GreetPeople = (props: PeopleArray) => {
	return (
		<div>
			{props.people.map((p, idx) => {
				return <div key={idx}>{`Welcome ${p.first} ${p.last}`}</div>;
			})}
		</div>
	);
};

export default GreetPeople;
