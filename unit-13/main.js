// Exercise 1:
let date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const currentTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`

const getTimeOut = () => {
  console.log(`Hover lúc: ${currentTime}`)
};

const getTimeIn = () => {
  console.log(`Out hover lúc: ${currentTime}`)
};

// Exercise 2:
const checkAccount = () => {
  const regex = /([a-z0-9_]|_(?!_))$/g;
  const value = document.getElementById('account').value;
  if (!regex.test(value)) {
    document.getElementById('account').style.borderColor = 'red';
    alert('Yêu cầu nhập các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới');
  } else {
    document.getElementById('account').style.borderColor = 'green';
  }
};

// Exercise 3:
const checkMonney = () => {
  const value = document.getElementById('monney').value;

  if (isNaN(value)) {
    document.getElementById('monney').style.borderColor = 'red';
    alert('Yêu cầu nhập số từ 0 - 9!');
  } else {
    document.getElementById('monney').style.borderColor = 'green';
    if (value > 1000) {
      alert('Yêu cầu nhập giá tiền nhỏ hơn 1000');
      document.getElementById('monney').style.borderColor = 'red';
    }
    if (value < 0) {
      alert('Yêu cầu nhập giá tiền lớn hơn 0');
      document.getElementById('monney').style.borderColor = 'red';
    }
  }
};

// Exercise 4:

// Exercise 5:
const showHighLightValue = () => {
  console.log(window.getSelection().toString())
}

// Exercise 6: Choose fruit
const validateSelectBox = (obj) => {
  var options = obj.children;
  var html = '';
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      html += '<p>' + options[i].value + '</p>';
      console.log('Bạn vừa chọn ' + options[i].value);
    }
  }
  document.getElementById('result').innerHTML = html;
}
