let time=document.getElementById("time");


function updateClock(){
    let h= new Date().getHours()
    let m=  new Date().getMinutes()
    time.textContent=`${h}:${m}`;
    setTimeout(()=>{
        updateClock()
    },1000)
  
}

// setTimeout(()=>{
//     updateClock()
// },1000)
updateClock()

