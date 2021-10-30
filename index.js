
const ANIM_TIME = 2;
const FLOAT_ANIM_TIME = 3;
let hat = new Hat();
let scene = document.getElementsByTagName("html")[0];
hat.intialize(scene,"1s initialize-scene forwards",ANIM_TIME);


document.getElementById('sort-btn').addEventListener('click',()=>{
    document.getElementById('sort-btn').style.animation="0.2s disappear forwards";
    hat.float(FLOAT_ANIM_TIME);
    hat.think(ANIM_TIME);
})