class Register{
    constructor(){
        //获取设置密码
        this.password = document.querySelector('#ps');
        this.password1 = document.querySelector('.ps');
        //获取设置昵称
        this.name = document.querySelector('#nickname');
        this.name1 = document.querySelector('.nickname')
        this.sure = document.querySelector('#sure');
        this.arr = [false,false];
        //添加事件
        this.addEvent();
    }
    addEvent(){
        //记录this实例对象
        let that = this;
        //前端验证，失焦事件
        this.password.onblur = function(){
            let re = /^\w{6,}$/;
            let ps =this.value;
            if(re.test(ps)){
                that.password1.style.color = 'green';
                that.arr[0] = true;
            }else{
                that.password1.style.color = 'red';
                that.arr[0] = false;
            }
        }
        this.name.onblur = function(){
            let re = /^[a-z]{2,7}$/;
            let use = this.value;
            if(re.test(use)){
                that.name1.style.color = 'green';
                that.arr[1] = true;
            }else{
                that.name1.style.color = 'red';
                that.arr[1] = false;
            }
        }
        this.sure.onclick = function(){
            if(that.arr.includes(false)){
                alert('请完善信息');
            }else{
                //后端验证
                //获取当前密码
                let ps = that.password.value;
                //获取当前昵称
                let name = that.name.value;
                 //1、查询数据
               let cookie_str = $.cookie('names') ? $.cookie('names') : '';
               //2、转对象
               let cookie_obj = convertStrToObj(cookie_str);
            //    判断对象中是否有当前注册的用户名
                if(name in cookie_obj){
                    alert('用户已存在!');
                    return ;
                }else{
                    cookie_obj[name] = ps;
                    $.cookie('name',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
                    location.href = "./cart.html";
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
new Register();
