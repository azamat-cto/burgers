import Image from "next/image";
import RecipeBurger from "@/assets/images/recipe-burger.png";
import RecipeBread from "@/assets/images/recipe-bread.png";
import RecipeCheese from "@/assets/images/recipe-cheese.png";
import RecipeMeat from "@/assets/images/recipe-meat.png";
import RecipeVegetables from "@/assets/images/recipe-vegetable.png";
import RecipeSauces from "@/assets/images/recipe-sauces.png";

function Recipe() {
    return (
        <section
            className="recipe section pt-20 pb-4 overflow-hidden"
            id="recipe"
        >
            <h2 className="section__title font-aclonica font-normal text-2xl text-heading text-center mb-8">
                Our Secret Recipe
            </h2>
            <div className="recipe__container container">
                <div className="grid grid-cols-[0.5fr_1fr] gap-x-4 pb-8">
                    <div className="recipe__image relative grid place-items-center">
                        <Image
                            className="recipe__img absolute -left-24 max-w-[initial] w-[200px] drop-shadow-[0_8px_24px_hsla(22,100%,8%,0.2)]"
                            src={RecipeBurger}
                            alt="Burger"
                            width={454}
                            height={944}
                            priority
                        />
                    </div>

                    <div className="recipe__data grid gap-y-8">
                        <div className="recipe__card flex items-center gap-x-2">
                            <div className="recipe__box w-[60px] h-[60px] flex-shrink-0 bg-primary border-[3px] border-solid border-card rounded-xl grid place-items-center">
                                <Image
                                    className="w-[50px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)]"
                                    src={RecipeBread}
                                    alt="Bread"
                                    width={330}
                                    height={212}
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="recipe__title text-[0.938rem] mb-2">
                                    Bread
                                </h3>
                                <p className="recipe__description text-[0.813rem]">
                                    Fresh bread, baked to perfection.
                                </p>
                            </div>
                        </div>

                        <div className="recipe__card flex items-center gap-x-2">
                            <div className="recipe__box order-1 w-[60px] h-[60px] flex-shrink-0 bg-primary border-[3px] border-solid border-card rounded-xl grid place-items-center">
                                <Image
                                    className="w-[50px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)]"
                                    src={RecipeCheese}
                                    alt="Cheese"
                                    width={320}
                                    height={190}
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="recipe__title text-[0.938rem] mb-2">
                                    Cheese
                                </h3>
                                <p className="recipe__description text-[0.813rem]">
                                    Cheese for a fantastic and healthy future.
                                </p>
                            </div>
                        </div>

                        <div className="recipe__card flex items-center gap-x-2">
                            <div className="recipe__box w-[60px] h-[60px] flex-shrink-0 bg-primary border-[3px] border-solid border-card rounded-xl grid place-items-center">
                                <Image
                                    className="w-[50px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)]"
                                    src={RecipeMeat}
                                    alt="Meat"
                                    width={320}
                                    height={244}
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="recipe__title text-[0.938rem] mb-2">
                                    Meat
                                </h3>
                                <p className="recipe__description text-[0.813rem]">
                                    100% pure beef, big and meaty.
                                </p>
                            </div>
                        </div>

                        <div className="recipe__card flex items-center gap-x-2">
                            <div className="recipe__box order-1 w-[60px] h-[60px] flex-shrink-0 bg-primary border-[3px] border-solid border-card rounded-xl grid place-items-center">
                                <Image
                                    className="w-[50px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)]"
                                    src={RecipeVegetables}
                                    alt="Vegetables"
                                    width={260}
                                    height={250}
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="recipe__title text-[0.938rem] mb-2">
                                    Vegetables
                                </h3>
                                <p className="recipe__description text-[0.813rem]">
                                    Vegetables full of the essence of nature and
                                    organic.
                                </p>
                            </div>
                        </div>

                        <div className="recipe__card flex items-center gap-x-2">
                            <div className="recipe__box w-[60px] h-[60px] flex-shrink-0 bg-primary border-[3px] border-solid border-card rounded-xl grid place-items-center">
                                <Image
                                    className="w-[50px] drop-shadow-[0_4px_16px_hsla(22,100%,8%,0.2)]"
                                    src={RecipeSauces}
                                    alt="Sauces"
                                    width={280}
                                    height={214}
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="recipe__title text-[0.938rem] mb-2">
                                    Sauces
                                </h3>
                                <p className="recipe__description text-[0.813rem]">
                                    Fresh sauces, delicious for the palate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recipe;
