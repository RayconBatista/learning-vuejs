new Vue({
    el: '#app',
    data:{
        playerActived: 1,
        playerOne: {
            points: 0,
            historic: [],
        },
        playerTwo: {
            points: 0,
            historic: [],
        },
        cartSelected: ''
    },
    methods:{
        changePlayer()
        {
            this.playerActived = this.playerActived == 1 ? 2 : 1

            this.cartSelected = ''
        },

        selectedCart()
        {
            this.cartSelected = Math.floor((Math.random() * 13) + 1)

            if(this.playerActived == 1){
                this.playerOne.points += this.cartSelected

                this.playerOne.historic.push(this.cartSelected)
            }

            if(this.playerActived == 2){
                this.playerTwo.points += this.cartSelected

                this.playerTwo.historic.push(this.cartSelected)
            }

            if(this.playerOne.points >= 21 || this.playerOne.points >= 21)
                this.finishGame()
        },

        finishGame()
        {
            if(this.playerOne.points <= 21 && this.playerOne.points > this.playerTwo.points)
            {
                alert('Player 1 Campeão')
            }

            else if(this.playerTwo.points <= 21 && this.playerTwo.points > this.playerOne.points)
            {
                alert('Player 2 Campeão')
            }

            else if (this.playerOne.points > 21)
            {
                alert('player 2 campeão')
            }

            else if (this.playerTwo.points > 21)
            {
                alert('player 1 campeão')
            }

            else if(this.playerOne.points == 21)
            {
                alert('player 1 campeão')
            }

            else if(this.playerTwo.points == 21)
            {
                alert('player 2 campeão')
            }

            else('empate')

            let vm = this
            setTimeout(function () {
                vm.resetGame()
            }, 3000)
        },

        resetGame()
        {
            this.playerOne.points = 0,
                this.playerTwo.points = 0,
                this.cartSelected = '',
                this.playerActived = 1
        }
    },
    computed:{
        numberHistoricPlayerOne()
        {
            return this.playerOne.historic.length
        },

        numberHistoricPlayerTwo()
        {
            return this.playerTwo.historic.length
        }
    },


})