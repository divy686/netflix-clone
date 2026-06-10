//DOM ELEMENT
const faqItems = document.querySelectorAll(".faq");

//EVENT Listeners
for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function () {
    toggleFAQ(faqItems[i]);
  })
}

//Functions 
function toggleFAQ (faqEl) {
  const answer = getAnswerContainer(faqEl);

  //Make sure we have a paired answer for whatever answer container is being clicked
  if (!answer) {
    return;
  }

  //Toggle "open" the faq element
  if (faqEl.classList.contains("open")) {
    faqEl.classList.remove("open")
  } else {
    faqEl.classList.add("open");
  }
}

//Check if a question has an answer
function getAnswerContainer(faqEl) {
  const sibling = faqEl.nextElementSibling;

  if(!sibling || !sibling.classList.contains("faq-answer-container")) {
    return null;
  } else {
    return sibling;
  }
}