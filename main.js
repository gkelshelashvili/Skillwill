// Task 1
function equalOrNot(a,b){
    if(a === b){
        return console.log("ტოლია")
    }
    else{
        console.log("არ არის ტოლი")
    }
}

equalOrNot(2,2)
equalOrNot(2,3)

// Task 2 
function fahrenhei_in_Celsius(fahrenheit) {
    if(typeof fahrenheit === 'number'){
        const inCelsius = (fahrenheit - 32) * 5/9
        return console.log(inCelsius,'ცელსიუსი')
    }
    else{
        return console.log(false, 'ცელსიუსი უნდა იყოს რიცხვით ფორმატში')
    }
    
}
fahrenhei_in_Celsius(60)
fahrenhei_in_Celsius('998')

// Task 3
function calculate2(a,b,method) {
    if(typeof a != 'number'){
        return console.log(false,'გთხოვთ ჩაწეროთ რიცხვი')
    }
    if(typeof b != 'number'){
        return console.log(false,'გთხოვთ ჩაწეროთ რიცხვი')
    }
    if(typeof method != 'string'){
        return console.log(false,'მიუთითე ვალიდური მეთოდი')
    }
    if(method === ''){
        return console.log(false,'მიუთითე მეთოდი')
    }
    else{
        if(method === 'მიმატება'){
            return console.log(a + b,'მიმატება')
        }
        if(method === 'გამოკლება'){
            return console.log(a - b,'გამოკლება')
        }
        
        if(method === 'გამრავლება'){
            return console.log(a * b,'გამრავლება')
        }
        if(method === 'გაყოფა'){
            return console.log(a / b,'გაყოფა')
        }
    }
}

calculate2(29,2, 'მიმატება')
calculate2(10,2, 'გამოკლება')
calculate2(10,2, 'გამრავლება')
calculate2(10,2, 'გაყოფა')