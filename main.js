//Select element function

function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.body.onload = castParallax();


const timeline = document.querySelector('.timeline')

const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
    timeline.classList.toggle('hidden');
})

/* SCROLL REVEAL */

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

const eps = document.querySelectorAll('.ep-section');
const epNav = document.querySelectorAll('.timeline .episodes .episode');

const header = document.getElementById('header')
const theme = document.querySelector('.culinary-delight')

const footer = document.getElementById('footer')

window.addEventListener('scroll', () => {
    const footerTop = footer.offsetTop;
    const footerHeight = footer.clientHeight;

    let current = '';
    
    eps.forEach(ep => {
        const epTop = ep.offsetTop;
        const epHeight = ep.clientHeight;

        if (pageYOffset+130 >= epTop) {
            current = ep.getAttribute('id');
        }
    })

    if (pageYOffset + 100 >= footerTop) {
        current = 'footer';
    }

    console.log(current)

    if (current=="footer") {
        timeline.classList.add('hide-timeline');
    }
    else {
        epNav.forEach(epNavLi => {
            epNavLi.classList.remove('active');
            timeline.classList.remove('hide-timeline');
            if (epNavLi.classList.contains(current)) {
                epNavLi.classList.add('active');
            }
        })
    }

    const themeTop = theme.offsetTop;
    const themeHeight = theme.clientHeight;
    if (pageYOffset + 50 + themeHeight >= themeTop){
        header.classList.add('dark-header')
    }
    else {
        if (header.classList.contains('dark-header')) {
            header.classList.remove('dark-header')
        }
    }
})

//Ep1 Countdown
function countdownEp1() {
    var now = new Date();
    console.log(now)
    var release = new Date("2021-05-03T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep1').textContent = d;
    document.getElementById('release-hour-ep1').textContent = h;
    document.getElementById('release-minute-ep1').textContent = m;
    document.getElementById('release-second-ep1').textContent = s;
    setTimeout(countdownEp1, 1000);
}
countdownEp1();

//Ep2 Countdown
function countdownEp2() {
    var now = new Date();
    var release = new Date("2021-05-05T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep2').textContent = d;
    document.getElementById('release-hour-ep2').textContent = h;
    document.getElementById('release-minute-ep2').textContent = m;
    document.getElementById('release-second-ep2').textContent = s;
    setTimeout(countdownEp2, 1000);
}
countdownEp2();

//Ep3 Countdown
function countdownEp3() {
    var now = new Date();
    var release = new Date("2021-05-07T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep3').textContent = d;
    document.getElementById('release-hour-ep3').textContent = h;
    document.getElementById('release-minute-ep3').textContent = m;
    document.getElementById('release-second-ep3').textContent = s;
    setTimeout(countdownEp3, 1000);
}
countdownEp3();

//Ep4 Countdown
function countdownEp4() {
    var now = new Date();
    var release = new Date("2021-05-09T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep4').textContent = d;
    document.getElementById('release-hour-ep4').textContent = h;
    document.getElementById('release-minute-ep4').textContent = m;
    document.getElementById('release-second-ep4').textContent = s;
    setTimeout(countdownEp4, 1000);
}
countdownEp4();

//Ep5 Countdown
function countdownEp5() {
    var now = new Date();
    var release = new Date("2021-05-11T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep5').textContent = d;
    document.getElementById('release-hour-ep5').textContent = h;
    document.getElementById('release-minute-ep5').textContent = m;
    document.getElementById('release-second-ep5').textContent = s;
    setTimeout(countdownEp5, 1000);
}
countdownEp5();

//Ep6 Countdown
function countdownEp6() {
    var now = new Date();
    var release = new Date("2021-05-13T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep6').textContent = d;
    document.getElementById('release-hour-ep6').textContent = h;
    document.getElementById('release-minute-ep6').textContent = m;
    document.getElementById('release-second-ep6').textContent = s;
    setTimeout(countdownEp6, 1000);
}
countdownEp6();

//Ep7 Countdown
function countdownEp7() {
    var now = new Date();
    var release = new Date("2021-05-13T00:00:00.000+05:30");

    var currentTime = now.getTime();
    var releaseTime = release.getTime();

    var rem = releaseTime - currentTime;

    var s = Math.floor(rem/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    h = (h<10)? "0"+h:h;
    m = (m<10)? "0"+m:m;
    s = (s<10)? "0"+s:s;

    document.getElementById('release-day-ep7').textContent = d;
    document.getElementById('release-hour-ep7').textContent = h;
    document.getElementById('release-minute-ep7').textContent = m;
    document.getElementById('release-second-ep7').textContent = s;
    setTimeout(countdownEp7, 1000);
}
countdownEp7();
