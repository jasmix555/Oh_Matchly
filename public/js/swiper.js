function animatecard(ev) {
  var t = ev.target;
  if (t.className === "but-nope") {
    t.parentNode.classList.add("nope");
  }
  if (t.className === "but-yay") {
    t.parentNode.classList.add("yes");
  }
}
document.body.addEventListener("click", animatecard);
function animationdone(ev) {
  // get the container
  var origin = ev.target.parentNode;

  // remove the appropriate class
  // depending on the animation name
  if (ev.animationName === "yay") {
    origin.classList.remove("yes");
  }
  if (ev.animationName === "nope") {
    origin.classList.remove("nope");
  }

  // if any of the card events have
  // ended…
  if (ev.animationName === "nope" || ev.animationName === "yay") {
    // remove the first card in the element
    origin.querySelector(".current").remove();

    // if there are no cards left, do nothing
    if (!origin.querySelector(".swiper-wrapper")) {
      // no more cards left -
      // TODO other functionality
    } else {
      // otherwise shift the 'current' class to
      // the next card
      origin.querySelector(".swiper-wrapper").classList.add("current");
    }
  }
}
document.body.addEventListener("animationend", animationdone);
function fireCustomEvent(name, payload) {
  var newevent = new CustomEvent(name, {
    detail: payload,
  });
  document.body.dispatchEvent(newevent);
}
function animatecard(ev) {
  var t = ev.target;
  if (t.className === "but-nope") {
    t.parentNode.classList.add("nope");
    fireCustomEvent("nopecard", {
      origin: t,
      container: t.parentNode,
      card: t.parentNode.querySelector(".card"),
    });
  }
  if (t.className === "but-yay") {
    t.parentNode.classList.add("yes");
    fireCustomEvent("yepcard", {
      origin: t,
      container: t.parentNode,
      card: t.parentNode.querySelector(".card"),
    });
  }
}
