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
