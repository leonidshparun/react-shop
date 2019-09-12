import styled from 'styled-components';

const Button = styled.button`
	background: ${props => props.active ? '#1b1a20' : '#607D8B'};
	height: 40px;
	width: ${props => props.width};
	height: ${props => props.height};
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s;

	:hover {
		background: ${props => props.active ? '#4CAF50' : ''};
	}
	`


export default Button