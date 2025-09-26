import React from "react"
import { Facebook, Instagram, Twitter } from "lucide-react"
import footerline from "../assets/footerline.svg"

export default function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-lg">SPC</span>
              </div>
              <div>
                <h3 className="font-bold text-orange-600 text-lg">SYDNEY</h3>
                <h4 className="font-semibold text-orange-600">PAZHAMUDIR</h4>
                <h4 className="font-semibold text-orange-600">CHOLAI</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Nunc vulputate libero et velit interdum.
            </p>
            <div>
              <h5 className="font-semibold mb-2 text-orange-600">Follow Us</h5>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h5 className="font-semibold mb-4 text-orange-600">Pages</h5>
            <ul className="space-y-2">
              {["Home","Services","Products","Events","About Us","Careers","Offers","Help"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-4 text-orange-600">Service</h5>
            <ul className="space-y-2">
              {[
                "Fruits & Vegetables",
                "Ceylon Bakehouse",
                "Nellai Karupatti Coffee",
                "Authentic Chennai Biryani",
                "Modern Party Store",
                "Idli & Dosa (Murugan Idli)",
                "Peri Peri Chicken",
                "Ice cream station",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="font-semibold mb-4 text-orange-600">Contact Us</h5>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">140 Pericles Way,</p>
                <p className="text-sm text-gray-600">Pericles Hill NSW 2145</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">0298727076</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">0404644550</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">0298727076</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center my-8">
          <img src={footerline} alt="footerline" className="w-[1280px] h-5 opacity-100" />
        </div>

        {/* Bottom section (removed border-t) */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">© 2024 Haritech Pvt Ltd. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                Accessibility Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
