<template>
  <div class="bg-green-400 heropattern-wiggle-red-400 flex flex-col items-center h-screen">
    <div class="bg-zinc-50 text-gray-800 border-2 border-stone-800 m-auto xl:w-1/3 lg:w-2/5 md:w-2/5 sm:w-3/5 w-3/5 sm:h-2/5 h-3/5 rounded overflow-hidden shadow-lg flex flex-col justify-center">

      <h1 class="text-gray-800 lg:text-3xl text-2xl underline underline-offset-4 uppercase decoration-red-400 antialiased font-bold mb-3 mx-auto text-center s:mt-1 mt-4 s:mt-0">The final scores are in...</h1>
      <ul class="text-gray-800 w-4/5 mx-auto font-medium text-lg mb-4 text-center">
       <li v-if="Object.keys(scores.results).length === 0">Oh dear! No scores here!</li>
        <li class="px-4" v-bind:key="player.name" v-for="(player) in scores.results"> 
        <p :class="player.class">
          {{player.name}} -  {{player.score}}
        </p>
        
      </li>
      </ul>
      <button
      v-on:click="startNewGame()"
       
        class="font-semibold p-3 rounded-full text-white bg-sky-500 hover:bg-sky-700 lg:text-base text-sm py-2 px-4 w-content mx-auto"
        >Play again?</button
      >
    </div>
  </div>
</template>

<script>
import { calculateHighestScore } from '../lib/calculateHighestScore'
export default {
  name: 'game-over',
  firstClass: 'mb-2 bg-yellow-600 font-semibold',
  othersClass: 'mb-2 font-semibold',
  methods: {
    startNewGame(){
      this.$store.commit('players/startNewGame')
      this.$router.push({ name: "playerDetails"})    },
  },
  computed: {
    scores() {
      return calculateHighestScore(this.$store.state.players.scores)
    },
  },
}
</script>
