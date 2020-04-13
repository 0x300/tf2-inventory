<template>
  <section class="section">
    <h1 class="title">Backpack Import</h1>
    <form @submit.prevent="submit">
      <b-field label="Paste Backpack.tf Inventory Data (Markdown):">
        <b-input v-model="markdown" type="textarea"></b-input>
      </b-field>
      <div class="control">
        <button class="button is-link">Import</button>
      </div>
    </form>
    <div class="columns is-mobile"></div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BackpackImport',

  data() {
    return {
      markdown: ''
    }
  },

  methods: {
    ...mapActions({
      importData: 'backpack/importMdBackpack'
    }),
    submit() {
      this.importData(this.markdown)
      this.markdown = ''
      this.$router.push('backpack-visualize')
    }
  }
}
</script>
