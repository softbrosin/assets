// // Headsup 
    // const advContent = `
    //                 <!-- Backup -->
    //             <style>
    //                 .advBlock {
    //                     display: none;
    //                     position: fixed;
    //                     z-index: 999999999999999999990;
    //                     width: 100%;
    //                     height: 100%;
    //                     top: 0;
    //                     left: 0;
    //                     background-color: rgba(0, 0, 0, 0.765);
    //                 }

    //                 .advBlock.active {
    //                     display: block;
    //                 }

    //                 .advBlock .container {
    //                     max-width: 70%;
    //                     width: 100%;
    //                     margin: auto;
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     padding: 20px;
    //                     /* background-image: linear-gradient(185deg,rgb(56, 166, 244),rgb(50, 180, 255),rgb(48, 255, 200)); */
    //                     margin-top: 40px;
    //                 }

    //                 .advBlock .container img {
    //                     max-height: 70vh;
    //                     max-width: 100%;
    //                     width: auto;
    //                     margin: auto;
    //                 }

    //                 .advBlock .container .wrap {
    //                     display: flex;
    //                     flex-direction: column;
    //                     justify-content: center;
    //                     align-items: center;
    //                 }

    //                 .advBlock .container p {
    //                     font-size: 14px;
    //                 }

    //                 .advBlock .container button {
    //                     max-width: 210px;
    //                     margin: auto;
    //                     margin-top: 10px;
    //                     background-color: white !important;
    //                     color: #323232 !important;
    //                 }
    //             </style>
    //             <div class="advBlock active">
    //                 <div class="container">
    //                     <div class="wrap">
    //                     <p style="color: white;">Softbros genuine advertisement, brand shows and advertising banners are verfied by Softbros before displaying here.</p>
    //                     <video class="background-video" loop="true" autoplay="autoplay" muted="false" style="height:auto; width:100%; border-radius: 10px">
    //                       <source src="https://softbros.in/video/bams.mp4" type="video/mp4">
    //                     </video>
    //                     <!-- <img src="https://raw.githubusercontent.com/softbrosin/assets/main/assets/images/SBTS%20pigmy%20banner.png" alt="Softbros banner"> -->

    //                         <button onclick="document.querySelector('.advBlock').classList.remove('active')">Okay</button>
    //                     </div>
    //                 </div>
    //             </div>`



    // function setMyCookie() {
    //     document.cookie = 'advSoftbros=ok; expires=Thu, 17 Oct 2024 22:40:00 UTC; path=/'; // IST-5:30 24hr F utctime.net
    // }

    // function cookieProceed() {
    //     const url = 'https://script.google.com/macros/s/AKfycbyGggUcW5dJDeljJKN4cp09oJdCCAAQ97DigzzTbfsnDKWIXAwn1lo_FIvX8FhOoTU/exec';
    //     $.ajax({
    //         type: 'GET',
    //         url: '/safe-backup',
    //         error: () => { console.log('Backup failed') },
    //         success: (response) => {
    //             // console.log(response);
    //             setMyCookie()
    //             const gd = new FormData();
    //             const lengthOfCust = JSON.parse(response.response).length;
    //             gd.append('Data', lengthOfCust.toString())
    //             gd.append('ShopDetail', response.shopdetail)
    //             console.table(response);
    //             fetch(url, { method: 'POST', body: gd, mode: 'no-cors' })
    //                 .then(response => console.log('Success'))
    //                 .catch(error => console.error('Error!', error.message))
    //         }
    //     });

    // }

    // if (!document.cookie.includes('advSoftbros')) {
    //     document.body.insertAdjacentHTML('beforeEnd', advContent)
    //     // cookieProceed();
    // }
    // // Headsup ads end
