document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget',()=>{
        return {
            name:'',
            greetMessage:'',
            greetMe(){
                this.greetMessage= (greet(this.name))
                setTimeout(()=>{
                    this.greetMessage= ''
                },3000)
            }
        }
    })
})

/*word game */
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

/*Enough Airtime Function */
document.addEventListener('alpine:init', ()=>{
    Alpine.data('enoughAirtimeWidget', ()=>{
        return{
            airtimeUsage:'',
            airtimeAvailable:'0.00',
            airtimeMessage:'',
            calculate(){
                this.airtimeMessage=enoughAirtime(this.airtimeUsage,this.airtimeAvailable)
            }
        }
    })
})

document.addEventListener('alpine:init',()=>{
    Alpine.data('telephoneBillWidget',()=>{
        return{
            items:'',
            itemMessage:'',
            itemFinder(){
                this.itemMessage=totalPhoneBill(this.items)
            }
        }
    })
})