/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ksiqyzevzgolvrpwlpyq.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "*",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // output: "export",
};

//https://ksiqyzevzgolvrpwlpyq.supabase.co/storage/v1/object/public/cabin-images/0.41806303564924274-cabin-001.jpg

export default nextConfig;
