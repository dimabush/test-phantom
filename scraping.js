var request = require('request'),
    cheerio = require('cheerio'),
    urls = [];

request('http://casa.pozitiff.ua', function (err, resp, body) {
// request('http://reddit.com', function (err, resp, body) {

    if (!err && resp.statusCode == 200){
        var $ = cheerio.load(body);
        // console.log($('id').hasClass("siteTable"));
        console.log(body);
        // console.log($('#sbi_images'));
        $('a.sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready', '#sbi_images').each(function () {
         // $('a.title may-blank ', '#siteTable').each(function () {

            var url = this.attr('href');
            // console.log(url);
            urls.push(url);
        });

        console.log(urls);
    }
});