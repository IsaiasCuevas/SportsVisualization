<template>
    <div>
        <chartjs-doughnut v-bind:labels="labels"
        v-bind:data="datasets"
        v-bind:options="option"></chartjs-doughnut>
    </div>
</template>>

<script>
export default {
    data(){
        return{
            labels:["Apples", "Bananas", "Grapes"]
            
            
        };
    
    }
}
</script>>