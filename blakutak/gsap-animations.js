
document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined") {
        console.error("GSAP belum berhasil dimuat.");
        return;
    }

    // PAGE 1: Judul dan tombol muncul perlahan
    gsap.from(".hero-section .section-content > *", {
        opacity: 0,
        y: 35,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

    // PAGE 2: Gallery cards muncul bertahap saat di-scroll
    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".gallery-card", {
            opacity: 0,
            y: 55,
            scale: 0.96,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".gallery-grid",
                start: "top 85%",
                once: true
            }
        });
    }

    // Kotak hadiah bergerak lembut
    const giftBox = document.getElementById("giftBox");
    const flowerResult = document.getElementById("flowerResult");
    const page3Background = document.getElementById("page3Background");

    if (giftBox) {
        const idleAnimation = gsap.to(giftBox, {
            y: -8,
            rotation: 2,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        giftBox.addEventListener("mouseenter", function () {
            idleAnimation.pause();
            gsap.to(giftBox, {
                scale: 1.08,
                rotation: 0,
                duration: 0.25,
                ease: "back.out(2)"
            });
        });

        giftBox.addEventListener("mouseleave", function () {
            gsap.to(giftBox, {
                scale: 1,
                duration: 0.25,
                onComplete: function () {
                    if (!giftBox.hidden) idleAnimation.resume();
                }
            });
        });

        // Animasi saat kotak diklik
        giftBox.addEventListener("click", function () {
            idleAnimation.kill();

            gsap.to(giftBox, {
                scale: 0.5,
                rotation: 15,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });

            // Beri waktu script.js menampilkan bunga
            requestAnimationFrame(function () {
                if (flowerResult && !flowerResult.hidden) {
                    gsap.fromTo(flowerResult,
                        {
                            opacity: 0,
                            scale: 0.7,
                            y: 35
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.9,
                            ease: "back.out(1.5)",
                            clearProps: "transform"
                        }
                    );

                    // Efek mekar pada gambar bunga
                    const flower = flowerResult.querySelector(".flower-image");

                    if (flower) {
                        gsap.fromTo(flower,
                            {
                                scale: 0.2,
                                rotation: -12,
                                opacity: 0
                            },
                            {
                                scale: 1,
                                rotation: 0,
                                opacity: 1,
                                duration: 1.2,
                                delay: 0.15,
                                ease: "elastic.out(1, 0.6)"
                            }
                        );
                    }
                }
            });
        });
    }

    // Tombol Open Again
    const resetGift = document.getElementById("resetGift");

    if (resetGift) {
        resetGift.addEventListener("click", function () {
            if (giftBox) {
                gsap.set(giftBox, {
                    clearProps: "all"
                });

                gsap.fromTo(giftBox,
                    { scale: 0.7, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)"
                    }
                );
            }

            if (flowerResult) {
                gsap.set(flowerResult, {
                    clearProps: "all"
                });
            }
        });
    }

    console.log("GSAP animations berhasil dimuat.");
});

    // Hover animation untuk Gallery Cards di Page 2
    document.querySelectorAll(".gallery-card").forEach(function (card) {
        const image = card.querySelector("img");

        card.addEventListener("mouseenter", function () {
            gsap.to(card, {
                y: -10,
                scale: 1.03,
                duration: 0.35,
                ease: "power2.out"
            });

            if (image) {
                gsap.to(image, {
                    scale: 1.1,
                    duration: 0.45,
                    ease: "power2.out"
                });
            }
        });

        card.addEventListener("mouseleave", function () {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.35,
                ease: "power2.out"
            });

            if (image) {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.45,
                    ease: "power2.out"
                });
            }
        });
    });
