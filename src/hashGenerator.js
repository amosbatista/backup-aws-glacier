import hashFiles from 'hash-files';

export default (fileName)=>{
	var options = {
		files: fileName
	}
	return hashFiles.sync(options)
}