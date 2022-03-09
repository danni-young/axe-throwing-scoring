<template>
  <div
    class="flex flex-row justify-center border border-gray-500 border-2 mt-3"
  >
    <target-board
      location="L"
      :roundNumber="roundNumber"
      v-on:round-end="updateScore"
      v-on:update-round="updateRound"
    />
    <div class="mx-7">
      <p>Player 1 vs Player 2</p>
      <p>Round Number: {{ roundNumber }}</p>
    </div>

    <target-board
      location="R"
      :roundNumber="roundNumber"
      v-on:round-end="updateScore"
      v-on:update-round="updateRound"
    />
  </div>
</template>
// round updates
// score updates for each player after each round


<script>
import targetBoard from './targetBoard.vue'
export default {
  data() {
    return {
      playerOneBeen: false,
      roundNumber: 1,
      player1: {
        1: 0,
        2: 0,
        3: 0,
      },
      player2: {
        1: 0,
        2: 0,
        3: 0,
      },
    }
  },
  methods: {
    updateScore(player, score) {
      this[player][this.roundNumber] = score
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