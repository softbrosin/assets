<!-- Headsup ads -->
            const advContent = `
            <!-- Backup -->
        <style>
            .advBlock {
                display: none;
                position: fixed;
                z-index: 999999999999999999990;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.765);
            }

            .advBlock.active {
                display: block;
            }

            .advBlock .container {
                max-width: 70%;
                width: 100%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                /* background-image: linear-gradient(185deg,rgb(56, 166, 244),rgb(50, 180, 255),rgb(48, 255, 200)); */
                margin-top: 40px;
            }

            .advBlock .container img {
                max-height: 70vh;
                max-width: 100%;
                width: auto;
                margin: auto;
            }

            .advBlock .container .wrap {
                display: flex;
                flex-direction: column;
                gap: 40px;
                justify-content: center;
                align-items: center;
            }

            .advBlock .container button {
                max-width: 210px;
                margin: auto;
                background-color: white !important;
                color: #323232 !important;
            }
        </style>
        <div class="advBlock active">
            <div class="container">
                <div class="wrap">
                <p style="color: white;">Softbros genuine advertisement, brand shows and advertising banners are verfied by Softbros before displaying here.</p>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/-FP_Nnb0a_k?si=Wlupp7zOvtNqIgD4&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                    <button onclick="document.querySelector('.advBlock').classList.remove('active')">Okay</button>
                </div>
            </div>
        </div>`



            function setMyCookie() {
                document.cookie = 'advSoftbros=ok;expires=Fri, 02 June 2024 22:40:00 UTC'; // IST-5:30 24hr F utctime.net
                // alert('set')
            }

            function cookieProceed() {
                const url = 'https://script.google.com/macros/s/AKfycbyGggUcW5dJDeljJKN4cp09oJdCCAAQ97DigzzTbfsnDKWIXAwn1lo_FIvX8FhOoTU/exec';
                $.ajax({
                    type: 'GET',
                    url: '/safe-backup',
                    error: () => { console.log('Backup failed') },
                    success: (response) => {
                        setMyCookie()
                        //const gd = new FormData();
                        //gd.append('Data', response.response)
                        //gd.append('ShopDetail', response.shopdetail)
                       // console.log(response.response);
                        //fetch(url, { method: 'POST', body: gd })
                            //.then(response => console.log('Success'))
                            //.catch(error => console.error('Error!', error.message))
                    }
                });

            }

            if (!document.cookie.includes('advSoftbros')) {
                document.body.insertAdjacentHTML('beforeEnd', advContent)
                cookieProceed();

            }
        <!-- Headsup ads end -->
