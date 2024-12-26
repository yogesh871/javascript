

let size = parseInt(prompt("Enter array size: "));
let a = new Array(size);

for (let i = 0; i < size; i++) {
    a[i] = parseInt(prompt("Enter a value for the array: "));
}

let choice;
let pos, elem;

do {
    console.log("\n\n =====================\n\n");
    console.log("Enter 1 for insert");
    console.log("Enter 2 for update");
    console.log("Enter 3 for delete");
    console.log("Enter 4 for view");
    console.log("Enter 0 for Exit");

    choice = parseInt(prompt("Enter Your Choice: "));

    switch (choice) {
        case 1:
            pos = parseInt(prompt("Enter a position: "));
            elem = parseInt(prompt("Enter an element: "));

            if (pos >= 0 && pos <= size) {
                a.splice(pos, 0, elem);
                size++;
                console.log("Inserted successfully.");
            } else {
                console.log("Invalid position.");
            }
            break;

        case 2:
            pos = parseInt(prompt("Enter a position: "));
            elem = parseInt(prompt("Enter an element: "));

            if (pos >= 0 && pos < size) {
                a[pos] = elem;
                console.log("Updated successfully.");
            } else {
                console.log("Invalid position.");
            }
            break;

        case 3:
            pos = parseInt(prompt("Enter a position: "));

            if (pos >= 0 && pos < size) {
                a.splice(pos, 1);
                size--;
                console.log("Deleted successfully.");
            } else {
                console.log("Invalid position.");
            }
            break;

        case 4:
            console.log("Array values: " + a.join(" "));
            break;

        case 0:
            console.log("Exiting...");
            break;

        default:
            console.log("Enter a valid choice.");
            break;
    }
} while (choice !== 0);
