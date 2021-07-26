const moment = require('moment');
const fs = require('fs');

function logRequest(req, res, next) {

    const method = req.method;
    const url = req._parsedUrl.pathname;
    const startNow = Date.now();
    const startDate = moment().format('YYYY-MM-DD HH:MM:SS');
    const logMsg = `${startDate} | ${method} from /`;

    res.locals.logs = { method: method, date: startDate, url: url };

    res.on('finish', () => {
        const endNow = Date.now();
        const totalTime = endNow - startNow;

        console.log(`${startDate} | ${method} from ${url} | total time: ${totalTime}ms`);

        fs.appendFile("request_logs.txt", logMsg + "\n", err => {
            if (err) { console.log(err); }
        });
    });
    next();
};

module.exports = logRequest;