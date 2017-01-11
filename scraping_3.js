var phantom = require('phantom');

phantom.create(function (ph) {
    ph.createPage(function (page) {
        var url = "http://casa.pozitiff.ua/";
        page.open(url, function() {
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
                page.evaluate(function() {
                    console.log($('#sbi_images'));
                    /*$('a.sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready', '#sbi_images').each(function () {
                        console.log($(this).find('a').attr('href'));
                    });*/
                }, function(){
                    ph.exit()
                });
            });
        });
    });
});