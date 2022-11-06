
let scene = document.getElementById("scene")
let parallaxInstance = new Parallax(scene)





  let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let mountains_behind = document.getElementById('mountains-behind');
  let text2 = document.getElementById('text2');
  let mountains_front = document.getElementById('mountains-front');

  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.30 + 'px';
    //mountains_behind.style.top = value * 0 + 'px';
    //mountains_front.style.top = value * 0 + 'px';
    text2.style.marginRight = value * 0.5 + 'px';
    //text2.style.marginTop = value * 0.2 + 'px';
  })


  let loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    loader.style.display = "none";
  })

  document.getElementById("captain").addEventListener("click", function(){
    document.getElementById("earth-audio").play();
});

document.getElementById("click-prompt1").addEventListener("click", function(){
  document.getElementById("mars-audio").play();
});

document.getElementById("click-prompt2").addEventListener("click", function(){
  document.getElementById("jupiter-audio").play();
});

document.getElementById("click-prompt3").addEventListener("click", function(){
  document.getElementById("saturn-audio").play();
});

document.getElementById("click-prompt4").addEventListener("click", function(){
  document.getElementById("grey-audio").play();
});

document.getElementById("click-prompt5").addEventListener("click", function(){
  document.getElementById("green-audio").play();
});



  
  