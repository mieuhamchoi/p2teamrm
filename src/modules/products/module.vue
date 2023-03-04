<template>
    <h1>Chào Products {{ getCount }}</h1>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            abc: 1
        }
    },
    computed: {
        ...mapGetters({
            getCount: 'getCount'
        })
    },
    methods: {
        ...mapActions({
            setCountAction: 'setCountAction'
        }),
    },
    created() {
        this.setCountAction(5);
    }
}
</script>