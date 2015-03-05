/**
 * Created by sveta on 02.03.2015.
 */
$(document).ready(function() {
    var
        elementsNum = 3;

    createBoard(elementsNum);

    function player () {
        var
            playerType = $('.player').val();
        if (playerType == '1') {
            return true;
        }
        return false;
    }

    function createBoard (elements){
        var
            elementDiv = '',
            i = 0,
            playerClass = 'xo_x';
        if (player()) {
            playerClass = 'xo_o';
        }
        for (i; i<elements * elements; i++) {
            if (i & 1) {
                playerClass = 'xo_x';
            } else {
                playerClass = 'xo_o';
            }
            elementDiv += '<div id="'+i+'" class="board_element"><div class="xo ' + playerClass + '"></div></div>';
        }
        $('.xo_board').html(elementDiv);
    }
});