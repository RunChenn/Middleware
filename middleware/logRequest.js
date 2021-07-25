const moment = require('moment');
const fs = require('fs');

function logRequest(req, res, next) {
    const method = req.method;
    const url = req.url;
    const date = moment().format('YYYY-MM-DD HH:MM:SS');

    res.locals.logs = { method: method, date: date, url: url };

    res.on('finish', () => {
        fs.appendFile("request_logs.txt", date + "\n", err => {
            if (err) { console.log(err); }
        });
    });

    next();
};

module.exports = logRequest;