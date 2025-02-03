document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="log-area">
                <h2>marie photo exhibition</h2>
            </div>
            <div class="nav-links">
            <div class="hamburger" id="hamburger">&#9776;</div> <!-- ハンバーガーアイコン -->
                <ul id="menu">
                    <li><a href="index.html">Profile</a></li>
                    <li><a href="portrait.html">Portrait</a></li>
                    <li><a href="makeup.html">makeup</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="https://www.instagram.com/marie_no_daibouken/profilecard/?igsh=aThlNmpqemYxanU3" target="_blank" rel="noopener noreferrer">
                    <img src="./images/insta.png" alt="Instagram Logo" style="width: 24px; height: 24px;">
                    </a></li>
                </ul>
            </div>
        </nav>
    `;

    // ヘッダー部分を.header-containerに挿入
    document.querySelector(".header-container").innerHTML = headerHTML;
});

// EmailJSの初期化
if (emailjs) {
    emailjs.init('KFwoSi2gn-enSRQkQ');
}

window.onload = function () {
    const contactForm = document.getElementById('contact-form');
    // フォーム要素の取得
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // デフォルトのフォーム送信を防ぐ
            this.contact_number.value = Math.random() * 100000 | 0; // 5桁の乱数生成

            // フォームをEmailJSに送信
            emailjs.sendForm('service_g4g46we', 'template_gr2q7pk', this)
                .then(function () {
                    console.log('SUCCESS!'); // 成功時の処理
                }, function (error) {
                    console.log('FAILED...', error); // エラー時の処理
                });
        })
    };
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.image-link');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeBtn = document.getElementById('close');

    links.forEach(link => {
        if (links) {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // デフォルトの動作を無効
                const img = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
                if (img) {
                    overlayImage.src = img.src; // 画像をオーバーレイに表示
                    overlay.style.display = 'flex'; // オーバーレイを表示
                }
            });
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none'; // オーバーレイを非表示
        })
    };

    if (overlay) {
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none'; // オーバーレイを非表示
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            if (menu) {
                menu.classList.toggle('show'); // メニューの表示・非表示を切り替え
            }
        });
    }

    if (hamburger) {
        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show'); 

            }
        })
    }
});

