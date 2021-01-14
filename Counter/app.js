let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

function changeColor(count){
    if(count == 0){
        value.style.color = "var(--clr-grey-1)";
    }
    else if(count > 0){
        value.style.color = "green";
    } else {
        value.style.color = "red";
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('increase')){
            count ++;
        }
        else{
            count= 0;
        }
        changeColor(count);
        value.textContent= count;
    });
});

