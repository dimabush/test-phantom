var page = require("webpage").create(),
    cheerio = require('cheerio');

page.open('http://casa.pozitiff.ua/', function(status){
    console.log("STATUS is: ", status);
    var $ = cheerio.page();

    page.evaluate(function () {
            var data = $("#Instagram")/*.text()*/;
            console.log("DATE: ", data);
            return data;
        },
        function (result) {
            console.log("result: ", result);
            ph.exit();
        }
    );

    var sourceData = page.plainText;
    console.log("SOURCE: ", sourceData);
    // var resultObject = JSON.parse(sourceData);
    // console.log("RESULT: ", resultObject.anobject.anarray);
    phantom.exit();
});