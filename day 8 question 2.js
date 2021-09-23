class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(rad){
        this.radius = rad;
        return this.getRadius();
    }
    getColor(){
        return this.color;
    }
    setColor(colour){
        this.color = colour;
        return this.getColor();
    }
    toString(){
        return "Circle[radius = " + this.radius + " color = " + this.color + "]";
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }
}

const circle1 = new circle(1,"red");
console.log(circle1.setRadius(25));
console.log(circle1.setColor("blue"));
console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference());