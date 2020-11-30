module.exports = [
  {
    title: "WHITE WINE LENTILS WITH MUSTARD & THYME",
    link:
      "https://thefirstmess.com/2020/11/04/white-wine-lentils-with-mustard-thyme/",
    author: "Laura",
    description:
      "I can’t quit it with the soft, cozy, and beige comfort food. And this week we’re adding wine for extra good measure. The simplicity of these white wine lentils and the fact that they stick to about 10 ingredients…",
    date: "2020-11-04",
    categories: ["White Wine", "Dry Taste"],
    image:
      "https://thefirstmess.com/wp-content/uploads/2020/11/White-wine-French-lentils-with-mustard-3.jpg",
  },
  {
    title: "White Wine Creamy Chicken Pasta",
    link: "https://foodgawker.com/post/2020/11/28/923861/",
    author: "theyummybowl",
    date: "2020-11-29",
    description:
      "It’s not only restaurant quality but also an easy one-pot pasta dish that everyone will love in your family. ",

    categories: ["White Wine", "Dry Taste"],
    image:
      "https://foodgawker.com//photo.foodgawker.com/wp-content/uploads/2020/11/3665950.jpg",
  },
  {
    title: "White Wine and Garlic Mushrooms",
    link: "https://foodgawker.com/post/2020/11/01/919895/",
    author: "Sixhungryfeet",
    date: "2020-11-01",
    description:
      "White Wine and Garlic Mushrooms is a flavourful side dish that can be served with a wide variety of meals.",
    categories: ["White Wine", "Dry Taste"],
    image:
      "https://foodgawker.com//photo.foodgawker.com/wp-content/uploads/2020/10/3657625.jpg",
  },
  {
    title: "White wine creamy mushroom sauce",
    link: "https://foodgawker.com/post/2020/11/14/921536/",
    author: "HereToCook",
    date: "2020-11-14",
    description:
      "It’s not only restaurant quality but also an easy one-pot pasta dish that everyone will love in your family. ",
    categories: ["White Wine", "Dry Taste"],
    image:
      "https://foodgawker.com//photo2.foodgawker.com/wp-content/uploads/2020/11/3661441.jpg",
  },
  {
    title: "Ginger Marinated Pork Tenderloin",
    link: "https://www.pinterest.com/pin/242842604896326558/",
    author: "Staff",
    date: "2020-11-22",
    categories: ["Dessert Wine", "Sweet Taste"],
    image:
      "https://www.plainchicken.com/wp-content/uploads/2020/09/ginger-marinated-pork-tenderloin-1-1-640x959.jpg",
  },
  {
    title: "Choosing The Best Oregon Pinot Noir",
    link:
      "https://www.forbes.com/sites/joemicallef/2020/11/25/choosing-the-best-of-oregons-pinot-noir-for-the-holidays/",
    author: "Joseph V Micallef",
    description:
      "With more than 900 wineries and almost 1,300 vineyards, there is no shortage of Oregon’s flagship Pinot Noir to choose from this holiday season.",
    date: "2020-11-25",
    categories: ["Sparkling Wine", "Citrus Taste"],
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fbc50e7929f7d7a8cfcf6e8%2F0x0.jpg",
  },
  {
    title: "Making Classic California Cabernet Sauvignon",
    description:
      "Some winemakers are always looking forward to push the envelope of what they can achieve in their vineyards and winery while others look back in nostalgia at the wines of the past.",
    link:
      "https://www.forbes.com/sites/cathrinetodd/2020/11/25/making-classic-california-cabernet-sauvignon-in-the-land-of-pinot-noir-and-chardonnay-sonoma-county/",
    author: "Cathrine Todd",
    date: "2020-11-26",
    categories: ["Sparkling Wine", "Citrus Taste"],
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fbee1ee43273ffd3705b294%2F0x0.jpg",
  },
  {
    title: "California Pinot Noir",
    description:
      "Producer Decides To Release Single Vineyard Wine After Almost A Decade Of Aging",
    link:
      "https://www.forbes.com/sites/cathrinetodd/2020/11/18/california-pinot-noir-producer-decides-to-release-single-vineyard-wine-after-almost-a-decade-of-aging/",
    author: "Cathrine Todd",
    date: "2020-11-19",
    categories: ["Sparkling Wine", "Citrus Taste"],
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fb59ec6286b0be29a79f852%2F0x0.jpg",
  },

  {
    title: "Westward Whiskey launches its Single Malt Pinot Noir Cask",
    link: "https://www.acquiremag.com/lifestyle/westward-pinot-noir-cask",
    author: "Staff",
    description:
      "Westward Whiskey launches its latest addition to its single malt collection, Pinot Noir Cask.",
    date: "2020-11-16",
    categories: ["Sparkling Wine", "Citrus Taste"],
    image:
      "https://www.acquiremag.com/.image/t_share/MTc2ODY2MjU2MTA2ODI1Mjk5/westward-oregon-pinot-noir-cask-finish-styled.jpg",
  },
].sort((a, b) => {
  return new Date(Date.parse(b.date)) - new Date(Date.parse(a.date));
});
