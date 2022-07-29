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


// TODO: create modal that displays when both players have finished the third round
// work out who has won and display button to add to game number and start a new game

//need to establish what means it is done
// pass in the winners name, which we get from...

// then we can use the same modal as before to announce the next player



<script>
// need a way to show how the round is complete, this then changes 
/**
 * Work out how we know the round is complete - both players have used up their throws and it is round three
 * When the three rounds are complete, activate the winners pop up, showing the score
 */
import targetBoard from './targetBoard.vue'
export default {
  data() {
    return {
      playerOneBeen: false,
      // WHEN BOTH PLAYERS ARE COMPLETE, SAVE SCORES IN STORE
      // EMIT SOMETHING TO CHANGE THE PLAYER COMBO IN GAME (OR WHEREVER STORED)
      // ANNOUNCE THE WINNER ON A MODAL, CLEAR 
      // AND ANNOUNCE NEXT PLAYERS ON A MODAL TO START GAME AGAIN
      // CREATE A CATCH FOR THE FINAL PLAYERS AND THEN WORK OUT WINNER OVERALL!
      roundNumber: 1,
      player1: {
        1: 0,
        2: 0,
        3: 0,
        complete: false
      },
      player2: {
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
      }
    },
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
}
</script>

<style>
</style>