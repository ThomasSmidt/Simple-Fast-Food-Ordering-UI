class Food {
    constructor(type, name, description, price, imgPath) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgPath = imgPath;
    }
}

// Food
const BigMac = new Food('food', 'Big Mac', 'A classic burger with two beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun.', 7, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_big-mac:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');
const Cheeseburger = new Food('food', 'Cheeseburger', 'A mouthwatering burger topped with a slice of melted cheese, served with pickles, onions, mustard, and ketchup on a soft bun.', 1, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_cheeseburger:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');
const Hamburger = new Food('food', 'Hamburger', 'A simple yet satisfying burger featuring a juicy beef patty, topped with onions, pickles, mustard, and ketchup.', 1, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_hamburger:1-3-product-tile-desktop?wid=829&hei=515&dpr=off')
const BigTastyBacon = new Food('food', 'Big Tasty Bacon', 'Indulge in a flavorful burger made with a succulent beef patty, smoked bacon, Emmental cheese, lettuce, tomato, and special sauce, all on a sesame seed bun.', 10, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_big-tasty-bacon:1-3-product-tile-desktop?wid=829&hei=515&dpr=off')

// Drinks
const CocaCola = new Food('drink', 'Coca-Cola', 'Enjoy the crisp and refreshing taste of Coca-Cola, served ice-cold.', 2, "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-cocacolamellem:1-3-product-tile-desktop?wid=829&hei=515&dpr=off")
const Sprite = new Food('drink', 'Sprite', 'Quench your thirst with the lemon-lime flavored soda, Sprite.', 2, 'https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumSprite_Glass_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off')
const VanillaMilkshake = new Food('icecream', 'Vanilla Milkshake', 'Indulge in the creamy goodness of a vanilla milkshake, made with real dairy.', 3, 'https://mcdonalds.com.mt/wp-content/uploads/2021/06/Milkshakes-Vanilla.png')
const StrawberryMilkshake = new Food('icecream', 'Strawberry Milkshake', 'Delicious and creamy milkshake bursting with the flavor of ripe strawberries.', 3, 'https://mcdonalds.com.mt/wp-content/uploads/2021/06/Milkshakes-strawberry.jpg')
const ChocolateMilkshake = new Food('icecream', 'Chocolate Milkshake', 'Rich and indulgent milkshake made with velvety chocolate.', 3, 'https://mcdonalds.com.mt/wp-content/uploads/2021/06/Milkshakes-chocolate.png')

// Desserts
const McFlurryDaim = new Food('icecream', 'McFlurry Daim', 'Satisfy your sweet cravings with our creamy soft serve ice cream blended with crunchy Daim chocolate pieces.', 3, 'https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-mcflurry-daim:1-3-product-tile-desktop?wid=829&hei=515&dpr=off')
const McFlurryOreo = new Food('icecream', 'McFlurry Oreo', 'Delight in the rich and creamy soft serve ice cream swirled with Oreo cookie crumbles, creating the perfect blend of chocolatey goodness.', 3, 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off')

// Sides
const Fries = new Food('side', 'Fries', 'Golden and crispy fries, perfect for snacking.', 2, 'https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-sharingfries-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');
const ChickenNuggets = new Food('side', 'Chicken Nuggets', 'Juicy chicken pieces, breaded and fried to perfection.', 5, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-10-chicken-mcnuggets-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');
const Ketchup = new Food('side', 'Ketchup', 'Classic tomato ketchup, perfect for adding extra flavor to your meals.', 0.5, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_ketchup:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');
const Mayo = new Food('side', 'Mayo', 'Creamy and tangy mayonnaise.', 0.5, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_mayo:1-3-product-tile-desktop?wid=829&hei=515&dpr=off');

// Item Lists
const foodItems = [Hamburger, Cheeseburger, BigMac, BigTastyBacon];
const drinkItems = [CocaCola, Sprite, VanillaMilkshake, StrawberryMilkshake, ChocolateMilkshake];
const dessertItems = [McFlurryDaim, McFlurryOreo];
const sideItems = [Fries, ChickenNuggets, Ketchup, Mayo];

export { foodItems, drinkItems, dessertItems, sideItems };
