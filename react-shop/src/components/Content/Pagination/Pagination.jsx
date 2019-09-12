import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Link = styled.button`
	border: 1px solid #607D8B;
	margin: 5px;
	background-color: #9e9e9eb0;
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Pagination = ({ pages, click }) => {
	const links = [];
	for (let el = 0; el < pages; el += 1) {
		links.push(el)
	}
	return (
		<Container>
			{links.map(item => <Link
				key={item}
				onClick={() => click(item)}>{item + 1}
			</Link>)}
		</Container>
	);
}

export default Pagination;