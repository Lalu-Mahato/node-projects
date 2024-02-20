const reportService = require('@services/report/report-service');
const ErrorHelper = require('@helpers/error.helper');

class ReportController {
    static async trackerReport(req, res) {
        try {
            const result = await reportService.trackerReport();
            return res.status(result.code).send(result);
        } catch (err) {
            const appError = ErrorHelper.error(err);
            return res.status(appError.code).send(appError);
        }
    }
}

module.exports = ReportController;
