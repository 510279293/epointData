<template>
  <div class="tree-map">
    <ul>
      <li>
        <div
          :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="changeType">
          {{ model.name }}
          <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
          <li class="add" @click="addChild">+</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {

  },
  data () {
    return {
      open: false,
      model: {
        name: 'treeMap',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tree-map {
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
}
</style>
