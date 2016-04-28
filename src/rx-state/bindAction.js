export default function bindAction(subject) {
  return (...args) => subject.next(...args);
}
