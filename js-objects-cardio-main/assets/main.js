// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const course = {
  name: `Web Design`,
  period: 3,
  focus: `computers`,
  students: [`Michael`, `Michael`, `Sam`, `Sofia`, `Others`],
  teacher: `Mr. Domingeuz`
};
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`${course.students[0]} is the best and ${course.teacher} can't stand him.`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const course2 = {
  name: `Apush`,
  period: 4,
  focus: `history`,
  students: [`Michael`, `Arthur`, `Deven`, `Temple`, `Others`],
  teacher: `Dr. Nelson`
};
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function school(course) {
  const when = `${course.name} is during ${course.period}th period.`;
  console.log(when);
  return when;
};
school(course2);

// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function modify(course, course2) {
  const change =
};

// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
