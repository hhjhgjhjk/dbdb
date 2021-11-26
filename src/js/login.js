//点击豆瓣下载app
$(function(){
    $('#app img').click(function(){
        $(window).attr('location',"./app.html")
    })
})

//点击note时login出现
//点击password时ps出现
$('.password').click(function(){
    // $('.password').css('color','#333');
    $('#ps').css('display','block');
    $('#login').css('display','none');
})
$('.note').click(function(){
    // $('.note').css('color','#333');
    $('#ps').css('display','none');
    $('#login').css('display','block');
})

class Login{
    constructor(){
        //获取所有的input
        this.inp = document.querySelectorAll('#login input');
        //获取所有的a
        this.a = document.querySelectorAll('#login a');
        this.codeval = '';
        this.arr = [false,false];
        this.addEvent();
    }
    addEvent(){
        //记录实例对象
        let that = this;
        this.inp[1].onblur = function(){
            let re = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
            let us = this.value;
            if(re.test(us)){
                this.style.background = 'green';
                that.arr[0] = true;
            }else{
                this.style.background = 'red';
                that.arr[0] = false;
            }
        }
        this.a[1].onclick = function(){
            function fnColor3(){
                var str = '';
                var code = '';
                for(var i = 0; i <= 9;i ++){
                    str += i;
                }
                str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                for(var j = 0; j < 4;j ++){
                    code += str[Math.floor(Math.random() * 62)];
                }
                alert(code) ;
                that.codeval += code;
                console.log(that.codeval);
                that.inp[2].value = that.codeval;
            }
            fnColor3();
        } 
        this.inp[2].onblur = function(){
            if(this.value === that.codeval){
                this.style.background = 'green';
                that.arr[1] = true;
            }else{
                this.style.background = 'red';
                that.arr[1] = false;
            }
        }
        //点击登录豆瓣时
        this.a[2].onclick = function(){
            if(that.arr.includes(false)){
                alert('请完善信息');
                return;
            }else{
                let us = that.inp[1].value;
                let ps = that.inp[2].value;
                //后端验证
                //1、查询数据
               let cookie_str = $.cookie('users') ? $.cookie('users') : '';
                //2、转对象
                let cookie_obj = convertStrToObj(cookie_str);
                //3、是否存在
                if(us in cookie_obj){
                    // //将登陆成功的用户名存入cookie,有效期7天
                    // $.cookie('lo')
                    location.href = "../index.html";

                }else{
                    //将用户名存入cookie
                    cookie_obj[us] = ps;
                    $.cookie('users',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
                    location.href = "./register.html";
                }
            }
        }
    }
}
//转对象
function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
new Login();
class Ps{
    constructor(){
        //获取所有的input
        this.inp = document.querySelectorAll('#ps input');
        //获取所有的a
        this.a = document.querySelectorAll('#ps a');
        this.arr = [false,false];
        this.addEvent();
    }
    addEvent(){
        let that = this;//记录实例对象
        this.a[1].onclick = function(){
            let us = that.inp[0].value;
            let ps = that.inp[1].value;
            console.log(that.inp[1].value);
            //后端验证
             //1、查询数据
             let cookie_str = $.cookie('users') ? $.cookie('users') : '';
             //2、转对象
             let cookie_obj = convertStrToObj(cookie_str);
             if(us in cookie_obj){
                 if(ps === cookie_obj[us]){
                      //  alert('11')
                    //  $.cookie('logined',us,{expires : 7,path : '/'});
                    location.href = '../index.html';
                 }
             }else{
                 alert('用户名不存在！');
             }
        }
    }
}
new Ps();

