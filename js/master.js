//Start Functions

function ScrollInto(elemnts) {

    elemnts.forEach( elemnt => {

        elemnt.addEventListener( "click", ( e ) => {

            e.preventDefault();

            document.querySelector( e.target.dataset.section ).scrollIntoView( {

                behavior: 'smooth'

            } );

        } );
    } );
};

function AddingActive(event) {

    event.target.parentElement.querySelectorAll( ".active" ).forEach( element => {

        element.classList.remove( "active" );

    } )

    event.target.classList.add( "active" );

};

//End Functions

//Start Setting

document.querySelector( ".icon-container .fa-gear" ).onclick = () => {

    document.querySelector( ".icon-container .icon" ).classList.toggle( "fa-spin" );

    document.querySelector( ".setting-box" ).classList.toggle( "open" );

};

//End Setting

//Start Colors Options

let mainColor = localStorage.getItem( "color" );

if ( mainColor != null ) {

    document.documentElement.style.setProperty( "--color", mainColor );

    document.querySelectorAll( ".colors-options li" ).forEach( li => {

        li.classList.remove( "active" );

        if (li.dataset.color === mainColor) {

            li.classList.add( "active" );

        }
    } );
};

const lies = document.querySelectorAll( ".colors-options li" );

lies.forEach( li => {

    li.addEventListener( "click", ( e ) => {

        localStorage.setItem( "color", e.target.dataset.color );

        document.documentElement.style.setProperty( "--color", e.target.dataset.color );

        AddingActive( e );

    } );
} );

//End Colors Options

//Start Raondom Options

let randomOption = true;

let SetRandomGround;

function RandomingGround() {

    if ( randomOption === true ){

        SetRandomGround = setInterval( () => {

            let random = Math.floor( Math.random() * ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"].length );

            document.querySelector( ".landing" ).style.backgroundImage = `url("imgs/${ ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"][random] }")`;

        }, 10000 );

    }
} ;

let randomLocal = localStorage.getItem( "back-option" );

if ( randomLocal != null ) {

    document.querySelectorAll( ".random-options span" ).forEach( span => {

        span.classList.remove( "active" );

    } );

        if (randomLocal === 'yes') {

            randomOption = true;

            document.querySelector( ".random-options .yes" ).classList.add( "active" );

        } else {

            randomOption = false;

            document.querySelector( ".random-options .no" ).classList.add( "active" );

        }
};

const spans = document.querySelectorAll( ".random-options span" );

spans.forEach( span => {

    span.addEventListener( "click", ( e ) => {

        AddingActive( e );

        if ( e.target.dataset.option === "yes" ) {

            randomOption = true;

            localStorage.setItem( "back-option", "yes" );

            RandomingGround();

        } else {

            randomOption = false;

            localStorage.setItem( "back-option", "no" );

            clearInterval( SetRandomGround );

        }
    } );
} );

RandomingGround();

//End Raondom Options

//Start Nav-Bullets

let navBullets = document.querySelectorAll( ".nav-bullets .bullet" );

ScrollInto( navBullets );

let navContainer = document.querySelector( ".nav-bullets" );

let navSpans = document.querySelectorAll( ".bullets-options span" );

let navLocal = localStorage.getItem( "bullet-option" );

if (navLocal != null) {

    navSpans.forEach( span => {

        span.classList.remove( "active" );

    } );

    if (navLocal === "Show") {

        navContainer.style.display = 'block';

        document.querySelector( ".bullets-options .yes" ).classList.add("active");

    } else {

        navContainer.style.display = 'none';

        document.querySelector( ".bullets-options .no" ).classList.add( "active" );

    }

};

navSpans.forEach( span => {

    span.addEventListener( 'click', ( e ) => {

        if ( span.dataset.option === "yes" )
        {

            navContainer.style.display = 'block';

            localStorage.setItem( "bullet-option", "Show" );

        } else
        {

            navContainer.style.display = 'none';

            localStorage.setItem( "bullet-option", "Hide" );

        }

        AddingActive( e );

    } );

} );

//End Nav-Bullets

//Start Reset Butten

document.querySelector( ".reset" ).onclick = () => {

    localStorage.clear();

    window.location.reload();

}

//End Reset Butten

//Start Links

let links = document.querySelectorAll( ".links a" )

ScrollInto( links );

//End Links

//Start bars

let bars = document.querySelector( ".bars" );

let barsLinks = document.querySelector( "ul.links" );

document.querySelector(".bars").onclick = (e ) => {

    e.stopPropagation();

    barsLinks.classList.toggle( "open" );

    bars.classList.toggle( "active" );

};

document.addEventListener( 'click', ( e ) => {

    if ( e.target !== barsLinks && e.target !== bars )
    {

        if ( barsLinks.classList.contains( "open" ) )
        {

            barsLinks.classList.toggle( "open" );

            bars.classList.toggle( "active" );
        };
    };
} );

document.querySelector( "ul.links" ).onclick = ( e ) => {

    e.stopPropagation();

};

//End bars

// Start Skills

let progressSpans = document.querySelectorAll( ".skill-progress span" );

let skillsSec = document.querySelector( ".skills" );

window.onscroll = () => {

    if ( window.scrollY >= skillsSec.offsetTop ) {

        progressSpans.forEach( span => {

            span.style.width = span.dataset.width;

        } );

    };
};

// End Skills

// Start Gallery

let GalleryImages = document.querySelectorAll( ".gallery img" );

let popupOverlay, popupBox;

GalleryImages.forEach( img => {

    img.addEventListener( "click", ( e ) => {

        popupOverlay = document.createElement( "div" );

        popupOverlay.classList.add( "popup-overlay" );

        document.body.appendChild( popupOverlay );

        popupBox = document.createElement( "div" );

        popupBox.classList.add( "popup-box" );

        let popupImg = document.createElement( "img" );

        popupImg.src = img.src;

        popupBox.appendChild( popupImg );


        let popupImgTitle = document.createElement( "h3" );

        popupImgTitle.innerHTML = img.alt;

        popupBox.appendChild( popupImgTitle );

        document.body.appendChild( popupBox );

        let closePopup = document.createElement( "span" );

        closePopup.innerHTML = "X";

        closePopup.classList.add( "close-popup" );

        popupBox.appendChild( closePopup );

    } );
} );

document.addEventListener( "click", ( e ) => {

    if ( e.target.className === "close-popup" )
    {

        popupBox.remove();

        popupOverlay.remove();

    };
} );

// End Gallery


