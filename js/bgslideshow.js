window.onload = function () {
     // Array of Images
      var backgroundImg11=["image/car1/car11/opimg/car111.jpg",
                        "image/car1/car11/opimg/car112.jpg",
                        "image/car1/car11/opimg/car113.jpg",
                        "image/car1/car11/opimg/car114.jpg",
                        "image/car1/car11/opimg/car115.jpg"
                        ]
      var backgroundImg12=["image/car1/car12/opimg/car111.jpg",
                        "image/car1/car12/opimg/car112.jpg",
                        "image/car1/car12/opimg/car113.jpg",
                        "image/car1/car12/opimg/car114.jpg",
                        "image/car1/car12/opimg/car115.jpg"
                        ]
      var backgroundImg13=["image/car1/car13/opimg/car111.jpg",
                        "image/car1/car13/opimg/car112.jpg",
                        "image/car1/car13/opimg/car113.jpg",
                        "image/car1/car13/opimg/car114.jpg",
                        "image/car1/car13/opimg/car115.jpg"
                        ]
      var backgroundImg14=["image/car1/car14/opimg/car111.jpg",
                        "image/car1/car14/opimg/car112.jpg",
                        "image/car1/car14/opimg/car113.jpg",
                        "image/car1/car14/opimg/car114.jpg",
                        "image/car1/car14/opimg/car115.jpg"
                        ]
      var backgroundImg15=["image/car1/car15/opimg/car111.jpg",
                        "image/car1/car15/opimg/car112.jpg",
                        "image/car1/car15/opimg/car113.jpg",
                        "image/car1/car15/opimg/car114.jpg",
                        "image/car1/car15/opimg/car115.jpg"
                        ]
       var backgroundImg21=["image/car2/car11/opimg/car111.jpg",
                        "image/car2/car11/opimg/car112.jpg",
                        "image/car2/car11/opimg/car113.jpg",
                        "image/car2/car11/opimg/car114.jpg",
                        "image/car2/car11/opimg/car115.jpg"
                        ]
      var backgroundImg22=["image/car2/car12/opimg/car111.jpg",
                        "image/car2/car12/opimg/car112.jpg",
                        "image/car2/car12/opimg/car113.jpg",
                        "image/car2/car12/opimg/car114.jpg",
                        "image/car2/car12/opimg/car115.jpg"
                        ]
      var backgroundImg23=["image/car2/car13/opimg/car111.jpg",
                        "image/car2/car13/opimg/car112.jpg",
                        "image/car2/car13/opimg/car113.jpg",
                        "image/car2/car13/opimg/car114.jpg",
                        "image/car2/car13/opimg/car115.jpg"
                        ]
      var backgroundImg24=["image/car2/car14/opimg/car111.jpg",
                        "image/car2/car14/opimg/car112.jpg",
                        "image/car2/car14/opimg/car113.jpg",
                        "image/car2/car14/opimg/car114.jpg",
                        "image/car2/car14/opimg/car115.jpg"
                        ]
      var backgroundImg25=["image/car2/car15/opimg/car111.jpg",
                        "image/car2/car15/opimg/car112.jpg",
                        "image/car2/car15/opimg/car113.jpg",
                        "image/car2/car15/opimg/car114.jpg",
                        "image/car2/car15/opimg/car115.jpg"
                        ]
        setInterval(changeImage, 5000);
       function changeImage() {   
        var i = Math.floor((Math.random() * 5));
        document.getElementById("slide1-1").style.backgroundImage = "url('"+backgroundImg11[i]+"'), url('black.jpg')";
        document.getElementById("slide1-1").style.transition = "background 2s linear";

        document.getElementById("slide1-2").style.backgroundImage = "url('"+backgroundImg12[i]+"'), url('black.jpg')";
        document.getElementById("slide1-2").style.transition = "background 2s linear";

        document.getElementById("slide1-3").style.backgroundImage = "url('"+backgroundImg13[i]+"'), url('black.jpg')";
        document.getElementById("slide1-3").style.transition = "background 2s linear";

        document.getElementById("slide1-4").style.backgroundImage = "url('"+backgroundImg14[i]+"'), url('black.jpg')";
        document.getElementById("slide1-4").style.transition = "background 2s linear";

        document.getElementById("slide1-5").style.backgroundImage = "url('"+backgroundImg15[i]+"'), url('black.jpg')";
        document.getElementById("slide1-5").style.transition = "background 2s linear";

        document.getElementById("slide2-1").style.backgroundImage = "url('"+backgroundImg21[i]+"'), url('black.jpg')";
        document.getElementById("slide2-1").style.transition = "background 2s linear";

        document.getElementById("slide2-2").style.backgroundImage = "url('"+backgroundImg22[i]+"'), url('black.jpg')";
        document.getElementById("slide2-2").style.transition = "background 2s linear";

        document.getElementById("slide2-3").style.backgroundImage = "url('"+backgroundImg23[i]+"'), url('black.jpg')";
        document.getElementById("slide2-3").style.transition = "background 2s linear";

        document.getElementById("slide2-4").style.backgroundImage = "url('"+backgroundImg24[i]+"'), url('black.jpg')";
        document.getElementById("slide2-4").style.transition = "background 2s linear";

        document.getElementById("slide2-5").style.backgroundImage = "url('"+backgroundImg25[i]+"'), url('black.jpg')";
        document.getElementById("slide2-5").style.transition = "background 2s linear";


      }
    }
