export const Enemy = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 30, 30);
  ctx.restore();
};
