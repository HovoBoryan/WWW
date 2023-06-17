let button = document.getElementById("finish");

button.addEventListener("click", Test);
function Test() {
    let result = 0;
    let a1 = document.getElementById("q1").value;
    if(a1 ==="30") {
        result++;
    }
    let a2 = document.getElementById("q2").value;
    if(a2 ==="2") {
        result++;
    }
    let a3 = document.getElementById("q3").value;
    if(a3 ==="200") {
        result++;
    }
    let a4 = document.getElementById("q4").value;
    if(a4 ==="10") {
        result++;
    }
    let a5 = document.getElementById("q5").value;
    if(a5 ==="120") {
        result++;
    }
    alert(result);
}