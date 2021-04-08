import { yugiCards, kaibaCards, joeyCards, marikCards, maiCards } from './cards.js'

const startBtns = Array.from(document.querySelectorAll('[data-button]'))
const buttonContainer = document.querySelector('.button-container')
let d1Panel = document.getElementById('d1Panel')
let d2Panel = document.getElementById('d2Panel')
let logo = document.getElementById('logo')
let d1Cover = document.querySelector('#d1-cover')
let d2Cover = document.querySelector('#d2-cover')

class Duelist {
    constructor(name, _cards, avatar) {
        this.name = name;
        this.cards = _cards;
        this.avatar = avatar
        this.lifePoints = 8000;
        }   
}

const yugi = new Duelist("Yugi", yugiCards, '/images/dm01.png')
const kaiba = new Duelist("Kaiba", kaibaCards, '/images/dm02.png')
const marik = new Duelist("Marik", marikCards, '/images/dm10.png')
const joey = new Duelist("Joey", joeyCards, '/images/dm03.png')
const mai = new Duelist("Mai", maiCards, '/images/dm04.png')

let duelistArray = [yugi, kaiba, marik, joey, mai]
let duelingOpponent = duelistArray[Math.floor(Math.random() * 5)]

const duel = (duelist1, duelist2) => {
    let d1FieldCardElement = document.getElementById('duelist1-monster')
    let d2FieldCardElement = document.getElementById('duelist2-monster')
    let duelist1AtkPanel = document.getElementById("duelist1-panel-atk")
    let duelist2AtkPanel = document.getElementById("duelist2-panel-atk")
    let duelist1Avatar = document.getElementById("duelist1-avatar")
    let duelist2Avatar = document.getElementById("duelist2-avatar")
    let duelist1CardImage = document.getElementById('duelist1-card')
    let duelist2CardImage = document.getElementById('duelist2-card')
    let result1 = document.getElementById('result1')
    let result2 = document.getElementById('result2')
    let battleText = document.getElementById('battleText')
    let tally1 = document.getElementById("duelist1-lp")
    let tally2 = document.getElementById("duelist2-lp")

    duelStart()
    function duelStart() {
        
        let duelist1Cards = duelist1.cards[Math.floor(Math.random() * 5)] 
        let duelist2Cards = duelist2.cards[Math.floor(Math.random() * 5)]
        
        duelist1CardImage.src = duelist1Cards.img
        duelist2CardImage.src = duelist2Cards.img
        duelist1Avatar.src = duelist1.avatar
        duelist2Avatar.src = duelist2.avatar
        duelist1AtkPanel.innerHTML = `ATK: ${duelist1Cards.attackPoints}`
        duelist2AtkPanel.innerHTML = `ATK: ${duelist2Cards.attackPoints}`
        result1.innerHTML = ""
        d1FieldCardElement.src = duelist1Cards.img
        d2FieldCardElement.src = duelist2Cards.img
        battleText.innerHTML = "VS"
        result2.innerHTML = ""
        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
        setTimeout(calculation, 1800)
        
        function calculation() {
            let attackDifference = Math.abs(duelist1Cards.attackPoints - duelist2Cards.attackPoints)
            if (duelist1Cards.attackPoints > duelist2Cards.attackPoints) {
               
                let finalVal = duelist2.lifePoints - attackDifference;
                let decrement = 25
                result2.innerHTML = `${duelist2.name} loses -${attackDifference} Life Points!`;
                d2FieldCardElement.src = ""
                battleText.innerHTML = ""
                result1.innerHTML = ""
                console.log(duelist2.lifePoints)
                console.log(finalVal)
                const counterDecrementer = () => {
                    if (duelist2.lifePoints > finalVal) {
                        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`
                        tally2.innerHTML = `${duelist2.name}: ${Math.ceil(duelist2.lifePoints -= decrement)}`
                        setTimeout(counterDecrementer, 10)
                    } else {
                        duelist2.lifePoints = finalVal
                        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`
                        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
                    }
                }
                counterDecrementer()
                
                setTimeout(checkForWin, 1000)
                
            } if (duelist2Cards.attackPoints > duelist1Cards.attackPoints) {
                /* duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                result1.innerHTML = `${duelist1.name} loses -${attackDifference} Life Points!`
                result2.innerHTML = ""
                battleText.innerHTML = ""
                d1FieldCardElement.src = ""
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                setTimeout(checkForWin, 1000) */
                let finalVal2 = duelist1.lifePoints - attackDifference;
                let decrement2 = 25
                result1.innerHTML = `${duelist1.name} loses -${attackDifference} Life Points!`;
                d1FieldCardElement.src = ""
                battleText.innerHTML = ""
                result2.innerHTML = ""
               
                const counterDecrementer2 = () => {
                    if (duelist1.lifePoints > finalVal2) {
                        tally1.innerHTML = `${duelist1.name}: ${Math.ceil(duelist1.lifePoints -= decrement2)}`
                        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
                        setTimeout(counterDecrementer2, 1)
                    } else {
                        duelist1.lifePoints = finalVal2
                        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`
                        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
                    }
                }
                counterDecrementer2()
                
                setTimeout(checkForWin, 1000)
            } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
                result1.innerHTML = ""
                result2.innerHTML = ""
                battleText.innerHTML = "Draw!"
                setTimeout(checkForWin, 1000)   
            }
        } 
    }

    const checkForWin = () => {
        if(duelist2.lifePoints <= 0) {
            duelist1Wins()
        } else if (duelist1.lifePoints <= 0) {
            duelist2Wins()
        } else {
            setTimeout(duelStart, 1800)
        }
    }

    const duelist1Wins = () => {
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
        result1.innerHTML = `${duelist1.name} is The King of Games`
        result2.innerHTML = ""
        battleText.innerHTML = ""
        d2FieldCardElement.src = ""
        d1FieldCardElement.src = duelist1.avatar
        d2Cover.style.display = "block"
        d2Cover.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"
        reset()
    }
    
    const duelist2Wins = () => {
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
        result2.innerHTML = `${duelist2.name} is The King of Games`
        result1.innerHTML = ""
        battleText.innerHTML = ""
        d1FieldCardElement.src = ""
        d2FieldCardElement.src = duelist2.avatar
        d1Cover.style.display = "block"
        d1Cover.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"
        reset()
        
    }

    function reset() {
        const resetButton = document.createElement('button')
        resetButton.classList.add('reset-btn')
        resetButton.innerHTML = "Reset"
        battleText.appendChild(resetButton)
        
        resetButton.addEventListener('click', () => {
            buttonContainer.classList.remove('hide')
            d1Panel.style.display ="none"
            d2Panel.style.display ="none"
            d1Cover.style.display = "none"
            d2Cover.style.display = "none"
            result1.innerHTML = ""
            result2.innerHTML = ""
            battleText.removeChild(resetButton)
            logo.style.display = "block"
            d1FieldCardElement.src = ""
            d2FieldCardElement.src = ""
            startGame()
        })
    }

    function startGame() {
        buttonContainer.classList.remove('hide')
        d1Panel.style.display ="none"
        d2Panel.style.display ="none"
        duelist1.lifePoints = 8000
        duelist2.lifePoints = 8000
        d1FieldCardElement.src = ""
        d2FieldCardElement.src = ""
    }
}

function displayPoints() {
    buttonContainer.classList.add('hide')
    d1Panel.style.display ="flex"
    d2Panel.style.display ="flex"
}

startBtns.forEach((btn, i) => {
    function playerSelect(player, opponent) {    
        btn.addEventListener('click', () => {
            while (player === opponent) {
                duelistArray.pop(opponent)
                opponent = duelistArray[Math.floor(Math.random() * 4)]
            }
            logo.style.display = "none"
            duel(player, opponent)
            displayPoints()
        })
    }
    switch (i) {
        case 0:
            playerSelect(yugi, duelingOpponent)
            break;
        case 1:
            playerSelect(kaiba, duelingOpponent)
            break;
        case 2:
            playerSelect(marik, duelingOpponent)
            break;
        case 3:
            playerSelect(joey, duelingOpponent)
            break;
        case 4:
            playerSelect(mai, duelingOpponent)
            break;
        default:
            alert("error")
    } 
})