import * as React from 'react';

interface AllInfo {
	status: string,
	approved: true,
	numberOfErrors: number,
	extraInfo?: string
}

//const MoreInfo = (prop: { status: string }) => {
const MoreInfo = (props: AllInfo) => {

	const extraInfo = props.extraInfo === undefined ? '(none)' : props.extraInfo;

	return (
		<>
			<p>More Info: <span className="data">{props.status}</span></p>
			<p>Approved: <span className="data">{props.approved ? 'yes' : 'no'}</span></p>
			<p>Errors: <span className="data">{props.numberOfErrors}</span></p>
			<p>Extra Info: <span className="data">{extraInfo}</span></p>
		</>
	);
}

export default MoreInfo;