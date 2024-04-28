function showCookie() {
            const bodyTag = document.querySelector('body');

document.cookie = "username=John Doe";

const festMsg = `<style>
.festival h1 {
    text-align: center;
    font-size: 56px;
    color: rgb(1, 1, 81);
}

.consent {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999999999;
    background-color: rgba(70, 70, 70, 0.329);
}

.consent .content {
    width: 100%;
    padding: 20px;
    background-color: transparent;
    box-sizing: border-box;
}

.consent .wrapper {
    padding: 20px;
    width: 70%;
    margin: auto;
    position: relative;
    top: 60px;
    border-radius: 20px;
    background-color: white;
}

.consent img {
    width: 40px;
}

.consent h4 {
    color: rgb(1, 1, 81);
}
</style> 
<div class="consent">
<div class="wrapper">
    <div class="content">
        <img src = '../static/background/brand.jpg' alt = 'Softbros logo'>
        <h4>Hi, Customer! We launched finance application &#128588</h4>
        <p><strong>Softbros</strong> Developed robust finance application, Which is ease to use no worries to make take note in papper, all your customers transaction and accounts now available in your phone</p>
        <a href='https://softbros.in' target='_blank'>View more</a>
        <div style="margin-top: 90px;"><button onclick = "document.querySelector('.consent').style.display='none';">Okay</button></div>
    </div>
</div>
</div>`;
const dummyDiv = document.createElement('div');
dummyDiv.innerHTML = festMsg;
bodyTag.prepend(dummyDiv);
        }
        // showCookie()
