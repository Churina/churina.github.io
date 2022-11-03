const customers = 
                    [
                    {
                        customer_id:001,
                        last_name:"Smith",
                        first_name:"Jacob",
                        last_purchase_quantity:5,
                        Last_purchase_amount_in_dollars:50,
                    },
                    {
                        customer_id:002,
                        last_name:"Johnson",
                        first_name:"Iris",
                        last_purchase_quantity:10,
                        Last_purchase_amount_in_dollars:100,
                    },
                    {
                        customer_id:003,
                        last_name:"Perez",
                        first_name:"Javier",
                        last_purchase_quantity:5,
                        Last_purchase_amount_in_dollars:50,
                    },
                    {
                        customer_id:004,
                        last_name:"Thomas",
                        first_name:"Henry",
                        last_purchase_quantity:20,
                        Last_purchase_amount_in_dollars:200,
                    },
                    {
                        customer_id:005,
                        last_name:"Smith",
                        first_name:"Janice",
                        last_purchase_quantity:10,
                        Last_purchase_amount_in_dollars:100,
                    },
                    ];
        
                    function getCustomerInformation()
                    {
                        const customerInput = document.getElementById("customer_id").value;
                        for (const thisCustomer of customers)
                        {
                            if (customerInput == thisCustomer.customer_id)  
                            {
                                document.getElementById("results").innerHTML  = " Customer ID: " + thisCustomer.customer_id + 
                                    ".<br>Name: " + thisCustomer.first_name + " " + thisCustomer.last_name +
                                    ".<br>Last purchase quantity: " + thisCustomer.last_purchase_quantity +
                                    ".<br>Last purchase amount: $" + thisCustomer.Last_purchase_amount_in_dollars + "." ;
                                return;
                            } else 
                            {
                                document.getElementById("results").innerHTML = `This customer id doesn't exist. Enter a valid customer ID.`
                            }
                        } 
                    }


                    /*
                    function getCustomerInformation()
                    {
                        const customerInput = document.getElementById("customer_id").value;
                        let foundCustomer = false;    
                        for (const thisCustomer of customers)
                        {
                            if (customerInput == thisCustomer.customer_id)  
                            {
                                document.getElementById("results").innerHTML  = " Customer ID: " + thisCustomer.customer_id + 
                                    ".<br>Name: " + thisCustomer.first_name + " " + thisCustomer.last_name +
                                    ".<br>Last purchase quantity: " + thisCustomer.last_purchase_quantity +
                                    ".<br>Last purchase amount: $" + thisCustomer.Last_purchase_amount_in_dollars + "." ;
                                foundCustomer = true;  
                            } 
                        } 
                        
                        if (!foundCustomer)
                        {
                            document.getElementById("results").innerHTML = `This customer id doesn't exist. Enter a valid customer ID.`
                        }
                    }
                    */