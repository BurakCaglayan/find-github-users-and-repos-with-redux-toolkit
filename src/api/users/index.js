// A mock function to mimic making an async request for data
export function getUsers({ userName } = '') {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: userName }), 500)
  );
}
