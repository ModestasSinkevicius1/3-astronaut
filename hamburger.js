function toggleBar()
{
    var x = document.getElementById("list-down");
    if(x.style.display === "block")    
        x.style.display = "";    
    else
    {
        x.style.display = "block";
    }
}