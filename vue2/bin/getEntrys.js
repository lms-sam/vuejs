var glob = require('glob');
var path = require('path');
function getEntrys(sourcePath) {
	var entrys = {};
	glob.sync(sourcePath).forEach(function (entry) {
		var basename = path.basename(entry,path.extname(entry));
		entrys[basename] = entry;
	});
	return entrys;
}
module.exports = getEntrys;