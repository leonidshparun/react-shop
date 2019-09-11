import styled from 'styled-components';

const CardContainer = styled.div`
	height: 400px;
	width: 260px;
	margin: 20px;
	border: thin solid #9e9e6e50;
	padding: 3px;

	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
	
	transition: border-color 0.2s;

	:hover {
		border: thin solid #009688;
	}
`;

const Heading = styled.p`
	font-weight: 600;
	text-align: center;
	height: 50px;
	display: flex;
	align-items: center;
`;

const Price = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: #0b5a53;
`;

export {
	CardContainer,
	Heading,
	Price,
};