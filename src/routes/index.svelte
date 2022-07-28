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

<article class="bg-white shadow-md dark:bg-gray-900">
	<div class="dark:bg-gray-800 dark:text-gray-100 mb-3">
		<div class="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
			<div class="flex items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="https://blazed.sirv.com/logo/john-mcmahon-ljjcoULkxL8-unsplash.jpg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			</div>
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 class="text-5xl font-bold leading-none sm:text-6xl">Blazed
					<span class="dark:text-violet-400">Project</span> Management
				</h1>
				<p class="mt-6 mb-8 text-lg mt-10 sm:mb-12">Turning dreams into reality
					<br class="hidden md:inline lg:hidden"> for customers and investors
					<br class="hidden md:inline lg:hidden"> since 2020.
				</p>
				<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<div class="inline-flex w-full sm:w-auto sm:mx-2">
						<a href="/projects" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
							Our Projects
						</a>
					</div>
		
					<div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
						<a href="/about" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
		<h2 class="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl dark:text-white">
			Contribute to Our Projects
		</h2>
		
		<div class="mt-6 sm:-mx-2">
			<div class="inline-flex w-full sm:w-auto sm:mx-2">
				<a target="_blank" href="https://blazed.dev/" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
					Developers
				</a>
			</div>

			<div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
				<a href="https://www.facebook.com/groups/blzdev" target="_blank" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
					Facebook Group
				</a>
			</div>
		</div>
	</div>
</article>