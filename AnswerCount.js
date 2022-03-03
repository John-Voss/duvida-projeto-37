class AnswerCount {
    constructor() {
    }
    getCount() {
        var answerCountRef = database.ref('answerCount');
        answerCountRef.on('value', (data)=>{
            answerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            answerCount: count
        });
    }
}