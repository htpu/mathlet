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
  'michaelis-menten': { en: { title: "Michaelis-Menten kinetics", blurb: "Enzyme rate saturating with substrate concentration." } },
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
