export function Bullet(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fill()
  }
  
  