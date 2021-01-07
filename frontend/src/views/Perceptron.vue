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
  <div class="mt-5">
    <div v-for="weights_set in weights" class="w-max">
      <span v-for="weight in weights_set" class="inline-block mr-2 mt-4 h-12 w-12 rounded-3xl border-solid border-2 border-gray-300 text-xs text-center leading-10" :style="colorString(weight)">
        {{ weight }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weights: []
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
      })
    },
    colorString(weight) {
      return 'background-color:rgba(21,235,21,'+weight+')'
    }
  }
}
</script>