let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let battleText = document.getElementById('battleText');
let tally1 = document.getElementById("duelist1-lp");
let tally2 = document.getElementById("duelist2-lp");
const startYugi = document.getElementById('yugi-btn')
const startKaiba = document.getElementById('kaiba-btn')
const startMarik = document.getElementById('marik-btn')
const startJoey = document.getElementById('joey-btn')
const startMai = document.getElementById('mai-btn')
let buttonContainer = document.querySelector('.button-container')
let duelist1CardImage = document.getElementById('duelist1-card')
let duelist2CardImage = document.getElementById('duelist2-card')
let duelist1AtkPanel = document.getElementById("duelist1-panel-atk")
let duelist2AtkPanel = document.getElementById("duelist2-panel-atk")
let duelist1Avatar = document.getElementById("duelist1-avatar")
let duelist2Avatar = document.getElementById("duelist2-avatar")
let d1Panel = document.getElementById('d1Panel')
let d2Panel = document.getElementById('d2Panel')
let logo = document.getElementById('logo')
let d1Cover = document.querySelector('#d1-cover')
let d2Cover = document.querySelector('#d2-cover')
let d1CardElement = document.getElementById('duelist1-monster')
let d2CardElement = document.getElementById('duelist2-monster')

let yugiCards = [{
    cardName: "Dark Magician",
    attackPoints: 2500,
    img: "/images/cardimages/dark magician.jpg"
},
{
    cardName: "Dark Magician Girl",
    attackPoints: 2000,
    img: "/images/cardimages/dark magician girl.jpg"
},
{
    cardName: "Celtic Guardian",
    attackPoints: 1400,
    img: "/images/cardimages/celtic guardian.jpg"
},
{
    cardName: "Buster Blader",
    attackPoints: 2600,
    img: "/images/cardimages/buster blader.jpg"
},
{
    cardName: "Dark Magician The Dragon Knight",
    attackPoints: 3000,
    img: "/images/cardimages/dark magician the dragon knight.jpg"
}]

let kaibaCards = [{
    cardName: "Blue Eyes White Dragon",
    attackPoints: 3000,
    img: "/images/cardimages/blue eyes white dragon.jpg"
},
{
    cardName: "Battle Ox",
    attackPoints: 1700,
    img: "/images/cardimages/battle ox.jpg"
},
{
    cardName: "Lord of D",
    attackPoints: 1200,
    img: "/images/cardimages/lord of d.jpg"
},
{
    cardName: "Kaiser Vorse Raider",
    attackPoints: 1900,
    img: "/images/cardimages/kaiser vorse raider.jpg"
},
{
    cardName: "Dragon Spirit of White",
    attackPoints: 2500,
    img: "/images/cardimages/dragon spirit of white.jpg"
}];

let joeyCards = [{
    cardName: "Red Eyes Black Dragon",
    attackPoints: 2400,
    img: "/images/cardimages/red eyes black dragon.jpg"
},
{
    cardName: "Gearfried The Iron Knight",
    attackPoints: 1800,
    img: "/images/cardimages/gearfried.jpg"
},
{
    cardName: "Gilford The Lightning",
    attackPoints: 2800,
    img: "/images/cardimages/gilford the lightning.jpg"
},
{
    cardName: "Axe Raider",
    attackPoints: 1700,
    img: "/images/cardimages/axe raider.jpg"
},
{
    cardName: "Black Skull Dragon",
    attackPoints: 3200,
    img: "/images/cardimages/black skull dragon.jpg"
}];

let marikCards = [{
    cardName: "Revival Jam",
    attackPoints: 1500,
    img: "/images/cardimages/revival jam.jpg"
},
{
    cardName: "Masked Beast Des Gardius",
    attackPoints: 3300,
    img: "/images/cardimages/masked beast.jpg"
},
{
    cardName: "Helpoemer",
    attackPoints: 2000,
    img: "/images/cardimages/helpoemer.jpg"
},
{
    cardName: "Lava Golem",
    attackPoints: 3000,
    img: "/images/cardimages/lava golem.jpg"
},
{
    cardName: "Legendary Fiend",
    attackPoints: 1500,
    img: "/images/cardimages/legendary fiend.jpg"
}];

