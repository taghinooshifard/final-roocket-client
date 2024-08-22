export default interface PostModel {
  id?: number;
  title: string;
  image_url: string;
  slug: string;
  category_id: number;
  category_label?: string;
  published_at?: number;
  keywords?: string;
  description?: string;
  summary?: string;
  content?: string;
}
