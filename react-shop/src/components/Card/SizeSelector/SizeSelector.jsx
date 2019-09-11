import React from 'react';
import styled from 'styled-components';

const Sizes = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: space-around;
	min-height: 60px;
	width: 100%;
	max-width: 200px;
	overflow: auto;
	::-webkit-scrollbar { 
    display: none; 
}
`;

const Size = styled.p`
	margin: 3px;
	padding: 4px;
	background: ${props => props.status ? '#FFEB3B' : '#9e9e9e50'};
	cursor: pointer;
	user-select: none;
`;

const SizeSelector = props => {
	return <Sizes>
		{props.data.map(size =>
			<Size
				onClick={() => props.select(size)}
				key={size}
				status={props.selected.includes(size)}
			>
				{size}
			</Size>
		)}
	</Sizes>
};


export default SizeSelector;