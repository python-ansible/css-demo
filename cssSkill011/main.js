//思路
// 点击时移动位置，加入红色，去掉兄弟的红色
// 每个图片自动点击
// 定时去触发点击的动作
// setInterval(() => {})
var allButtons = $('#buttons > span')

for (let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))

    })
}

var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')

var timerId = setTimer()

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
    timerId = setTimer()
})

function activeButton($button) {
    $button.addClass('red')
            .siblings('.red').removeClass('red')
}
function setTimer() {
    return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
}, 2000)
}
