function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let = 0;
    let flag = true;
    
    //изображения фигур и их смещения
    let figure = {
        0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px','-372px -17px', '-484px -22px','-263px -19px'],
        1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
        6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
        7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px','-372px -116px', '-484px -116px','-263px -116px'],
    }; 
    
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++ ){
            if(j == 0) flag = !flag;
            block = document.createElement('div');
            
            if(flag) block.className = 'block black';
            else block.className = 'block white';
            
            
            //проверка строки, только потом переход к след элементу только тогда работает
            if(figure[i]!==undefined && figure[i][j]!==undefined){
                block.style.backgroundImage = 'url(сhess_symbols_set.png)';
                block.style.backgroundPosition = figure[i][j];
            }
                
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

drawChess();