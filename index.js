var path = require('path');
var process = require('process');
var resolve = require('resolve');

module.exports = function(file, data) {
    if (file === 'metal-soy-bundle' || file === 'metal-incremental-dom' || file === 'incremental-dom') {
    	const relativeDir = data.basedir.substr(data.basedir.indexOf('node_modules'));
    	data.basedir = path.resolve(process.cwd(), relativeDir);
    }
    return resolve.sync(file, data);
};