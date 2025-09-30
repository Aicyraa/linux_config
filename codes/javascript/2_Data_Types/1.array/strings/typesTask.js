function ecFirst(str) {
  let uCase = str[0].toUpperCase();
  let restString = str.slice(1);

  return uCase + restString;
}

let new_str = ecFirst("niga");
console.log(new_str);

function checkSpam(str) {
  let lowCaseStr = str.toLowerCase();

  if (lowCaseStr.includes("viagra") || lowCaseStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1)
    return str + '...';
  }

  return str
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
