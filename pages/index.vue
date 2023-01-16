<template>
  <div
    class="bg-green-400 heropattern-wiggle-red-400 w-screen h-screen flex flex-row"
  >
    <div
      class="bg-zinc-50 border-2 border-stone-800 m-auto xl:w-1/3 lg:w-2/5 md:w-2/5 sm:w-3/5 w-3/5 sm:h-2/5 h-3/5 rounded overflow-hidden shadow-lg flex flex-col justify-center"
    >
      <h1
        class="text-gray-800 lg:text-3xl text-2xl underline underline-offset-4 uppercase decoration-red-400 antialiased font-bold mb-3 mx-auto text-center s:mt-1 mt-4 s:mt-0"
      >
        Axe Throwing Scoring
      </h1>
      <p
        class="text-gray-800 w-4/5 mx-auto font-medium text-lg mb-4 text-center"
      >
        Gather yourself some friends and a venue and we'll keep score.
      </p>
      <nuxt-link
        to="/playerDetails"
        class="bg-white hover:bg-red-100 text-gray-800 lg:text-base text-sm font-semibold py-2 px-4 border border-gray-400 rounded shadow w-content mx-auto"
        >Click here to start a game</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
