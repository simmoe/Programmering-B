<script>
	//https://newsapi.org/docs/endpoints/everything
	import { Datepicker } from 'svelte-calendar';
	import dayjs from 'dayjs';
	import Article from './modules/Article.svelte' 
	let api_key = 'ed87ebff01bb4f5998eed5fb8a0aba89'
	let articles = []
	let query = ''
	let language = 'da'
	let from = new Date()
	let to = new Date()
	const today = dayjs().subtract(5, 'day').toDate();
	const tomorrow= new Date();

	$: query.length > 3 && fetch(`https://newsapi.org/v2/everything?q=${query}&Language=${language}&from='2022-10-14'&sortBy=popularity&apiKey=${api_key}`)
		.then( res => res.json() )
			.then(json => {
				console.log(json)
				articles = json.articles
			})
	$: console.log(from)

</script>

<main>
	<h1>World News</h1>
	<Datepicker start={today} end={tomorrow} bind:selected={from}/>
	<select bind:value={language}>
		<option value={'en'}>Engelsk</option>
		<option value={'da'}>Dansk</option>
		<option value={'se'}>Svensk</option>
	</select>	
	<p>In this page you'll find worldwide news extracted from several bureaus. Enter searchphrase to start reading</p>
	<input type="text" bind:value={query}>
	<div class="articles">
		{#each articles as article}
			 <!-- content here -->
			 <Article content={article} />
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.articles{
		display:grid;
		grid-template-columns: repeat(3, 1fr);
		gap:.5rem;
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