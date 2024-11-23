import { sequelize } from "../db/index.js";
import { Student } from "./student.model.js";
import { Parent } from "./parent.model.js";
import { Assignment } from "./assingment.model.js"
import { Attendence } from "./attendence.model.js"
import { BorrowedBooks } from "./borrowedBook.model.js"
import { Classroom } from "./classroom.model.js"
import { Course } from "./course.model.js"
import { Department } from "./department.model.js"
import { Enrollment } from "./enrollment.model.js"
import { Exam } from "./exam.model.js"
import { ExamResult } from "./examResult.model.js"
import { ExamScore } from "./examScore.model.js"
import { ExamType } from "./examType.model.js"
import { Fee } from "./fee.model.js"
import { Library } from "./library.model.js"
import { StudentClassRoom } from "./studentClassroom.model.js";
import { Teacher } from "./teacher.model.js"
import { TeacherDepartment } from "./teacherDepartment.model.js"
import { TeacherType } from "./teacherType.model.js"
import { Grade } from "./grade.model.js"




// Establish a one-to-many relationship between Parent and Student models.
// A Parent can have multiple Students, linked by the foreign key "parent_id" in the Student model.
// The Student model belongs to a Parent, using "parent_id" as the foreign key to reference the Parent model.
Parent.hasMany(Student, { foreignKey: "parent_id" });
Student.belongsTo(Parent, { foreignKey: "parent_id" });


// Establish a one-to-many relationship between Grade and Classroom models.
// A Grade can have multiple Classrooms, linked by the foreign key "grade_id" in the Classroom model.
// The Classroom model belongs to a Grade, using "grade_id" as the foreign key to reference the Grade model.
Grade.hasMany(Classroom, { foreignKey: "gradeId" });
Classroom.belongsTo(Grade, { foreignKey: "gradeId" });


// Establish a one-to-many relationship between Grade and Course models.
// A Grade can have multiple Courses, linked by the foreign key "grade_id" in the Course model.
// The Course model belongs to a Grade, using "grade_id" as the foreign key to reference the Grade model.
Grade.hasMany(Course, { foreignKey: "gradeId" });
Course.belongsTo(Grade, { foreignKey: "gradeId" });

// Establish a many-to-many relationship between Classroom and Student models through Classroom_Student.
// A Classroom can have multiple Students, and a Student can belong to multiple Classrooms.
// The Classroom_Student model has foreign keys "classroom_id" and "student_id" to link Classroom and Student.
Classroom.belongsToMany(Student, { through: StudentClassRoom, foreignKey: "classRommId" });
Student.belongsToMany(Classroom, { through: StudentClassRoom, foreignKey: "studentId" });



// Establish a one-to-many relationship between Teacher and Classroom models.
// A Teacher can manage multiple Classrooms, linked by the foreign key "teacher_id" in the Classroom model.
// The Classroom model belongs to a Teacher, using "teacher_id" as the foreign key to reference the Teacher model.
Teacher.hasMany(Classroom, { foreignKey: "teacherId" });
Classroom.belongsTo(Teacher, { foreignKey: "teacherId" });


// Establish a one-to-many relationship between Student and Attendance models.
// A Student can have multiple Attendance records, linked by the foreign key "student_id" in the Attendance model.
// The Attendance model belongs to a Student, using "student_id" as the foreign key to reference the Student model.
Student.hasMany(Attendence, { foreignKey: "student_id" });
Attendence.belongsTo(Student, { foreignKey: "student_id" });




// Establish a one-to-many relationship between Exam_Type and Exam models.
// An Exam_Type can have multiple Exams, linked by the foreign key "exam_type_id" in the Exam model.
// The Exam model belongs to an Exam_Type, using "exam_type_id" as the foreign key to reference the Exam_Type model.
ExamType.hasMany(Exam, { foreignKey: "examTypeId" });
Exam.belongsTo(ExamType, { foreignKey: "examTypeId" });


