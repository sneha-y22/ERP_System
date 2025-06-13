const path = require('path');
console.log('Current directory:', __dirname);

try {
  const resolved = require.resolve('./routes/Admin/adminRoutes');
  console.log('Resolved adminRoutes:', resolved);
  
  const controllerPath = path.join(__dirname, 'controllers/Admin/adminController.js');
  console.log('Expected controller path:', controllerPath);
  console.log('Controller exists:', require('fs').existsSync(controllerPath));
} catch (err) {
  console.error('Resolution error:', err);
}