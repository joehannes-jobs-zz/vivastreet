import { Menu } from "./../../public/src/controllers/menu";

describe('navigation', () => {
	var menu = new Menu();

	it('should have 3 routes', () => {
		expect(menu.$scope.menu.length).toEqual(3);
	});
});