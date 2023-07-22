const calculate=()=>{
    const screen = document.querySelector(".screen")
    const buttons = document.querySelectorAll(".btn")
    const buttonClear = document.querySelector(".btn-clear")
    const buttonEqual = document.querySelector(".btn-equal")
    
    buttons.forEach((e)=>{
        console.log(e)
        e.addEventListener('click',(event)=>{
            if(event.target.dataset.num !=undefined){
                let value = event.target.dataset.num;
                screen.value+=value;
            }
        })
    })

    buttonEqual.addEventListener('click',(event)=>{
        console.log(screen.value)
        if(screen.value == 'undefined'){
            screen.value = ""
        }
        else{
            calculation= eval(screen.value)
            screen.value = calculation
        }
    })
    buttonClear.addEventListener('click',(event)=>{
        // console.log(screen.value)
        screen.value = ""
    })
}
calculate()
