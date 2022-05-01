
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

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",
        authDomain: "blz-one-9e383.firebaseapp.com",
        projectId: "blz-one-9e383",
        storageBucket: "blz-one-9e383.appspot.com",
        messagingSenderId: "817319905653",
        appId: "1:817319905653:web:8ee0f28da3fc5e208bab3c",
        measurementId: "G-1194VR7QTN"
    };

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

<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Projects
        </h1>
    
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {#each projects as project}
                <a href="{project.url}">
                    <div class="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="{project.image}?w=80&h=80" alt="">
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                {project.name}
                            </h1>
                            
                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                {project.version}
                            </p>
                            
                            <div class="flex mt-3 -mx-2">

                                <a href="{project.repo}" target="_blank" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
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
</section>

<style>
    a:hover{
        text-decoration: none;
    }
</style>