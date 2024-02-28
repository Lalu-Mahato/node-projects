module.exports = (sequelize, DataTypes) => {
    const loan_emi_mapping = sequelize.define(
        'loan_emi_mapping',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            collected_at: DataTypes.DATE,
        },
        {
            tableName: 'loan_emi_mapping',
            underscored: true,
            timestamps: true,
        },
    );
    loan_emi_mapping.associate = () => {};
    return loan_emi_mapping;
};
