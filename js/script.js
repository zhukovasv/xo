/**
 * Created by sveta on 02.03.2015.
 */
$(document).ready(function() {
    var
        elementsNum = 3;

    createBoard(elementsNum);

    function createBoard (elements){
        var
            elementDiv = '',
            i = 0;

        for (i; i<elements * elements; i++) {
            elementDiv += '<div id="'+i+'" class="board_element"></div>';
        }
        $('.xo_board').html(elementDiv);
    }
});