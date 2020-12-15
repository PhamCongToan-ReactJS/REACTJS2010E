// exercise 1: Solution 1
function getRepeatingArray(character, number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.push(character);
  }
  console.log(result);
}

// exercise 1: Solution2
function showRepeatingArray(character, number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.splice(i, 0, character);
  }
  return arr;
}

// exercise 2: reverse array
function getReverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// exercise 3: delete false values
function getTrueValues(arr) {
  console.log(arr.filter(Boolean));
}

// exercise 4:
function convertToObject(data) {
  const Obj = {};
  function array(arr) {
    Obj[arr[0]] = arr[1];
  }
  data.forEach(array);
  return Obj;
}

// exercise 5: Sort the arrays in ascending order
function getArraySortUpAscending(arr) {
  //const arrSort = arr.sort();
  const arrSort = arr.sort(function (a, b) {
    return a - b;
  });
  return arrSort;
}

// exercise 6:
function isObject(obj) {
  if (typeof obj !== "object" && Array.isArray(obj)) {
    return true;
  }
  return false;
}

// exercise 7:
/* function getObject(obj) {
  var input = "b";
  for (const [key, value] of Object.entries(obj)) {
    if (input == key) {
      console.log(`${key}: ${value}`);
    }
  }
} */

// exercise 8:
function getArrDelete(array) {
  if (array.length >= 5) {
    array.splice(2, 2);
    return array;
  } else {
    return array;
  }
}

// exercise 9:
const students = [
  { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
  { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
  { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
  { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
  { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
  { id: 6, name: "Phí Duy Quân", score: 9.6 },
  { id: 7, name: "Trần Minh Minh", score: 6.1 },
];

function getCheckArrayStudents(students) {
  const arrStudent = [];
  const arrayStudent = (student) => {
    const { name, score } = student;
    if (score <= 5 || name.indexOf("Duy") > 0) {
      arrStudent.push("Fail");
    } else {
      arrStudent.push("Pass");
    }
  };
  students.forEach(arrayStudent);
  return arrStudent;
}

// exercise 10:
