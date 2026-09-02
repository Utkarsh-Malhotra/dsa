function Three() {
    console.log("Three")
}
function Two() {
    Three();
    console.log("Two")
}
function One() {
    Two();
    console.log("One");
}

One();