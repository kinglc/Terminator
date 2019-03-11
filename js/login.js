function popDiv(showId, backId)
{
    document.getElementById(showId).style.display = 'block';
    document.getElementById(backId).style.display = 'block';
}
function hideDiv(showId, backId)
{
    document.getElementById(showId).style.display = 'none';
    document.getElementById(backId).style.display = 'none';
}

// 生成随机验证码
function createCode(){  
            var seed = new Array(  
                    'abcdefghijklmnopqrstuvwxyz',  
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',  
                    '0123456789'  
            );
            var idx,i;  
            var result = '';
            for (i=0; i<4; i++)
            {  
                idx = Math.floor(Math.random()*3);
                result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);
            }
            return result;
}
// 检测账号密码是否为空以及验证码是否正确
function test() {  
            var account=document.getElementById("aclogin").value;
            var password=document.getElementById("pwlogin").value;
            var input=document.getElementById("vcin").value;  
            var check=document.getElementById("vcre").innerHTML;  
            var i;
            if(account.length==0)
            {
                alert("Please input your account!");
            }
            else if (password.length==0) 
            {
                alert("Please input your password!");
            }
            else{
             for(i=0;i<4;i++)
              if(check[i]!=input[3-i])
                break;
            if(i==4) {  
                alert("Welcome!");  
                window.location.href='../home.html';
            } 
            else{  
                alert("Verification code is wrong!");  
            }  
        }
}
// 找回密码跳转注册
function fdpw()
{
    alert("Sorry,this function is being developed.\nMaybe you can register another account.");
    window.location.href='../register/register.html';
    window.event.returnValue = false;
}