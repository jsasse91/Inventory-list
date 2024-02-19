const defaultBaseUrl = "https://65a30b08a54d8e805ed35e8b.mockapi.io/inventory";

export default class InventoryApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  getAllProducts = async () => {
    try {
      const resp = await fetch(this.baseUrl);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Error occured in InventoryApi GET method", e);
    }
  };

  getProductById = async (id) => {
    try {
      const url = `${this.baseUrl}/${id}`;
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Error occured in InventoryApi GET by ID method", e);
    }
  };

  updateProduct = async (item) => {
    try {
      const url = `${this.baseUrl}/${item.id}`;
      const resp = await fetch(url, {
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

  createNewProduct = async (item) => {
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

  deleteProductById = async (id) => {
    try {
      const url = `${this.baseUrl}/${id}`;
      const resp = await fetch(url, {
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
