import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const TeacherDepartment = sequelize.define(
    'TeacherDepartment',
    {
    departmentId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true, // Automatically incrementing ID
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures this field is mandatory
        unique: true, // Prevents duplicate department names
    },
}, {
    timestamps: true
});

export  {TeacherDepartment};
