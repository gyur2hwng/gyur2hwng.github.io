window.addEventListener("scroll",function() {
  let pageYOffset = window.pageYOffset + screen.height/2;   // same as scrollTop

  //console.log(parseInt(pageYOffset));  // test code: checking pageYOffset value

  // letters and images appearing
  document.querySelectorAll(".content-item").forEach(elem => {
    console.log(elem.offsetTop);
    if (pageYOffset > elem.offsetTop) {
      elem.classList.add("show");
    } else {
      elem.classList.remove("show");
    }
  });

});
