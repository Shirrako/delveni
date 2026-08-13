"use client";

import { useEffect, useRef } from "react";

const MARKUP = `
  <div id="cursor"></div>
  <div class="grain"></div>

  <nav>
    <div class="brand">
      <svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="3" r="1.6" fill="#7FFFD1"/><line x1="9" y1="5.5" x2="9" y2="16" stroke="#7FFFD1" stroke-width="1" stroke-dasharray="1.5 2.2"/></svg>
      <div class="wordmark">Delveni</div>
    </div>
    <div class="navlinks">
      <div class="pill"><span class="dot"></span>Currently screening</div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Not published. Decided.</div>
      <h1>Some of this<br>isn't <span class="accent">for you.</span><br>We'll find out first.</h1>
      <p class="hero-desc">This isn't a newsletter. Nothing here is written to be understood by everyone — <b>if it doesn't land, it wasn't meant for you.</b> No archive. No feed. Nothing you can go back and find.</p>
      <div class="hero-actions">
        <a class="btn-primary" href="#">Begin the screening<span class="arrow"></span></a>
        <div class="timer-readout">
          <div class="timer-label">Next window opens</div>
          <div class="timer-num" id="clock">14<span class="u">h</span>02<span class="u">m</span>37<span class="u">s</span></div>
          <div class="timer-track"><div class="timer-fill" id="fill"></div></div>
        </div>
      </div>
    </div>

    <div class="depth-stage">
      <svg class="depth-svg" viewBox="0 0 500 500">
        <defs>
          <filter id="fluid" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.011 0.014" numOctaves="2" seed="4" result="noise">
              <animate attributeName="baseFrequency" dur="26s" values="0.011 0.014;0.015 0.011;0.011 0.014" repeatCount="indefinite"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#EFFFFA" stop-opacity="1"/>
            <stop offset="100%" stop-color="#7FFFD1" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <g filter="url(#fluid)">
          <circle class="contour" cx="250" cy="250" r="60" stroke-width="1.1" opacity="0.9"/>
          <circle class="contour" cx="250" cy="250" r="100" stroke-width="1" opacity="0.6"/>
          <circle class="contour" cx="250" cy="250" r="145" stroke-width="1" opacity="0.4"/>
          <circle class="contour" cx="250" cy="250" r="195" stroke-width="1" opacity="0.24"/>
          <circle class="contour" cx="250" cy="250" r="250" stroke-width="1" opacity="0.12"/>
        </g>

        <circle cx="250" cy="250" r="10" fill="url(#coreGlow)"/>
        <circle class="rise-dot" cx="250" cy="250" r="4" fill="#EFFFFA">
          <animateMotion path="M0,0 C 6,-70 -6,-150 2,-230" dur="5.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.7;1" dur="5.5s" repeatCount="indefinite"/>
          <animate attributeName="r" values="2.5;4.5;3;1" keyTimes="0;0.3;0.7;1" dur="5.5s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  </section>

  <div class="strip">
    <p class="strip-line"><b>The screening isn't a test you study for.</b> It's how the site decides whether this would actually mean something to you — or just be more content.</p>
    <div class="cycle">
      <div class="cycle-step"><span class="n">1</span><span class="t">You're read</span></div>
      <div class="cycle-arrow"></div>
      <div class="cycle-step"><span class="n">2</span><span class="t">It decides</span></div>
      <div class="cycle-arrow"></div>
      <div class="cycle-step"><span class="n">3</span><span class="t">Something surfaces</span></div>
      <div class="cycle-arrow"></div>
      <div class="cycle-step"><span class="n">4</span><span class="t">Then it's gone</span></div>
    </div>
  </div>

  <footer>
    <span>Delveni</span>
    <span>Not for everyone. That's the point.</span>
  </footer>

</div>

<div class="screening-overlay" id="screeningOverlay">
  <button class="screening-close" id="screeningClose">×</button>
  <div class="screening-inner">

    <div class="s-step active" id="s1">
      <div class="s-kicker">Before anything else</div>
      <div class="s-fragment">
        It won't feel <span class="redact">░░░░░░</span> at first. This does not mean it isn't <span class="redact">░░░░░░░░░░</span> — to the contrary — but it takes <span class="redact">░░░░</span>, some of it.
      </div>
      <div class="s-actions"><a class="btn-primary" id="toStep2">Continue<span class="arrow"></span></a></div>
    </div>

    <div class="s-step" id="s2">
      <div class="s-kicker">One question. No right answer.</div>
      <p class="s-prime">This isn't graded on how it sounds. Answer like no one's reading it carefully — that's closer to the truth than answering like someone is.</p>
      <div class="s-question">What would it actually cost you to sit with that for a year?</div>
      <textarea class="s-textarea" id="sInput" placeholder="Write what's true, not what sounds right…"></textarea>
      <div class="s-actions"><a class="btn-primary" id="toStep3">Submit<span class="arrow"></span></a></div>
    </div>

    <div class="s-step" id="s3">
      <div class="s-deciding">
        <div class="ring"></div>
        <p>Being read.</p>
      </div>
    </div>

    <div class="s-step" id="s4">
      <div class="s-result">
        <div class="s-kicker" style="justify-content:center; display:flex;">This one's for you</div>
        <h3>You're in.</h3>
        <p>No confirmation email, no welcome tour. The next drop will simply be there when it surfaces — for you, and for whoever else was read the same way.</p>
      </div>
    </div>

  </div>
`;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cursor = root.querySelector<HTMLDivElement>("#cursor");
    let cx = window.innerWidth / 2,
      cy = window.innerHeight / 2,
      tx = cx,
      ty = cy;
    let rafId: number;

    function onMouseMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursor) {
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      }
      rafId = requestAnimationFrame(loop);
    }
    loop();

    const hoverEls = root.querySelectorAll("a, button, input");
    const onEnter = () => cursor?.classList.add("big");
    const onLeave = () => cursor?.classList.remove("big");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // countdown
    let total = 14 * 3600 + 2 * 60 + 37;
    const CYCLE = 24 * 3600;
    const clock = root.querySelector<HTMLDivElement>("#clock");
    const fill = root.querySelector<HTMLDivElement>("#fill");
    const pad = (n: number) => String(n).padStart(2, "0");
    function tick() {
      if (total <= 0) total = CYCLE;
      total--;
      if (clock) {
        clock.innerHTML = `${pad(Math.floor(total / 3600))}<span class="u">h</span>${pad(
          Math.floor((total % 3600) / 60)
        )}<span class="u">m</span>${pad(total % 60)}<span class="u">s</span>`;
      }
      const frac = total / CYCLE;
      if (fill) fill.style.width = ((1 - frac) * 100).toFixed(2) + "%";
    }
    const tickId = setInterval(tick, 1000);

    // screening overlay flow
    const overlay = root.querySelector<HTMLDivElement>("#screeningOverlay");
    const heroCta = root.querySelector<HTMLAnchorElement>(".hero-actions .btn-primary");
    const stepIds = ["s1", "s2", "s3", "s4"];
    const steps = stepIds
      .map((id) => root.querySelector<HTMLDivElement>(`#${id}`))
      .filter(Boolean) as HTMLDivElement[];

    function showStep(id: string) {
      steps.forEach((s) => s.classList.toggle("active", s.id === id));
    }

    function onHeroCtaClick(e: Event) {
      e.preventDefault();
      showStep("s1");
      overlay?.classList.add("open");
    }
    heroCta?.addEventListener("click", onHeroCtaClick);

    const closeBtn = root.querySelector<HTMLButtonElement>("#screeningClose");
    const onClose = () => overlay?.classList.remove("open");
    closeBtn?.addEventListener("click", onClose);

    const toStep2 = root.querySelector<HTMLAnchorElement>("#toStep2");
    const onToStep2 = (e: Event) => {
      e.preventDefault();
      showStep("s2");
    };
    toStep2?.addEventListener("click", onToStep2);

    const toStep3 = root.querySelector<HTMLAnchorElement>("#toStep3");
    let resultTimeout: ReturnType<typeof setTimeout>;
    const onToStep3 = (e: Event) => {
      e.preventDefault();
      showStep("s3");
      resultTimeout = setTimeout(() => showStep("s4"), 2400);
    };
    toStep3?.addEventListener("click", onToStep3);

    const overlayHoverEls = overlay?.querySelectorAll("a, button") ?? [];
    overlayHoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      clearInterval(tickId);
      clearTimeout(resultTimeout);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      heroCta?.removeEventListener("click", onHeroCtaClick);
      closeBtn?.removeEventListener("click", onClose);
      toStep2?.removeEventListener("click", onToStep2);
      toStep3?.removeEventListener("click", onToStep3);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="wrap-outer"
      dangerouslySetInnerHTML={{ __html: MARKUP }}
    />
  );
}
