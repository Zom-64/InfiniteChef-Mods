addIngredient("sea_urchin",{
color:"#000000",
type:"sea",
group:"sea"
shape:circle_thorny_ml
broken:"gonad"
});

addIngredient("gonad",{
color:"#FFA500",
type:"thick_liquid",

});

addIngredient("starfish",{
color:"#ffff00",
type:"sea",
shape:"star",
});

addIngredient("snapper",{
color:"#d38565",
type:"fish",
shape:fish
});

addRecipe("=shallot+ginger_root+garlic+chili_pepper+soy_sauce+vinegar+sesame+sugar+snapper", "steamed_snapper");
addRecipe("=vegetable_oil+salt+cayenne+starfish", "grilled_starfish");
addRecipe("=sea_urchin+water+salt+carrot+potato+msg", "sea_soup");
addRecipe("=egg+gonad+bread", "scrambled_egg_with_sea_urchin_toast");
