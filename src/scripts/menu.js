document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
});



const clickableDivs = document.querySelectorAll('.post-review-block');
clickableDivs.forEach(div => {
    div.addEventListener('click', function() {
        const url = div.getAttribute('data-url');
        window.location.href = url;
    });
});