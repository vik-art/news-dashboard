export interface HttpArticlesResponse {
    count: number,
    next: string,
    previous: string | null,
    results: Article[];
}

export interface Article {
    featured: boolean,
    id: number,
    image_url: string,
    news_site: string,
    published_at: string,
    summary: string,
    title: string,
    updated_at: string,
    url: string,
}