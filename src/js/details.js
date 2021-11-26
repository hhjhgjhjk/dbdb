//滚动
$(window).scroll(function(){
    let top = $(document).scrollTop();
    console.log(top);
    if(top >= 200){
        $('#run').css('opacity','1'); 
        $('#run').css('position','fixed');
        $('#run').css('background','white');
        // $("#run").slideDown();
    }else{
        $('#run').css('opacity','0'); 

    }
    
})


//弹窗
$(function(){
    $('#p3').click(function(){
        $('#popout').show();
    })
    $('#p3 a').click(function(){
        $('#popout').show();
    })
    $('#wrong').click(function(){
        $('#popout').hide();
    })
})

// product
class Product{
    constructor(){
        this.$chose = $('#chose');
        //获取颜色
        this.$pen = $('#pen');
        this.$pencil = $('#pencil');
        this.$suit = $('#suit');
        //减号
        this. $minus = $('minus');
        //加号
        this.$plus = $('#plus');
        //购物车
        this.$cart = $('#cart');
        //加入购物车
        this.$join = $('#join');
        //立即购买
        this.$buy = $('#buy');

        //添加事件
        this.addEvent();
    }
    addEvent(){
        //记录实例对象
        let that = this;
        // alert(that);
        this.$pen.click(function(){
            that.$pen.css('border','#df1010');
            that.$pen.css('color','#df1010');
            let $penval = that.$pen.text();
            that.$chose.text($penval);
        })
        this.$pencil.click(function(){
            that.$pencil.css('border','#df1010');
            that.$pencil.css('color','#df1010');
            let $pencilval = that.$pencil.text();
            that.$chose.text($pencilval);
            })
        this.$suit.click(function(){
            that.$suit.css('border','#df1010');
            that.$suit.css('color','#df1010');
            let $suitval = that.$suit.text();
            that.$chose.text($suitval);
        })
        //查看购物车按钮
        this.$cart.click(()=>{
            location.href = '../html/cart.html';
        })
       //遍历加入购物车
       this.$join.each(function(){
             
       })
    }
}
new Product();