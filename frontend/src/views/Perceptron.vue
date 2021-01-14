<template>
  <div class="mt-3 max-w-2xl text-sm text-gray-500">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.
    </p>
  </div>
  <div class="mt-5">
    <button v-on:click="train" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3">
      Train
    </button>
    <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Test
    </button>
  </div>
  <div class="mt-12 w-full lg:w-1/2">
    <div class="flex justify-center mb-12">
        <span class="h-20 w-20 ml-3 border border-gray-500 rounded-full text-xs text-center leading-10" :style="{backgroundColor:'rgba(0,0,255,'+current_weights[0]+')'}"></span>
        <span class="w-6 text-gray-400 text-sm">{{current_weights[0]}}</span>
    </div>
    <div class="flex justify-center mb-12">
      <span class="mr-20 h-16 w-16 border border-gray-500 rounded-full bg-gray-100 text-xs text-center leading-10"></span>
      <span class="h-20 w-20 ml-3 border border-gray-500 rounded-full text-xs text-center leading-10" :style="{backgroundColor:'rgba(0,0,255,'+current_weights[1]+')'}"></span>
      <span class="w-6 text-gray-400 text-sm">{{current_weights[1]}}</span>
      <span class="ml-20 h-16 w-16 border border-gray-500 rounded-full bg-gray-100 text-xs text-center leading-10"></span>
    </div>
    <div class="flex justify-center">
      <span class="h-20 w-20 ml-3 border border-gray-500 rounded-full text-xs text-center leading-10" :style="{backgroundColor:'rgba(0,0,255,'+current_weights[2]+')'}"></span>
      <span class="w-6 text-gray-400 text-sm">{{current_weights[2]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_weights: [0,0,0],
      epochs: 0
    }
  },
  methods: {
    train() {
      fetch(import.meta.env.VITE_APP_API+"train")
      .then(response => {
        // a non-200 response code
        if (!response.ok) {
        }
        return response.json();
      })
      .then(json => {
        this.weights = JSON.parse(json);
        this.epochs = this.weights.length;
        this.index = 0;
        this.interval = setInterval(this.nextWeight, 20);
      })
    },
    nextWeight() {
      if (this.index < this.epochs) {
        this.current_weights = this.weights[this.index++];
      }
      else{
        clearInterval(this.interval)
      }
    }
  }
}
</script>