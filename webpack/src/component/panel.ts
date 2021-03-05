class scorePanel {
    score = 0
    level = 1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    maxLevel:number
    upScore:number
    constructor(maxLevel:number=10,upScore:number = 10) {
        this.upScore = upScore
        this.maxLevel = maxLevel
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score +''
        if(this.score%this.upScore===0){
            this.addLevel()
        }
    }

    addLevel(){
        this.level<this.maxLevel&&(this.levelEle.innerHTML = ++this.level+'')
    }
}

export default scorePanel