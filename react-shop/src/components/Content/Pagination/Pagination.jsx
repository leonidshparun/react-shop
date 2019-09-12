import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Link = styled.button`
	border: 1px solid #9e9e6e;
	margin: 5px;
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	background-color: ${props => props.active ? '#00BCD4' : ''}
`;

const Pagination = ({ pages, click, active }) => {
	const links = [];
	for (let el = 0; el < pages; el += 1) {
		links.push(el)
	}
	return (
		<Container>
			{links.map(item => <Link
				active={item === active}
				key={item}
				onClick={() => click(item)}>{item + 1}
			</Link>)}
		</Container>
	);
}

export default Pagination;