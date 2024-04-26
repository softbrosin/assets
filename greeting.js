const bodyTag = document.querySelector('body');

const festMsg = `<style>
.festival h1 {
    text-align: center;
    font-size: 56px;
    color: rgb(1, 1, 81);
}
</style>
<div class="festival">
<h1>Happy onam</h1>
</div>`;
const dummyDiv = document.createElement('div');
dummyDiv.innerHTML = festMsg;
bodyTag.prepend(dummyDiv);
