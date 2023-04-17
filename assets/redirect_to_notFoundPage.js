

const redirection = () => {
  try {
    console.log("hii")
    if(
      document.location.href.includes("https://skratch-studio.myshopify.com") 
      && 
      !document.location.href.includes("https://skratch-studio.myshopify.com/not-found")){
        document.location.href = "https://skratch-studio.myshopify.com/not-found"
      }
  } catch (error) {
    console.log(error)
  }
}
redirection()