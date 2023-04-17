const redirection = () => {
  try {
    if( 
      !document.location.href.includes("not-found")){
        document.location.href = `${document.location.href}/not-found`
      }
  } catch (error) {
    console.log(error)
  }
}
redirection()
