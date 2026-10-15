function render(template,data){
    //using regex to replace keys with data 
    //w is used to find character
    //s to eliminate space
    //+ is used for more than one occourence 
    //[\w.] is used to include (.)
    //split is used to access the inner obj
    return template.replace(/{{\s*([\w.]+)\s*}}/g,(match,key)=>{
        const value =key.split(".").reduce((obj,part)=>{
            return obj?.[part];
        },data)
    return value !== undefined ? value : match;
    })
}

// Template
const template = `
Invoice: {{invoice.id}}
Customer: {{user.name}}
Email: {{user.email}}
Product: {{product.name}}
Price: Rs. {{product.price}}
Quantity: {{quantity}}
Total: Rs. {{total}}
`;


// Data
const data = {
    invoice: {
        id: "INV-101"
    },
    user: {
        name: "Ashmit Srivastava",
        email: "ashmit@example.com"
    },
    product: {
        name: "Mechanical Keyboard",
        price: 2500
    },
    quantity: 2,
    total: 5000
};

console.log(render(template, data));
