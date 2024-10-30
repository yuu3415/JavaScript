document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <nav>
            <div class="log-area">
                <img src="./images/camera.png" alt="" class="logo">
                <h2>marie photo exhibition</h2>
            </div>
            <div class="nav-links">
                <ul>
                    <li><a href="index.html">Profile</a></li>
                    <li><a href="https://www.instagram.com/marie_no_daibouken/profilecard/?igsh=aThlNmpqemYxanU3">Instagram</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                </ul>
            </div>
        </nav>
    `;

    // ヘッダー部分を.header-containerに挿入
    document.querySelector(".header-container").innerHTML = headerHTML;
});

// EmailJSの初期化
emailjs.init('KFwoSi2gn-enSRQkQ');

window.onload = function() {
    // フォーム要素の取得
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ
        this.contact_number.value = Math.random() * 100000 | 0; // 5桁の乱数生成

        // フォームをEmailJSに送信
        emailjs.sendForm('service_g4g46we', 'template_gr2q7pk', this)
            .then(function() {
                console.log('SUCCESS!'); // 成功時の処理
            }, function(error) {
                console.log('FAILED...', error); // エラー時の処理
            });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.image-link');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.getElementById('close');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルトの動作を無効
            const img = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
            if (img) {
                overlayImage.src = img.src; // 画像をオーバーレイに表示
                overlay.style.display = 'flex'; // オーバーレイを表示
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none'; // オーバーレイを非表示
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'; // オーバーレイを非表示
    });
});
