let count = 5;
var fix = "I have fixed this bug";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});