import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content w-full bg-yellow-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="sun-cart logo"
              width={45}
              height={45}
              className="dark:brightness-200"
            />
            <div>
              <h3 className="font-black text-xl text-yellow-500">
                Sun<span className="text-black">Cart</span>
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm">
            Your one-stop summer essentials store. Explore trendy fashion,
            skincare, accessories, and beach vibes all in one place.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Info</h3>

          <p>Email: support@suncart.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social & Privacy */}
        <div>
          <h3 className="text-lg font-bold mb-3">Connect With Us</h3>

          <div className="flex gap-4 text-xl mb-4">
            <Link href="https://facebook.com">
              <FaFacebookF className="hover:text-blue-500 transition" />
            </Link>

            <Link href="https://instagram.com">
              <FaInstagram className="hover:text-pink-500 transition" />
            </Link>

            <Link href="https://twitter.com">
              <FaTwitter className="hover:text-sky-500 transition" />
            </Link>

            <Link href="https://youtube.com">
              <FaYoutube className="hover:text-red-500 transition" />
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
