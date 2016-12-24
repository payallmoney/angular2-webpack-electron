var fs = require("fs");
var zlib = require("zlib");
fs.readdir("./dist", function (err, files) {
    console.log(files)
    files.filter(function (value) {
        return value.substr(value.length - 3, 3) == ".gz"
    }).forEach(function (val, index) {
        var output = fs.createWriteStream('./dist/' + val.substr(0, val.length - 3));
        var stream = fs.createReadStream('./dist/' + val)
            .pipe(zlib.createUnzip())
            .pipe(output);
        stream.on('finish', function () {
            fs.unlink('./dist/' + val, function () { });
        });
    });

})

