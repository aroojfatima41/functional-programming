function rot13(str) { // LBH QVQ VG!
   
   
   return str.split('').map(function(item)
   {
    var temp=item.charCodeAt();//?
    if(temp>=65 && temp<=90)
    {
      if(temp<78)
      {
        return String.fromCharCode(temp+13);//?
      }
      else
      {
        return String.fromCharCode(temp-13);
      }
    }
    else{
      return String.fromCharCode(temp);
   }
  }
   ).join('');//?

}
  rot13("SERR PBQR PNZC");