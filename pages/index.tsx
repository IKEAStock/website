import { Layout } from "../components/layout";
function HomePage() {
  const handleSubmit = event => {
    event.preventDefault();
    const productId = event.target.product.value;
    const country = event.target.country.value;
    console.log({productId: productId, country: country});
    window.location.href = `/${productId}?country=${country}`;
  }
  return (
    <Layout title="Home" headerContent={(
      <>
      <h1>IKEA Stock</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="product">What is the Product ID? (Found on IKEA's Website): </label>
      <input id="product" type="text" placeholder="Enter here!" width="auto"/>
      <br />
      <label htmlFor="country">What is the country code? (See the list below):</label>
      <input id="country" type="text" placeholder="Enter here!" width="auto"/>
      <br />
      <button type="submit">Search</button>
    </form>
    Found a bug? Please open an issue <a href="https://github.com/IKEAStock/website/issues">here!</a>
    </>
    )}>
      <h3>To See a list of country codes refer to <a href="https://github.com/IKEAStock/documentation/blob/main/countrycodes.md">here</a></h3>
    </Layout>
  )
}
  
  export default HomePage
