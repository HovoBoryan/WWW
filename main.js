let button = document.getElementById("finish");
button.addEventListener("click", fun);

function fun() {
    let result = 0;

    let answ1 = document.getElementById("Q1").value;
    if(answ1 === "23") {
        result++;
    }
    let answ2 = document.getElementById("Q2").value;
    if(answ2 === "32") {
        result++;
    }
    let answ3 = document.getElementById("Q3").value;
    if(answ3 === "625") {
        result++;
    }
    let answ4 = document.getElementById("Q4").value;
    if(answ4 === "10000") {
        result++;
    }
    let answ5 = document.getElementById("Q5").value;
    if(answ5 === "1000") {
        result++;
    }
    let answ6 = document.getElementById("Q6").value;
    if(answ6 === "80") {
        result++;
    }
    if(result === 6) {
        alert("Excelent you have " + result + " correct answers:")
    } else {
        alert("your correct answers are " + result)
    }
   
}