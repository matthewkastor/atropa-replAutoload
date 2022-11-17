Autoloads a file into the Node REPL on start then passes control to the user.

## Install it on node from npm

`npm install atropa-repl-autoload`

## Overview

Takes three args, a file and encoding, exactly like [fs.readFileSync](http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_encoding). So yes, the encoding is optional and defaults to utf8. The third argument is an optional options object which corresponds to the options for [repl.start](http://nodejs.org/api/repl.html#repl_repl_start_options)

On the command line the third option will require quoting and escaping per your shell's instructions and then you'll need to `JSON.parse` it before passing it off. It may be easier to simply specify the options arg in your js file or leaving the argument unspecified and accepting the defaults.

## It's easy to use

### With or Without Commandline Parameters

This would be useful for code editors that allow you to launch external programs and pass the filename of the currently focused file. You would be able to load the file you're editing into the REPL and try things out right away.

In [notepad++ the command](http://npp-community.tuxfamily.org/documentation/notepad-user-manual/commands) would look something like
`node path\to\thisScript.js "$(FULL_CURRENT_PATH)"`
if you were to name the following example `thisScript.js` and have node in your path.

This would also be useful if you wanted to load the same file into the repl all the time. Say, for instance, if you were working on a library.


```
var replAutoload = require('atropa-repl-autoload');
var file = process.argv[2];
var encoding = process.argv[3];
var options = process.argv[4];

// uncomment one of the following lines depending
// on how you want to launch the REPL.


// to allow specifying all options on the command line

// replAutoload(file, encoding, JSON.parse(options));
// node thisScript.js scriptToLoad.js encodingOfScriptToLoad options


// to allow only file and encoding to be specified and, setting the same options
// every time you run the repl.

// replAutoload(file, encoding, { "ignoreUndefined" : "true" });
// node thisScript.js scriptToLoad.js encodingOfScriptToLoad


// to preload the same file every time the repl is started replace
// test.js with the name and location of the file you want to preload.

// replAutoload('test.js', 'utf8', { "ignoreUndefined" : "true" });
// node thisScript.js

```

## Intellisense Support and Documentation

Visual studio intellisense support is available in docs/vsdoc/OpenLayersAll.js
Full documentation may be found at [http://matthewkastor.github.io/atropa-replAutoload](http://matthewkastor.github.io/atropa-replAutoload)