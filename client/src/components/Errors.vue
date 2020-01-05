<template>
    <div class="alert danger">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'Errors',
    props: ["msg"]
}
</script>


<style scoped>
    .alert {
        border-radius: 0px
    }

    .danger {
        background: red;
        color: white;
        text-align: center;
        padding: .5em;
        margin-bottom: 1em;
        transition: .5s;
    }
</style>