<script>
export default {
  name: 'AppJumbo',
  mounted() {
    setTimeout(() => {
      const nameElement = document.querySelector('.name');
      nameElement.classList.add('visible');
    }, 1000);

    setTimeout(() => {
      const jobElement = document.querySelector('.job');
      jobElement.classList.add('visible');
    }, 2000);
  },
  methods: {
    scaricaCV() {
      const link = document.createElement('a');
      link.href = '/Pierluigi_Papa_CV.pdf';
      link.download = 'Pierluigi_Papa_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>


<template>

<div class="container-fluid container-jumbo">
    <div class="row">
        <div class="col-12 col-md-6 d-flex justify-content-center top">
            <div>
                <h1>Ciao, sono <span class="name">Pierluigi Papa</span></h1>
                
                <h3 class="job">Full Stack Web Developer</h3>
                
                <div class="social-networks d-flex justify-content-start">
                    <a href="https://www.linkedin.com/in/pierluigipapa/" target="_blank" class="social-icon"><font-awesome-icon icon="fa-brands fa-linkedin-in"/></a>
                    <a href="https://github.com/PierluigiPapa" target="_blank" class="social-icon"><font-awesome-icon icon="fa-brands fa-github" /></a>
                    <a href="mailto:pierluigipapa9@gmail.com" target="_blank" class="social-icon"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
  
                    <button type="button" class="btn" @click="scaricaCV">
                         <font-awesome-icon icon="fa-solid fa-download" class="me-2"/> DOWNLOAD
                    </button>
                </div>
  
            </div>
        </div>
        
        <div class="col-12 col-md-6 d-flex justify-content-center top">
            <img src="@/assets/images/Squirtle.png" alt="">
        </div>
    </div>
</div>

</template>
  
<style lang="scss">

@use "../../styles/partials/variables.scss" as *;
  
.container-jumbo {
    background: linear-gradient(#1b1b1b, #333333);
    color: white;
    
    .top {
        margin-top: 150px;
        margin-bottom: 150px;
        
        @media (max-width: 768px) {
            margin-top: 50px;
            margin-bottom: 50px;
        }
    }
    
    h1 {
        font-size: 50px;
        
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
    
    .name {
        color: #1D70A2;
        font-size: 50px;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.5s ease; 
        
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
    
    .name.visible,
    .job.visible {
        opacity: 1;
    }
    
    .job {
        font-size: 40px;
        opacity: 0;
        transition: opacity 0.5s ease;
        
        @media (max-width: 768px) {
            font-size: 25px;
        }
    }
    
    .social-networks {
        margin-top: 20px;
        
        .social-icon {
            color: white;
            margin-right: 15px;
            font-size: 30px;
            
            @media (max-width: 768px) {
                font-size: 20px;
                margin-right: 10px;
            }
            
            &:hover {
                color: #2892D7;
                transition: background-color 0.3s, color 0.3s, filter 0.3s;
            }
        }
        
        .btn {
            margin-left: 30px;
            background-color: white;
            border: 3px solid #1D70A2;
            font-weight: 600;
            color: #1D70A2;
            
            @media (max-width: 768px) {
                font-size: 14px;
                margin-left: 15px;
                padding: 5px 10px;
            }
            
            &:hover {
                background-color: #1D70A2;
                border: 3px solid white;
                font-weight: 600;
                color: white;
                transition: background-color 0.3s, color 0.3s, filter 0.3s;
            }
            
            .download {
                font-size: 20px;
                
                @media (max-width: 768px) {
                    font-size: 16px;
                }
            }
        }
    }
    
    img {
        width: 40%;
        animation: flicker 1s infinite;
        
        @media (max-width: 768px) {
            width: 60%;
        }
    }
}

</style>
  