const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e)=> {
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide art
        articles.forEach(function(art){
            art.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

// event bubble, clicking on a children that has a parent with event, effects them