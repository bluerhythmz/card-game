let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let battleText = document.getElementById('battleText');
let tally1 = document.getElementById('pointsTally1');
let tally2 = document.getElementById('pointsTally2');
let startYugi = document.getElementById('yugi-btn')
let startKaiba = document.getElementById('kaiba-btn')
let startMarik = document.getElementById('marik-btn')
let startJoey = document.getElementById('joey-btn')
let startMai = document.getElementById('mai-btn')

let yugiCards = [{
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
}]

let kaibaCards = [{
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
}];

let joeyCards = [{
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
}];

let marikCards = [{
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
}];

let maiCards = [{
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
}];

class Duelist {
    constructor(name, _cards) {
        this.name = name;
        this.cards = _cards;
        this.lifePoints = 8000;
        }
        
}

const yugi = new Duelist("Yugi", yugiCards)
const kaiba = new Duelist("Kaiba", kaibaCards)
const marik = new Duelist("Marik", marikCards)
const joey = new Duelist("Joey", joeyCards)
const mai = new Duelist("Mai", maiCards)

let characterArray = [yugi, kaiba, marik, joey, mai]


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
        setTimeout(battlePhase, 1500)
        //----
        function battlePhase() {
            result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints}`;
            result2.innerHTML = `${duelist2.name} with  ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`
            battleText.innerHTML = "Declared Battle"
            tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`;
            tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`;
            setTimeout(calculation, 1500)
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
                result2.innerHTML = `${duelist2.name}'s ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`;
                tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`;
                if(duelist2.lifePoints <= 0) {
                    tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
                    result1.innerHTML = `${duelist1.name} is The King of Games`
                    result2.innerHTML = `${duelist2.name} is DEFEATED`
                    battleText.innerHTML = ""
                }
            } if (duelist2Cards.attackPoints > duelist1Cards.attackPoints) {
                duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                console.log(`${duelist1.name} LifePoints: ${duelist1.lifePoints}`)
                console.log(`${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`);
                result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName} atk ${duelist1Cards.attackPoints}.`;
                result2.innerHTML = `${duelist2.name}'s ${duelist2Cards.cardName} atk ${duelist2Cards.attackPoints}.`
                battleText.innerHTML = "Battled"
                tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`
                tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
                if(duelist1.lifePoints <= 0) {
                    tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
                    result2.innerHTML = `${duelist2.name} is The King of Games`
                    result1.innerHTML = `${duelist1.name} is DEFEATED`
                    battleText.innerHTML = ""
                }
            } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
                result1.innerHTML = "Draw"
                result2.innerHTML = "Draw"
                
            } else if (duelist1Cards.attackPoints > duelist2Cards.attackPoints && duelist2.lifePoints <= 0) { 
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                tally2.innerHTML = `${duelist2.name}'s LifePoints: ${duelist2.lifePoints}`
                result1.innerHTML = `${duelist1.name} is The King of Games`
                result2.innerHTML = `${duelist2.name} is DEFEATED`
           } else if (duelist2Cards.attackPoints > duelist1Cards.attackPoints && duelist1.lifePoints <= 0) {
               duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                tally1.innerHTML = `${duelist1.name}'s LifePoints: ${duelist1.lifePoints}`
                result1.innerHTML = `${duelist2.name} is DEFEATED`
                result2.innerHTML = `${duelist2.name} is The King of Games`
          } if (duelist1.lifePoints > 0 && duelist2.lifePoints > 0) {
            setTimeout(duelStart, 1500)
                  
            } 
            
        } 
    }
    
}

startYugi.addEventListener('click', () => {
    duel(yugi, characterArray[Math.floor(Math.random() * 5)])
})

startKaiba.addEventListener('click', () => {
    duel(kaiba, characterArray[Math.floor(Math.random() * 5)])
})

startMarik.addEventListener('click', () => {
    duel(marik, characterArray[Math.floor(Math.random() * 5)])
})

startJoey.addEventListener('click', () => {
    duel(joey, characterArray[Math.floor(Math.random() * 5)])
})

startMai.addEventListener('click', () => {
    duel(mai, characterArray[Math.floor(Math.random() * 5)])
})