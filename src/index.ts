import { Frog } from "frog"
import { board, piece, collide, merge } from "./game"
import { render } from "./render"

export const app = new Frog({ title: "Tetris Safe" })

app.frame("/", async (c) => {
  let state = c.frameData?.state ?? {
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

export default app
