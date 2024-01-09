import Counter from "./counter";

export function blueButton(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    Counter.increment();
    console.log("Counter total: ", Counter.getCount());
  })
}
