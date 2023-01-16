<template>
  <div class="bg-green-400 h-screen">
    <p class="font-bold py-2 text-xl border-black border-4 px-2 w-36">Game {{ gameNumber + 1 }} of 6</p>
    <p class="text-center text-3xl mb-3" v-if="gameNumber < 6">
       <strong>{{ playerCurrentlyPlaying[0] }} & {{ playerCurrentlyPlaying[1] }}</strong>
    </p>
    <!-- Pop up window telling who is playing next -->
    <get-ready-pop-up
      :competitors="playerCurrentlyPlaying"
      v-on:closeModal="toggleModal"
      :showModal="showModal"
      v-if="gameNumber < 6"
    ></get-ready-pop-up>
    <!-- Pop up window telling who has won the round -->
    <winner-announcement
      :winner="roundWinner"
      v-on:closeModal="toggleModal"
      :showModal="showWinnerModal"
    />
    <!-- Two boards on either side of the screen -->
    <game-dashboard
      v-on:finishSession="finishSession"
      :gameComplete="gameComplete"
      v-on:toggleGameComplete="toggleGameComplete"
    />
  </div>
</template>

<script>
import GameDashboard from '~/components/gameDashboard.vue'
import getReadyPopUp from '~/components/getReadyPopUp.vue'
import { formatAndAddScores } from '~/lib/formatAndAddScores'
import WinnerAnnouncement from '../components/winnerAnnouncement.vue'

export default {
  data() {
    return {
      showModal: true,
      showWinnerModal: false,
      roundWinner: '',
      gameComplete: false,
    }
  },
  components: { getReadyPopUp, GameDashboard, WinnerAnnouncement },
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
    toggleGameComplete() {
      this.gameComplete = !this.gameComplete
    },
    toggleModal() {
      this.showModal = !this.showModal
      this.showWinnerModal = false
    },
    finishSession(playerScores) {
      const updatedPlayerScores = playerScores.map((player) => {
        delete player.complete
        return player
      })
      const formattedPlayerScores = formatAndAddScores(
        updatedPlayerScores,
        this.playerCurrentlyPlaying
      )
      this.roundWinner = Object.keys(formattedPlayerScores).reduce((a, b) =>
        formattedPlayerScores[a] > formattedPlayerScores[b] ? a : b
      )
      this.showWinnerModal = !this.showWinnerModal

      this.$store.commit('players/addScores', formattedPlayerScores)
      this.$store.commit('players/moveToNextGame')
      this.gameComplete = false
    },
  },
  watch: {
    gameNumber() {
      if (this.gameNumber === 6) {
        this.$router.push({ name: 'game-over' })
      }
    },
  },
}
</script>

<style></style>
