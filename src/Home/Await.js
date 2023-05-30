function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  }
  
  async function fetchDataAsync() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
    console.log("Data processing complete!");
  }
  
  fetchDataAsync();
  