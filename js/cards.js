$(document).ready(function(){
    $('.card').click(function(e){
    e.preventDefault();
    $(this).toggleClass('flipped');
    })
})

$(document).ready(function(){
    $('.card1').click(function(e){
        e.preventDefault();
        $(this).toggleClass('flipped1');
    })
})