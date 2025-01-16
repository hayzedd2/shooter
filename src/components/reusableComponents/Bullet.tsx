export function Bullet(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.fillStyle = '#FFC107'
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, Math.PI * 2)
    ctx.fill()
  }
  
  