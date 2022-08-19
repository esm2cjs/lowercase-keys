import test from 'ava';
import lowercaseKeys from './esm/index.js';

test('main', t => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
});
