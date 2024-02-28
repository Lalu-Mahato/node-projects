module.exports = (sequelize, DataTypes) => {
    const daily_target = sequelize.define(
        'daily_target',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            target_emi_amount: DataTypes.FLOAT,
            targetodamount: DataTypes.FLOAT,
            upi_amount: DataTypes.FLOAT,
            cash_amount: DataTypes.FLOAT,
            prospect_id: DataTypes.STRING,
        },
        {
            tableName: 'daily_target',
            underscored: true,
            timestamps: true,
        },
    );
    daily_target.associate = () => {};
    return daily_target;
};
