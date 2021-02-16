let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let battleText = document.getElementById('battleText');
let tally1 = document.getElementById('point-text1');
let tally2 = document.getElementById('point-text2');
let startYugi = document.getElementById('yugi-btn')
let startKaiba = document.getElementById('kaiba-btn')
let startMarik = document.getElementById('marik-btn')
let startJoey = document.getElementById('joey-btn')
let startMai = document.getElementById('mai-btn')
let buttonContainer = document.querySelector('.button-container')
let pointsContainer = document.querySelector('.points-container')

let characterCards = {
    yugiCards: [{
        cardName: "Dark Magician",
        attackPoints: 2500
    },
    {
        cardName: "Dark Magician Girl",
        attackPoints: 2000
    },
    {
        cardName: "Celtic Guardian",
        attackPoints: 1400
    },
    {
        cardName: "Buster Blader",
        attackPoints: 2600
    },
    {
        cardName: "Breaker The Magical Warrior",
        attackPoints: 1600
    },
    {
        cardName: "Dark Magician The Dragon Knight",
        attackPoints: 3000
    }],
    kaibaCards: [{
        cardName: "Blue Eyes White Dragon",
        attackPoints: 3000
    },
    {
        cardName: "Battle Ox",
        attackPoints: 1700
    },
    {
        cardName: "Lord of D",
        attackPoints: 1200
    },
    {
        cardName: "Kaiser Vorse Raider",
        attackPoints: 1900
    },
    {
        cardName: "Neo Kaiser Glider",
        attackPoints: 2400
    },
    {
        cardName: "Dragon Spirit of White",
        attackPoints: 2500
    }],
    joeyCards: [{
        cardName: "Red Eyes Black Dragon",
        attackPoints: 2400
    },
    {
        cardName: "Gearfried The Iron Knight",
        attackPoints: 1800
    },
    {
        cardName: "Gilford The Lightning",
        attackPoints: 2800
    },
    {
        cardName: "Axe Raider",
        attackPoints: 1700
    }],
    marikCards: [{
        cardName: "Revival Jam",
        attackPoints: 1500
    },
    {
        cardName: "Masked Beast Des Gardius",
        attackPoints: 3300
    },
    {
        cardName: "Helpoemer",
        attackPoints: 2000
    }],
    maiCards: [{
        cardName: "Cyber Harpie Lady",
        attackPoints: 1800
    },
    {
        cardName: "Cyber Slash Harpie Lady",
        attackPoints: 2600
    },
    {
        cardName: "Harpie Queen",
        attackPoints: 1900
    }]
}

class Duelist {
    constructor(name, _cards) {
        this.name = name;
        this.cards = _cards;
        this.lifePoints = 100;
        }   
}

const yugi = new Duelist("Yugi", characterCards.yugiCards)
const kaiba = new Duelist("Kaiba", characterCards.kaibaCards)
const marik = new Duelist("Marik", characterCards.marikCards)
const joey = new Duelist("Joey", characterCards.joeyCards)
const mai = new Duelist("Mai", characterCards.maiCards)

let characterArray = [yugi, kaiba, marik, joey, mai]

let yugiOpponentArray = [kaiba, marik, joey, mai]
let kaibaOpponentArray = [yugi, marik, joey, mai]
let marikOpponentArray = [yugi, kaiba, joey, mai]
let joeyOpponentArray = [yugi, kaiba, marik, mai]
let maiOpponentArray = [yugi, kaiba, marik, joey]

const duel = (duelist1, duelist2) => {
    
    duelStart()
    function duelStart() {
        let duelist1Cards = duelist1.cards[Math.floor(Math.random() * 3)] 
        let duelist2Cards = duelist2.cards[Math.floor(Math.random() * 3)]

        result1.innerHTML = `${duelist1.name} drew ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints}`;
        result2.innerHTML = `${duelist2.name} drew  ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`
        battleText.innerHTML = ""
        tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`;
        tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`;
        setTimeout(battlePhase, 1700)
        //----
        function battlePhase() {
            result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints}`;
            result2.innerHTML = `${duelist2.name} with  ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`
            battleText.innerHTML = "Declared Battle"
            tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`;
            tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`;
            setTimeout(calculation, 1700)
        }
        function calculation() {
            let attackDifference = Math.abs(duelist1Cards.attackPoints - duelist2Cards.attackPoints)
            console.log(duelist1.lifePoints)
            console.log(duelist2.lifePoints)
            if (duelist1Cards.attackPoints > duelist2Cards.attackPoints) {
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                console.log(`${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`);
                console.log(`${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`);
                result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints}`;
                battleText.innerHTML = "Battled";
                result2.innerHTML = `${duelist2.name}'s ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints} and lost -${attackDifference}.`;
                tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`;
                if(duelist2.lifePoints <= 0) {
                    duelist1Wins()
                }
            } if (duelist2Cards.attackPoints > duelist1Cards.attackPoints) {
                duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                console.log(`${duelist1.name} LifePoints: ${duelist1.lifePoints}`)
                console.log(`${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`);
                result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints} and lost -${attackDifference}.`;
                result2.innerHTML = `${duelist2.name}'s ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`
                battleText.innerHTML = "Battled"
                tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`
                tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
                if(duelist1.lifePoints <= 0) {
                    duelist2Wins()
                }
            } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
                result1.innerHTML = "Draw"
                result2.innerHTML = "Draw"
                
            } else if (duelist1Cards.attackPoints > duelist2Cards.attackPoints && duelist2.lifePoints <= 0) { 
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                duelist1Wins()
           } else if (duelist2Cards.attackPoints > duelist1Cards.attackPoints && duelist1.lifePoints <= 0) {
               duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                duelist2Wins()
          } if (duelist1.lifePoints > 0 && duelist2.lifePoints > 0) {
            setTimeout(duelStart, 1700)
                  
            } 
            
        } 
    }

    const duelist1Wins = () => {
        tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
        result1.innerHTML = `${duelist1.name} is The King of Games`
        result2.innerHTML = `${duelist2.name} is DEFEATED`
        battleText.innerHTML = ""
    }
    
    const duelist2Wins = () => {
        tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
        result2.innerHTML = `${duelist2.name} is The King of Games`
        result1.innerHTML = `${duelist1.name} is DEFEATED`
        battleText.innerHTML = ""
    }
}

function displayPoints() {
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
}

const startBtns = [startYugi, startKaiba, startMarik, startJoey, startMai]

startBtns.forEach((btn, i) => {
    function playerSelect(player, opponent) {
        btn.addEventListener('click', () => {
            duel(player, opponent[Math.floor(Math.random() * 4)])
            displayPoints()
        })
    }
    switch (i) {
        case 0:
            playerSelect(yugi, yugiOpponentArray)
            break;
        case 1:
            playerSelect(kaiba, kaibaOpponentArray)
            break;
        case 2:
            playerSelect(marik, marikOpponentArray)
            break;
        case 3:
            playerSelect(joey, joeyOpponentArray)
            break;
        case 4:
            playerSelect(mai, maiOpponentArray)
            break;
        default:
            alert("error")
    } 
})