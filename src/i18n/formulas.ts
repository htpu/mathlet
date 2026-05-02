import type { Lang } from './strings';

export interface Translated { title: string; blurb: string; }

export const FORMULA_I18N: Record<string, Partial<Record<Lang, Translated>>> = {
  // ===== algebra =====
  'euler-identity': {
    en: { title: "Euler's identity", blurb: 'Geometric meaning of e^{iθ} on the unit circle: rotation.' },
    es: { title: 'Identidad de Euler', blurb: 'Significado geométrico de e^{iθ} en el círculo unidad: rotación.' },
  },
  'unit-roots': {
    en: { title: 'Roots of unity', blurb: 'n-th roots of unity are evenly spaced on the unit circle, forming a regular n-gon.' },
    es: { title: 'Raíces de la unidad', blurb: 'Las raíces n-ésimas de la unidad están distribuidas uniformemente en el círculo unidad.' },
  },
  'complex-power': {
    en: { title: 'Complex power z^n', blurb: 'Run z around the unit circle once; w=z^n loops n times.' },
    es: { title: 'Potencia compleja z^n', blurb: 'Si z recorre el círculo unidad una vez, w=z^n da n vueltas.' },
  },
  'mobius-transform': {
    en: { title: 'Möbius transform', blurb: 'Linear fractional map: circles to circles, conformal.' },
    es: { title: 'Transformación de Möbius', blurb: 'Mapa fraccional lineal: círculos a círculos, conformal.' },
  },
  'conformal-square': {
    en: { title: 'Conformal maps z²/sin/exp', blurb: 'A square grid under different complex functions, preserving angles.' },
    es: { title: 'Mapas conformes z²/sin/exp', blurb: 'Cuadrícula transformada por funciones complejas, preservando ángulos.' },
  },
  'riemann-sphere': {
    en: { title: 'Riemann sphere', blurb: 'Stereographic projection from the complex plane to the sphere.' },
    es: { title: 'Esfera de Riemann', blurb: 'Proyección estereográfica del plano complejo a la esfera.' },
  },
  cardano: {
    en: { title: 'Cubic roots (Cardano)', blurb: 'Discriminant Δ=−4p³−27q² classifies real/complex roots.' },
    es: { title: 'Raíces cúbicas (Cardano)', blurb: 'El discriminante Δ=−4p³−27q² clasifica las raíces.' },
  },

  // ===== geometry =====
  'conic-sections': {
    en: { title: 'Conic sections (polar)', blurb: 'Eccentricity e<1 ellipse, e=1 parabola, e>1 hyperbola.' },
    es: { title: 'Secciones cónicas (polares)', blurb: 'Excentricidad e<1 elipse, e=1 parábola, e>1 hipérbola.' },
  },
  'parametric-curves': {
    en: { title: 'Parametric curves gallery', blurb: 'Cycloid / astroid / cardioid / epi- and hypocycloid.' },
    es: { title: 'Galería de curvas paramétricas', blurb: 'Cicloide / astroide / cardioide / epi- e hipocicloide.' },
  },
  bezier: {
    en: { title: 'Bézier curves (de Casteljau)', blurb: 'Drag 4 control points; observe recursive interpolation at t.' },
    es: { title: 'Curvas de Bézier (de Casteljau)', blurb: 'Arrastra 4 puntos de control; observa interpolación recursiva en t.' },
  },
  'polar-rose': {
    en: { title: 'Polar rose', blurb: 'Even k → 2k petals; odd k → k petals.' },
    es: { title: 'Rosa polar', blurb: 'k par → 2k pétalos; k impar → k pétalos.' },
  },
  spirograph: {
    en: { title: 'Spirograph (hypotrochoid)', blurb: 'Inner circle r rolls inside R; pen at distance d.' },
    es: { title: 'Espirógrafo (hipotrocoide)', blurb: 'Círculo r rueda dentro de R; lápiz a distancia d.' },
  },
  lemniscate: {
    en: { title: 'Bernoulli lemniscate', blurb: 'Infinity-shaped closed curve.' },
    es: { title: 'Lemniscata de Bernoulli', blurb: 'Curva cerrada con forma de infinito.' },
  },
  superellipse: {
    en: { title: 'Superellipse (Lamé curve)', blurb: 'n=2 ellipse, n→∞ rectangle, n=2/3 astroid.' },
    es: { title: 'Superelipse (curva de Lamé)', blurb: 'n=2 elipse, n→∞ rectángulo, n=2/3 astroide.' },
  },

  // ===== calculus =====
  taylor: {
    en: { title: 'Taylor series', blurb: 'Tune order N to see partial sums approach the target.' },
    es: { title: 'Series de Taylor', blurb: 'Ajusta el orden N para ver cómo las sumas parciales aproximan.' },
  },
  'fourier-series': {
    en: { title: 'Fourier series', blurb: 'Square / saw / triangle waves built from harmonics. Gibbs at jumps.' },
    es: { title: 'Series de Fourier', blurb: 'Ondas cuadrada/sierra/triángulo desde armónicos. Fenómeno de Gibbs en saltos.' },
  },
  gibbs: {
    en: { title: 'Gibbs phenomenon', blurb: 'Overshoot at jumps stays at ~9% as N grows.' },
    es: { title: 'Fenómeno de Gibbs', blurb: 'El sobrepaso en saltos permanece en ~9% al crecer N.' },
  },
  'riemann-sum': {
    en: { title: 'Riemann sum', blurb: 'Left / right / mid / trapezoid integral approximation.' },
    es: { title: 'Suma de Riemann', blurb: 'Aproximación integral con extremo izquierdo/derecho/medio/trapecio.' },
  },
  'convergence-radius': {
    en: { title: 'Radius of convergence', blurb: 'Geometric series converges only for |x|<1.' },
    es: { title: 'Radio de convergencia', blurb: 'La serie geométrica solo converge para |x|<1.' },
  },
  'arc-length': {
    en: { title: 'Arc length', blurb: 'Numerical estimate of sin arc length on [a, b].' },
    es: { title: 'Longitud de arco', blurb: 'Estimación numérica de la longitud de arco de sen en [a, b].' },
  },
  'curvature-1d': {
    en: { title: 'Radius of curvature', blurb: 'Osculating circle drawn at each point of the parabola.' },
    es: { title: 'Radio de curvatura', blurb: 'Círculo osculador dibujado en cada punto de la parábola.' },
  },

  // ===== linalg =====
  'matrix-2d': {
    en: { title: '2x2 matrix transform', blurb: 'Grid + basis vectors deformed by a linear map.' },
    es: { title: 'Transformación matricial 2x2', blurb: 'Cuadrícula y vectores base deformados por un mapa lineal.' },
  },
  'eigen-2d': {
    en: { title: '2D eigenvectors', blurb: 'Real eigenvectors keep direction under matrix action.' },
    es: { title: 'Autovectores 2D', blurb: 'Los autovectores reales conservan dirección bajo la matriz.' },
  },
  svd: {
    en: { title: 'SVD geometry', blurb: 'Matrix = rotation + scaling + rotation. Unit circle → ellipse.' },
    es: { title: 'Geometría SVD', blurb: 'Matriz = rotación + escala + rotación. Círculo unidad → elipse.' },
  },
  pca: {
    en: { title: 'PCA principal components', blurb: 'Eigenvectors of the covariance of Gaussian scatter = principal axes.' },
    es: { title: 'PCA componentes principales', blurb: 'Autovectores de la covarianza = ejes principales.' },
  },
  'determinant-area': {
    en: { title: 'Determinant = area', blurb: 'Signed area of the parallelogram spanned by two columns.' },
    es: { title: 'Determinante = área', blurb: 'Área orientada del paralelogramo generado por las dos columnas.' },
  },
  'rotation-3d': {
    en: { title: '3D rotation matrix', blurb: 'Euler-angle composition of 3D rotations.' },
    es: { title: 'Matriz de rotación 3D', blurb: 'Composición de rotaciones 3D por ángulos de Euler.' },
  },
  'quaternion-slerp': {
    en: { title: 'Quaternion slerp', blurb: 'Shortest-arc interpolation between two rotations.' },
    es: { title: 'Slerp de cuaterniones', blurb: 'Interpolación por arco más corto entre dos rotaciones.' },
  },

  // ===== ode =====
  lorenz: {
    en: { title: 'Lorenz attractor', blurb: 'σ=10, ρ=28, β=8/3 → chaos; butterfly-shaped strange attractor.' },
    es: { title: 'Atractor de Lorenz', blurb: 'σ=10, ρ=28, β=8/3 → caos; atractor extraño con forma de mariposa.' },
  },
  'van-der-pol': {
    en: { title: 'Van der Pol oscillator', blurb: 'Nonlinear damping; μ controls relaxation oscillation. Stable limit cycle.' },
    es: { title: 'Oscilador de Van der Pol', blurb: 'Amortiguación no lineal; μ controla la relajación. Ciclo límite estable.' },
  },
  pendulum: {
    en: { title: 'Pendulum phase portrait', blurb: '(θ, ω) phase space of the nonlinear pendulum.' },
    es: { title: 'Retrato de fase del péndulo', blurb: 'Espacio (θ, ω) del péndulo no lineal.' },
  },
  'double-pendulum': {
    en: { title: 'Double pendulum chaos', blurb: '4D phase space, extreme sensitivity to initial conditions.' },
    es: { title: 'Caos del péndulo doble', blurb: 'Espacio de fase 4D, sensibilidad extrema a condiciones iniciales.' },
  },
  'phase-portrait': {
    en: { title: 'Linear system phase portrait', blurb: 'Vector field of 2x2 linear ODE (node / saddle / spiral).' },
    es: { title: 'Retrato de fase lineal', blurb: 'Campo vectorial de EDO lineal 2x2 (nodo/silla/espiral).' },
  },
  bifurcation: {
    en: { title: 'Logistic bifurcation diagram', blurb: 'Sweep r ∈ [0, 4]; period-doubling cascade (Feigenbaum).' },
    es: { title: 'Diagrama de bifurcación logística', blurb: 'Barrido r ∈ [0, 4]; cascada de duplicación de período (Feigenbaum).' },
  },
  'lotka-volterra': {
    en: { title: 'Lotka-Volterra predator-prey', blurb: 'Rabbits-and-foxes model; closed periodic orbits.' },
    es: { title: 'Lotka-Volterra depredador-presa', blurb: 'Modelo conejos-zorros; órbitas periódicas cerradas.' },
  },
  'limit-cycle': {
    en: { title: 'Limit cycle (Hopf bifurcation)', blurb: 'For μ>0 a stable limit cycle appears (Stuart-Landau).' },
    es: { title: 'Ciclo límite (bifurcación de Hopf)', blurb: 'Para μ>0 aparece un ciclo límite estable (Stuart-Landau).' },
  },

  // ===== pde =====
  'wave-1d': {
    en: { title: '1D wave equation', blurb: 'Fixed-end string; Gaussian initial bump propagates as travelling wave.' },
    es: { title: 'Ecuación de onda 1D', blurb: 'Cuerda fija; pulso gaussiano se propaga como onda viajera.' },
  },
  'wave-2d': {
    en: { title: '2D wave equation', blurb: 'Water-wave-like ripples on a square membrane.' },
    es: { title: 'Ecuación de onda 2D', blurb: 'Ondulaciones tipo agua en una membrana cuadrada.' },
  },
  'heat-1d': {
    en: { title: '1D heat conduction', blurb: 'Cold ends, central Gaussian source diffuses and smooths.' },
    es: { title: 'Conducción de calor 1D', blurb: 'Extremos fríos, fuente gaussiana se difunde y suaviza.' },
  },
  'schrodinger-1d': {
    en: { title: '1D Schrödinger (wave packet)', blurb: 'Wave packet hitting a barrier: transmission + reflection.' },
    es: { title: 'Schrödinger 1D (paquete de onda)', blurb: 'Paquete chocando una barrera: transmisión + reflexión.' },
  },
  'drum-membrane': {
    en: { title: 'Drum membrane modes (m, n)', blurb: 'Eigenmodes of a circular drum; Bessel-function nodal circles.' },
    es: { title: 'Modos de membrana (m, n)', blurb: 'Autoformas de un tambor circular; círculos nodales de Bessel.' },
  },
  advection: {
    en: { title: 'Advection equation', blurb: 'Initial profile translates with speed c (upwind scheme).' },
    es: { title: 'Ecuación de advección', blurb: 'El perfil inicial se traslada con velocidad c (esquema upwind).' },
  },
  'laplace-2d': {
    en: { title: '2D Laplace equation', blurb: 'Boundary temperatures → interior steady state (Jacobi iteration).' },
    es: { title: 'Ecuación de Laplace 2D', blurb: 'Temperaturas de borde → estado estacionario interior (Jacobi).' },
  },

  // ===== probability =====
  clt: {
    en: { title: 'Central Limit Theorem', blurb: 'Increase n to watch the sample-mean distribution approach Gaussian.' },
    es: { title: 'Teorema central del límite', blurb: 'Aumenta n para ver cómo la media muestral se aproxima a una gaussiana.' },
  },
  'random-walk-1d': {
    en: { title: '1D random walk', blurb: 'Independent walks; horizontal axis = step count.' },
    es: { title: 'Caminata aleatoria 1D', blurb: 'Caminatas independientes; eje horizontal = número de pasos.' },
  },
  'brownian-2d': {
    en: { title: '2D Brownian motion', blurb: 'Independent Gaussian increments form 2D Brownian paths.' },
    es: { title: 'Movimiento browniano 2D', blurb: 'Incrementos gaussianos independientes forman caminos brownianos 2D.' },
  },
  'mcmc-mh': {
    en: { title: 'MCMC Metropolis-Hastings', blurb: 'Sample from a 2-Gaussian mixture target density.' },
    es: { title: 'MCMC Metropolis-Hastings', blurb: 'Muestreo de una densidad mezcla de dos gaussianas.' },
  },
  'markov-chain': {
    en: { title: 'Markov chain stationary', blurb: '3-state chain; observe the stationary distribution.' },
    es: { title: 'Cadena de Markov estacionaria', blurb: 'Cadena de 3 estados; observa la distribución estacionaria.' },
  },
  'poisson-process': {
    en: { title: 'Poisson process', blurb: 'Event stream with exponential inter-arrival times.' },
    es: { title: 'Proceso de Poisson', blurb: 'Flujo de eventos con tiempos entre llegadas exponenciales.' },
  },
  'gaussian-mix': {
    en: { title: 'Gaussian mixture', blurb: 'Weighted sum of two Gaussians.' },
    es: { title: 'Mezcla gaussiana', blurb: 'Suma ponderada de dos gaussianas.' },
  },

  // ===== fractal =====
  mandelbrot: {
    en: { title: 'Mandelbrot set', blurb: 'Complex iteration escape test; explore via zoom + center.' },
    es: { title: 'Conjunto de Mandelbrot', blurb: 'Prueba de escape de iteración compleja; explora con zoom y centro.' },
  },
  julia: {
    en: { title: 'Julia set', blurb: 'Fix c, sweep z₀ across the complex plane.' },
    es: { title: 'Conjunto de Julia', blurb: 'Fija c, barre z₀ por el plano complejo.' },
  },
  'burning-ship': {
    en: { title: 'Burning ship fractal', blurb: 'Ship-shaped fractal: take absolute value of components each step.' },
    es: { title: 'Fractal del barco en llamas', blurb: 'Fractal con forma de barco: valor absoluto de las componentes cada paso.' },
  },
  lsystem: {
    en: { title: 'L-system', blurb: 'Symbolic rewriting fractals: Koch / Dragon / Sierpinski / Plant.' },
    es: { title: 'Sistema L', blurb: 'Fractales por reescritura simbólica: Koch/Dragón/Sierpinski/Planta.' },
  },
  'ifs-barnsley': {
    en: { title: 'Barnsley fern', blurb: '4 affine maps + probability weights generate the fern leaf.' },
    es: { title: 'Helecho de Barnsley', blurb: '4 mapas afines + pesos de probabilidad generan el helecho.' },
  },
  'logistic-map': {
    en: { title: 'Logistic map', blurb: 'Cobweb plot: parabola + y=x trajectory of iterates.' },
    es: { title: 'Mapa logístico', blurb: 'Gráfico telaraña: parábola + y=x trayectoria de iteraciones.' },
  },
  feigenbaum: {
    en: { title: 'Feigenbaum period-doubling', blurb: 'High-resolution bifurcation diagram of the logistic map.' },
    es: { title: 'Duplicación de período de Feigenbaum', blurb: 'Diagrama de bifurcación de alta resolución del mapa logístico.' },
  },
  'strange-attractor': {
    en: { title: 'Aizawa strange attractor', blurb: 'Disc-shaped fractal structure of the Aizawa system.' },
    es: { title: 'Atractor extraño de Aizawa', blurb: 'Estructura fractal en forma de disco del sistema de Aizawa.' },
  },

  // ===== topology =====
  mobius: {
    en: { title: 'Möbius strip', blurb: 'One-sided non-orientable surface.' },
    es: { title: 'Cinta de Möbius', blurb: 'Superficie no orientable de una sola cara.' },
  },
  'klein-bottle': {
    en: { title: 'Klein bottle', blurb: 'Non-orientable surface with no inside/outside (immersed in R³).' },
    es: { title: 'Botella de Klein', blurb: 'Superficie no orientable sin interior/exterior (sumergida en R³).' },
  },
  torus: {
    en: { title: 'Torus', blurb: 'Major radius R + minor radius r.' },
    es: { title: 'Toro', blurb: 'Radio mayor R + radio menor r.' },
  },
  hyperboloid: {
    en: { title: 'Hyperboloid of one sheet', blurb: 'Quadric surface ruled by two families of straight lines.' },
    es: { title: 'Hiperboloide de una hoja', blurb: 'Superficie cuádrica reglada por dos familias de rectas.' },
  },
  enneper: {
    en: { title: 'Enneper minimal surface', blurb: 'Locally zero mean curvature: minimal surface.' },
    es: { title: 'Superficie mínima de Enneper', blurb: 'Curvatura media local cero: superficie mínima.' },
  },
  'dini-surface': {
    en: { title: 'Dini surface', blurb: 'Twisted surface of constant negative Gaussian curvature.' },
    es: { title: 'Superficie de Dini', blurb: 'Superficie torsionada de curvatura gaussiana negativa constante.' },
  },
  'hopf-fibration': {
    en: { title: 'Hopf fibration', blurb: 'Each S² point lifts to a circle in S³; project to R³ to see linked rings.' },
    es: { title: 'Fibración de Hopf', blurb: 'Cada punto de S² se levanta a un círculo en S³; proyectado en R³ son anillos enlazados.' },
  },

  // ===== numbertheory =====
  'ulam-spiral': {
    en: { title: 'Ulam spiral', blurb: 'Lay out integers in a spiral; mark primes; diagonals emerge.' },
    es: { title: 'Espiral de Ulam', blurb: 'Coloca enteros en espiral; marca primos; emergen diagonales.' },
  },
  collatz: {
    en: { title: 'Collatz conjecture trajectories', blurb: 'Iterate n/2 if even, 3n+1 if odd, for many starting n.' },
    es: { title: 'Trayectorias de Collatz', blurb: 'Itera n/2 si par, 3n+1 si impar, para muchos n iniciales.' },
  },
  'continued-fractions': {
    en: { title: 'Continued-fraction convergents', blurb: 'Partial quotient sequence and rational approximants of √2/π/φ.' },
    es: { title: 'Convergentes en fracción continua', blurb: 'Secuencia de cocientes parciales y aproximantes racionales de √2/π/φ.' },
  },
  'mod-mult-circle': {
    en: { title: 'Modular multiplication circle', blurb: 'Connect i to (m·i) mod n on the unit circle; m=2 gives a cardioid.' },
    es: { title: 'Círculo de multiplicación modular', blurb: 'Conecta i con (m·i) mod n en el círculo; m=2 da una cardioide.' },
  },
  sieve: {
    en: { title: 'Sieve of Eratosthenes', blurb: 'Strike composites in the 2..N grid; primes remain.' },
    es: { title: 'Criba de Eratóstenes', blurb: 'Tacha los compuestos en la cuadrícula 2..N; quedan los primos.' },
  },
  'stern-brocot': {
    en: { title: 'Stern-Brocot tree', blurb: 'Mediant operation generates every positive rational.' },
    es: { title: 'Árbol de Stern-Brocot', blurb: 'La operación mediante genera todo racional positivo.' },
  },
  'gauss-circle': {
    en: { title: 'Gauss circle problem', blurb: 'Count integer lattice points in a radius-r circle. N(r) ≈ πr².' },
    es: { title: 'Problema del círculo de Gauss', blurb: 'Cuenta puntos enteros en un círculo de radio r. N(r) ≈ πr².' },
  },

  // ===== signals =====
  fft: {
    en: { title: 'FFT spectrum', blurb: 'Three-sine sum + time-vs-frequency comparison.' },
    es: { title: 'Espectro FFT', blurb: 'Suma de tres senos + comparación tiempo-frecuencia.' },
  },
  convolution: {
    en: { title: 'Convolution', blurb: 'Square wave * Gaussian = smoothed version.' },
    es: { title: 'Convolución', blurb: 'Onda cuadrada * gaussiana = versión suavizada.' },
  },
  'lowpass-filter': {
    en: { title: 'First-order RC low-pass filter', blurb: 'Magnitude / phase response (Bode plot).' },
    es: { title: 'Filtro RC paso-bajo de 1.er orden', blurb: 'Respuesta de magnitud / fase (Bode).' },
  },
  lissajous: {
    en: { title: 'Lissajous curves', blurb: 'Frequency ratio a:b determines the closed shape.' },
    es: { title: 'Curvas de Lissajous', blurb: 'La razón de frecuencias a:b determina la forma cerrada.' },
  },
  'wavelet-haar': {
    en: { title: 'Haar wavelet', blurb: 'Scale j and translation k.' },
    es: { title: 'Wavelet de Haar', blurb: 'Escala j y traslación k.' },
  },
  'window-functions': {
    en: { title: 'Window functions', blurb: 'Rectangular / Hann / Hamming / Blackman / Bartlett.' },
    es: { title: 'Funciones de ventana', blurb: 'Rectangular / Hann / Hamming / Blackman / Bartlett.' },
  },
  'sampling-aliasing': {
    en: { title: 'Sampling and aliasing', blurb: 'When fs is too low, high frequencies impersonate low ones.' },
    es: { title: 'Muestreo y aliasing', blurb: 'Cuando fs es bajo, las frecuencias altas se enmascaran como bajas.' },
  },

  // ===== optimization =====
  'gradient-descent': {
    en: { title: 'Gradient descent trajectory', blurb: 'See how lr and terrain decide convergence.' },
    es: { title: 'Trayectoria de descenso por gradiente', blurb: 'Observa cómo lr y el terreno deciden la convergencia.' },
  },
  'newton-1d': {
    en: { title: "Newton's method (root finding)", blurb: 'Tangent meets x-axis; iterate to approach the root.' },
    es: { title: 'Método de Newton (raíces)', blurb: 'La tangente cruza el eje x; itera para acercarse a la raíz.' },
  },
  'lagrange-multipliers': {
    en: { title: 'Lagrange multipliers', blurb: 'Maximize f(x,y)=xy subject to x²+y²=r².' },
    es: { title: 'Multiplicadores de Lagrange', blurb: 'Maximiza f(x,y)=xy sujeto a x²+y²=r².' },
  },
  'simplex-2d': {
    en: { title: '2D simplex feasible region', blurb: 'Feasible polygon and the objective line sliding to the optimum vertex.' },
    es: { title: 'Región factible simplex 2D', blurb: 'Polígono factible y línea objetivo deslizándose al vértice óptimo.' },
  },
  momentum: {
    en: { title: 'SGD vs Momentum vs Adam', blurb: 'Trajectory comparison of three optimizers in a canyon landscape.' },
    es: { title: 'SGD vs Momentum vs Adam', blurb: 'Comparación de trayectorias en un terreno tipo cañón.' },
  },
  'nelder-mead': {
    en: { title: 'Nelder-Mead simplex', blurb: '2D triangle searches by reflection / expansion / contraction.' },
    es: { title: 'Simplex de Nelder-Mead', blurb: 'Triángulo 2D busca por reflexión/expansión/contracción.' },
  },
  'line-search': {
    en: { title: 'Backtracking line search (Armijo)', blurb: 'Test whether step size α achieves sufficient decrease.' },
    es: { title: 'Búsqueda lineal por backtracking (Armijo)', blurb: 'Verifica si el paso α logra suficiente descenso.' },
  },

  // ===== vectorfield =====
  'gradient-field': {
    en: { title: 'Gradient field ∇f', blurb: 'Gradient vectors of a Gaussian peak.' },
    es: { title: 'Campo gradiente ∇f', blurb: 'Vectores gradiente de un pico gaussiano.' },
  },
  'div-curl': {
    en: { title: 'Divergence and curl', blurb: 'Source / rotation / shear / saddle prototype fields.' },
    es: { title: 'Divergencia y rotacional', blurb: 'Campos prototipo: fuente / rotación / cortante / silla.' },
  },
  streamlines: {
    en: { title: 'Streamlines (integral curves)', blurb: 'Streamlines of several 2D vector fields.' },
    es: { title: 'Líneas de corriente', blurb: 'Líneas de corriente de varios campos vectoriales 2D.' },
  },
  'geodesic-sphere': {
    en: { title: 'Sphere geodesics (great circles)', blurb: 'Shortest path between two points = great-circle arc.' },
    es: { title: 'Geodésicas en la esfera', blurb: 'Camino más corto entre dos puntos = arco de círculo máximo.' },
  },
  'curvature-surface': {
    en: { title: 'Gaussian curvature heatmap', blurb: 'Tune parameters to see hyperbolic / elliptic / flat regions.' },
    es: { title: 'Mapa de curvatura gaussiana', blurb: 'Ajusta parámetros para ver regiones hiperbólicas/elípticas/planas.' },
  },
  'dipole-field': {
    en: { title: 'Electric dipole field', blurb: 'Combined E field of +/− charges.' },
    es: { title: 'Campo de dipolo eléctrico', blurb: 'Campo E combinado de cargas +/−.' },
  },
  poiseuille: {
    en: { title: 'Poiseuille flow (pipe profile)', blurb: 'Laminar parabolic velocity profile in a circular pipe.' },
    es: { title: 'Flujo de Poiseuille (perfil)', blurb: 'Perfil de velocidad parabólico laminar en tubo circular.' },
  },

  // ===== cellular =====
  'game-of-life': {
    en: { title: "Conway's Game of Life", blurb: 'Cells = 0/1; 3 neighbours birth, 2/3 survive.' },
    es: { title: 'Juego de la vida de Conway', blurb: 'Células = 0/1; 3 vecinos nacen, 2/3 sobreviven.' },
  },
  'wolfram-1d': {
    en: { title: 'Wolfram 1D cellular automata', blurb: 'rule 30 chaotic, 90 Sierpinski, 110 Turing-complete.' },
    es: { title: 'Autómatas celulares 1D de Wolfram', blurb: 'regla 30 caótica, 90 Sierpinski, 110 Turing-completa.' },
  },
  'reaction-diffusion': {
    en: { title: 'Gray-Scott reaction-diffusion', blurb: 'Cell-division / hole / labyrinth patterns (feed/kill choose).' },
    es: { title: 'Reacción-difusión de Gray-Scott', blurb: 'Patrones de división / huecos / laberinto (feed/kill).' },
  },
  boids: {
    en: { title: 'Boids flocking', blurb: 'Three rules give emergent flocking behaviour.' },
    es: { title: 'Boids (bandadas)', blurb: 'Tres reglas producen comportamiento emergente de bandada.' },
  },
  'langtons-ant': {
    en: { title: "Langton's ant", blurb: 'White cell turn right + flip; black turn left + flip. After 10k steps a "highway" emerges.' },
    es: { title: 'Hormiga de Langton', blurb: 'Celda blanca: gira derecha + invierte; negra: izquierda + invierte. Tras 10k pasos surge una "autopista".' },
  },
  'forest-fire': {
    en: { title: 'Forest fire model', blurb: 'Tree / fire / empty; lightning + growth → critical phase transition.' },
    es: { title: 'Modelo de incendio forestal', blurb: 'Árbol / fuego / vacío; rayo + crecimiento → transición crítica.' },
  },
  'brian-brain': {
    en: { title: "Brian's Brain", blurb: 'Three-state automaton; 2 neighbours fire, 1-step refractory. Wave-like emergence.' },
    es: { title: "Brian's Brain", blurb: 'Autómata de 3 estados; 2 vecinos disparan, 1 paso refractario. Emergen ondas.' },
  },
};

