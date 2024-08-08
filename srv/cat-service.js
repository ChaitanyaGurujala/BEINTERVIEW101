
class CatalogService extends cds.ApplicationService {
    init() {

        const { Employees } = cds.entities("my.company");
        // const { v4: uuidv4 } = require('uuid');

        const { ReadEmployeeSrv } = this.entities;




        this.on("READ", ReadEmployeeSrv, async () => {

            var results = [];
            results.push({
                "ID": "1",
                "nameFirst": "Chaitanya",
                "nameLast": "Gurujala"
            });

            return results;

        });

        this.on("CREATE", "InsertEmployeeSrv", async (req, res) => {
            console.log(req.data);
            var dataSet = [];
            const element = req.data;
            // element.ID = uuidv4();;
            dataSet.push(element);
            console.log(dataSet);
            let returnData = await cds.transaction(req).run([
                INSERT.into(Employees).entries([req.data])
            ]).then((resolve, reject) => {
                console.log("inserted");
                if (typeof (resolve) !== undefined) {
                    return req.data;
                } else {
                    req.error(500, "There was an issue in insert");
                }
            }).catch(err => {
                req.error(500, "there was an error " + err.toString());
            });

            return returnData;

        });
        
        return super.init();
    }

}

    module.exports = CatalogService;