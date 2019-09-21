import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	margin: 10px;
	padding: 5px;
	position: relative;
	background-color: #CDDC39;
	transition: all 0.5s;

	button {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 16px;
		width: 20px;
		height: 20px;
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

const Item = ({ item, product, remove }) => {
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
			<button onClick={remove}>X</button>
		</Container>
	);
}

export default Item;