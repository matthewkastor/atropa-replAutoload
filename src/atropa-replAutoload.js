/**
 * Autoloads a file into the Node REPL on start then passes control to the user.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130309
 * @param {String} fileToLoad The file to load into the REPL
 * @param {String} encoding Optional. The encoding of the file, valid values
 *  are the same as for fs.readFileSync. Defaults to utf8.
 * @param {Object} replStartArgs Optional. The options for the REPL. Corresponds
 *  to repl.start options.
 * @example
 *  var replAutoload = require('atropa-repl-autoload');
 *  // replAutoload(process.argv[2], process.argv[3], JSON.parse(process.argv[4]));
 *  // replAutoload(process.argv[2], process.argv[3],  { "ignoreUndefined" : "true" });
 *  replAutoload('test.js', 'utf8', { "ignoreUndefined" : "true" });
 * @see <a href="http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_encoding">
 * http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_encoding</a>
 * @see <a href="http://nodejs.org/api/repl.html#repl_repl_start_options">
 * http://nodejs.org/api/repl.html#repl_repl_start_options</a>
 */
function replAutoload(fileToLoad, encoding, replStartArgs) {
    var repl = require("repl");
    var fs = require('fs');
    var file;

    encoding = encoding || 'utf8';
    replStartArgs = replStartArgs || 'atropa-replAutoload>';
    
    if(fileToLoad) {
        try {
            file = fs.readFileSync(fileToLoad, encoding);
            global.eval(String(file));
            console.log('Loaded ' + fileToLoad);
        } catch (e) {
            console.log('could not load file ' + fileToLoad + ' as ' + encoding);
            process.exit(1);
        }
    } else {
        console.log('No autoload file specified.');
    }
    
    repl.start(replStartArgs);
};



module.exports = replAutoload;