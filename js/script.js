const mainNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".btn__nav-toggle");
const ageRestrictions = document.querySelector(
  ".faq-section__age-restrictions"
);
const jobRefusal = document.querySelector(".faq-section__job-refusal");
const interviewAmount = document.querySelector(
  ".faq-section__interview-amount"
);

navToggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});

if (document.documentElement.scrollWidth > 800 + "px") {
  ageRestrictions.textContent = "Как правильно составить резюме?";
}

window.addEventListener("resize", (e) => {
  let pageWidth = document.documentElement.scrollWidth;
  if (pageWidth >= 800) {
    ageRestrictions.textContent = "Как правильно составить резюме?";
    jobRefusal.textContent = "Возможно ли устроиться без опыта?";
    interviewAmount.textContent =
      "Ошибки на собеседовании. Чего нужно избегать?";
  } else {
    ageRestrictions.textContent =
      "Есть ли какие-то возрастные ограничения при приеме на работу?";
    jobRefusal.textContent =
      "Объяснят ли сотрудники почему отказано в приеме на работу?";
    interviewAmount.textContent =
      "Сколько собеседований предстоит пройти перед приемом на работу?";
  }
});
