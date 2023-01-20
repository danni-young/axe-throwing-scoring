<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-400 border-b-black border-b-2">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a href="/">
            <img src="./../static/axe.jpeg" class="object-scale-down h-8"/>
        </a>
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    </div>
    <div>
      <button v-on:click="toggleModal()" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-400 hover:bg-white mt-4 lg:mt-0">Help</button>
    </div>
  </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "red-navbar",
   
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      },
      toggleModal: function () {
      this.$emit('openModal')
    },
    }
  }
  </script>