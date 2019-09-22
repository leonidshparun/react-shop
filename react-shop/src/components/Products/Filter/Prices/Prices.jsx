import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
		display: flex;
		flex-flow: column;
		border: 1px solid #9e9e6e50;
		padding: 10px;
		width: 200px;

		p {
			font-size: 24px;
			margin: 10px;
		}

		input {
			width: 60px;
			font-size: 16px;
			padding: 5px;
		}

		label {
			width: 60px;
			font-size: 18px;
			margin: 5px;
		}

		div {
			display: flex;
			justify-content: center;
		}
`;

const Prices = ({ prices, change }) => {
	return (
		<Container>
			<p>Price, €:</p>
			<div>
				<label>
					from:
				<input
						type="text"
						value={prices[0]}
						onChange={(e) => change(e, 0)} />
				</label>
				<label>
					to:
						<input
						type="text"
						value={prices[1]}
						onChange={(e) => change(e, 1)} />
				</label>
			</div>
		</Container>
	);
}

export default Prices;