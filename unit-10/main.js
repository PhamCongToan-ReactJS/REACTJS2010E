// Exercise 1: Print out the multiplication table of a number
function getMultiplyTable(number) {
  try {
    if (number == "") {
      alert("Bạn chưa nhập giá trị");
    } else if (isNaN(number)) {
      alert("Giá trị bạn nhập không phải là một số");
    } else if (number < 1 || number > 9) {
      alert("Giá trị vừa nhập không thỏa mãn 1 < n <= 9 ");
    } else {
      document.write("In bảng nhân: " + number);
      document.write("<br><br>");

      for (let i = 1; i <= 9; i++) {
        document.write(number + " x " + i + " = " + number * i);
        document.write("<br>");
      }
    }
  } catch (ex) {
    alert(ex);
  }
}

// Exercise 2: print out even positive integers
function getEvenIntegers(number) {
  try {
    if (number == "") {
      alert("Bạn chưa nhập giá trị!");
    } else if (isNaN(number)) {
      alert("Giá trị vừa nhập không phải là số");
    } else if (number < 0 || number > 30) {
      alert("Giá trị vừa nhập không thỏa mãn 1 <= n <= 30");
    } else if (number === 1) {
      document.write("Các số chẵn từ 1 --> " + number + " là ");
      document.write("Không có số chẵn");
      document.write("<br>");
    } else {
      document.write("Các số chẵn từ 1 --> " + number + " là ");
      for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
          document.write(i);
          document.write("\t");
        }
      }
      document.write("<br><br>");
    }
  } catch (error) {
    alert(error);
  }
}

// Exercise 3: Calculate the sum of a positive integer
function getSumIntegers(number) {
  try {
    if (number == "") {
      alert("Bạn chưa nhập giá trị!");
    } else if (isNaN(number)) {
      alert("Giá trị vừa nhập không phải là số");
    } else if (number < 0 || number > 30) {
      alert("Giá trị vừa nhập không thỏa mãn 1 <= n <= 30");
    } else {
      document.write("Tổng các số từ 1 --> " + number + " là ");
      let sum = 0;
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      document.write(sum);
      document.write("<br><br>");
    }
  } catch (error) {
    alert(error);
  }
}

// Exercise 4: Calculate the factorial of a number
function getFactorial(number) {
  try {
    if (number == "") {
      alert("Bạn chưa nhập giá trị!");
    } else if (isNaN(number)) {
      alert("Giá trị vừa nhập không phải là số");
    } else if (number < 0 || number > 30) {
      alert("Giá trị vừa nhập không thỏa mãn 1 <= n <= 30");
    } else {
      document.write("Giai thừa của " + number + " là ");
      let factorial = 1;
      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }
      document.write(factorial);
      document.write("<br><br>");
    }
  } catch (error) {
    alert(error);
  }
}

// Exercise 5: Count even numbers in the array
function getCountEvenNumbers(params) {
  try {
    if (params.length == 0) {
      alert("Mảng rỗng");
    } else {
      let count = 0;
      for (let i = 0; i < params.length; i++) {
        if (!(params[i] % 2)) {
          count++;
        }
      }
      return count;
    }
  } catch (error) {
    alert(error);
  }
}

// Exercise 6: Delete duplicate words in array
function getUniqueElements(array) {
  try {
    if (array.length == 0) {
      alert("Mảng rỗng");
    } else {
      document.write("Mảng vừa nhập :" + array.join(" - "));
      document.write("<br>");
      const uniqueSet = new Set(array);
      const backToArray = [...uniqueSet];
      document.write(
        "Mảng sau khi xóa các chữ cái trùng lặp :" + backToArray.join(" - ")
      );
    }
  } catch (error) {
    alert(error);
  }
}

// Exercise 7: Join array
const studentNames = [
  { id: 1, name: "Nguyễn Thị Tèo" },
  { id: 2, name: "Phạm Văn Bưởi" },
  { id: 3, name: "Hoàng Văn Nam" },
  { id: 4, name: "Vũ Ngọc Duy" },
  { id: 5, name: "Nguyễn Minh Nhật" },
  { id: 6, name: "Phí Duy Quân" },
  { id: 7, name: "Trần Minh Minh" },
];
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 },
];

function getStudentArray(studentNames, studentScores) {
  studentNames.forEach(function studentName() {
    studentScores.forEach(function studentScore() {
      if (studentName.id === studentScore.id) {
        studentName.score = studentScore.score;
      }
    });
  });
  console.log(studentNames);
}

// Exercise 8: Find the students with the highest and lowest scores
const students = [
  { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
  { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
  { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
  { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
  { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
  { id: 6, name: "Phí Duy Quân", score: 9.6 },
  { id: 7, name: "Trần Minh Minh", score: 6.1 },
];

function getStudentRating(students) {
  let minScore = students[0].score;
  let maxScore = students[0].score;
  const theBad = [];
  const theBest = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score < minScore) {
      minScore = students[i].score;
    }
    if (students[i].score > maxScore) {
      maxScore = students[i].score;
    }
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i].score == minScore) {
      theBad.push(students[i]);
    }
    if (students[i].score == maxScore) {
      theBest.push(students[i]);
    }
  }
  return { theBest, theBad };
}
