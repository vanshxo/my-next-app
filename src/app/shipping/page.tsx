export default function shipping() {
    return (
      <main className="min-h-screen bg-white">
        <div style={{ maxWidth: "100ch" }} className="container mx-auto px-4 md:px-4 py-8 md:py-12 lg:py-16">
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Re-verse
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Shipping and Delivery Policy:
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm md:text-base">
              <p className="text-gray-600">As at: 01/2025</p>
            </div>
          </header>
  
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-justify">
            <div>
              <h3><b>1. Commitment to Quality and Timely Delivery</b></h3>
              <ul>
                <li>Re-verse delivers all orders with high-quality packaging within 5-7 working days under normal circumstances.</li>
                <li>Products are shipped through reputed logistics companies to ensure timely and secure delivery.</li>
              </ul>
  
              <h3><b>2. Delivery Process</b></h3>
              <ul>
                <li>Re-verse partners with third-party logistics service providers to handle product deliveries.</li>
                <li>Details of the logistics partner and the tracking number will be shared via email and SMS.</li>
                <li>Re-verse is not responsible for delays caused by third-party logistics partners.</li>
                <li>Users must provide accurate, complete, and detailed shipping addresses (including landmarks, if applicable) to ensure successful delivery.</li>
              </ul>
  
              <h3><b>3. Order Delivery Timelines</b></h3>
              <ul>
                <li>Upon successful order placement, users will receive a tracking ID via email and SMS once the product is handed over to the logistics partner.</li>
                <li>The tracking ID can be used to check the delivery status on the logistics partner’s website.</li>
                <li>Users can also track their orders in the ‘Track My Orders’ section of the Re-verse website.</li>
                <li>Most orders are delivered within 7-12 working days across India. If the user remains unavailable for delivery after multiple attempts, Re-verse reserves the right to cancel the order.</li>
              </ul>
  
              <h3><b>4. Delays in Delivery</b></h3>
              <p>Delivery may be delayed due to circumstances beyond Re-verse’s control, including:</p>
              <ul>
                <li>Unsuitable weather conditions</li>
                <li>Political disruptions</li>
                <li>Strikes or employee lockouts</li>
                <li>Government-mandated lockdowns</li>
                <li>Acts of God, such as floods or earthquakes</li>
                <li>Other unforeseen circumstances</li>
              </ul>
              <p>
                In such cases, Re-verse will make reasonable attempts to inform users via registered email or mobile number. However, Re-verse will not compensate for mental distress or tort claims arising from delivery delays.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  