// jest.config.cjs

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // ▼▼▼ TAMBAHKAN BLOK INI ▼▼▼
  // Baris ini memberitahu Jest untuk TIDAK mengabaikan 'uuid' saat melakukan transformasi.
  transformIgnorePatterns: ["/node_modules/(?!uuid)"],
};
