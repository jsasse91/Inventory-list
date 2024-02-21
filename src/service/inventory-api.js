//building my service, using mockapi.io as my api base, creating a const to hold my default URL
const defaultBaseUrl = "https://65a30b08a54d8e805ed35e8b.mockapi.io/inventory";

export default class InventoryApi {
  constructor(baseUrl) {
    //if a URL is passed in use it, else use my default URL
    this.baseUrl = baseUrl || defaultBaseUrl;
  }
  //defining my getAll, this just fetches everything from the base URL, using a try catch for debugging purposes
  getAllProducts = async () => {
    try {
      const resp = await fetch(this.baseUrl);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Error occured in InventoryApi GET method", e);
    }
  };
  //defining my getByID, it takes in an ID and appends to the end of the URL, I didn't end up using this endpoint,
  //but we created it in class, using a try catch for debugging purposes
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
  //defining my PUT, it takes in an object and appends the id of the object to the URL, passing in the updated
  //object as parameters and updating the values, using a try catch for debugging purposes
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
  //defining my POST, it takes in an object and passes it through to the endpoint, using the object to add a new object,
  //using a try catch for debugging purposes
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
  //defining my DELETE, it takes in an id and appends it to the url, it uses this id to delete from the api, using a try catch
  //for debugging purposes
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
