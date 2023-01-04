<script>	
	import { fly } from 'svelte/transition'
	let name = 'world'
	let names = ['mie', 'otis', 'maeve']
	const removeItem = (i) => {
		names.splice(i, 1)
		names = names
	}
	let magic = false
	setInterval(()=>magic=!magic, 1000)
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" bind:value={name}>
	<button on:click={ () => {names = [...names, name];name=''} }>add</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={()=>magic=!magic}>show me the magic</button>
	{#if magic}
		<div class="people">
			{#each names as n, index}
				<div transition:fly="{{ y: 200, duration: 1400, delay:index*100 }}" class='person' on:click={ ()=>removeItem(index)}>{n} ({index})</div>
			{/each}
		</div>
	{/if}
</main>

<style>
	.people{
		display:grid;
		grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
		gap:2rem;
	}
	.person{
		display:grid;
		place-items:center;
		background-color:black;
		color:white;
		border-radius:1rem;
		border:1px solid white;
		font-size: 2rem;
		height:10rem;
		box-shadow: 10px 10px 20px 4px hotpink;
	}
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>