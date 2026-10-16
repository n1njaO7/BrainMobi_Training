
function createInventory() {
    // Private array: outside code cannot directly access it.
    const items = [];

    // 1. Add a new item
    function addItem(id, name, price, stock) {
        if (items.find(item => item.id === id)) {
            return `Error: Item with ID ${id} already exists.`;
        }

        if (
            !Number.isInteger(id) ||
            !Number.isInteger(stock) ||
            stock < 0 ||
            !Number.isFinite(price) ||
            price < 0 ||
            typeof name !== "string" ||
            name.trim() === ""
        ) {
            return "Error: Invalid item details.";
        }

        items.push({
            id,
            name: name.trim(),
            price,
            stock
        });

        return `Added ${name.trim()} successfully.`;
    }

    // 2. Remove an item by ID
    function removeItem(id) {
        const index = items.findIndex(item => item.id === id);

        if (index === -1) {
            return `Error: Item ${id} not found.`;
        }

        const removed = items.splice(index, 1);
        return `Removed ${removed[0].name}.`;
    }

    // 3. Update stock without allowing negative stock
    function updateStock(id, delta) {
        const item = items.find(item => item.id === id);

        if (!item) {
            return `Error: Item ${id} not found.`;
        }

        if (!Number.isInteger(delta)) {
            return "Error: Stock change must be an integer.";
        }

        if (item.stock + delta < 0) {
            return `Error: Insufficient stock for ${item.name}.`;
        }

        item.stock += delta;
        return `${item.name} stock updated to ${item.stock}.`;
    }

    // 4. Find items whose stock is at or below threshold
    function lowStock(threshold) {
        if (!Number.isInteger(threshold) || threshold < 0) {
            return [];
        }

        return items.filter(item => item.stock <= threshold);
    }

    // 5. Calculate total inventory value
    function totalValue() {
        return items.reduce(
            (total, item) => total + item.price * item.stock,
            0
        );
    }

    // 6. Search item names, case-insensitively
    function searchByName(term) {
        if (typeof term !== "string") {
            return [];
        }

        const query = term.trim().toLowerCase();

        return items.filter(item =>
            item.name.toLowerCase().includes(query)
        );
    }

    // 7. Generate a report using template literals and map()
    function report() {
    return {
        items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            stock: item.stock,
            value: item.price * item.stock
            })),
            totalItems: items.length,
            totalValue: totalValue()
        };
    }

    // Public API: only these methods are exposed.
    return {
        addItem,
        removeItem,
        updateStock,
        lowStock,
        totalValue,
        searchByName,
        report
    };
}

// Create an inventory instance
const inventory = createInventory();

//Test Case
console.log("Test 1 - Add Keyboard:",
    inventory.addItem(1, "Keyboard", 1500, 10)
);

console.log("Test 2 - Add Mouse:",
    inventory.addItem(2, "Mouse", 500, 3)
);

console.log("Test 3 - Add Monitor:",
    inventory.addItem(3, "Monitor", 8000, 0)
);

console.log("Test 4 - Duplicate ID:",
    inventory.addItem(1, "Webcam", 2000, 5)
);

console.log("Test 5 - Negative initial stock:",
    inventory.addItem(4, "Speaker", 1200, -2)
);

console.log("Test 6 - Increase stock:",
    inventory.updateStock(2, 5)
);

console.log("Test 7 - Insufficient stock:",
    inventory.updateStock(2, -20)
);

console.log("Test 8 - Low stock items:",
    inventory.lowStock(3)
);

console.log("Test 9 - Search and total value:", {
    searchResults: inventory.searchByName("MON"),
    totalValue: inventory.totalValue()
});

console.log("Test 10 - Remove item :", {
    removed: inventory.removeItem(3),
    missingItem: inventory.removeItem(99),
});

console.log("Test 11 - Final Report:",
    JSON.stringify(inventory.report(), null, 2)
);
