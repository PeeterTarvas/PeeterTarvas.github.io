class Main {


    constructor(height, length) {

        this.length_bottom = length
        this.height = height
    }

    calculateSize() {
        return this.height * (this.length_bottom / 2);
    }

    determineIfRectangleIsEqualSided() {
        var side = Math.sqrt(((this.length_bottom / 2) ** 2)
            + ((this.height) ** 2));
        return side === this.length_bottom;
    }

    swichImg() {
        var ele = document.getElementById("picture");


}


}