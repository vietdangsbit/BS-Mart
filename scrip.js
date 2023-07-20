
//dau cham hoi
const questionButton = document.querySelector('.question__button');
const questionContent = document.querySelector('.question__content');
const popup = document.getElementById('myPopup');
const popupQuestion = document.querySelector('.popup__question');
const popupExit = document.querySelector('.popup__exit');
const popupClose = document.querySelector('.popup__close');

questionButton.addEventListener('click', () => {
  popupQuestion.innerHTML = questionContent.innerHTML;
  popup.style.display = 'block';
});

popupExit.addEventListener('click', () => {
  popup.style.display = 'none';
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

//
const questionButton1 = document.querySelector('.question__button1');
const questionContent1 = document.querySelector('.question__content1');
const popup1 = document.getElementById('myPopup1');
const popupQuestion1 = document.querySelector('.popup__question1');
const popupExit1 = document.querySelector('.popup__exit1');
const popupClose1 = document.querySelector('.popup__close1');

questionButton1.addEventListener('click', () => {
  popupQuestion1.innerHTML = questionContent1.innerHTML;
  popup1.style.display = 'block';
});

popupExit1.addEventListener('click', () => {
  popup1.style.display = 'none';
});

popupClose1.addEventListener('click', () => {
  popup1.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup1.style.display = 'none';
  }
});

//dem khoa hoc
// Lấy danh sách các khóa học
var courses = document.getElementsByClassName('body-full-mid');

// Đếm số lượng khóa học và cập nhật số lượng lên phần tử có id="number"
document.getElementById('number').innerHTML = courses.length;
//pageuser
let divs = document.getElementsByTagName("div");
let count = 0;
for (let i = 0; i < divs.length; i++) {
if (divs[i].className === "body-mid-infor-boder-main") { 
    count++;
}
console.log(count);
}

const deleteButtons = document.querySelectorAll('.button-delete');
const numberElement = document.getElementById('number'); 

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const elementToRemove = button.closest('.body-full-mid');
    elementToRemove.remove();
    const count = document.querySelectorAll('.body-mid-infor-boder-main').length;
    numberElement.textContent = count; 
  });
});

const deleteBtns = document.querySelectorAll('.button-delete');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    target.remove();
  });
});

//
//
// function calculatePrice() {
//   var country = document.getElementById("country").value;
//   var subtotal = 1200000;
//   var discount = 0;

//   if (country === "vietnam") {
//     discount = 200000;
//   }

//   var total = subtotal - discount;

//   document.getElementById("discount").innerHTML = discount.toLocaleString("vi-VN") + " đ";
//   document.getElementById("total").innerHTML = total.toLocaleString("vi-VN") + " đ";
//   document.getElementById("bsmart-discount").innerHTML = discount.toLocaleString("vi-VN") + " đ";
//   document.getElementById("subtotal").innerHTML = subtotal.toLocaleString("vi-VN") + " đ";
// }
/////////////////////////////////////////////////////////////////////////
const momoButton = document.querySelector('.momo-button');
const viettelButton = document.querySelector('.viettel-button');
const paymentPopup = document.querySelector('.payment-popup');
const paymentPopup1 = document.querySelector('.payment-popup-1');


momoButton.addEventListener('click', () => {
  paymentPopup.style.display = 'block';
});

viettelButton.addEventListener('click', () => {
  paymentPopup1.style.display = 'block';
});
//
// Get the payment buttons
const momoButtonn = document.getElementById('momo-payment');
const viettelButtonn = document.getElementById('viettel-payment');

// Add event listeners to the buttons
momoButtonn.addEventListener('click', startCountdown);
viettelButtonn.addEventListener('click', startCountdown1);

// Countdown function
function startCountdown() {
  // Get the countdown element
  const countdownElement = document.getElementById('countdown');

  // Set the initial time in seconds
  let timeLeft = 100;

  // Start the countdown
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.innerText = timeLeft;

    // Check if the time has run out
    if (timeLeft === 0) {
      clearInterval(countdownInterval);

      // Hide the payment popup
      const paymentPopup = document.querySelector('.payment-popup');
      paymentPopup.style.display = 'none';
    }
  }, 1000);
}

function startCountdown1() {
  // Get the countdown element
  const countdownElement1 = document.getElementById('countdown1');

  // Set the initial time in seconds
  let timeLeft1 = 100;

  // Start the countdown
  const countdownInterval1 = setInterval(() => {
    timeLeft1--;
    countdownElement1.innerText = timeLeft1;

    // Check if the time has run out
    if (timeLeft1 === 0) {
      clearInterval(countdownInterval1);

      // Hide the payment popup
      const paymentPopup1 = document.querySelector('.payment-popup-1');
      paymentPopup1.style.display = 'none';
    }
  }, 1000);
}
// const bsmartDiscount = document.getElementById("bsmart-discount");
// const countrySelect = document.getElementById("country");
// const h3Element = document.getElementById("h3-tag");

// countrySelect.addEventListener("change", function() {
//   let discount = 0;
//   if (countrySelect.value === "vietnam") {
//     discount = 200000;
//   }
//   const subtotal = 1200000; // Giá tạm tính
//   const total = subtotal - discount;
//   h3Element.innerText = `${total.toLocaleString()} đ`;
// });

const bsmartDiscount = document.getElementById("bsmart-discount");
const countrySelect = document.getElementById("country");
const h3Element = document.getElementById("h3-tag");

countrySelect.addEventListener("change", function() {
  let discount = 0;
  if (countrySelect.value === "vietnam") {
    discount = 200000;
  }
  const subtotal = 1200000; // Giá tạm tính
  const total = subtotal - discount;
  h3Element.innerText = `${total.toLocaleString()} đ`;
});

const bsmartDiscount1 = document.getElementById("bsmart-discount");
const countrySelect1 = document.getElementById("country");
const h3Element1 = document.getElementById("h4-tag");

countrySelect.addEventListener("change", function() {
  let discount1 = 0;
  if (countrySelect.value === "vietnam") {
    discount1 = 200000;
  }
  const subtotal1 = 1200000; // Giá tạm tính
  const total1 = subtotal1 - discount1;
  h3Element1.innerText = `${total1.toLocaleString()} đ`;
});
//
function closeForm1() {
  var paymentForm = document.querySelector(".payment-popup-1");
  paymentForm.style.display = "none";
  location.reload();
}
function closeForm() {
  var paymentForm = document.querySelector(".payment-popup");
  paymentForm.style.display = "none";
  location.reload();
}

