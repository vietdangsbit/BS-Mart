






///dang ky
// JavaScript để điều khiển hiển thị/ẩn popup và xử lý đăng ký
document.addEventListener("DOMContentLoaded", function() {
  openPopup("registerPopup");
});

function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";

  popup.addEventListener("click", function(event) {
    if (event.target === popup) {
      closeSuccessPopup();
    }
  });
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

function closeSuccessPopup() {
  var successPopup = document.getElementById("successPopup");
  successPopup.style.display = "none";
}


function registerFormSubmit(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form

  // Xử lý đăng ký ở đây (có thể sử dụng AJAX để gửi dữ liệu đăng ký)

  // Đóng popup đăng ký và mở popup đăng ký thành công
  closePopup("registerPopup");
  openPopup("successPopup");

  return false;
}

//

var confirmButtons = document.querySelectorAll(".button-confirm");
var popups = document.querySelectorAll(".popup2");

for (var i = 0; i < confirmButtons.length; i++) {
  confirmButtons[i].addEventListener("click", function() {
    var popup = this.closest(".popup2");
    hidePopup(popup);
  });
}

function hidePopup(popup) {
  popup.style.display = "none";
}

//nút close
function closePopup2() {
  var popup2 = document.getElementById("popup2");
  popup2.style.display = "none";
}



//Chọn quà
var giftChooseElements = document.getElementsByClassName("gift-choose");
var selectedGift = null;
var buttonList = document.querySelector(".button-list");
var notification = document.getElementById("notification");

buttonList.style.display = "none";

for (var i = 0; i < giftChooseElements.length; i++) {
  giftChooseElements[i].addEventListener("click", function() {
    var currentGiftImage = this.querySelector(".image-container");
    var giftPopupId = this.querySelector(".gift_open").getAttribute("data-popup-id");
    var giftPopup = document.getElementById(giftPopupId);

    if (selectedGift === null) {
      currentGiftImage.classList.add("flipped");
      selectedGift = this;
      showGiftPopup(giftPopup);
      buttonList.style.display = "block";
    } else if (selectedGift === this && !currentGiftImage.classList.contains("flipped")) {
      currentGiftImage.classList.toggle("flipped");
      selectedGift = null;
      hideGiftPopup(giftPopup);
      buttonList.style.display = "none";
    } else {
      showNotification();
    }
  });
}

function showGiftPopup(popup) {
  popup.style.display = "block";
}

function hideGiftPopup(popup) {
  popup.style.display = "none";
}

function showNotification() {
  notification.style.display = "block";
}

function closeNotification() {
  notification.style.display = "none";
}

var closeNotificationButton = document.querySelector(".close-notification");
closeNotificationButton.addEventListener("click", closeNotification);









//danh sach trung qua
// danh sách trúng thưởng
var button1 = document.querySelector('.button-list');
var popup5 = document.getElementById('popup5');

button1.addEventListener('click', function(event) {
  popup5.style.display = 'block';
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  var targetElement = event.target;
  if (!popup5.contains(targetElement)) {
    popup5.style.display = 'none';
  }
});

function closeSuccessPopup1() {
  popup5.style.display = 'none';
}