/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   SURPRISE BUTTON
========================================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const popup =
    document.getElementById("popup");

const popupClose =
    document.getElementById("popupClose");


surpriseButton.addEventListener("click", () => {

    popup.classList.add("active");

});


popupClose.addEventListener("click", () => {

    popup.classList.remove("active");

});


popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.classList.remove("active");

    }

});


/* =========================================================
   HALL OF SHAME COUNTER
========================================================= */

const shameButton =
    document.getElementById("shameButton");

const shameCount =
    document.getElementById("shameCount");

let shameLevel = 0;

shameButton.addEventListener("click", () => {

    shameLevel++;

    shameCount.textContent = shameLevel;

    shameButton.style.transform =
        "scale(1.15) rotate(-3deg)";

    setTimeout(() => {

        shameButton.style.transform = "";

    }, 200);

});


/* =========================================================
   CURSOR SPARKS
========================================================= */

document.addEventListener("mousemove", (event) => {

    if (Math.random() > 0.82) {

        const spark =
            document.createElement("span");

        spark.className =
            "cursor-spark";

        spark.style.left =
            `${event.clientX}px`;

        spark.style.top =
            `${event.clientY}px`;

        document.body.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 700);

    }

});


/* =========================================================
   GOJO IMAGE ROTATION
========================================================= */

const gojoImages = [

    "images/gojo/gojo1.png",
    "images/gojo/gojo2.png",
    "images/gojo/gojo3.png",
    "images/gojo/gojo4.png",
    "images/gojo/gojo5.png",
    "images/gojo/gojo6.png",
    "images/gojo/gojo7.png",
    "images/gojo/gojo8.png",
    "images/gojo/gojo9.png",
    "images/gojo/gojo10.png",
    "images/gojo/gojo11.png",
    "images/gojo/gojo12.png",
    "images/gojo/gojo13.png",
    "images/gojo/gojo14.png"
];


const floatingGojos =
    document.querySelectorAll(".floating-gojo img");


setInterval(() => {

    floatingGojos.forEach((image) => {

        const randomIndex =
            Math.floor(
                Math.random() * gojoImages.length
            );

        image.src =
            gojoImages[randomIndex];

    });

}, 4000);


/* =========================================================
   GOJO ARCHIVE RANDOM TILT
========================================================= */

const gojoPhotos =
    document.querySelectorAll(".gojo-photo");


gojoPhotos.forEach((photo) => {

    photo.addEventListener("mouseenter", () => {

        const randomRotation =
            (Math.random() * 6) - 3;

        photo.style.transform =
            `scale(1.05) rotate(${randomRotation}deg)`;

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "";

    });

});


/* =========================================================
   FRIEND PHOTO RANDOM TILT
========================================================= */

const friendPhotos =
    document.querySelectorAll(".friend-photo");


friendPhotos.forEach((photo) => {

    photo.addEventListener("mouseenter", () => {

        photo.style.transform =
            "rotate(0deg) scale(1.08) translateY(-15px)";

    });

    photo.addEventListener("mouseleave", () => {

        const randomRotation =
            Math.random() > 0.5
                ? 4
                : -4;

        photo.style.transform =
            `rotate(${randomRotation}deg)`;

    });

});


/* =========================================================
   NAV ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


const activeObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                    });

                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach((section) => {

    activeObserver.observe(section);

});


/* =========================================================
   PARALLAX
========================================================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    document.querySelectorAll(".floating-gojo")
        .forEach((element, index) => {

            const strength =
                (index + 1) * 7;

            element.style.marginLeft =
                `${x * strength}px`;

            element.style.marginTop =
                `${y * strength}px`;

        });

});


/* =========================================================
   SECRET GOJO KEY SEQUENCE
========================================================= */

let typedKeys = "";

document.addEventListener("keydown", (event) => {

    typedKeys +=
        event.key.toLowerCase();

    if (typedKeys.length > 20) {

        typedKeys =
            typedKeys.slice(-20);

    }

    if (typedKeys.includes("gojo")) {

        popup.classList.add("active");

        typedKeys = "";

    }

});


/* =========================================================
   CLICKING GOJO IMAGES
========================================================= */

document.querySelectorAll(
    ".gojo-photo img, .floating-gojo img, .gojo-banner img"
).forEach((image) => {

    image.addEventListener("click", () => {

        image.style.transform =
            "scale(1.2) rotate(5deg)";

        setTimeout(() => {

            image.style.transform = "";

        }, 500);

    });

});


/* =========================================================
   MARINE FACT CARD RANDOM FLOAT
========================================================= */

document.querySelectorAll(".marine-fact")
    .forEach((card, index) => {

        card.style.animationDelay =
            `${index * 0.15}s`;

    });


/* =========================================================
   WRITING DEPARTMENT
========================================================= */

const writingDepartment =
    document.querySelector(".writing-department");


writingDepartment.addEventListener("click", (event) => {

    const href =
        writingDepartment.getAttribute("href");

    if (
        !href ||
        href.includes("PASTE-YOUR-DOC-ID-HERE")
    ) {

        event.preventDefault();

        alert(
            "The Writing Department is unfinished. Replace the placeholder Google Docs link in index.html first."
        );

    }

});


/* =========================================================
   RANDOM SECTION WOBBLE
========================================================= */

const cards = document.querySelectorAll(
    ".interest-card, .fact-card, .story-card, .marine-fact"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.setProperty(
            "--random-rotation",
            `${(Math.random() * 4) - 2}deg`
        );

    });

});