function showhide(showId)
{
	if(document.getElementById(showId).style.display=='block') //若已显示，点击关闭
	{
   		document.getElementById(showId).style.display = 'none'; 
   		document.getElementById(showId+"1").style.opacity = 0.5; 
   		jc.style.display='none';
   		cjy.style.display='none';
   		zj.style.display='none';
   		qfy.style.display='none';
   		theme.style.display='block';
    }
    else  //若未显示，点击直接关闭所有并显示该div
    {  	
   		jc.style.display='none';
   		cjy.style.display='none';
   		zj.style.display='none';
   		qfy.style.display='none';
   		theme.style.display='none';
   		jc1.style.opacity=0.5;
   		cjy1.style.opacity=0.5;
   		zj1.style.opacity=0.5;
   		qfy1.style.opacity=0.5;
   		document.getElementById(showId).style.display = 'block';
   		document.getElementById(showId+"1").style.opacity = 1; 
    }
}