// ===== batch 2 (formulas 101-200) =====
Object.assign(FORMULA_I18N, {
  // algebra +7
  'complex-add': {
    en:{title:'Complex addition (parallelogram)',blurb:'Two complex numbers add by tip-to-tail vectors = parallelogram diagonal.'},
    es:{title:'Suma compleja (paralelogramo)',blurb:'Suma de dos complejos = vectores cabeza-cola = diagonal del paralelogramo.'},
  },
  'complex-conjugate':{
    en:{title:'Complex conjugate and modulus',blurb:'Conjugate = reflection across real axis; modulus = distance to origin.'},
    es:{title:'Conjugado y módulo complejos',blurb:'Conjugado = reflexión por el eje real; módulo = distancia al origen.'},
  },
  'polynomial-roots':{
    en:{title:'Polynomial roots (complex plane)',blurb:'Distribution of complex roots of z^n + cz + d.'},
    es:{title:'Raíces polinomiales (plano complejo)',blurb:'Distribución de raíces complejas de z^n + cz + d.'},
  },
  'fundamental-algebra':{
    en:{title:'Fundamental theorem of algebra (winding)',blurb:'Polynomial maps a large circle; winding number around 0 = degree.'},
    es:{title:'Teorema fundamental del álgebra (giro)',blurb:'El polinomio mapea un círculo grande; número de vueltas en 0 = grado.'},
  },
  'binomial-expansion':{
    en:{title:"Binomial expansion (Pascal's triangle)",blurb:'Color intensity in Pascal triangle = binomial coefficient size.'},
    es:{title:'Expansión binomial (triángulo de Pascal)',blurb:'Intensidad de color en el triángulo de Pascal = tamaño del coeficiente.'},
  },
  'trig-sum':{
    en:{title:'Trig sum-angle formulas',blurb:'sin(x+φ) = sum of sine and cosine components.'},
    es:{title:'Fórmulas de suma trigonométrica',blurb:'sin(x+φ) = suma de componentes seno y coseno.'},
  },
  'de-moivre':{
    en:{title:"De Moivre's formula",blurb:'Power = angle multiplied by n.'},
    es:{title:'Fórmula de De Moivre',blurb:'Potencia = ángulo multiplicado por n.'},
  },
  // geometry +7
  'spiral-archimedean':{
    en:{title:'Archimedean spiral',blurb:'Equally spaced spiral arms = Archimedean spiral.'},
    es:{title:'Espiral de Arquímedes',blurb:'Brazos equiespaciados = espiral arquimediana.'},
  },
  'spiral-logarithmic':{
    en:{title:'Logarithmic spiral (golden)',blurb:'Each turn multiplies radius by e^{2πb}; b=0.306 → golden spiral.'},
    es:{title:'Espiral logarítmica (áurea)',blurb:'Cada vuelta multiplica el radio por e^{2πb}; b=0.306 → áurea.'},
  },
  'triangle-incircle':{
    en:{title:'Triangle incircle',blurb:'Incircle radius = area / semiperimeter.'},
    es:{title:'Incírculo del triángulo',blurb:'Radio del incírculo = área / semiperímetro.'},
  },
  'circle-pack':{
    en:{title:'Circle packing',blurb:'Densest 2D packing is hexagonal, density ≈ 0.9069.'},
    es:{title:'Empaquetado de círculos',blurb:'El empaquetado más denso 2D es hexagonal, densidad ≈ 0.9069.'},
  },
  voronoi:{
    en:{title:'Voronoi diagram',blurb:'Cells of nearest seed to each point = Voronoi diagram.'},
    es:{title:'Diagrama de Voronoi',blurb:'Celdas del semilla más cercana = diagrama de Voronoi.'},
  },
  'circle-inversion':{
    en:{title:'Circle inversion',blurb:'Grid lines become arcs under inversion.'},
    es:{title:'Inversión por círculo',blurb:'Líneas de cuadrícula se vuelven arcos bajo la inversión.'},
  },
  'cycloid-anim':{
    en:{title:'Cycloid generation animation',blurb:'A point on a rolling circle traces a cycloid.'},
    es:{title:'Animación de generación cicloide',blurb:'Un punto en un círculo rodante traza una cicloide.'},
  },
  // calculus +7
  'derivative-tangent':{
    en:{title:'Derivative = tangent slope',blurb:'Secant → tangent as h → 0.'},
    es:{title:'Derivada = pendiente tangente',blurb:'Secante → tangente cuando h → 0.'},
  },
  'integral-area':{
    en:{title:'Definite integral = area',blurb:'Drag a, b; signed area updates.'},
    es:{title:'Integral definida = área',blurb:'Arrastra a, b; el área con signo se actualiza.'},
  },
  'limit-epsilon-delta':{
    en:{title:'ε-δ limit definition',blurb:'ε strip on f outputs, δ strip on x inputs.'},
    es:{title:'Definición ε-δ del límite',blurb:'Banda ε en salidas de f, banda δ en entradas x.'},
  },
  'laplace-transform':{
    en:{title:'Laplace transform',blurb:'F(s) for common f(t) (s above poles).'},
    es:{title:'Transformada de Laplace',blurb:'F(s) para f(t) comunes (s por encima de polos).'},
  },
  'mean-value':{
    en:{title:'Mean value theorem',blurb:'Some c in (a, b) has tangent parallel to the secant.'},
    es:{title:'Teorema del valor medio',blurb:'Algún c ∈ (a, b) tiene tangente paralela a la secante.'},
  },
  lhopital:{
    en:{title:"L'Hôpital's rule (0/0)",blurb:'Common 0/0 limits as x → 0.'},
    es:{title:"Regla de L'Hôpital (0/0)",blurb:'Límites 0/0 comunes cuando x → 0.'},
  },
  'series-comparison':{
    en:{title:'Series convergence comparison',blurb:'Partial-sum growth: harmonic vs p-series vs geometric.'},
    es:{title:'Comparación de convergencia de series',blurb:'Crecimiento de sumas parciales: armónica vs p vs geométrica.'},
  },
  // linalg +7
  'dot-cross-product':{
    en:{title:'Dot / cross product (2D)',blurb:'Dot = projected length; cross = parallelogram area.'},
    es:{title:'Producto escalar / vectorial 2D',blurb:'Escalar = longitud proyectada; vectorial = área del paralelogramo.'},
  },
  projection:{
    en:{title:'Vector projection',blurb:'Projection of a onto b.'},
    es:{title:'Proyección vectorial',blurb:'Proyección de a sobre b.'},
  },
  'gram-schmidt':{
    en:{title:'Gram-Schmidt orthogonalization',blurb:'Two vectors → orthonormal basis.'},
    es:{title:'Ortogonalización Gram-Schmidt',blurb:'Dos vectores → base ortonormal.'},
  },
  'lu-decomposition':{
    en:{title:'LU decomposition (2x2)',blurb:'2x2 matrix factored as lower × upper triangular.'},
    es:{title:'Descomposición LU (2x2)',blurb:'Matriz 2x2 factorizada como triangular inferior × superior.'},
  },
  jacobian:{
    en:{title:'Jacobian (local linearization)',blurb:'Jacobian of (sin x, cos y) at a point.'},
    es:{title:'Jacobiano (linealización local)',blurb:'Jacobiano de (sin x, cos y) en un punto.'},
  },
  leastsquares:{
    en:{title:'Least squares fit',blurb:'Best-fit line through noisy scatter.'},
    es:{title:'Ajuste por mínimos cuadrados',blurb:'Línea de mejor ajuste a una nube de puntos ruidosa.'},
  },
  'markov-power':{
    en:{title:'Matrix power → stationary',blurb:'A^k of a stochastic matrix tends to a rank-1 stationary matrix.'},
    es:{title:'Potencia de matriz → estacionaria',blurb:'A^k de una matriz estocástica tiende a una matriz estacionaria rango 1.'},
  },
  // ode +8
  'sir-epidemic':{
    en:{title:'SIR epidemic model',blurb:'Susceptible / infected trajectories (R recovered by conservation).'},
    es:{title:'Modelo epidémico SIR',blurb:'Trayectorias susceptible/infectado (R por conservación).'},
  },
  'spring-mass':{
    en:{title:'Damped spring-mass',blurb:'Underdamped / critical / overdamped regimes.'},
    es:{title:'Resorte-masa con amortiguamiento',blurb:'Regímenes subamortiguado / crítico / sobreamortiguado.'},
  },
  duffing:{
    en:{title:'Duffing oscillator',blurb:'Nonlinear spring + periodic forcing → chaos.'},
    es:{title:'Oscilador de Duffing',blurb:'Resorte no lineal + forzado periódico → caos.'},
  },
  rossler:{
    en:{title:'Rössler attractor',blurb:'Chaos with only one nonlinear term.'},
    es:{title:'Atractor de Rössler',blurb:'Caos con un solo término no lineal.'},
  },
  'chen-attractor':{
    en:{title:'Chen attractor',blurb:'Lorenz-like structure but a different parameter regime.'},
    es:{title:'Atractor de Chen',blurb:'Estructura tipo Lorenz pero en otro régimen de parámetros.'},
  },
  relaxation:{
    en:{title:'Relaxation (FitzHugh-Nagumo)',blurb:'Neuron model; slow-fast dynamics.'},
    es:{title:'Relajación (FitzHugh-Nagumo)',blurb:'Modelo neuronal; dinámica lenta-rápida.'},
  },
  sirs:{
    en:{title:'SIRS model (waning immunity)',blurb:'Immunity decay produces periodic outbreaks.'},
    es:{title:'Modelo SIRS (inmunidad menguante)',blurb:'La pérdida de inmunidad produce brotes periódicos.'},
  },
  halvorsen:{
    en:{title:'Halvorsen attractor',blurb:'A symmetric strange attractor.'},
    es:{title:'Atractor de Halvorsen',blurb:'Atractor extraño simétrico.'},
  },
  // pde +7
  'diffusion-2d':{
    en:{title:'2D diffusion',blurb:'A heat spot diffuses outward into a ring.'},
    es:{title:'Difusión 2D',blurb:'Un punto caliente se difunde hacia afuera en un anillo.'},
  },
  'burgers-1d':{
    en:{title:'1D Burgers equation (shock formation)',blurb:'Nonlinear advection + viscosity → shock.'},
    es:{title:'Ecuación de Burgers 1D (formación de choque)',blurb:'Advección no lineal + viscosidad → onda de choque.'},
  },
  'poisson-2d':{
    en:{title:'2D Poisson equation',blurb:'Right side = Gaussian source, zero boundary; Jacobi solver.'},
    es:{title:'Ecuación de Poisson 2D',blurb:'Lado derecho = fuente gaussiana, contorno cero; solver de Jacobi.'},
  },
  'standing-wave':{
    en:{title:'Standing wave (string mode)',blurb:'n-th eigenmode of a fixed-end string.'},
    es:{title:'Onda estacionaria (modo de cuerda)',blurb:'n-ésimo modo propio de una cuerda con extremos fijos.'},
  },
  'helmholtz-2d':{
    en:{title:'2D Helmholtz (rectangular drum)',blurb:'Rectangular membrane eigenmodes sin(mπx)sin(nπy).'},
    es:{title:'Helmholtz 2D (membrana rectangular)',blurb:'Modos propios rectangulares sin(mπx)sin(nπy).'},
  },
  'black-scholes':{
    en:{title:'Black-Scholes option pricing',blurb:'European call price vs current stock price S.'},
    es:{title:'Precio Black-Scholes',blurb:'Precio de call europeo vs precio actual de acción S.'},
  },
  'nls-soliton':{
    en:{title:'Nonlinear Schrödinger (soliton)',blurb:'sech envelope keeps shape during propagation = soliton.'},
    es:{title:'Schrödinger no lineal (solitón)',blurb:'Envoltura sech mantiene forma durante propagación = solitón.'},
  },
  // probability +7
  'normal-pdf':{
    en:{title:'Normal distribution PDF',blurb:'Adjust μ/σ for shift and spread.'},
    es:{title:'PDF de distribución normal',blurb:'Ajusta μ/σ para desplazamiento y dispersión.'},
  },
  'exponential-dist':{
    en:{title:'Exponential distribution',blurb:'Memoryless; larger λ decays faster.'},
    es:{title:'Distribución exponencial',blurb:'Sin memoria; mayor λ decae más rápido.'},
  },
  'binomial-dist':{
    en:{title:'Binomial distribution',blurb:'Probability of k successes in n trials.'},
    es:{title:'Distribución binomial',blurb:'Probabilidad de k éxitos en n intentos.'},
  },
  bayes:{
    en:{title:"Bayes' theorem (medical test)",blurb:'Sensitivity / specificity / prevalence → positive predictive value.'},
    es:{title:'Teorema de Bayes (prueba médica)',blurb:'Sensibilidad/especificidad/prevalencia → valor predictivo positivo.'},
  },
  'galton-board':{
    en:{title:'Galton board',blurb:'Balls bouncing left/right yield approximately Gaussian histogram.'},
    es:{title:'Tablero de Galton',blurb:'Las bolas rebotan izquierda/derecha → histograma cuasi gaussiano.'},
  },
  'buffon-needle':{
    en:{title:'Buffon needle',blurb:'Needle-crossing probability → estimate of π.'},
    es:{title:'Aguja de Buffon',blurb:'Probabilidad de cruce de aguja → estimación de π.'},
  },
  'beta-dist':{
    en:{title:'Beta distribution',blurb:'Conjugate to binomial. α=β=1 is uniform.'},
    es:{title:'Distribución Beta',blurb:'Conjugada de la binomial. α=β=1 uniforme.'},
  },
  // fractal +8
  'newton-fractal':{
    en:{title:'Newton fractal (z³−1)',blurb:'Color by which root the iteration converges to.'},
    es:{title:'Fractal de Newton (z³−1)',blurb:'Coloreado por la raíz a la que converge la iteración.'},
  },
  'sierpinski-triangle':{
    en:{title:'Sierpinski triangle',blurb:'Recursive triangle hole-cutting.'},
    es:{title:'Triángulo de Sierpinski',blurb:'Recorte recursivo de huecos triangulares.'},
  },
  'sierpinski-carpet':{
    en:{title:'Sierpinski carpet',blurb:'Square minus center, recurse on the 8 sub-squares.'},
    es:{title:'Alfombra de Sierpinski',blurb:'Cuadrado sin centro, recurre en los 8 sub-cuadrados.'},
  },
  'koch-snowflake':{
    en:{title:'Koch snowflake',blurb:'Replace each edge with 4 segments at length 1/3.'},
    es:{title:'Copo de nieve de Koch',blurb:'Reemplaza cada arista con 4 segmentos de longitud 1/3.'},
  },
  'cantor-set':{
    en:{title:'Cantor set',blurb:'Recursively remove the middle third.'},
    es:{title:'Conjunto de Cantor',blurb:'Eliminar recursivamente el tercio central.'},
  },
  'dragon-curve':{
    en:{title:'Heighway dragon curve',blurb:'Limit of paper-folding sequence.'},
    es:{title:'Curva del dragón de Heighway',blurb:'Límite de la secuencia de doblar papel.'},
  },
  multibrot:{
    en:{title:'Multibrot z^d + c',blurb:'Generalize Mandelbrot via exponent d.'},
    es:{title:'Multibrot z^d + c',blurb:'Generalización de Mandelbrot variando el exponente d.'},
  },
  'lyapunov-fractal':{
    en:{title:'Lyapunov fractal',blurb:'Lyapunov exponent of the logistic map under an AB sequence.'},
    es:{title:'Fractal de Lyapunov',blurb:'Exponente de Lyapunov del mapa logístico bajo secuencia AB.'},
  },
  // topology +7
  sphere:{
    en:{title:'Sphere parameterization',blurb:'Latitude-longitude parameterization of the sphere.'},
    es:{title:'Parametrización de la esfera',blurb:'Parametrización por latitud-longitud de la esfera.'},
  },
  'trefoil-knot':{
    en:{title:'Trefoil knot',blurb:'Simplest non-trivial knot.'},
    es:{title:'Nudo trébol',blurb:'El nudo no trivial más simple.'},
  },
  seashell:{
    en:{title:'Seashell surface',blurb:'Tube extruded along an exponential spiral = shell.'},
    es:{title:'Superficie de caracola',blurb:'Tubo extruido a lo largo de espiral exponencial = caracola.'},
  },
  catenoid:{
    en:{title:'Catenoid',blurb:'Another minimal surface (rotated catenary).'},
    es:{title:'Catenoide',blurb:'Otra superficie mínima (catenaria de revolución).'},
  },
  'heart-3d':{
    en:{title:'3D heart (Taubin)',blurb:'Taubin heart implicit surface (parametric approximation).'},
    es:{title:'Corazón 3D (Taubin)',blurb:'Superficie implícita corazón de Taubin (aproximación paramétrica).'},
  },
  'saddle-surface':{
    en:{title:'Saddle surface z = x²−y²',blurb:'Hyperbolic paraboloid with negative Gaussian curvature.'},
    es:{title:'Silla de montar z = x²−y²',blurb:'Paraboloide hiperbólico con curvatura gaussiana negativa.'},
  },
  'bottle-coffee':{
    en:{title:'Donut ↔ coffee mug',blurb:'Topological homeomorphism: same genus.'},
    es:{title:'Dona ↔ taza',blurb:'Homeomorfismo topológico: mismo género.'},
  },
  // numbertheory +7
  'divisors-plot':{
    en:{title:'Divisor count d(n)',blurb:'Primes have d(n)=2; prime powers stand out.'},
    es:{title:'Conteo de divisores d(n)',blurb:'Primos tienen d(n)=2; potencias de primos sobresalen.'},
  },
  totient:{
    en:{title:'Euler totient φ(n)',blurb:'Number of k ≤ n coprime to n.'},
    es:{title:'Función phi de Euler φ(n)',blurb:'Número de k ≤ n coprimos con n.'},
  },
  'zeta-zeros':{
    en:{title:'Riemann ζ on the critical line',blurb:'|ζ(1/2 + it)| with known nontrivial zeros marked.'},
    es:{title:'ζ de Riemann en la línea crítica',blurb:'|ζ(1/2 + it)| con ceros no triviales marcados.'},
  },
  'farey-sequence':{
    en:{title:'Farey sequence',blurb:'Distribution of reduced fractions of order n.'},
    es:{title:'Sucesión de Farey',blurb:'Distribución de fracciones irreducibles de orden n.'},
  },
  'pellet-fibonacci':{
    en:{title:'Fibonacci growth (log)',blurb:'log F_n is approximately linear with slope log φ.'},
    es:{title:'Crecimiento Fibonacci (log)',blurb:'log F_n es casi lineal con pendiente log φ.'},
  },
  goldbach:{
    en:{title:'Goldbach comet',blurb:'Number of ways an even integer = sum of two primes.'},
    es:{title:'Cometa de Goldbach',blurb:'Número de formas de expresar par como suma de dos primos.'},
  },
  'quadratic-residues':{
    en:{title:'Quadratic residues mod p',blurb:'p×p grid of i·j mod p; mark whether the result is a QR.'},
    es:{title:'Residuos cuadráticos mod p',blurb:'Cuadrícula p×p de i·j mod p; marca si es residuo cuadrático.'},
  },
  // signals +7
  dft:{
    en:{title:'DFT formula visualization',blurb:'Cumulative Fourier coefficient for one frequency k.'},
    es:{title:'Visualización de la DFT',blurb:'Coeficiente acumulado de Fourier para una frecuencia k.'},
  },
  spectrogram:{
    en:{title:'Spectrogram (chirp)',blurb:'Time-frequency representation of a linear chirp.'},
    es:{title:'Espectrograma (chirp)',blurb:'Representación tiempo-frecuencia de un chirp lineal.'},
  },
  'am-modulation':{
    en:{title:'AM modulation',blurb:'Carrier ω_c × envelope (1 + m cos ω_m t).'},
    es:{title:'Modulación AM',blurb:'Portadora ω_c × envolvente (1 + m cos ω_m t).'},
  },
  'fm-modulation':{
    en:{title:'FM modulation',blurb:'Carrier frequency varies with the modulating signal.'},
    es:{title:'Modulación FM',blurb:'La frecuencia portadora varía con la señal moduladora.'},
  },
  sinc:{
    en:{title:'sinc function',blurb:'Fourier transform of a rectangular window.'},
    es:{title:'Función sinc',blurb:'Transformada de Fourier de una ventana rectangular.'},
  },
  'iir-resonator':{
    en:{title:'IIR resonator frequency response',blurb:'Poles near the unit circle → sharp resonance peak.'},
    es:{title:'Respuesta de resonador IIR',blurb:'Polos cerca del círculo unidad → pico de resonancia.'},
  },
  'zeropad-fft':{
    en:{title:'Zero-padded FFT (spectral interpolation)',blurb:'Padding densifies the spectrum (no extra resolution).'},
    es:{title:'FFT con relleno de ceros',blurb:'El relleno densifica el espectro (sin más resolución).'},
  },
  // optimization +7
  'quadratic-bowl':{
    en:{title:'Quadratic surface',blurb:'Convex / saddle / degenerate classification.'},
    es:{title:'Superficie cuadrática',blurb:'Clasificación convexa / silla / degenerada.'},
  },
  'conjugate-gradient':{
    en:{title:'Conjugate gradient (CG)',blurb:'Solve Ax=b; 2D ellipse converges in ≤2 steps.'},
    es:{title:'Gradiente conjugado (CG)',blurb:'Resuelve Ax=b; elipse 2D converge en ≤2 pasos.'},
  },
  'levenberg-marquardt':{
    en:{title:'Levenberg-Marquardt fit',blurb:'Nonlinear least squares fitting a·exp(-bx²) to noisy data.'},
    es:{title:'Ajuste Levenberg-Marquardt',blurb:'Mínimos cuadrados no lineales ajustando a·exp(-bx²) a datos ruidosos.'},
  },
  regularization:{
    en:{title:'L2 regularization (ridge)',blurb:'Polynomial fit with L2 penalty.'},
    es:{title:'Regularización L2 (ridge)',blurb:'Ajuste polinomial con penalización L2.'},
  },
  'genetic-algorithm':{
    en:{title:'Genetic algorithm',blurb:'Population evolves on a multi-modal landscape to find the maximum.'},
    es:{title:'Algoritmo genético',blurb:'Población evoluciona en paisaje multimodal para hallar el máximo.'},
  },
  'simulated-annealing':{
    en:{title:'Simulated annealing',blurb:'Temperature decreases over time; escapes local minima.'},
    es:{title:'Recocido simulado',blurb:'La temperatura disminuye con el tiempo; escapa de mínimos locales.'},
  },
  'coordinate-descent':{
    en:{title:'Coordinate descent',blurb:'Alternately minimize along x then y.'},
    es:{title:'Descenso por coordenadas',blurb:'Alterna minimizar en x y luego y.'},
  },
  // vectorfield +7
  'magnetic-loop':{
    en:{title:'Current loop magnetic field (cross section)',blurb:'2D cross-section B field of a current loop at ±z.'},
    es:{title:'Campo magnético de espira',blurb:'Sección 2D del campo B de espira de corriente en ±z.'},
  },
  'double-vortex':{
    en:{title:'Two vortices',blurb:'Velocity field of two superposed vortices.'},
    es:{title:'Dos vórtices',blurb:'Campo de velocidad de dos vórtices superpuestos.'},
  },
  'torus-vector-field':{
    en:{title:'Tangent vector field on torus',blurb:'Linear tangent field on a torus (R, r); not combable.'},
    es:{title:'Campo tangente en el toro',blurb:'Campo tangente lineal en toro (R, r); no peinable.'},
  },
  'triple-source':{
    en:{title:'Three-source superposition',blurb:'Electric field from three equal-strength sources.'},
    es:{title:'Tres fuentes superpuestas',blurb:'Campo eléctrico de tres fuentes de igual intensidad.'},
  },
  'heat-flow-field':{
    en:{title:'Heat-flow field (−∇T)',blurb:'Negative gradient of T = sin(ax)cos(by) is the heat-flow direction.'},
    es:{title:'Campo de flujo de calor (−∇T)',blurb:'El gradiente negativo de T = sin(ax)cos(by) da la dirección del flujo.'},
  },
  'orbit-field':{
    en:{title:'Central-gravity velocity field',blurb:'Tangential velocity field for circular orbits.'},
    es:{title:'Campo de velocidad orbital',blurb:'Campo de velocidad tangencial para órbitas circulares.'},
  },
  'cardinal-curvature':{
    en:{title:'Curve curvature (parametric)',blurb:'Color along the curve = pointwise curvature.'},
    es:{title:'Curvatura de curva (paramétrica)',blurb:'Color a lo largo de la curva = curvatura puntual.'},
  },
  // cellular +7
  highlife:{
    en:{title:'HighLife (B36/S23)',blurb:'Variant of Life containing replicators.'},
    es:{title:'HighLife (B36/S23)',blurb:'Variante de Life con replicadores.'},
  },
  'seeds-ca':{
    en:{title:'Seeds (B2/S)',blurb:'Every cell dies each generation; 2 neighbours give birth → chaos.'},
    es:{title:'Seeds (B2/S)',blurb:'Toda célula muere cada generación; 2 vecinos engendran → caos.'},
  },
  'day-night':{
    en:{title:'Day & Night (B3678/S34678)',blurb:'Self-dual rule; behaviour invariant under colour flip.'},
    es:{title:'Día y Noche (B3678/S34678)',blurb:'Regla autodual; comportamiento invariante al invertir colores.'},
  },
  sandpile:{
    en:{title:'Abelian sandpile',blurb:'When ≥4 grains: topple to 4 neighbours. Critical state → patterns.'},
    es:{title:'Pila de arena abeliana',blurb:'Si ≥4 granos: vuelca a 4 vecinos. Estado crítico → patrones.'},
  },
  lenia:{
    en:{title:'Lenia (continuous Life)',blurb:'Continuous values + smooth kernel → soft-body life-forms emerge.'},
    es:{title:'Lenia (vida continua)',blurb:'Valores continuos + kernel suave → criaturas de cuerpo blando.'},
  },
  'elementary-rule110':{
    en:{title:'Elementary CA Rule 110 (Turing complete)',blurb:'A simple 1D CA proven Turing complete.'},
    es:{title:'CA elemental regla 110 (Turing completa)',blurb:'Un AC unidimensional simple probado Turing completo.'},
  },
  'maze-ca':{
    en:{title:'Maze CA (B3/S12345)',blurb:'Cellular rule generating maze-like patterns.'},
    es:{title:'Laberinto CA (B3/S12345)',blurb:'Regla celular que genera patrones tipo laberinto.'},
  },
});

