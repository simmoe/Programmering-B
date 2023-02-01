<script>
	let animals = [    {"name": "Fnatmide"},    {"name": "Unicorn"},    {"name": "Phoenix"},    {"name": "Griffin"},    {"name": "Kraken"},    {"name": "Hydra"},    {"name": "Gryphon"},    {"name": "Sphinx"},    {"name": "Chimera"},    {"name": "Manticore"}]
	
	const apiKey = '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';
	
	async function askChatGPT(question) {
 
	const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const requestBody = {
        prompt: question,
        engine: 'davinci',
        max_tokens: 2048
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    console.log(data);
}
let question = ''

</script>

<main>
	<div class="header">
        <h1>Sjove Dyr</h1>
		<input bind:value={question}>
		<button on:click={askChatGPT}>spørg</button>
    </div>
	<div class="animals">
		{#each animals as a}
		<div class="animal">
			<h2>{a.name}</h2>
		</div>
		{/each}
	</div>
</main>

<style>
	.animals{
		padding:2rem;
		display:grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap:1rem;
		place-items:center;
	}
	.animal{
		border:4px solid hotpink;
		border-radius:50%;
		display:grid;
		place-items:center;
		width:300px;
		height:300px;
		box-shadow: 12px 2px 13px 12px green;
	}
	 .header {
            background-color: hotpink;
            text-align: center;
			padding:2rem;
			color:white;
			font-size:2rem;
        }

        h1 {
            margin: 0;
			font-weight:100;
        }
</style>