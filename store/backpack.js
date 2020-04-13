export const state = () => ({
  backpack: {}
})

export const mutations = {
  setBackpack(state, backpack) {
    state.backpack = backpack
  }
}

export const actions = {
  importMdBackpack({ commit }, markdown) {
    const items = markdown.split(/\r?\n/g)

    const backpack = items.reduce(
      (backpack, item) => {
        if (item.includes('Scrap Metal')) backpack.scrap++
        else if (item.includes('Reclaimed Metal')) backpack.reclaimed++
        else if (item.includes('Refined Metal')) backpack.refined++
        else if (!item.includes('Non-Tradable')) backpack.items.push(item)

        return backpack
      },
      {
        scrap: 0,
        reclaimed: 0,
        refined: 0,
        items: []
      }
    )

    commit('setBackpack', backpack)
  }
}
