const fs = require('fs');
const XLSX = require('xlsx');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const { HEADERS } = require('../utils/constants.utils');

const upload = async (req, res) => {
    const { file } = req;
    if (!file) {
        return res.sendErrorMessage('File not found', 404);
    }

    const { path } = file;
    const workbook = XLSX.readFile(path);
    const sheet_name_list = workbook.SheetNames;

    const data = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheet_name_list[0]],
        {
            defval: null,
            raw: false,
            header: HEADERS,
            range: 1,
        }
    );
    if (!data.length) {
        return res.sendErrorMessage('No data found for upload', 400);
    }
    console.log(req.file);
    return res.send(data)
};

module.exports = {
    upload,
};
