gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});

function clicked(clicked_id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.countapi.xyz/hit/aqordeon/${clicked_id}`);
    xhr.responseType = "json";
    xhr.onload = function() {
        document.querySelector(`#${clicked_id} .card-counter`).innerHTML = this.response.value;
    }
    xhr.send();
}