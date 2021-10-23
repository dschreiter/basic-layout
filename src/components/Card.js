import './Card.css';

const Card = (props) => {
	const { myClassName, image, title, text } = props;

	function fadeCards() {
		props.updateCardCss('card fade');
	}

	function restoreCards() {
		// restore intial css
		props.updateCardCss('card');
	}

	return (
		<div
			className={myClassName}
			onMouseEnter={fadeCards}
			onMouseLeave={restoreCards}
		>
			<img src={image} alt='' />
			<h3 class='title'>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Card;
