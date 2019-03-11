var flag1,flag2,flag3,flag4;// 判断4种必要输入是否正确
// 初始化
function ini()
{
	document.getElementById("acicon").src="../register/image/register.png";
	document.getElementById("pwicon").src="../register/image/register.png";
	document.getElementById("pw2icon").src="../register/image/register.png";
	document.getElementById("emicon").src="../register/image/register.png";
}
// 检查ID
function checkId()
{
	var thisId=document.getElementById("acreg");
	if(thisId.value==""||thisId.value==null)	//未输入
	{
		document.getElementById("acicon").src="../register/image/register.png";
		document.getElementById("acnote").innerHTML="4-10 characters needed";
		flag1=0;
	}
	else if(thisId.value.length<4)	//少于4位
	{	
		document.getElementById("acicon").src="../register/image/wa.png";
		document.getElementById("acnote").innerHTML="Less than 4 characters!";
		flag1=0;
	}
	else if(thisId.value.length>10)	//长于10位
	{
		document.getElementById("acicon").src="../register/image/wa.png";
		document.getElementById("acnote").innerHTML="More than 10 characters!";
		flag1=0;
	}
	else	//符合条件
	{
		document.getElementById("acicon").src="../register/image/gou.png";
		document.getElementById("acnote").innerHTML="";
		flag1=1;
	}
	document.getElementById("acicon").style.display='inline';
}
// 检查密码
function checkPassword()
{
	var thisId=document.getElementById("pwreg");
	if(thisId.value==""||thisId.value==null)	//未输入
	{
		document.getElementById("pwicon").src="../register/image/register.png";
		document.getElementById("pwnote").innerHTML="6-16 characters needed";
		flag2=0
	}
	else if(thisId.value.length<6)	//小于6位
	{	
		document.getElementById("pwicon").src="../register/image/wa.png";
		document.getElementById("pwnote").innerHTML="Less than 6 characters!";
		flag2=0
	}
	else if(thisId.value.length>16)	//长于16位
	{
		document.getElementById("pwicon").src="../register/image/wa.png";
		document.getElementById("pwnote").innerHTML="More than 16 characters!";
		flag2=0
	}
	else if(isNaN(thisId.value) == false)	//全为数字
	{
		document.getElementById("pwicon").src="../register/image/wa.png";
		document.getElementById("pwnote").innerHTML="Not only input numbers!";
		flag2=0
	}
	else	//符合条件
	{
		document.getElementById("pwicon").src="../register/image/gou.png";
		document.getElementById("pwnote").innerHTML="";
		flag2=1;
	}
	document.getElementById("pwicon").style.display='inline';
}

function againPassword()
{
	var thisId=document.getElementById("pw2in");
	if(thisId.value==""||thisId.value==null)	//未输入
	{
		document.getElementById("pw2icon").src="../register/image/register.png";
		document.getElementById("pw2note").innerHTML="password should be same";
		flag3=0;
	}
	else if(pwreg.value!=thisId.value)	//与第一次输入不一致
	{
		document.getElementById("pw2icon").src="../register/image/wa.png";
		document.getElementById("pw2note").innerHTML="They are not same!";
		flag3=0;
	}
	else	//符合条件
	{
		document.getElementById("pw2icon").src="../register/image/gou.png";
		document.getElementById("pw2note").innerHTML="";
		flag3=1;
	}
	document.getElementById("pw2icon").style.display='inline';
}

function emailCheck(){
	var thisId=document.getElementById("emin");
	if(thisId.value==""||thisId.value==null)
	{
		document.getElementById("emicon").src="../register/image/register.png";
		document.getElementById("emnote").innerHTML="A usable e-mail needed";
		flag4=0;
	}
	// 格式错误
	else if(thisId.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1)
	{
		document.getElementById("emicon").src="../register/image/wa.png";
		document.getElementById("emnote").innerHTML="Wrong format!";
		flag4=0;
	}
	else	//符合条件
	{
		document.getElementById("emicon").src="../register/image/gou.png";
		document.getElementById("emnote").innerHTML="";
		flag4=1;
	}
	document.getElementById("emicon").style.display='inline';
}

function testAll()	//判断所有输入是否满足要求
{
	if(flag1&&flag2&&flag3&&flag4)
		{
			alert("Registered successfully!");
            this.location.href='../home.html';
		}
	else
	{
		alert("There are some errors in your register form.\nPlease fill in necessary part according to the notes!");
	}
}