// Establish a one-to-many relationship between Course and Exam models.
// A Course can have multiple Exams, linked by the foreign key "course_id" in the Exam model.
// The Exam model belongs to a Course, using "course_id" as the foreign key to reference the Course model.
Course.hasMany(Exam, { foreignKey: "courseId" });
Exam.belongsTo(Course, { foreignKey: "courseId" });


// Establish a one-to-many relationship between Exam and Exam_Result models.
// An Exam can have multiple Exam_Results, linked by the foreign key "exam_id" in the Exam_Result model.
// The Exam_Result model belongs to an Exam, using "exam_id" as the foreign key to reference the Exam model.
Exam.hasMany(ExamResult, { foreignKey: "examId" });
ExamResult.belongsTo(Exam, { foreignKey: "examId" });


// Establish a one-to-many relationship between Student and Exam_Result models.
// A Student can have multiple Exam_Results, linked by the foreign key "student_id" in the Exam_Result model.
// The Exam_Result model belongs to a Student, using "student_id" as the foreign key to reference the Student model.
Student.hasMany(ExamResult, { foreignKey: "student_id" });
ExamResult.belongsTo(Student, { foreignKey: "student_id" });


// Establish a one-to-many relationship beween Course and Assingment

Course.hasMany(Assignment, { foreignKey: "courseId" })
Assignment.belongsTo(Course, { foreignKey: "CourseId" })



Student.hasMany(BorrowedBooks, { foreignKey: "student_id" })
BorrowedBooks.belongsTo(Student, { foreignKey: "student_id" })


Library.hasMany(BorrowedBooks, { foreignKey: "libraryId" })
BorrowedBooks.belongsTo(Library, { foreignKey: "libraryId" })


Student.hasMany(Attendence, { foreignKey: "student_id" })
Attendence.belongsTo(Student, { foreignKey: "student_id" })


Classroom.hasMany(Attendence, { foreignKey: "classRommId" })
Attendence.belongsTo(Classroom, { foreignKey: "classRommId" })


Teacher.hasMany(Classroom, { foreignKey: "teacherId" })
Classroom.belongsTo(Teacher, { foreignKey: "teacherId" })


Grade.hasMany(Classroom, { foreignKey: "gradeId" })
Classroom.belongsTo(Grade, { foreignKey: "gradeId" })


Teacher.hasMany(Course, { foreignKey: "teacherId" })
Course.belongsTo(Teacher, { foreignKey: "teacherId" })


Department.hasMany(Course, { foreignKey: "departmentId" })
Course.belongsTo(Department, { foreignKey: "departmentId" })


Student.hasMany(Enrollment, { foreignKey: "student_id" })
Enrollment.belongsTo(Student, { foreignKey: "student_id" })


Course.hasMany(Enrollment, { foreignKey: "courseId" })
Enrollment.belongsTo(Course, { foreignKey: "courseId" })


Course.hasMany(Exam, { foreignKey: "courseId" })
Exam.belongsTo(Course, { foreignKey: "courseId" })


ExamType.hasMany(Exam, { foreignKey: "examTypeId" })
Exam.belongsTo(ExamType, { foreignKey: "examTypeId" })


// One-to-Many: A student can have many exam results
Student.hasMany(ExamResult, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ExamResult.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// One-to-Many: An exam can have many students' results
Exam.hasMany(ExamResult, { foreignKey: 'examId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ExamResult.belongsTo(Exam, { foreignKey: 'examId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Exam.hasMany(ExamScore, { foreignKey: 'examId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ExamScore.belongsTo(Exam, { foreignKey: 'examId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });



Student.hasMany(ExamScore, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ExamScore.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Student.hasMany(Fee, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Fee.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Department.hasMany(Teacher, { foreignKey: 'departmentId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Teacher.belongsTo(Department, { foreignKey: 'departmentId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

TeacherType.hasMany(Teacher, { foreignKey: 'teacherTypeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Teacher.belongsTo(TeacherType, { foreignKey: 'teacherTypeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });












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