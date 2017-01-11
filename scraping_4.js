var phantom = require('phantom');

phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open("http://chat.stackoverflow.com/rooms/29074/html-css-webdesign", function (status) {
                console.log("opened chat? ", status);
                //page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js');
                page.evaluate(function () {
                        var data = $("#chat").text();
                        console.log(data);
                        return data;
                    },
                    function (result) {
                        console.log(result);
                        ph.exit();
                    }
                );
            });
        });
    },
    {
        dnodeOpts: {
            weak: false
        }
    });