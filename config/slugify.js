module.exports = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')         
      .replace(/[^\w\-]+/g, '')   
      .replace(/\-\-+/g, '-');      
  