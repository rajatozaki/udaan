import { useEffect, useRef } from "react";

interface Ribbon {
  points: number;
  baseY: number;
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  color: string;
  shadowColor: string;
  lineWidth: number;
  thickness: number;
  opacity: number;
}

export function PaperFluteCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 800);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse interactivity
    const mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || 800;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Ribbons representing corrugated flutes and virgin paper sheets
    const ribbons: Ribbon[] = [
      {
        points: 40,
        baseY: 0.35,
        amplitude: 45,
        frequency: 0.0035,
        speed: 0.008,
        phase: 0,
        color: "rgba(196, 147, 88, 0.4)",
        shadowColor: "rgba(30, 20, 10, 0.5)",
        lineWidth: 3,
        thickness: 55,
        opacity: 0.6,
      },
      {
        points: 45,
        baseY: 0.48,
        amplitude: 55,
        frequency: 0.0042,
        speed: 0.012,
        phase: Math.PI * 0.5,
        color: "rgba(224, 180, 115, 0.45)",
        shadowColor: "rgba(20, 15, 8, 0.6)",
        lineWidth: 4,
        thickness: 75,
        opacity: 0.7,
      },
      {
        points: 50,
        baseY: 0.62,
        amplitude: 65,
        frequency: 0.003,
        speed: 0.006,
        phase: Math.PI * 1.2,
        color: "rgba(168, 120, 65, 0.35)",
        shadowColor: "rgba(25, 18, 10, 0.7)",
        lineWidth: 3.5,
        thickness: 90,
        opacity: 0.65,
      },
      {
        points: 55,
        baseY: 0.78,
        amplitude: 40,
        frequency: 0.0048,
        speed: 0.014,
        phase: Math.PI * 1.7,
        color: "rgba(240, 205, 155, 0.25)",
        shadowColor: "rgba(15, 10, 5, 0.8)",
        lineWidth: 2.5,
        thickness: 60,
        opacity: 0.5,
      },
    ];

    let t = 0;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      ribbons.forEach((ribbon, rIdx) => {
        const mouseFactorY = (mouse.y / height - 0.5) * 60 * (rIdx % 2 === 0 ? 1 : -1);
        const mouseFactorX = (mouse.x / width - 0.5) * 0.001;

        const currentBaseY = height * ribbon.baseY + mouseFactorY;
        const currentAmp = ribbon.amplitude * (1 + Math.sin(t * 0.5 + rIdx) * 0.2);

        const topPoints: [number, number][] = [];
        const bottomPoints: [number, number][] = [];
        const step = width / (ribbon.points - 1);

        for (let i = 0; i < ribbon.points; i++) {
          const x = i * step;
          const angle1 = x * (ribbon.frequency + mouseFactorX) + ribbon.phase + (prefersReducedMotion ? 0 : t * ribbon.speed);
          const angle2 = x * (ribbon.frequency * 2.2) - ribbon.phase * 0.5 + (prefersReducedMotion ? 0 : t * ribbon.speed * 1.5);
          
          const wave = Math.sin(angle1) * currentAmp + Math.cos(angle2) * (currentAmp * 0.35);
          const yTop = currentBaseY + wave;
          const yBottom = yTop + ribbon.thickness * (1 + Math.sin(x * 0.002 + t * 0.01) * 0.15);

          topPoints.push([x, yTop]);
          bottomPoints.push([x, yBottom]);
        }

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(topPoints[0][0], topPoints[0][1]);

        for (let i = 0; i < topPoints.length - 1; i++) {
          const xc = (topPoints[i][0] + topPoints[i + 1][0]) / 2;
          const yc = (topPoints[i][1] + topPoints[i + 1][1]) / 2;
          ctx.quadraticCurveTo(topPoints[i][0], topPoints[i][1], xc, yc);
        }
        ctx.lineTo(topPoints[topPoints.length - 1][0], topPoints[topPoints.length - 1][1]);

        ctx.lineTo(bottomPoints[bottomPoints.length - 1][0], bottomPoints[bottomPoints.length - 1][1]);
        for (let i = bottomPoints.length - 1; i > 0; i--) {
          const xc = (bottomPoints[i][0] + bottomPoints[i - 1][0]) / 2;
          const yc = (bottomPoints[i][1] + bottomPoints[i - 1][1]) / 2;
          ctx.quadraticCurveTo(bottomPoints[i][0], bottomPoints[i][1], xc, yc);
        }
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, currentBaseY - currentAmp, 0, currentBaseY + currentAmp + ribbon.thickness);
        grad.addColorStop(0, ribbon.color);
        grad.addColorStop(0.5, "rgba(235, 195, 135, 0.35)");
        grad.addColorStop(1, ribbon.shadowColor);

        ctx.fillStyle = grad;
        ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 12;
        ctx.fill();

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgba(255, 235, 195, 0.5)";
        ctx.shadowBlur = 0;
        ctx.stroke();

        ctx.restore();
      });

      t += 1;
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
