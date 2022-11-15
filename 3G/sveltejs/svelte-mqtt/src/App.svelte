<script>
import Controller from './modules/Controller.svelte'
let client, info
let controllers = []

const initMqtt = () => {
	console.log('connecting mqtt')
	client = mqtt.connect('wss://mqtt.nextservices.dk')
	//hvis forbindelsen lykkes kaldes denne funktion
	client.on('connect', () => {
		console.log('Client connected:')
		info = 'You are now connected to mqtt.nextservices.dk'
	})
	client.subscribe('participate')
	client.subscribe('control')

	client.on('message', (topic, message) => {		
		switch(topic){
			case 'participate': {
				controllers = [...controllers, {'name': message.toString()}]
				console.log(controllers)
				break
			}
			case 'control': {
				let json = JSON.parse(message.toString())
				controllers.map( (c, i) => {
					if(c.name == json.name){
						controllers[i].value = json.x
						controllers[i].value
					}
				})
				break
			}
		}
	})
}
</script>

<svelte:head>
	<script on:load={initMqtt} src="https://cdnjs.cloudflare.com/ajax/libs/mqtt/4.3.7/mqtt.min.js"></script>
</svelte:head>

<main>
	<h1>Hello MQTT!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>{info}</p>

	<div class="controllers">
		{#each controllers as controller}
			<Controller name={controller.name} value={controller.value}/>
		{/each}
	</div>
</main>

<style>
	*{
		box-sizing: border-box;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.controllers{
		display:grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		padding:2rem;
		gap:.5rem;
		place-items: center;
		height:10rem;
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