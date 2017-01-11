var page = require("webpage").create();

page.open('https://jsonview.com/example.json', function(){
    var jsonSource = page.plainText;
    console.log("SOURCE: ", jsonSource);
    var resultObject = JSON.parse(jsonSource);
    console.log("RESULT: ", resultObject.anobject.anarray);
    phantom.exit();
});