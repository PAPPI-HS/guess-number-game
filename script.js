'use strict';

let my_rand_num = Math.floor(Math.random()*20) + 1;
let score = 20 ;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        document.querySelector('.message').textContent = ' NO NUMBER!!';
    } 
    else if (guess === my_rand_num)  {
        document.querySelector('.message').textContent = ' CORRECT!';
        document.querySelector('.number').textContent = my_rand_num;
        document.querySelector('body').style.backgroundColor = '#54E346'
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else if (guess > my_rand_num){
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = ' TOO HIGH!';
            document.querySelector('.score').textContent = score;
            
        }
        else{
            document.querySelector('.message').textContent = 'YOU LOST!! BOOO!'
        }
        
    }
    else if (guess < my_rand_num){
        if (score>1){
            score--;
            document.querySelector('.message').textContent = ' TOO LOW!';
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'YOU LOST!! BOOO!'
            
        }
    }
    
    
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20 ;
    let my_rand = Math.floor(Math.random()*20) + 1;
    my_rand_num = my_rand 
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = NaN

})









console.log(my_rand_num)
console.log(highscore)










//  if ( guess === my_rand_num){
//     document.querySelector('.message').textContent='CORRECT !' ;
//     document.querySelector('.highscore').textContent = score ;
//     document.querySelector('.number').textContent = my_rand_num ;
// } else {
//     document.querySelector('.message').textContent = 'WRONG !';
//     score -= 1 ;
//     document.querySelector('.score').textContent = score;
    
// }