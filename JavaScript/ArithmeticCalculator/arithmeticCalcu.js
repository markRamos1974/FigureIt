

const basicArithmeticButton = document.querySelector(".basic-arithmetic-button")
const arithmeticCalculator = document.querySelector(".arithmetic-calculator")
const backArrow = document.querySelector(".back-arrow-button")

basicArithmeticButton.addEventListener("click", () => {
   arithmeticCalculator.classList.add("animateHeight");
   arithmeticCalculator.classList.remove("closeHeight")
   
})

backArrow.addEventListener("click", () => {
    arithmeticCalculator.classList.remove("animateHeight")
    arithmeticCalculator.classList.add("closeHeight")
})




const historyButtomMobile = document.querySelector(".history-button-mobile")
const historyButtonReturnMobile = document.querySelector(".history-return-button")
const historySection = document.querySelector(".right-side")

historyButtomMobile.addEventListener("click", () => {
    historySection.classList.toggle("openHistory")
})

historyButtonReturnMobile.addEventListener("click", () => {
    historySection.classList.toggle("openHistory")
})




const buttons = document.querySelectorAll(".arithmetic-buttons > button")
for(let i = 0; i < buttons.length; i++){
    window.addEventListener("resize", () => {
        if(window.innerWidth <= 920){
            buttons[i].addEventListener("mouseup", () => {
                buttons[i].style.backgroundColor = "transparent"
            })
            buttons[i].addEventListener("mousedown", () => {
                buttons[i].style.backgroundColor = "rgba(233, 238, 235, 0.1)"
            })
    
        }
    })
    
    if(window.innerWidth <= 920){
        buttons[i].addEventListener("mouseup", () => {
            buttons[i].style.backgroundColor = "transparent"
        })
        buttons[i].addEventListener("mousedown", () => {
            buttons[i].style.backgroundColor = "rgba(233, 238, 235, 0.1)"
        })

    }
   
}









const firstOperand = document.querySelector(".first-operand")
const secondOperand = document.querySelector(".second-operand")
const operation = document.querySelector(".operation")
const arithmeticOperation = document.querySelectorAll(".arithmetic-operation")

const numberButtons = document.querySelectorAll(".number-button")
const operationButton = document.querySelectorAll(".operation-button")

const historyContainer = document.querySelector(".history-content")
class Calculator {


    constructor() {
        for(let i = 0; i < numberButtons.length; i++){
            numberButtons[i].addEventListener("click", () => {
                this.numberInput(numberButtons[i])
            })
        }
        
        for(let i = 0; i < operationButton.length; i++){
     
            
            operationButton[i].addEventListener("click", () => {
                if (operationButton[i].textContent === "C") this.clear()
                else if (operationButton[i].textContent === "%") this.handlePercentage()
                else if (operationButton[i].textContent === "") this.deleteLastInput()
                else if (operationButton[i].textContent === "=") this.handleResult()
                else {
                    this.handleArithmeticButtons(operationButton[i])
                }
            })
        }
    }
    

    numberInput(element) {
        const currentFirstOperandValue = firstOperand.textContent
        let formattedValue = currentFirstOperandValue;
        const elementValue = element.textContent

        if(firstOperand.textContent.length >= 14){
            firstOperand.style.fontSize = "3em"
        }  
        else {
            firstOperand.style.fontSize = "6em"
        }


        if(elementValue === ".") {
            if(currentFirstOperandValue.includes(".")) return
            else if (currentFirstOperandValue.length === 0) formattedValue += "0."
            else formattedValue = currentFirstOperandValue + elementValue
        }

       

        else {
            formattedValue = currentFirstOperandValue + elementValue
        }   

       
        firstOperand.textContent =  this.formatNumbers(formattedValue)

    }
 
    formatNumbers(text) {
        
        let currentPosition = 0
        let format = ""
        let data = text.split(".")
        let textArray = data[0]





        let combinedReversedArray = []
        for(let i = textArray.length - 1; i != -1; i--){
            if(textArray[i] === ",") continue
            else {
                combinedReversedArray.push(textArray[i])
            }
        }

 
        for(let i = 0; i < combinedReversedArray.length; i++){
            if(currentPosition % 3 == 0 && currentPosition != 0){
                format = combinedReversedArray[i] + "," + format
                currentPosition++
            
            }

            else {
                format = combinedReversedArray[i] + format
                currentPosition++
            }
        }

        
        if(data[1] === undefined) return format
        else  return format += "." + data[1]


    }


