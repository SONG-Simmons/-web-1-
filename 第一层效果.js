let show = function (target) {
    target.style.display = 'block';
};
let disappear = function (target) {
    target.style.display = 'none';
};

let Game = document.getElementsByClassName('gameCenter')[0];
let GameCenterSelect = document.getElementsByClassName('i-frame')[0];
Game.onmouseenter = function () {
    show(GameCenterSelect)
};
Game.onmouseleave = function () {
    disappear(GameCenterSelect)
};
GameCenterSelect.onmouseleave = function () {
    disappear(GameCenterSelect)
};

let live = document.getElementsByClassName('Live')[0];
let liveSelect = document.getElementsByClassName('live-frame')[0];
live.onmouseenter = function () {
    show(liveSelect)
};
live.onmouseleave = function () {
    disappear(liveSelect)
};
liveSelect.onmouseleave = function () {
    disappear(liveSelect)
};

let BML = document.getElementsByClassName('BML')[0];
let BMLSelect = document.getElementsByClassName('BML-box')[0];
BML.onmouseenter = function () {
    show(BMLSelect)
};
BML.onmouseleave = function () {
    disappear(BMLSelect)
};
BMLSelect.onmouseleave = function () {
    disappear(BMLSelect)
};

let Download = document.getElementsByClassName('Download')[0];
let downloadSelect = document.getElementsByClassName('appDownload')[0];
Download.onmouseenter = function () {
    show(downloadSelect)
};
Download.onmouseleave = function () {
    disappear(downloadSelect)
};
downloadSelect.onmouseleave = function () {
    disappear(downloadSelect)
};

let headIcon = document.getElementsByClassName('head-icon')[0];
let loginShow = document.getElementsByClassName('login')[0];
headIcon.onmouseenter = function () {
    show(loginShow)
};
headIcon.onmouseleave = function () {
    disappear(loginShow)
};
loginShow.onmouseleave = function () {
    disappear(loginShow)
};

let history = document.getElementsByClassName('his-btn')[0];
let hisSelect = document.getElementsByClassName('history')[0];
history.onmouseenter = function () {
    show(hisSelect)
};
history.onmouseleave = function () {
    disappear(hisSelect)
};
hisSelect.onmouseleave = function () {
    disappear(hisSelect)
};

let downNav = document.getElementsByClassName('up-load')[0];
let navSelect = document.getElementsByClassName('up-nav')[0];
downNav.onmouseenter = function () {
    show(navSelect)
};
downNav.onmouseleave = function () {
    disappear(navSelect)
};
navSelect.onmouseleave = function () {
    disappear(navSelect)
};

let allShow = document.getElementsByClassName('p-show');
let allSelects = document.getElementsByClassName('sub-nav');
for (let k = 0; k < allShow.length; k++) {
    allShow[k].onmouseenter = function () {
        show(allSelects[k])
    };
    allShow[k].onmouseleave = function () {
        disappear(allSelects[k])
    };
}


