document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーション
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => observer.observe(elem));

    // スライダーアニメーション
    const sliders = document.querySelectorAll('.inner_keyvisual_fv');
    let currentSlide = 0;

    function nextSlide() {
        sliders[currentSlide].style.opacity = '0.5';
        currentSlide = (currentSlide + 1) % sliders.length;
        sliders[currentSlide].style.opacity = '1';
    }

    setInterval(nextSlide, 3000);

    // フォーム送信
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // ここにフォーム送信の処理を追加
        alert('お問い合わせありがとうございます。shortly連絡いたします。');
        contactForm.reset();
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});