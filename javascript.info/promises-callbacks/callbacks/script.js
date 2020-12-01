

const btn = document.querySelector('.btn');
function go(){
    
    showCircle(100,100,50, function( div ){
    
        console.log('callback');
    })
}

btn.addEventListener('click', () => go() );

function showCircle(cx,cy,radius , callback){
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    callback();
}