// ===== batch 3 (formulas 201-400) =====
Object.assign(FORMULA_I18N, {
  // algebra +14
  'quadratic-formula':{en:{title:'Quadratic formula',blurb:'Tune a/b/c, watch the discriminant Δ.'},es:{title:'Fórmula cuadrática',blurb:'Ajusta a/b/c, observa el discriminante Δ.'}},
  'abs-value':{en:{title:'Absolute value',blurb:'V-shaped piecewise line.'},es:{title:'Valor absoluto',blurb:'Línea quebrada en V.'}},
  'exp-log':{en:{title:'Exponential vs logarithm',blurb:'Inverse functions, mirror across y=x.'},es:{title:'Exponencial vs logaritmo',blurb:'Inversas, espejo respecto a y=x.'}},
  'hyperbolic':{en:{title:'Hyperbolic functions',blurb:'sinh/cosh/tanh and reciprocals.'},es:{title:'Funciones hiperbólicas',blurb:'sinh/cosh/tanh y recíprocas.'}},
  'inverse-trig':{en:{title:'Inverse trig functions',blurb:'arcsin/arccos/arctan.'},es:{title:'Funciones trig inversas',blurb:'arcsin/arccos/arctan.'}},
  sigmoid:{en:{title:'Sigmoid / logistic',blurb:'Neural-net activation; k controls steepness.'},es:{title:'Sigmoide / logística',blurb:'Activación neuronal; k controla pendiente.'}},
  relu:{en:{title:'ReLU family',blurb:'Common neural-net activations.'},es:{title:'Familia ReLU',blurb:'Activaciones neuronales comunes.'}},
  'floor-ceil':{en:{title:'Floor / Ceil / Round',blurb:'Step functions.'},es:{title:'Suelo / Techo / Redondeo',blurb:'Funciones escalón.'}},
  'gamma-function':{en:{title:'Γ function',blurb:'Continuous extension of factorial. Γ(n)=(n−1)!'},es:{title:'Función Γ',blurb:'Extensión continua del factorial. Γ(n)=(n−1)!'}},
  erf:{en:{title:'Error function erf',blurb:'Standardized Gaussian integral.'},es:{title:'Función error erf',blurb:'Integral gaussiana estandarizada.'}},
  'bessel-j':{en:{title:'Bessel functions Jₘ',blurb:'Eigensolutions in cylindrical coordinates.'},es:{title:'Funciones de Bessel Jₘ',blurb:'Soluciones propias en coordenadas cilíndricas.'}},
  'legendre-poly':{en:{title:'Legendre polynomials',blurb:'Orthogonal on [−1, 1].'},es:{title:'Polinomios de Legendre',blurb:'Ortogonales en [−1, 1].'}},
  'chebyshev-poly':{en:{title:'Chebyshev polynomials Tₙ',blurb:'Minimax approximation basis.'},es:{title:'Polinomios de Chebyshev Tₙ',blurb:'Base de aproximación minimax.'}},
  'abs-complex':{en:{title:'|z| and arg z',blurb:'Polar representation of a complex number.'},es:{title:'|z| y arg z',blurb:'Representación polar de un número complejo.'}},
  'sigmoid-derivative':{en:{title:'Sigmoid derivative',blurb:'Peaks at 1/4 when x=0.'},es:{title:'Derivada de sigmoide',blurb:'Máximo en 1/4 cuando x=0.'}},
  // geometry +7
  'golden-ratio':{en:{title:'Golden rectangle',blurb:'Recursively split squares; golden spiral emerges.'},es:{title:'Rectángulo áureo',blurb:'Cuadrados recursivos; surge la espiral áurea.'}},
  'regular-polygon':{en:{title:'Regular polygon → circle',blurb:'Larger n → polygon approximates a circle.'},es:{title:'Polígono regular → círculo',blurb:'n mayor → polígono se aproxima a un círculo.'}},
  'cassini-oval':{en:{title:'Cassini oval',blurb:'Constant product of distances to two foci.'},es:{title:'Óvalo de Cassini',blurb:'Producto constante de distancias a dos focos.'}},
  'witch-of-agnesi':{en:{title:'Witch of Agnesi',blurb:'Geometric form of the Cauchy distribution.'},es:{title:'Bruja de Agnesi',blurb:'Forma geométrica de la distribución de Cauchy.'}},
  cissoid:{en:{title:'Cissoid of Diocles',blurb:'Curve from the doubling-the-cube problem.'},es:{title:'Cisoide de Diocles',blurb:'Curva del problema de la duplicación del cubo.'}},
  'folium-descartes':{en:{title:'Folium of Descartes',blurb:'Parametric form.'},es:{title:'Folium de Descartes',blurb:'Forma paramétrica.'}},
  'limacon':{en:{title:'Pascal limaçon',blurb:'a<b inner loop, a=b cardioid, a>b convex.'},es:{title:'Caracol de Pascal',blurb:'a<b lazo interior, a=b cardioide, a>b convexo.'}},
  'heart-curve':{en:{title:'Heart parametric curve',blurb:'Classic closed heart shape.'},es:{title:'Curva paramétrica corazón',blurb:'Forma de corazón cerrada clásica.'}},
  trochoid:{en:{title:'Trochoid (curtate / prolate)',blurb:'Generalized cycloid for d ≠ r.'},es:{title:'Trocoide (curtada / prolata)',blurb:'Cicloide generalizada para d ≠ r.'}},
  'lattice-gcd':{en:{title:'Lattice gcd view',blurb:'Color integer lattice points by gcd.'},es:{title:'Vista de mcd en la red',blurb:'Colorea puntos enteros por su mcd.'}},
  'centroid-triangle':{en:{title:'Triangle centroid',blurb:'Intersection of the three medians.'},es:{title:'Baricentro del triángulo',blurb:'Intersección de las tres medianas.'}},
  'ellipse-foci':{en:{title:'Ellipse focal property',blurb:'Locus where sum of distances to two foci is constant.'},es:{title:'Propiedad focal de la elipse',blurb:'Lugar donde la suma de distancias a dos focos es constante.'}},
  'sphere-volume':{en:{title:'Spherical cap volume',blurb:'Spherical cap of height h (rendered as cropped sphere).'},es:{title:'Volumen del casquete esférico',blurb:'Casquete de altura h (esfera recortada).'}},
  icosahedron:{en:{title:'Platonic solids',blurb:'Five regular polyhedra visualized.'},es:{title:'Sólidos platónicos',blurb:'Los cinco poliedros regulares visualizados.'}},
  // calculus +14
  'chain-rule':{en:{title:'Chain rule',blurb:'Function and its derivative.'},es:{title:'Regla de la cadena',blurb:'Función y su derivada.'}},
  'implicit-diff':{en:{title:'Implicit differentiation (circle)',blurb:'Tangent slope of x² + y² = r².'},es:{title:'Derivación implícita (círculo)',blurb:'Pendiente tangente de x² + y² = r².'}},
  'related-rates':{en:{title:'Related rates (sliding ladder)',blurb:'Ladder slips: bottom moves out, top falls.'},es:{title:'Tasas relacionadas (escalera)',blurb:'La escalera resbala: base se aleja, cima cae.'}},
  'partial-derivative':{en:{title:'Partial derivative (surface slice)',blurb:'Surface f(x, y) = sin(ax)cos(by).'},es:{title:'Derivada parcial',blurb:'Superficie f(x, y) = sen(ax)cos(by).'}},
  'double-integral':{en:{title:'Double integral (Riemann columns)',blurb:'Numerical estimate of ∬(x² + y²)dA over a rectangle.'},es:{title:'Integral doble',blurb:'Estimación numérica de ∬(x² + y²)dA en un rectángulo.'}},
  'line-integral':{en:{title:'Line integral along a curve',blurb:'∮(x² + y²)ds over a circular path.'},es:{title:'Integral de línea',blurb:'∮(x² + y²)ds sobre un camino circular.'}},
  'greens-theorem':{en:{title:"Green's theorem (area formula)",blurb:'Compute enclosed area from a boundary curve.'},es:{title:'Teorema de Green (área)',blurb:'Calcula el área encerrada desde la curva frontera.'}},
  'euler-maclaurin':{en:{title:'Euler-Maclaurin formula',blurb:'Bridge between discrete sums and integrals.'},es:{title:'Fórmula de Euler-Maclaurin',blurb:'Puente entre sumas discretas e integrales.'}},
  'jacobian-2d':{en:{title:'Jacobian (polar coordinates)',blurb:'Jacobian of (r, θ) → (x, y) at a point.'},es:{title:'Jacobiano (coords. polares)',blurb:'Jacobiano de (r, θ) → (x, y) en un punto.'}},
  'divergence-theorem':{en:{title:'Divergence theorem (2D)',blurb:'Boundary flux equals interior divergence integral.'},es:{title:'Teorema de la divergencia (2D)',blurb:'Flujo en la frontera = integral de divergencia.'}},
  'dirac-delta':{en:{title:'Dirac δ (Gaussian approximation)',blurb:'Width ε → 0 approaches δ.'},es:{title:'Dirac δ (aproximación gaussiana)',blurb:'Ancho ε → 0 tiende a δ.'}},
  heaviside:{en:{title:'Heaviside step (sigmoid approx.)',blurb:'k → ∞ gives the step function.'},es:{title:'Escalón de Heaviside',blurb:'k → ∞ da la función escalón.'}},
  zeta2:{en:{title:'ζ(2) = π²/6 partial sum',blurb:'Basel problem: 1 + 1/4 + 1/9 + ... = π²/6.'},es:{title:'ζ(2) = π²/6 suma parcial',blurb:'Problema de Basilea: 1 + 1/4 + 1/9 + ... = π²/6.'}},
  'triple-integral':{en:{title:'Triple integral (sphere)',blurb:'A sphere as a 3D-integration object.'},es:{title:'Integral triple (esfera)',blurb:'Esfera como objeto de integración 3D.'}},
  'series-2-tan':{en:{title:'arctan series',blurb:'Converges only for |x| ≤ 1; Leibniz π/4 = 1 − 1/3 + 1/5 ...'},es:{title:'Serie de arctan',blurb:'Converge solo para |x| ≤ 1; Leibniz π/4 = 1 − 1/3 + 1/5 ...'}},
  // linalg +14
  'inverse-matrix':{en:{title:'Inverse matrix action',blurb:'A⁻¹ undoes A’s grid distortion.'},es:{title:'Acción de la matriz inversa',blurb:'A⁻¹ deshace la distorsión de A.'}},
  transpose:{en:{title:'Transpose Aᵀ',blurb:'2x2 transpose = flip across the main diagonal.'},es:{title:'Transpuesta Aᵀ',blurb:'Transpuesta 2x2 = espejo diagonal.'}},
  'rank-nullspace':{en:{title:'Rank and nullspace',blurb:'Column space (orange) + nullspace (red).'},es:{title:'Rango y espacio nulo',blurb:'Espacio columna + espacio nulo.'}},
  'cross-product-3d':{en:{title:'3D cross product',blurb:'Result is perpendicular to both a and b.'},es:{title:'Producto vectorial 3D',blurb:'Resultado perpendicular a a y b.'}},
  'qr-decomposition':{en:{title:'QR decomposition',blurb:'Gram-Schmidt: A = orthogonal Q × upper-triangular R.'},es:{title:'Descomposición QR',blurb:'Gram-Schmidt: A = Q ortogonal × R triangular sup.'}},
  cholesky:{en:{title:'Cholesky decomposition',blurb:'Unique factorization of a symmetric-positive-definite A.'},es:{title:'Descomposición de Cholesky',blurb:'Factorización única de A simétrica definida positiva.'}},
  'condition-number':{en:{title:'Condition number (ill-conditioning)',blurb:'Large κ → elongated ellipse → numerically ill-conditioned.'},es:{title:'Número de condición',blurb:'κ grande → elipse alargada → mal condicionado.'}},
  'affine-transform':{en:{title:'Affine transform composition',blurb:'Rotation + scaling combined matrix.'},es:{title:'Composición afín',blurb:'Matriz combinada de rotación + escala.'}},
  'spectral-radius':{en:{title:'Spectral radius and stability',blurb:'Eigenvalues inside the unit circle → iteration converges.'},es:{title:'Radio espectral y estabilidad',blurb:'Autovalores dentro del círculo → la iteración converge.'}},
  'power-iteration':{en:{title:'Power iteration → dominant eigenvector',blurb:'Converges to the dominant eigenvector.'},es:{title:'Iteración de potencia',blurb:'Converge al autovector dominante.'}},
  'orthogonal-rotation':{en:{title:'2D rotation matrix',blurb:'Length and angle preserving; det = 1.'},es:{title:'Matriz de rotación 2D',blurb:'Conserva longitud y ángulo; det = 1.'}},
  'shear-transform':{en:{title:'Shear transform',blurb:'X-direction shear. det = 1, area-preserving.'},es:{title:'Cizallamiento',blurb:'Cizalla en X. det = 1, conserva área.'}},
  reflection:{en:{title:'Reflection',blurb:'Reflection across a line at angle θ. det = −1.'},es:{title:'Reflexión',blurb:'Reflexión por una recta a ángulo θ. det = −1.'}},
  kronecker:{en:{title:'Kronecker product (block structure)',blurb:'2x2 ⊗ 2x2 = 4x4 block matrix.'},es:{title:'Producto de Kronecker',blurb:'2x2 ⊗ 2x2 = matriz bloque 4x4.'}},
  // ode +14
  'euler-method':{en:{title:'Euler method vs exact',blurb:'Larger h → larger error.'},es:{title:'Método de Euler vs exacto',blurb:'h mayor → mayor error.'}},
  'lyapunov-exp':{en:{title:'Lyapunov exponent (logistic)',blurb:'λ > 0 → chaos; λ < 0 → periodic.'},es:{title:'Exponente de Lyapunov',blurb:'λ > 0 → caos; λ < 0 → periódico.'}},
  'lorenz-96':{en:{title:'Lorenz 96 (4D projection)',blurb:'Simplified climate model. Project onto (x₀, x₁).'},es:{title:'Lorenz 96 (proyección)',blurb:'Modelo climático simplificado.'}},
  'predator-prey-3':{en:{title:'Three-species food chain',blurb:'Resource + consumer + apex predator.'},es:{title:'Cadena trófica de 3 especies',blurb:'Recurso + consumidor + depredador tope.'}},
  'thomas-attractor':{en:{title:'Thomas attractor',blurb:'Cyclically symmetric chaos.'},es:{title:'Atractor de Thomas',blurb:'Caos cíclicamente simétrico.'}},
  'dadras-attractor':{en:{title:'Dadras attractor',blurb:'5-parameter chaotic system.'},es:{title:'Atractor de Dadras',blurb:'Sistema caótico con 5 parámetros.'}},
  'four-wing':{en:{title:'Four-wing attractor',blurb:'Four-winged butterfly chaos.'},es:{title:'Atractor de cuatro alas',blurb:'Caos en forma de mariposa de cuatro alas.'}},
  'circular-restricted':{en:{title:'Restricted three-body problem',blurb:'Satellite in the rotating frame of two large bodies.'},es:{title:'Problema restringido de 3 cuerpos',blurb:'Satélite en el marco rotatorio.'}},
  'oscillator-coupled':{en:{title:'Coupled oscillators',blurb:'Two harmonic oscillators coupled by a spring → normal modes.'},es:{title:'Osciladores acoplados',blurb:'Dos osciladores acoplados por un resorte → modos normales.'}},
  kuramoto:{en:{title:'Kuramoto sync',blurb:'N oscillators synchronize as coupling K rises.'},es:{title:'Sincronización de Kuramoto',blurb:'N osciladores sincronizan al subir el acoplamiento K.'}},
  'sine-gordon':{en:{title:'Sine-Gordon equation',blurb:'Nonlinear wave; soliton (kink) solutions.'},es:{title:'Ecuación seno-Gordon',blurb:'Onda no lineal; soluciones tipo solitón.'}},
  brusselator:{en:{title:'Brusselator chemical oscillator',blurb:'Trimolecular reaction model with limit cycle.'},es:{title:'Oscilador químico Brusselator',blurb:'Modelo de reacción trimolecular con ciclo límite.'}},
  'predator-three':{en:{title:'Holling type-II predation',blurb:'Functional response introduces saturation.'},es:{title:'Depredación Holling tipo II',blurb:'Respuesta funcional con saturación.'}},
  'forced-pendulum':{en:{title:'Driven damped pendulum',blurb:'Periodic forcing + damping → chaos.'},es:{title:'Péndulo forzado amortiguado',blurb:'Forzado periódico + amortiguamiento → caos.'}},
  // pde +14
  'diffusion-2d':{en:{title:'2D diffusion',blurb:'Multiple heat sources merge as they diffuse.'},es:{title:'Difusión 2D',blurb:'Varias fuentes de calor se fusionan al difundirse.'}},
  'burgers-1d':{en:{title:'1D Burgers (shock formation)',blurb:'Nonlinear advection + viscosity → shock.'},es:{title:'Burgers 1D (choque)',blurb:'Advección no lineal + viscosidad → choque.'}},
  'poisson-2d':{en:{title:'2D Poisson equation',blurb:'Right side = Gaussian source, zero boundary; Jacobi solver.'},es:{title:'Poisson 2D',blurb:'Lado derecho gaussiano, contorno cero; Jacobi.'}},
  'standing-wave':{en:{title:'Standing wave (string mode)',blurb:'n-th eigenmode of a fixed-end string.'},es:{title:'Onda estacionaria',blurb:'n-ésimo modo propio de cuerda con extremos fijos.'}},
  'helmholtz-2d':{en:{title:'2D Helmholtz (rectangular drum)',blurb:'Rectangular membrane eigenmodes sin(mπx)sin(nπy).'},es:{title:'Helmholtz 2D (membrana)',blurb:'Modos propios rectangulares.'}},
  'black-scholes':{en:{title:'Black-Scholes option pricing',blurb:'European call price vs current stock price S.'},es:{title:'Black-Scholes',blurb:'Precio call europeo vs precio actual S.'}},
  'nls-soliton':{en:{title:'Nonlinear Schrödinger (soliton)',blurb:'sech envelope keeps shape during propagation.'},es:{title:'Schrödinger no lineal (solitón)',blurb:'Envoltura sech mantiene forma.'}},
  'heat-2d':{en:{title:'2D heat conduction',blurb:'Multiple heat sources combine and diffuse.'},es:{title:'Conducción 2D',blurb:'Múltiples fuentes calientes se difunden.'}},
  'wave-circle':{en:{title:'Circular pond ripples',blurb:'Circular boundary; centre disturbance ⇒ concentric ripples + reflection.'},es:{title:'Ondas en estanque circular',blurb:'Frontera circular; perturbación central → ondas + reflexión.'}},
  biharmonic:{en:{title:'Biharmonic equation (plate modes)',blurb:'Bending eigenmodes of a rectangular plate.'},es:{title:'Ecuación biarmónica',blurb:'Modos de flexión de placa rectangular.'}},
  'transport-equation':{en:{title:'Transport equation (variable speed)',blurb:'Advection with spatially varying velocity.'},es:{title:'Ecuación de transporte',blurb:'Advección con velocidad variable.'}},
  'eikonal-equation':{en:{title:'Eikonal equation',blurb:'Distance field to obstacles (fast-marching approximation).'},es:{title:'Ecuación eikonal',blurb:'Campo de distancia (aproximación fast-marching).'}},
  'maxwell-em':{en:{title:'Maxwell EM travelling wave (1D Yee)',blurb:'EM wave propagates at c through vacuum.'},es:{title:'Onda EM de Maxwell (1D Yee)',blurb:'Onda EM se propaga a velocidad c.'}},
  'stress-strain':{en:{title:'Stress-strain (elastoplastic)',blurb:'Elastic + plastic plateau + hardening segment.'},es:{title:'Tensión-deformación',blurb:'Elástico + plataforma plástica + endurecimiento.'}},
  'cahn-hilliard':{en:{title:'Cahn-Hilliard (phase separation)',blurb:'Phase-field separation dynamics.'},es:{title:'Cahn-Hilliard (separación de fases)',blurb:'Dinámica de separación.'}},
  'kdv-soliton':{en:{title:'KdV equation (solitary wave)',blurb:'sech² shaped soliton.'},es:{title:'Ecuación KdV (solitón)',blurb:'Solitón con forma sech².'}},
  'membrane-rect':{en:{title:'Rectangular membrane modes (m, n)',blurb:'Like helmholtz-2d but aspect ratio adjustable.'},es:{title:'Modos de membrana rectangular',blurb:'Como helmholtz-2d con relación de aspecto ajustable.'}},
  'fokker-planck':{en:{title:'Fokker-Planck (OU process)',blurb:'OU process density evolves to a Gaussian steady state.'},es:{title:'Fokker-Planck (OU)',blurb:'Densidad OU evoluciona a estado estacionario gaussiano.'}},
  'string-pluck':{en:{title:'Plucked string',blurb:'Triangular initial profile splits into two opposite waves.'},es:{title:'Cuerda pulsada',blurb:'Perfil triangular se divide en dos ondas opuestas.'}},
  'heat-bar':{en:{title:'Heat-bar analytic solution (Fourier expansion)',blurb:'Square-wave initial value at time t.'},es:{title:'Barra térmica (Fourier)',blurb:'Solución analítica para valor inicial cuadrado.'}},
  'poisson-3d':{en:{title:'Potential surface (2D slice)',blurb:'Potential of two point charges.'},es:{title:'Superficie de potencial',blurb:'Potencial de dos cargas puntuales.'}},
  // probability +14
  'uniform-dist':{en:{title:'Uniform distribution',blurb:'Rectangular PDF.'},es:{title:'Distribución uniforme',blurb:'PDF rectangular.'}},
  'exponential-dist':{en:{title:'Exponential distribution',blurb:'Memoryless; larger λ decays faster.'},es:{title:'Distribución exponencial',blurb:'Sin memoria; mayor λ decae más rápido.'}},
  'binomial-dist':{en:{title:'Binomial distribution',blurb:'Probability of k successes in n trials.'},es:{title:'Distribución binomial',blurb:'k éxitos en n intentos.'}},
  bayes:{en:{title:"Bayes' theorem (medical test)",blurb:'Sensitivity / specificity / prevalence → PPV.'},es:{title:'Bayes (prueba médica)',blurb:'Sensibilidad/especificidad/prevalencia → VPP.'}},
  'galton-board':{en:{title:'Galton board',blurb:'Balls fall left/right; histogram approximates Gaussian.'},es:{title:'Tablero de Galton',blurb:'Caen izquierda/derecha; histograma cuasi gaussiano.'}},
  'buffon-needle':{en:{title:'Buffon needle',blurb:'Needle-crossing probability → estimate of π.'},es:{title:'Aguja de Buffon',blurb:'Probabilidad de cruce → estimación de π.'}},
  'beta-dist':{en:{title:'Beta distribution',blurb:'Conjugate of binomial. α=β=1 is uniform.'},es:{title:'Distribución Beta',blurb:'Conjugada de binomial. α=β=1 uniforme.'}},
  'normal-pdf':{en:{title:'Normal PDF',blurb:'Adjust μ/σ for shift and spread.'},es:{title:'PDF normal',blurb:'Ajusta μ/σ para desplazamiento y dispersión.'}},
  'poisson-pmf':{en:{title:'Poisson PMF',blurb:'Probability of k events (rare-event limit).'},es:{title:'PMF de Poisson',blurb:'Probabilidad de k eventos.'}},
  'geometric-dist':{en:{title:'Geometric distribution',blurb:'Trials until the first success.'},es:{title:'Distribución geométrica',blurb:'Intentos hasta el primer éxito.'}},
  'student-t':{en:{title:'Student-t distribution',blurb:'ν → ∞ tends to a standard normal.'},es:{title:'Distribución t de Student',blurb:'ν → ∞ tiende a normal estándar.'}},
  'chi-squared':{en:{title:'Chi-squared distribution χ²',blurb:'Sum of squared standard normals.'},es:{title:'Distribución χ²',blurb:'Suma de normales estándar al cuadrado.'}},
  'coupon-collector':{en:{title:'Coupon collector',blurb:'Mean trials to collect all n cards.'},es:{title:'Coleccionista de cupones',blurb:'Intentos medios para coleccionar n cartas.'}},
  'birthday-paradox':{en:{title:'Birthday paradox',blurb:'~50% chance with 23 people.'},es:{title:'Paradoja del cumpleaños',blurb:'~50% con 23 personas.'}},
  'montecarlo-pi':{en:{title:'Monte Carlo π estimation',blurb:'Random points inside unit circle × 4.'},es:{title:'Estimación de π Monte Carlo',blurb:'Puntos aleatorios en el círculo × 4.'}},
  'regression-confidence':{en:{title:'Regression 95% confidence band',blurb:'OLS fit + 95% confidence band.'},es:{title:'Banda 95% de confianza',blurb:'Ajuste OLS + banda 95%.'}},
  'hypothesis-test':{en:{title:'Hypothesis test (α/β/power)',blurb:'Overlap of H₀ and H₁ defines α/β errors.'},es:{title:'Test de hipótesis',blurb:'Solapamiento H₀/H₁ define errores α/β.'}},
  'copula-2d':{en:{title:'Gaussian copula',blurb:'Correlation ρ shapes the joint distribution.'},es:{title:'Copula gaussiana',blurb:'ρ define la distribución conjunta.'}},
  'qq-plot':{en:{title:'Q-Q plot',blurb:'Sample quantiles vs normal quantiles.'},es:{title:'Gráfico Q-Q',blurb:'Cuantiles muestrales vs normales.'}},
  dirichlet:{en:{title:'Dirichlet distribution (simplex)',blurb:'Three-dim Dirichlet samples on triangle simplex.'},es:{title:'Distribución de Dirichlet',blurb:'Muestras en simplex triangular.'}},
  'birthday-collision':{en:{title:'Birthday collision simulation',blurb:'Random draws from 1..N until first repeat.'},es:{title:'Simulación de colisión de cumpleaños',blurb:'Sorteos hasta la primera repetición.'}},
  'cumulative-cdf':{en:{title:'Normal CDF',blurb:'Cumulative distribution S-shape.'},es:{title:'CDF normal',blurb:'Distribución acumulada en forma de S.'}},
  // fractal +14
  'julia-c-explorer':{en:{title:'Julia c explorer',blurb:'Tweak c finely to watch Julia mutate.'},es:{title:'Explorador Julia c',blurb:'Ajusta c finamente para ver mutaciones.'}},
  tricorn:{en:{title:'Tricorn (Mandelbar)',blurb:'Replace z with conjugate; symmetry breaks.'},es:{title:'Tricorn (Mandelbar)',blurb:'Reemplaza z con conjugado; rompe simetría.'}},
  buddhabrot:{en:{title:'Buddhabrot',blurb:'Density of escaping Mandelbrot orbits.'},es:{title:'Buddhabrot',blurb:'Densidad de órbitas escapadas de Mandelbrot.'}},
  'box-counting-dim':{en:{title:'Box-counting dimension',blurb:'Box-counting dimension of Koch snowflake ≈ log4/log3.'},es:{title:'Dimensión por cajas',blurb:'Dimensión del copo de Koch ≈ log4/log3.'}},
  'menger-sponge-2d':{en:{title:'Menger cube (2D projection)',blurb:'Each cell split into 27, remove 7 → 20 remain.'},es:{title:'Cubo de Menger (2D)',blurb:'Cada celda en 27, elimina 7 → quedan 20.'}},
  'peano-curve':{en:{title:'Peano space-filling curve (Hilbert)',blurb:'Hilbert curve recursively fills the square.'},es:{title:'Curva de Peano (Hilbert)',blurb:'Curva de Hilbert llena el cuadrado.'}},
  'hilbert-3d':{en:{title:'3D Hilbert curve',blurb:'Recursively fills the cube.'},es:{title:'Curva de Hilbert 3D',blurb:'Llena el cubo recursivamente.'}},
  'levy-flight':{en:{title:'Lévy flight',blurb:'Power-law step length → long jumps + clustering.'},es:{title:'Vuelo de Lévy',blurb:'Longitud de paso de ley de potencias → saltos largos.'}},
  'koch-anti':{en:{title:'Anti-Koch (inward)',blurb:'Indent each segment instead of out → reverse Koch.'},es:{title:'Anti-Koch (hacia adentro)',blurb:'Hundir cada segmento → Koch inverso.'}},
  'box-fractal':{en:{title:'Box fractal (5 corners)',blurb:'Keep four corners + center, recurse.'},es:{title:'Fractal de caja (5 esquinas)',blurb:'Mantén 4 esquinas + centro, recursión.'}},
  'perlin-noise':{en:{title:'Fractional noise (fBm)',blurb:'Sum of multiple-frequency noises = fBm.'},es:{title:'Ruido fraccional (fBm)',blurb:'Suma de ruidos multi-frecuencia.'}},
  'diff-limited-aggregation':{en:{title:'Diffusion-limited aggregation (DLA)',blurb:'Random walkers stick to a seed → dendritic growth.'},es:{title:'Agregación limitada por difusión',blurb:'Caminantes aleatorios se pegan al núcleo → crecimiento dendrítico.'}},
  'julia-anim':{en:{title:'Julia rotation animation',blurb:'c moves on the unit circle; Julia continuously deforms.'},es:{title:'Animación de Julia rotando',blurb:'c se mueve por el círculo; Julia se deforma.'}},
  'phoenix-fractal':{en:{title:'Phoenix fractal',blurb:'Adds a feedback term p from the previous step.'},es:{title:'Fractal Fénix',blurb:'Añade un término de retroalimentación p.'}},
  // topology +14
  'spherical-harmonics':{en:{title:'Spherical harmonics Y_{l,m}',blurb:'Quantum atomic orbital shapes.'},es:{title:'Armónicos esféricos Y_{l,m}',blurb:'Formas de orbitales atómicos cuánticos.'}},
  'projective-plane':{en:{title:'Real projective plane (Boy surface)',blurb:'Non-orientable surface without boundary, immersed in R³.'},es:{title:'Plano proyectivo real (superficie de Boy)',blurb:'Superficie no orientable sin frontera, sumergida en R³.'}},
  superegg:{en:{title:'Super-egg',blurb:'n=2 sphere, n→∞ cube.'},es:{title:'Super-huevo',blurb:'n=2 esfera, n→∞ cubo.'}},
  'cone-3d':{en:{title:'Cone',blurb:'Height parameter t × unit circle.'},es:{title:'Cono',blurb:'Parámetro altura t × círculo unidad.'}},
  paraboloid:{en:{title:'Elliptic paraboloid z = x² + y²',blurb:'a=b rotational; a≠b elliptical.'},es:{title:'Paraboloide elíptico',blurb:'a=b rotacional; a≠b elíptico.'}},
  helicoid:{en:{title:'Helicoid',blurb:'Minimal surface, isometric to catenoid.'},es:{title:'Helicoide',blurb:'Superficie mínima, isométrica a catenoide.'}},
  'bohemian-dome':{en:{title:'Bohemian dome',blurb:'Sweep surface of two orthogonal circles.'},es:{title:'Cúpula de Bohemia',blurb:'Barrido de dos círculos ortogonales.'}},
  'whitney-umbrella':{en:{title:'Whitney umbrella',blurb:'Surface with self-intersecting singularity.'},es:{title:'Paraguas de Whitney',blurb:'Superficie con singularidad de auto-intersección.'}},
  'breather-surface':{en:{title:'Breather surface',blurb:'Surface from breather solution of sine-Gordon.'},es:{title:'Superficie breather',blurb:'Solución breather de seno-Gordon.'}},
  'orientability-test':{en:{title:'Orientability test (Möbius ant)',blurb:'Ant walks the Möbius strip and returns flipped.'},es:{title:'Prueba de orientabilidad',blurb:'Hormiga en cinta de Möbius vuelve invertida.'}},
  'euler-characteristic':{en:{title:'Euler characteristic V−E+F',blurb:'Convex polyhedra χ=2; torus χ=0; genus g surface χ=2−2g.'},es:{title:'Característica de Euler',blurb:'Poliedro convexo χ=2; toro χ=0; género g χ=2−2g.'}},
  'conway-knots':{en:{title:'Knot family (torus knots)',blurb:'p, q coprime → distinct knot types.'},es:{title:'Familia de nudos toroidales',blurb:'p, q coprimos → tipos distintos.'}},
  'genus-surface':{en:{title:'Genus surface (g-torus)',blurb:'g holes glued = genus-g surface.'},es:{title:'Superficie de género',blurb:'g agujeros pegados = superficie de género g.'}},
  'cross-cap':{en:{title:'Cross-cap (RP² immersion)',blurb:'Another way to immerse RP² into R³.'},es:{title:'Tapón cruzado (inmersión RP²)',blurb:'Otra forma de sumergir RP² en R³.'}},
  // numbertheory +14
  'euclid-algorithm':{en:{title:'Euclidean algorithm visualization',blurb:'Recursive square-cut of a rectangle gives the gcd.'},es:{title:'Algoritmo de Euclides',blurb:'Cortes cuadrados recursivos dan el mcd.'}},
  'totient-mod':{en:{title:'Numbers coprime to N (mod N)',blurb:'Highlight on the unit circle the integers coprime to N.'},es:{title:'Coprimos con N',blurb:'Resaltar en el círculo los coprimos con N.'}},
  'prime-counting':{en:{title:'π(n) vs n/ln n',blurb:'Prime-counting function vs prime-number theorem approximation.'},es:{title:'π(n) vs n/ln n',blurb:'Conteo de primos vs teorema de los números primos.'}},
  'twin-primes':{en:{title:'Twin-prime distribution',blurb:'Density of prime pairs differing by 2.'},es:{title:'Distribución de primos gemelos',blurb:'Densidad de pares de primos que difieren en 2.'}},
  'mobius-mu':{en:{title:'Möbius μ function',blurb:'Square factor → 0; even / odd prime factors → ±1.'},es:{title:'Función Möbius μ',blurb:'Factor cuadrado → 0; factores primos par/impar → ±1.'}},
  'digital-root':{en:{title:'Digital root (mod 9)',blurb:'Pattern of digital roots for 1..N.'},es:{title:'Raíz digital (mod 9)',blurb:'Patrón de raíces digitales 1..N.'}},
  'perfect-numbers':{en:{title:'Perfect / deficient / abundant',blurb:'σ(n)=2n perfect; <2n deficient; >2n abundant.'},es:{title:'Perfectos / deficientes / abundantes',blurb:'σ(n)=2n perfecto; <2n deficiente; >2n abundante.'}},
  'triangular-numbers':{en:{title:'Triangular numbers T_n = n(n+1)/2',blurb:'1, 3, 6, 10, ... arranged geometrically.'},es:{title:'Números triangulares',blurb:'1, 3, 6, 10, ... dispuestos geométricamente.'}},
  'pythagorean-triples':{en:{title:'Pythagorean triples',blurb:'Distribution of primitive triples (a, b, c) on the plane.'},es:{title:'Tripletas pitagóricas',blurb:'Distribución de tripletas primitivas (a, b, c).'}},
  'recaman-sequence':{en:{title:'Recamán sequence',blurb:'Connect adjacent terms with semi-circles → striking spiral.'},es:{title:'Sucesión de Recamán',blurb:'Conecta términos con semicírculos → espirales.'}},
  'fibonacci-spiral':{en:{title:'Fibonacci spiral',blurb:'Stack consecutive Fibonacci squares → golden spiral.'},es:{title:'Espiral de Fibonacci',blurb:'Apilar cuadrados Fibonacci → espiral áurea.'}},
  'mersenne-primes':{en:{title:'Mersenne primes 2^p − 1',blurb:'p prime ⇏ M_p prime, but every M_p prime requires p prime.'},es:{title:'Primos de Mersenne 2^p − 1',blurb:'p primo no implica M_p primo, pero M_p primo requiere p primo.'}},
  'totient-summatory':{en:{title:'Φ(n) = Σ φ(k)',blurb:'Totient summatory ~ 3n²/π².'},es:{title:'Φ(n) = Σ φ(k)',blurb:'Suma de totientes ~ 3n²/π².'}},
  'sum-square-roots':{en:{title:'Σ 1/√n vs 2√n',blurb:'Partial sums vs asymptote.'},es:{title:'Σ 1/√n vs 2√n',blurb:'Sumas parciales vs asíntota.'}},
  // signals +14
  dct:{en:{title:'DCT-II coefficients',blurb:'Discrete cosine transform used by JPEG.'},es:{title:'Coeficientes DCT-II',blurb:'Transformada coseno usada por JPEG.'}},
  'zoom-fft':{en:{title:'Spectral zoom (local FFT)',blurb:'Resolve two close frequencies.'},es:{title:'Zoom espectral',blurb:'Distingue dos frecuencias cercanas.'}},
  'group-delay':{en:{title:'Group delay (FIR filter)',blurb:'Linear-phase filters have constant group delay.'},es:{title:'Retardo de grupo (filtro FIR)',blurb:'Filtros de fase lineal tienen retardo constante.'}},
  'poles-zeros':{en:{title:'Pole-zero plot (z-plane)',blurb:'Poles inside the unit circle → stable.'},es:{title:'Polos y ceros (plano z)',blurb:'Polos dentro del círculo → estable.'}},
  'hilbert-transform':{en:{title:'Hilbert transform / analytic signal',blurb:'90° phase shift → quadrature component.'},es:{title:'Transformada de Hilbert',blurb:'Cambio de fase 90° → componente en cuadratura.'}},
  cepstrum:{en:{title:'Cepstrum',blurb:'Used for echo / pitch detection.'},es:{title:'Cepstrum',blurb:'Para detección de eco / tono.'}},
  correlogram:{en:{title:'Autocorrelation function',blurb:'Periodic signals have periodic autocorrelation.'},es:{title:'Autocorrelación',blurb:'Señales periódicas tienen autocorrelación periódica.'}},
  biquad:{en:{title:'Biquad filter (peaking)',blurb:'Tune the centre frequency and Q.'},es:{title:'Filtro biquad',blurb:'Ajusta frecuencia central y Q.'}},
  'wavelet-mexican':{en:{title:'Mexican-hat wavelet',blurb:'Second derivative of a Gaussian.'},es:{title:'Wavelet sombrero mexicano',blurb:'Segunda derivada de una gaussiana.'}},
  'morlet-wavelet':{en:{title:'Morlet wavelet (real part)',blurb:'Gaussian envelope × oscillation.'},es:{title:'Wavelet de Morlet',blurb:'Envoltura gaussiana × oscilación.'}},
  upsampling:{en:{title:'Upsampling and decimation (L↑M↓)',blurb:'L-fold interpolation + low-pass filter.'},es:{title:'Sobre/sub-muestreo',blurb:'Interpolación L + filtro paso bajo.'}},
  decibel:{en:{title:'Decibel scale',blurb:'Convert amplitude ratios to dB.'},es:{title:'Escala dB',blurb:'Conversión amplitud a dB.'}},
  'zero-crossing':{en:{title:'Zero-crossing rate',blurb:'Higher-frequency signals cross zero more often.'},es:{title:'Tasa de cruces por cero',blurb:'Señales de alta frecuencia cruzan más a menudo.'}},
  'notch-filter':{en:{title:'Notch filter response',blurb:'Removes a specific frequency component.'},es:{title:'Respuesta filtro notch',blurb:'Elimina una frecuencia específica.'}},
  'aliasing-2d':{en:{title:'2D moiré pattern',blurb:'Two fine-frequency grids overlay → moiré.'},es:{title:'Patrón Moiré 2D',blurb:'Dos rejillas finas → patrón moiré.'}},
  // optimization +14
  'rosenbrock-3d':{en:{title:'Rosenbrock banana',blurb:'Classic optimization test function.'},es:{title:'Banana de Rosenbrock',blurb:'Función de prueba clásica.'}},
  himmelblau:{en:{title:'Himmelblau function',blurb:'Four equal-height local minima.'},es:{title:'Función de Himmelblau',blurb:'Cuatro mínimos locales del mismo valor.'}},
  ackley:{en:{title:'Ackley function',blurb:'Multi-modal test landscape.'},es:{title:'Función de Ackley',blurb:'Paisaje multimodal de prueba.'}},
  rastrigin:{en:{title:'Rastrigin function',blurb:'Grid-like local minima.'},es:{title:'Función de Rastrigin',blurb:'Mínimos locales en cuadrícula.'}},
  'penalty-function':{en:{title:'Penalty function method',blurb:'Larger μ → closer to constrained minimum.'},es:{title:'Método de penalización',blurb:'μ mayor → más cerca del mínimo restringido.'}},
  'lp-2d':{en:{title:'2D linear programming',blurb:'Cost vector c picks the optimal vertex.'},es:{title:'Programación lineal 2D',blurb:'El vector c elige el vértice óptimo.'}},
  'duality-gap':{en:{title:'Weak / strong duality',blurb:'Convex problems with Slater have zero gap.'},es:{title:'Brecha dual',blurb:'Convexos con Slater tienen brecha cero.'}},
  'admm-2d':{en:{title:'ADMM (LASSO 2D)',blurb:'Visualize the soft-threshold sub-step.'},es:{title:'ADMM (LASSO 2D)',blurb:'Sub-paso de soft-threshold.'}},
  'secant-method':{en:{title:'Secant method',blurb:'Derivative-free version of Newton.'},es:{title:'Método de secante',blurb:'Versión sin derivada de Newton.'}},
  'golden-section':{en:{title:'Golden-section search',blurb:'Minimize a unimodal function on an interval.'},es:{title:'Búsqueda áurea',blurb:'Minimizar función unimodal.'}},
  'proximal-gradient':{en:{title:'Proximal gradient (ISTA)',blurb:'Smooth + non-smooth splitting.'},es:{title:'Gradiente proximal (ISTA)',blurb:'División suave + no suave.'}},
  'trust-region':{en:{title:'Trust region method',blurb:'Trust the quadratic model within a Δ-radius ball.'},es:{title:'Método de región de confianza',blurb:'Confía en el modelo cuadrático dentro del radio Δ.'}},
  'sgd-noise':{en:{title:'SGD noise trajectory',blurb:'Stochastic gradient adds noise → jagged descent.'},es:{title:'Trayectoria SGD ruidosa',blurb:'Gradiente estocástico añade ruido.'}},
  'lasso-regression':{en:{title:'LASSO regression (L1)',blurb:'L1 penalty produces sparse coefficients.'},es:{title:'Regresión LASSO (L1)',blurb:'Penalización L1 → coeficientes dispersos.'}},
  // vectorfield +14
  'uniform-flow':{en:{title:'Uniform flow',blurb:'Constant-direction flow field.'},es:{title:'Flujo uniforme',blurb:'Campo de flujo de dirección constante.'}},
  'sink-source':{en:{title:'Sink / source (point)',blurb:'k > 0 source; k < 0 sink.'},es:{title:'Sumidero / fuente',blurb:'k > 0 fuente; k < 0 sumidero.'}},
  'vortex-line':{en:{title:'Vortex line',blurb:'Single vortex of strength Γ.'},es:{title:'Línea de vórtice',blurb:'Vórtice único de intensidad Γ.'}},
  'dipole-flow':{en:{title:'Fluid dipole',blurb:'Velocity field of a potential dipole.'},es:{title:'Dipolo fluido',blurb:'Campo de velocidad de dipolo potencial.'}},
  'uniform-plus-vortex':{en:{title:'Uniform flow + vortex (Magnus)',blurb:'Basic Magnus-effect flow field.'},es:{title:'Flujo uniforme + vórtice (Magnus)',blurb:'Campo básico del efecto Magnus.'}},
  'karman-vortex':{en:{title:'Kármán vortex street',blurb:'Alternating positive / negative vortices.'},es:{title:'Calle de vórtices de Kármán',blurb:'Vórtices alternados positivos / negativos.'}},
  'saddle-flow':{en:{title:'Saddle flow',blurb:'Stretching + compression = saddle.'},es:{title:'Flujo silla',blurb:'Estiramiento + compresión = silla.'}},
  'abc-flow':{en:{title:'ABC (Arnold-Beltrami-Childress) 3D flow',blurb:'3D incompressible inviscid chaotic flow.'},es:{title:'Flujo ABC 3D',blurb:'Flujo 3D incompresible no viscoso caótico.'}},
  'normal-curvature':{en:{title:'Normal curvature (Monge surface)',blurb:'Normal curvature distribution on a Monge patch.'},es:{title:'Curvatura normal',blurb:'Distribución de curvatura normal.'}},
  'flow-shear':{en:{title:'Shear flow (Couette)',blurb:'Linear velocity profile between two walls.'},es:{title:'Flujo cortante (Couette)',blurb:'Perfil de velocidad lineal entre dos paredes.'}},
  'strain-rate':{en:{title:'Pure-strain field',blurb:'Symmetric matrix → stretch / compress principal axes.'},es:{title:'Campo de deformación pura',blurb:'Matriz simétrica → ejes principales de estiramiento.'}},
  'vfield-from-potential':{en:{title:'Gradient field of potential',blurb:'Gradient of φ = sin(ax)cos(by).'},es:{title:'Campo gradiente del potencial',blurb:'Gradiente de φ = sin(ax)cos(by).'}},
  'curl-3d':{en:{title:'3D curl field',blurb:'Curl of F = (0, x, 0) visualized.'},es:{title:'Rotacional 3D',blurb:'Rotacional de F = (0, x, 0).'}},
  'parallel-transport':{en:{title:'Parallel transport on a sphere',blurb:'Vector stays parallel along a great circle → holonomy.'},es:{title:'Transporte paralelo en esfera',blurb:'Vector paralelo a lo largo de un círculo máximo → holonomía.'}},
  // cellular +14
  anneal:{en:{title:'Annealing CA (B4678/S35678)',blurb:'Annealing rule that stabilizes large blocks.'},es:{title:'CA de recocido (B4678/S35678)',blurb:'Regla de recocido que estabiliza bloques grandes.'}},
  replicator:{en:{title:'Replicator (B1357/S1357)',blurb:'Every pattern eventually replicates and fills.'},es:{title:'Replicador (B1357/S1357)',blurb:'Cada patrón se replica y llena el espacio.'}},
  'hpp-lattice-gas':{en:{title:'HPP lattice gas',blurb:'4-direction particle collisions on a lattice → fluid emerges.'},es:{title:'Gas de red HPP',blurb:'Colisiones de partículas en 4 direcciones → emerge fluido.'}},
  'turing-pattern':{en:{title:'Turing pattern (animal coat)',blurb:'Activator-inhibitor RD → spots / stripes.'},es:{title:'Patrón de Turing',blurb:'Reacción-difusión activador-inhibidor.'}},
  'conway-glider':{en:{title:'Conway glider',blurb:'A 5-cell pattern that translates one cell every four steps.'},es:{title:'Planeador de Conway',blurb:'Patrón de 5 células que se mueve una posición cada 4 pasos.'}},
  'snowflake-ca':{en:{title:'Snowflake CA (B1/S0..8)',blurb:'Cells turn on as soon as they have one neighbour → snowflake-like fractal.'},es:{title:'CA copo de nieve',blurb:'Una célula nace al tener un vecino → fractal tipo copo de nieve.'}},
  'sandpile-2color':{en:{title:'Two-source sandpile',blurb:'Two sources interfere as sand topples.'},es:{title:'Pila de arena de dos fuentes',blurb:'Dos fuentes interfieren al volcarse la arena.'}},
  'turing-stripes':{en:{title:'Turing stripes (feed/kill)',blurb:'Tune feed/kill for stripes vs spots.'},es:{title:'Rayas de Turing',blurb:'Ajusta feed/kill para rayas o puntos.'}},
  totalistic:{en:{title:'1D totalistic CA',blurb:'Rule depends on neighborhood sum.'},es:{title:'CA totalista 1D',blurb:'La regla depende de la suma del vecindario.'}},
  'cyclic-ca':{en:{title:'Cyclic CA (Greenberg-Hastings)',blurb:'Multi-color cycle → spiral waves.'},es:{title:'CA cíclico',blurb:'Ciclo multicolor → ondas espirales.'}},
  'voter-model':{en:{title:'Voter model',blurb:'Each cell copies a random neighbour → large blocks of one opinion.'},es:{title:'Modelo de votantes',blurb:'Cada célula copia un vecino aleatorio.'}},
  'contact-process':{en:{title:'Contact process (epidemic threshold)',blurb:'Above critical λ infection persists.'},es:{title:'Proceso de contacto',blurb:'Por encima del λ crítico la infección persiste.'}},
  'falling-sand':{en:{title:'Falling sand',blurb:'Gravity-driven sand simulation.'},es:{title:'Arena cayendo',blurb:'Simulación de arena con gravedad.'}},
  'turing-machine':{en:{title:'Busy beaver (3-state Turing machine)',blurb:'3-state Turing machine execution trace.'},es:{title:'Castor laborioso',blurb:'Traza de máquina de Turing de 3 estados.'}},
});

