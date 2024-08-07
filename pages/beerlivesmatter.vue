<script setup lang="ts">
const { data: scrollingTextPage } = await useFetch<string>('/scrollingtext?text=го по пиву&autoscroll=OFF&duration=20')

const parser = new DOMParser()
const document = parser.parseFromString(scrollingTextPage.value || '', 'text/html')

const children = [...document.querySelectorAll('font')]

const maxStringLength = ref(0)

const scrollingText = children.map(item => {
  maxStringLength.value = item.innerText.length > maxStringLength.value
    ? item.innerText.length 
    : maxStringLength.value
  
  return item.innerText
})

console.log(maxStringLength);


const intervaledScrollingText = ref([])

onMounted(async () => {
  for (let string of scrollingText) {
    intervaledScrollingText.value.push(string)

    await new Promise(resolve => setTimeout(resolve, 25))
  }
})
</script>

<template>
  <div class="text-white flex justify-center">
    <div class="flex flex-col-reverse font-mono text-[11px] overflow-hidden" :style="{ width: `${maxStringLength}ch` }">
      <pre v-for="i of intervaledScrollingText">{{ i }}</pre>
    </div>
  </div>
</template>