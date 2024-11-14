export interface IReview {
  name: string;
  content: string;
}

export interface IRestaurant {
  id: number;
  created_at: string;
  name: string;
  location: string;
  menu_list: string[];
  tag_list: string[];
  image_list: string[];
  review_list?: IReview[];
}
