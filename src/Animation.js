const threshold = 0.4

const items = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (entry.intersectionRatio < threshold) return;

        entry.target.classList.add('anim-visible');
        obs.unobserve(entry.target);
    });
}, {
    threshold: threshold
});

items.forEach(item => observer.observe(item));