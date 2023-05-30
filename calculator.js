var x=document.getElementById("ans");
function val(c)
{
x.value+=c;
}
function cl()
{
    x.value="";
}
function ex()
{
    x.value=eval(x.value);
}