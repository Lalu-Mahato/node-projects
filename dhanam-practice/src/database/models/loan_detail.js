module.exports = (sequelize, DataTypes) => {
  const loan_detail = sequelize.define(
    "loan_details",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      group_id: DataTypes.STRING,
      los_group_id: DataTypes.STRING,
      group_name: DataTypes.STRING,
      field_officer_id: DataTypes.STRING,
      field_officer_name: DataTypes.STRING,
      los_prospect_id: DataTypes.STRING,
      prospect_name: DataTypes.STRING,
      prospect_address: DataTypes.STRING,
      prospects_mobile_number: DataTypes.STRING,
      bank_name: DataTypes.STRING,
      product_name: DataTypes.STRING,
      loan_account_number: DataTypes.STRING,
      los_loan_id: DataTypes.STRING,
      sanctioned_amount: DataTypes.FLOAT,
      total_outstanding: DataTypes.FLOAT,
      principal_outstanding: DataTypes.FLOAT,
      dpd_days: DataTypes.INTEGER,
      emi_due_date: DataTypes.DATE,
      disbursement_date: DataTypes.DATE,
    },
    {
      tableName: "loan_details",
      underscored: true,
      timestamps: true,
    }
  );
  loan_detail.associate = (models) => {};
  return loan_detail;
};
