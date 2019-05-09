<main>

	<h1>Svelte Dynamic Component v3</h1>

	<button on:click={loadChatBox}>
		Load ChatBox
	</button>

	<div id="AppHost">
		<svelte:component this={ChatBox} />
	</div>

	<footer>
		Copyright 2019
	</footer>

</main>

<script>
  let ChatBox;

  async function loadChatBox() {
    // Method 1
    // const { default: Component } = await import("./ChatBox.svelte");
    // ChatBox = Component;

    // Method 2
	const app = './Apps/ChatBox/main.js';
    ({ default: ChatBox } = await import(app));
  }
</script>

