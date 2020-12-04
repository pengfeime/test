<template>
    <div class="hello">
        <p>{{ msg }}</p>
        <Button type="primary">Primary</Button>
        <Button type="primary" ghost>Ghost primary</Button>
        <Button type="primary" icon="ios-search" shape="circle">search</Button>
        <Button type="primary" icon="ios-search" shape="circle" size="small">search</Button>
        <br>
        <RadioGroup v-model="buttonSize">
            <Radio label="large">large</Radio>
            <Radio label="default">default</Radio>
            <Radio label="small">small</Radio>
        </RadioGroup>
        <br>
        <Button type="primary" icon="ios-search" shape="circle" :size="buttonSize">search</Button>
        <br>
        <br>
        <Button type="success" long>submit</Button>
        <Button type="error" long>delete</Button>
        <br>
        <Button type="dashed">click</Button>
        <Button type="primary" disabled>disabled</Button>
        <br>
        <Button type="primary" :loading='!loading' @click="changeStatus">
            <span v-if="loading" >hello</span>
            <span v-else>oho</span>
        </Button>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                'buttonSize': 'large',
                'loading':true
            }
        },
        methods:{
            changeStatus(){
                this.loading = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        margin-right: .2rem;
    }
</style>
