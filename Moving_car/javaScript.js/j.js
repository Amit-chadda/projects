var y ;
 m = 0;
 
function start()
{   
   y = setInterval(run , 100);
    function run(){
    if(m==1120)
    {
        clearInterval(y);
        m=0;
    }
    else
    {
    m +=20;
    var x = document.getElementById('bike');
        x.style.marginLeft = m + "px";
}
}
}
function stop(){
    clearInterval(y);
}
function rev(){
    y = setInterval(run , 100);
    function run(){
    if(m==0)
    {
        clearInterval(y);
        m=1120;
    }
    else
    {
    m -=20;
    var x = document.getElementById('bike');
        x.style.marginLeft = m + "px";
}
}

}


