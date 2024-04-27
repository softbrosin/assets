const bodyTag = document.querySelector('body');

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

.consent .wrapper {
    padding: 20px;
    width: 70%;
    margin: auto;
    top: 40px;
    background-color: white;
}

.consent h4 {
    color: rgb(1, 1, 81);
}
</style> 
<div class="consent">
<div class="wrapper">
    <div class="content">
        <h4>Title</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto fugit est atque placeat? Animi, mollitia consequatur? Quae suscipit facilis quam hic, perspiciatis iure dolorum, laudantium adipisci quaerat fugit consequatur delectus.</p>
    </div>
</div>
</div>`;
const dummyDiv = document.createElement('div');
dummyDiv.innerHTML = festMsg;
bodyTag.prepend(dummyDiv);
