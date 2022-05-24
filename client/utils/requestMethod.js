export const getData = async (url, token) => {
  const res = await fetch(`/api/${url}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();
  return data;
};
export const postData = async (url, post, token) => {
  const res = await fetch(`/api/${url}`, {
    method: "POST",
    "Content-Type": "application/json",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};
export const putData = async (url, post, token) => {
  const res = await fetch(`/api/${url}`, {
    method: "PUT",
    "Content-Type": "application/json",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};
export const patchData = async (url, post, token) => {
  const res = await fetch(`/api/${url}`, {
    method: "PATCH",
    "Content-Type": "application/json",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};
export const deleteData = async (url, token) => {
  const res = await fetch(`/api/${url}`, {
    method: "DELETE",
    "Content-Type": "application/json",
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();
  return data;
};
