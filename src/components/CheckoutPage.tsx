import { useState, useEffect } from 'react';
import { CreditCard, Check, Smartphone, QrCode } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { ShippingAddress } from '../types';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export default function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  const [shippingData, setShippingData] = useState<ShippingAddress>({
    fullName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA'
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [upiQrCode, setUpiQrCode] = useState('');

  useEffect(() => {
    if (step === 'payment' && paymentMethod === 'upi') {
      const upiString = `upi://pay?pa=makhanastore@upi&pn=Makhana Store&am=${totalPrice.toFixed(2)}&cu=USD&tn=Order Payment`;
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;
      setUpiQrCode(qrCodeUrl);
    }
  }, [step, paymentMethod, totalPrice]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep('success');
  };

  const handleUpiPayment = () => {
    if (paymentMethod === 'upi' && upiId) {
      clearCart();
      setStep('success');
    }
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center animate-slide-up">
          <h2 className="text-3xl font-bold gradient-text mb-6">Your cart is empty</h2>
          <button
            onClick={() => onNavigate('products')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center border border-gray-100 animate-scale-in">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-4">Order Successful!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold gradient-text mb-12 text-center animate-slide-up">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.fullName}
                        onChange={e => setShippingData({...shippingData, fullName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingData.email}
                        onChange={e => setShippingData({...shippingData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingData.phone}
                        onChange={e => setShippingData({...shippingData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.address}
                        onChange={e => setShippingData({...shippingData, address: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.city}
                        onChange={e => setShippingData({...shippingData, city: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.state}
                        onChange={e => setShippingData({...shippingData, state: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.zipCode}
                        onChange={e => setShippingData({...shippingData, zipCode: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingData.country}
                        onChange={e => setShippingData({...shippingData, country: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 font-semibold"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>

                <div className="flex gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center space-x-2 ${
                      paymentMethod === 'card'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all flex items-center justify-center space-x-2 ${
                      paymentMethod === 'upi'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <Smartphone className="h-5 w-5" />
                    <span>UPI</span>
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={e => setPaymentData({...paymentData, cardNumber: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentData.cardName}
                        onChange={e => setPaymentData({...paymentData, cardName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={paymentData.expiry}
                          onChange={e => setPaymentData({...paymentData, expiry: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={e => setPaymentData({...paymentData, cvv: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep('shipping')}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 font-semibold flex items-center justify-center space-x-2"
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Complete Order</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                      <div className="bg-white rounded-lg p-4 inline-block mb-4 shadow-sm">
                        {upiQrCode && (
                          <img src={upiQrCode} alt="UPI QR Code" className="w-64 h-64" />
                        )}
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
                        <QrCode className="h-5 w-5" />
                        <span className="font-medium">Scan QR Code with any UPI app</span>
                      </div>
                      <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm, or any UPI app</p>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or enter UPI ID</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        UPI ID
                      </label>
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={e => setUpiId(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> After scanning the QR code or entering your UPI ID, complete the payment in your UPI app, then click "I've Paid" below.
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep('shipping')}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleUpiPayment}
                        className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 font-semibold flex items-center justify-center space-x-2"
                      >
                        <Check className="h-5 w-5" />
                        <span>I've Paid</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}