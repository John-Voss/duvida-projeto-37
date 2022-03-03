class Start {
    constructor() {
        this.input = createInput('Your name');
        this.button = createButton('Save');
        this.greeting = createElement('h3');
    }
    hide() {
        this.greeting.hide();
    }
    display() {
        this.input.position(80, 200);
        this.button.position(220, 200);
        this.button.mousePressed(()=> {
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html('Hi, '+player.name+', wait for another player!');
            this.greeting.position(100, 300);
            this.input.hide();
            this.button.hide();
        });
    }
}