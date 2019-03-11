var loc = 1;
function doSlide() {
    setInterval(function () {
         var img=document.getElementById("lunbo").getElementsByTagName("img");  //获取img标签   
         for (var i = 0; i < img.length; i++) {
                    if (i == loc-1) {
                        img[i].className = "show";       //分配图片class属性                            
                    }
                    else {
                        img[i].className = "hide";                              
                    }
                }
                loc++;                                                                 
                if (loc == 13) {              //循环播放
                    loc = 1;
                }
            }, 3000);                 //设定间隔时间                                               
        }
function fdpw2()               //注册覆盖弹窗
{
    alert("Sorry,this function is being developed.\nMaybe you can register another account.");
    window.location.href='register/register.html';
    window.event.returnValue = false;
}