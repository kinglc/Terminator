function ini()//初始化
{
	jc.style.opacity=0.7;
	jcqq.style.display='none';
	jcgame.style.display='none';
	zj.style.opacity=0.7;
	zjqq.style.display='none';
	zjgame.style.display='none';
	cjy.style.opacity=0.7;
	cjyqq.style.display='none';
	cjygame.style.display='none';
	qfy.style.opacity=0.7;
	qfyqq.style.display='none';
	qfygame.style.display='none';
	qr.style.display='none';
}

function fjc()
{
	if(jc.style.opacity==1)//若已亮则透明，二维码显示
	{
		ini();
		qr.style.display='block';
	}
	else
	{
		ini();
		jc.style.opacity=1;
		var num=Math.random();
		// 7种随机事件
		if (num<0.15)
		{
			alert("对方正忙，并随手给你扔了一只技术总监");
			fcjy();
		}
		else if (num<0.3) 
		{
			alert("对方正忙，并随手给你扔了一只程序猿");
			fzj();
		}
		else if(num<0.45)
		{
			alert("对方正忙，并随手给你扔了一只UI设计");
			fqfy();
		}
		else if(num<0.6)
		{
			alert("对方wa的一声哭了出来，并把你扔到了杭电");
			window.open("http://acm.hdu.edu.cn/listproblem.php?vol=1");
			jc.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.7)
		{
			alert("对方正在决定拿谁祭天，请稍后联系");
			jc.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.8)
		{
			alert("对方正在沉迷不思议迷宫，欢迎加入！\nhttp://gumballs.leiting.com/fab.php?id=M134845");
			jcgame.style.display='inline';
		}
		else
		{
			alert("恭喜你！获得了项目经理的联系方式！");
			jcqq.style.display='inline';		
		}
	}
}
function fzj()
{
	if(zj.style.opacity==1)
	{
		ini();
		qr.style.display='block';
	}
	else
	{
		ini();
		zj.style.opacity=1;
		var num=Math.random();
		if (num<0.15)
		{
			alert("对方正忙，并随手给你扔了一只技术总监");
			fcjy();
		}
		else if (num<0.3) 
		{
			alert("对方正忙，并随手给你扔了一只项目经理");
			fjc();
		}
		else if(num<0.45)
		{
			alert("对方正忙，并随手给你扔了一只UI设计");
			fqfy();
		}
		else if(num<0.6)
		{
			alert("对方wa的一声哭了出来，并给你扔了一大堆学生会工作");
			window.open("http://weibo.com/bitsu");
			zj.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.7)
		{
			alert("对方正在拿技术总监祭天，请稍后联系");
			zj.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.8)
		{
			alert("对方正在王者峡谷遨游，要一起开黑吗？\nhttp://pvp.qq.com/");
			zjgame.style.display='inline';
		}
		else
		{
			alert("恭喜你！获得了程序猿的联系方式！");
			zjqq.style.display='inline';		
		}
	}
}
function fcjy()
{
	if(cjy.style.opacity==1)
	{
		ini();
		qr.style.display='block';
	}
	else
	{
		ini();
		cjy.style.opacity=1;
		var num=Math.random();
		if (num<0.15)
		{
			alert("对方正忙，并随手给你扔了一只项目经理");
			fjc();
		}
		else if (num<0.3) 
		{
			alert("对方正忙，并随手给你扔了一只程序猿");
			fzj();
		}
		else if(num<0.45)
		{
			alert("对方正忙，并随手给你扔了一只UI设计");
			fqfy();
		}
		else if(num<0.6)
		{
			alert("对方正在存储种子并扔给了你几十个T的种子");
			window.open("https://npupt.com/login.php");
			cjy.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.7)
		{
			alert("对方正在运行Android Studio，请稍");
			cjy.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.8)
		{
			alert("对方正在吃鸡并邀请你加入吃鸡队伍\nhttp://store.steampowered.com/app/578080/agecheck ");
			cjygame.style.display='inline';
		}
		else
		{
			alert("恭喜你！获得了技术总监的联系方式！");
			cjyqq.style.display='inline';		
		}
	}
}
function fqfy()
{
	if(qfy.style.opacity==1)
	{
		ini();
		qr.style.display='block';
	}
	else
	{
		ini();
		qfy.style.opacity=1;
		var num=Math.random();
		if (num<0.15)
		{
			alert("对方正忙，并随手给你扔了一只技术总监");
			fcjy();
		}
		else if (num<0.3) 
		{
			alert("对方正忙，并随手给你扔了一只程序猿");
			fzj();
		}
		else if(num<0.45)
		{
			alert("对方正忙，并随手给你扔了一只项目经理");
			fjc();
		}
		else if(num<0.6)
		{
			alert("对方正在沉迷python，并把你扔到了神奇的OJ");
			window.open("http://python123.io/");
			qfy.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.7)
		{
			alert("对方正在睡觉，请稍后联系");
			qfy.style.opacity=0.7;
			qr.style.display='block';
		}
		else if(num<0.8)
		{
			alert("对方正在沉迷剑3，欢迎加入！\nhttp://jx3.xoyo.com/");
			qfygame.style.display='inline';
		}
		else
		{
			alert("恭喜你！获得了UI设计的联系方式！");
			qfyqq.style.display='inline';		
		}
	}
}

move();