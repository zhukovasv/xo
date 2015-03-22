/**
 * Created by sveta on 02.03.2015.
 */
$(function() {
    var
        elementsNum = 3,
        player = 0,
        playerSign = 'xo_x',
        winner = '';
    createBoard(elementsNum);

    $('.board_element .xo').mouseenter(function(){
        $(this).addClass(playerSign + ' temp');
    });

    $('.board_element .xo').mouseleave(function(){
        $(this).removeClass(playerSign + ' temp');
    });

    $('.board_element').click(function(){
        //console.log($(this).children('.playerMove'));
        if($(this).children('.playerMove').length == 0) {
            $(this).html('<div class = "playerMove ' + playerSign + '" id = "' + $(this).attr('id') + '/' +playerSign +'"></div>');
            if (player == 0) {
                player = 1;
                playerSign = 'xo_o';
            } else {
                player = 0;
                playerSign = 'xo_x';
            }
            moveCheck(player);
        }
    });

    function moveCheck (player) {
        var tempArr = [],
            xArr = [],
            oArr = [];
        $.each($('.playerMove'), function(){
            tempArr = $(this).attr('id').split('/');
            if (tempArr[1] == 'xo_x'){
                xArr.push(tempArr[0]);
            }
            if (tempArr[1] == 'xo_o'){
                oArr.push(tempArr[0]);
            }
        });
        //console.log(childNodes.length)
        //x_win, .o_win, .no_win
        if (movesCheck(xArr)) {
            $('.x_win').show();
            console.log('winner x');
            winner = 0;
        }
        if (movesCheck(oArr)) {
            console.log('winner o');
            $('.o_win').show();
            winner = 1;
        }
    }

    function movesCheck(arr) {
        if( ($.inArray('0', arr) != -1) && ($.inArray('4', arr)!=-1) && ($.inArray('8', arr)!=-1)) {
            return true;
        }if( ($.inArray('0', arr) != -1) && ($.inArray('1', arr)!=-1) && ($.inArray('2', arr)!=-1)) {
            return true;
        }if( ($.inArray('3', arr) != -1) && ($.inArray('4', arr)!=-1) && ($.inArray('5', arr)!=-1)) {
            return true;
        }if( ($.inArray('5', arr) != -1) && ($.inArray('7', arr)!=-1) && ($.inArray('8', arr)!=-1)) {
            return true;
        }if( ($.inArray('2', arr) != -1) && ($.inArray('4', arr)!=-1) && ($.inArray('5', arr)!=-1)) {
            return true;
        }if( ($.inArray('0', arr) != -1) && ($.inArray('3', arr)!=-1) && ($.inArray('5', arr)!=-1)) {
            return true;
        }if( ($.inArray('1', arr) != -1) && ($.inArray('4', arr)!=-1) && ($.inArray('7', arr)!=-1)) {
            return true;
        }if( ($.inArray('2', arr) != -1) && ($.inArray('5', arr)!=-1) && ($.inArray('8', arr)!=-1)) {
            return true;
        }
    }

    function changePlayer (player){
        if (player == 0) {
            player = 1;
            playerSign = 'xo_o';
        } else {
            player = 0;
            playerSign = 'xo_x';
        }
    }

    function createBoard (elements){
        var
            elementDiv = '',
            i = 0,
            playerClass = 'xo_x';
        if (player == 0) {
            playerClass = 'xo_o';
        }
        for (i; i<elements * elements; i++) {
            elementDiv += '<div id="'+i+'" class="board_element"><div class="xo"></div></div>';
        }
        $('.xo_board').html(elementDiv);
    }
});