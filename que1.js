function num(i)
{
    if (i>100) return
    console.log(i);
    num(i+1)
}   
num(1)