const inter = [
  {
    "id": 1,
    "name": "Spaghetti Carbonara",
    "imageUrl": "https://example.com/carbonara.jpg",
    "ingredients": [
      "200g spaghetti",
      "100g pancetta or bacon",
      "2 large eggs",
      "1/2 cup grated Parmesan cheese",
      "1 clove garlic, minced",
      "Salt and black pepper",
      "1 tbsp olive oil"
    ],
    "steps": [
      "Boil spaghetti in salted water until al dente.",
      "Fry pancetta in olive oil until crispy, then add garlic.",
      "Whisk eggs and Parmesan together in a bowl.",
      "Drain pasta and immediately mix with pancetta.",
      "Add egg-cheese mixture and stir quickly to coat without scrambling.",
      "Season with pepper and serve warm."
    ]
  },
  {
    "id": 2,
    "name": "Chicken Tikka Masala",
    "imageUrl": "https://example.com/tikka-masala.jpg",
    "ingredients": [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tbsp garam masala",
      "1 tbsp paprika",
      "1 onion, chopped",
      "1 cup tomato puree",
      "1 cup cream",
      "Salt and pepper",
      "2 tbsp butter"
    ],
    "steps": [
      "Marinate chicken in yogurt, spices, salt and pepper for 2 hours.",
      "Grill or pan-fry chicken until browned.",
      "In a pan, sauté onions in butter until soft.",
      "Add tomato puree and simmer for 5 minutes.",
      "Add cream and stir until sauce thickens.",
      "Mix in cooked chicken and simmer for another 10 minutes.",
      "Serve with rice or naan."
    ]
  },
  {
    "id": 3,
    "name": "Sushi Rolls",
    "imageUrl": "https://example.com/sushi.jpg",
    "ingredients": [
      "2 cups sushi rice",
      "3 tbsp rice vinegar",
      "4 nori sheets",
      "Cucumber slices",
      "Avocado slices",
      "Fresh salmon or crab sticks",
      "Soy sauce",
      "Wasabi"
    ],
    "steps": [
      "Cook sushi rice and mix with vinegar.",
      "Place nori on a bamboo mat and spread rice thinly.",
      "Arrange cucumber, avocado, and salmon on one side.",
      "Roll tightly using the bamboo mat.",
      "Cut into 6–8 pieces with a sharp wet knife.",
      "Serve with soy sauce and wasabi."
    ]
  },
  {
    "id": 4,
    "name": "Chicken Shawarma",
    "imageUrl": "https://example.com/shawarma.jpg",
    "ingredients": [
      "400g chicken thighs",
      "1 tbsp shawarma spice mix",
      "1/4 cup yogurt",
      "1 tbsp lemon juice",
      "Pita bread",
      "Garlic sauce",
      "Sliced tomatoes and cucumbers"
    ],
    "steps": [
      "Marinate chicken in spices, yogurt, and lemon for 1 hour.",
      "Pan-sear or grill until fully cooked.",
      "Slice chicken thinly.",
      "Stuff pita with chicken, veggies, and garlic sauce."
    ]
  },
  {
    "id": 5,
    "name": "Beef Tacos",
    "imageUrl": "https://example.com/tacos.jpg",
    "ingredients": [
      "300g ground beef",
      "1 tbsp taco seasoning",
      "Taco shells",
      "Diced tomatoes",
      "Lettuce shreds",
      "Cheddar cheese",
      "Sour cream"
    ],
    "steps": [
      "Cook ground beef in a skillet.",
      "Add taco seasoning and simmer for 5 minutes.",
      "Fill taco shells with beef.",
      "Add toppings: tomatoes, lettuce, cheese, and sour cream."
    ]
  },

  {
    "id": 6,
    "name": "Pad Thai",
    "imageUrl": "https://example.com/padthai.jpg",
    "ingredients": [
      "200g rice noodles",
      "2 eggs",
      "1 cup bean sprouts",
      "100g shrimp or chicken",
      "Pad Thai sauce",
      "Chopped peanuts",
      "Lime wedges"
    ],
    "steps": [
      "Soak rice noodles until soft.",
      "Stir-fry chicken or shrimp until cooked.",
      "Add noodles and Pad Thai sauce.",
      "Push aside, scramble eggs, and mix together.",
      "Add bean sprouts and peanuts.",
      "Serve with lime."
    ]
  },

  {
    "id": 7,
    "name": "Croque Monsieur",
    "imageUrl": "https://example.com/croque.jpg",
    "ingredients": [
      "2 slices bread",
      "Ham slices",
      "Gruyère cheese",
      "Butter",
      "Béchamel sauce"
    ],
    "steps": [
      "Spread béchamel on bread.",
      "Layer ham and cheese.",
      "Top with more cheese.",
      "Bake until golden and bubbly."
    ]
  },

  {
    "id": 8,
    "name": "Falafel",
    "imageUrl": "https://example.com/falafel.jpg",
    "ingredients": [
      "1 cup chickpeas",
      "Garlic cloves",
      "Onion",
      "Parsley",
      "Cumin",
      "Salt",
      "Flour"
    ],
    "steps": [
      "Blend chickpeas with spices and herbs.",
      "Form into balls.",
      "Deep fry until crispy.",
      "Serve with tahini dip."
    ]
  },

  {
    "id": 9,
    "name": "Pancakes",
    "imageUrl": "https://example.com/pancakes.jpg",
    "ingredients": [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "Butter"
    ],
    "steps": [
      "Mix flour, sugar, egg, and milk.",
      "Heat butter on pan.",
      "Pour batter and cook until bubbles form.",
      "Flip and cook until golden."
    ]
  },

  {
    "id": 10,
    "name": "Jollof Rice",
    "imageUrl": "https://example.com/jollof.jpg",
    "ingredients": [
      "2 cups rice",
      "Tomato puree",
      "Onion",
      "Bell peppers",
      "Chicken stock",
      "Seasoning cubes",
      "Vegetable oil"
    ],
    "steps": [
      "Blend tomatoes, peppers, and onions.",
      "Fry mixture in oil until reduced.",
      "Add stock, spices, and rice.",
      "Cover and cook until soft."
    ]
  },

  {
    "id": 11,
    "name": "French Onion Soup",
    "imageUrl": "https://example.com/onion_soup.jpg",
    "ingredients": [
      "4 onions sliced",
      "Beef stock",
      "Butter",
      "French bread",
      "Gruyère cheese"
    ],
    "steps": [
      "Caramelize onions in butter.",
      "Add beef stock and simmer.",
      "Top with toasted bread and cheese.",
      "Broil until cheese melts."
    ]
  },

  {
    "id": 12,
    "name": "Fried Rice",
    "imageUrl": "https://example.com/fried_rice.jpg",
    "ingredients": [
      "2 cups cooked rice",
      "Mixed vegetables",
      "2 eggs",
      "Soy sauce",
      "Chicken cubes"
    ],
    "steps": [
      "Stir-fry chicken.",
      "Add vegetables and rice.",
      "Push aside and scramble eggs.",
      "Mix and add soy sauce."
    ]
  },

  {
    "id": 13,
    "name": "Butter Chicken",
    "imageUrl": "https://example.com/butter_chicken.jpg",
    "ingredients": [
      "Chicken",
      "Tomato puree",
      "Butter",
      "Cream",
      "Spices"
    ],
    "steps": [
      "Marinate chicken and cook.",
      "Prepare creamy tomato sauce.",
      "Add chicken and simmer."
    ]
  },

  {
    "id": 14,
    "name": "Pizza Margherita",
    "imageUrl": "https://example.com/pizza.jpg",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil"
    ],
    "steps": [
      "Spread sauce on dough.",
      "Add cheese.",
      "Bake and top with basil."
    ]
  },

  {
    "id": 15,
    "name": "Biryani",
    "imageUrl": "https://example.com/biryani.jpg",
    "ingredients": [
      "Basmati rice",
      "Chicken",
      "Spices",
      "Onions",
      "Yogurt"
    ],
    "steps": [
      "Cook rice halfway.",
      "Layer with chicken and spices.",
      "Steam cook until tender."
    ]
  },

  {
    "id": 16,
    "name": "Pita and Hummus",
    "imageUrl": "https://example.com/hummus.jpg",
    "ingredients": [
      "Chickpeas",
      "Tahini",
      "Garlic",
      "Olive oil",
      "Lemon juice"
    ],
    "steps": [
      "Blend chickpeas and ingredients.",
      "Serve with warm pita."
    ]
  },

  {
    "id": 17,
    "name": "Fish and Chips",
    "imageUrl": "https://example.com/fish_chips.jpg",
    "ingredients": [
      "White fish",
      "Flour",
      "Potatoes",
      "Oil",
      "Salt"
    ],
    "steps": [
      "Batter fish and deep fry.",
      "Fry potatoes until crisp."
    ]
  },

  {
    "id": 18,
    "name": "Lasagna",
    "imageUrl": "https://example.com/lasagna.jpg",
    "ingredients": [
      "Lasagna sheets",
      "Tomato sauce",
      "Ground beef",
      "Cheese",
      "Béchamel sauce"
    ],
    "steps": [
      "Layer pasta, meat sauce, and cheese.",
      "Bake until golden."
    ]
  },

  {
    "id": 19,
    "name": "Tteokbokki",
    "imageUrl": "https://example.com/tteokbokki.jpg",
    "ingredients": [
      "Rice cakes",
      "Gochujang",
      "Fish cakes",
      "Sugar",
      "Garlic"
    ],
    "steps": [
      "Simmer rice cakes in spicy sauce.",
      "Add fish cakes and stir."
    ]
  },

  {
    "id": 20,
    "name": "Pho",
    "imageUrl": "https://example.com/pho.jpg",
    "ingredients": [
      "Rice noodles",
      "Beef broth",
      "Beef slices",
      "Spices",
      "Herbs"
    ],
    "steps": [
      "Prepare broth with spices.",
      "Assemble noodles and beef.",
      "Pour hot broth to cook beef."
    ]
  },

  {
    "id": 21,
    "name": "Ramen",
    "imageUrl": "https://example.com/ramen.jpg",
    "ingredients": [
      "Ramen noodles",
      "Broth",
      "Egg",
      "Chicken",
      "Scallions"
    ],
    "steps": [
      "Cook noodles.",
      "Prepare broth.",
      "Assemble toppings."
    ]
  },

  {
    "id": 22,
    "name": "Bulgogi",
    "imageUrl": "https://example.com/bulgogi.jpg",
    "ingredients": [
      "Beef slices",
      "Soy sauce",
      "Garlic",
      "Sugar",
      "Sesame oil"
    ],
    "steps": [
      "Marinate beef.",
      "Stir-fry until caramelized."
    ]
  },

  {
    "id": 23,
    "name": "Paella",
    "imageUrl": "https://example.com/paella.jpg",
    "ingredients": [
      "Rice",
      "Seafood",
      "Chicken",
      "Tomato",
      "Saffron"
    ],
    "steps": [
      "Sear meats.",
      "Add rice and broth.",
      "Cook until absorbed."
    ]
  },

  {
    "id": 24,
    "name": "Empanadas",
    "imageUrl": "https://example.com/empanadas.jpg",
    "ingredients": [
      "Dough",
      "Ground beef",
      "Onions",
      "Olives",
      "Egg"
    ],
    "steps": [
      "Fill dough with meat mixture.",
      "Fold and seal.",
      "Bake or fry."
    ]
  },

  {
    "id": 25,
    "name": "Borscht",
    "imageUrl": "https://example.com/borscht.jpg",
    "ingredients": [
      "Beets",
      "Cabbage",
      "Beef",
      "Carrots",
      "Sour cream"
    ],
    "steps": [
      "Boil beef.",
      "Add vegetables.",
      "Simmer and serve with sour cream."
    ]
  },

  {
    "id": 26,
    "name": "Churros",
    "imageUrl": "https://example.com/churros.jpg",
    "ingredients": [
      "Flour",
      "Butter",
      "Sugar",
      "Cinnamon"
    ],
    "steps": [
      "Make dough.",
      "Pipe and fry.",
      "Coat with cinnamon sugar."
    ]
  },

  {
    "id": 27,
    "name": "Greek Salad",
    "imageUrl": "https://example.com/greek_salad.jpg",
    "ingredients": [
      "Cucumber",
      "Tomatoes",
      "Olives",
      "Feta cheese",
      "Olive oil"
    ],
    "steps": [
      "Chop vegetables.",
      "Toss with olive oil and feta."
    ]
  },

  {
    "id": 28,
    "name": "Shakshuka",
    "imageUrl": "https://example.com/shakshuka.jpg",
    "ingredients": [
      "Eggs",
      "Tomatoes",
      "Onions",
      "Bell peppers",
      "Spices"
    ],
    "steps": [
      "Make tomato-pepper sauce.",
      "Crack eggs into sauce.",
      "Simmer until eggs set."
    ]
  },

  {
    "id": 29,
    "name": "Chicken Alfredo",
    "imageUrl": "https://example.com/alfredo.jpg",
    "ingredients": [
      "Pasta",
      "Chicken breast",
      "Cream",
      "Parmesan",
      "Garlic"
    ],
    "steps": [
      "Cook pasta.",
      "Cook chicken.",
      "Make creamy sauce and mix."
    ]
  },

  {
    "id": 30,
    "name": "Tiramisu",
    "imageUrl": "https://example.com/tiramisu.jpg",
    "ingredients": [
      "Ladyfingers",
      "Coffee",
      "Mascarpone",
      "Cocoa powder",
      "Sugar"
    ],
    "steps": [
      "Dip ladyfingers in coffee.",
      "Layer with mascarpone mixture.",
      "Chill and dust with cocoa."
    ]
  }
]

let recipeDisplay = document.querySelector('.recipe-display');
inter.forEach((recipe) => {
    recipeDisplay.innerHTML += `
    <div>   
        <a href="../pages/inter-single.html?id=${recipe.id}">
        <img src="${recipe.imageUrl}" alt="${recipe.name}" />
        </a>
        <h2>${recipe.name}</h2>
    </div>
    `
});