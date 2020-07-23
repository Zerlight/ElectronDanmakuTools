function init() {
    var scrn = window.document.getElementById('dm-screen');
    scrn.style.width = window.innerWidth + 'px';
    scrn.style.height = window.innerHeight + 'px';
    scrn.style.opacity = 1;
    damoo = new Damoo('dm-screen', 'dm-canvas', 15, "Arial");
    damoo.play();
    damoo.emit({ text: 'Zerdot弹幕系统初始化完毕', color: '#' + Math.random().toString(16).substring(2).substring(0, 6) });
    damoo.emit({ text: '测试一下~~', color: '#' + Math.random().toString(16).substring(2).substring(0, 6) });
}