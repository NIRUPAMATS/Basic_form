const GetRequestwithData = async (url, data) => {
  const res = await fetch(url, {
    method: "GET",
    body: JSON.stringify(data),
  });
  const d = res.json();
  return d;
};

export default GetRequestwithData;
