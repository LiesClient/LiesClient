const background = document.getElementById("menu-background-pattern");

for (let i = 1; i <= 4; i++) {
  let element = document.getElementById("item" + i);

  element.addEventListener("mouseenter", function () {
    background.style.transform = `translate(0%, ${-i}%)`;
  });
  
  element.addEventListener("mouseleave", function () {
    background.style.transform = `translate(0%, 0%)`;
  });

  element.addEventListener("click", function () {
    
  });
}
