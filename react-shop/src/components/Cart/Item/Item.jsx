import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 5px 0;
	padding: 5px;
	position: relative;
	border: 1px solid #ccc;	
	background-color: #b38afb;

	button {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 16px;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		background-color: #795548;
		color: white;
	}
`;

const Price = styled.p`
	width: 70px;
	font-size: 24px;
	color: black;
	justify-content: center;
	display: flex;
	align-items: flex-end;
`;

const Description = styled.div`
	width: 320px;
	padding: 5px;
	font-size: 16px;
	color: black;
`;

const Item = ({ item, product }) => {
	return (
		<Container>
			<img
				src={require(`../../../static/img/item${product.id}.jpg`)}
				alt={product.title}
				width='60px' />
			<Description>
				<p>{`${product.brand} ${product.title} - ${product.style}`}</p>
				<p>Size: {item.size}</p>
			</Description>
			<Price>{product.price} €</Price>
			<button>X</button>
		</Container>
	);
}

export default Item;