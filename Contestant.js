class Contestant {
    constructor() {
        this.index = null;
        this.responce = null;
        this.name = null;
    }
    getCount() {
        var playerRef = database.ref('playerCount');
        playerRef.on('value', (data)=>{
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    update() {
        var playerIndex = 'players/player'+this.index;
        database.ref(playerIndex).set({
            responce: this.responce,
            name: this.name
        });
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on('value', (data)=>{
            allPlayer = data.val();
        });
    }
}
