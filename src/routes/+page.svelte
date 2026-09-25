<script>
  import "./scripts/three"
  import pfp from "$lib/assets/image.jpg"
</script>

<div class="bg-black w-screen h-screen z-10 absolute opacity-60"></div>
<div class="w-screen h-screen justify-center items-center flex flex-col absolute z-20">
    <div class="justify-center items-center flex flex-col">
        <img src={pfp} alt="" class="max-w-32 max-h-32 rounded-full m-5 hover:scale-110 duration-300 hover:blur-sm border-4 border-neutral-300">
        <h1 class="text-2xl text-white font-extralight hover:scale-125 duration-300">nazuna!</h1>
        <p class="text-md text-white">atomsplits' homepage (wip)</p>
    </div>

    <div
        class="justify-center items-center flex flex-row gap-5 text-white text-md mt-5"
    >
        <button onclick={() => { window.location.href = '/me' }} class="pl-5 pr-5 p-2 border-2 border-white rounded-md hover:scale-110 hover:bg-white hover:text-black duration-150"
            >about me</button
        >
        <button class="pl-5 pr-5 p-2 border-2 border-white rounded-md hover:scale-110 hover:bg-white hover:text-black duration-150"
            >projects</button
        >
        <button class="pl-5 pr-5 p-2 border-2 border-white rounded-md hover:scale-110 hover:bg-white hover:text-black duration-150"
            >commission</button
        >
    </div>
</div>

<style>
    :root {
        background-color: black;
        overflow-x: hidden;
    }
</style>