Object.assign(FORMULA_I18N, {
  'function-lab':{
    en:{title:'Function Lab (custom expression)',blurb:'Type any JS math expression for live plotting. Supports sin/cos/exp/log/sqrt and constants pi, e, tau, phi.'},
    es:{title:'Laboratorio de funciones',blurb:'Escribe cualquier expresión matemática para graficar en vivo. Soporta sin/cos/exp/log/sqrt y constantes pi, e, tau, phi.'},
  },
  'parametric-lab':{
    en:{title:'Parametric curve lab',blurb:'Custom parametric curves in t (e.g. (cos(3t), sin(2t))).'},
    es:{title:'Laboratorio de curvas paramétricas',blurb:'Curvas paramétricas personalizadas en t.'},
  },
  'polar-lab':{
    en:{title:'Polar curve lab',blurb:'Custom polar functions (e.g. 1+cos(t), 2*sin(5t)).'},
    es:{title:'Laboratorio de curvas polares',blurb:'Funciones polares personalizadas.'},
  },
});

Object.assign(FORMULA_I18N, {
  'actin-filament': { en: { title: "Actin filament (F-actin)", blurb: "Two G-actin chains twisted into a thread." } },
  'allee-effect': { en: { title: "Allee effect", blurb: "Population needs threshold density to grow." } },
  'allometric-scaling': { en: { title: "Allometric scaling", blurb: "Y = aM^b, e.g. Kleiber 3/4 law." } },
  'alpha-helix': { en: { title: "Alpha helix", blurb: "Right-handed protein helix, i\u2192i+4 H-bonds, 3.6 res/turn." } },
  'arrhenius-rate': { en: { title: "Arrhenius rate (bio)", blurb: "Reaction rate vs temperature." } },
  'bacteriophage': { en: { title: "Bacteriophage T4", blurb: "Icosahedral head + tail + fibers." } },
  'beta-barrel': { en: { title: "Beta barrel", blurb: "Closed parallel \u03b2-sheet (GFP, porins)." } },
  'beta-sheet': { en: { title: "Beta pleated sheet", blurb: "Inter-strand H-bonded zig-zag plane." } },
  'blast-evalue': { en: { title: "BLAST E-value", blurb: "Alignment significance vs score." } },
  'boltzmann-activation': { en: { title: "Boltzmann channel activation", blurb: "Voltage-gated channel open probability." } },
  'boltzmann-folding': { en: { title: "Protein folding fraction", blurb: "Sigmoid in T from \u0394H and Tm." } },
  'coalescent-time': { en: { title: "Coalescent time distribution", blurb: "MRCA time for k lineages." } },
  'codon-third-position': { en: { title: "3rd codon position GC", blurb: "Near-neutral codon bias at silent site." } },
  'competitive-inhibition': { en: { title: "Competitive inhibition", blurb: "Inhibitor raises apparent Km." } },
  'dna-double-helix': { en: { title: "DNA double helix (B-form)", blurb: "Two strands, 10.5 bp/turn, 3.4 \u00c5 rise." } },
  'dna-melting': { en: { title: "DNA melting curve", blurb: "Double strand denaturation sigmoid." } },
  'dna-z-form': { en: { title: "DNA Z-form (left-handed)", blurb: "12 bp/turn left-handed under high salt + GC repeats." } },
  'eadie-hofstee': { en: { title: "Eadie-Hofstee plot", blurb: "v vs v/S linearization." } },
  'einstein-diffusion': { en: { title: "Einstein diffusion", blurb: "Mean-square displacement linear in t." } },
  'emax-model': { en: { title: "Emax dose-response", blurb: "Effect saturates with dose." } },
  'eukaryotic-cell': { en: { title: "Eukaryotic cell (cutaway)", blurb: "Membrane, nucleus, ER, Golgi, mitochondria." } },
  'eyring-equation': { en: { title: "Eyring equation", blurb: "Transition-state theory rate." } },
  'ficks-law': { en: { title: "Fick's law", blurb: "Flux \u221d concentration gradient." } },
  'freely-jointed-chain': { en: { title: "Freely-jointed chain", blurb: "Random-coil polymer mean-square length." } },
  'fst-curve': { en: { title: "Fst population divergence", blurb: "Drift-driven divergence over generations." } },
  'galton-watson-extinction': { en: { title: "Galton-Watson extinction", blurb: "Branching process extinction probability." } },
  'gc-content-window': { en: { title: "GC content sliding window", blurb: "Demo of a GC island sigmoid." } },
  'genetic-drift-binom': { en: { title: "Genetic drift variance", blurb: "Variance grows over generations in finite N." } },
  'goldman-eq': { en: { title: "Goldman-Hodgkin-Katz", blurb: "Resting membrane potential, multi-ion." } },
  'gompertz-growth': { en: { title: "Gompertz curve", blurb: "Tumour/cell growth sigmoid." } },
  'half-life-curve': { en: { title: "Half-life decay", blurb: "C halves every t\u00bd." } },
  'hardy-weinberg': { en: { title: "Hardy-Weinberg equilibrium", blurb: "p\u00b2 + 2pq + q\u00b2 = 1 across allele freq p." } },
  'hill-equation': { en: { title: "Hill equation", blurb: "Cooperative ligand binding sigmoid." } },
  'holling-type-ii': { en: { title: "Holling type II", blurb: "Predator handling-time saturation." } },
  'holling-type-iii': { en: { title: "Holling type III", blurb: "Sigmoid predation (learning/switching)." } },
  'jukes-cantor-distance': { en: { title: "Jukes-Cantor distance", blurb: "Multi-hit corrected evolutionary distance." } },
  'kimura-fixation': { en: { title: "Kimura fixation probability", blurb: "Selected allele fixation in finite population." } },
  'kosambi-mapping': { en: { title: "Kosambi map distance", blurb: "Interference-corrected genetic distance." } },
  'lineweaver-burk': { en: { title: "Lineweaver-Burk plot", blurb: "Double-reciprocal linearization of Michaelis-Menten." } },
  'lipid-bilayer': { en: { title: "Lipid bilayer", blurb: "Heads outward, hydrophobic tails core." } },
  'logistic-growth': { en: { title: "Logistic growth", blurb: "S-curve with carrying capacity K." } },
  'micelle-3d': { en: { title: "Micelle", blurb: "Spherical surfactant aggregate." } },
  'microtubule': { en: { title: "Microtubule", blurb: "Hollow tube of 13 \u03b1\u03b2-tubulin protofilaments." } },
  'mitochondrion': { en: { title: "Mitochondrion", blurb: "Outer + inner cristae membrane producing ATP." } },
  'monod-growth': { en: { title: "Monod growth", blurb: "Microbial growth rate vs substrate." } },
  'mutation-selection-balance': { en: { title: "Mutation-selection balance", blurb: "Equilibrium frequency of deleterious allele." } },
  'mwc-allosteric': { en: { title: "MWC allosteric model", blurb: "Concerted allosteric transition Monod-Wyman-Changeux." } },
  'nernst-equation': { en: { title: "Nernst equation", blurb: "Ion equilibrium potential." } },
  'neutral-substitution-rate': { en: { title: "Neutral substitution rate", blurb: "Kimura: substitution rate equals mutation rate." } },
  'noncompetitive-inhibition': { en: { title: "Non-competitive inhibition", blurb: "Inhibitor lowers apparent Vmax." } },
  'one-compartment-iv': { en: { title: "One-compartment IV", blurb: "Exponential decay of plasma drug." } },
  'one-compartment-oral': { en: { title: "One-compartment oral", blurb: "Absorption + elimination biexponential." } },
  'protein-random-fold': { en: { title: "Random-fold polypeptide", blurb: "Self-avoiding walk fold sketch." } },
  'recombination-haldane': { en: { title: "Haldane map distance", blurb: "cM from recombination rate r." } },
  'ribosome-3d': { en: { title: "Ribosome (50S + 30S)", blurb: "Two-subunit protein-synthesis machine." } },
  'rna-hairpin': { en: { title: "RNA hairpin (stem-loop)", blurb: "Double-stranded stem with single-stranded loop." } },
  'selection-coefficient': { en: { title: "One-generation \u0394p under selection", blurb: "Allele frequency change per generation." } },
  'sigmoid-emax': { en: { title: "Sigmoid Emax (Hill)", blurb: "Steep dose-response with Hill exponent." } },
  'stokes-einstein': { en: { title: "Stokes-Einstein", blurb: "Diffusion coefficient vs particle radius." } },
  'supercoiling-energy': { en: { title: "DNA supercoiling energy", blurb: "Quadratic in superhelical density." } },
  'uncompetitive-inhibition': { en: { title: "Uncompetitive inhibition", blurb: "Inhibitor lowers Vmax and Km." } },
  'virus-capsid': { en: { title: "Virus capsid (icosahedral)", blurb: "Protein subunits in T-symmetric arrangement." } },
  'von-bertalanffy': { en: { title: "von Bertalanffy growth", blurb: "Asymptotic growth: fish, etc." } },
  'wormlike-chain': { en: { title: "Worm-like chain (WLC)", blurb: "Persistence length and stiff polymer." } },
  'zimm-bragg': { en: { title: "Zimm-Bragg helix-coil", blurb: "Peptide helix fraction transition." } },
  'methane-tetrahedral': { en: { title: "Methane CH\u2084", blurb: "sp\u00b3 tetrahedral geometry, 109.47\u00b0 H\u2013C\u2013H." } },
  'ph-titration': { en: { title: "Acid-base titration", blurb: "Sigmoid pH curve, weak acid + strong base." } },
  'reaction-energy-profile': { en: { title: "Reaction energy profile", blurb: "Reactants \u2192 TS \u2192 products with optional catalyst overlay." } },
  'sn2-reaction': { en: { title: "SN2 Walden inversion", blurb: "Backside nucleophilic attack inverts configuration." } },
  'water-molecule': { en: { title: "Water molecule H\u2082O", blurb: "sp\u00b3 bent geometry, 104.5\u00b0 H\u2013O\u2013H angle." } },
});

