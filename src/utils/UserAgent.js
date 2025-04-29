export default function getOS() {
	const platform = process.platform

	if (platform === 'darwin') {
		return 'macOS'
	} else if (platform === 'win32') {
		return 'Windows'
	} else if (platform === 'linux') {
		return 'Linux'
	} else {
		return 'Unknown'
	}
}

