// в каждом файле нужно будет сделать одно и тоже. Делаем миксин
export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
