var images =["av.png","Mini.jpeg","papa.jpg","adi.jpg","appu_amma.jpeg","soman1.jpeg"];
var name1 =["Agastya","Mini","Vinod","Adikrit","Vasumathy","Soman"];
var i=0;
function nextslide()
{
document.getElementById("i1").src=images[i];
document.getElementById("r1").innerHTML=name1[i];
i++;
}
