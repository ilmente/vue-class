<template>
    <p>
        <b>{{address.name}} {{address.lastName}}</b>
        <br>
        {{address.houseNumber}} {{address.street}}
        <br>
        {{address.zipCode}}, {{address.city}} - {{address.country}}
        <br>
        <em>{{address.notes}}</em>
        <br>
        <span class="tag is-info">{{type}}</span>
    </p>
</template>

<script>
    export default {
        props: {
            address: {
                type: Object,
                require: true,
            },

            type: {
                type: String,
                require: true,
            }
        }
    }
</script>
