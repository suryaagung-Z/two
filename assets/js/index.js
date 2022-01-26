//================================================================WAIT
const swipeContainer = document.querySelector(".swiper-container");
const bubble = document.querySelector("#bubble");
const wait = document.querySelector("#wait");
const countWait = document.querySelector("#countWait");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

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
          container: document.getElementById("anim"),
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "assets/js/anim.json",
        });

        const helloFriend = bodymovin.loadAnimation({
          container: document.getElementById("hello-friend"),
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "assets/js/data.json",
        });

        const helloBoy = bodymovin.loadAnimation({
          container: document.getElementById("helloBoy"),
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "assets/js/hello.json",
        });

        //=================================================SWIPER JS
        const swiper = new Swiper(".swiper-container", {
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }

      ok.addEventListener("click", () => {
        after();
        document.body.removeEventListener("keydown", keyClick);
      });

      document.body.addEventListener("keydown", keyClick);
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
          document.body.removeEventListener("keydown", keyClick);
        }
      }
      document.body.addEventListener("keyup", keyUp);
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
const neon = document.querySelector("#neon");
checkbox.addEventListener("change", switchTheme);
function switchTheme() {
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    neon.classList.add("neon");
    moon.classList.remove("fa-sun");
    moon.classList.add("fa-moon");
    textMode.innerText = "Light mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    neon.classList.remove("neon");
    moon.classList.add("fa-sun");
    moon.classList.remove("fa-moon");
    textMode.innerText = "Dark mode";
  }
}

//================================================================ABILITIES
const countHover = document.querySelectorAll("#countHover");

for (let hover = 0; hover < countHover.length; hover++) {
countHover[hover].addEventListener("mouseover", () => {
    let count = 0;
    const dataPers = countHover[hover].getAttribute('data-%')

    function out() {
      if (count > +dataPers) {
        return false;
      }

      countHover[hover].querySelector('#ganti').innerText = count+'%'

      count++;
    }

    setInterval(out, 5);
  });
}

//================================================================POPUP
const contentPopup = document.querySelector("#box-popup");

const popup = function (text_p) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  contentPopup.classList.add("box-popup-bg");
  popup.appendChild(document.createTextNode(text_p));
  contentPopup.appendChild(popup);

  setTimeout(() => {
    popup.remove();
    contentPopup.classList.remove("box-popup-bg");
  }, 3000);
};

//================================================================CONTACT EMAIL
const send = document.querySelector("#send");

send.addEventListener("click", (e) => {
  e.preventDefault();

  send.innerText = "";
  const wait_send = document.createElement("div");
  wait_send.classList.add("wait-send");
  send.appendChild(wait_send);

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const text = document.getElementById("message");
  const rgx = /[\!\#\$\<\>]/g;

  if (rgx.test(name.value) || rgx.test(email.value) || rgx.test(text.value)) {
    popup("Messages must not have any special characters 🙂");
    send.innerText = "SEND";
    wait_send.remove();
  } else if (name.value == "" || email.value == "" || text.value == "") {
    popup("Message cannot be empty 🙂");
    send.innerText = "SEND";
    wait_send.remove();
  } else {
    Email.send({
      SecureToken: "4c21dfcb-23e8-4b0a-b671-4829dca93c73",
      To: "suryaagung118@gmail.com",
      From: `${email.value}`,
      Subject: `🥳suryaagung.rf.gd🥳`,
      Body: `<b>Name :</b> ${name.value} <br>
                    <b>Message :</b> ${text.value}`,
    }).then((message) => {
      if (message == "OK") {
        popup("Message successfully sent, Thanks friend 😇");
        name.value = "";
        email.value = "";
        text.value = "";
        send.innerText = "SEND";
        wait_send.remove();
      } else {
        popup("Message failed to be sent 😥");
        name.value = "";
        email.value = "";
        text.value = "";
        send.innerText = "SEND";
        wait_send.remove();
      }
    });
  }
});
