
//--------------Slide-Show-------------------
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
// --------------------------------------login----------------------------------
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'flex'; // Use flex display
    document.getElementById('loginForm').style.zIndex=1001;
});
document.getElementById('closeLoginForm').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('sendOtpButton').addEventListener('click', function() {
    // Simulate sending OTP
    document.getElementById('message').textContent = 'OTP sent to phone number.';
    document.getElementById('submitLoginButton').disabled = false;
});

document.getElementById('submitLoginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const otp = document.getElementById('otp').value;

    // Normally, here you would send this data to your server for verification
    if (username && password && phone && otp) {
        document.getElementById('message').textContent = 'Logging in...';
        // Include real verification logic here
    } else {
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});