Object.assign(FORMULA_I18N, {
  // physics in algebra domain
  'bohr-energy-levels': { en: { title: 'Bohr energy levels', blurb: 'Hydrogen energy levels converge to 0 with n.' } },
  'bose-einstein': { en: { title: 'Bose-Einstein distribution', blurb: 'Boson occupation; condensate appears as μ→0.' } },
  'catenary': { en: { title: 'Catenary', blurb: 'Shape of a uniform chain hung from two points.' } },
  'compton-wavelength': { en: { title: 'Compton scattering shift', blurb: 'Photon wavelength shift after electron scattering.' } },
  'damped-oscillator': { en: { title: 'Damped oscillator', blurb: 'Oscillation under exponential envelope, γ controls damping.' } },
  'debye-heat-capacity': { en: { title: 'Debye heat capacity', blurb: 'Low-T ∝T³, saturates to 3Nk at high T.' } },
  'doppler-effect': { en: { title: 'Doppler effect', blurb: 'Observed frequency vs relative source velocity.' } },
  'fermi-dirac': { en: { title: 'Fermi-Dirac distribution', blurb: 'Fermion occupation, x=(E-μ)/kT.' } },
  'larmor-frequency': { en: { title: 'Larmor precession frequency', blurb: 'Magnetic moment precession rate vs field B.' } },
  'lorentz-gamma': { en: { title: 'Lorentz gamma factor', blurb: 'Relativistic time-dilation factor vs β=v/c.' } },
  'planck-radiation': { en: { title: 'Planck black-body spectrum', blurb: 'Spectral radiance varies with temperature.' } },
  'rlc-impedance': { en: { title: 'RLC series impedance', blurb: 'Resonance at ω₀=1/√(LC).' } },
  'rocket-equation': { en: { title: 'Tsiolkovsky rocket equation', blurb: 'Δv grows logarithmically with mass ratio.' } },
  'single-slit': { en: { title: 'Single-slit diffraction', blurb: 'Wide central peak, fast-decaying side lobes.' } },
  'snell-angle': { en: { title: "Snell's law of refraction", blurb: 'Refraction angle θ₂ vs incidence θ₁.' } },
  'stefan-boltzmann': { en: { title: 'Stefan-Boltzmann law', blurb: 'Radiated power ∝ T⁴.' } },
  'wien-displacement': { en: { title: "Wien's displacement law", blurb: 'Peak wavelength inversely proportional to T.' } },
  'young-interference': { en: { title: "Young's double-slit interference", blurb: 'Bright/dark fringes vs sinθ.' } },

  'arrhenius': { en: { title: 'Arrhenius rate (chem)', blurb: 'Reaction rate exponential in 1/T.' } },

  'discrete-log-walk': { en: { title: 'Discrete log g^k mod p', blurb: 'Trajectory in a cyclic group.' } },
  'elliptic-curve': { en: { title: 'Elliptic curve y²=x³+ax+b', blurb: 'Real-domain elliptic curve shape.' } },
  'eulers-totient': { en: { title: "Euler's totient φ(n)", blurb: 'Core of RSA key generation.' } },
  'hamming-code': { en: { title: 'Hamming(7,4) code', blurb: '4 data + 3 parity bits, single-error correcting.' } },
  'hash-avalanche': { en: { title: 'Hash avalanche effect', blurb: '1-bit input change → ~50% output bits flip.' } },
  'huffman-code': { en: { title: 'Huffman coding tree', blurb: 'Optimal prefix code by symbol frequency.' } },
  'merkle-tree': { en: { title: 'Merkle tree', blurb: 'Recursive hash structure for blockchains.' } },
  'rsa-keysize-time': { en: { title: 'RSA factoring time', blurb: 'Sub-exponential GNFS complexity vs key bits.' } },
  'shannon-channel': { en: { title: 'Shannon channel capacity', blurb: 'C = B log₂(1+S/N).' } },
  'shannon-entropy': { en: { title: 'Binary Shannon entropy', blurb: 'Maximum entropy at p=0.5.' } },
  'birthday-collision': { en: { title: 'Birthday collision probability', blurb: 'Hash collision likelihood with √N samples.' } },
  'prime-counting': { en: { title: 'Prime counting π(x) ~ x/ln x', blurb: 'Asymptotic density of primes.' } },

  'apollonian-gasket': { en: { title: 'Apollonian gasket', blurb: 'Recursive packing of mutually tangent circles.' } },
  'burning-ship-julia': { en: { title: 'Burning Ship Julia', blurb: 'Fixed c, Julia-style colouring of z plane.' } },
  'cantor-dust-2d': { en: { title: '2D Cantor dust', blurb: 'Square corners contracted by 1/3 recursively.' } },
  'cesaro-fractal': { en: { title: 'Cesàro fractal', blurb: 'Koch generalization with adjustable angle.' } },
  'h-tree': { en: { title: 'H tree', blurb: 'Recursive H pattern at each level.' } },
  'ifs-maple-leaf': { en: { title: 'IFS maple leaf', blurb: 'Four-map iterated leaf attractor.' } },
  'ifs-spiral': { en: { title: 'IFS spiral', blurb: 'Two-map spiral attractor.' } },
  'ifs-tree': { en: { title: 'IFS tree', blurb: 'Four-map tree-like attractor.' } },
  'koch-quadratic': { en: { title: 'Quadratic Koch curve', blurb: 'Square-toothed Koch generalization.' } },
  'levy-c-curve': { en: { title: 'Lévy C curve', blurb: 'Two-rotation self-similar curve.' } },
  'mandelbar': { en: { title: 'Mandelbar (Tricorn)', blurb: 'Conjugate Mandelbrot variant z̄²+c.' } },
  'mandelbox': { en: { title: '2D Mandelbox', blurb: 'Box-fold + sphere-fold iteration.' } },
  'minkowski-sausage': { en: { title: 'Minkowski sausage', blurb: 'Quaternary square-turn Koch generalization.' } },
  'multibrot-cubic': { en: { title: 'Cubic Multibrot', blurb: 'z³+c degree-3 Mandelbrot variant.' } },
  'nova-fractal': { en: { title: 'Nova fractal', blurb: 'Relaxed Newton with c offset.' } },
  'pythagoras-tree': { en: { title: 'Pythagoras tree', blurb: 'Recursive squares branching at angle.' } },
  'sierpinski-arrowhead': { en: { title: 'Sierpinski arrowhead', blurb: 'Curve that traces out the Sierpinski triangle.' } },
  'takagi-blancmange': { en: { title: 'Takagi (blancmange) function', blurb: 'Continuous everywhere, differentiable nowhere.' } },
  'terdragon': { en: { title: 'Terdragon curve', blurb: 'L-system F+F-F geometric self-similarity.' } },
  'weierstrass-curve': { en: { title: 'Weierstrass function', blurb: 'Classic continuous, nowhere-differentiable example.' } },

  'geodesic-precession': { en: { title: 'Perihelion precession (Mercury)', blurb: 'GR correction makes elliptic orbits precess.' } },
  'gravitational-redshift': { en: { title: 'Gravitational redshift', blurb: 'Light loses energy escaping a gravity well.' } },
  'gravitational-wave-strain': { en: { title: 'Gravitational wave chirp', blurb: 'Frequency rises as binaries inspiral.' } },
  'light-deflection': { en: { title: 'Gravitational light deflection', blurb: 'Bending angle ∝ 1/impact parameter b.' } },
  'lorentz-transform': { en: { title: 'Lorentz contraction', blurb: 'Length contraction along motion direction.' } },
  'schwarzschild-funnel': { en: { title: 'Schwarzschild funnel', blurb: "Flamm's embedding of curved spacetime." } },
  'schwarzschild-metric': { en: { title: 'Schwarzschild metric component', blurb: 'Gravitational time-dilation factor vs r/rs.' } },
  'time-dilation-gr': { en: { title: 'Gravitational time dilation', blurb: 'External time dilates relative to proper time.' } },
});

