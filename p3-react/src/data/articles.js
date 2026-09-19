// Article data lives in an array of objects and is rendered with map()
// in <FeaturedArticles />. To add an article, just add another object.
const articles = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUaIwhWiBoDrokt9ll7xZQ-FEkSxFkdrYLNtD_wndlA&s=10',
    title: 'Getting Started with React',
    description: 'React OR Vue: which one should a beginner pick first?',
    rating: 5,
    author: 'Sujal Chaudhary',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCZOxgyNYeIZnL0j9QkdhIlsIk88i7SgYE92Gj0Izhw&s=10',
    title: 'Understanding Node.js',
    description: 'How NodeJS runs JavaScript outside the browser.',
    rating: 5,
    author: 'Sujal Chaudhary',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr84Dh0wspsCFYT5DdHt-L8GC9UnKuoe6_eciHQf-pw&s=10',
    title: 'A Practical Guide to React Hooks',
    description: 'useState and useEffect explained with small examples.',
    rating: 5,
    author: 'Sujal Chaudhary',
  },
]

export default articles
