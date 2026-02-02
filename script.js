const lantern = document.getElementById('lantern');

// Khi đưa chuột vào bất kỳ hình nào trong đèn
lantern.addEventListener('mouseenter', () => {
    lantern.classList.add('paused');
});

// Khi rê chuột ra ngoài
lantern.addEventListener('mouseleave', () => {
    lantern.classList.remove('paused');
});