using {
  managed,
  sap,
  cuid
} from '@sap/cds/common';


namespace my.company;

// type PhoneNumber : String(30) @assert.format: '^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$';
// type Email       : String(255) @assert.format: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';


entity Employees : managed, cuid {
  nameFirst   : String(40);
  nameLast    : String(40);
  dateofBirth : Date;
  phoneNumber : String(20);
  email       : String(200);
}