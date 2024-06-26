import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import PopularChickenBurger from "@/assets/images/popular-chicken-burger.png";
import PopularMeatBurger from "@/assets/images/popular-meat-burger.png";
import PopularGrillBurger from "@/assets/images/popular-grill-burger.png";
import PopularClassicBurger from "@/assets/images/popular-classic-burger.png";
import PopularBigBurger from "@/assets/images/popular-big-burger.png";
import { ShoppingBag } from "lucide-react";

function Popular() {
    return (
        <section
            className="popular section pt-20 pb-4 bg-background-alt"
            id="popular"
        >
            <h2 className="section__title font-aclonica text-2xl text-heading text-center mb-8">
                Most Devoured <br /> Burgers
            </h2>

            <div className="popular__container container py-8">
                <div className="grid grid-cols-2 gap-y-14 gap-x-6">
                    <Card className="popular__card group relative bg-primary border-4 border-card pt-24">
                        <Image
                            className="popular__img absolute -top-8 left-0 right-0 w-[120px] mx-auto drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] group-hover:translate-y-[-0.5rem] transition-transform"
                            src={PopularChickenBurger}
                            alt="Chicken burger"
                            width={500}
                            height={500}
                            priority
                        />
                        <CardHeader className="py-0">
                            <CardTitle className="text-[0.938rem]">
                                Chicken <br /> Burger
                            </CardTitle>
                            <CardDescription className="text-heading font-aclonica text-xl">
                                $6
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0 pb-4 justify-end">
                            <Button size="icon">
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="popular__card group relative bg-primary border-4 border-card pt-24">
                        <Image
                            className="popular__img absolute -top-8 left-0 right-0 w-[120px] mx-auto drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] group-hover:translate-y-[-0.5rem] transition-transform"
                            src={PopularMeatBurger}
                            alt="Meat burger"
                            width={500}
                            height={500}
                            priority
                        />
                        <CardHeader className="py-0">
                            <CardTitle className="text-[0.938rem]">
                                Meat <br /> Burger
                            </CardTitle>
                            <CardDescription className="text-heading font-aclonica text-xl">
                                $10
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0 pb-4 justify-end">
                            <Button size="icon">
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="popular__card group relative bg-primary border-4 border-card pt-24">
                        <Image
                            className="popular__img absolute -top-8 left-0 right-0 w-[120px] mx-auto drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] group-hover:translate-y-[-0.5rem] transition-transform"
                            src={PopularGrillBurger}
                            alt="Grill burger"
                            width={500}
                            height={500}
                            priority
                        />
                        <CardHeader className="py-0">
                            <CardTitle className="text-[0.938rem]">
                                Grill <br /> Burger
                            </CardTitle>
                            <CardDescription className="text-heading font-aclonica text-xl">
                                $12
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0 pb-4 justify-end">
                            <Button size="icon">
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="popular__card group relative bg-primary border-4 border-card pt-24">
                        <Image
                            className="popular__img absolute -top-8 left-0 right-0 w-[120px] mx-auto drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] group-hover:translate-y-[-0.5rem] transition-transform"
                            src={PopularClassicBurger}
                            alt="Classic burger"
                            width={500}
                            height={500}
                            priority
                        />
                        <CardHeader className="py-0">
                            <CardTitle className="text-[0.938rem]">
                                Classic <br /> Burger
                            </CardTitle>
                            <CardDescription className="text-heading font-aclonica text-xl">
                                $8
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0 pb-4 justify-end">
                            <Button size="icon">
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="popular__card group relative bg-primary border-4 border-card pt-24">
                        <Image
                            className="popular__img absolute -top-8 left-0 right-0 w-[120px] mx-auto drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)] group-hover:translate-y-[-0.5rem] transition-transform"
                            src={PopularBigBurger}
                            alt="Big burger"
                            width={500}
                            height={500}
                            priority
                        />
                        <CardHeader className="py-0">
                            <CardTitle className="text-[0.938rem]">
                                Big <br /> Burger
                            </CardTitle>
                            <CardDescription className="text-heading font-aclonica text-xl">
                                $15
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0 pb-4 justify-end">
                            <Button size="icon">
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Popular;
