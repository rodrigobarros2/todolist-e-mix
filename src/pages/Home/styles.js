import styled from 'styled-components';

export const Container = styled.div`
	height: 93%;
	background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
	max-width: 750px;
	width: 65%;
	margin: 0 auto;
	padding: 2% 0 0 0;
`;

export const AddTask = styled.div`
	input {
		background-color: #ffffff;
		border: none;
		height: 30px;
		width: 80%;
		padding: 0 0 0 10px;
	}

	button {
		height: 30px;
		width: 20%;
		border: none;
		color: #ffffff;
		background-color: #36afd1;
		text-transform: uppercase;
		font-weight: bold;
	}
`;

export const ToDo = styled.div`
	button {
		border: none;
		background: none;
	}

	input {
		transform: scale(1.3);
		margin: 10px 10px 10px 2px;
		background: red;
	}

	span {
		font-size: 16px;
		color: #7b7b7b;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:not(:last-child) {
			border-bottom: 1px solid gray;
		}
	}

	h3 {
		margin: 2% 0 0 0;
		font-size: 14px;
		font-weight: 700;
		color: #006a6a;
		text-transform: uppercase;
	}

	img {
		cursor: pointer;
		margin: 0 5px;
		width: 17px;
		filter: invert(48%) sepia(4%) saturate(24%) hue-rotate(316deg)
			brightness(99%) contrast(86%);
		flex-grow: 0;
	}
`;
