function courseInfo(obj = {}) {
  //default object
  let defObj = {
    courseName: "ES6",
    courseDuration: "3 days",
    courseOwner: "JavaScript",
  };
  //check if passed object contains any invalid properties
  let invalidProps = Object.keys(obj).filter((key) => {
    return !Object.keys(defObj).includes(key); // Object.keys(defObj) ==> ['courseName', 'courseDuration', 'courseOwner']
  });
  if (invalidProps.length)
    throw `passed object includes invalid properties: ${invalidProps.join(
      ", "
    )}`;
  // make a new object that contains passed object properties otherwise default ones in defObj
  let allParameters = Object.assign(defObj, obj);
  for (const key in allParameters) {
    console.log(`${key} is: ${allParameters[key]}`);
  }
}

// Test Cases
// Example 1: Pass all properties
courseInfo({
  courseName: "React",
  courseDuration: "5 days",
  courseOwner: "Facebook",
});

// Example 2: Pass only some properties
courseInfo({
  courseName: "Node.js",
});

// Example 3: Pass no properties
courseInfo({});

// Example 4: Pass additional properties
courseInfo({
  courseName: "Vue",
  courseDuration: "4 days",
  courseOwner: "You",
  courseLevel: "Intermediate",
});
