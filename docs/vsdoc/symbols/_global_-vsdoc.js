
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
        replAutoload: function(fileToLoad, encoding, replStartArgs) {
            /// <summary>Autoloads a file into the Node REPL on start then passes control to the user.</summary>
            /// <param name="fileToLoad" type="String">The file to load into the REPL</param>
            /// <param name="encoding" type="String">Optional. The encoding of the file, valid values
            ///  are the same as for fs.readFileSync. Defaults to utf8.</param>
            /// <param name="replStartArgs" type="Object">Optional. The options for the REPL. Corresponds
            ///  to repl.start options.</param>
        }
        
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);
