<template>
  <div class="w-1/2">
    <div class="flex flex-row">
      <div
        class="border-2 border-green-700 rounded-full h-1/2 w-7"
        @click.stop="onClick(7)"
      >
        <p class="ml-2">7</p>
      </div>
      <div
        class="mt-5 border-2 border-blue-700 rounded-full w-32"
        @click.stop="onClick(1)"
      >
        <p class="ml-14">1</p>
        <div
          class="border-2 border-black rounded-full w-20 m-auto mb-7"
          @click.stop="onClick(3)"
        >
          <p class="ml-8">3</p>
          <div
            class="border-2 border-red-700 rounded-full w-7 m-auto mb-7"
            @click.stop="onClick(5)"
          >
            <p class="ml-2">5</p>
          </div>
        </div>
      </div>
      <div
        class="border-2 border-green-700 rounded-full h-1/2 w-7"
        @click.stop="onClick(7)"
      >
        <p class="ml-2">7</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(number) {
      console.log(number)
    },
  },
}
</script>

<style>
</style>