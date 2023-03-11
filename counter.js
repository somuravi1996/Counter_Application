let counterValue = document.getElementById("counterValue")
console.log(counterValue)



function onDecrease(){
    let prevValue=counterValue.textContent
    let updatedValue = (parseInt(prevValue)-1)
    counterValue.textContent = updatedValue
    if(updatedValue<0){
        counterValue.style.color="red"
    }
    else if(updatedValue>0){
        counterValue.style.color="green"

    }else{
        counterValue.style.color="black"

    }
   
}

function onIncrease(){
    let prevValue=counterValue.textContent
    let updatedValue = (parseInt(prevValue)+1)
    counterValue.textContent = updatedValue
    if(updatedValue<0){
        counterValue.style.color="red"
    }
    else if(updatedValue>0){
        counterValue.style.color="green"

    }else{
        counterValue.style.color="black"

    }

}
function onReset(){
    let updatedValue = "0"
    counterValue.textContent = updatedValue
    counterValue.style.color="black"

}