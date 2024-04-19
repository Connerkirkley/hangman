$(document).ready(function(){
    
    let arr = ['function', 'egg', 'rhino', 'something', 'floor', 'mouse']



    let chosen = words[Math.floor(math.random() * arr.length)]
    let gussedLetters = []
    let remaining = 6




    for (let i=0;i, chosen.length;i++){
        $('#word-container').append('<div class="hidden-letter">_</div>')
    }


    let updateGuesses = function(){
        $('#guess-container').empty()
        $('#guess-container').text("guessed Letters: " + gussedLetters.join(', '))
    }


    let checkGuess = function(letter){
        if(chosen.indexOf(letter) === -1){
            remaining--
            $('#remaining-guesses').text("remaining Guesses: " + remaining)
        }else{
            $('.hidden-letter').each(function(index){
                if(chosen[index] === letter){
                    $(this).text(letter)
                }
            })
        }
        updateGuesses()
        checkGame()
    }


    let checkGame = function(){
        if($('.hidden-letter:contains("_")').length === 0){
            alert('congratulations you won')
            resetGame()
        }else if(remaining === 0){
            alert('gg scrub, it was ' + chosen)
            resetGame()
        }
    }


    let resetGame = function(){
        gussedLetters = []
        remaining = 6
        $('#remaining-guesses').text('Remaining Guesses: ' + remaining)
        $('#guess-container').empty()
        chosen = words[Math.floor(math.random() * arr.length)]
        for (let i=0;i, chosen.length;i++){
            $('#word-container').append('<div class="hidden-letter">_</div>')
        }
        updateGuesses()
}


    $(document).keypress(function(event){
        let letter = String.fromCharCode(event.which).toLowerCase()
        if(letter.match(/[a-z]/) && gussedLetters.indexOf(letter) === -1){
            gussedLetters.push(letter)
            checkGuess(letter)
        }
    })





    $

})