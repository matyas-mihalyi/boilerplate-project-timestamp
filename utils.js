function formatResponse (inputDate = new Date(Date.now())) {
  const date = createDate(inputDate);

  if (isValidDate(inputDate)) {
    return {
      unix: date.getTime(),
      utc: date.toUTCString()
    };
  
  } else {
    return {
      error: 'Invalid Date'
    };
  };

};


function createDate(inputDate = "") {
  
  if (digitsOnly(inputDate)) {
    return new Date(Number(inputDate));
  } else {
    return new Date(inputDate);
  };

};

//https://stackoverflow.com/a/1353711
function isValidDate(dateInput) {
  const date = createDate(dateInput) 
  return date instanceof Date && !isNaN(date.valueOf());
};

const digitsOnly = (string) => {
  return /^\d+$/.test(string);
};

module.exports = { formatResponse };
