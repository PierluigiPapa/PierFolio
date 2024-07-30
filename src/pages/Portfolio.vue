<script>

export default {
  name: 'Portfolio',
}
</script>

<template>

<div class="container-fluid">

  <div class="row row-1">
    <h1 class="text-center fw-bold text-light titolo">Scorri per vedere il mio portfolio</h1>
    <h3 class="text-center fw-bold text-light titolo">Foto personale</h3>
  </div>
  
  <div class="row row-blue">
    <h1 class="text-light text-center titolo fw-bold">BoolBnB</h1>
    
    <div class="col-xl-12 text-center">

      <div class="titolo giustificato ms-4 me-4 fs-5">
        <span class="text-light"> <span class="gray fst-italic">BoolBnB</span> è un portale di gestione degli alloggi, realizzato per il <span class="gray">progetto finale</span> 
          del corso in <span class="gray">Full-Stack Web Development</span> di <span class="gray">Boolean Careers</span> realizzato <span class="gray">in team</span>. 
          La prima fase del lavoro è stata quella di realizzare il <span class="gray">database</span>, necessaria, per la creazione degli <span class="gray">appartamenti</span> 
          da <span class="gray">visualizzare</span> nell'<span class="gray">area dell'utente</span> e in quella del <span class="gray">proprietario</span> e anche, 
          per la <span class="gray">messaggistica</span> e per la <span class="gray">sponsorizzazione.</span> <br>
          <br>
          
          Nella parte in basso della <span class="gray">homepage</span>, vi sono gli <span class="gray">appartamenti in evidenza.</span> Questo è un 
          <span class="gray">servizio</span> che BoolBnB offre al proprietario, di sponsorizzare il proprio appartamento attraverso un <span class="gray">pagamento</span>. 
          Il procedimento della sponsorizzazione - come potete guardare dal video - viene effettuato nel <span class="gray">back end</span>, grazie a 
          <span class="gray">Braintree</span>. Sempre nella pagina iniziale del sito, si possono <span class="gray">cercare</span> gli appartamenti, <span class="gray">per città</span>, 
          digitando nella <span class="gray">barra di ricerca</span>. La <span class="gray">lista delle città</span> o <span class="gray">delle vie</span> viene generata, 
          come anche la <span class="gray">mappa</span> che si vedrà nel dettaglio dell'appartamento, grazie a <span class="gray">TomTom</span>. <br>
          <br>
          
          Cliccando su <span class="gray">cerca</span>, si possono vedere <span class="gray">tutti gli appartamenti</span>, nel <span class="gray">raggio di 20 km (da 0 a 20 km),</span>
          dalla <span class="gray">propria posizione</span>, dando sempre la <span class="gray">precedenza</span> a quelli <span class="gray">sponsorizzati</span>. 
          L'<span class="gray">utente</span> può inserire dei <span class="gray">filtri</span>, con l'intento di <span class="gray">trovare</span> l'appartamento secondo le sue 
          <span class="gray">esigenze</span>. Cliccando sull'<span class="gray">appartamento</span>, può <span class="gray">leggere</span> 
          quali <span class="gray">servizi</span> si trovano e <span class="gray">inviare</span> un <span class="gray">messaggio</span> che il proprietario riceverà 
          nella sua <span class="gray">area riservata.</span> 
          
          Il proprietario, dopo essersi <span class="gray">registrato</span> ed <span class="gray">effettuato</span> l'<span class="gray">accesso</span>, può accedere alla sua 
          <span class="gray">area personale</span>, dove non solo può <span class="gray">creare</span> i suoi alloggi, ma anche <span class="gray">modificare</span>, 
          <span class="gray">cancellare</span>, <span class="gray">effettuare</span> il <span class="gray">pagamento per una delle tre tipologie di sponsorizzazione</span> 
          e <span class="gray">leggere</span> i <span class="gray">messaggi ricevuti</span> dai possibili ospiti. <br>Per concludere, 
          BoolBnB è <span class="gray">disponibile</span> sia per la versione <span class="gray">tablet</span> che quella <span class="gray">mobile.</span>
        </span>
      </div>

      <h2 class="text-white fw-bold titolo">Video:</h2>
      
      <div class="d-flex justify-content-center col-12">
        <a href="https://youtu.be/zdr4tcAp8zk">
          <button type="button" class="btn btn-video titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-video" class="me-2"/>VIDEO
          </button>
        </a>
      </div>
      
      <h2 class="text-white fw-bold titolo">Competenze tecniche:</h2>
      
      <div class="d-flex justify-content-center">
        <div class="titolo">
          <button type="button" class="btn btn-html ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
          </button>

          <button type="button" class="btn btn-bootstrap ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-bootstrap" class="me-2" />BOOTSTRAP
          </button>

          <button type="button" class="btn btn-javascript ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JS
          </button>

          <button type="button" class="btn btn-vuejs ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-vuejs" class="me-2" />VUEJS
          </button>

          <button type="button" class="btn btn-vitejs ms-3 mb-3">
            <font-awesome-icon icon="fa-solid fa-cloud-bolt" class="me-2" />VITE
          </button>

          <button type="button" class="btn btn-sass ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-sass" class="me-2" />SASS
          </button>

          <button type="button" class="btn btn-php ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-php" class="me-2" />PHP
          </button>

          <button type="button" class="btn btn-mysql ms-3 mb-3">
            <font-awesome-icon icon="fa-solid fa-database" class="me-2"/>MYSQL
          </button>

          <button type="button" class="btn btn-laravel ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-laravel" class="me-2" />LARAVEL
          </button>
        </div>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Api:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-braintree titolo">
            <font-awesome-icon icon="fa-solid fa-credit-card" class="me-2"/>BRAINTREE
          </button>
        </a>
        
        <a href="https://developer.tomtom.com/">
          <button type="button" class="btn btn-tomtom titolo ms-3">
            <font-awesome-icon icon="fa-solid fa-globe" class="me-2" />TOMTOM
          </button>
        </a>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <button type="button" class="btn btn-desktop titolo">
          <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
        </button>
        
        <button type="button" class="btn btn-tablet titolo ms-3 me-3">
          <font-awesome-icon icon="fa-solid fa-tablet" class="me-2"/>TABLET
        </button>

        <button type="button" class="btn btn-mobile titolo">
          <font-awesome-icon icon="fa-solid fa-mobile" class="me-2" />MOBILE
        </button>
      </div>
    </div>
  </div>
  
  <div class="row row-1">
    <h1 class="text-light text-center titolo fw-bold">Card Pokémon</h1>
    
    <div class="col text-center">

      <div class="titolo giustificato ms-4 me-4 fs-5">
        <span class="text-light"> Ho trascorso la mia infanzia, guardando i <span class="blue">Pokémon</span> in televisione e giocandoci con il mio <span class="blue">Game Boy Color</span>, 
          di colore blu. Così ho deciso di realizzare una <span class="blue">card</span> Pokémon, utilizzando HTML, CSS e JavaScript. Per generare una card Pokémon, ho applicato 
          l'apposito <span class="blue">API (Application Programming Interface)</span>, dove sono presenti i Pokémon, l'apposito <span class="blue">dalla prima alla nona generazione</span>. 
          <br>
          <br>
          La prima fase del lavoro è stata quella di realizzare lo <span class="blue">stile</span> della card, ovvero lo <span class="blue">sfondo (background)</span> con la 
          <span class="blue">Poké Ball</span>, le <span class="blue">barre delle statistiche</span>, l'<span class="blue">immagine</span> del Pokémon, grazie al CSS 
          (Cascading Style Sheets). Il <span class="blue">funzionamento</span> della card è stato effettuato con JavaScript, attraverso la <span class="blue">funzione</span> 
          dell'<span class="blue">API Fetch</span>, si possono ottenere i <span class="blue">dati</span> di un singolo Pokémon, ricavati dall'API. In questo caso, 
          si prende come <span class="blue">input</span> il <span class="blue">nome</span> di un Pokémon, per <span class="blue">mostrare</span> i dati, 
          come la <span class="blue">tipologia</span> e il <span class="blue">numero della lista</span> del Pokémon (Pikachu è di tipo elettro ed è il numero 25) e 
          le <span class="blue">statistiche</span>. Se il Pokémon <span class="blue">non sarà presente</span>, <span class="blue">sbagliando</span> a digitare il nome, 
          comparirà un semplice <span class="blue">alert</span>. Nell'API, la tipologia è scritta in <span class="blue">inglese</span>. Per <span class="blue">tradurla</span>, 
          in <span class="blue">italiano</span>, ho creato un <span class="blue">array</span>, scrivendo ad esempio <span class="blue fst-italic">"steel": "Acciaio"</span>. <br>
          <br>
          Per <span class="blue">ricercare</span> un Pokémon, ho creato una <span class="blue">barra di ricerca (search)</span>, dove si <span class="blue">digita</span> 
          il Pokémon, scrivendolo in <span class="blue">minuscolo</span>. Si può anche mostrare il Pokémon nella versione <span class="blue">shiny</span>, cliccando 
          nell'apposita <span class="blue">checkbox (casella di controllo)</span>. Infine, nella fase di <span class="blue">caricamento</span> della card, dopo aver digitato 
          il nome, nella barra di ricerca, ho creato uno <span class="blue">spinner</span>, dalla forma di Poké Ball, con durata di due secondi, grazie alla funzione 
          <span class="blue">setTimeout</span> di JavaScript. La card, quindi, è visibile nella versione <span class="blue">tablet</span> e <span class="blue">mobile</span>. 
        </span>
      </div>
      
      <h2 class="text-white fw-bold titolo text-center ms-3 me-3">Link:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo">
        <a href="https://github.com/PierluigiPapa/proj-card-pokemon">
          <button type="button" class="btn btn-github titolo ms-3 me-3">
            <font-awesome-icon icon="fa-brands fa-github" class="me-2" />GITHUB
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo ms-3 me-3">Video:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://files.fm/f/3wdktas4ck">
          <button type="button" class="btn btn-video titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-video" class="me-2"/>VIDEO
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo ms-3 me-3">Competenze tecniche:</h2>
      
      <div class="d-flex justify-content-center titolo">
        <div class="titolo">
          <button type="button" class="btn btn-html">
            <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
          </button>

          <button type="button" class="btn btn-css titolo ms-3 me-3">
            <font-awesome-icon icon="fa-brands fa-css3-alt" class="me-2" />CSS
          </button>

          <button type="button" class="btn btn-javascript">
            <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JS
          </button>
        </div>
      </div>
      
      <h2 class="text-white fw-bold titolo me-3 ms-3">Api:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://pokeapi.co/">
          <button type="button" class="btn btn-pokemon titolo ms-3 me-3">
            <font-awesome-icon icon="fa-solid fa-gamepad" class="me-2"/>POKÉMON
          </button>
        </a>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-desktop titolo">
            <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
          </button>
        </a>
        
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-tablet titolo ms-3 me-3">
            <font-awesome-icon icon="fa-solid fa-tablet" class="me-2"/>TABLET
          </button>
        </a>
        
        <a href="https://developer.tomtom.com/">
          <button type="button" class="btn btn-mobile titolo">
            <font-awesome-icon icon="fa-solid fa-mobile" class="me-2" />MOBILE</button>
          </a>
      </div>
    </div>
  </div>
  
  <div class="row row-blue">
    <h1 class="text-light text-center titolo fw-bold">Yu-gi-oh!</h1>
    
    <div class="col text-center">
      <div class="titolo giustificato ms-4 me-4 fs-5">
        <span class="text-light"> <span class="gray fst-italic">Yu-Gi-Oh</span> è uno dei tanti esercizi, assegnati per il corso in <span class="gray">Full-Stack Web Development</span> 
          di <span class="gray">Boolean Careers</span>, come approccio iniziale a <span class="gray">VueJS</span>, un <span class="gray">framework</span> di JavaScript. <br>
          <br>
          
          <span class="gray"></span>
          Il primo passo è stato quello di <span class="gray">organizzare</span> il lavoro, suddividendolo in <span class="gray">header (parte in alto del sito)</span> e 
          in <span class="gray">main (parte centrale del sito)</span>, al cui interno si trovano dei <span class="gray">componenti</span>. 
          Essi sono dei <span class="gray">blocchi di codice autonomi</span> e <span class="gray">riutilizzabili</span>, che rappresentano 
          <span class="gray">parti specifiche</span> dell' <span class="gray">interfaccia utente</span>. 
          Nel loro interno, ci sono: <span class="gray">script</span>, che contiene la <span class="gray">logica</span> del componente; 
          la <span class="gray">struttura</span> in HTML del componente <span class="gray">(template)</span>; <span class="gray">style</span>, 
          ovvero lo <span class="gray">stile</span> del componente specifico. <br>
          <br>
          Dopo aver realizzato lo stile delle carte, ho creato un <span class="gray">input</span>, per <span class="gray">selezionare</span> l'<span class="gray">archetipo</span> 
          da mostrare nella pagina. Cliccando sull'archetipo, compariranno le tutte le carte. Questo grazie all' <span class="gray">API</span>, un 
          <span class="gray">insieme di definizioni, protocolli e strumenti</span> che consentono a <span class="gray">diversi software</span> di <span class="gray">comunicare</span>
          tra di loro.
        </span>
      </div>
      
      <h2 class="text-white fw-bold titolo text-center">Link:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo">
        <a href="https://github.com/PierluigiPapa/vite-yu-gi-oh">
          <button type="button" class="btn btn-github titolo">
            <font-awesome-icon icon="fa-brands fa-github" class="me-2" />GITHUB
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo ms-3 me-3">Video:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://files.fm/u/r33dgn3z3e#/view/g3dva7cj5s">
          <button type="button" class="btn btn-video titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-video" class="me-2"/>VIDEO
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo">Competenze tecniche:</h2>
      
      <div class="titolo">
        <button type="button" class="btn btn-html ms-3 mb-3">
            <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
        </button>
        
        <button type="button" class="btn btn-css ms-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-css3-alt" class="me-2" />CSS
        </button>

        <button type="button" class="btn btn-javascript ms-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JS
        </button>

        <button type="button" class="btn btn-vuejs ms-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-vuejs" class="me-2" />VUEJS
        </button>

        <button type="button" class="btn btn-vitejs ms-3 mb-3">
          <font-awesome-icon icon="fa-solid fa-cloud-bolt" class="me-2" />VITE
        </button>

        <button type="button" class="btn btn-sass ms-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-sass" class="me-2" />SASS
        </button>
      </div>
      
      <h2 class="text-white fw-bold titolo">Api:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0">
          <button type="button" class="btn btn-yugioh me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-dragon" class="me-2"/>YU-GI-OH!
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <button type="button" class="btn btn-desktop ms-3 me-3">
          <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
        </button>
      </div>
        
    </div>
  </div>
  
  <div class="row row-1">
    <h1 class="text-light text-center titolo fw-bold">MasterStudy</h1>
    <div class="col text-center">
      <div class="titolo giustificato ms-4 me-4 fs-5">
        <span class="text-light"> <span class="blue fst-italic">MasterStudy</span> è un portale di una business school, realizzato per il progetto di metà corso in 
        <span class="blue">Full-Stack Web Development</span> di <span class="blue">Boolean Careers</span>, principalmente in <span class="blue">VueJS</span>, 
        riguardante solo la parte <span class="blue">Front End</span>, ovvero la <span class="blue">parte visiva</span> del sito internet. <br>
        <br>
        La prima fase del lavoro è stata quella di <span class="blue">organizzarlo</span> e <span class="blue">suddividerlo</span>: in <span class="blue">header (parte superiore)</span>; 
        <span class="blue">main (parte centrale)</span>; <span class="blue">footer (parte inferiore)</span>, al cui interno si trovano dei <span class="blue">componenti</span>, 
        per <span class="blue">lavorare</span> in ogni parte del sito. <br>
        <br>
          
        Attraverso il <span class="blue">countdown</span>, realizzato grazie a una serie di <span class="blue">funzioni JavaScript</span> un utente può decidere di usufruire dello 
        <span class="blue">sconto</span>, cliccando sul bottone <span class="blue fst-italic">subscribe</span>. L'utente, per conoscere il <span class="blue">prezzo</span> di un 
        singolo <span class="blue">corso</span>, basta <span class="blue">muovere</span> il <span class="blue">mouse sull'immagine</span>. Prima del footer, 
        l'utente può <span class="blue">leggere</span> le <span class="blue">recensioni</span>, sempre tramite una funzione JavaScript, che permette di 
        <span class="blue">scorrere</span> e di <span class="blue">ingrandire</span> le <span class="blue">foto profilo</span> degli <span class="blue">studenti</span>.
          
        </span>
      </div>
      
      <h2 class="text-white fw-bold titolo text-center ms-3 me-3">Link:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo">
        <a href="https://github.com/PierluigiPapa/proj-html-vuejs">
          <button type="button" class="btn btn-github titolo ms-3 me-3">
            <font-awesome-icon icon="fa-brands fa-github" class="me-2" />GITHUB
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo ms-3 me-3">Video:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://youtu.be/jbv-Gv-bwHg">
          <button type="button" class="btn btn-video titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-video" class="me-2"/>VIDEO
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo">Competenze tecniche:</h2>
      
      <div class="titolo">
        <button type="button" class="btn btn-html me-3 mb-3 ms-4">
          <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
        </button>

        <button type="button" class="btn btn-javascript me-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JS
        </button>

        <button type="button" class="btn btn-vuejs me-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-vuejs" class="me-2" />VUEJS
        </button>

        <button type="button" class="btn btn-sass me-3 mb-3">
          <font-awesome-icon icon="fa-brands fa-sass" class="me-2" />SASS
        </button>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <button type="button" class="btn btn-desktop titolo me-3 ms-3">
          <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
        </button>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss">
@use "../styles/partials/variables.scss" as *;

.row-blue {
  background: linear-gradient(#1D70A2, #173753);
}

.row-1 {
    background: linear-gradient($gray, #333333);
}

.titolo {
  margin-top: 30px;
  margin-bottom: 30px;
}

.giustificato {
  text-align: justify;
}

.gray {
  color: #c4c4c4;
}

.blue {
    color: #1D70A2;
}



</style>