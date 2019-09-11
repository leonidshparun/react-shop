import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: space-around;
	min-height: 60px;
	width: 100%;
	overflow: auto;
	::-webkit-scrollbar { 
    display: none; 
	}
`;

const Element = styled.span`
	margin: 3px;
	padding: 4px;
	background: ${props => props.status ? '#00BCD450' : '#9e9e9e50'};
	cursor: pointer;
	user-select: none;
`;

const Selector = props => <Container>
	{props.data.sort((a, b) => a - b).map(size =>
		<Element
			onClick={() => props.select(size)}
			key={size}
			status={props.selected.includes(size)}
		>
			{size}
		</Element>
	)}
</Container>;


export default Selector;