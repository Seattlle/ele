/**
 * Created by Seattle on 2017/6/2.
 */
function resize(){
    var _width=window.innerWidth>750?750:window.innerWidth;
    var fontSize=_width/7.5;
    document.documentElement.style.fontSize=fontSize+"px";
}
resize();
window.onresize=resize;