import styled from 'styled-components';

export const Container = styled.div`
	background-color: #006a6a;
	height: 7%;
	display: flex;
	align-items: center;
	> div {
		margin: 0 auto;
		max-width: 800px;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}

	h1 {
		text-transform: uppercase;
		color: #ffffff;

		span {
			color: #d9e9e9;
			font-weight: 100;
		}
	}

	img {
		width: 100px;
	}
`;
