//VARIABLES
let studentName = "Mark Christian Sabanao";
let age = 22;
let section = "BSIT 3A";
let passingGrade = 75;

//ARRAYS
let subjects = ["Programming", "Database", "Networking", "Web Development"];
let grades = [90, 82, 74, 88];
let activities = ["Quiz", "Project", "Assignment", "Exam"];

// CONDITIONAL 
if (age >= 18) {
    console.log(studentName + " is an adult student.");
} else {
    console.log(studentName + " is a minor student.");
}

let total = 0;

if (grades.length > 0) {
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
}

let average = total / grades.length;

if (average >= passingGrade) {
    console.log("Overall Result: PASSED");
} else {
    console.log("Overall Result: FAILED");
}


console.log("\nSUBJECT GRADES:");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i] + ": " + grades[i]);
}

console.log("\nACTIVITIES:");

let count = 0;

while (count < activities.length) {
    console.log("Activity " + (count + 1) + ": " + activities[count]);
    count++;
}

console.log("\nGRADE CHECK:");

for (let grade of grades) {

    if (grade >= 90) {
        console.log(grade + " - Excellent");
    } else if (grade >= 75) {
        console.log(grade + " - Passed");
    } else {
        console.log(grade + " - Failed");
    }
}

if (average >= 90) {
    console.log("Performance: Excellent");
} else if (average >= 80) {
    console.log("Performance: Very Good");
} else if (average >= 75) {
    console.log("Performance: Good");
} else {
    console.log("Performance: Needs Improvement");
}

console.log("\n===== STUDENT SUMMARY =====");
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Section: " + section);
console.log("Average Grade: " + average);