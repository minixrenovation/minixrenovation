import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <div>
            <h2>Let&apos;s Build Something Beautiful</h2>
            <p>
              Ready to start your home renovation? Contact us today for a free 
              consultation and quote. Our experts are here to help.
            </p>
          </div>

          <Link href="/contact" className="btn btn-light">
            <MessageSquare size={20} /> Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
