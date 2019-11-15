const inputText = document.querySelector("#inputText");
const lengthButton = document.querySelector("#lengthButton");
const substringButton = document.querySelector("#substringButton");
const resultOutput = document.querySelector("#resultOutput");

let register = false;
function changeRegister() {
  const chbox = document.querySelector("#register");
  register = chbox.checked;
}

const filterByLenght = ArrayOur => {
  const number = inputText.value;
  if (number % 1 !== 0) {
    alert("Please enter an integer number");
    return;
  }
  resultOutput.value = "";
  const result = ArrayOur.filter(word => word.length > number);
  resultOutput.value = result;
};

const filterByStr = ArrayOur => {
  let string = inputText.value;
  let result = "";
  resultOutput.value = result;
  if (register === false) {
    string = string.toLowerCase();
    const ArrayOurWith = ArrayOur.map(word => word.toLocaleLowerCase());
    result = ArrayOurWith.filter(word => word.indexOf(string) != -1);
  } else if (register === true) {
    result = ArrayOur.filter(word => word.indexOf(string) != -1);
  }
  resultOutput.value = result;
};

const url = "https://www.mrsoft.by/data.json";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const getResponse = async () => {
  try {
    const response = await fetch(proxyurl + url);
    const info = await response.json();
    const dataArray = info.data;

    lengthButton.addEventListener("click", () => filterByLenght(dataArray));
    substringButton.addEventListener("click", () => filterByStr(dataArray));
  } catch (e) {
    console.error(e);
  }
};

getResponse();
