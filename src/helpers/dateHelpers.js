// take a js date object, and return a nice formatted readable date
export const getFormattedDate = date => date?.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

// parse the ISO date into a js date object
export const parseISOString = isoString => {
  let tokens = isoString.split(/\D+/);
  return new Date(Date.UTC(tokens[0], --tokens[1], tokens[2], tokens[3], tokens[4], tokens[5], tokens[6]));
}
