import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xpeditepartners.com.au" }],
        destination: "https://xpeditepartners.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
