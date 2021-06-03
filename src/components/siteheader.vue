
<template>
<div class="relative">
  <header class="z-50 text-white absolute w-full">
      <nav class="flex container mx-auto px-5 lg:px-20 py-4 flex-row justify-between text-base z-50">   
        <a href="/" class="z-50  flex flex-col">
        <span class="tracking-widest font-open leading-none" style="font-size:23px;">Les frères Bertrand</span>
            <h1 class="text-6xl  font-aleo font-bold uppercase leading-none" style="line-height:0.8em">
          Just for Swing
          </h1>
          
        </a>
        <div class="z-50 flex justify-between items-center font-open">
          <ul class="flex space-x-4">
            <li class="mr-2">
            <button v-scroll-to="'#actus'">Actus</button>
            </li>
            <li class="mr-2">
            <button v-scroll-to="'#dates'">Dates</button>
            </li>
            <li class="mr-2">
            <button v-scroll-to="'#bio'">Bio</button>
            </li>
            <li class="mr-2">
            <button v-scroll-to="'#discographie'">Discrographie</button>
            </li>
            <li>
            <button v-scroll-to="'#contact'">Contact</button>
            </li>
          </ul>
        </div>
      </nav>
  </header>
  <div class="absolute z-40 w-full h-full bg-blackJfs opacity-60"/>
  <div class="absolute top-0 w-full h-full flex flex-col justify-end items-center z-40 text-white">
    <div class="font-aleo text-4xl w-auto text-center ">
      Just For Swing c'est...<br>
      <span class="text-yellowJfs">TROIS FRERES</span>, du <span class="text-yellowJfs">JAZZ</span> et du <span class="text-yellowJfs">SWING</span><br>
      pour tous vos évènements ! 
    </div>
    <svg v-scroll-to="'#actus'" class="animate-bounce w-6 h-6 text-amber-900 mb-20 mt-10" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
  <g-image src="~/assets/images/main_justforswing_nb.jpg" fit="contain" class="z-0 overflow-hidden"></g-image>
</div>

</template>