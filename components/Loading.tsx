import React from 'react';

type LoadingType = {
	loading_status: 'loading' | 'success' | 'failed';
};

const Loading = (props : LoadingType) => {
	return <div>The current loading status is: {props.loading_status}</div>;
};

export default Loading;
