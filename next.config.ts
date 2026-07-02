import type { NextConfig } from "next";
import os from "os";

// Dynamically get all local IP addresses of the host machine to allow HMR access
// from any device on the same local network (e.g. mobile phones).
const getLocalIPs = (): string[] => {
  const interfaces = os.networkInterfaces();
  const ips = new Set<string>();

  for (const interfaceName of Object.keys(interfaces)) {
    const addresses = interfaces[interfaceName];
    if (addresses) {
      for (const addr of addresses) {
        if (!addr.internal && addr.address) {
          ips.add(addr.address);
        }
      }
    }
  }

  return Array.from(ips);
};

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: getLocalIPs(),
};

export default nextConfig;
