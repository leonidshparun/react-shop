import React from 'react';

import Checkbox from '../../../UI/CheckBox/Checkbox';

import styled from 'styled-components';

const Container = styled.div`
		display: flex;
		flex-flow: column;
		border: 1px solid #9e9e6e50;
		padding: 10px;
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

const Brands = ({ brands, change, clear }) => {
	return (
		<Container>
			<p>Brands:</p>
			<button onClick={clear} >X</button>
			{Object.keys(brands).map((brand) =>
				<label key={brand}>
					<Checkbox
						checked={brands[brand]}
						onChange={() => change(brand)}
					/>
					<span style={{ marginLeft: 8, fontSize: 18 }}>
						{brand}
					</span>
				</label>)}
		</Container>
	);
}

export default Brands;