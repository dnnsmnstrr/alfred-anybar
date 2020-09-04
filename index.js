'use strict';
const alfy = require('alfy');
const {capitalize} = require('./helper');

const colors = [
	'white',
	'red',
	'orange',
	'yellow',
	'green',
	'cyan',
	'blue',
	'purple',
	'black',
	'question',
	'exclamation'
];

const items = alfy
	.inputMatches(colors, 'title')
	.map(color => ({
		title: capitalize(color),
		subtitle: `Set anybar to ${color}`,
		arg: color,
		icon: {
			path: `./assets/${color}@2x.png`
		}
	}));

alfy.output(items);
