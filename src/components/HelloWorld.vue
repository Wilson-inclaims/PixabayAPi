<template>
  <div>
    <div>
      <label for="spell-name">
        Search by ID & User name
        <input
          type="text"
          v-model="spellName"
          v-on:keyup.enter="search"
          id="spell-name"
        />
      </label>
      <button @click="search">Search</button>
    </div>
    <div>
      <ol>
        <li
          v-for="spell in searchFlag ? singleSpell : spells.hits"
          v-bind:key="spell.id"
        >
          <div>ID: {{ spell.id }} Author: {{ spell.user }}</div>
          <img :src="spell.webformatURL" v-bind:alt="spell.id" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      spellName: null,
      searchFlag: false,
    };
  },
  computed: {
    ...mapGetters(["spells", "singleSpell", "base", "key"]),
  },
  mounted() {
    this.fetchSpells();
  },
  methods: {
    ...mapActions(["fillSpells", "fillSingleSpell"]),
    fetchSpells() {
      const base = this.base;
      axios.get(`${base}`).then((resp) => {
        this.fillSpells(resp.data);
      });
    },
    search() {
      const singleSpell = this.spells.hits.filter((spell) => {
        return (
          String(spell.id).includes(this.spellName) ||
          spell.user.includes(this.spellName)
        );
      });
      if (this.spellName) {
        this.searchFlag = true;
      } else {
        this.searchFlag = false;
      }
      this.fillSingleSpell(singleSpell);
    },
  },
};
</script>
