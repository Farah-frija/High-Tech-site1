  // Get a reference to the video element
   video = document.getElementsByTagName("video")[0];
  console.log(video);

  // Play the video when the user clicks on a button
  video.controls=false;

 
  video.playbackRate =3;
video.addEventListener("click", function(event) { 
    

    if(this.paused)
    this.play();
    else
    this.pause();
  });
        
        input2=document.getElementById("radio-2");
        input3=document.getElementById("radio-3");
        input4=document.getElementById("radio-4");
        input5=document.getElementById("radio-5");
        input6=document.getElementById("radio-6");
        input7=document.getElementById("radio-7"); 
      
const slides = document.querySelector('.slider1');
                const radios = document.querySelectorAll(' input[type="radio"]');
                console.log(slides);
                let currentSlide = 0;
               console.log(radios);
                slideInterval = setInterval(nextSlide,0);
                function nextSlide() {
                    console.log(radios[currentSlide]);
                 radios[currentSlide].checked = false;
                 id=radios[currentSlide].id;
                 label= document.querySelector('label[for=' + id + ']');
                  label.style.setProperty("opacity","0.3","important");
                  currentSlide = (currentSlide + 1) % 7;
                  radios[currentSlide].checked = true;
                  id=radios[currentSlide].id;
                 label= document.querySelector('label[for=' + id + ']');
                  label.style.cssText="opacity:1;" 
                  if(currentSlide==0)
                  {clearInterval(slideInterval)
                    let time= setTimeout(function(){ video.play();
                        slideInterval = setInterval(nextSlide, 500);
                    },13000);
                    
                
                }
               }
                

                function stopSlideShow() {
                    clearInterval(slideInterval);
                   
                    id=radios[currentSlide].id;
                    label= document.querySelector('label[for=' + id + ']');
                     label.style.cssText="opacity:0.3;" 
                }


                  
                
                radios.forEach(radio => {
                  radio.addEventListener('click', stopSlideShow);
                });
       
                console.log(location.href);
                
                console.log(location.host);
                console.log(location.hostname);
   