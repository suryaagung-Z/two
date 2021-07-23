//=================================================WAIT
const swipeContainer = document.querySelector('.swiper-container');
const bubble = document.querySelector('#bubble');
const wait = document.querySelector('#wait');
const countWait = document.querySelector('#countWait');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
window.addEventListener("load", ()=>{
    let x = 0;
    function innerWait(){
        if( x > 100 ){
            return false;
        }else if(x === 100){
            bubble.style.opacity = "1";
            left.style.opacity = "1";
            right.style.opacity = "1";
            ok.addEventListener("click", ()=>{
                wait.style.display = "none";
                //=================================================SWIPE
                const swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    keyboard: {
                        enabled: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
                //=================================================ANIMATION
                const star = bodymovin.loadAnimation({
                    container : document.getElementById('anim'),
                    renderer : 'svg',
                    loop : false,
                    autoplay : true,
                    path : 'anim.json'
                });

                const relaxed = bodymovin.loadAnimation({
                    container : document.getElementById('anim2'),
                    renderer : 'svg',
                    loop : true,
                    autoplay : true,
                    path : 'anim2.json'
                });

                const helloBoy = bodymovin.loadAnimation({
                    container : document.getElementById('helloBoy'),
                    renderer : 'svg',
                    loop : true,
                    autoplay : true,
                    path : 'hello.json'
                });
            });
            //================================================= 0-576
            wait.classList.add("waitNone");
            
        }

        countWait.innerHTML = x+"%";

        x++;
        return x;
    }
    setInterval(innerWait, 20);
});



//=================================================ABILITIES
const hoverAll = document.querySelectorAll('#hover');
const replaceAll = document.querySelectorAll('#ganti');

for( let hover = 0; hover<hoverAll.length; hover++ ){
    hoverAll[hover].addEventListener('mouseover', ()=> {
        let count = 0;
        function out(){
            if( count > 100 ){
                return false;
            }
            
            let one = (count-5)+"%";
            one = one.replace("-", "");
            let two = (count-5)+"%";
            two = two.replace("-", "");
            let three = (count-90)+"%";
            three = three.replace("-", "");
            let four = (count-70)+"%";
            four = four.replace("-", "");
            let five = (count-70)+"%";
            five = five.replace("-", "");

            replaceAll[0].innerHTML = one;
            replaceAll[1].innerHTML = two;
            replaceAll[2].innerHTML = three;
            replaceAll[3].innerHTML = four;
            replaceAll[4].innerHTML = five;

            count++;
        }
        
        setInterval(out, 5);
    });
}

//=================================================CONTACT EMAIL
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "\"Thanks friend!!!\"";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops sorry! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)