    clear() {
       
        firstOperand.textContent = ""
        secondOperand.textContent = ""
        operation.textContent = ""

    }
    handlePercentage() {
        const currentFirstOperandValue = firstOperand.textContent


        if(currentFirstOperandValue.includes("%")) return
        else if(currentFirstOperandValue.length == 0) return
        else {
            firstOperand.textContent = currentFirstOperandValue + "%"
        }
    }
    deleteLastInput(){
        const currentFirstOperandValue = firstOperand.textContent
        const isSecondOperandNotNull = secondOperand.textContent.length != 0 && operation.textContent.length !== "" && firstOperand.textContent == ""

        if(firstOperand.textContent.length >= 14){
            firstOperand.style.fontSize = "3em"
        }  
        else {
            firstOperand.style.fontSize = "6em"
        }

        if(isSecondOperandNotNull) {
      
            firstOperand.textContent = secondOperand.textContent
            secondOperand.textContent = ""
            operation.textContent = ""
           
            
        }

        else {
            const updatedvalue = currentFirstOperandValue.slice(0, -1)
            firstOperand.textContent = updatedvalue
        }
        
      
    }

    handleArithmeticButtons(element){
        const elementValue = element.textContent
        const currentFirstOperandValue = firstOperand.textContent
        const currentSecondOperandValue = secondOperand.textContent
        const currentOperationValue = operation.textContent
     
        let isSecondOperandIsNotNull = currentFirstOperandValue.length > 0 && currentOperationValue !== ""
        let noInput = !isSecondOperandIsNotNull && currentFirstOperandValue.length == 0
        let isInputValid = currentFirstOperandValue.length != 0 && currentSecondOperandValue.length != 0

        if (elementValue === "-"){
            if(currentFirstOperandValue.length === 0){
                firstOperand.textContent = elementValue
            }
            
        }

        if (isInputValid){
            secondOperand.textContent = this.getResult()
            firstOperand.textContent = ""
        }
        else if(isSecondOperandIsNotNull) return
        else if (noInput) return
        else {
            secondOperand.textContent = firstOperand.textContent
            operation.textContent = elementValue
            firstOperand.textContent = ""
        }
         
        
    }

    getResult(){
        const currentOperationValue = operation.textContent
        const currentFirstOperandValue = firstOperand.textContent
        const data = this.getInput()



        if(currentFirstOperandValue.includes("%")) return data[0] * data[1]
        else {
            switch(currentOperationValue) {
                case "+":
                    return data[0] + data[1]
                case "-":
                    return data[0] - data[1]
                case "x":
                    return data[0] * data[1]
                case "÷":
                    return data[0] / data[1]
            }
        }

    }

    filterInput(text) {
        let filtered = ""
        for(let i = 0; i < text.length; i++){
            if(text[i] === ",") filtered += ""
            else filtered += text[i]
        }

        return filtered
    }
    getInput() {
        let currentFirstOperandValue =  this.filterInput(firstOperand.textContent)
        let currentSecondOperandValue =  this.filterInput(secondOperand.textContent)
        
        

        if(currentFirstOperandValue.includes("%")){
            const values = currentFirstOperandValue.split("%")

            const firstNumber = parseFloat(values[0]) / 100
            const secondNumber = parseFloat(values[1])

            return [firstNumber, secondNumber]

        }
        else {
            if(currentFirstOperandValue === "") currentFirstOperandValue = "0"
            const firstNumber = parseFloat(currentSecondOperandValue)
            const secondNumber =parseFloat(currentFirstOperandValue)

            return [firstNumber, secondNumber]
        }

        
    }

    handleResult(){
        const data = this.getInput()
        const result = this.formatNumbers(this.getResult().toString())
        const currentOperation = operation.textContent
        firstOperand.textContent = result
        let operationtext


        if( currentOperation == "")operationtext = document.createTextNode("x")
        else operationtext = document.createTextNode(operation.textContent)
    

        let firstNumberText = document.createTextNode(data[1])
        let secondNumberText = document.createTextNode(data[0])
        
        let resultText = document.createTextNode(result)
        let equalsText = document.createTextNode("=")

        let firstNumber= document.createElement("p")
        let secondNumber= document.createElement("p")
        let resultPlaceholder = document.createElement("p")
        let operationPlaceHolder = document.createElement("p")
        let equals = document.createElement("p")

        firstNumber.appendChild(firstNumberText)
        secondNumber.appendChild(secondNumberText)
        operationPlaceHolder.appendChild(operationtext)
        resultPlaceholder.appendChild(resultText)
        equals.appendChild(equalsText)


        let resultItem = document.createElement("div")
        let operandContainer = document.createElement("div")
        let resultContainer = document.createElement("div")

        operandContainer.appendChild(secondNumber)
        operandContainer.appendChild(operationPlaceHolder)
        operandContainer.appendChild(firstNumber)
        operandContainer.classList.add("history-operand-container")

        resultContainer.appendChild(equals)
        resultContainer.appendChild(resultPlaceholder)
        resultContainer.classList.add("history-result-container")

        resultItem.appendChild(operandContainer)
        resultItem.appendChild(resultContainer)
        resultItem.classList.add("history-result-item")

        historyContainer.appendChild(resultItem)

        secondOperand.textContent = ""
        operation.textContent = ""

    }
    
}

const calculator = new Calculator();