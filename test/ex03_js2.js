let data = document.getElementById("num")

const plus = () => {
    data.innerText = Number(data.innerText) + 1
}

const minus = () => {
    if (Number(data.innerText)>0) {
        data.innerText = Number(data.innerText) - 1
    }else {
        alert("값이 너무 작습니다.")
    }
}