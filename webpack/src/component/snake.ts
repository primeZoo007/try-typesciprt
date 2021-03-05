class Snake {
    head:HTMLElement
    bodis:HTMLCollection
    snake:HTMLElement
    constructor() {
        this.snake = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div')as HTMLElement
        this.bodis = document.getElementById('snake')!.getElementsByTagName('div')
    }
    get X (){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    set X(value){
        console.log(value)
        if(this.X === value)return
        if(this.X<0||this.X>290){
            throw Error('good game')
        }
        if(this.bodis[1]&&(this.bodis[1]as HTMLElement).offsetLeft===value){
            if(value>this.X){
                value = this.X-10
            }else{
                value = this.X+10
            }
        }
        this.head.style.left = value + 'px'
        this.checkHeadBody()
        this.moveBody()
    }

    set Y(value){
        if(this.Y === value)return
        if(this.Y<0||this.Y>290){
            throw Error('good game')
        }
        if(this.bodis[1]&&(this.bodis[1]as HTMLElement).offsetTop===value){
            if(value>this.Y){
                value = this.Y-10
            }else{
                value = this.Y+10
            }
        }
        this.head.style.top = value + 'px'
        this.checkHeadBody()
        this.moveBody()

    }
    //
    addBody(){
        this.snake.insertAdjacentHTML('beforeend',"<div></div>")
    }
    moveBody(){
        for(let i = this.bodis.length-1;i>0;i--){
            let x = (this.bodis[i-1] as HTMLElement).offsetLeft;
            let y = (this.bodis[i-1] as HTMLElement).offsetTop;
            (this.bodis[i] as HTMLElement).style.left = x +'px';
            (this.bodis[i] as HTMLElement).style.top = y + 'px';
        }
    }

    checkHeadBody(){
        for(let i =1;i<this.bodis.length;i++){
            let bd =this.bodis[i]as HTMLElement
            console.log(this.X,this.Y,bd.offsetLeft,bd.offsetTop)
            if(this.X===bd.offsetLeft&&this.Y ===bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }
}
export default Snake