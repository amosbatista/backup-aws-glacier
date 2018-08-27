import fileOp from './fileOperator'
import hash from './hashGenerator'

var config = fileOp.loadJson('./config.json');
var processedList = [];

config.vaults.forEach((vault)=>{
	vault.folders.forEach((folder)=>{
		var fileList = fileOp.listFiles(folder);
		fileList.forEach((file)=>{
			processedList.push({
				"vault": "",
				"hash": hash(file),
				"uploadedName": "",
				"originalName": "",
				"originalPath": ""
			});
		})
	})
})

fileOp.saveJson(processedList, "processed.json");