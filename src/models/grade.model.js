import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Grade = sequelize.define(
    "Grade",
    {
        gradeId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        gradeName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)
export { Grade }