// Lấy tất cả các button có class "openModalBtn"
const openModalBtns = document.querySelectorAll(".js-buy-ticket");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal");

// Thêm sự kiện "click" cho tất cả các button
openModalBtns.forEach(function(button) {
  button.addEventListener("click", function() {
    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = 'none';
});

