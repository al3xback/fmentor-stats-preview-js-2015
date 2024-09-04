const cardEl = document.querySelector('.card');

/* Keyword let, const */
const imagePath = './images/meeting.jpg';
let imageAlt;
imageAlt = 'Equilibrium';

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.src = imagePath;
cardImageEl.alt = imageAlt;

/* Spread (...) operator */
const dummyImage = {
	loading: 'eager',
};
const image = { ...dummyImage };

cardImageEl.loading = image.loading;

/* Arrow function */
const getMarkText = () => {
	return 'insights';
};

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = getMarkText();

/* Object destructuring */
const description = {
	firstPart:
		'Discover the benefits of data analytics and make better decisions regarding revenue,',
	secondPart: 'customer experience,',
	thirdPart: 'and overall efficiency.',
};
const { firstPart, secondPart, thirdPart } = description;

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = `${firstPart} ${secondPart} ${thirdPart}`;

/* Array destructuring */
const statusLabels = ['Companies', 'Templates', 'Queries'];
const [companyLabel, templateLabel, queryLabel] = statusLabels;

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('.label').textContent = companyLabel;
cardStatusItemEls[1].querySelector('.label').textContent = templateLabel;
cardStatusItemEls[2].querySelector('.label').textContent = queryLabel;
