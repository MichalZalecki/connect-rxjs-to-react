export default function createAction() {
  return (...args) => listener => listener.next(...args);
}
