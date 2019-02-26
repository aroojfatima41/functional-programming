function telephoneCheck(str) {

var regularExpression=/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
regularExpression.test(str);//?

  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("(555)555-5555");
  telephoneCheck("1(555)555-5555");
  telephoneCheck("1 555 555 5555");
  telephoneCheck("(555) 555-5555");
  telephoneCheck("555 555 5555"); 
  telephoneCheck("5555555555");
  telephoneCheck("10 (757) 622-7382");
  telephoneCheck("27576227382");
  telephoneCheck("555)-555-5555");