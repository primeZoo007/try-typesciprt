import Food from './food'
import scorePanel from './panel'
import Snake  from "./snake";
class gameControl{
    snake:Snake;
    food:Food;
    scorePanel:scorePanel;
    direction:number = 39;
    isLive:Boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new scorePanel();
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keydonwHandler.bind(this))
        this.controlMove()
    }
    keydonwHandler(event:KeyboardEvent){
        this.direction = event.keyCode
    }
    foodEated(x:number,y:number){
         if(x ===this.food.X&&y===this.food.Y){
             this.snake.addBody()
             this.scorePanel.addScore()
             this.food.change()
         }
    }
    controlMove(){
        let X = this.snake.X
        let Y = this.snake.Y
        switch(this.direction){
            case 38: //上
                 Y-=10
                break;
            case 40://下
                 Y+=10
                 console.log(Y)
                break;
            case 37://zuo
                 X-=10
                break;
            case 39:
                X+=10
                break;
        }
        this.foodEated(X,Y)
        try{
            this.snake.X = X
            this.snake.Y = Y
            console.log(this.snake.Y , Y)
        }catch(e){
            alert(e.message)
        }
        this.isLive && setTimeout(this.controlMove.bind(this),300-(this.scorePanel.level-1)*30)
    }
}
export default gameControl