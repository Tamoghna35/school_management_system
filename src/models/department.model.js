import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Department = sequelize.define('Department', {
    departmentId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures this field is mandatory
        unique: true, // Prevents duplicate department names
    },
}, {

    timestamps: true, // Disables createdAt and updatedAt fields
});

export { Department };
