const CommonMethod = require("@common-methods");
const loanDetail = require("./action/loan_detail");

exports.trackerReport = async () => {
  // const response = await loanDetail.findAll();
  const response = await loanDetail.fetch();

  return CommonMethod.successResponse(response);
};
