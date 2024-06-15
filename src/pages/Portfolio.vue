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
    
    <div class="col text-center">
      <video width="600" controls style="border-radius: 5%;" class="titolo">
        <source src="@/assets/videos/BoolBnB.mp4" type="video/mp4">
      </video>
      
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
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Linguaggi e framework:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <button type="button" class="btn btn-html titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5</button>
        <button type="button" class="btn btn-bootstrap titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-bootstrap" class="me-2" />BOOTSTRAP</button>
        <button type="button" class="btn btn-javascript titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-js" class="me-2" />JAVASCRIPT</button>
        <button type="button" class="btn btn-vuejs titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-vuejs" class="me-2" />VUEJS</button>
        <button type="button" class="btn btn-vitejs titolo me-3 ms-3"><font-awesome-icon icon="fa-solid fa-cloud-bolt" class="me-2" />VITE</button>
        <button type="button" class="btn btn-sass titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-sass" class="me-2" />SASS</button>
        <button type="button" class="btn btn-php titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-php" class="me-2" />PHP</button>
        <button type="button" class="btn btn-mysql titolo me-3 ms-3"><font-awesome-icon icon="fa-solid fa-database" class="me-2"/>MYSQL</button>
        <button type="button" class="btn btn-laravel titolo me-3 ms-3"><font-awesome-icon icon="fa-brands fa-laravel" class="me-2" />LARAVEL</button>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Api:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-braintree titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-credit-card" class="me-2"/>BRAINTREE
          </button>
        </a>
        
        <a href="https://developer.tomtom.com/">
          <button type="button" class="btn btn-tomtom titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-globe" class="me-2" />TOMTOM
          </button>
        </a>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-3 me-3">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-desktop titolo ms-3 me-3">
            <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
          </button>
        </a>
        
        <a href="https://www.braintreepayments.com/">
          <button type="button" class="btn btn-tablet titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-tablet" class="me-2"/>TABLET
          </button>
        </a>
        
        <a href="https://developer.tomtom.com/">
          <button type="button" class="btn btn-mobile titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-mobile" class="me-2" />MOBILE</button>
          </a>
      </div>
    </div>
  </div>
  
  <div class="row row-1">
    <h1 class="text-light text-center titolo fw-bold">Card Pokémon</h1>
    
    <div class="col text-center">
      <!-- <video width="600" controls style="border-radius: 5%;">
        <source src="@/assets/videos/BoolBnB.mp4" type="video/mp4">
      </video> -->
      
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

      <h2 class="text-white fw-bold titolo ms-4">Linguaggi e framework:</h2>

      <div class="d-flex justify-content-center text-center col-12 titolo ms-3 me-3">
        <button type="button" class="btn btn-html titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
        </button>
        
        <button type="button" class="btn btn-css titolo me-3">
          <font-awesome-icon icon="fa-brands fa-css3-alt" class="me-2" />CSS
        </button>
        
        <button type="button" class="btn btn-javascript titolo me-3">
          <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JAVASCRIPT
        </button>
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
        <button type="button" class="btn btn-desktop titolo me-3 ms-3">
          <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
        </button>
          
        <button type="button" class="btn btn-tablet titolo me-3 ms-3">
          <font-awesome-icon icon="fa-solid fa-tablet" class="me-2"/>TABLET
        </button>
        
        <button type="button" class="btn btn-mobile titolo me-3 ms-3">
          <font-awesome-icon icon="fa-solid fa-mobile" class="me-2" />MOBILE
        </button>
      </div>
        
    </div>
  </div>
  
  <div class="row row-blue">
    <h1 class="text-light text-center titolo fw-bold">Yu-gi-oh!</h1>
    
    <div class="col text-center">
      <!-- <video width="600" controls style="border-radius: 5%;">
        <source src="@/assets/videos/BoolBnB.mp4" type="video/mp4">
      </video> -->
      
      <div class="titolo giustificato ms-4 me-4 fs-5">
        <span class="text-light"> Yu-Gi-Oh è uno dei tanti esercizi, assegnati per il corso in Full-Stack Web Development di Boolean Careers, per l'approccio iniziale a VueJS, 
          cioè un framework di JavaScript. <br>
          <br>
          Il primo approccio è stato quello di organizzare il lavoro, suddividendo in header (parte in alta del sito) e in main (parte centrale del sito), al cui interno ci sono dei 
          componenti, ovvero dei blocchi di codice autonomi e riutilizzabili, che rappresentano parti specifiche dell'interfaccia utente. 
          All'interno di questi componenti, ci sono: script, dove contiene la logica del componente; template, cioè la struttura, in HTML, del componente; style, ovvero lo
          stile del componente specifico. <br>
          <br>
          Dopo aver realizzato lo stile delle carte, ho creato un input, per selezionare l'archetipo da mostrare nella pagina. Cliccando sull'archetipo, compariranno le tutte le carte.
          Il tutto grazie all'API, cioè un insieme di definizioni, protocolli e strumenti che consentono a diversi software di comunicare tra di loro.
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

      <h2 class="text-white fw-bold titolo">Linguaggi e framework:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo">
        <button type="button" class="btn btn-html titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/> HTML5
        </button>

        <button type="button" class="btn btn-css titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-css3-alt" class="me-2" />CSS
        </button>

        <button type="button" class="btn btn-javascript titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JAVASCRIPT
        </button>

        <button type="button" class="btn btn-vuejs titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-vuejs" class="me-2" />VUEJS
        </button>
        
        <button type="button" class="btn btn-vitejs titolo me-3 ms-3">
          <font-awesome-icon icon="fa-solid fa-cloud-bolt" class="me-2" />VITE
        </button>
        
        <button type="button" class="btn btn-sass titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-sass" class="me-2" />SASS
        </button>
      </div>
      
      <h2 class="text-white fw-bold titolo">Api:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <a href="https://pokeapi.co/">
          <button type="button" class="btn btn-yugioh titolo me-3 ms-3">
            <font-awesome-icon icon="fa-solid fa-dragon" class="me-2"/>YU-GI-OH!
          </button>
        </a>
      </div>

      <h2 class="text-white fw-bold titolo">Versioni disponibili:</h2>
      
      <div class="d-flex justify-content-center col-12 titolo">
        <button type="button" class="btn btn-desktop titolo ms-3 me-3">
          <font-awesome-icon icon="fa-solid fa-desktop" class="me-2"/>PC
        </button>
      </div>
        
    </div>
  </div>
  
  <div class="row row-1">
    <h1 class="text-light text-center titolo fw-bold">MasterStudy</h1>
    
    <div class="col text-center">
      <!-- <video width="600" controls style="border-radius: 5%;">
        <source src="@/assets/videos/BoolBnB.mp4" type="video/mp4">
      </video> -->
      
      <div class="titolo giustificato ms-4 me-4 fs-5">

      </div>
      
      <h2 class="text-white fw-bold titolo text-center ms-3 me-3">Link:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo">
        <a href="https://github.com/PierluigiPapa/proj-card-pokemon">
          <button type="button" class="btn btn-github titolo ms-3 me-3">
            <font-awesome-icon icon="fa-brands fa-github" class="me-2" />GITHUB
          </button>
        </a>
      </div>
      
      <h2 class="text-white fw-bold titolo ms-4">Linguaggi e framework:</h2>
      
      <div class="d-flex justify-content-center text-center col-12 titolo ms-3 me-3">
        <button type="button" class="btn btn-html titolo me-3 ms-3">
          <font-awesome-icon icon="fa-brands fa-html5" class="me-2"/>HTML5
        </button>
        
        <button type="button" class="btn btn-css titolo me-3">
          <font-awesome-icon icon="fa-brands fa-css3-alt" class="me-2" />CSS
        </button>
        
        <button type="button" class="btn btn-javascript titolo me-3">
          <font-awesome-icon icon="fa-brands fa-js" class="me-2" />JAVASCRIPT
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