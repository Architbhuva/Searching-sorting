export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Comic" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "horror" }
];

export function getGenres() {
  return genres.filter(g => g);
}
