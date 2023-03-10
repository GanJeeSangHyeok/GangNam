       
       let target = document.querySelector('body');
       let btn = document.querySelector('#Button');



       $(btn).click(function(){
        if (btn.value==='night'){
            $(target).css('backgroundColor','black');
            $(target).css('color','white');
            btn.value ='day';
    
           }
           else{
    
            $(target).css('backgroundColor','white');
            $(target).css('color','black');
            btn.value ='night';
    
           }
       })