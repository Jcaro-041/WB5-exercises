let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

// 1. When does the PROG200 course start?
// 2. What is the title of the PROJ500 course?
// 3. What are the titles of the courses that cost $50 or less?
// 4. What classes meet in "Classroom 1"?

// 1 When does the PROG200 course start?
function whenCourseStart(currentCourse){
    return currentCourse.CourseId == "PROG200";
}
let courseStart = courses.find(whenCourseStart);

console.log(courseStart.StartDate);

// 2 What is the title of the PROJ500 course?
function findProgramTitle(currentTitle){
    return currentTitle.CourseId == "PROJ500";
}
let courseTitle = courses.find(findProgramTitle);

console.log(courseTitle.Title);

// 3 What are the titles of the courses that cost $50 or less?
function getTitles(courseTitles){
    
}
let Titles = courses.filter(getTitles);