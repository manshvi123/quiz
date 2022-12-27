class Answer {
    constructor() {
        this.input = createInput("Enter your answer")
        this.input.position(150, 250)

        this.button = createButton("Submit")
        this.button.position(350, 250)

        this.answer = ""
    }


    handleMousePressed() {
        var inp;
        this.button.mousePressed(() => {
            this.answer = this.input.value();
         
       })

    }
}