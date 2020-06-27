

function setnum(num)
{
    console.log(num);
    var r =document.getElementById("result");
    r.value += num;
    
}

function clr()
{
    var r =document.getElementById("result");
    r.value ="";
    var r1 =document.getElementById("result1");
    r1.value ="";
}
function rslt()
{
    var r =document.getElementById("result");
    var r1 =document.getElementById("result1");
    r1.value = r.value; 
    r.value = eval(r.value);
    
}

