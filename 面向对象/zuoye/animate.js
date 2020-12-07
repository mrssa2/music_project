/**
 * 原生js动画函数
 * @param obj      domElement    必选 dom对象 
 * @param number   target        必选 目标值
 * @param function callback      可选 回调函数,动画执行完毕,如果存在回调函数则调用
 */

function animate( domElement, target , callback ){
    clearInterval( domElement.timer );

    domElement.timer = setInterval(function(){
        if( domElement.offsetLeft == target ){
            clearInterval( domElement.timer );

            callback && callback();
            
            return;
        }

        var speed = ( target - domElement.offsetLeft ) / 10;
        speed = speed >= 0 ? Math.ceil( speed ) : Math.floor( speed );

        domElement.style.left = domElement.offsetLeft + speed + "px";
    }, 20 );
}