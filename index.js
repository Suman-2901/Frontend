
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
const logb=document.getElementById('loginButton');
const logform=document.getElementById('loginForm');
const ph=document.getElementById("phone");
const otpbtn=document.getElementById('sendOtpButton');
const password=document.getElementById('password');
const sublogbtn=document.getElementById('submitLoginButton')
const msg=document.getElementById('message');

logb.addEventListener('click', function() {
    logform.style.display = 'flex';
    logform.style.zIndex=1001;
});
//check ph-no.
const digitPattern = /^\d+$/;
ph.addEventListener('input',function(){
    if (!digitPattern.test(ph.value)) {
        ph.value=ph.value.slice(0, -1);
    }
});

otpbtn.addEventListener('click', function() {
    // Simulate sending OTP
    // document.getElementById('message').textContent = 'OTP sent to phone number.';
    if(ph.value>999999999){
        ph.disabled=true;
        otpbtn.style.display="none";
        password.style.display="block";
        sublogbtn.style.display="block";
        msg.textContent ="";
    }
    else{
        msg.textContent ="invalid number";
    }
    
});

function reset(){
    ph.value="";
    ph.disabled=false;
    msg.textContent ="";
    otpbtn.style.display="block";
    password.style.display="none";
    password.value="";
    sublogbtn.style.display="none";
}

document.getElementById('closeLoginForm').addEventListener('click', function() {
    logform.style.display = 'none';
    reset();
    
});

document.getElementById('submitLoginButton').addEventListener('click', function() {
    // const username = document.getElementById('username').value;
    // const password = document.getElementById('password').value;
    // const phone = document.getElementById('phone').value;
    // const otp = document.getElementById('otp').value;

    // // Normally, here you would send this data to your server for verification
    // if (username && password && phone && otp) {
    //     msg.textContent = 'Logging in...';
    //     // Include real verification logic here
    // } else {
    //     msg.textContent = 'Please fill out all fields.';
    // }
    msg.textContent = 'Please fill out all fields.';
});