const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener("click", () => {
    nav.classList.add("active");
 });
}

if (close) {
    close.addEventListener("click", () => {
    nav.classList.remove("active");
 });
}

document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
