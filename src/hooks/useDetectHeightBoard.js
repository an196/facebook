import { useState } from 'react';

const useDetectHeightBoard = () =>{
    function getHeight (boardHeigt, adjustCount) {
        let newheightBoard = boardHeigt;
        var body = document.body,
			html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight, 
			html.clientHeight, html.scrollHeight, html.offsetHeight );

		if(height <  (boardHeigt + adjustCount)){
			newheightBoard = height - adjustCount;
		}
        return newheightBoard
    }

    return {getHeight}
}

export default useDetectHeightBoard;