let maiCards = [{
    cardName: "Cyber Harpie Lady",
    attackPoints: 1800,
    img: "/images/cardimages/cyber harpie.jpg"
},
{
    cardName: "Cyber Slash Harpie Lady",
    attackPoints: 2600,
    img: "/images/cardimages/cyber slash harpie.jpg"
},
{
    cardName: "Harpie Queen",
    attackPoints: 1900,
    img: "/images/cardimages/harpie queen.jpg"
},
{
    cardName: "Harpie's Pet Dragon",
    attackPoints: 2000,
    img: "/images/cardimages/harpies pet dragon.jpg"
},
{
    cardName: "Dunames Dark Witch",
    attackPoints: 1800,
    img: "/images/cardimages/dunames dark witch.jpg"
}];

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

let characterArray = [yugi, kaiba, marik, joey, mai]
let duelingOpponent = characterArray[Math.floor(Math.random() * 5)]

  

const duel = (duelist1, duelist2) => {
    
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
        d1CardElement.src = duelist1Cards.img
        d2CardElement.src = duelist2Cards.img
        battleText.innerHTML = "VS"
        result2.innerHTML = ""
        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
        setTimeout(calculation, 1800)
        
        function calculation() {
            let attackDifference = Math.abs(duelist1Cards.attackPoints - duelist2Cards.attackPoints)
            if (duelist1Cards.attackPoints > duelist2Cards.attackPoints) {
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                result2.innerHTML = `${duelist2.name} loses -${attackDifference} Life Points!`;
                d2CardElement.src = ""
                battleText.innerHTML = "";
                result1.innerHTML = "";
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                if(duelist2.lifePoints <= 0) {
                    duelist1Wins()
                }
            } if (duelist2Cards.attackPoints > duelist1Cards.attackPoints) {
                duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                result1.innerHTML = `${duelist1.name} loses -${attackDifference} Life Points!`
                result2.innerHTML = ""
                battleText.innerHTML = ""
                d1CardElement.src = ""
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                if(duelist1.lifePoints <= 0) {
                    duelist2Wins()
                }
            } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
                result1.innerHTML = ""
                result2.innerHTML = ""
                battleText.innerHTML = "Draw!"
                
            } else if (duelist1Cards.attackPoints > duelist2Cards.attackPoints && duelist2.lifePoints <= 0) { 
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                duelist1Wins()
           } else if (duelist2Cards.attackPoints > duelist1Cards.attackPoints && duelist1.lifePoints <= 0) {
               duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
               duelist2Wins()
          } if (duelist1.lifePoints > 0 && duelist2.lifePoints > 0) {
            setTimeout(duelStart, 1800)
                  
            } 
        } 
    }

    const duelist1Wins = () => {
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
        result1.innerHTML = `${duelist1.name} is The King of Games`
        result2.innerHTML = ""
        battleText.innerHTML = ""
        d2CardElement.src = ""
        d1CardElement.src = duelist1.avatar
        d2Cover.style.display = "block"
        d2Cover.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"
        reset()
    }
    
    const duelist2Wins = () => {
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
        result2.innerHTML = `${duelist2.name} is The King of Games`
        result1.innerHTML = ""
        battleText.innerHTML = ""
        d1CardElement.src = ""
        d2CardElement.src = duelist2.avatar
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
            d1CardElement.src = ""
            d2CardElement.src = ""
            startGame()
        })
    }

    function startGame() {
        buttonContainer.classList.remove('hide')
        d1Panel.style.display ="none"
        d2Panel.style.display ="none"
        duelist1.lifePoints = 8000
        duelist2.lifePoints = 8000
        d1CardElement.src = ""
        d2CardElement.src = ""
    }
}


/* startYugi.addEventListener('click', () => {
    duel(yugi, characterArray[Math.floor(Math.random() * 5)])
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
}) */

function displayPoints() {
    buttonContainer.classList.add('hide')
    d1Panel.style.display ="flex"
    d2Panel.style.display ="flex"
}



const startBtns = [startYugi, startKaiba, startMarik, startJoey, startMai]

startBtns.forEach((btn, i) => {
    function playerSelect(player, opponent) {    
        btn.addEventListener('click', () => {
            if (player === opponent) {
                characterArray.pop(opponent)
                opponent = characterArray[Math.floor(Math.random() * 4)]
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