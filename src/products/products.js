const products = [

  {
    id: 1,
    name: 'Margherita',
    price: 2700,
    img: 'https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg?w=1024',
    quantity: 1,
    mostPurchased: true,
    description: 'Classic Neapolitan pizza topped with tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil.'
  },

  {
    id: 2,
    name: 'Pepperoni',
    price: 2700,
    img: 'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg',
    quantity: 1,
    mostPurchased: true,
    description: 'America` s favorite pizza with tomato sauce, generous slices of spicy pepperoni, and melted mozzarella cheese.'
  },

  {
    id: 3,
    name: 'Hawaiian',
    price: 2700,
    img: 'https://www.allrecipes.com/thmb/xYu9Ii8paEyMcJy7sv2mYxwfd7Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg',
    quantity: 1,
    mostPurchased: true,
    description: 'A tropical delight featuring tomato sauce, ham, juicy pineapple chunks, and mozzarella cheese for a perfect sweet and savory balance.'
  },

  {
    id: 4,
    name: 'BBQ Chicken',
    price: 2700,
    img: 'https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-V2-768x1024.jpg',
    quantity: 1,
    mostPurchased: true,
    description: 'Tangy barbecue sauce replaces traditional tomato sauce, topped with grilled chicken, red onions, and melted cheddar cheese.'
  },

  {
    id: 5,
    name: 'Meat Lovers',
    price: 2700,
    img: 'https://www.vincenzosplate.com/wp-content/uploads/2021/08/610x350-Photo-5_863-How-to-Make-MEATLOVERS-PIZZA-Like-an-Italian-V1.jpg',
    quantity: 1,
    mostPurchased: true,
    description: 'A carnivore` s dream with tomato sauce, pepperoni, Italian sausage, bacon, ground beef, and mozzarella cheese.'
  },

  {
    id: 6,
    name: 'Vegetarian',
    price: 2700,
    img: 'https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1',
    quantity: 1,
    mostPurchased: true,
    description: 'A colorful medley of veggies like bell peppers, mushrooms, onions, olives, tomatoes, and spinach, all atop tomato sauce and mozzarella cheese.'
},

  {
    id: 7,
    name: 'Buffalo Chicken',
    price: 2700,
    img: 'https://hips.hearstapps.com/hmg-prod/images/190226-buffalo-chicken-pizza-370-1552084943.jpg?crop=0.668xw:1.00xh;0.209xw,0.00255xh&resize=1200:*',
    quantity: 1,
    mostPurchased: false,
    description: 'Spicy buffalo sauce base topped with chunks of buffalo chicken, red onions, and melted blue cheese or ranch dressing.'
  },

  {
    id: 8,
    name: 'Four Cheese',
    price: 2700,
    img: 'https://www.homemadepizzaclub.co.uk/cdn/shop/articles/four-cheese-pizza_1000x.jpg?v=1618847165',
    quantity: 1,
    mostPurchased: false,
    description: 'A cheese lover`s delight with tomato sauce, mozzarella, cheddar, provolone, and parmesan cheeses baked to perfection.'
  },
  {
    id: 9,
    name: 'Pesto Chicken',
    price: 2700,
    img: 'https://www.theovenlight.net/wp-content/uploads/2022/01/Pesto-Chicken-Pizza-17-683x1024.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'Creamy pesto sauce topped with grilled chicken, sun-dried tomatoes, and a blend of mozzarella and feta cheeses.'
  },
  {
    id: 10,
    name: 'Supreme',
    price: 2700,
    img: 'https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/znqbmtvx/f48d63bd-683e-423e-a2ca-e015dc80824f.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'The ultimate combination of flavors with tomato sauce, pepperoni, Italian sausage, bell peppers, onions, olives, and mushrooms.'
  },
  {
    id: 11,
    name: 'White Pizza',
    price: 2700,
    img: 'https://veenaazmanov.com/wp-content/uploads/2020/05/White-Pizza-Recipe-Cheese-Pizza-with-White-Sauce4.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'A sauceless pizza with a base of olive oil and garlic, topped with ricotta, mozzarella, and parmesan cheeses, and sprinkled with fresh herbs.'
  },
  {
    id: 12,
    name: 'Mediterranean',
    price: 2700,
    img: 'https://www.bacinos.com/wp-content/uploads/2021/05/A-Couple-Cooks-Mediterranean-Pizza-2.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'Inspired by Mediterranean flavors with tomato sauce, grilled chicken or lamb, feta cheese, black olives, artichoke hearts, and red onions.'
  },
  {
    id: 13,
    name: 'Spinach and Ricotta',
    price: 2700,
    img: 'https://www.budgetbytes.com/wp-content/uploads/2018/05/Garlicky-Kale-and-Ricotta-Pizza-768x1024.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'A delightful combination of tomato sauce, sautéed spinach, dollops of creamy ricotta cheese, and a sprinkle of mozzarella.'
  },
  {
    id: 14,
    name: 'Barbecue Bacon Cheeseburger',
    price: 2700,
    img: 'https://lapizzaweek.com/storage/2810/conversions/BBQ_Mirabel_PIZZA_PROMO_WEB_APR_2023_v01-large.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'A twist on a classic burger with barbecue sauce, ground beef, bacon, red onions, pickles, and a blend of cheddar and mozzarella cheeses.'
  },
  {
    id: 15,
    name: 'Philly Cheesesteak',
    price: 2700,
    img: 'https://i0.wp.com/www.theimpulsivebuy.com/wordpress/wp-content/uploads/2023/05/phcheessteakpiz1.jpeg?resize=600%2C450&ssl=1',
    quantity: 1,
    mostPurchased: false,
    description: 'Paying homage to the famous sandwich, this pizza features cheese sauce, thinly sliced steak, sautéed bell peppers, onions, and melted provolone cheese.'
  },
  {
    id: 16,
    name: 'Seafood Delight',
    price: 2700,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/f6/84/ef/mystic-pizza.jpg',
    quantity: 1,
    mostPurchased: false,
    description: 'For seafood enthusiasts, this pizza boasts tomato sauce, shrimp, squid rings, mussels, clams, and a hint of garlic and parsley.'
  },
  {
    id: 17,
    name: 'coke 1',
    price: 500,
    img: 'https://www.supermercadodiez.cl/image/cache/catalog/2023/ABRIL/normal%20coca-500x500.png',
    quantity: 1,
    drink: true,
    description: 'Quench your thirst with a delightful soda fizz with a refreshing citrus twist. A sip of pure bliss in every pop!'
  },
  {
    id: 18,
    name: 'coke 2',
    price: 500,
    img: 'https://www.supermercadodiez.cl/image/cache/catalog/2023/ABRIL/normal%20coca-500x500.png',
    quantity: 1,
    drink: true,
    description: 'Quench your thirst with a delightful soda fizz with a refreshing citrus twist. A sip of pure bliss in every pop!'
  },
  {
    id: 19,
    name: 'coke 3',
    price: 500,
    img: 'https://www.supermercadodiez.cl/image/cache/catalog/2023/ABRIL/normal%20coca-500x500.png',
    quantity: 1,
    drink: true,
    description: 'Quench your thirst with a delightful soda fizz with a refreshing citrus twist. A sip of pure bliss in every pop!'
  }
];

export default products;