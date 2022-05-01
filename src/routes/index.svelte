<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Blazed Quest - Home</title>
	<meta name="description" content="Blazed Quest Project Management" />
</svelte:head>

<style>
	a:hover{
		text-decoration: none;
	}
</style>

<section class="bg-white dark:bg-gray-900">
	<div class="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
		<div class="flex flex-col items-center max-w-lg mx-auto text-center">
			<h2 class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
				Web development
			</h2>

			<p class="mt-3 text-gray-500 dark:text-gray-300">
				First class web development services, using a variety of tools and platforms. No matter who your audience is, and what your budget is, we can craft the front-page that will keep them hooked.
			</p>
			<br />
			<a href="https://blazed.contact/website" class="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
				Contact Us
			</a>
		</div>

		<div class="flex flex-col items-center max-w-lg mx-auto text-center">
			<h2 class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
				App development
			</h2>

			<p class="mt-3 text-gray-500 dark:text-gray-300">
				Whether it be mobile app development or desktop development, we will assure your customer's experience is top notch. From flow chart to product testing, every stage is covered by our full package.
			</p>
			
			<a href="https://blazed.contact/app" class="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
				Contact Us
			</a>
		</div>
	</div>
</section>