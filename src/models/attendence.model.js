import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model";
import { Classroom } from "./classroom.model.js";

const Attendence = sequelize.define(
    "Attendence",
    {
        attendanceId: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4
        },
        studentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Student, // Table name
                key: 'student_id', // Primary key in Students table
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        classroomId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Classroom, // Table name
                key: 'clasroomId', // Primary key in Classrooms table
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('Present', 'Absent'),
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
)
export { Attendence }