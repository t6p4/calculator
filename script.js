let result = document.querySelector("p");
let number = document.querySelectorAll(".number")
let operator = document.querySelectorAll(".operator")
let equals = document.querySelector(".equals")
let clear = document.querySelectorAll("clear")

result.textContent = 0

let var1 = 0;
let var2 = 0;
let init = false
let op = "";



number.forEach((n) => {
    n.addEventListener("click", (e) => {
        if(!init) {
           result.textContent = ""; 
            result.textContent += Number(e.target.textContent)
            init = true
        }   else {
            result.textContent += Number(e.target.textContent)
        }  
    })
})

operator.forEach((n) => {
    n.addEventListener("click", (e) => {
        if (var1 && !var2 && typeof result.textContent == "string" && !init) {
            op = e.target.innerText
            return;
        }
        if (!var1) {
            var1 = Number(result.textContent);
            op = e.target.innerText
            
            result.textContent = "";
        } else {
            var2 = Number(result.textContent)
            result.textContent = ""
            calculate(op);
            op = e.target.innerText

        }
    })
})

equals.addEventListener("click", (e) => {
    if (!var1) {
        return
    } else {
        var2 = Number(result.textContent)
        calculate(op)
    }
})

function calculate(op, ...calc) {
    calc.pop()
    calc.push(var1, var2)
    switch (op) {
        case `+`:
            result.textContent = calc.reduce((a, b) => a + b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break;
        case `-`:
            result.textContent = calc.reduce((a, b) => a - b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break
        case `*`:
            result.textContent = calc.reduce((a, b) => a * b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break
        case `/`:
            result.textContent = calc.reduce((a, b) => a / b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break
        case `**`:
            result.textContent = calc.reduce((a, b) => a ** b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break
        case `%`:
            result.textContent = calc.reduce((a, b) => a % b )
            var1 = Number(result.textContent)
            var2 = 0;
            init = false
            break
    }


    
}