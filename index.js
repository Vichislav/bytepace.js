const axios = require('axios');
const cheerio = require('cheerio');

const parse = async () => {
    const getHTML = async (url) => {
        const { data } = await axios.get(url)
        return cheerio.load(data)
    };

    const $ = await getHTML('https://omsk.hh.ru/resume/f2a53cc3ff09cbf7840039ed1f716c514f3869');
    $('img').each((i, element) => {
        const png = $(element).find("nodeName");
        console.log(png);
    })

};

parse();
