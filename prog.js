const fs = require('fs');
	 

fs.readdirSync("./raw").forEach(file => {

	let name = file.split("_")[0];

	//console.log(`${file} ${name}`);
	fs.rename(`./raw/${file}`, `./raw/${name}.svg`, () => {});
});
	 