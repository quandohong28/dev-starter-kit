import figlet from 'figlet';

export async function Hello({ title }) {
	return new Promise((resolve, reject) => {
		figlet(title, (err, data) => {
			if (err) {
				reject(err);
			} else {
				console.log(data); // In banner
				resolve(); // Xong rồi mới quay lại
			}
		});
	});
}