Object.assign(FORMULA_I18N, {
  // graph
  'barabasi-albert': { en: { title: 'BA scale-free network', blurb: 'Preferential attachment yields power-law degrees.' } },
  'bfs-traversal': { en: { title: 'BFS traversal', blurb: 'Concentric rings of visit levels.' } },
  'bipartite-matching': { en: { title: 'Bipartite matching', blurb: 'Optimal pairing across two sides.' } },
  'convex-hull': { en: { title: 'Convex hull (Graham scan)', blurb: 'Smallest convex polygon enclosing the points.' } },
  'degree-distribution': { en: { title: 'Power-law degree distribution', blurb: 'Signature of scale-free networks.' } },
  'eulerian-path': { en: { title: 'Eulerian path (Königsberg)', blurb: '7 bridges: 4 odd-degree vertices → no Eulerian path.' } },
  'force-directed': { en: { title: 'Force-directed graph layout', blurb: 'Springs pull edges, charges repel all.' } },
  'graph-coloring': { en: { title: 'Greedy graph coloring', blurb: 'Adjacent vertices get different colors.' } },
  'hamiltonian-cube': { en: { title: 'Hamiltonian cycle on cube', blurb: 'Visits all 8 vertices once.' } },
  'pagerank-power': { en: { title: 'PageRank power iteration', blurb: 'Error decays exponentially in iterations.' } },
  'random-graph': { en: { title: 'Erdős-Rényi random graph', blurb: 'Connected when p > log(n)/n.' } },
  'small-world': { en: { title: 'Small-world (Watts-Strogatz)', blurb: 'Regular ring + random rewiring → small world.' } },
  'spanning-tree': { en: { title: 'Min spanning tree (Kruskal)', blurb: 'Add cheapest non-cycle edges in order.' } },
  'tsp-greedy': { en: { title: 'TSP nearest-neighbor', blurb: 'Fast but not optimal heuristic.' } },

  // music
  'adsr-envelope': { en: { title: 'ADSR envelope', blurb: 'Synthesizer amplitude envelope.' } },
  'beating': { en: { title: 'Beat tones', blurb: 'Close frequencies superimpose into envelope beats.' } },
  'chord-spectrum': { en: { title: 'Triad chord waveform', blurb: 'Major triad superposition.' } },
  'doppler-music': { en: { title: 'Doppler pitch shift', blurb: 'Moving source frequency change.' } },
  'equal-temperament': { en: { title: '12-tone equal temperament', blurb: 'Geometric frequency spacing on A4=440Hz.' } },
  'fm-synthesis': { en: { title: 'FM synthesis', blurb: 'Modulator distorts carrier into new harmonics.' } },
  'harmonic-series': { en: { title: 'Harmonic series', blurb: 'Integer-multiple frequencies summed.' } },
  'just-vs-equal': { en: { title: 'Just vs equal temperament (cents)', blurb: 'Per-degree pitch deviation in cents.' } },
  'pythagorean-tuning': { en: { title: 'Pythagorean tuning', blurb: 'Stack fifths, fold into one octave.' } },
  'sine-square-saw': { en: { title: 'Waveform comparison', blurb: 'Basic synthesizer waveforms.' } },

  // others
  'simplex': { en: { title: '2D simplex feasible region', blurb: 'Objective line sweeps optimal vertex.' } },
  'maxwell-boltzmann': { en: { title: 'Maxwell-Boltzmann speed distribution', blurb: 'Gas molecule speed PDF.' } },
  'beat-pattern': { en: { title: 'Beat pattern', blurb: 'Two close frequencies superpose into envelope beats.' } },

  // quantum
  'blackbody-quantum': { en: { title: 'Quantized radiation energy', blurb: "Planck quantization resolved the ultraviolet catastrophe." } },
  'bose-condensate': { en: { title: 'BEC condensate fraction', blurb: 'Below Tc, condensate emerges.' } },
  'double-slit': { en: { title: 'Quantum double-slit', blurb: 'Electron/photon diffraction fringes.' } },
  'fermi-golden': { en: { title: "Fermi's golden rule", blurb: 'Transition rate ∝ |matrix element|² × density of states.' } },
  'gaussian-wavepacket': { en: { title: 'Gaussian wavepacket (real part)', blurb: 'Localized packet with mean momentum ℏk.' } },
  'heisenberg-uncertainty': { en: { title: 'Heisenberg uncertainty', blurb: 'Lower bound on σx · σp.' } },
  'hydrogen-energy': { en: { title: 'Hydrogen Rydberg levels', blurb: 'Hydrogen energy levels by principal quantum number.' } },
  'hydrogen-radial': { en: { title: 'Hydrogen radial wavefunction', blurb: 'Radial part in Bohr-radius units.' } },
  'infinite-well': { en: { title: 'Infinite square well', blurb: 'Stationary states in a 1D box.' } },
  'qho-3d': { en: { title: '2D harmonic oscillator |ψ|²', blurb: '2D QHO probability density surface.' } },
  'qho-energy-levels': { en: { title: 'QHO energy levels', blurb: 'Equally-spaced ladder of energies.' } },
  'qho-wavefn': { en: { title: 'QHO wavefunction |ψn|²', blurb: 'Quantum harmonic oscillator stationary states.' } },
  'quantum-tunneling': { en: { title: 'Quantum tunneling transmission', blurb: 'Transmission probability through a square barrier.' } },
  'spin-half': { en: { title: 'Bloch sphere (spin-½)', blurb: 'Quantum state geometry on the Bloch sphere.' } },
  'stern-gerlach': { en: { title: 'Stern-Gerlach measurement', blurb: 'Spin projection probability vs angle θ.' } },
});

Object.assign(FORMULA_I18N, {
  'cardano': { en: { title: 'Cardano cubic roots', blurb: 'Discriminant Δ = −4p³ − 27q² classifies the roots.' }, es: { title: 'Raíces cúbicas de Cardano', blurb: 'El discriminante Δ = −4p³ − 27q² clasifica las raíces.' } },
  'erf': { en: { title: 'Error function erf', blurb: 'Standardised Gaussian integral.' }, es: { title: 'Función error', blurb: 'Integral gaussiana estandarizada.' } },
  'relu': { en: { title: 'ReLU family', blurb: 'Common neural-net activation functions.' }, es: { title: 'Familia ReLU', blurb: 'Funciones de activación comunes en redes neuronales.' } },
  'sigmoid': { en: { title: 'Sigmoid / Logistic', blurb: 'Neural activation. k controls steepness.' }, es: { title: 'Sigmoide / Logística', blurb: 'Activación neuronal. k controla la pendiente.' } },
  'atp-molecule': { en: { title: 'ATP (schematic)', blurb: 'Cellular energy currency: adenine + ribose + triphosphate.' }, es: { title: 'ATP (esquema)', blurb: 'Moneda energética celular: adenina + ribosa + trifosfato.' } },
  'chromosome-condensation': { en: { title: 'Chromosome condensation', blurb: 'Loose chromatin → condensed chromosome. t = 0..1.' }, es: { title: 'Condensación cromosómica', blurb: 'Cromatina suelta → cromosoma condensado. t = 0..1.' } },
  'hemoglobin-quaternary': { en: { title: 'Hemoglobin tetramer', blurb: 'Two α + two β chains, each with a heme group.' }, es: { title: 'Tetrámero de hemoglobina', blurb: 'Dos cadenas α + dos β, cada una con un grupo hemo.' } },
  'mitosis-spindle': { en: { title: 'Mitotic spindle', blurb: 'Bipolar centrosomes pulling chromosomes via microtubules.' }, es: { title: 'Huso mitótico', blurb: 'Centrosomas bipolares tirando de los cromosomas vía microtúbulos.' } },
  'mrna-codon': { en: { title: 'mRNA codons', blurb: 'mRNA triplet codons.' }, es: { title: 'Codones de ARNm', blurb: 'Codones triplete de ARNm.' } },
  'neuron-3d': { en: { title: 'Neuron (schematic)', blurb: 'Soma, dendrites, axon, synaptic terminals.' }, es: { title: 'Neurona (esquema)', blurb: 'Soma, dendritas, axón, terminales sinápticas.' } },
  'nucleosome': { en: { title: 'Nucleosome', blurb: 'Chromatin unit: DNA wrapped around histone octamer.' }, es: { title: 'Nucleosoma', blurb: 'Unidad de cromatina: ADN enrollado en octámero de histonas.' } },
  'sodium-pump': { en: { title: 'Na/K-ATPase pump', blurb: 'Trans-membrane Na/K pump: 3 Na out / 2 K in.' }, es: { title: 'Bomba Na/K-ATPasa', blurb: 'Bomba transmembrana: 3 Na fuera / 2 K dentro.' } },
  'synapse-3d': { en: { title: 'Chemical synapse', blurb: 'Pre-synapse, cleft, post-synapse, neurotransmitter vesicles.' }, es: { title: 'Sinapsis química', blurb: 'Pre-sinapsis, hendidura, post-sinapsis y vesículas.' } },
  'trna-cloverleaf': { en: { title: 'tRNA cloverleaf', blurb: 'tRNA secondary structure: D, anticodon, TΨC, acceptor arms.' }, es: { title: 'Trébol del ARNt', blurb: 'Estructura secundaria del ARNt: brazos D, anticodón, TΨC, aceptor.' } },
  'gibbs': { en: { title: 'Gibbs phenomenon', blurb: '~9% overshoot at jumps that never vanishes.' }, es: { title: 'Fenómeno de Gibbs', blurb: 'Sobreimpulso ~9% en saltos que no desaparece.' } },
  'heaviside': { en: { title: 'Heaviside step (sigmoid limit)', blurb: 'k → ∞ recovers the step function.' }, es: { title: 'Escalón de Heaviside', blurb: 'k → ∞ produce la función escalón.' } },
  'lhopital': { en: { title: "L'Hôpital 0/0 limits", blurb: 'Common 0/0 limits as x → 0.' }, es: { title: "Límites 0/0 de L'Hôpital", blurb: 'Límites 0/0 comunes cuando x → 0.' } },
  'taylor': { en: { title: 'Taylor series', blurb: 'Adjust order to see partial sums approach the function.' }, es: { title: 'Serie de Taylor', blurb: 'Ajusta el orden para ver sumas parciales acercarse.' } },
  'zeta2': { en: { title: 'ζ(2) = π²/6 partial sums', blurb: 'Basel problem: 1 + 1/4 + 1/9 + ... = π²/6.' }, es: { title: 'ζ(2) = π²/6', blurb: 'Problema de Basel: 1 + 1/4 + 1/9 + ... = π²/6.' } },
  'anneal': { en: { title: 'Annealing CA (B4678/S35678)', blurb: 'Annealing rule that stabilises large blocks.' }, es: { title: 'AC de recocido', blurb: 'Regla de recocido que estabiliza bloques grandes.' } },
  'boids': { en: { title: 'Boids flocking', blurb: 'Three-rule emergent flocking behaviour.' }, es: { title: 'Bandadas Boids', blurb: 'Comportamiento de bandada emergente con tres reglas.' } },
  'highlife': { en: { title: 'HighLife (B36/S23)', blurb: 'Game of Life variant with a self-replicator.' }, es: { title: 'HighLife (B36/S23)', blurb: 'Variante con replicador.' } },
  'lenia': { en: { title: 'Lenia (continuous Life)', blurb: 'Continuous values + smooth kernel → soft-bodied life.' }, es: { title: 'Lenia (vida continua)', blurb: 'Valores continuos + núcleo suave → vida suave.' } },
  'replicator': { en: { title: 'Replicator (B1357/S1357)', blurb: 'Every pattern eventually replicates and fills the grid.' }, es: { title: 'Replicador (B1357/S1357)', blurb: 'Todo patrón se replica y llena la rejilla.' } },
  'sandpile': { en: { title: 'Abelian sandpile', blurb: 'Cells ≥4 topple into 4 neighbours; SOC pattern emerges.' }, es: { title: 'Pila de arena Abeliana', blurb: 'Celdas ≥4 caen sobre 4 vecinas; emerge patrón SOC.' } },
  'totalistic': { en: { title: '1D totalistic CA', blurb: 'Code 0..255 picks one of 8 neighbour-sum rules.' }, es: { title: 'AC totalístico 1D', blurb: 'Código 0..255 elige una de 8 reglas por suma vecinal.' } },
  'buddhabrot': { en: { title: 'Buddhabrot', blurb: 'Cumulative density of escaping Mandelbrot orbits.' }, es: { title: 'Buddhabrot', blurb: 'Densidad acumulada de órbitas que escapan del Mandelbrot.' } },
  'feigenbaum': { en: { title: 'Feigenbaum bifurcation', blurb: 'Period-doubling bifurcation diagram of tent / cubic maps.' }, es: { title: 'Bifurcación de Feigenbaum', blurb: 'Duplicación de periodo en mapas tent y cúbico.' } },
  'julia': { en: { title: 'Julia set', blurb: 'Fix c, sweep z₀ across the complex plane.' }, es: { title: 'Conjunto de Julia', blurb: 'Fija c y barre z₀ por el plano complejo.' } },
  'lsystem': { en: { title: 'L-System', blurb: 'Symbolic rewriting → fractals: Koch / Dragon / Sierpinski / Plant.' }, es: { title: 'L-System', blurb: 'Reescritura simbólica → fractales clásicos.' } },
  'mandelbrot': { en: { title: 'Mandelbrot set', blurb: 'Complex iteration divergence test. Zoom + center to explore.' }, es: { title: 'Conjunto de Mandelbrot', blurb: 'Iteración compleja. Acercar y centrar para explorar.' } },
});

Object.assign(FORMULA_I18N, {
  'multibrot': { en: { title: 'Multibrot z^d + c', blurb: 'Vary exponent d to see Mandelbrot generalisations.' }, es: { title: 'Multibrot z^d + c', blurb: 'Varía d para ver generalizaciones de Mandelbrot.' } },
  'tricorn': { en: { title: 'Tricorn (Mandelbar)', blurb: 'Conjugate replaces z; symmetry breaks.' }, es: { title: 'Tricorn (Mandelbar)', blurb: 'El conjugado reemplaza z; la simetría se rompe.' } },
  'bezier': { en: { title: 'Bézier curve (de Casteljau)', blurb: '4 control points; recursive interpolation at t.' }, es: { title: 'Curva de Bézier', blurb: '4 puntos de control; interpolación recursiva en t.' } },
  'cissoid': { en: { title: 'Cissoid of Diocles', blurb: 'Curve solving the cube-doubling problem.' }, es: { title: 'Cisoide de Diocles', blurb: 'Curva que resuelve la duplicación del cubo.' } },
  'icosahedron': { en: { title: 'Platonic solids', blurb: 'Five regular polyhedra visualised.' }, es: { title: 'Sólidos platónicos', blurb: 'Cinco poliedros regulares visualizados.' } },
  'lemniscate': { en: { title: 'Bernoulli lemniscate', blurb: 'Closed ∞-shape curve.' }, es: { title: 'Lemniscata de Bernoulli', blurb: 'Curva cerrada en forma de ∞.' } },
  'spirograph': { en: { title: 'Spirograph (hypotrochoid)', blurb: 'Small circle r rolls inside large circle R, traced by fixed point.' }, es: { title: 'Espirógrafo', blurb: 'Círculo r rueda dentro de R; punto fijo traza la curva.' } },
  'superellipse': { en: { title: 'Superellipse (Lamé curve)', blurb: 'n = 2 ellipse, n → ∞ square, n = 2/3 astroid.' }, es: { title: 'Superelipse (curva de Lamé)', blurb: 'n=2 elipse, n→∞ cuadrado, n=2/3 astroide.' } },
  'trochoid': { en: { title: 'Trochoid', blurb: 'd ≠ r distorts cycloid into curtate / prolate trochoid.' }, es: { title: 'Trocoide', blurb: 'd ≠ r distorsiona la cicloide.' } },
  'voronoi': { en: { title: 'Voronoi diagram', blurb: 'Cells of nearest sites partition the plane.' }, es: { title: 'Diagrama de Voronoi', blurb: 'Celdas del sitio más cercano particionan el plano.' } },
  'cholesky': { en: { title: 'Cholesky decomposition', blurb: 'Unique factorisation of symmetric positive-definite A.' }, es: { title: 'Descomposición de Cholesky', blurb: 'Factorización única de A simétrica definida positiva.' } },
  'jacobian': { en: { title: 'Jacobian (local linearisation)', blurb: 'Jacobian of nonlinear map (sin x, cos y) at a point.' }, es: { title: 'Jacobiano', blurb: 'Linealización local del mapa no lineal en un punto.' } },
  'kronecker': { en: { title: 'Kronecker product (block structure)', blurb: '2×2 ⊗ 2×2 = 4×4 block matrix.' }, es: { title: 'Producto de Kronecker', blurb: 'Matriz por bloques 4×4 de 2×2 ⊗ 2×2.' } },
  'leastsquares': { en: { title: 'Least squares fit', blurb: 'Best-fit line through noisy scatter.' }, es: { title: 'Mínimos cuadrados', blurb: 'Recta de mejor ajuste a puntos ruidosos.' } },
  'pca': { en: { title: 'Principal component analysis', blurb: 'Eigenvectors of covariance = principal axes.' }, es: { title: 'Análisis de componentes principales', blurb: 'Autovectores de la covarianza = ejes principales.' } },
  'projection': { en: { title: 'Vector projection', blurb: 'Projection of a onto direction b.' }, es: { title: 'Proyección vectorial', blurb: 'Proyección de a sobre la dirección b.' } },
  'reflection': { en: { title: 'Reflection', blurb: 'Reflect across line at angle θ; det = −1.' }, es: { title: 'Reflexión', blurb: 'Refleja sobre línea con ángulo θ; det = −1.' } },
  'svd': { en: { title: 'SVD geometric decomposition', blurb: 'Matrix = rotate · scale · rotate. Unit circle → ellipse.' }, es: { title: 'Descomposición SVD', blurb: 'Matriz = rotar · escalar · rotar.' } },
  'transpose': { en: { title: 'Transpose Aᵀ', blurb: '2×2 transpose flips across the main diagonal.' }, es: { title: 'Transpuesta Aᵀ', blurb: 'Refleja sobre la diagonal principal.' } },
  'collatz': { en: { title: 'Collatz conjecture trajectories', blurb: 'Even/odd iteration trajectories from many starting n.' }, es: { title: 'Trayectorias de Collatz', blurb: 'Iteraciones pares/impares desde varios n iniciales.' } },
  'goldbach': { en: { title: "Goldbach's comet", blurb: 'Number of ways to write each even number as sum of two primes.' }, es: { title: 'Cometa de Goldbach', blurb: 'Maneras de escribir cada par como suma de dos primos.' } },
  'sieve': { en: { title: 'Sieve of Eratosthenes', blurb: 'Composite removal across 2..N grid; primes remain.' }, es: { title: 'Criba de Eratóstenes', blurb: 'Elimina compuestos en 2..N; quedan los primos.' } },
  'bifurcation': { en: { title: 'Logistic bifurcation diagram', blurb: 'Sweep r ∈ [0, 4]; plot steady-state distribution. Feigenbaum cascade.' }, es: { title: 'Diagrama de bifurcación logística', blurb: 'Barre r ∈ [0,4]; cascada de Feigenbaum.' } },
  'brusselator': { en: { title: 'Brusselator chemical oscillator', blurb: 'Three-molecule reaction model with a limit cycle.' }, es: { title: 'Oscilador Brusselator', blurb: 'Modelo químico con ciclo límite.' } },
  'duffing': { en: { title: 'Duffing oscillator', blurb: 'Nonlinear spring + periodic forcing → chaos.' }, es: { title: 'Oscilador de Duffing', blurb: 'Resorte no lineal + forzado periódico → caos.' } },
  'halvorsen': { en: { title: 'Halvorsen attractor', blurb: 'Three-axis-symmetric strange attractor.' }, es: { title: 'Atractor de Halvorsen', blurb: 'Atractor extraño con simetría triaxial.' } },
  'kuramoto': { en: { title: 'Kuramoto synchronisation', blurb: 'Phase transition of N oscillators under coupling K.' }, es: { title: 'Sincronización de Kuramoto', blurb: 'Transición de fase de N osciladores con acoplamiento K.' } },
  'lorenz': { en: { title: 'Lorenz attractor', blurb: 'σ=10, ρ=28, β=8/3 → chaos; butterfly-shaped strange attractor.' }, es: { title: 'Atractor de Lorenz', blurb: 'σ=10, ρ=28, β=8/3 → caos; mariposa.' } },
  'pendulum': { en: { title: 'Pendulum phase portrait', blurb: 'Nonlinear pendulum (θ, ω) phase space.' }, es: { title: 'Retrato de fase del péndulo', blurb: 'Espacio (θ, ω) del péndulo no lineal.' } },
  'rossler': { en: { title: 'Rössler attractor', blurb: 'Simplest chaotic attractor; spiraling band.' }, es: { title: 'Atractor de Rössler', blurb: 'Atractor caótico más simple; banda en espiral.' } },
});

