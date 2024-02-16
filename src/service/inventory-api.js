const defaultBaseUrl = "https://65a30b08a54d8e805ed35e8b.mockapi.io/inventory";

export default class InventoryApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  get = async () => {
    try {
      const resp = await fetch(this.baseUrl);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Error occured in InventoryApi GET method", e);
    }
  };

  put = async (item) => {
    try {
      const resp = await fetch(`${this.baseUrl}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (e) {
      console.log("Error occured in InventoryApi PUT method", e);
    }
  };

  post = async (item) => {
    try {
      const resp = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return await resp.json();
    } catch (e) {
      console.log("Error occured in InventoryApi POST method", e);
    }
  };

  delete = async (id) => {
    try {
      const resp = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await resp.json();
    } catch (e) {
      console.log("Error in InventoryApi DELETE method", e);
    }
  };
}
