module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.name === 'typedoc' && pkg.version === '0.28.20') {
        pkg.dependencies.typescript = '~6.0.3';
        delete pkg.peerDependencies.typescript;
      }
      return pkg;
    },
  },
};
