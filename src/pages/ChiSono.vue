<script>
export default {
  name: 'ChiSono',
  mounted() {
    setTimeout(() => {
      const nameElement = document.querySelector('.pier');
      nameElement.classList.add('visible');
    }, 1000);

  }
}
</script>

<template>
  <div class="container-chi">
    <div class="row">
      <h1 class="hello mt-5 mb-1 ">Piacere, <span class="pier fw-bold">Pierluigi!</span></h1>
      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <div>
          <h6 class="text-light fs-5 mb-5">Sono nato a <span class="gray fw-bold fs-5">Brindisi</span>, 
            una città marittima dell' <span class="gray fw-bold fs-5">Italia</span> meridionale, in un giorno d'estate del <span class="gray fw-bold fs-5">1992</span>. 
            Dopo aver conseguito il <span class="gray fw-bold fs-5">diploma</span> di <span class="gray fw-bold fs-5">maturità scientifica</span>, mi sono iscritto alla facoltà
            di Beni Culturali a Lecce, laureandomi, spinto dalla passione per la storia, in particolare per quella medievale e per la cultura. Qui, ho avuto il primo contatto con il mondo
            della programmazione web creando un piccolo sito web, per il corso di Informatica, Brindisi Medievale, incentrato sullo studio del Medioevo, nella provincia brindisina.
            Dopodiché, ho conseguito la laurea magistrale in Scienze storiche e della documentazione storica a Bari.
          </h6>
        </div>
      </div>

      <div class="col-6 d-flex justify-content-center mt-5">
        <h1 class="text-light">FOTO</h1>
      </div>
    </div>

    <div class="row row-1">
      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <h1 class="text-light">FOTO</h1>
      </div>

      <div class="col-6 d-flex justify-content-center mt-5">
        <div>
          <h6 class="text-light fs-5 mb-5">Essendo appassionato di tecnologia e soprattutto alla ricerca di un ambientee lavorativo stimolante e dinamico, ho deciso di iscrivermi
            al corso in Full-Stack Web Development, dalla durata di sei mesi, dove ho imparato alcuni dei più importanti linguaggi di programmazione e framework, sia Front End sia 
            Back End: HTML, CSS, JavaScript, Bootstrap, VueJS, Vite, SASS, PHP, MySQL e ho realizzato dei progetti stimolanti, sia singoli sia di gruppo.
          </h6>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <div>
          <h6 class="text-light fs-5 mb-5">Sono un ragazzo dinamico, curioso, che lavorare in team, attenta ai dettagli e organizzata. Nella vita privata, mi dedico con passione 
            a viaggiare, leggere e fotografare, trovando ispirazione e arricchimento personale in queste esperienze. Inoltre, mi diverto a risolvere problemi complessi 
            attraverso videogiochi e giochi da tavolo, oltre a dedicarmi con precisione e rigore alla pasticceria e alla pizzeria, praticando la mia creatività.
          </h6>
        </div>
      </div>

      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <h1 class="text-light">FOTO</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;


.container-chi {
  background-color: #1D70A2;

  .hello {
    font-size: 70px;
    color: white;
    text-align: center;
  }
  .pier {
    color: $gray;
    font-size: 70px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.5s ease; 
  }
  
  .pier.visible {
    opacity: 1;
  };


  .gray {
    color: $gray;
  }

  .row-1 {
    background-color: $gray;
  }

  .blue {
    color: #1D70A2;
  }
}
</style>