let allItems = document.querySelectorAll('.all a');
let imgArea = document.getElementsByClassName('imgDiv')[0];

let imgShow = function () {
    imgArea.style.display = 'block';
};
let imgDisappear = function () {
    imgArea.style.display = 'none';
};
allItems[0].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/65f01849695a127f4ae7e7009230ec24ef332206.png")';
};
allItems[1].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/10dc2aa23378bed22310033e574e57b789db1365.png")';
};
allItems[2].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/a4a1f1e997af3f93662e0472e64e4265f76e3d85.png")';
};
allItems[3].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/8c7875f663bb7d7bc5c25fbdc1121de48a4bfdfe.png")';
};
allItems[4].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/abb09a2210e74911305401038da714920bbf97f1.png")';
};
allItems[5].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/243f8d6f599b377b9cd6e5ad5fec49ba614c7ac7.png")';
};
allItems[6].onmouseenter = function () {
    imgShow();
    imgArea.style.background = 'url("https://i0.hdslb.com/bfs/game/f22816c7ab8d7de4c860204d1d3e3c0422f15aef.png")';
};
for (let i = 0; i < allItems.length; i++) {
    allItems[i].onmouseleave = function () {
        imgDisappear();
    };
}

let faceCover = document.getElementsByClassName('circleChange');
let face = document.getElementsByClassName('list-item');

for (let j = 0; j < face.length; j++) {
    face[j].onmousemove = function () {
        faceCover[j].id = 'circleChange-hover';
    };
    face[j].onmouseout = function () {
        faceCover[j].id = '';
    };
}

let index = 0;
let time = 0;
let goIndex = function (pic,poi,sentence) {
    for (let n = 0; n < pic.length; n++){
        pic[n].className = 'scrollx';
        poi[n].className = '';
        sentence[n].className = '';
    }
    pic[index].className = 'scrollx on';
    poi[index].className = 'on';
    sentence[index].className = 'on';
};
let goNext = function(picNum){
    if (index < picNum){
        index ++;
    }else{
        index = 0;
    }
    time = 0;
};

let scrollxs = document.getElementsByClassName('scrollx');
let points = document.querySelectorAll('.carousel-module .trig span');
let words = document.querySelectorAll('.carousel-module .roll-title a');
for (let m = 0; m < points.length; m++){
    points[m].addEventListener('click',function () {
        index = this.getAttribute('data-index');
        goIndex(scrollxs, points, words);
        time = 0;
    })
}
setInterval(function(){
    time++;
    if(time === 50){
        goNext(4);
        goIndex(scrollxs, points, words);
        time = 0;
    }
},100);

let imgs = document.querySelectorAll('.tab-box .roll-pic li');
let lang = document.querySelectorAll('.tab-box .trig span');
let pencil = document.querySelectorAll('.tab-box .roll-title a');
// for (let x = 0; x< lang.length; x++) {
//     lang[x].addEventListener('mouseenter',function () {
//         index = this.getAttribute('data-s');
//         goIndex(imgs, lang, pencil);
//         time = 0;
//     })
// }
// setInterval(function () {
//     time++;
//     if(time === 40){
//         goNext(2);
//         goIndex(imgs, lang, pencil);
//         time = 0;
//     }
// },100);