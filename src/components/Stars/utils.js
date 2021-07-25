//** A function for return  */

export const starCount = (stars) => {
  let rating = [];

  for (let i = 1; i <= 5; i++) {
    i <= stars ? rating.push("full") : rating.push("empty");
  }
  return rating;
};
