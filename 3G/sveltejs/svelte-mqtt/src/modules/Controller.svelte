<script>
    export let name = 'no name'
    export let value = 0 
</script>


<div class="m5">
    <div class="name">{name}</div>
    <div class="value">{value}</div>
</div>

<style>
    *{
        color:whitesmoke;
    }
    .m5{
        height:8rem;
        width:100%;
        background:gray;
        display:grid;
        place-items:center;
        border-radius:1rem;
        box-shadow: 0 0 9px 1px gray;
    }
</style>