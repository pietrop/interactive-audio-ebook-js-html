const fs = require('fs');
const main = require('./index.js');

const RSS_FEED = 'https://video-api.wsj.com/podcast/rss/wsj/the-journal';

main(RSS_FEED).then((htmlPage) => {
    fs.writeFileSync('./public/index.html', htmlPage);
})