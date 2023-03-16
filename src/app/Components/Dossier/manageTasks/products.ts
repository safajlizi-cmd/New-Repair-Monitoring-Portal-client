export interface Product {
    category: string;
    productID: number;
    productName: string;
    unitPrice: number;
    unitsInStock: number;
    discontinued: boolean;
  }
  
  export const products: any[] = [
    {
      productID: 1,
      productName: "Chai",
      unitPrice: 18,
      unitsInStock: 39,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 2,
      productName: "Chang",
      unitPrice: 19,
      unitsInStock: 17,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 3,
      productName: "Aniseed Syrup",
      unitPrice: 10,
      unitsInStock: 13,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 4,
      productName: "Chef Anton`s Cajun Seasoning",
      unitPrice: 22,
      unitsInStock: 53,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 5,
      productName: "Chef Anton`s Gumbo Mix",
      unitPrice: 21.35,
      unitsInStock: 0,
      discontinued: true,
      categoryName: "Spices",
    },
    {
      productID: 6,
      productName: "Grandma`s Boysenberry Spread",
      unitPrice: 25,
      unitsInStock: 120,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 7,
      productName: "Uncle Bob`s Organic Dried Pears",
      unitPrice: 30,
      unitsInStock: 15,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 8,
      productName: "Northwoods Cranberry Sauce",
      unitPrice: 40,
      unitsInStock: 6,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 9,
      productName: "Mishi Kobe Niku",
      unitPrice: 97,
      unitsInStock: 29,
      discontinued: true,
      categoryName: "Meat/Poultry",
    },
    {
      productID: 10,
      productName: "Ikura",
      unitPrice: 31,
      unitsInStock: 31,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 11,
      productName: "Queso Cabrales",
      unitPrice: 21,
      unitsInStock: 22,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 12,
      productName: "Queso Manchego La Pastora",
      unitPrice: 38,
      unitsInStock: 86,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 13,
      productName: "Konbu",
      unitPrice: 6,
      unitsInStock: 24,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 14,
      productName: "Tofu",
      unitPrice: 23.25,
      unitsInStock: 35,
      discontinued: false,
      categoryName: "Produce",
    },
    {
      productID: 15,
      productName: "Genen Shouyu",
      unitPrice: 15.5,
      unitsInStock: 39,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 16,
      productName: "Pavlova",
      unitPrice: 17.45,
      unitsInStock: 29,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 17,
      productName: "Alice Mutton",
      unitPrice: 39,
      unitsInStock: 0,
      discontinued: true,
      categoryName: "Meat/Poultry",
    },
    {
      productID: 18,
      productName: "Carnarvon Tigers",
      unitPrice: 62.5,
      unitsInStock: 42,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 19,
      productName: "Teatime Chocolate Biscuits",
      unitPrice: 9.2,
      unitsInStock: 25,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 20,
      productName: "Sir Rodney`s Marmalade",
      unitPrice: 81,
      unitsInStock: 40,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 21,
      productName: "Sir Rodney`s Scones",
      unitPrice: 10,
      unitsInStock: 3,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 44,
      productName: "Gula Malacca",
      unitPrice: 19.45,
      unitsInStock: 27,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 45,
      productName: "Rogede sild",
      unitPrice: 9.5,
      unitsInStock: 5,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 46,
      productName: "Spegesild",
      unitPrice: 12,
      unitsInStock: 95,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 47,
      productName: "Zaanse koeken",
      unitPrice: 9.5,
      unitsInStock: 36,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 48,
      productName: "Chocolade",
      unitPrice: 12.75,
      unitsInStock: 15,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 49,
      productName: "Maxilaku",
      unitPrice: 20,
      unitsInStock: 10,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 50,
      productName: "Valkoinen suklaa",
      unitPrice: 16.25,
      unitsInStock: 65,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 51,
      productName: "Manjimup Dried Apples",
      unitPrice: 53,
      unitsInStock: 20,
      discontinued: false,
      categoryName: "Produce",
    },
    {
      productID: 52,
      productName: "Filo Mix",
      unitPrice: 7,
      unitsInStock: 38,
      discontinued: false,
      categoryName: "Grains/Cereals",
    },
    {
      productID: 53,
      productName: "Perth Pasties",
      unitPrice: 32.8,
      unitsInStock: 0,
      discontinued: true,
      categoryName: "Meat/Poultry",
    },
    {
      productID: 54,
      productName: "Tourtière",
      unitPrice: 7.45,
      unitsInStock: 21,
      discontinued: false,
      categoryName: "Meat/Poultry",
    },
    {
      productID: 55,
      productName: "Pâté chinois",
      unitPrice: 24,
      unitsInStock: 115,
      discontinued: false,
      categoryName: "Meat/Poultry",
    },
    {
      productID: 56,
      productName: "Gnocchi di nonna Alice",
      unitPrice: 38,
      unitsInStock: 21,
      discontinued: false,
      categoryName: "Grains/Cereals",
    },
    {
      productID: 57,
      productName: "Ravioli Angelo",
      unitPrice: 19.5,
      unitsInStock: 36,
      discontinued: false,
      categoryName: "Grains/Cereals",
    },
    {
      productID: 58,
      productName: "Escargots de Bourgogne",
      unitPrice: 13.25,
      unitsInStock: 62,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 59,
      productName: "Raclette Courdavault",
      unitPrice: 55,
      unitsInStock: 79,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 60,
      productName: "Camembert Pierrot",
      unitPrice: 34,
      unitsInStock: 19,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 61,
      productName: "Sirop d`érable",
      unitPrice: 28.5,
      unitsInStock: 113,
      discontinued: false,
      categoryName: "Pastry",
    },
    {
      productID: 62,
      productName: "Tarte au sucre",
      unitPrice: 49.3,
      unitsInStock: 17,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 63,
      productName: "Vegie-spread",
      unitPrice: 43.9,
      unitsInStock: 24,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 64,
      productName: "Wimmers gute Semmelknödel",
      unitPrice: 33.25,
      unitsInStock: 22,
      discontinued: false,
      categoryName: "Grains/Cereals",
    },
    {
      productID: 65,
      productName: "Louisiana Fiery Hot Pepper Sauce",
      unitPrice: 21.05,
      unitsInStock: 76,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 66,
      productName: "Louisiana Hot Spiced Okra",
      unitPrice: 17,
      unitsInStock: 4,
      discontinued: false,
      categoryName: "Condiments",
    },
    {
      productID: 67,
      productName: "Laughing Lumberjack Lager",
      unitPrice: 14,
      unitsInStock: 52,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 68,
      productName: "Scottish Longbreads",
      unitPrice: 12.5,
      unitsInStock: 6,
      discontinued: false,
      categoryName: "Confections",
    },
    {
      productID: 69,
      productName: "Gudbrandsdalsost",
      unitPrice: 36,
      unitsInStock: 26,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 70,
      productName: "Outback Lager",
      unitPrice: 15,
      unitsInStock: 15,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 71,
      productName: "Flotemysost",
      unitPrice: 21.5,
      unitsInStock: 26,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 72,
      productName: "Mozzarella di Giovanni",
      unitPrice: 34.8,
      unitsInStock: 14,
      discontinued: false,
      categoryName: "Dairy Products",
    },
    {
      productID: 73,
      productName: "Röd Kaviar",
      unitPrice: 15,
      unitsInStock: 101,
      discontinued: false,
      categoryName: "Seafood",
    },
    {
      productID: 74,
      productName: "Longlife Tofu",
      unitPrice: 10,
      unitsInStock: 4,
      discontinued: false,
      categoryName: "Produce",
    },
    {
      productID: 75,
      productName: "Rhönbräu Klosterbier",
      unitPrice: 7.75,
      unitsInStock: 125,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 76,
      productName: "Lakkalikööri",
      unitPrice: 18,
      unitsInStock: 57,
      discontinued: false,
      categoryName: "Beverages",
    },
    {
      productID: 77,
      productName: "Original Frankfurter Grüne Soße",
      unitPrice: 13,
      unitsInStock: 32,
      discontinued: false,
      categoryName: "Condiments",
    },
  ];