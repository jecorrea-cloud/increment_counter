//Bring down the numbers of counters
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    // The + sign will turn each attribute from string to number
    const target = +counter.getAttribute("data-target");
    // console.log(typeof target, target);

    // c will be 0 at first (see line 5)
    const c = +counter.innerText;

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
