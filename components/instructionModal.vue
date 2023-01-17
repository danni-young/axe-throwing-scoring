<template>
  <div>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative my-6 mx-auto max-w-xl">
        <!--content-->
        <div
          class="border-2 border-green-400 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-center justify-center  p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
            <h3 class="text-3xl mx-auto font-semibold">Instructions</h3>
          </div>
          <!--body-->
          <div class="relative mx-auto p-6 w-2/3 justify-center">
            <p class="my-4 text-blueGray-500 text-lg">
              When a player throws an axe and you identify where they've hit on the board, <span class="font-semibold">click the corresponding spot</span> on the virtual board. Each click will be registered and the scores will add up.
            </p>
            <p class="my-4 text-blueGray-500 text-lg">Each player will take turns in throwing their axe. After every round the players swap boards. A player can only attempt the <span class="text-green-700 font-semibold">green circles</span> on their last throw of the round.
            </p>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-400 bg-transparent border border-solid border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Exit            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: 'instruction-modal',
  props: ['showModal'],
  methods: {
    toggleModal: function () {
      this.$emit('closeModal')
    },
  },
}
</script>
