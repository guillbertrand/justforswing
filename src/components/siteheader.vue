
<template>
<div class="relative">
  <header class="z-50 text-white absolute w-full">
      <nav class="flex container mx-auto px-5 lg:px-20 py-4 flex-row justify-between text-base z-50">   
        <a href="/" class="z-50  flex flex-col">
            <h1 class="text-4xl  font-aleo font-bold">
          Just for Swing
          </h1>
          <span class="tracking-widest font-open text-sm">Les frères Bertrand</span>
        </a>
        <div class="flex justify-between items-center font-open">
          <ul class="flex space-x-4">
            <li class="mr-2">
            <g-link class="hover:underline" to="/#actus">Actus</g-link>
            </li>
            <li class="mr-2">
            <g-link class="hover:underline" to="/#dates">Dates</g-link>
            </li>
            <li class="mr-2">
            <g-link class="hover:underline" to="/#bio">Bio</g-link>
            </li>
            <li class="mr-2">
            <g-link class="hover:underline" to="/#discrographie">Discrographie</g-link>
            </li>
            <li>
            <g-link class="hover:underline" to="/#contact">Contact</g-link>
            </li>
          </ul>
        </div>
      </nav>
  </header>
  <div class="absolute z-40 w-full bg-gradient-to-b from-black h-36"/>
  <g-image src="~/assets/images/justforswing_lesfreresbertrand.jpg" fit="contain" class="z-0 overflow-hidden"></g-image>
</div>

</template>