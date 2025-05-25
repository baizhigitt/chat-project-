const BASE_URL = "https://934199670dd7fdb9.mokky.dev/chatHw";

export const fetchMessages = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const postMessage = async (message) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  return res.json();
};

export const deleteMessages = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export const updateMessagePatch = async (id, updatedFields) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  return res.json();
};
