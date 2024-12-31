module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
	env: {
		API_BASE_URL:"http://34.101.37.0:5000/api/"
	}
};
