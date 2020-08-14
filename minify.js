const babel = require("@babel/core");
const fs = require("fs");

const code = fs.readFileSync("./src/J2M.js").toString();
const minified = babel.transform(code, {
	presets: ["minify"],
	comments: false
});

fs.writeFileSync("./J2M.min.js", minified.code);