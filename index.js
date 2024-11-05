document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".staging-row");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  rows.forEach((row) => {
    observer.observe(row);
  });
});



function startCounter(id, targetValue, delay = 500) {
  let counter = 0;

  function updateCounter() {
    document.getElementById(id).innerText = counter;
    counter++;

    if (counter <= targetValue) {
      setTimeout(updateCounter, delay);
    }
  }

  updateCounter();
}

startCounter("sellingStep1", 1, 700);
startCounter("sellingStep2", 2, 700);
startCounter("sellingStep3", 3, 700);
startCounter("sellingStep4", 4, 700);
startCounter("sellingStep5", 5, 700);

startCounter("buyingStep1", 1, 700);
startCounter("buyingStep2", 2, 700);
startCounter("buyingStep3", 3, 700);
startCounter("buyingStep4", 4, 700);
