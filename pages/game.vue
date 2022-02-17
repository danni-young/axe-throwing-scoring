<template>
  <div>
    <h1>Do you want to play a game?</h1>
    <get-ready-pop-up :competitors="playerCurrentlyPlaying" />
    <!-- Pop up window telling who is playing next -->
    <!-- Two boards on either side of the screen -->
    <p>Welcome players!</p>
  </div>
</template>



<script>
import getReadyPopUp from '~/components/getReadyPopUp.vue'
export default {
  data() {
    return {}
  },
  components: { getReadyPopUp },
  computed: {
    players() {
      return this.$store.state.players.playerNames
    },
    playerCombo() {
      return this.$store.state.players.playerCombinations
    },
    gameNumber() {
      return this.$store.state.players.gameNumber
    },
    playerCurrentlyPlaying() {
      return this.$store.state.players.playerCombinations[this.gameNumber]
    },
  },
}
</script>

<style>
</style>