Object.assign(FORMULA_I18N, {
  'relaxation': { en: { title: 'Relaxation oscillator (FitzHugh-Nagumo)', blurb: 'Neuron model with slow-fast dynamics.' }, es: { title: 'Oscilador de relajación (FitzHugh-Nagumo)', blurb: 'Modelo neuronal con dinámica lenta-rápida.' } },
  'sirs': { en: { title: 'SIRS model (waning immunity)', blurb: 'Immunity loss drives recurrent epidemics.' }, es: { title: 'Modelo SIRS', blurb: 'Pérdida de inmunidad → epidemias recurrentes.' } },
  'ackley': { en: { title: 'Ackley function', blurb: 'Multimodal benchmark landscape.' }, es: { title: 'Función de Ackley', blurb: 'Paisaje multimodal de prueba.' } },
  'himmelblau': { en: { title: 'Himmelblau function', blurb: 'Four equal-height local minima.' }, es: { title: 'Función de Himmelblau', blurb: 'Cuatro mínimos locales de igual altura.' } },
  'momentum': { en: { title: 'SGD vs Momentum vs Adam', blurb: 'Trajectories of three optimisers on a ravine.' }, es: { title: 'SGD vs Momentum vs Adam', blurb: 'Trayectorias de tres optimizadores en un cañón.' } },
  'rastrigin': { en: { title: 'Rastrigin function', blurb: 'Grid-like local minima.' }, es: { title: 'Función de Rastrigin', blurb: 'Mínimos locales en cuadrícula.' } },
  'regularization': { en: { title: 'L2 regularisation (ridge)', blurb: 'Polynomial fit with L2 penalty.' }, es: { title: 'Regularización L2 (ridge)', blurb: 'Ajuste polinomial con penalización L2.' } },
  'advection': { en: { title: 'Advection equation', blurb: 'Initial waveform translates at speed c (upwind scheme).' }, es: { title: 'Ecuación de advección', blurb: 'La onda inicial se traslada a velocidad c.' } },
  'biharmonic': { en: { title: 'Biharmonic equation (plate modes)', blurb: 'Bending modes of a rectangular plate.' }, es: { title: 'Ecuación biarmónica', blurb: 'Modos de flexión de una placa rectangular.' } },
  'bayes': { en: { title: "Bayes' theorem (medical test)", blurb: 'Sensitivity / specificity / prevalence → positive predictive value.' }, es: { title: 'Teorema de Bayes', blurb: 'Sensibilidad / especificidad / prevalencia → VPP.' } },
  'clt': { en: { title: 'Central limit theorem', blurb: 'Tune sample size n to watch the distribution approach a Gaussian.' }, es: { title: 'Teorema central del límite', blurb: 'Ajusta n y observa la distribución acercarse a una gaussiana.' } },
  'dirichlet': { en: { title: 'Dirichlet distribution (simplex)', blurb: '3-component Dirichlet samples on the triangular simplex.' }, es: { title: 'Distribución de Dirichlet (simplex)', blurb: 'Muestras Dirichlet 3D en el simplex triangular.' } },
  'biquad': { en: { title: 'Biquad filter (peaking)', blurb: 'Tune centre frequency and Q.' }, es: { title: 'Filtro biquad (peaking)', blurb: 'Ajusta frecuencia central y Q.' } },
  'cepstrum': { en: { title: 'Cepstrum', blurb: 'Used for echo / pitch detection.' }, es: { title: 'Cepstrum', blurb: 'Útil para detección de eco / tono.' } },
  'convolution': { en: { title: 'Convolution', blurb: 'Square wave * Gaussian = smoothed version.' }, es: { title: 'Convolución', blurb: 'Onda cuadrada * gaussiana = versión suavizada.' } },
  'correlogram': { en: { title: 'Autocorrelation function', blurb: 'Periodic signals have periodic autocorrelation.' }, es: { title: 'Autocorrelación', blurb: 'Las señales periódicas tienen autocorrelación periódica.' } },
  'dct': { en: { title: 'DCT-II coefficients', blurb: 'Discrete cosine transform used by JPEG.' }, es: { title: 'Coeficientes DCT-II', blurb: 'Transformada coseno discreta usada por JPEG.' } },
  'decibel': { en: { title: 'Decibel scale', blurb: 'Amplitude ratio ↔ dB conversion.' }, es: { title: 'Escala de decibelios', blurb: 'Conversión razón de amplitud ↔ dB.' } },
  'dft': { en: { title: 'DFT formula visualisation', blurb: 'Accumulating Fourier coefficient at a single frequency k.' }, es: { title: 'Visualización de la DFT', blurb: 'Acumulación del coeficiente de Fourier para frecuencia k.' } },
  'fft': { en: { title: 'FFT spectrum', blurb: 'Sum of three sines + time/frequency comparison.' }, es: { title: 'Espectro FFT', blurb: 'Suma de tres senoides + comparación tiempo/frecuencia.' } },
  'lissajous': { en: { title: 'Lissajous curves', blurb: 'Frequency ratio a:b determines the closed shape.' }, es: { title: 'Curvas de Lissajous', blurb: 'La razón a:b define la forma cerrada.' } },
  'sinc': { en: { title: 'sinc function', blurb: 'Fourier transform of a rectangular window.' }, es: { title: 'Función sinc', blurb: 'Transformada de Fourier de una ventana rectangular.' } },
  'spectrogram': { en: { title: 'Spectrogram (chirp)', blurb: 'Time-frequency map of a linear chirp.' }, es: { title: 'Espectrograma (chirp)', blurb: 'Mapa tiempo-frecuencia de un chirp lineal.' } },
  'upsampling': { en: { title: 'Up-/down-sampling (L↑ M↓)', blurb: 'L-fold interpolation followed by low-pass filter.' }, es: { title: 'Sobremuestreo / submuestreo', blurb: 'Interpolación L seguida de filtro paso bajo.' } },
  'catenoid': { en: { title: 'Catenoid', blurb: 'Another minimal surface.' }, es: { title: 'Catenoide', blurb: 'Otra superficie mínima.' } },
  'enneper': { en: { title: 'Enneper minimal surface', blurb: 'Locally zero mean curvature.' }, es: { title: 'Superficie mínima de Enneper', blurb: 'Curvatura media localmente nula.' } },
  'helicoid': { en: { title: 'Helicoid', blurb: 'Minimal surface, isometric to the catenoid.' }, es: { title: 'Helicoide', blurb: 'Superficie mínima isométrica al catenoide.' } },
  'hyperboloid': { en: { title: 'One-sheet hyperboloid', blurb: 'Quadric surface ruled by two families of straight lines.' }, es: { title: 'Hiperboloide de una hoja', blurb: 'Superficie reglada por dos familias de rectas.' } },
  'mobius': { en: { title: 'Möbius strip', blurb: 'One-sided surface.' }, es: { title: 'Cinta de Möbius', blurb: 'Superficie de un solo lado.' } },
  'paraboloid': { en: { title: 'Elliptic paraboloid z = x² + y²', blurb: 'a = b → paraboloid of revolution; a ≠ b → elliptic.' }, es: { title: 'Paraboloide elíptico z = x² + y²', blurb: 'a = b revolución; a ≠ b elíptico.' } },
  'seashell': { en: { title: 'Seashell surface', blurb: 'Circle extruded along an exponential spiral.' }, es: { title: 'Superficie de caracol', blurb: 'Círculo extruido por espiral exponencial.' } },
  'sphere': { en: { title: 'Sphere parametrisation', blurb: 'Latitude/longitude parametrisation.' }, es: { title: 'Parametrización de la esfera', blurb: 'Parametrización por latitud y longitud.' } },
  'superegg': { en: { title: 'Superegg', blurb: 'n = 2 sphere; n → ∞ cube.' }, es: { title: 'Superhuevo', blurb: 'n = 2 esfera; n → ∞ cubo.' } },
  'torus': { en: { title: 'Torus', blurb: 'Major radius R + minor radius r.' }, es: { title: 'Toro', blurb: 'Radio mayor R + radio menor r.' } },
  'poiseuille': { en: { title: 'Poiseuille flow', blurb: 'Parabolic velocity profile in laminar pipe flow.' }, es: { title: 'Flujo de Poiseuille', blurb: 'Perfil parabólico de velocidad en tubería laminar.' } },
  'streamlines': { en: { title: 'Streamlines (integral curves)', blurb: 'Streamlines of several 2D vector fields.' }, es: { title: 'Líneas de corriente', blurb: 'Líneas de corriente de varios campos vectoriales 2D.' } },
});

Object.assign(FORMULA_I18N, {
  'nernst-equation': { en: { title: 'Nernst equation', blurb: 'Cell EMF varies with reaction quotient Q.' }, es: { title: 'Ecuación de Nernst', blurb: 'FEM varía con el cociente de reacción Q.' } },
  'henderson-hasselbalch': { en: { title: 'Henderson–Hasselbalch', blurb: 'Buffer pH from pKa and the [A⁻]/[HA] ratio.' }, es: { title: 'Henderson–Hasselbalch', blurb: 'pH del buffer a partir de pKa y la razón [A⁻]/[HA].' } },
  'beer-lambert': { en: { title: 'Beer–Lambert law', blurb: 'Absorbance grows linearly with concentration.' }, es: { title: 'Ley de Beer–Lambert', blurb: 'Absorbancia crece linealmente con la concentración.' } },
  'langmuir-isotherm': { en: { title: 'Langmuir isotherm', blurb: 'Surface coverage θ saturates as P rises.' }, es: { title: 'Isoterma de Langmuir', blurb: 'Cobertura θ se satura con el aumento de P.' } },
  'clausius-clapeyron': { en: { title: 'Clausius–Clapeyron', blurb: 'Vapour pressure vs temperature.' }, es: { title: 'Clausius–Clapeyron', blurb: 'Presión de vapor frente a temperatura.' } },
  'van-der-waals': { en: { title: 'Van der Waals isotherm', blurb: 'Non-ideal gas P–V isotherm.' }, es: { title: 'Isoterma de Van der Waals', blurb: 'Isoterma P–V de gas no ideal.' } },
  'gibbs-free-energy': { en: { title: 'Gibbs free energy', blurb: 'ΔG = ΔH − TΔS; ΔG = 0 at equilibrium T = ΔH/ΔS.' }, es: { title: 'Energía libre de Gibbs', blurb: 'ΔG = ΔH − TΔS; equilibrio en T = ΔH/ΔS.' } },
});

Object.assign(FORMULA_I18N, {
  'hubble-law': { en: { title: "Hubble's law", blurb: 'Recession velocity proportional to distance.' }, es: { title: 'Ley de Hubble', blurb: 'Velocidad de recesión proporcional a la distancia.' } },
  'cosmological-redshift': { en: { title: 'Cosmological redshift', blurb: 'Photon wavelength stretches with scale factor.' }, es: { title: 'Corrimiento al rojo cosmológico', blurb: 'La longitud de onda se estira con el factor de escala.' } },
  'friedmann-flat': { en: { title: 'Friedmann (flat universe)', blurb: 'Hubble parameter vs scale factor for ΛCDM.' }, es: { title: 'Friedmann (universo plano)', blurb: 'Parámetro de Hubble vs factor de escala.' } },
  'de-sitter-scale': { en: { title: 'de Sitter exponential expansion', blurb: 'Λ-dominated scale factor grows as e^{Ht}.' }, es: { title: 'Expansión exponencial de Sitter', blurb: 'Factor de escala dominado por Λ crece como e^{Ht}.' } },
  'schwarzschild-radius': { en: { title: 'Schwarzschild radius', blurb: 'Black-hole event horizon size vs mass.' }, es: { title: 'Radio de Schwarzschild', blurb: 'Tamaño del horizonte de sucesos vs masa.' } },
  'roche-limit': { en: { title: 'Roche limit', blurb: 'Tidal disruption distance for a fluid satellite.' }, es: { title: 'Límite de Roche', blurb: 'Distancia de disrupción tidal para satélite fluido.' } },
});

Object.assign(FORMULA_I18N, {
  'midi-frequency': { en: { title: 'MIDI note → frequency', blurb: 'MIDI 0..127 mapped to frequency (A4 = 69 → 440 Hz).' }, es: { title: 'Nota MIDI → frecuencia', blurb: 'MIDI 0..127 mapeado a frecuencia (A4 = 69 → 440 Hz).' } },
  'cents': { en: { title: 'Cents (logarithmic pitch)', blurb: '1 semitone = 100 ¢; 1 octave = 1200 ¢.' }, es: { title: 'Cents (tono logarítmico)', blurb: '1 semitono = 100 ¢; 1 octava = 1200 ¢.' } },
  'comb-filter': { en: { title: 'Comb filter response', blurb: 'Feedback delay produces comb-shaped magnitude response.' }, es: { title: 'Respuesta del filtro peine', blurb: 'El retardo realimentado produce respuesta en forma de peine.' } },
  'ring-modulation': { en: { title: 'Ring modulation', blurb: 'Carrier × modulator → sum and difference frequencies.' }, es: { title: 'Modulación en anillo', blurb: 'Portadora × moduladora → suma y diferencia.' } },
  'waveshaper-tanh': { en: { title: 'tanh soft-clip waveshaper', blurb: 'Common nonlinear saturation in synths and guitar amps.' }, es: { title: 'Waveshaper tanh', blurb: 'Saturación no lineal típica en sintetizadores.' } },
  'rt60-decay': { en: { title: 'RT60 reverb decay', blurb: 'Time for the sound level to drop by 60 dB.' }, es: { title: 'Decaimiento RT60', blurb: 'Tiempo para que el nivel caiga 60 dB.' } },
});

Object.assign(FORMULA_I18N, {
  'modular-exponentiation': { en: { title: 'Modular exponentiation g^x mod p', blurb: 'Core operation behind the discrete-log problem.' }, es: { title: 'Exponenciación modular g^x mod p', blurb: 'Operación base del problema del logaritmo discreto.' } },
  'quadratic-residue': { en: { title: 'Quadratic residues x² mod p', blurb: 'Squares modulo a prime; Euler criterion.' }, es: { title: 'Residuos cuadráticos x² mod p', blurb: 'Cuadrados módulo primo; criterio de Euler.' } },
  'euler-phi': { en: { title: 'Euler totient φ(n)', blurb: 'Count of integers ≤ n coprime to n; powers RSA key gen.' }, es: { title: 'Función φ de Euler', blurb: 'Cantidad de enteros ≤ n coprimos con n.' } },
  'birthday-bound': { en: { title: 'Birthday attack probability', blurb: 'Collision probability after k hash queries; k ≈ √N for 50%.' }, es: { title: 'Probabilidad del ataque de cumpleaños', blurb: 'Probabilidad de colisión tras k consultas; k ≈ √N para 50%.' } },
  'lfsr-period': { en: { title: 'LFSR output bitstream', blurb: 'Linear feedback shift register output controlled by tap mask.' }, es: { title: 'Flujo de bits LFSR', blurb: 'Salida de un registro de desplazamiento con realimentación lineal.' } },
});

Object.assign(FORMULA_I18N, {
  'compton-scattering': { en: { title: 'Compton scattering shift', blurb: "Photon wavelength increase λ' − λ vs scattering angle." }, es: { title: 'Compton: cambio de λ', blurb: "Aumento λ' − λ frente al ángulo de dispersión." } },
  'de-broglie-wavelength': { en: { title: 'de Broglie wavelength', blurb: 'Matter-wave wavelength vs momentum.' }, es: { title: 'Longitud de onda de Broglie', blurb: 'Longitud de onda de materia vs momento.' } },
  'rydberg-formula': { en: { title: 'Rydberg formula (hydrogen lines)', blurb: 'Hydrogen transition wavelengths.' }, es: { title: 'Fórmula de Rydberg', blurb: 'Longitudes de onda del hidrógeno.' } },
  'zeeman-splitting': { en: { title: 'Normal Zeeman splitting', blurb: 'Energy levels split by magnetic field.' }, es: { title: 'División Zeeman normal', blurb: 'Niveles divididos por campo magnético.' } },
  'bohr-radius-z': { en: { title: 'Hydrogenic Bohr radius', blurb: 'Orbit radius scales as n²/Z.' }, es: { title: 'Radio de Bohr (hidrogenoide)', blurb: 'Radio de órbita escala como n²/Z.' } },
  'larmor-frequency': { en: { title: 'Larmor precession frequency', blurb: 'Nuclear-spin precession ω = γ B.' }, es: { title: 'Frecuencia de Larmor', blurb: 'Precesión de espín nuclear ω = γ B.' } },
});

Object.assign(FORMULA_I18N, {
  'handshake-edges': { en: { title: 'Complete-graph edge count', blurb: 'K_n has n(n−1)/2 edges.' }, es: { title: 'Aristas del grafo completo', blurb: 'K_n tiene n(n−1)/2 aristas.' } },
  'cayley-spanning-trees': { en: { title: "Cayley's formula τ(K_n)", blurb: 'Spanning-tree count of K_n grows as n^{n−2} (log scale).' }, es: { title: 'Fórmula de Cayley', blurb: 'Cantidad de árboles generadores de K_n.' } },
  'chromatic-tree': { en: { title: 'Chromatic polynomial of a tree', blurb: 'k(k−1)^{n−1} proper colourings of an n-node tree.' }, es: { title: 'Polinomio cromático del árbol', blurb: 'k(k−1)^{n−1} coloraciones propias.' } },
  'giant-component-threshold': { en: { title: 'Giant-component threshold (ER)', blurb: 'Phase transition of largest component as mean degree c crosses 1.' }, es: { title: 'Umbral del componente gigante', blurb: 'Transición de fase del componente mayor.' } },
  'avg-path-length-er': { en: { title: 'ER average path length', blurb: 'Random-graph diameter scales as ln n / ln(np).' }, es: { title: 'Longitud media de camino (ER)', blurb: 'Diámetro escala como ln n / ln(np).' } },
});

Object.assign(FORMULA_I18N, {
  'ideal-gas': { en: { title: 'Ideal gas PV = nRT', blurb: 'Isotherm: pressure inversely proportional to volume.' }, es: { title: 'Gas ideal PV = nRT', blurb: 'Isoterma: presión inversamente proporcional al volumen.' } },
  'raoult-law': { en: { title: "Raoult's law", blurb: 'Total vapour pressure linear in mole fraction (ideal solution).' }, es: { title: 'Ley de Raoult', blurb: 'Presión de vapor lineal en fracción molar (solución ideal).' } },
  'freezing-point-depression': { en: { title: 'Freezing-point depression', blurb: 'ΔTf = Kf · m · i (colligative property).' }, es: { title: 'Descenso del punto de congelación', blurb: 'ΔTf = Kf · m · i (propiedad coligativa).' } },
  'boltzmann-rate': { en: { title: 'Maxwell-Boltzmann speed distribution', blurb: 'Probability density of molecular speeds in 3D gas.' }, es: { title: 'Distribución de velocidades de Maxwell-Boltzmann', blurb: 'Densidad de probabilidad de velocidades moleculares en 3D.' } },
  'equilibrium-keq': { en: { title: "van 't Hoff equilibrium K", blurb: 'Equilibrium constant temperature dependence (linear in 1/T).' }, es: { title: 'Constante de equilibrio (van t Hoff)', blurb: 'Dependencia con la temperatura (lineal en 1/T).' } },
});

Object.assign(FORMULA_I18N, {
  'shapiro-delay': { en: { title: 'Shapiro time delay', blurb: 'Gravitational delay of light grazing a mass.' }, es: { title: 'Retardo de Shapiro', blurb: 'Retardo gravitacional al rozar una masa.' } },
  'perihelion-precession': { en: { title: 'Perihelion precession', blurb: 'Relativistic per-orbit precession.' }, es: { title: 'Precesión del perihelio', blurb: 'Precesión relativista por órbita.' } },
  'hawking-temperature': { en: { title: 'Hawking temperature', blurb: 'Black-hole evaporation temperature (log-log).' }, es: { title: 'Temperatura de Hawking', blurb: 'Temperatura de evaporación (log-log).' } },
  'unruh-temperature': { en: { title: 'Unruh temperature', blurb: 'Vacuum temperature seen by uniformly accelerating observer.' }, es: { title: 'Temperatura de Unruh', blurb: 'Temperatura del vacío para observador uniformemente acelerado.' } },
  'gravitational-binding': { en: { title: 'Gravitational binding energy', blurb: 'Self-energy of a uniform sphere U = −3GM²/(5R).' }, es: { title: 'Energía de ligadura gravitacional', blurb: 'Auto-energía de una esfera uniforme.' } },
  'tidal-acceleration': { en: { title: 'Tidal acceleration', blurb: '2GMr/d³ stretching across an extended body.' }, es: { title: 'Aceleración de marea', blurb: '2GMr/d³ a lo largo de un cuerpo extendido.' } },
});

Object.assign(FORMULA_I18N, {
  'string-mode': { en: { title: 'String standing-wave mode', blurb: 'Snapshot of the n-th mode on a fixed-end string.' }, es: { title: 'Modo estacionario de cuerda', blurb: 'Forma instantánea del modo n en una cuerda fija.' } },
  'fletcher-munson': { en: { title: 'Fletcher-Munson equal-loudness (approx)', blurb: 'Simplified equal-loudness curve; bass drops off.' }, es: { title: 'Fletcher-Munson (aprox)', blurb: 'Curva de igual sonoridad simplificada.' } },
  'just-vs-equal-deviation': { en: { title: 'Just vs 12-TET deviation', blurb: 'Cents deviation of just intonation from equal temperament.' }, es: { title: 'Desviación entonación justa vs TET', blurb: 'Desviación en cents.' } },
  'karplus-strong': { en: { title: 'Karplus-Strong synthesis', blurb: 'Plucked-string synthesis decay envelope.' }, es: { title: 'Síntesis Karplus-Strong', blurb: 'Envolvente de cuerda pulsada.' } },
  'wood-air-resonance': { en: { title: 'Helmholtz body resonance', blurb: 'Air-cavity resonance of guitar / violin bodies.' }, es: { title: 'Resonancia Helmholtz del cuerpo', blurb: 'Resonancia de cavidad de aire en cuerpos de cuerda.' } },
});

