function setCookie(key, value, expireDate) {
  if (!arguments.length) {
    throw new Error("No Parameters were entered");
  } else {
    if (key == undefined || value == undefined)
      throw new Error("Enter both key and value parameters");
    else
      document.cookie = `${key}=${value};expires=${
        expireDate ? expireDate.toUTCString() : ""
      }`;
    return `cookie has been successfully set`;
  }
}
function getAllcookies() {
  if (document.cookie.length) {
    var arr = document.cookie.split("; ");
    var data = [];
    for (var i = 0; i < arr.length; i++) {
      data[arr[i].split("=")[0]] = arr[i].split("=")[1];
    }
    return data;
  } else {
    throw new Error("There is no cookies");
  }
}
function hasCookie(key) {
  if (!arguments.length) throw new Error("No Parameters were entered");
  else return getAllcookies()[key] ? true : false;
}
function getCookie(key) {
  if (!arguments.length) throw new Error("No Parameters were entered");
  else {
    if (hasCookie(key)) return getAllcookies()[key];
    else throw new Error(`There is no cookie called ${key}`);
  }
}
function deleteCookie(key) {
  if (!arguments.length) throw new Error("No Parameters were entered");
  else {
    if (hasCookie(key)) {
      setCookie(key, "", new Date(0));
      return `cookie has been successfully deleted`;
    } else throw new Error(`There is no cookie called ${key}`);
  }
}
function deleteAllCookies() {
  for (const key in getAllcookies()) deleteCookie(key);
  return `ALL cookies has been successfully deleted`;
}
