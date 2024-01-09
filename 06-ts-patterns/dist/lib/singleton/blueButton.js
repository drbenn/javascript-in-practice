import Counter from "./counter";
const button = document.getElementById("blue");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    Counter.increment();
    console.log("Counter total: ", Counter.getCount());
});
