/* <div id="ele1"> hello </div>
<script>
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
</script> */

const div = document.querySelector('#ele1'); // pintar

div.addEventListener('click', (evt)=>{
    pintar(evt,'yellow');
});


