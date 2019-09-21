import React from 'react';

import Selector from '../../../UI/Selector/Selector';

import styled from 'styled-components';

const Container = styled.div`
		display: flex;
		flex-flow: column;
		border: 1px solid #9e9e6e50;
		padding: 10px;
		margin: 10px 0;
		width: 200px;
		position: relative;
		p {
			font-size: 24px;
			margin: 10px;
		}
		button {
			position: absolute;
			right: 20px;
			top: 20px;
			background: #00bcd450;
			border-radius: 50%;
			width: 25px;
			height: 25px;
		}
`;

const Sizes = ({ initial, sizes, change, select }) => {
	return (
		<Container>
			<p>Size:</p>
			<button onClick={select} >all</button>
			<Selector
				data={initial}
				select={(size) => change(size)}
				selected={Object.keys(sizes)}
			/>
		</Container>
	);
}

export default Sizes;