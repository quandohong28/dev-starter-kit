import enquirer from 'enquirer'

const { MultiSelect, Select } = enquirer

export async function Menu({ variant = 'select', name, message, body, action }) {
	if (variant === 'select') {
		const prompt = new Select({
			name: name,
			message: message,
			choices: body
		})

		prompt.run()
			.then(answers => console.log('Bạn đã chọn:', answers))
			.catch(console.error)
	}
	else {
		const prompt = new MultiSelect({
			name: name,
			message: message,
			choices: body
		})

		prompt.run()
			.then(answers => console.log('Bạn đã chọn:', answers))
			.catch(console.error)
	}

}