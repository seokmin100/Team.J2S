document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById('popupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});