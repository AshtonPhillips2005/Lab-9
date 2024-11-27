let student = {
    name: "Ashton Phillips", 
    age: 19,
    enrolled: true,
    courses: ["Math", "Science", "Computer Science"],
    displayInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};

console.log(`Name: ${student.name}, Age: {student.age}`);

console.log(student.displayInfo());

let studentJson = JSON.stringify(student);
console.log(studentJson);

let parsedStudent = JSON.parse(studentJson);
console.log(parsedStudent);

console.log(student === parsedStudent);

let { name, courses } = student;
console.log(`Name: ${name}, Courses: ${courses}`);

let scores = [90, 60, 75, 82];

let [score1, score2] = scores;
console.log(`First score: ${score1}, Second score: ${score2}`);

let clonedStudent = { ...student };

clonedStudent.graduationYear = 2025;
console.log(clonedStudent);

let additionalCourses = ["Art", "Gym"];
let allCourses = [...student.courses, ...additionalCourses];
console.log(allCourses);

student.addCourse = function(course) {
    this.courses.push(course);
};

student.addCourse("History");
console.log(student.courses);

student.totalCourses = function(){
    return this.courses.length;
};

console.log(`Total courses: ${student.totalCourses()}`);

let averageScore = scores.reduce((sum,score) => sum + score, 0) / scores.length;
console.log(`Average score: ${averageScore}`);