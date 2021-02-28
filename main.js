let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let battleText = document.getElementById('battleText');
let tally1 = document.getElementById("duelist1-lp");
let tally2 = document.getElementById("duelist2-lp");
let startYugi = document.getElementById('yugi-btn')
let startKaiba = document.getElementById('kaiba-btn')
let startMarik = document.getElementById('marik-btn')
let startJoey = document.getElementById('joey-btn')
let startMai = document.getElementById('mai-btn')
let buttonContainer = document.querySelector('.button-container')
let pointsContainer = document.querySelector('.points-container')
let duelist1CardImage = document.getElementById('duelist1-card')
let duelist2CardImage = document.getElementById('duelist2-card')
let duelist1AtkPanel = document.getElementById("duelist1-panel-atk")
let duelist2AtkPanel = document.getElementById("duelist2-panel-atk")
let duelist1Avatar = document.getElementById("duelist1-avatar")
let duelist2Avatar = document.getElementById("duelist2-avatar")

let yugiCards = [{
    cardName: "Dark Magician",
    attackPoints: 2500,
    img: "/images/cardimages/dark magician.png"
},
{
    cardName: "Dark Magician Girl",
    attackPoints: 2000,
    img: "/images/cardimages/dark magician girl.png"
},
{
    cardName: "Celtic Guardian",
    attackPoints: 1400,
    img: "/images/cardimages/celtic guardian.png"
},
{
    cardName: "Buster Blader",
    attackPoints: 2600,
    img: "/images/cardimages/buster blader.png"
},
{
    cardName: "Dark Magician The Dragon Knight",
    attackPoints: 3000,
    img: "/images/cardimages/dark magician the dragon knight.png"
}]

let kaibaCards = [{
    cardName: "Blue Eyes White Dragon",
    attackPoints: 3000,
    img: "/images/cardimages/blue eyes white dragon.png"
},
{
    cardName: "Battle Ox",
    attackPoints: 1700,
    img: "/images/cardimages/battle ox.png"
},
{
    cardName: "Lord of D",
    attackPoints: 1200,
    img: "/images/cardimages/lord of d.png"
},
{
    cardName: "Kaiser Vorse Raider",
    attackPoints: 1900,
    img: "/images/cardimages/kaiser vorse raider.png"
},
{
    cardName: "Dragon Spirit of White",
    attackPoints: 2500,
    img: "/images/cardimages/dragon spirit of white.png"
}];

let joeyCards = [{
    cardName: "Red Eyes Black Dragon",
    attackPoints: 2400,
    img: "/images/cardimages/red eyes black dragon.png"
},
{
    cardName: "Gearfried The Iron Knight",
    attackPoints: 1800,
    img: "/images/cardimages/gearfried.png"
},
{
    cardName: "Gilford The Lightning",
    attackPoints: 2800,
    img: "/images/cardimages/gilford the lightning.png"
},
{
    cardName: "Axe Raider",
    attackPoints: 1700,
    img: "/images/cardimages/axe raider.png"
},
{
    cardName: "Black Skull Dragon",
    attackPoints: 3200,
    img: "/images/cardimages/black skull dragon.png"
}];

let marikCards = [{
    cardName: "Revival Jam",
    attackPoints: 1500,
    img: "/images/cardimages/revival jam.png"
},
{
    cardName: "Masked Beast Des Gardius",
    attackPoints: 3300,
    img: "/images/cardimages/masked beast.png"
},
{
    cardName: "Helpoemer",
    attackPoints: 2000,
    img: "/images/cardimages/helpoemer.png"
},
{
    cardName: "Lava Golem",
    attackPoints: 3000,
    img: "/images/cardimages/lava golem.png"
},
{
    cardName: "Legendary Fiend",
    attackPoints: 1500,
    img: "/images/cardimages/legendary fiend.png"
}];

let maiCards = [{
    cardName: "Cyber Harpie Lady",
    attackPoints: 1800,
    img: "/images/cardimages/cyber harpie.png"
},
{
    cardName: "Cyber Slash Harpie Lady",
    attackPoints: 2600,
    img: "/images/cardimages/cyber slash harpie.png"
},
{
    cardName: "Harpie Queen",
    attackPoints: 1900,
    img: "/images/cardimages/harpie queen.png"
},
{
    cardName: "Harpie's Pet Dragon",
    attackPoints: 2000,
    img: "/images/cardimages/harpies pet dragon.png"
},
{
    cardName: "Dunames Dark Witch",
    attackPoints: 1800,
    img: "/images/cardimages/dunames dark witch.png"
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
        result1.innerHTML = `${duelist1.name} drew ${duelist1Cards.cardName}`
        result2.innerHTML = `${duelist2.name} drew  ${duelist2Cards.cardName}`
        battleText.innerHTML = ""
        tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
        tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
        setTimeout(battlePhase, 1500)
        //----
        function battlePhase() {
            result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName}`;
            result2.innerHTML = `${duelist2.name} with  ${duelist2Cards.cardName}`
            battleText.innerHTML = "Declared Battle"
            tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
            tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
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
                result1.innerHTML = `${duelist1.name} with ${duelist1Cards.cardName}`;
                battleText.innerHTML = "Battled";
                result2.innerHTML = `${duelist2.name}'s ${duelist2Cards.cardName}`;
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                if(duelist2.lifePoints <= 0) {
                    tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
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
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`;
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`;
                if(duelist1.lifePoints <= 0) {
                    tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
                    result2.innerHTML = `${duelist2.name} is The King of Games`
                    result1.innerHTML = `${duelist1.name} is DEFEATED`
                    battleText.innerHTML = ""
                }
            } else if (duelist1Cards.attackPoints === duelist2Cards.attackPoints) {
                result1.innerHTML = "Draw"
                result2.innerHTML = "Draw"
                
            } else if (duelist1Cards.attackPoints > duelist2Cards.attackPoints && duelist2.lifePoints <= 0) { 
                duelist2.lifePoints = duelist2.lifePoints - attackDifference; 
                tally2.innerHTML = `${duelist2.name}: ${duelist2.lifePoints}`
                result1.innerHTML = `${duelist1.name} is The King of Games`
                result2.innerHTML = `${duelist2.name} is DEFEATED`
           } else if (duelist2Cards.attackPoints > duelist1Cards.attackPoints && duelist1.lifePoints <= 0) {
               duelist1.lifePoints = duelist1.lifePoints - attackDifference; 
                tally1.innerHTML = `${duelist1.name}: ${duelist1.lifePoints}`
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
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
})

startKaiba.addEventListener('click', () => {
    duel(kaiba, characterArray[Math.floor(Math.random() * 5)])
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
})

startMarik.addEventListener('click', () => {
    duel(marik, characterArray[Math.floor(Math.random() * 5)])
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
})

startJoey.addEventListener('click', () => {
    duel(joey, characterArray[Math.floor(Math.random() * 5)])
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
})

startMai.addEventListener('click', () => {
    duel(mai, characterArray[Math.floor(Math.random() * 5)])
    buttonContainer.classList.add('hide')
    pointsContainer.style.display ="flex"
})