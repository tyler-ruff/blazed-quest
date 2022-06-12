<script>
	import { page } from '$app/stores';
</script>

<style>
	div.main-menu div a:hover {
		text-decoration: none;
	}
	.active, div.main-menu div a.active:hover{
		text-decoration:underline;
	}
</style>
<div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
    <a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/" class="px-2 lg:py-1 py-5 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-600 hover:text-gray-100 md:mx-2">
        Home
    </a>
    <a class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about" class="px-2 lg:py-1 py-5  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-600 hover:text-gray-100 md:mx-2">
        About
    </a>
    <a class:active={$page.url.pathname === '/projects'} sveltekit:prefetch href="/projects" class="px-2 lg:py-1 py-5 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-600 hover:text-gray-100 md:mx-2">
        Projects
    </a>
</div>