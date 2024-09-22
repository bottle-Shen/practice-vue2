<template>
  <div id="app">
    <UserInfo 
    :username="username"
    :age="age"
    :isSingle="isSingle"
    :car="car"
    :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
export default {
    name: 'App',
    data() {
        return {
            username: 'Bottle',
            age: 18,
            isSingle: true,
            car: {
                brand:'QQ飞车',
            },
            hobby:['绘画','溜冰','轮滑']
        }
    },
    components: {
        UserInfo
    }
}
</script>

<style>

</style>