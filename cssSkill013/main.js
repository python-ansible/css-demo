// 点击按钮弹出浮层
// 点击别处关闭浮层
// 点击浮层时，浮层不得关闭
// 再次点击按钮，浮层消失

// jQuery
$(clickMe).on('click', function () {
    if (popover.style.display === 'block') {
        $(popover).hide()
    } else {
        $(popover).show()
        $(document).one('click', function () {
            $(popover).hide()
        })
    }
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})
// $(wrapper).on('click', false)
// false ==== preventDefault && stopPropagation
// preventDefault 会导致 checkbox 失效
// setTimeout(function() {},0) 等一会再执行


// DOM 方案
// clickMe.addEventListener('click', function (e) {
//     popover.style.display = 'block'
// })
//
// wrapper.addEventListener('click', function (e) {
//     e.stopPropagation()
// })
//
// document.addEventListener('click', function (e) {
//     popover.style.display = 'none'
// })