<template>
  <div
    class="flex flex-row justify-center border border-gray-500 border-2 mt-3"
  >
    <target-board
      location="L"
      :roundNumber="roundNumber"
      v-on:round-end="completeRound"
      v-on:update-round="updateRound"
    />
    <div class="mx-7">
      <p>Player 1 vs Player 2</p>
      <p>Round Number: {{ roundNumber }}</p>
    </div>

    <target-board
      location="R"
      :roundNumber="roundNumber"
      v-on:round-end="completeRound"
      v-on:update-round="updateRound"
    />
  </div>
</template>

<script>
import targetBoard from './targetBoard.vue'
export default {
  data() {
    return {
      playerOneBeen: false,
      gameComplete: false,
     //THINK ABOUT WHAT TO DO IN A TIE, FOR THE WINNERS MODAL
     //CLEAR THE GAME DASHBOARD AND THE TARGET BOARD WHEN THE GAME IS COMPLETE
      // CREATE A CATCH FOR THE FINAL PLAYERS AND THEN WORK OUT WINNER OVERALL!
      roundNumber: 1,
      One: {
        1: 0,
        2: 0,
        3: 0,
        complete: false
      },
      Two: {
        1: 0,
        2: 0,
        3: 0,
        complete: false
      },
    }
  },
  methods: {
    completeRound(player, score, round){
      this[player][this.roundNumber] = score
      console.log(round)
      if(round === 3){
         this[player].complete = true
         if(this.One.complete === true && this.Two.complete === true){
          this.gameComplete = true
         }
      }
    },
    //when both players are complete
    updateRound() {
      if (this.roundNumber < 3) {
        if (this.playerOneBeen === true) {
          this.roundNumber += 1
          this.playerOneBeen = false
        } else {
          this.playerOneBeen = true
        }
      }
    },
  },
  components: { targetBoard },
  watch: {
    gameComplete: function (){
      console.log('game ended')
      this.$emit('finishSession', [this.One, this.Two])
      //clear data once this has completed
    }
  }
}
</script>

<style>
</style>