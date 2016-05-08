export default function bindAction(stream) {
  return (...args) => stream.shamefullySendNext(...args);
}
