document.addEventListener('alpine:init', () => {
    Alpine.data('gameWidget',()=>{
        return {
                sampleWords:'',
                wordLeng:'0.00',
                gameMessage:'',
                shortMessage:'',
                lengthMessage:'',
                gameFunction(){
                    this.gameMessage='The Longest Word:: '+longestWord(this.sampleWords)
                    this.shortMessage='The Short Word::'+shortestWord(this.sampleWords) 
                    this.lengthMessage='Word Length:: '+wordLengths(this.sampleWords)
                }
        }
    })
})