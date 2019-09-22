import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	
	border: 1px solid #9e9e6e50;
	padding: 10px;
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
	background-color: ${props => props.active ? '#00BCD4' : ''};


	:hover:enabled {
		background-color: #FFEB3B;
	}
`;

const Pagination = ({ pages, click, active }) => {
	const pageList = [];

	for (let el = 0; el < pages; el += 1) {
		pageList.push(<Link
			active={el === active}
			key={el}
			onClick={() => click(el)}>
			{el + 1}
		</Link>)
	}

	return (
		<Container>
			<Link
				disabled={active === 0}
				onClick={() => click(active - 1)}>
				{'<'}
			</Link>

			{pageList}

			<Link
				disabled={active === pages - 1}
				onClick={() => click(active + 1)}>
				{'>'}
			</Link>
		</Container>
	);
}

export default Pagination;