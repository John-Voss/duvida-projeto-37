class Quiz {
    constructor() {
        
    }
    getState() {
        var databaseRef = database.ref('gameState');
        databaseRef.on('value', (data)=>{
            gameState = data.val();
        });
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async form() {
        if(gameState === 0) {
            player = new Contestant();
            var playerInfoRef = await database.ref('playerCount').once('value');
            if(playerInfoRef.exists()) {
                playerCount = playerInfoRef.val();
                player.getCount();
            }
            start = new Start();
            start.display();
        }
    }
    play() {
        start.hide();
        question = new Question();
        question.display();
        answer = new AnswerCount();
        answer.getCount();
    }
    answer() {
        Contestant.getPlayerInfo();
        if(allPlayer !== undefined) {
            fill(0);
            textSize(25);
            text('________________________________________________________________________', 0, 300);
            text('The player that responded correctly is in green!', 50, 330);
            text('The correctly answer: "3"!', 50, 360);
            for(var plr in allPlayer) {
                var correctAnswer = '3';
                    if(correctAnswer === allPlayer[plr].responce) {
                        fill('green');
                    }
                    else{
                        fill('red');
                    }
                }
            }
        }
}
