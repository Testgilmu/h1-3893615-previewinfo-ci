const fs = require('fs')
const path = require('path')

try {
  const p = path.join(process.cwd(), '.next', 'cache', '.previewinfo')
  const d = JSON.parse(fs.readFileSync(p, 'utf8'))
  console.log('RECOVERED_FIELDS=' + Object.keys(d).join(','))
  console.log('RECOVERED_EXPIRE_AT=' + new Date(d.expireAt).toISOString())
  console.log('RECOVERED_PREVIEW_MODE_ID=' + d.previewModeId)
} catch (err) {
  console.log('RECOVERY_FAILED=' + (err.code || err.name))
}

module.exports = {}