Object.assign(FORMULA_I18N, {
  'fermat-witness': { en: { title: 'Fermat / Miller-Rabin failure rate', blurb: 'False-positive bound 2^{−k} after k rounds.' }, es: { title: 'Tasa de fallos Fermat/MR', blurb: 'Cota de falsos positivos 2^{−k} tras k rondas.' } },
  'legendre-symbol': { en: { title: 'Legendre symbol (a/p)', blurb: '+1 / −1 / 0 quadratic-residue indicator.' }, es: { title: 'Símbolo de Legendre (a/p)', blurb: 'Indicador de residuo cuadrático.' } },
  'source-coding-bound': { en: { title: 'Shannon source-coding bound', blurb: 'Binary entropy = lower bound on mean code length.' }, es: { title: 'Cota de codificación de fuente', blurb: 'Entropía binaria = cota inferior de longitud media.' } },
  'totient-density': { en: { title: 'Totient density φ(n)/n', blurb: 'Few small prime factors → ratio close to 1.' }, es: { title: 'Densidad φ(n)/n', blurb: 'Pocos factores pequeños → razón cercana a 1.' } },
  'diffie-hellman-key': { en: { title: 'Diffie-Hellman shared key', blurb: 'Sweep exponent a; partner key B^a mod p.' }, es: { title: 'Clave compartida Diffie-Hellman', blurb: 'Recorre exponente a; clave B^a mod p.' } },
});

Object.assign(FORMULA_I18N, {
  'lennard-jones': { en: { title: 'Lennard-Jones potential', blurb: 'Pair potential between neutral atoms.' }, es: { title: 'Potencial de Lennard-Jones', blurb: 'Potencial entre átomos neutros.' } },
  'morse-potential': { en: { title: 'Morse potential', blurb: 'Realistic diatomic vibrational potential.' }, es: { title: 'Potencial de Morse', blurb: 'Potencial vibracional realista.' } },
  'debye-huckel': { en: { title: 'Debye-Hückel activity coefficient', blurb: 'Activity coefficient vs ionic strength.' }, es: { title: 'Coeficiente de actividad Debye-Hückel', blurb: 'Coef. de actividad vs fuerza iónica.' } },
  'weak-acid-fraction': { en: { title: 'Weak-acid dissociation fraction', blurb: 'α crosses 0 → 1 around pH = pKa.' }, es: { title: 'Fracción de disociación', blurb: 'α pasa 0 → 1 alrededor de pH = pKa.' } },
  'eyring-rate': { en: { title: 'Eyring transition-state rate', blurb: 'log10 k vs T from transition-state theory.' }, es: { title: 'Velocidad del estado de transición (Eyring)', blurb: 'log10 k vs T.' } },
});

Object.assign(FORMULA_I18N, {
  'ba-power-law': { en: { title: 'Barabási-Albert degree tail', blurb: 'Preferential attachment produces P(k) ~ k^{-3}.' }, es: { title: 'Cola de la distribución BA', blurb: 'Anclaje preferencial produce P(k) ~ k^{-3}.' } },
  'moore-bound': { en: { title: 'Moore bound (degree d, diameter k)', blurb: 'Max nodes for given degree and diameter.' }, es: { title: 'Cota de Moore', blurb: 'Nodos máx. para grado y diámetro dados.' } },
  'friendship-paradox': { en: { title: 'Friendship paradox', blurb: 'Average neighbour degree exceeds average degree by σ²/⟨k⟩.' }, es: { title: 'Paradoja de la amistad', blurb: 'Grado medio de vecinos > grado medio.' } },
  'erdos-renyi-clustering': { en: { title: 'ER clustering coefficient C = p', blurb: 'Random-graph clustering linear in mean degree.' }, es: { title: 'Coef. de clustering ER', blurb: 'C = ⟨k⟩/(n−1).' } },
  'spectral-gap': { en: { title: 'Cheeger spectral-gap bound', blurb: 'Expansion ≥ (d − λ₂)/2.' }, es: { title: 'Cota de Cheeger', blurb: 'Expansión ≥ (d − λ₂)/2.' } },
});

Object.assign(FORMULA_I18N, {
  'vis-viva': { en: { title: 'Vis-viva equation', blurb: 'Orbital speed vs distance.' }, es: { title: 'Ecuación vis-viva', blurb: 'Velocidad orbital vs distancia.' } },
  'orbital-period': { en: { title: "Kepler's third law T(a)", blurb: 'Orbital period scales as a^{3/2}.' }, es: { title: 'Tercera ley de Kepler', blurb: 'Periodo orbital escala como a^{3/2}.' } },
  'escape-velocity': { en: { title: 'Escape velocity', blurb: 'v_e = √(2GM/r).' }, es: { title: 'Velocidad de escape', blurb: 'v_e = √(2GM/r).' } },
  'einstein-radius': { en: { title: 'Einstein ring radius', blurb: 'Gravitational-lens ring angular radius.' }, es: { title: 'Radio del anillo de Einstein', blurb: 'Radio angular del anillo de lente.' } },
  'binary-pulsar-decay': { en: { title: 'Binary-pulsar orbital decay', blurb: 'Gravitational-wave emission shrinks orbital period.' }, es: { title: 'Decaimiento orbital de púlsar binario', blurb: 'Emisión de ondas gravitacionales acorta el periodo.' } },
});

Object.assign(FORMULA_I18N, {
  'caesar-shift': { en: { title: 'Caesar shift cipher', blurb: 'Letter positions shifted by k modulo 26.' }, es: { title: 'Cifrado César', blurb: 'Posiciones desplazadas por k mod 26.' } },
  'pisano-period': { en: { title: 'Pisano period π(m)', blurb: 'Period of the Fibonacci sequence modulo m.' }, es: { title: 'Periodo de Pisano', blurb: 'Periodo de Fibonacci módulo m.' } },
  'bsgs-cost': { en: { title: 'Baby-step Giant-step complexity', blurb: 'Discrete-log BSGS cost grows as √n.' }, es: { title: 'Complejidad BSGS', blurb: 'Coste BSGS crece como √n.' } },
  'avalanche-effect': { en: { title: 'Hash avalanche distribution', blurb: 'Ideal output-bit-flip distribution Binomial(n, 1/2).' }, es: { title: 'Distribución de avalancha', blurb: 'Binomial(n, 1/2) ideal.' } },
  'aes-keyspace': { en: { title: 'AES keyspace size (log10)', blurb: 'Symmetric keyspace grows as 2^n.' }, es: { title: 'Espacio de claves AES (log10)', blurb: 'Espacio simétrico crece como 2^n.' } },
});

Object.assign(FORMULA_I18N, {
  'lowpass-rc': { en: { title: 'RC low-pass response', blurb: 'First-order RC low-pass magnitude in dB.' }, es: { title: 'Respuesta RC paso bajo', blurb: 'Magnitud paso bajo RC en dB.' } },
  'resonant-q': { en: { title: 'Resonant peak Q', blurb: 'Second-order resonant filter magnitude.' }, es: { title: 'Pico resonante (Q)', blurb: 'Magnitud de filtro resonante de 2º orden.' } },
  'mel-scale': { en: { title: 'Mel auditory scale', blurb: 'Perceptual frequency mapping used in MFCC features.' }, es: { title: 'Escala Mel', blurb: 'Mapeo perceptivo de frecuencia.' } },
  'allpass-phase': { en: { title: 'First-order all-pass phase', blurb: 'Magnitude = 1; phase shifts with frequency.' }, es: { title: 'Fase pasa-todo de 1er orden', blurb: 'Magnitud = 1; la fase varía con la frecuencia.' } },
  'shepard-glissando': { en: { title: 'Shepard glissando illusion', blurb: 'Stacked octave gaussians create endless rising pitch.' }, es: { title: 'Glissando de Shepard', blurb: 'Octavas apiladas crean ilusión de tono ascendente.' } },
});

Object.assign(FORMULA_I18N, {
  'photoelectric': { en: { title: 'Photoelectric effect E_k = hf − φ', blurb: 'Max kinetic energy linear in photon frequency.' }, es: { title: 'Efecto fotoeléctrico', blurb: 'Energía cinética máx. lineal en frecuencia.' } },
  'fermi-energy-3d': { en: { title: '3D Fermi energy', blurb: 'Free-electron Fermi energy scales as n^{2/3} (log-log).' }, es: { title: 'Energía de Fermi 3D', blurb: 'E_F escala como n^{2/3}.' } },
  'bose-einstein-occupation': { en: { title: 'Bose-Einstein occupation number', blurb: '⟨n⟩ = 1/(e^{(E−μ)/kT} − 1).' }, es: { title: 'Ocupación Bose-Einstein', blurb: '⟨n⟩ = 1/(e^{(E−μ)/kT} − 1).' } },
  'fermi-dirac-occupation': { en: { title: 'Fermi-Dirac occupation number', blurb: 'Electron occupation probability vs (E−μ)/kT.' }, es: { title: 'Ocupación Fermi-Dirac', blurb: 'Probabilidad de ocupación electrónica.' } },
  'wkb-tunneling': { en: { title: 'WKB tunnelling transmission', blurb: 'Rectangular barrier transmission vs E/V.' }, es: { title: 'Transmisión WKB', blurb: 'Transmisión por barrera rectangular vs E/V.' } },
});

Object.assign(FORMULA_I18N, {
  'tafel-equation': { en: { title: 'Tafel equation', blurb: 'Electrochemical overpotential vs log current density.' }, es: { title: 'Ecuación de Tafel', blurb: 'Sobrepotencial vs log densidad de corriente.' } },
  'saha-equation': { en: { title: 'Saha ionisation equation', blurb: 'Stellar-gas ionisation ratio (log10) vs temperature.' }, es: { title: 'Ecuación de Saha', blurb: 'Razón de ionización vs temperatura.' } },
  'boltzmann-population': { en: { title: 'Two-level Boltzmann population ratio', blurb: 'High vs low state population N1/N0 = e^{−ΔE/kT}.' }, es: { title: 'Población Boltzmann (2 niveles)', blurb: 'Razón N1/N0.' } },
  'flory-huggins': { en: { title: 'Flory-Huggins free energy of mixing', blurb: 'Polymer-solution mixing free energy vs φ.' }, es: { title: 'Energía libre Flory-Huggins', blurb: 'Mezcla de polímero en solución.' } },
  'zero-order-kinetics': { en: { title: 'Zero-order kinetics', blurb: 'Concentration drops linearly; rate independent of [A].' }, es: { title: 'Cinética de orden cero', blurb: 'Concentración cae linealmente.' } },
});

Object.assign(FORMULA_I18N, {
  'turan-density': { en: { title: 'Turán edge bound', blurb: 'Max edges of a K_{r+1}-free graph.' }, es: { title: 'Cota de Turán', blurb: 'Aristas máximas sin K_{r+1}.' } },
  'moon-moser': { en: { title: 'Moon-Moser MIS bound', blurb: 'Maximum independent-set count ≤ 3^{n/3}.' }, es: { title: 'Cota Moon-Moser', blurb: 'Conjuntos independientes ≤ 3^{n/3}.' } },
  'spectral-radius-pf': { en: { title: 'Perron-Frobenius spectral radius bounds', blurb: '√d_max ≤ ρ(A) ≤ d_max.' }, es: { title: 'Radio espectral PF', blurb: '√d_max ≤ ρ(A) ≤ d_max.' } },
  'wilf-clique': { en: { title: 'Wilf clique-number lower bound', blurb: 'ω(G) ≥ n/(n − ρ(A)).' }, es: { title: 'Cota Wilf del número de clique', blurb: 'ω(G) ≥ n/(n − ρ(A)).' } },
  'girth-moore': { en: { title: 'Girth-Moore bound', blurb: 'Minimum nodes for given degree and odd girth.' }, es: { title: 'Cota de Moore (cintura)', blurb: 'Nodos mínimos para grado y cintura impar.' } },
});

Object.assign(FORMULA_I18N, {
  'carmichael-lambda': { en: { title: 'Carmichael λ(n)', blurb: 'Group exponent — alternative to Euler φ in RSA.' }, es: { title: 'Función λ de Carmichael', blurb: 'Exponente de grupo — alternativa a φ.' } },
  'gcd-step-count': { en: { title: 'Euclidean GCD step bound (Lamé)', blurb: 'Worst-case division steps ≤ 5 log10(min).' }, es: { title: 'Cota de pasos de Euclides', blurb: 'Pasos de división ≤ 5 log10(mín).' } },
  'chebyshev-theta': { en: { title: 'Chebyshev θ(x) = Σ log p', blurb: 'Prime log-sum asymptotic to x.' }, es: { title: 'θ(x) de Chebyshev', blurb: 'Suma de log p asintótica a x.' } },
  'mertens-mu': { en: { title: 'Mertens M(x) = Σ μ(n)', blurb: 'Möbius cumulative; Mertens conjecture bound √x.' }, es: { title: 'Mertens M(x)', blurb: 'Acumulado de Möbius.' } },
  'lattice-shortest-vector': { en: { title: 'Minkowski shortest-vector bound', blurb: 'Lattice short-vector length bound vs dimension.' }, es: { title: 'Cota del vector más corto', blurb: 'Cota de longitud del vector más corto vs dimensión.' } },
});

Object.assign(FORMULA_I18N, {
  'lorentz-gamma': { en: { title: 'Lorentz γ factor', blurb: 'Time-dilation factor vs β = v/c.' }, es: { title: 'Factor γ de Lorentz', blurb: 'Factor de dilatación frente a β = v/c.' } },
  'relativistic-momentum': { en: { title: 'Relativistic momentum', blurb: 'p = γmv (units of mc).' }, es: { title: 'Momento relativista', blurb: 'p = γmv (unidades mc).' } },
  'relativistic-doppler': { en: { title: 'Relativistic Doppler shift', blurb: 'Longitudinal Doppler frequency ratio.' }, es: { title: 'Doppler relativista', blurb: 'Razón Doppler longitudinal.' } },
  'relativistic-velocity-add': { en: { title: 'Relativistic velocity addition', blurb: 'Composing two collinear velocities.' }, es: { title: 'Suma relativista de velocidades', blurb: 'Composición de dos velocidades colineales.' } },
  'four-momentum-shell': { en: { title: 'Relativistic energy shell', blurb: 'E² = (pc)² + (mc²)²; rest mass plus momentum.' }, es: { title: 'Capa de energía relativista', blurb: 'E² = (pc)² + (mc²)².' } },
});

Object.assign(FORMULA_I18N, {
  'sound-intensity-distance': { en: { title: 'Sound intensity 1/r² falloff', blurb: 'Point-source intensity falls as 1/r².' }, es: { title: 'Intensidad sonora 1/r²', blurb: 'Intensidad cae como 1/r².' } },
  'spl-db': { en: { title: 'Sound pressure level (dB)', blurb: 'Reference p_ref = 20 µPa.' }, es: { title: 'Nivel de presión sonora (dB)', blurb: 'Referencia p_ref = 20 µPa.' } },
  'critical-band-bark': { en: { title: 'Bark critical-band scale', blurb: 'Frequency-compressed perceptual scale.' }, es: { title: 'Escala Bark', blurb: 'Escala perceptiva de frecuencia.' } },
  'standing-wave-pipe': { en: { title: 'Closed-pipe standing wave fₙ', blurb: 'Fundamental + odd harmonics in a closed pipe.' }, es: { title: 'Onda estacionaria en tubo cerrado', blurb: 'Fundamental + armónicos impares.' } },
  'perceived-loudness': { en: { title: "Stevens' loudness law", blurb: 'Perceived loudness ∝ I^{0.3}.' }, es: { title: 'Ley de Stevens', blurb: 'Sonoridad percibida ∝ I^{0.3}.' } },
});

Object.assign(FORMULA_I18N, {
  'rabi-oscillation': { en: { title: 'Rabi oscillation P(t)', blurb: 'Excited-state probability sin²(Ωt/2).' }, es: { title: 'Oscilación de Rabi', blurb: 'Probabilidad sin²(Ωt/2).' } },
  'spontaneous-emission': { en: { title: 'Spontaneous emission Γ ∝ ω³', blurb: 'log–log slope 3.' }, es: { title: 'Emisión espontánea', blurb: 'Pendiente log–log = 3.' } },
  'landau-zener': { en: { title: 'Landau-Zener transition', blurb: 'Diabatic transition probability at avoided crossings.' }, es: { title: 'Transición Landau-Zener', blurb: 'Probabilidad diabática en cruces evitados.' } },
  'qubit-rotation': { en: { title: 'Bloch-sphere rotation ⟨σz⟩', blurb: 'Z expectation as polar angle θ varies.' }, es: { title: 'Rotación de la esfera de Bloch', blurb: 'Valor esperado ⟨σz⟩ vs θ.' } },
  'franck-condon': { en: { title: 'Franck-Condon vibrational overlap', blurb: 'Poisson-like intensities; Huang-Rhys factor S.' }, es: { title: 'Solapamiento Franck-Condon', blurb: 'Intensidades tipo Poisson (factor Huang-Rhys S).' } },
});

Object.assign(FORMULA_I18N, {
  'mertens-prime-harmonic': { en: { title: 'Σ 1/p over primes', blurb: "Mertens' second theorem: ln ln n divergence." }, es: { title: 'Σ 1/p sobre primos', blurb: 'Divergencia ln ln n.' } },
  'liouville-lambda': { en: { title: 'Liouville λ(n) = (−1)^Ω(n)', blurb: '±1 sequence depending on prime-multiplicity parity.' }, es: { title: 'Función λ de Liouville', blurb: 'Secuencia ±1 según paridad Ω(n).' } },
  'divisor-tau': { en: { title: 'Divisor count d(n)', blurb: 'Number of divisors of n.' }, es: { title: 'd(n)', blurb: 'Número de divisores de n.' } },
  'abundance': { en: { title: 'Abundance index σ(n)/n', blurb: '>2 abundant, <2 deficient, =2 perfect.' }, es: { title: 'Índice σ(n)/n', blurb: '>2 abundante; =2 perfecto.' } },
  'omega-prime-count': { en: { title: 'ω(n): distinct prime factors', blurb: 'Erdős-Kac: ω(n) ≈ ln ln n.' }, es: { title: 'ω(n) factores distintos', blurb: 'ω(n) ≈ ln ln n.' } },
});

Object.assign(FORMULA_I18N, {
  'plucker-genus': { en: { title: 'Plücker genus g(d)', blurb: 'Smooth plane algebraic curve genus.' }, es: { title: 'Género de Plücker', blurb: 'Curva algebraica plana suave.' } },
  'euler-genus-orientable': { en: { title: 'Orientable surface χ(g)', blurb: 'Euler characteristic of closed orientable surface.' }, es: { title: 'χ(g) orientable', blurb: 'Característica de Euler de superficie orientable.' } },
  'mapping-class-dim': { en: { title: 'Mapping-class group dimension', blurb: 'dim M_g = 6g − 6 for g ≥ 2.' }, es: { title: 'Dimensión del grupo modular', blurb: 'dim M_g = 6g − 6.' } },
  'seifert-genus-bound': { en: { title: 'Seifert genus lower bound', blurb: 'Knot genus ≥ deg(Alexander)/2.' }, es: { title: 'Cota del género de Seifert', blurb: 'Género ≥ deg(Alexander)/2.' } },
  'cw-cells-betti': { en: { title: 'Morse inequalities', blurb: 'CW k-cell count ≥ k-th Betti number.' }, es: { title: 'Desigualdades de Morse', blurb: 'k-celdas ≥ k-ésimo número de Betti.' } },
});

Object.assign(FORMULA_I18N, {
  'first-order-kinetics': { en: { title: 'First-order kinetics', blurb: 'Exponential decay; half-life ln2/k.' }, es: { title: 'Cinética de primer orden', blurb: 'Decaimiento exponencial; t₁/₂ = ln2/k.' } },
  'half-life-decay': { en: { title: 'Radioactive half-life', blurb: 'N(t)/N0 vs t / t₁/₂.' }, es: { title: 'Vida media radiactiva', blurb: 'N(t)/N0 vs t / t₁/₂.' } },
  'heat-capacity-debye': { en: { title: 'Debye heat capacity (low-T limit)', blurb: 'C_V ∝ T³ at low T.' }, es: { title: 'Capacidad calorífica Debye', blurb: 'C_V ∝ T³ a baja T.' } },
  'buffer-capacity': { en: { title: 'Buffer capacity β(pH)', blurb: 'Maximum at pH = pKa.' }, es: { title: 'Capacidad amortiguadora', blurb: 'Máximo en pH = pKa.' } },
  'raoult-deviation': { en: { title: 'Margules activity (non-ideal)', blurb: 'ln γ₁ = A x₂².' }, es: { title: 'Margules: actividad no ideal', blurb: 'ln γ₁ = A x₂².' } },
});

Object.assign(FORMULA_I18N, {
  'soft-thresholding': { en: { title: 'Soft-thresholding operator', blurb: 'L1 (Lasso) proximal operator.' }, es: { title: 'Operador de soft-threshold', blurb: 'Operador proximal L1.' } },
  'lr-cosine-decay': { en: { title: 'Cosine learning-rate decay', blurb: 'Smoothly anneal η_max → η_min.' }, es: { title: 'Decaimiento coseno de η', blurb: 'Recocido suave de η_max → η_min.' } },
  'lr-exp-decay': { en: { title: 'Exponential LR decay', blurb: 'η_t = η₀ γ^t.' }, es: { title: 'Decaimiento exponencial', blurb: 'η_t = η₀ γ^t.' } },
  'adam-bias': { en: { title: 'Adam bias-correction factor', blurb: '1/(1 − β^t) compensates early estimates.' }, es: { title: 'Corrección de sesgo Adam', blurb: '1/(1 − β^t).' } },
  'armijo-condition': { en: { title: 'Armijo line-search condition', blurb: 'Accept α if f drops below the secant.' }, es: { title: 'Condición de Armijo', blurb: 'Aceptar α si f cae bajo la secante.' } },
});

Object.assign(FORMULA_I18N, {
  'heron-area': { en: { title: "Heron's triangle area", blurb: 'Sweep third side a; b, c fixed.' }, es: { title: 'Área de Herón', blurb: 'Recorre el tercer lado a.' } },
  'spiral-theodorus': { en: { title: 'Theodorus spiral radius √n', blurb: 'Right triangles stitched to give √n radii.' }, es: { title: 'Espiral de Teodoro', blurb: 'Triángulos rectángulos → radios √n.' } },
  'distance-point-line': { en: { title: 'Distance from point to line', blurb: '|ax+by+c|/√(a²+b²).' }, es: { title: 'Distancia punto-recta', blurb: '|ax+by+c|/√(a²+b²).' } },
  'inscribed-radius': { en: { title: 'Inscribed-circle radius r = A/s', blurb: 'Isosceles triangle in-radius vs base.' }, es: { title: 'Radio inscrito r = A/s', blurb: 'Triángulo isósceles vs base.' } },
  'golden-section': { en: { title: 'Golden-ratio successive divisions', blurb: 'Powers of 1/φ form a geometric sequence.' }, es: { title: 'Sección áurea', blurb: 'Potencias de 1/φ.' } },
});
