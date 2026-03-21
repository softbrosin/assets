(function () {
    const isBlocked = true; // 🔁 Change this dynamically from backend/API

    if (!isBlocked) return;

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "service-block-overlay";

    overlay.innerHTML = `
        <div class="block-container">
            <div class="icon">⚠️</div>
            <h1>Service Temporarily Blocked</h1>
            <p>No renewal has been made for this service.</p>
            <p>Please contact support or renew your subscription.</p>
        </div>
    `;

    // Add styles
    const style = document.createElement("style");
    style.innerHTML = `
        #service-block-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(8px);
            background: rgba(15, 23, 42, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            font-family: 'Segoe UI', sans-serif;
        }

        .block-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(20px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            color: #fff;
            max-width: 400px;
            width: 90%;
            animation: fadeIn 0.5s ease-in-out;
        }

        .icon {
            font-size: 50px;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 26px;
            margin-bottom: 10px;
        }

        p {
            opacity: 0.8;
            margin-bottom: 8px;
        }

        button {
            margin-top: 20px;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // Block all clicks (extra safety)
    document.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
    }, true);

    // Disable keyboard input
    document.addEventListener("keydown", function (e) {
        e.preventDefault();
    });

    // Support function
    window.contactSupport = function () {
        window.location.href = "mailto:support@yourcompany.com";
    };
})();
