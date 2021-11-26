
$.get(`../data/list.json?t=${new Date().getTime()}`,(data)=>{
    $('#goods_num').text(data.product.length);
    $.each(data.product,(index,product)=>{
        $('main #img').append(`
        <a href="list.html">
            <div class="good">
                <img src="${product.img}" alt="">
                <p class="p1">${product.name}</p>
                <h6 class="h6">${product.describe}</h6>
                <h5 class="h5">${product.price}</h5>
            </div>
        </a>
    `);
    if((index + 1) % 3 === 0){
        $('#img').eq(index).addClass('good1');
    }
    })  
})

//aside
//滚动事件
$(window).scroll(function(){
    console.log($(document).height());
    console.log($(window).height());
    if($('aside').offset().top >= 700){
        $('aside').css('opacity',1);
    }else{
         $('aside').css('opacity',0);
    }
    $('aside #a1').click(function(){
        $(document).height() == 0;
    })
    console.log($(document).height());
})