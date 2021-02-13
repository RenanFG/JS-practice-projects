//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(q){
    const btn = q.querySelector('.question-btn');
    //console.log(btn);
    btn.addEventListener('click', () =>{
        questions.forEach(function (q2){
            if(q2 !== q){  
                q2.classList.remove('show-text');
            }
        })
        q.classList.toggle('show-text');
    })
})


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });
