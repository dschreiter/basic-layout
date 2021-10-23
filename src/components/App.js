import { useState } from 'react';

import Container from './Container';
import Card from './Card';
import './App.css';

function App() {
	const [cssCard, setCssCard] = useState('card');

	function updateCardCss(classes) {
		return setCssCard(classes);
	}

	const imageHolder = 'https://via.placeholder.com/350x200';

	const loremText = `Lorem ipsum, dolor sit amet consectetur adipisicing
	elit. Laborum assumenda sequi vitae illo possimus iusto
	nesciunt corporis explicabo officiis similique. Est
	excepturi suscipit repudiandae aut dicta corporis
	corrupti dolorem unde.`;

	return (
		<Container>
			<Card
				updateCardCss={updateCardCss}
				myClassName={cssCard}
				image={imageHolder}
				title='Lorem Ipsum 1'
				text={loremText}
			/>
			<Card
				updateCardCss={updateCardCss}
				myClassName={cssCard}
				image={imageHolder}
				title='Lorem Ipsum 2'
				text={loremText}
			/>
			<Card
				updateCardCss={updateCardCss}
				myClassName={cssCard}
				image={imageHolder}
				title='Lorem Ipsum 3'
				text={loremText}
			/>
		</Container>
	);
}

export default App;
