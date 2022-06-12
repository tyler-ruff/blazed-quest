<script>
    import Nav from "$lib/nav/Nav.svelte";
    export let burgerOpened = false;
    function toggleMenu(){
        if(burgerOpened == true){
            burgerOpened = false;
        } else {
            burgerOpened = true;
        }
    }
</script>
<style>
    .mobile-menu{
        display:none;
    }
    @media screen and (max-width: 768px){
        .mobile-menu{
            display:block;
        }
        .desktop-menu{
            display:none;
        }
    }
</style>
<header>
	<nav class="bg-white shadow dark:bg-gray-800 lg:pb-5 md:pb-5">
        <div class="container px-6 pt-5 pb-1 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <div>
                    <a title="Blazed Quest" class="text-2xl hover:opacity-75 font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="https://blazed.quest/">
						<img src="https://blazed.sirv.com/logo/Beaker-Dark.png?=50&h=50" alt="Beaker Gray" />
					</a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button on:click={toggleMenu} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        {#if !burgerOpened}
                            <svg viewBox="0 0 24 24" class="w-9 h-9 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        {:else}
                            <svg class="w-10 h-10 fill-current" width="50" height="50" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.646 5.646a.5.5 0 000 .708l8 8a.5.5 0 00.708-.708l-8-8a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M14.354 5.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                            </svg>
                        {/if}
                    </button>
                </div>
            </div>

            <div class="w-full md:flex md:items-center md:justify-between main-menu">
                <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">

                </div>
                <!-- Desktop Menu -->
                <div class="relative desktop-menu">
                    <Nav />
                </div>

                {#if burgerOpened}
                    <!-- Mobile Menu -->
                    <div class="relative mobile-menu">
                        <Nav />
                    </div>
                {/if}
            </div>
        </div>
    </nav>
</header>
