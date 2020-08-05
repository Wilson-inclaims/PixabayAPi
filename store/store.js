import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // base: "https://pixabay.com/api/",
    base:
      "https://pixabay.com/api/?key=17779109-8e3c751490a43f65df15e9b95&q=yellow+flowers&image_type=photo&pretty=true",
    key: "17779109-8e3c751490a43f65df15e9b95",
    spells: [],
    spell: [],
  },

  getters: {
    spells: (state) => state.spells,
    singleSpell: (state) => state.spell,
    base: (state) => state.base,
    key: (state) => state.key,
  },

  mutations: {
    FILL_SPELLS(state, spells) {
      state.spells = spells;
    },
    FILL_SINGLE_SPELL(state, spell) {
      state.spell = spell;
    },
  },

  actions: {
    fillSpells(ctx, spells) {
      ctx.commit("FILL_SPELLS", spells);
    },
    fillSingleSpell(ctx, spell) {
      ctx.commit("FILL_SINGLE_SPELL", spell);
    },
  },
});
