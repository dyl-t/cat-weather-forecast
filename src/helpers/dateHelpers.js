// take a js date object, and return a nice formatted readable date
export const getFormattedDate = date => date?.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });