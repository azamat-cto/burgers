import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomeBurger from "@/assets/images/home-burger.png";
import HomeDish from "@/assets/images/home-dish.png";
import HomePotato from "@/assets/images/home-potato.png";
import HomeTomato from "@/assets/images/home-tomato.png";
import HomeLettuce from "@/assets/images/home-lettuce.png";
import StickerPotatoes from "@/assets/images/sticker-potatoes.svg";

function Hero() {
    return (
        <section className="home section pt-20 pb-4" id="home">
            <div className="home__container container pt-12 pb-8">
                <div className="grid justify-center gap-y-14">
                    <div className="home__data relative text-center">
                        <h1 className="home__title text-heading text-5xl mb-4">
                            Love Every <br /> Burger
                        </h1>
                        <p className="home__description mb-10">
                            We serve the best burgers on the planet, paving the
                            way for cooking and preparing hot, delicious
                            burgers.
                        </p>
                        <Button className="button text-heading font-aclonica rounded-[4rem] h-12 px-6 transition hover:shadow-xl">
                            Bite Now
                        </Button>
                        <Image
                            className="home__sticker w-[40px] rotate-12 absolute bottom-8 right-4 opacity-50"
                            src={StickerPotatoes}
                            alt="Sticker potatoes"
                            width={100}
                            height={93}
                            priority
                        />
                    </div>

                    <div className="home__images relative grid justify-items-center justify-self-center">
                        <Image
                            className="home__burger w-[280px] z-[2] drop-shadow-[0_8px_24px_hsla(22,100%,8%,0.2)]"
                            src={HomeBurger}
                            alt="Burger"
                            width={1000}
                            height={881}
                            priority
                        />
                        <Image
                            className="home__dish max-w-[initial] w-[320px] absolute -bottom-10 drop-shadow-[0_8px_24px_hsla(22,100%,8%,0.2)]"
                            src={HomeDish}
                            alt="Dish"
                            width={1000}
                            height={222}
                            priority
                        />

                        <Image
                            className="home__ingredient home__potato-1 w-[60px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] -left-4 top-3"
                            src={HomePotato}
                            alt="Potato"
                            width={300}
                            height={401}
                            priority
                        />
                        <Image
                            className="home__ingredient home__potato-2 w-[60px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] -right-3 -bottom-8 rotate-90"
                            src={HomePotato}
                            alt="Potato"
                            width={300}
                            height={401}
                            priority
                        />
                        <Image
                            className="home__ingredient home__tomato-1 w-[40px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] -top-4 right-24"
                            src={HomeTomato}
                            alt="Tomato"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="home__ingredient home__tomato-2 w-[40px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] left-[5.5rem] -bottom-6"
                            src={HomeTomato}
                            alt="Tomato"
                            width={300}
                            height={300}
                            priority
                        />
                        <Image
                            className="home__ingredient home__lettuce-1 w-[60px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] top-10 -right-8 -scale-x-[1]"
                            src={HomeLettuce}
                            alt="Lettuce"
                            width={350}
                            height={366}
                            priority
                        />
                        <Image
                            className="home__ingredient home__lettuce-2 w-[60px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] absolute z-[2] -left-8 bottom-4"
                            src={HomeLettuce}
                            alt="Lettuce"
                            width={350}
                            height={366}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
