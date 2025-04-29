export const router = {
	mainMenu: async () => {
		console.log("Main Menu\n");
		await showMainMenu();
	},
	menu1: async () => {
		console.log("You are at Menu 1.");
		await showSubMenu1();
	},
	menu2: async () => {
		console.log("You are at Menu 2.");
		await showSubMenu2();
	},
};