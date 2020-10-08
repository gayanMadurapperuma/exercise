const fs = require('fs');
const utils = require('util');

const log_file = fs.createWriteStream(__dirname + '/../logger.log', {flags : 'w'});

const logger = (d) => {
    log_file.write(utils.format(d) + '\n');
}

module.exports = logger;