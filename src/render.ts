function render(b, p) {
  const z = 20
  let r = ""

  b.forEach((row, y) =>
    row.forEach((c, x) => {
      r += `<rect x="${x*z}" y="${y*z}"
        width="${z}" height="${z}"
        fill="${c ? "#00ffcc" : "#111"}"
        stroke="#333"/>`
    })
  )

  p.shape.forEach((row, y) =>
    row.forEach((c, x) => {
      if (c)
        r += `<rect x="${(p.x+x)*z}" y="${(p.y+y)*z}"
        width="${z}" height="${z}"
        fill="#ffcc00"/>`
    })
  )

  return `<svg xmlns="http://www.w3.org/2000/svg"
    width="200" height="400">
    ${r}
  </svg>`
}

module.exports = { render }
