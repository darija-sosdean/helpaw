window.onload = function() {
    $(document).ready(function() {
        //treba cela strana da se slideupuje

        var setDogName = function (dogName) {
            console.log(dogName)
            $('.dog-name-input').val(dogName); 
        };

        var dogInfo = [
            {
                name: 'Mila',
                img: 'assets/images/mila1.jpg',
                description: "Mila is our youngest member. She's just 2 months old, but won't grow to a big size dog. She is very playful and active, but just as any baby - she gets tired after a few minutes of playing."
            },
            {
                name: 'Max',
                img: 'assets/images/max1.jpg',
                description: "Max is Corgi breed dog, fully grown. He's about 4 years old and weights 10kg. He doesn't shed very much, but he loves outdoors so a house with a backyard would be a great home for him."
            },
            {
                name: 'Charlie',
                img: 'assets/images/charlie1.jpg',
                description: "Charlie is another baby. He's 3 and a half months old,a bit shy but when you gain his trust he loves to play. He's a black labrador breed so he will grow up to be a big dog."
            },
            {
                name: 'Lucy',
                img: 'assets/images/lucy1.jpg',
                description: "Lucy is 2 years old Staford breed dog. People have a wrong idea of this dog breed, but we garantee you she is as calm and cuddly as any other puppy. She loves to play outside."
            },
            {
                name: 'Bailey',
                img: 'assets/images/bailey1.jpg',
                description: "Bailey is our oldest member. She is about 8 years old,so she's at her full size and all grown up. Shs'a a Corgi and German Shepard mix. She isn't very active but loves to cuddle,so if you're a couch potato she's perfect for you."
            },
            {
                name: 'Jamie',
                img: 'assets/images/mila1.jpg',
                description: "Jamie is our 4 months old puppy and our newest member. She's very clingy and loves to be around people, so if you want to take good care of someone who will in return give you only love, Jamie is the pup for you!"
            },
        ];

        dogInfo.forEach(function(dog) {
            $('.adoption-section').append(`<div class='single-dog col-md-6 col-sm-12 '><h3>${dog.name}</h3><img src='${dog.img}' class='img-responsive'  alt='dog'/><p>${dog.description}</p><button class='adopt-btn'>Adopt ${dog.name}</button></div>`);
        });

        $('.adopt-btn').click(function() {
            setDogName(this.textContent.split(" ")[1]);

            $([document.documentElement, document.body]).animate({
                scrollTop: $(".adopt-form").offset().top
            }, 1000);
        })

        $(".explore-btn").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#main-index").offset().top
            }, 1000);
        });



        //Da se sakrije i spuste informacije
        $('#info').hide();
        $('#learn_more').click(
            function(){
                $("#info").toggle('slow'); //NE RADI
            }
        );

        //Hover za ikonice
        $("#icons li a i, #learn_more, #contact li a i").hover(
            function(){$(this).addClass('linkIkonice');},
            function(){$(this).removeClass('linkIkonice');}
        );
        
        
        //Da se klikom na dugme adopt skroluje do forme
        $('.adopt').click(
            function() {
                ;
            }
        )
        
        $('table input, table textarea').focus(
            function(){$(this).addClass('fokusPolja');}
        )
        
        
        /*var name = document.querySelector('#fn').value;
        var lastName = document.querySelector('#ln').value;
        var email = document.querySelector('#em').value;
        var dogName = document.querySelector('#dn').value.toLowerCase();
        var dogList = ["lucy","bailey","max","mila","charlie","jamie"];
        var countries = ["Pick your country","serbia","macedonia","bosnia","romania","montenegro","croatia","bulgaria","hungary"]

        //Regular expressions
        var regName = /^[A-z][a-z]{1,19}$/;
        var regEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;
        
        //Check Name
        $('#fn').blur(
            function(){
                if(!regName.test(name)){
                    $('#fn').addClass('red');
                }
                else{
                    $('#fn').removeClass('red');
                }
            }
        );
        //Check LastName
        $('#ln').blur(
            function(){
                if(!regName.test(lastName)){
                    $('#ln').addClass('red');
                }
                else{
                    $('#ln').removeClass('red');
                }
            }
        );

        //Check Email
        $('#em').blur(
            function(){
                if(!regEmail.test(email)){
                    $('#em').addClass('red');
                }
                else{
                    $('#em').removeClass('red');
                }
            }
        );

        //Check Dog's name
        $('#dn').blur(
            function(){
                for(let i = 0; i < dogList.length; i++) {
                    if(!dogName == dogList[i].value){
                        alert("Sorry, we don't have a dog by that name");
                        $('#dn').addClass('red');
                    }
                    else{
                        $('#dn').removeClass('red');
                    }
                }
            }
        )/** */


    });
}