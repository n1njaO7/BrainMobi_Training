
function getPage(products, page, perPage, searchTerm = "") {
    // Validate pagination inputs.
    if (!Number.isInteger(perPage) || perPage <= 0) {
        throw new RangeError("perPage must be a positive integer");
    }

    if (!Array.isArray(products)) {
        throw new TypeError("products must be an array");
    }

    // 1. Search products by name, ignoring case.
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. Calculate total pages.
    const totalPages = Math.ceil(filteredProducts.length / perPage);

    // 3. Handle invalid page numbers.
    const currentPage = totalPages === 0
        ? 1
        : Number.isFinite(page)
            ? Math.min(totalPages, Math.max(1, Math.trunc(page)))
            : 1;

    // 4. Calculate the slice boundaries.
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    // 5. Extract products for this page.
    const data = filteredProducts.slice(startIndex, endIndex);

    // 6. Return pagination information.
    return {
        data,
        currentPage,
        totalPages,
        totalItems: filteredProducts.length,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1
    };
}


// Example product data
const products = [
    { id: 1, name: "iPhone 16", price: 70000 },
    { id: 2, name: "Samsung Phone", price: 45000 },
    { id: 3, name: "Laptop", price: 60000 },
    { id: 4, name: "Phone Case", price: 500 },
    { id: 5, name: "Wireless Headphones", price: 2500 },
    { id: 6, name: "Gaming Phone", price: 35000 }
];

// Search for "phone", show 2 products per page.
console.log(getPage(products, 5, 2, "phone"));

// console.log(getPage(products, 1, 2, "phone"));
// console.log(getPage(products, 1, 5, "phone"));

