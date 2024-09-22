<template>
  <div class="dase-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>
<script src="http://localhost:8098"></script>
<script>
export default {
    // data() {
    //     console.log('函数执行了~')
    //     return {
    //         count:100,
    //     }
    // }
    data: function() {
        return {
            count:100,
        }
    }
}
</script>

<style>
.base-count {
    margin: 20px;
}
</style>