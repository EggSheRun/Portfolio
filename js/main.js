const loader = document.getElementById('loader');

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.target === "_blank") return;

        e.preventDefault();
        loader.classList.add('show');

        setTimeout(() => {
            window.location.href = link.href;
        }, 400);
    });
});

window.addEventListener('load', () => {
    loader.classList.remove('show');
});
