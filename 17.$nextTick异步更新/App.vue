<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="editFn">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    editFn() {
        // 显示输入框
        this.isShowEdit = true  
          // 获取焦点
        //问题："显示之后"，立刻获取焦点是不能成功的！
        //原因：Vue 是异步更新DOM  (提升性能)
          //   this.$refs.inp.focus() 
          //解决方法：$nextTick：**等 DOM更新后**,才会触发执行此方法里的函数体
          //**语法:** this.$nextTick(函数体)
          this.$nextTick(() => {
              this.$refs.inp.focus()
          })
        
    }  },
}
</script> 