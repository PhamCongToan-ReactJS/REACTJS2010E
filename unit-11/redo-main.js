// Exercise 1: Repeats the elements of the array
// Solution 1: use 'push'
const getRepeatingArray = (character, number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.push(character);
  }
  return result;
};

// Solution 2: use 'splice'
const showRepeatingArray = (character, number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.splice(i, 0, character);
  }
  return result;
};

// Exercise 2: Reverse array (don't use reverse)
const getReverseArray = arr => {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// Exercise 3: Delete the wrong element (null, undefined, 0, ' ', false)
const getTrueValues = arr => {
  return arr.filter(Boolean);
};

// Exercise 4:
const converArraytToObject = data => {
  const obj = {};
  function array(arr) {
    obj[arr[0]] = arr[1];
  }
  data.forEach(array);
  return obj;
};

// Exercise 5: Sort the arrays in ascending order
const getArraySortUpAscending = arr => {
  const newArr = arr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
};

// Exercise 6: Checks the input is object

/* const isObject = (data) => {
  return typeof data === "object" ? true : false;
  !!data && data.constructor === Object;
};
 */
const isObject = value => !!value && value.constructor === Object;

// Exercise 7:

const getObject = (object, array) => {
  const newObject = {};
  for (let key in object) {
    newObject[key] = object[key];
  }

  for (let key in newObject) {
    array.forEach((valueArr) => {
      if (key === valueArr) {
        delete newObject[key];
      }
    });
  }
  return newObject;
};

// Exercise 8: Delete element 2,3  if there is more than 5 element
const getArrDelete = arr => {
  arr.length > 5 ? arr.splice(2, 2) : arr;
  return arr;
};

// Exercise 9:
const students = [
  { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
  { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
  { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
  { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
  { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
  { id: 6, name: "Phí Duy Quân", score: 9.6 },
  { id: 7, name: "Trần Minh Minh", score: 6.1 }
];

const getCheckArrayStudents = students => {
  const arrStudent = [];

  const arrayStudent = student => {
    const { name, score } = student;

    if (score <= 5 || name.indexOf("Duy") > 0) {
      arrStudent.push("Fail");
    } else {
      arrStudent.push("Pass");
    }
  };
  students.forEach(arrayStudent);
  return arrStudent;
};

// Exercise 10:
const findStudents = students => {
  const newArr = [];

  const listStudent = student => {
    const score = String(student.score);
    const [firstNum, lastNum] = score.split(".");
    const total = Number(firstNum) + Number(lastNum);
    if (total % 10 > 5) {
      newArr.push(student);
    }
  };
  students.forEach(listStudent);
  return newArr;
};
