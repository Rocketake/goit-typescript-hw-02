export interface ImageData {
  urls: {
    small: string;
    regular: string;
};
	user: {
	  first_name: string;
	  last_name: string;
	};
	id: string;
  alt_description: string;
  likes: number;
}

export interface fetchImageData {
  results: ImageData[];
  total_pages: number;
}