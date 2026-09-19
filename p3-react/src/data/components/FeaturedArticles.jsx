import articles from '../data/articles'
import Section from './Section'
import ArticleCard from './ArticleCard'
import SeeAllButton from './SeeAllButton'

export default function FeaturedArticles() {
  return (
    <Section id="articles" title="Featured Articles">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Requirement: articles stored in an array and rendered with map() */}
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <SeeAllButton>See all articles</SeeAllButton>
    </Section>
  )
}
