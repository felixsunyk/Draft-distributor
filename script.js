"use scrit"
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourt = document.getElementById('fourt');
const fift = document.getElementById('fift');

first.style.backgroundColor ='red';
second.style.backgroundColor ='red'
third.style.backgroundColor ='red'
fourt.style.backgroundColor ='red'
fift.style.backgroundColor ='red'


const btu = document.getElementById("butt");

function myMove() {
    const elem = document.getElementById("animate");      
    let pos = 0;
     const id = setInterval(frame,  5);
    function frame() {
      if (pos === 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = 400 + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  function display (){
    one()
    two()
    three()
    fourr()

    move()
    myMove()
    firs()
    secon()
    thir()
    four()
    fif()
    six()

    at()
    as()
    am()
    threeone()
    threetwo()
    threethree()
    threefour()
    fourone()
    fourtwo()
    fourthree()
    fiveone()
  }
  function  move(){
  const elem = document.getElementById("animat");
  let pos = 0;
     const id = setInterval(frame, 5);
    function frame() {
      if (pos === 300) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = 350 + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  function firs(){
    const elem = document.getElementById("anima");
    let pos = 0;
       const id = setInterval(frame, 5);
      function frame() {
        if (pos === 250) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.top = 300 + "px"; 
          elem.style.left = pos + "px"; 
        }
      }
    }
    function  secon(){
      const elem = document.getElementById("anim");
      let pos = 0;
         const id = setInterval(frame, 5);
        function frame() {
          if (pos === 200) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = 250 + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }
      function  thir(){
        const elem = document.getElementById("ani");
        let pos = 0;
           const id = setInterval(frame, 5);
          function frame() {
            if (pos === 150) {
              clearInterval(id);
            } else {
              pos++; 
              elem.style.top = 200 + "px"; 
              elem.style.left = pos + "px"; 
            }
          }
        }
        function  four(){
          const elem = document.getElementById("an");
          let pos = 0;
             const id = setInterval(frame);
            function frame() {
              if (pos === 100) {
                clearInterval(id);
              } else {
                pos++; 
                elem.style.top = 150 + "px"; 
                elem.style.left = pos + "px"; 
              }
            }
          }
          function  fif(){
            const elem = document.getElementById("a");
            let pos = 20;
               const id = setInterval(frame);
              function frame(){
                if (pos ===50){
                  clearInterval(id);
                } else {
                  pos++; 
                  elem.style.top = 100 + "px"; 
                  elem.style.left = pos + "px"; 
                  // elem.style.rigth =pos + "px";
                 }
              }
            }
            function  six(){
              const elem = document.getElementById("animation");
              let pos = 0;
                 const id = setInterval(frame, 5);
                function frame() {
                  if (pos === 0 ) {
                    clearInterval(id);
                  } else {
                    pos++; 
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px"; 
                  }
                }
              } 
              
              function  one(){
                const elem = document.getElementById("one");
                let pos = 0;
                   const id = setInterval(frame, 5);
                  function frame() {
                    if (pos === 100) {
                      clearInterval(id);
                    } else{
                      pos++; 
                      elem.style.display = "inline"
                      // elem.style.top = pos + "px"; 
                      elem.style.left = pos + "px"; 
                    }
                  }
                }
              function  two(){
                const elem = document.getElementById("two");
                let pos = 0;
                   const id = setInterval(frame, 5);
                  function frame() {
                    if (pos === 200) {
                      clearInterval(id);
                    } else{
                      pos++; 
                      elem.style.display = "inline"
                      // elem.style.top = pos + "px"; 
                      elem.style.left = pos + "px"; 
                    }
                  }
                }
              function  three(){
                const elem = document.getElementById("three");
                let pos = 0;
                   const id = setInterval(frame, 5);
                  function frame() {
                    if (pos === 300) {
                      clearInterval(id);
                    } else{
                      pos++; 
                      elem.style.display = "inline"
                      // elem.style.top = pos + "px"; 
                      elem.style.left = pos + "px"; 
                    }
                  }
                }
              function  fourr(){
                const elem = document.getElementById("tour");
                let pos = 0;
                   const id = setInterval(frame, 5);
                  function frame() {
                    if (pos === 400) {
                      clearInterval(id);
                    } else{
                      pos++; 
                      elem.style.display = "inline"
                      // elem.style.top = pos + "px"; 
                      elem.style.left = pos + "px"; 
                    }
                  }
                }

                function at(){
                  const elem = document.getElementById("at");
                  let pos = 0;
                     const id = setInterval(frame, 5);
                    function frame() {
                      if (pos === 150) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        elem.style.display = "inline"
                        elem.style.top = 100 + "px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                function as(){
                  const elem = document.getElementById("as");
                  let pos = 0;
                     const id = setInterval(frame, 5);
                    function frame() {
                      if (pos === 250) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        elem.style.display = "inline"
                        elem.style.top = 100+"px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                function am(){
                  const elem = document.getElementById("am");
                  let pos = 0;
                     const id = setInterval(frame, 5);
                    function frame() {
                      if (pos === 350) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        elem.style.display = "inline"
                        elem.style.top = 100 + "px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                function threeone(){
                  const elem = document.getElementById("threeone");
                  let pos = 0;
                     const id = setInterval(frame, 5);
                    function frame() {
                      if (pos ===1) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        elem.style.display = "inline"
                        elem.style.top = 150 + "px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                function threetwo(){
                  const elem = document.getElementById("threetwo");
                  let pos = 0;
                     const id = setInterval(frame, 10);
                    function frame() {
                      if (pos === 200) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        // elem.style.display = "inline"
                        elem.style.top = 150 + "px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                function threethree(){
                  const elem = document.getElementById("threethree");
                  let pos = 0;
                     const id = setInterval(frame, 5);
                    function frame() {
                      if (pos === 300) {
                        clearInterval(id);
                      } else{
                        pos++; 
                        elem.style.display = "inline"
                        elem.style.top = 150 + "px"; 
                        elem.style.left = pos + "px"; 
                      }
                    }
                  }
                  function fourone(){
                      const elem = document.getElementById("fourone");
                      let pos = 0;
                         const id = setInterval(frame, 5);
                        function frame() {
                          if (pos === 50) {
                            clearInterval(id);
                          } else {
                            pos++; 
                            elem.style.top = 200 + "px"; 
                            elem.style.display ="inline"
                            elem.style.left = pos + 50 + "px"; 
                          }
                        }
                      }
                  function fourtwo(){
                    const elem = document.getElementById("fourtwo", );
                    let pos = 0;
                       const id = setInterval(frame, 5);
                      function frame() {
                        if (pos === 250) {
                          clearInterval(id);
                        } else{
                          pos++; 
                          // elem.style.display = "inline"
                          elem.style.top = 200 + "px"; 
                          elem.style.right = pos + "px"; 
                        }
                      }
                    }
                  function fourthree(){
                    const elem = document.getElementById("fourthree", );
                    let pos = 50;
                       const id = setInterval(frame, 5);
                      function frame() {
                        if (pos === 350) {
                          clearInterval(id);
                        } else{
                          pos++; 
                          // elem.style.display = "inline"
                          elem.style.top = 200 + "px"; 
                          elem.style.left = pos + "px"; 
                        }
                      }
                    }
                    function fiveone(){
                      const elem = document.getElementById("fiveone");
                      let pos = 0;
                         const id = setInterval(frame, 5);
                        function frame() {
                          if (pos ===0) {
                            clearInterval(id);
                          } else{
                            pos++; 
                            // elem.style.display = "inline"
                            elem.style.top = 250 + "px"; 
                            elem.style.left = pos + "px"; 
                          }
                        }
                      }

                
                btu.addEventListener("click", display)
