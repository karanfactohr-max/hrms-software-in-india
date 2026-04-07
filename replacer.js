const fs = require('fs');
let c = fs.readFileSync('src/app/payroll-software/page.tsx', 'utf8');

// Find the trust strip section comment
const startComment = '{/* 1. TRUST STRIP */}';
const endSection = '{/* 2. INDIA PAYROLL CALENDAR */}';

const idx1 = c.indexOf(startComment);
const idx2 = c.indexOf(endSection);

if (idx1 === -1 || idx2 === -1) {
  console.log('Markers not found', idx1, idx2);
  process.exit(1);
}

const newStrip = `{/* 1. TRUST STRIP */}
      <section style={{ padding: "16px 0", borderBottom: "1px solid #E2E8F0", background: "#EEF2F7" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ border: "1px solid #DBE4EE", borderRadius: "12px", background: "#F3F6FA", padding: "12px 14px" }}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-center gap-3 lg:min-w-[270px]">
                <p style={{ fontSize: "40px", fontWeight: 800, lineHeight: 1, color: "#0F172A" }}>10,000+</p>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Trusted</p>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Organizations</p>
                </div>
              </div>
              <div className="hidden lg:block" style={{ width: 1, alignSelf: "stretch", background: "#CBD5E1" }} />
              <div className="flex items-center gap-8 lg:gap-14 xl:gap-20 flex-wrap justify-center flex-1" style={{ paddingLeft: "10px" }}>
                <img src="/integration/client-logo/siemens.webp" alt="Siemens" style={{ width: "110px", height: "auto", objectFit: "contain", opacity: 0.8, filter: "grayscale(100%)", transition: "all 0.3s" }} onMouseOver={e => {e.currentTarget.style.filter="grayscale(0%)";e.currentTarget.style.opacity="1"}} onMouseOut={e => {e.currentTarget.style.filter="grayscale(100%)";e.currentTarget.style.opacity="0.8"}} />
                <img src="/integration/client-logo/soch.webp" alt="Soch" style={{ width: "50px", height: "auto", objectFit: "contain", opacity: 0.8, filter: "grayscale(100%)", transition: "all 0.3s" }} onMouseOver={e => {e.currentTarget.style.filter="grayscale(0%)";e.currentTarget.style.opacity="1"}} onMouseOut={e => {e.currentTarget.style.filter="grayscale(100%)";e.currentTarget.style.opacity="0.8"}} />
                <img src="/integration/client-logo/susrut.webp" alt="Susrut" style={{ width: "50px", height: "auto", objectFit: "contain", opacity: 0.8, filter: "grayscale(100%)", transition: "all 0.3s" }} onMouseOver={e => {e.currentTarget.style.filter="grayscale(0%)";e.currentTarget.style.opacity="1"}} onMouseOut={e => {e.currentTarget.style.filter="grayscale(100%)";e.currentTarget.style.opacity="0.8"}} />
                <img src="/integration/client-logo/tata-steel-bsl.webp" alt="Tata Steel BSL" style={{ width: "70px", height: "auto", objectFit: "contain", opacity: 0.8, filter: "grayscale(100%)", transition: "all 0.3s" }} onMouseOver={e => {e.currentTarget.style.filter="grayscale(0%)";e.currentTarget.style.opacity="1"}} onMouseOut={e => {e.currentTarget.style.filter="grayscale(100%)";e.currentTarget.style.opacity="0.8"}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      `;

c = c.substring(0, idx1) + newStrip + c.substring(idx2);
fs.writeFileSync('src/app/payroll-software/page.tsx', c);
console.log('Done! File written successfully.');
