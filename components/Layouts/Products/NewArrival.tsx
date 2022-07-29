import CardBig from "../../UI/Cards/CardBig";

const NewArrival = () => {
  // console.log("trending rending...");
  return (
    <>
      <aside className="m-4 overflow-hidden lg:overflow-visible lg:order-1 lg:col-end-1 lg:row-start-5">
        {/* <div className="hidden w-full h-24 px-2 mb-4 text-xl text-white bg-gray-800 rounded-lg lg:grid place-content-center lg:h-32 xl:h-32 lg:col-span-1 lg:row-span-1">
          <h1>Coupon 20% off</h1>
        </div> */}
        <div className="sticky top-11">
          <p className="mt-2 text-sm font-light text-black/50">New Arrival</p>
          <div className="flex gap-2 lg:gap-4 py-2 overflow-x-auto flex-nowrap container-snap lg:flex-col   lg:overflow-y-auto lg:h-[80vh] lg:items-center">
            <CardBig
              title="AntoniosClotihing Solid Elegant Polo Shirt"
              image="https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              price={999.99}
              original_price={2_550.0}
            />
            <CardBig
              title="Nike Long-Sleeve Gray"
              image="https://images.unsplash.com/photo-1606576036860-16aee9602a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=837&q=80"
              price={999.99}
              original_price={2_550.0}
            />
            <CardBig
              title="Marlon Alves Apparel T-Shirt"
              image="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              price={999.99}
              original_price={2_550.0}
            />
            <CardBig
              title="Tay son - brotherhood T-shirt black"
              image="https://images.unsplash.com/photo-1627225925683-1da7021732ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              price={999.99}
              original_price={2_550.0}
            />
            <CardBig
              title="Seven Zero Five - Los Angeles, CA - Black T-shirt"
              image="https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              price={999.99}
              original_price={2_550.0}
            />
            <CardBig
              title="Black Leather Jacket Solid"
              image="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              price={999.99}
              original_price={2_550.0}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default NewArrival;
