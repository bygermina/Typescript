describe('Test for Average', () => {
	it('average fn should work', () => {
		expect(average('1', 1)).toEqual(`Average is 1`);
		expect(average(1, '1')).toEqual(`Average is 1`);
		expect(average(1, 1, 4)).toEqual(`Average is 2`);
	});
});
