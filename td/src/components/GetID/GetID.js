export default url => {
  let result = "";
  for (let i = 0; i < url.length; i++) {
    while (url[i] !== "/" && i < url.length) {
      result = result + url[i];
      i++;
    }
    // chay duoc da tinh sau
    if (i !== url.length) result = "";
  }
  return result;
};
