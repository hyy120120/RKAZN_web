/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Site ko kisi aur website ke <iframe> me load hone se rokta hai — clickjacking se bachaav
  { key: "X-Frame-Options", value: "DENY" },

  // Browser ko file type "guess" karne se rokta hai (MIME-sniffing attack se bachaav)
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Dusri site pe click karne par kitna referrer info bheja jaaye, wo control karta hai
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Camera, mic, location jaisi browser permissions ko by-default band rakhta hai
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },

  // Sirf HTTPS pe force karta hai (HSTS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  reactStrictMode: false,

  // "X-Powered-By: Next.js" header hata deta hai — attacker ko framework/version pata nahi chalega
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;