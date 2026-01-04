const { Frog } = require("frog")
const { board, piece, collide, merge } = require("./game")
const { render } = require("./render")

const app = new Frog({ title: "Tetris Frame" })

app.frame("/", async (c) => {
  let state = c.frameData?.state || {
    board: board(),
    piece: piece()
  }

  const a = c.buttonValue

  if (a === "L" && !collide(state.board, state.piece, -1))
    state.piece.x--

  if (a === "R" && !collide(state.board, state.piece, 1))
    state.piece.x++

  if (a === "D") {
    if (!collide(state.board, state.piece, 0, 1))
      state.piece.y++
    else {
      merge(state.board, state.piece)
      state.piece = piece()
    }
  }

  return c.res({
    image: render(state.board, state.piece),
    state,
    intents: [
      c.button("⬅️", { value: "L" }),
      c.button("➡️", { value: "R" }),
      c.button("⬇️", { value: "D" })
    ]
  })
})

module.exports = { app }
