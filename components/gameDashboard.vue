<template>
  <div class="flex flex-row">
    <target-board location="L" :roundNumber="roundNumber" />
    <div><p>Player 1 vs Player 2</p></div>
    <target-board location="R" :roundNumber="roundNumber" />
  </div>
</template>
// at the end of each game, the scores are saved in this component

<script>
import targetBoard from './targetBoard.vue'
export default {
  data() {
    return {
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
  components: { targetBoard },
}
</script>

<style>
</style>