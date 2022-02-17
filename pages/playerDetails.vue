<template>
  <div>
    <p>Enter player names:</p>
    <p :v-if="error.length > 0" class="font-bold text-red-500">{{ error }}</p>
    <div class="flex flex-col w-1/2">
      <input
        v-for="player in players"
        :key="player"
        class="border mb-2 ml-3"
        :placeholder="player"
        v-model="$data[player]"
      />
      <button v-on:click="addPlayers([player1, player2, player3, player4])">
        Save players
      </button>
    </div>
  </div>
</template>

<script>
import { createPlayerRounds } from '~/lib/createPlayerRounds'
export default {
  data() {
    return {
      players: ['player1', 'player2', 'player3', 'player4'],
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      error: '',
    }
  },
  methods: {
    addPlayers(players) {
      //check all players are added
      if (
        this.player1.length === 0 ||
        this.player2.length === 0 ||
        this.player3.length === 0 ||
        this.player4.length === 0
      ) {
        this.error = 'Please add names of all players to begin playing'
      } else {
        //add to store
        this.error = ''
        this.$store.commit('players/add', players)
        const playerRounds = createPlayerRounds(players)
        this.$store.commit('players/addCombination', playerRounds)
        this.$router.push({ name: 'game' })
      }
    },
  },
}
</script>

<style>
</style>