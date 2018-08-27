import fs from 'fs'

export default {
	loadJson: (fileName)=>{
		var file = fs.readFileSync(fileName)
		return JSON.parse(file)
	},
	saveJson: (fileContent, fileName)=>{
		fs.writeFileSync(fileName, JSON.stringify(fileContent), 'utf8')
	},
	listFiles: (path)=>{
		return fs.readdirSync(path);
	}
}