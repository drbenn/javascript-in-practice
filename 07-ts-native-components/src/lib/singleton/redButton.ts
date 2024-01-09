import Counter from "./counter";

export function redButton(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    Counter.decrement();
    console.log("Counter total: ", Counter.getCount());
  })
}