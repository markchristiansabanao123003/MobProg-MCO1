// ==========================================
// STUDENT MANAGEMENT SYSTEM
// ==========================================

// ==========================================
// 1. VARIABLES / PROPERTIES
// ==========================================

let schoolName = "Northwest Samar State University";
let schoolYear = "2026-2027";
let passingGrade = 75;


// ==========================================
// 2. ARRAYS
// ==========================================

let subjects = ["Programming", "Database", "Networking"];

let grades = [90, 85, 78];

let activities = ["Quiz", "Project", "Final Exam"];


// ==========================================
// 3. OBJECT LITERALS
// ==========================================

let school = {
    name: "Northwest Samar State University",
    location: "Calbayog City, Samar"
};

let course = {
    name: "Bachelor of Science in Information Technology",
    department: "College of Computing and Information Sciences"
};


// ==========================================
// 4. CLASS #1 - PERSON
// ==========================================

class Person {

    // Constructor #1
    constructor(name, age) {
        this.name = name;

        // Encapsulation #1
        this.#age = age;
    }

    // Private property for encapsulation
    #age;

    // Method #1
    getAge() {
        return this.#age;
    }

    // Method #2
    introduce() {
        console.log("Hello! My name is " + this.name + ".");
    }

    // Abstraction
    displayInfo() {
        console.log("Person information.");
    }
}


// ==========================================
// 5. CLASS #2 - STUDENT
// ==========================================

class Student extends Person {

    // Constructor #2
    constructor(name, age, studentId, course) {
        super(name, age);

        this.studentId = studentId;

        // Encapsulation #2
        this.#course = course;
    }

    // Private property
    #course;

    // Method #3
    getCourse() {
        return this.#course;
    }

    // Method #4
    displayInfo() {
        console.log("Student: " + this.name);
        console.log("Student ID: " + this.studentId);
        console.log("Course: " + this.#course);
    }

    // Method #5
    calculateAverage() {
        let total = 0;

        for (let grade of grades) {
            total += grade;
        }

        return total / grades.length;
    }
}


// ==========================================
// 6. CLASS #3 - TEACHER
// ==========================================

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);

        this.subject = subject;
    }

    // Method
    displayInfo() {
        console.log("Teacher: " + this.name);
        console.log("Subject: " + this.subject);
    }
}


// ==========================================
// 7. CLASS #4 - GRADUATE STUDENT
// ==========================================

class GraduateStudent extends Student {

    constructor(name, age, studentId, course, thesisTitle) {
        super(name, age, studentId, course);

        this.thesisTitle = thesisTitle;
    }

    // Method
    displayInfo() {
        console.log("Graduate Student: " + this.name);
        console.log("Student ID: " + this.studentId);
        console.log("Thesis: " + this.thesisTitle);
    }
}


// ==========================================
// 8. OBJECTS
// ==========================================

// Object #1
let student1 = new Student(
    "Mark Christian",
    22,
    "22-01365",
    "BSIT"
);

// Object #2
let student2 = new Student(
    "Juan Dela Cruz",
    20,
    "20-002",
    "BSIT"
);

// Object #3
let teacher1 = new Teacher(
    "Maria Santos",
    35,
    "Programming"
);

// Object #4
let graduateStudent1 = new GraduateStudent(
    "Pedro Reyes",
    24,
    "2022-015",
    "BSIT",
    "Artificial Intelligence in Education"
);


// ==========================================
// 9. CONDITIONAL #1
// ==========================================

if (student1.getAge() >= 18) {
    console.log(student1.name + " is an adult student.");
} else {
    console.log(student1.name + " is a minor student.");
}


// ==========================================
// 10. CONDITIONAL #2
// ==========================================

let average = student1.calculateAverage();

if (average >= passingGrade) {
    console.log("Student Status: PASSED");
} else {
    console.log("Student Status: FAILED");
}


// ==========================================
// 11. CONDITIONAL #3
// ==========================================

if (average >= 90) {
    console.log("Performance: Excellent");
} else if (average >= 80) {
    console.log("Performance: Very Good");
} else if (average >= 75) {
    console.log("Performance: Good");
} else {
    console.log("Performance: Needs Improvement");
}


// ==========================================
// 12. LOOP #1 - FOR LOOP
// ==========================================

console.log("\n===== SUBJECTS =====");

for (let i = 0; i < subjects.length; i++) {
    console.log((i + 1) + ". " + subjects[i]);
}


// ==========================================
// 13. LOOP #2 - FOR...OF LOOP
// ==========================================

console.log("\n===== GRADES =====");

for (let grade of grades) {

    if (grade >= passingGrade) {
        console.log(grade + " - Passed");
    } else {
        console.log(grade + " - Failed");
    }
}


// ==========================================
// 14. LOOP #3 - WHILE LOOP
// ==========================================

console.log("\n===== ACTIVITIES =====");

let i = 0;

while (i < activities.length) {
    console.log("Activity " + (i + 1) + ": " + activities[i]);

    i++;
}


// ==========================================
// 15. POLYMORPHISM
// ==========================================

console.log("\n===== POLYMORPHISM =====");

student1.displayInfo();

console.log("");

teacher1.displayInfo();

console.log("");

graduateStudent1.displayInfo();


// ==========================================
// 16. OTHER INFORMATION
// ==========================================

console.log("\n===== SCHOOL INFORMATION =====");

console.log("School: " + school.name);
console.log("Location: " + school.location);

console.log("Course: " + course.name);
console.log("Department: " + course.department);

console.log("School Year: " + schoolYear);

console.log("\nAverage Grade: " + average);