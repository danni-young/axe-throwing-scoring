<template>
  <div>
    <h1>Do you want to play a game?</h1>
    <get-ready-pop-up :competitors="playerCurrentlyPlaying" v-on:closeModal="toggleModal" :showModal="showModal" />
    <!-- Pop up window telling who is playing next -->
    <!-- Two boards on either side of the screen -->
    <p>Welcome players!</p>
    <game-dashboard v-on:finishSession="finishSession"/>
  </div>
</template>


<script>
import GameDashboard from '~/components/gameDashboard.vue'
import getReadyPopUp from '~/components/getReadyPopUp.vue'
import {formatAndAddScores} from '~/lib/formatAndAddScores'

export default {
  data() {
    return {
      showModal: true
      }
  },
  components: { getReadyPopUp, GameDashboard },
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
  methods: {
    //can use this to reshow the modal when a new set of players start
    toggleModal() {
      this.showModal = !this.showModal
    },
     finishSession(playerScores){
      const updatedPlayerScores = playerScores.map((player) =>{
        delete player.complete
        return player
      })
    
    const formattedPlayerScores = formatAndAddScores(updatedPlayerScores, this.playerCurrentlyPlaying)
    //store the players scores so far
    this.$store.commit('players/addScores', formattedPlayerScores)
  
    // increase the game number
    this.$store.commit('players/moveToNextGame')

    // toggle on winner pop up
    

      //pop up button toggles on player pop up
    },
  }
}
</script>

<style>
</style>