<script>
    import { fly, fade } from 'svelte/transition'
    export let content 
    let active
</script>

<div on:click={()=>active=!active} class={active ? "article active" : "article"} in:fly out:fade style='background:url("{content.urlToImage}")'>
    <h1>{content.title}</h1>
    <p>{content.content}</p>
</div>

<style>
    .article{
        height:200px;
        padding:1rem;
        overflow: scroll;
        background-size: contain;
        color:whitesmoke;
        cursor: pointer;
    }
    .active{
        position:fixed;
        top:20;
    }
</style>