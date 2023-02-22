const bar = document.querySelector('.split__bar');
const right = document.querySelector('.split__right');
let mouse_is_down = false;

bar.addEventListener('mousedown', (e) => {
  mouse_is_down = true;
})

document.addEventListener('mousemove', (e) => {
  if (!mouse_is_down) return;

  right.style.width = `${e.clientX}px`;
})

document.addEventListener('mouseup', () => {
  mouse_is_down = false;
})

const R = document.querySelectorAll(".R");
const B = document.querySelectorAll(".B");
const R1 = document.querySelectorAll(".R1");
const B1 = document.querySelectorAll(".B1");
const R2 = document.querySelectorAll(".R2");
const B2 = document.querySelectorAll(".B2");
const R3 = document.querySelectorAll(".R3");
const B3 = document.querySelectorAll(".B3");
const R4 = document.querySelectorAll(".R4");
const B4 = document.querySelectorAll(".B4");

R.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R.forEach((userItem) => {
        userItem.classList.toggle('mark');
      B.forEach((userItem) => {
        userItem.classList.toggle('mark');
      })});
      }); 
      
})

R.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R.forEach((userItem) => {
        userItem.classList.toggle('mark');
    });
    B.forEach((userItem) => {
      userItem.classList.toggle('mark');
    });
  }); 
      
})

B.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      B.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      })});
      }); 
      
})

B.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
    });
    B.forEach((userItem) => {
      userItem.classList.toggle('mark_b');
    });
  }); 
      
})
R1.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R1.forEach((userItem) => {
        userItem.classList.toggle('mark');
      B1.forEach((userItem) => {
        userItem.classList.toggle('mark');
      })});
      }); 
      
})

R1.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R1.forEach((userItem) => {
        userItem.classList.toggle('mark');
    });
    B1.forEach((userItem) => {
      userItem.classList.toggle('mark');
    });
  }); 
      
})

B1.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R1.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      B1.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      })});
      }); 
      
})

B1.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R1.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
    });
    B1.forEach((userItem) => {
      userItem.classList.toggle('mark_b');
    });
  }); 
      
})

R2.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R2.forEach((userItem) => {
        userItem.classList.toggle('mark');
      B2.forEach((userItem) => {
        userItem.classList.toggle('mark');
      })});
      }); 
      
})

R2.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R2.forEach((userItem) => {
        userItem.classList.toggle('mark');
    });
    B2.forEach((userItem) => {
      userItem.classList.toggle('mark');
    });
  }); 
      
})

B2.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R2.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      B2.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      })});
      }); 
      
})

B2.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R2.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
    });
    B2.forEach((userItem) => {
      userItem.classList.toggle('mark_b');
    });
  }); 
      
})


R3.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R3.forEach((userItem) => {
        userItem.classList.toggle('mark');
      B3.forEach((userItem) => {
        userItem.classList.toggle('mark');
      })});
      }); 
      
})

R3.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R3.forEach((userItem) => {
        userItem.classList.toggle('mark');
    });
    B3.forEach((userItem) => {
      userItem.classList.toggle('mark');
    });
  }); 
      
})

B3.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R3.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      B3.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      })});
      }); 
      
})

B3.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R3.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
    });
    B3.forEach((userItem) => {
      userItem.classList.toggle('mark_b');
    });
  }); 
      
})

R4.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R4.forEach((userItem) => {
        userItem.classList.toggle('mark');
      B4.forEach((userItem) => {
        userItem.classList.toggle('mark');
      })});
      }); 
      
})

R4.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R4.forEach((userItem) => {
        userItem.classList.toggle('mark');
    });
    B4.forEach((userItem) => {
      userItem.classList.toggle('mark');
    });
  }); 
      
})

B4.forEach((userItem) => {
  userItem.addEventListener("mouseover", function() {
    R4.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      B4.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
      })});
      }); 
      
})

B4.forEach((userItem) => {
  userItem.addEventListener("mouseout", function() {
    R4.forEach((userItem) => {
        userItem.classList.toggle('mark_b');
    });
    B4.forEach((userItem) => {
      userItem.classList.toggle('mark_b');
    });
  }); 
      
})



