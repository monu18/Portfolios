module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  rules: {
    // Disable unused vars warning
    '@typescript-eslint/no-unused-vars': 'off',
    
    // Disable img element warnings
    '@next/next/no-img-element': 'off',
    
    // Optional: Additional customizations
    'react/no-unescaped-entities': 'off',
    
    // Recommended additional rules for stricter typing
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  
  // Optional: Specific overrides for files
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // You can add file-specific rules here if needed
      }
    }
  ]
};