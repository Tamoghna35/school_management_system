import { sequelize } from "../db/index.js";
import { Student } from "./student.model.js";
import { Parent } from "./Parent.model.js";





// Establish a one-to-many relationship between Parent and Student models.
// A Parent can have multiple Students, linked by the foreign key "parent_id" in the Student model.
// The Student model belongs to a Parent, using "parent_id" as the foreign key to reference the Parent model.
Parent.hasMany(Student, { foreignKey: "parent_id" });
Student.belongsTo(Parent, { foreignKey: "parent_id" });


const DB_CONNECTION = async () => {
    try {
        await sequelize.authenticate(),
            await sequelize.sync()
        console.log("Connection to the database establish successfully");

    } catch (error) {
        console.error("Error in establishing connection string:", error);

    }
}

export {
    DB_CONNECTION,
    Student,
    Parent
}