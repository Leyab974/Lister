<template>


    <div>
        <input v-model="inputValue" type="text" @keydown.enter="updateValue">
        <button :disabled="inputValue.length == 0" @click="updateValue">{{props.btnLabel}}</button>
    </div>

</template>
<script setup>


import { ref } from 'vue';
const props = defineProps({
    btnLabel: {
        type: String,
        default: "ajouter"
    }
});

const inputValue = ref("");
const emit = defineEmits(['newValue']);


function updateValue(item) {
    //m assurer aue il y a des donnee 
    if (inputValue.value.length == 0) return;
    //emettre un evenement vers le parent 

    emit("newValue", inputValue.value);

    //vider le champ texte 
    inputValue.value = "";
}

</script>
<style scoped lang='scss'>
div {
    display: flex;
    gap: .5em;

    input {
        flex-basis: 70%;
    }

    button {
        flex-basis: 30%;
    }
}
</style>