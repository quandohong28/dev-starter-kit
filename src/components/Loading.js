import ora from 'ora';

export const Loading = async (message, task) => {
	const spinner = ora(message).start();

	try {
		await task();
	} catch (error) {
		console.error('Error:', error);
	} finally {
		spinner.stop();
		spinner.clear();
	}
};