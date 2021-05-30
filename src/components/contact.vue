
<template>
  <div class="p-5 lg:p-20  container mx-auto" id="contact">
  <h2 class="text-4xl mb-4 font-aleo font-bold text-blackJfs">Contact</h2>
  <p>
Vous cherchez de la musique live pour vos <strong>évènements</strong> ? <br><strong>Just for Swing</strong> vous propose plusieurs formules, en duo, trio ou en quartet, pour vos anniversaires, cocktails, mariages, séminaires, inaugurations, ...<br> Faites-nous part de vos projets par mail ou par téléphone ...
    </p>
  
    

               <!-- form -->
               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label for="contactName">Nom <span class="required">*</span></label>
						   <input type="text" value="" size="35" id="contactName" name="contactName">
                  </div>

                  <div>
						   <label for="contactEmail">Email <span class="required">*</span></label>
						   <input type="text" value="" size="35" id="contactEmail" name="contactEmail">
                  </div>

                  
                  <div>
                     <label for="contactMessage">Message <span class="required">*</span></label>
                     <textarea cols="50" rows="8" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button class="submit" style="font-size:20px; font-weight:bold; text-transform:none; Letter-spacing:1px; font-family:Helvetica;  background:#f4a32e;">Envoyer</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif">
                     </span>
                  </div>

					</fieldset>
				   </form> <!-- Form End -->

               <!-- contact-warning -->
               <div id="message-warning">Erreur !</div>
               <!-- contact-success -->
				   <div id="message-success">
                  <i class="fa fa-check"></i>Votre message a été envoyé, Merci !<br>
				   </div>



     

					   <h4>Coordonnées</h4>
					   <p class="address" style="color:#fff">
						   contact@justforswing.com
                     <br>
                           06 32 02 37 41<br>
                     06 85 22 00 09

					   </p>

</div>
</template>
