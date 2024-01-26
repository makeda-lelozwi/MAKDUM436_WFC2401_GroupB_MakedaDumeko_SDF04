let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false

//my problems started when we introduced this empty string next in the message variable...everytime i ran the code it would give the empty string in the console and not one of the messages like "you're out". My mistake: i didn't add messageEl.textContent = message into the renderGame() function.    
let message = ""

//grabbing the elements and saving them into variables became almost automatic and it actually blew my mind a little that getElementById() was a function. But it makes sense because: a) syntax but also, b) in the passenger counter lesson the instructor was like, the whole html document is an object. 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Lelo",
    chips: 200
}


//the fact that this is just out in the open (not wrapped in a function or variable) makes me feel so uncomfortble... i feel like it needs to be wrapped in something but it's actually fine like this and I'm just used to defining variables and functions so much at this point😭😭
playerEl.textContent = player.name + ": " + "$" + player.chips

//this was my fav part of the whole lesson. It reminded me of how we have to tackle problems in stats and so I felt very comfy with the logic behind solving the problem
function getRandomCard() {
   let randomNumber = Math.floor( Math.random()*13 ) + 1
   if (randomNumber === 1) {
       return 11
   } else if (randomNumber > 10) {
       return 10
   } else {
       return randomNumber
   }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    //in the video the instructor said our code is broken because we are able to start the game with one card....but im confused about that...isn't it that we hard-coded (ish) the game to start with 2 cards by defining the below array in the startGame() function?
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    
    //i would have never guessed that this is how you display the data of an array in order
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    //the easiest of the datatypes so far.  I really love how it combines the previous things we've coded with logic AND maths...too good👌
     if (sum <= 20) {
        message = "Do you want to draw a new card?" 
        hasBlackJack = false  
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out!"
        isAlive = false
        hasBlackJack = false
    } 
    messageEl.textContent = message 
 }
 
 //I overlooked the NB of "stopping" the game once the player is out/gets black jack but it's actually very necessary cause then you can keep going for no reason
 function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
     sum = sum + card 
     cards.push(card)
     renderGame()
    } 
 }
 
 
 
 

