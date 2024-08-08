using my.company as my from '../db/data-model';

service CatalogService {
     entity Employees as projection on my.Employees;

    
    entity ReadEmployeeSrv                    as projection on my.Employees;
    entity InsertEmployeeSrv                  as projection on my.Employees;


}
