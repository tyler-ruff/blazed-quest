
<script>
    import { onMount } from 'svelte';
    // Import the functions you need from the SDKs you need
    //import { initializeApp } from "firebase/app";
    //import { getAnalytics } from "firebase/analytics";
    import "firebase/app";
    //import "firebase/firestore";
    import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
    import { initializeApp } from 'firebase/app';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    import { firebaseConfig } from '$lib/firebase.config.js';

    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    const app = initializeApp(firebaseConfig);

    async function getProjects() {
        const db = getFirestore(app);
        const projectsCol = collection(db, 'projects');
        const projSnapshot = await getDocs(projectsCol);
        const projectList = projSnapshot.docs.map(doc => doc.data());
        return projectList;
    }

    let limit = 4;
    let index = 0;
    let moreButton = false;
    /**
        * @type {import("firebase/firestore/lite").DocumentData[]}
    */
    let projectsFull = [];
    /**
        * @type {import("firebase/firestore/lite").DocumentData[]}
    */
    let projects = [];
    onMount(async () => {
        projectsFull = await getProjects();
        projects = projectsFull.slice(0, limit);
        index += limit;
        if(index != projectsFull.length){
            moreButton = true;
        }
    });

    function loadMore(){
        index += limit;
        projects = projectsFull.slice(0, index);
        if(index == projectsFull.length){
            moreButton = false;
        }
    }
</script>

<article class="bg-white shadow-md dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Projects
        </h1>
    
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {#each projects as project}
                <a href="/project/{project.slug}">
                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="{project.image}?w=80&h=80" alt="">
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                {project.name}
                            </h1>
                            
                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                {project.version}
                            </p>
                    </div>
                </a>
            {:else}
                <div>
                    <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            {/each}
        </div>
        <div class="mt-10" style="text-align:center">
            {#if moreButton == true}
                <button on:click={loadMore} class="px-6 py-3 rounded-lg bg-gray-200 hover:bg-blue-600 text-black hover:text-white">
                    Load More
                </button>
            {:else}
                <span class="hidden">
                    All content loaded.
                </span>
            {/if}
        </div>
    </div>
</article>

<style>
    a:hover{
        text-decoration: none;
    }
</style>