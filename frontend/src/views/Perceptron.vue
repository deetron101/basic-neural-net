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
</template>

<script>
export default {
  methods: {
    train() {
      fetch(import.meta.env.VITE_APP_API+"train")
      .then(response => response.json())
    }
  }
}
</script>