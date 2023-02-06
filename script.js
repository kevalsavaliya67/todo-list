const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
var inputValue = document.querySelector(".input-item");
addBtn.disabled = true;
var list = document.getElementsByTagName("li");
console.log(list);
var addFun = function () {
  var val = document.createElement("li");
  var inputValue = document.querySelector(".input-item").value;
  var text = document.createTextNode(inputValue);
  val.appendChild(text);

  if (inputValue === "") {
    alert("Please Enter Somthing...!~");
  } else {
    document.querySelector(".list").appendChild(val);
  }

  document.querySelector(".input-item").value = "";
  addBtn.disabled = true;
  var delBtn = document.createElement("button");
  delBtn.append("X");
  val.appendChild(delBtn);
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      this.remove();
    };
  }
  resetBtn.addEventListener("click", function () {
    for (let i = 0; i < list.length; i++) {
      list[i].remove();
    }
  });
};

addBtn.addEventListener("click", addFun);
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Enter") {
    addFun();
  }
});

inputValue.addEventListener("keyup", function () {
  if (inputValue.value === "" || inputValue === " ") {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
});
