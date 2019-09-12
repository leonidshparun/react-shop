import React from 'react';

import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const Container = styled.div`
	bottom: 100px;
	width: 100%;
	height: 130px;
	background-color: #FFEB3B;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-size: 24px;
		padding: 5px;
	}

	p {
		font-size: 28px;
	}

	span {
		font-size: 30px;
		font-weight: 600;
	}
`;

const Checkout = ({ total }) => {
	return (
		<Container>
			<h3>Checkout:</h3>
			<p> Total: <span>{total} €</span></p>
			<Button active={total} width={'100%'} >BUY</Button>
		</Container>
	);
}

export default Checkout;