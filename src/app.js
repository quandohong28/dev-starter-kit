import { Hello } from './components/Hello.js'
import { Menu } from './components/menu.js'
import { Loading } from './components/Loading.js'
import getOS from './utils/UserAgent.js'

const menu = {
	variant: 'select',
	name: 'Main Menu',
	message: 'Press Enter to select',
	body: [
		{
			name: 'Menu 1',
			message: 'Menu 1'
		},
		{
			name: 'Menu 1',
			message: 'Menu 2'
		}
	]

}

async function runApp() {
	await Hello({ title: 'Dev Starter Kit' })
	
	await Loading('Loading...\n', async () => {
		await Menu({ variant: menu.variant, name: menu.name, message: menu.message, body: menu.body })

		console.log(getOS())
	})


}

runApp()