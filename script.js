let button = document.querySelector(".button");
let fieldSearch = document.querySelector(".field_search");

let friends = [
  {
    name: "Артем",
    age: 23,
  },
  {
    name: "Кристина",
    age: 22,
  },
  {
    name: "Вика",
    age: 24,
  },
  {
    name: "Миха",
    age: 24,
  },
];

function superSum(a, b) {
  return alert(parseInt(a) + parseInt(b));
}

let randomNumberArray = [1e-3, 100, 200, 400, 1e4];

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  // 3 и 4 задание
  if (fieldSearch.value !== "Google") {
    alert(fieldSearch.value);
  } else alert("Yandex круче. Но это не точно");

  // 5 задание
  alert(friends[0]["name"]);

  // 6 задание
  if (fieldSearch.value.includes("superSum")) {
    superSum(fieldSearch.value[9], fieldSearch.value[11]);
  }

  //   10 задание
  if (fieldSearch.value.includes("lag")) {
    function sayLag() {
      alert(`задержка ${fieldSearch.value[4]} сек`);
    }
    setTimeout(sayLag, fieldSearch.value[4] * 1000);
  }
});

// 7 задание
function minMax(array) {
  let min = array[0];
  let max = min;
  for (i = 1; i < array.length; ++i) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  }
  return [min, max].join(" и ");
}

alert(minMax(randomNumberArray));

// 8 задание
let a = "XXX";
let b = "YYY";

let intermediateA = a;
a = b;
b = intermediateA;
alert(a);
alert(b);

// 9 задание
function findMax(array) {
  return Math.max.apply(null, array);
}

alert(findMax(randomNumberArray));
