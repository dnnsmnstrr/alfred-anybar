import test from 'ava';
import alfyTest from 'alfy-test';
import {lightOrDark} from './helper';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('red');

	t.deepEqual(result, [
		{
			arg: 'red',
			icon: {
				path: './assets/red@2x.png'
			},
			subtitle: 'Set anybar to red',
			title: 'Red'
		}
	]);
});

test('light or dark', t => {
	const lightColor = 'rgba(255,255,255,0.98)';
	const isLight = lightOrDark(lightColor) === 'light';
	t.true(isLight);

	const darkColor = 'rgba(0,0,0,1)';
	const isDark = lightOrDark(darkColor) === 'dark';
	t.true(isDark);
});
