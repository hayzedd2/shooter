export const Player = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save(); 
    ctx.fillStyle = '#000000'; 
    ctx.fillRect(x, y, 50, 50);
    ctx.restore();
};
