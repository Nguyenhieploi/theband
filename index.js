// Lấy các phần tử DOM
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal"); // Sử dụng .modal để chọn modal


openModalBtn.forEach(function(button) {
    button.addEventListener("click", function() {
      modal.style.display = 'block';
    });
  });
  
closeModalBtn.addEventListener("click" ,function(){
    modal.style.display = 'none';
})



