exports.extensions = {
  supported: [
    { icon: "actionscript", extensions: ["as"] },
    { icon: "angular", extensions: [] },
    { icon: "apache", extensions: [] },
    { icon: "applescript", extensions: ["app"] },
    { icon: "autohotkey", extensions: ["ahk"] },
    { icon: "binary", extensions: ["bin"] }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: "blade", extensions: [] },
    { icon: "bower", extensions: ["bowerrc"] },
    { icon: "c", extensions: ["c"] },
    { icon: "c++", extensions: ["cpp"] },
    { icon: "cfm", extensions: ["cfm"] },
    { icon: "clojure", extensions: ["clojure", "cjm"] },
    { icon: "coffescript", extensions: ["coffee"] },
    { icon: "compass", extensions: [] },
    { icon: "cs", extensions: ["cs"] },
    { icon: "css", extensions: ["css"] },
    { icon: "dlang", extensions: ["d"] },
    { icon: "docker", extensions: ["dockerfile"] },
    { icon: "erlang", extensions: ["erl", "hrl", "emakefile", "emakerfile"] },
    { icon: "eslint", extensions: ["eslintrc"] },
    { icon: "font", extensions: ["woff", "woff2", "ttf"] },
    { icon: "git", extensions: ["gitattributes", "gitignore"] },
    { icon: "go", extensions: ["go"] },
    { icon: "gradle", extensions: ["gradle"] },
    { icon: "graphviz", extensions: [] },
    { icon: "groovy", extensions: [] },
    { icon: "gruntfile", extensions: ["gruntfile"], special: "js" },
    { icon: "gulpfile", extensions: ["gulpfile"], special: "js" },
    { icon: "haml", extensions: ["haml"] },
    { icon: "haskell", extensions: ["has", "hs", "lhs", "lit", "gf"] },
    { icon: "haxe", extensions: ["hxml"] },
    { icon: "html", extensions: ["html", "html"] },
    { icon: "image", extensions: ["jpeg", "jpg", "gif", "png", "bmp"] },
    { icon: "jade", extensions: ["jade"] },
    { icon: "java", extensions: ["java"] },
    { icon: "js", extensions: ["js"] },
    { icon: "jsp", extensions: ["jsp"] },
    { icon: "julia", extensions: ["jl"] },
    { icon: "less", extensions: ["less"] },
    { icon: "license", extensions: ["license"] },
    { icon: "lisp", extensions: ["bil"] },
    { icon: "lsl", extensions: ["lsl"] },
    { icon: "lua", extensions: ["lua"] },
    { icon: "markdown", extensions: ["md"] },
    { icon: "markup", extensions: [] },
    { icon: "matlab", extensions: ["m", "fig", "mat", "mex", "mexn", "mexrs6", "mn", "mum", "mx", "mx3", "rwd", "slx", "slddc", "smv", "tikz", "xvc", "xvc"] },
    { icon: "mustache", extensions: ["mustache", "mst"] },
    { icon: "node", extensions: ["json"] },
    { icon: "npm", extensions: ["package"], special: "json" },
    { icon: "ocaml", extensions: ["cma", "cmi", "ml", "mly", "ocamlmakefile"] },
    { icon: "perl", extensions: ["perl"] },
    { icon: "php", extensions: ["php", "php1", "php2", "php3", "php4", "php5", "php6", "phps", "phpsa", "phpt"] },
    { icon: "procfile", extensions: ["procfile"] },
    { icon: "puppet", extensions: ["epp"] },
    { icon: "python", extensions: ["py"] },
    { icon: "r", extensions: ["r"] },
    { icon: "rails", extensions: [] },
    { icon: "react", extensions: ["jsx"] },
    { icon: "ruby", extensions: ["rb"] },
    { icon: "rust", extensions: ["rs"] },
    { icon: "sass", extensions: ["sass"] },
    { icon: "scala", extensions: ["scala"] },
    { icon: "scss", extensions: ["scss"] },
    { icon: "settings", extensions: [] },
    { icon: "shell", extensions: ["bat", "sh", "cmd", "bash"] },
    { icon: "slim", extensions: [] },
    { icon: "source", extensions: [] },
    { icon: "sql", extensions: ["sql"] },
    { icon: "stylus", extensions: ["styl"] },
    { icon: "svg", extensions: ["svg"] },
    { icon: "swift", extensions: ["swift"] },
    { icon: "tcl", extensions: ["tcl"] },
    { icon: "tex", extensions: ["texi"] },
    { icon: "text", extensions: ["txt"] },
    { icon: "textile", extensions: ["textile"] },
    { icon: "twig", extensions: ["twig"] },
    { icon: "typescript", extensions: ["ts"] },
    { icon: "vscode", extensions: ["vscodeignore", "launch"], special: "json" },
    { icon: "yaml", extensions: ["yml", "yaml"] },
    { icon: "zip", extensions: ["zip", "rar", "7z"] },
  ],
  "parse": function(){
    if((/^\d/).test(this)) return 'n' + this;
    return this;
  }
};