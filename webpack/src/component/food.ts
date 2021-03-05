class Food {
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素
        this.element = document.getElementById('food')!;
    }
    // 定义获取事务X坐标
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    change(){
        const left = Math.round(Math.random()*29)*10
        const top = Math.round(Math.random()*29)*10
        this.element.style.left = left+'px'
        this.element.style.top = top+'px'
    }
}

export default Food