//九宫格大转盘
//可用次数 var count = 3;
var i = null;//初始位置，
var speed = 80;//转动速度
var ok = null;//产生0-11的整数，标记中奖位置
var count = null;//总变化次数
var nowcount = null;//当前的变化位置
var n = 5;//圈数
var paly = false;
var xq = 0;
var resutHTML
let modalRewardContent = document.querySelector('.mi-reward-content')
let modal = document.querySelector('.mi-fix')
let close = document.querySelector('.mi-fix-close')
let closeBtn = document.querySelector('.mi-button')

close.onclick = function () {
    modal.style.display = 'none'
}

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none'
    } else if (e.target === closeBtn) {
        modal.style.display = 'none'
    }
})


function showResult(re) {

    switch (re) {
        case 0:
            resutHTML = `       
                <img class="mi-fix-reward" src="build/images/e2532f4e08b8e221dc2e.png" alt="">
                <p class="mi-resultTxt">谢谢参与，再接再厲</p>             
                `;
            break
        case 1:
            resutHTML = `       
                <img class="mi-fix-reward" src="build/images/f7caefde894fa8ef39f0.png" alt="">
                <p class="mi-resultTxt">恭喜获得 1000积分</p>               
                `;
            break
        case 2:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/4d0d98e73c97da07391a.png" alt="">
                <p class="mi-resultTxt">恭喜获得 大红包</p>               
                `;
            break
        case 3:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/e74b8fa52a2e5c17e1a6.png" alt="">
                <p class="mi-resultTxt">恭喜获得 最新Iphone</p>
                `
            break
        case 4:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/4d0d98e73c97da07391a.png" alt="">
                <p class="mi-resultTxt">恭喜获得 小红包</p>
                `;
            break
        case 5:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/d70f2e14fe3cf3c08886.png" alt="">
                <p class="mi-resultTxt">恭喜获得 500积分</p>
                `;
            break
        case 6:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/e2532f4e08b8e221dc2e.png" alt="">
                <p class="mi-resultTxt">谢谢参与，再接再厲</p>
                `;
            break
        case 7:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/4d0d98e73c97da07391a.png" alt="">
                <p class="mi-resultTxt">恭喜获得 中红包</p>
                `;
            break
        case 8:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/b8685523f286e2ae125a.png" alt="">
                <p class="mi-resultTxt">恭喜获得 Mac Book Pro</p>
                `;
            break
        case 9:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/2263eeee69da4aebf79d.png" alt="">
                <p class="mi-resultTxt">恭喜获得 100积分</p>
                `
            break
        case 10:
            resutHTML = `
                <img class="mi-fix-reward" src="build/images/ba1107ec31e9d3e9bc6a.png" alt="">
                <p class="mi-resultTxt">恭喜获得 Apple watch</p>
                `;
            break
    }
}

function initializeVariable() {
    i = null;
    speed = 80;
    ok = null;
    count = null;
    nowcount = null;
    n = 5;
    paly = false;
    xq = 0;
    $(".lottery-unit").removeClass("select");
}

function dong() {//利用递归模拟setinterval的实现
    if (nowcount > count) {
        setTimeout(function () {
            paly = false;
            // alert("恭喜你，中了" + eval(ok) + "等奖");
            showResult(ok);
            modalRewardContent.insertAdjacentHTML('beforeend', resutHTML)
            modal.style.display = 'block'
            initializeVariable()
        }, 500);
    } else {
        nowcount += 1;
        if (i > 10) {
            xq += 1;
            if (xq === n - 1) {
                speed = 300;
            }
            $(".lottery-unit").removeClass("select");
            $(".lottery-unit-11").addClass("select");
            i = 0;
        } else {
            $(".lottery-unit").removeClass("select");
            $(".lottery-unit-" + i).addClass("select");
            i += 1;
        }

        setTimeout(dong, speed);
    }


}

$(".lottery-start").click(function () {
    if(modalRewardContent.hasChildNodes()) {
        $('.mi-fix-reward').remove()
        $('.mi-resultTxt').remove()
    }
    if (!paly) {
        if (count === 0) {
            alert("已经没有机会，下次再来！");
        } else {
            //产生0-9的整数，标记中奖位置
            ok = Math.floor((Math.random() * 10));
            // ok=6;
            console.log(ok);
            count = n * 12 + ok;//总变化次数
            nowcount = 0;//当前的变化位置
            i = 0;//初始位置，
            paly = true;
            count -= 1;
            dong();
        }


    } else {

    }

});