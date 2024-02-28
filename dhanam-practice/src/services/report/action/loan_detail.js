// const models = require("@models");
const { Sequelize } = require("sequelize");
const models = require("../../../database/models/loan_detail");

exports.findAll = () =>
  models.loan_details.findAll({
    raw: true,
    where: {
      group_name: "Anekal DinnurGRP1",
    },
    include: [
      {
        model: models.daily_target,
        required: true,
        on: {
          prospect_id: Sequelize.col("loan_details.prospect_id"),
        },
      },
    ],
  });

exports.fetch = async () => {
  try {
    const data = await models.sequelize.query("SELECT * FROM loan_detail", {
      type: models.sequelize.QueryTypes.SELECT, // Specify the query type as 'SELECT'
    });
    return data;
  } catch (error) {
    throw new Error("Error fetching data from loan_details: " + error.message);
  }
};
