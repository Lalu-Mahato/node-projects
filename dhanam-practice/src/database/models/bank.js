module.exports = (sequelize, DataTypes) => {
    const bank = sequelize.define(
        'bank',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            bank_code: DataTypes.INTEGER,
            bank_name: DataTypes.STRING,
            bank_icon: DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
        },
        {
            tableName: 'bank',
            underscored: true,
            timestamps: true,
        },
    );
    bank.associate = () => {
    // associations can be defined here
    };
    return bank;
};
