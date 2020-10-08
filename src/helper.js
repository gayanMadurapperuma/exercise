const logger = require('./logger');

const printEachValuesToLogger = (values, loggerInfo) => {
    return new Promise((resolve, reject) => {
        logger(loggerInfo);
        if(!Array.isArray(values)){
            return reject();
        }
        values.map(e => {
            logger(e);
        });
        return resolve();
    })
}

const resultsToHttp = (body) => {
    return {
        status: 200,
        body
    };
};



module.exports = {printEachValuesToLogger, resultsToHttp};