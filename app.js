const SUBMIT = document.querySelector(".submit");
const RADIO_BTNS = document.querySelectorAll(".clothes");
const FORM = document.querySelector("form");
const POPUP = document.querySelector(".popup");
const POPUP_TEXT = document.querySelector(".popup-text");
const CLOSE_POPUP_BTN = document.querySelector(".close-btn");

function result() {
  const text1 =
    "Do kompletu możesz jeszcze wyciągnąć babola z nosa. \n\n Facet i tak ucieknie. 😄";
  const text2 =
    "Ujdzie, jeśli masz ładne nogi, ale to nie jest to, o czym tygryski marzą najbardziej. 😉";
  const text3 =
    "Jeżeli w dodatku zaprosisz go od razu do sypialni lub na kuchenny blat, to możesz być pewna, że  szybko o tobie nie zapomni. \n 👍👍👍";
  const text4 =
    "Niezłe tempo! \n\n Czasem ubranie może się jednak przydać, zwłaszcza gdy przed twoimi drzwiami akurat zaczepi go sąsiadka. \n Poza tym zawsze można je zdjąć lub zerwać, a wielu mężczyzn marzy o pończochach i seksownej mini. 😎";
  const text0 =
    "Nie zaznaczyłaś żadnej odpowiedzi. Chyba jesteś dziś lekko roztargniona? 🙄";
  let value;
  for (radio of RADIO_BTNS) {
    if (radio.checked) {
      value = radio.value;
    }
  }
  if (value == 1) {
    POPUP_TEXT.innerText = text1;
  }
  if (value == 2) {
    POPUP_TEXT.innerText = text2;
  }
  if (value == 3) {
    POPUP_TEXT.innerText = text3;
  }
  if (value == 4) {
    POPUP_TEXT.innerText = text4;
  }
  if (value == undefined) {
    POPUP_TEXT.innerText = text0;
  }

  POPUP.classList.toggle("show");

  setTimeout(() => {
    CLOSE_POPUP_BTN.addEventListener(
      "click",
      () => {
        POPUP.classList.remove("show");
      },
      100
    );
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape" || e.code === 27) {
        POPUP.classList.remove("show");
      }
    });
  });
}

SUBMIT.addEventListener("click", result);
