const sum = require('./cal');
test('Sum test', () => {
	expect(sum(2, 6)).toBe(9);
});
