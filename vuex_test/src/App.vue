<template>
    <div>
        <p>click {{ $store.state.count }} times, count is {{ evenOrOdd }}</p>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="oddIncrease">increment if odd</button>
        <button @click="asyncIncrease">increment if async</button>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "App",
     computed: {
        evenOrOdd() {
            return this.$store.getters.evenOrOdd;
        }
    }, methods: {
        increase() {
            // 触发store中action
            this.$store.dispatch('increase');
        },
        decrease() {
            this.$store.dispatch('decrease');
        },
        oddIncrease() {
            if(this.$store.state.count % 2 == 0) {
                this.$store.dispatch('increase');
            }
        },
        asyncIncrease() {
            if(this.$store.state.count % 2 == 1) {
                this.$store.dispatch('increase');
            }
        }

    }
}
</script>

<style>

</style>
