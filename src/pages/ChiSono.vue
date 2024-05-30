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
    <div class="row row-blue">
      <h1 class="hello mt-5 mb-1">Piacere, <span class="pier fw-bold">Pierluigi!</span></h1>
      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <div class="fs-5 mb-5">
          <span class="text-light">Sono nato a <span class="gray">Brindisi</span>, una città marittima dell' <span class="gray">Italia</span> meridionale, nell'
            estate del <span class="gray fs-5">1992</span>. Dopo aver preso il <span class="gray">diploma</span> di <span class="gray">maturità scientifica</span>, 
            inizio gli studi <span class="gray">universitari</span>, iscrivendomi alla facoltà di <span class="gray">Beni Culturali</span> di <span class="gray">Lecce</span>, 
            spinto dalla <span class="gray">passione</span> per la <span class="gray">storia</span>, in particolare per quella <span class="gray">medievale</span> e per la 
            <span class="gray">cultura</span>. Qui, ho avuto il primo <span class="gray">approccio</span> con il mondo della <span class="gray">programmazione web</span>, 
            creando un piccolo portale, per il corso di <span class="gray">Informatica</span>, <span class="gray fst-italic">Brindisi Medievale</span>, 
            incentrato sullo <span class="gray">studio</span> del <span class="gray">Medioevo</span>, nella provincia brindisina. Dopo aver concluso questi studi, 
            mi sono iscritto al <span class="gray">Corso di Laurea Magistrale</span> in <span class="gray">Scienze Storiche e della documentazione storica</span> di 
            <span class="gray">Bari</span>, laureandomi nel pieno dell'emergenza sanitaria del <span class="gray">Covid-19</span>.
          </span>
        </div>
      </div>
      
      <div class="col-6 d-flex justify-content-center">
        <img src="@/assets/images/Pierluigi_2.jpg" style="width: 350px; height: 450px; object-fit: cover; border-radius: 5%;" class="mt-5 mb-5">
      </div>
    </div>

    <div class="row row-1">
      <div class="col-6 d-flex justify-content-center">
        <h1 class="text-light">Foto da scegliere</h1>
      </div>

      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <div class="fs-5 mb-5 pe-5">
          <span class="text-light">Essendo <span class="blue">appassionato</span> di <span class="blue">tecnologia</span> e soprattutto 
            alla <span class="blue">ricerca</span> di un <span class="blue">ambiente lavorativo stimolante</span> e 
            <span class="blue">dinamico</span>, ho deciso di iscrivermi al corso in <span class="blue">Full-Stack Web Development</span> 
            di <span class="blue">Boolean</span>, dalla durata di sei mesi. È stata un'esperienza <span class="blue">formativa</span>, non solo perché 
            ho imparato alcuni dei più importanti <span class="blue">linguaggi di programmazione</span> e 
            <span class="blue">framework front-end e back-end</span>: <span class="blue">HTML5</span>, <span class="blue">CSS</span>, 
            <span class="blue">JavaScript</span>,<span class="blue">Bootstrap</span>, <span class="blue">VueJS</span>, 
            <span class="blue">Vite</span>, <span class="blue">SASS</span>, <span class="blue">PHP</span>, 
            <span class="blue">MySQL</span>, <span class="blue">Laravel</span>, ma anche a livello <span class="blue">professionale</span>, 
            in quanto la sua intensità, mi ha fatto comprendere cosa significa <span class="blue">essere</span> un programmatore web, grazie anche agli 
            <span class="blue">esercizi</span> e ai <span class="blue">progetti</span>, svolti 
            <span class="blue">singolarmente</span> o <span class="blue">in team</span>.
          </span>
        </div>
      </div>
    </div>

    <div class="row row-blue">
      <div class="col-6 d-flex justify-content-center ps-5 mt-5">
        <div class="fs-5 mb-5">
          <span class="text-light">Alla domanda: <span class="gray fst-italic">"Come ti descriveresti?"</span> Risponderei che sono un 
            ragazzo <span class="gray">dinamico</span>, <span class="gray">curioso</span>, <span class="gray">socievole</span>, 
            <span class="gray">creativo</span>, a cui piace <span class="gray">lavorare in team</span> e 
            <span class="gray">attento ai dettagli</span>. Mi dedico con <span class="gray">passione</span> a <span class="gray">viaggiare</span>, 
            <span class="gray">leggere</span> e <span class="gray">fotografare</span>, trovando  <span class="gray">ispirazione</span> e 
            <span class="gray">arricchimento personale</span> in queste esperienze, perché  <span class="gray">entrare in contatto</span> con 
            <span class="gray">altre culture</span> fa <span class="gray">aprire la mente</span> e a 
            <span class="gray">nuovi orizzonti</span>. Mi piace <span class="gray">scrivere</span> articoli sul Medioevo e non solo, 
            <span class="gray">filmare</span> tutto ciò che i miei occhi <span class="gray">osservano</span>. Adoro 
            <span class="gray">praticare sport</span>, giocando a <span class="gray">quadball</span>, a <span class="gray ">calcetto</span> 
            con gli <span class="gray">amici</span>, a <span class="gray">pallacanestro</span> e <span class="gray">allenandomi</span>, in 
            <span class="gray">palestra</span>. Inoltre, mi <span class="gray">diverto</span> a <span class="gray">giocare</span> ai 
            <span class="gray">videogiochi</span> e ai <span class="gray">giochi da tavolo</span>, stimolando la 
            <span class="gray">logica</span>.
          </span>
        </div>
      </div>

      <div class="col-6 d-flex justify-content-center">
        <img src="@/assets/images/Pierluigi_3.jpg" style="width: 350px; height: 450px; object-fit: cover; border-radius: 5%;" class="mt-5 mb-5">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;


.container-chi {
  text-align: justify;

  .row-blue {
    background: linear-gradient(#1D70A2, #173753);
  }

  .hello {
    font-size: 70px;
    color: white;
    text-align: center;
  }

  .pier {
    color: #c4c4c4;
    opacity: 0;
    transition: opacity 0.5s ease; 
  }

  .pier.visible {
    opacity: 1;
  };

  .gray {
    color: #c4c4c4;
  }

  .row-1 {
    background: linear-gradient(#1b1b1b, #333333);
  }

  .blue {
    color: #1D70A2;
  }
  
}
</style>