$(function(){
    $('#right a').mouseover(function(){
        $(this).children('ul').show();
    })
})
$(function(){
    $('#right a').mouseout(function(){
        $(this).children('ul').hide();
    })
})
//banner

function Slider(){
    //大盒子
    this.big_box = document.querySelector('#banner');
    //大图li
    this.ul_li = this.big_box.children[0].children;
    //计算大图数量
    this.num = this.ul_li.length;
    //完善页面并返回所有的小圆点（ol li)
    this.ol_li = this.addEle();
    //当前下标
    this.cur_index = 0;
    //添加事件
    this.addEvent();
    //实现轮播
    this.slide();
    //自动轮播
    this.autoPlay();
}
Slider.prototype = {
    constructor : Slider,
    autoPlay(){
        this.timer = setInterval(() => {
            this.cur_index ++;
            if(this.cur_index === this.num){
                this.cur_index = 0;
            }
            this.slide();
        }, 3000);
        this.big_box.onmouseenter = function(){
            clearInterval(this.timer);
        }.bind(this);
        this.big_box.onmouseleave = function(){
            this.autoPlay();
        }.bind(this);
    },
    slide(){
        //所有大图none  所有圆点red
        for(let i = 0;i < this.num;i ++){
            this.ul_li[i].style.display = 'none';
            this.ol_li[i].style.backgroundColor = '#999';
        }
        //当前大图block 当前圆点blue
        this.ul_li[this.cur_index].style.display = 'block';
        this.ol_li[this.cur_index].style.backgroundColor = 'white';
    },
    addEvent(){
        //左按钮
        this.lt_btn.onclick = function(){
            this.cur_index --;
            if(this.cur_index === -1){
                this.cur_index = this.num - 1;
            }
            this.slide();
        }.bind(this);
        //右按钮
        this.rt_btn.onclick = function(){
            this.cur_index ++;
            if(this.cur_index === this.num){
                this.cur_index = 0;
            }
            this.slide();
        }.bind(this);   
        //小圆点
        for(let i = 0;i < this.num;i ++){
            this.ol_li[i].onclick = function(){
                this.cur_index = i;
                this.slide();
            }.bind(this);
        }
    },
    addEle(){
        //左按钮
        this.lt_btn = document.createElement('span');
        this.lt_btn.innerHTML = '&lt;';
        this.lt_btn.id = 'ltBtn';
        this.big_box.appendChild(this.lt_btn);

        //右按钮
        this.rt_btn = document.createElement('span');
        this.rt_btn.innerHTML = '&gt;';
        this.rt_btn.id = 'rtBtn';
        this.big_box.appendChild(this.rt_btn);
        //小圆点
        let ol = document.createElement('ol');
        let arr = [];
        for(let i = 0;i < this.num;i ++){
            let li = document.createElement('li');
            ol.appendChild(li);
            arr.push(li);
        }
        this.big_box.appendChild(ol);
        return arr;
    }
}
new Slider();


//footer
//购物说明

// $(function(){
//     $('.icon-shuoming2 span').click(function(){
//         //显示弹窗的主界面
//         $('.pop_main').show()
//         //设置animate动画初始值
//         $('.pop_con').css({'top':0,'opacity':0})
//         $('.pop_con').animate({'top':'50%','opacity':1})
//     })

    //取消按钮和关闭按钮添加事件
    // $('.cancel,.pop_title a').click(function(){
    //     $('.pop_con').animate({'top':0,'opacity':0},function(){
    //         //隐藏弹窗的主界面
    //         $('.pop_main').hide()
    //     })
    // })