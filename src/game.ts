function board() {
  return Array.from({ length: 20 }, () => Array(10).fill(0))
}

function piece() {
  return {
    shape: [
      [1, 1],
      [1, 1]
    ],
    x: 4,
    y: 0
  }
}

function collide(b, p, dx = 0, dy = 0) {
  return p.shape.some((r, y) =>
    r.some((v, x) =>
      v && b[p.y + y + dy]?.[p.x + x + dx]
    )
  )
}

function merge(b, p) {
  p.shape.forEach((r, y) =>
    r.forEach((v, x) => {
      if (v) b[p.y + y][p.x + x] = 1
    })
  )
}

module.exports = { board, piece, collide, merge }
