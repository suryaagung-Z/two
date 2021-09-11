//=================================================WAIT
const swipeContainer = document.querySelector('.swiper-container');
const bubble = document.querySelector('#bubble');
const wait = document.querySelector('#wait');
const countWait = document.querySelector('#countWait');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

window.addEventListener("load", () => {
    let x = 0;

    function innerWait() {
        if (x > 100) {
            return false;
        } else if (x === 100) {
            bubble.style.opacity = "1";
            left.style.opacity = "1";
            right.style.opacity = "1";

            function after() {
                wait.style.display = "none";
                //=================================================ANIMATION
                const relaxed = bodymovin.loadAnimation({
                    container: document.getElementById('anim'),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'assets/js/anim.json'
                });

                const helloFriend = bodymovin.loadAnimation({
                    container: document.getElementById('hello-friend'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: 'assets/js/data.json'
                });

                const helloBoy = bodymovin.loadAnimation({
                    container: document.getElementById('helloBoy'),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: 'assets/js/hello.json'
                });

                //=================================================SWIPER JS
                const swiper = new Swiper('.swiper-container', {
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
                    }
                });
            }

            ok.addEventListener("click", () => {
                after();
                document.body.removeEventListener('keydown', keyClick);
            });

            document.body.addEventListener('keydown', keyClick);
            function keyClick(e) {
                let confirmKey;
                const key = e.keyCode;
                if (key === 13) {
                    after();
                    confirmKey = true;
                } else if (key === 37) {
                    left.classList.add("keyClick");
                } else if (key === 39) {
                    right.classList.add("keyClick");
                }

                if (confirmKey) {
                    document.body.removeEventListener('keydown', keyClick);
                }
            }
            document.body.addEventListener('keyup', keyUp);
            function keyUp(e) {
                const key = e.keyCode;
                if (key === 37) {
                    left.classList.remove("keyClick");
                } else if (key === 39) {
                    right.classList.remove("keyClick");
                }
            }
        } //close elseif( x === 100 )

        countWait.innerText = x + "%";

        x++;
        return;
    }
    setInterval(innerWait, 20);
});

const checkbox = document.querySelector('.mode input[type="checkbox"]');
const moon = document.querySelector(".fa-sun");
const textMode = document.querySelector("#text-mode");
checkbox.addEventListener('change', switchTheme);
function switchTheme() {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        moon.classList.remove("fa-sun");
        moon.classList.add("fa-moon");
        textMode.innerText = "Dark mode";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        moon.classList.add("fa-sun");
        moon.classList.remove("fa-moon");
        textMode.innerText = "Light mode";
    }
}

//=================================================ABILITIES
const hoverAll = document.querySelectorAll('#hover');
const replaceAll = document.querySelectorAll('#ganti');

for (let hover = 0; hover < hoverAll.length; hover++) {
    hoverAll[hover].addEventListener('mouseover', () => {
        let count = 0;
        function out() {
            if (count > 100) {
                return false;
            }

            let one = (count - 5) + "%";
            one = one.replace("-", "");
            let two = (count - 5) + "%";
            two = two.replace("-", "");
            let three = (count - 90) + "%";
            three = three.replace("-", "");
            let four = (count - 70) + "%";
            four = four.replace("-", "");
            let five = (count - 70) + "%";
            five = five.replace("-", "");

            replaceAll[0].innerText = one;
            replaceAll[1].innerText = two;
            replaceAll[2].innerText = three;
            replaceAll[3].innerText = four;
            replaceAll[4].innerText = five;

            count++;
        }

        setInterval(out, 5);
    });
}

//=================================================CONTACT EMAIL
const send = document.querySelector('#send');

send.addEventListener('click', (e)=>{
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let text = document.getElementById('message');

    if( (name.value == '') || (email.value == '') || (text.value == '') ){
        alert('message cannot be empty');
        
    }else{

        Email.send({
            SecureToken : "4c21dfcb-23e8-4b0a-b671-4829dca93c73",
            To : "suryaagung118@gmail.com",
            From : `${email.value}`,
            Subject : `EMAIL FROM : ${name.value}`,
            Body : `Message : ${text.value}`
        }).then(
          message => {
              if( message == "OK" ){
                  alert('Thanks friend');
                  name.value  = '';
                  email.value = '';
                  text.value  = '';
              }else{
                  alert('Message failed to be sent');
                  location.reload();
              }
          }
        );
        
    }


});