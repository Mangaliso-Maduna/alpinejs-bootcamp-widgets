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