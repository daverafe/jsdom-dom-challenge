document.addEventListener("DOMContentLoaded", () => {
    // let countInt = setInterval(function(){
    //     let count = document.getElementById('counter')
    //     count.innerHTML = parseInt(count.innerHTML) + 1
    // }, 1000)

   
   
   
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const pause = document.getElementById('pause')

    plus.addEventListener('click', handlePlus)
    minus.addEventListener('click', handleMinus)
    pause.addEventListener('click', handlePause)

    function handlePlus() {
        let count = document.getElementById('counter')
        count.innerHTML = parseInt(count.innerHTML) + 1
   }

   function handleMinus() {
        let count = document.getElementById('counter')
        count.innerHTML = parseInt(count.innerHTML) - 1
   }
   
   function handlePause() {
       if (pause.innerTEXT == "pause") {
           debugger;
        clearInterval(countInt)
        pause.innerTEXT = "resume"
       } else if (pause.innerTEXT == "resume") {
        setInterval(function(){
            let count = document.getElementById('counter')
            count.innerHTML = parseInt(count.innerHTML) + 1
        }, 1000)
        pause.innerTEXT = "pause"
       }
   }
    
    
    
    const commentForm = document.getElementById('comment-form')
    const commentList = document.getElementById('list')
  
    commentForm.addEventListener('submit', addComments)
  
    function addComments(event) {
      event.preventDefault() 
      const comment = document.getElementById('comment-input').value 
      commentList.innerHTML += `
        ${comment}<br>
      `
    }
  });