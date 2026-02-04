import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  AlertCircle,
  ShieldCheck,
  Shield,
  Gauge,
  Zap,
  Monitor,
  Settings,
  ChevronRight,
  Check,
  Star,
  Smartphone,
  Wind,
  Car,
  MessageCircle,
} from 'lucide-react';
import { carModels } from '../data/carModels';
import { carContent } from '../data/carContent';

const whatsappUrl = 'https://wa.me/message/ITLGURPPW3NTK1';

const CarDetailPage: React.FC = () => {
  const { brand, model } = useParams();
  const car = useMemo(
    () => carModels.find((c) => c.brandSlug === brand && c.modelSlug === model),
    [brand, model]
  );
  const content = car ? carContent[car.modelSlug] : undefined;
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isFeatureHovered, setIsFeatureHovered] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState<Record<number, boolean>>({});
  const [expandedSpecs, setExpandedSpecs] = useState<Record<number, boolean>>({});
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || 0;
      setShowStickyCTA(scrolled > 320);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isFeatureCarouselModel =
    car?.modelSlug === 'poer' ||
    car?.modelSlug === 'tank-300' ||
    car?.modelSlug === 'tank-500' ||
    car?.modelSlug === 'h6' ||
    car?.modelSlug === 'jolion' ||
    car?.modelSlug === 'wingle' ||
    car?.modelSlug === 'mazda-2' ||
    car?.modelSlug === 'mazda-3' ||
    car?.modelSlug === 'cx-3' ||
    car?.modelSlug === 'cx-30' ||
    car?.modelSlug === 'cx-9' ||
    car?.modelSlug === 'cx-5' ||
    car?.modelSlug === 'cx-60' ||
    car?.modelSlug === 'cx-90' ||
    car?.modelSlug === 'bt-50';

  useEffect(() => {
    if (!isFeatureCarouselModel || !content?.features?.length || isFeatureHovered) return;
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % content.features!.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [content?.features, isFeatureHovered, isFeatureCarouselModel]);

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] to-[#1a1a24] flex items-center justify-center px-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-xl w-full text-center space-y-6">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-white">Modelo no encontrado</h1>
          <p className="text-white/60 text-lg">
            El vehículo que buscas no existe o fue movido. Regresa al catálogo para seguir explorando.
          </p>
          <Link
            to="/autos-nuevos"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  const currentVariant = car.variants[activeVariant];
  const hasMultipleVariants = car.variants.length > 1;
  const pdfUrl = encodeURI(`/Fichas tecnicas carros copy/${currentVariant.baseFile}.pdf`);
  const heroImageRaw = car.heroImage;
  const heroImage = encodeURI(heroImageRaw);
  const gallery = useMemo(() => {
    const images = content?.gallery ?? [];
    return images.filter((img) => img !== heroImageRaw).map((img) => encodeURI(img));
  }, [content?.gallery, heroImageRaw]);
  const featureImages = useMemo(() => {
    if (!content?.features?.length || gallery.length === 0) return [];
    return Array.from({ length: content.features.length }, (_, idx) => gallery[idx % gallery.length]);
  }, [content?.features?.length, gallery]);
  const tank500FeatureSwap = useMemo(() => {
    if (car?.modelSlug !== 'tank-500' || !content?.features?.length) return null;
    const powerIndex = content.features.findIndex((feature) => feature.title === 'Potencia Híbrida Extraordinaria');
    const luxuryIndex = content.features.findIndex((feature) => feature.title === 'Lujo en Cada Detalle');
    if (powerIndex === -1 || luxuryIndex === -1) return null;
    return { powerIndex, luxuryIndex };
  }, [car?.modelSlug, content?.features]);

  // Icons mapping for features
  const featureIcons: Record<string, React.ReactNode> = {
    motor: <Zap className="w-5 h-5" />,
    potencia: <Gauge className="w-5 h-5" />,
    seguridad: <ShieldCheck className="w-5 h-5" />,
    tecnología: <Monitor className="w-5 h-5" />,
    confort: <Wind className="w-5 h-5" />,
    diseño: <Star className="w-5 h-5" />,
  };
  const featureImageOverrides: Record<string, Record<string, string>> = {
    jolion: {
      'Motor Turbo y HEV': '/carImages/GWM copy/Haval Jolion HEV/Potencia motor.png',
      'Transmisión DCT y modos de manejo': '/carImages/GWM copy/Haval Jolion/Controles desde el volante y modos de manejo.png',
      'Conectividad y multimedia': '/carImages/GWM copy/Haval Jolion/Pantalla flotante y tablero digital.png',
      'Confort y equipamiento': '/carImages/GWM copy/Haval Jolion/Interior moderno.png',
      'Asistencias a la conducción': '/carImages/GWM copy/Haval Jolion/Control de estabilidad y asistencia en pendientes.png',
      'Seguridad activa y pasiva': '/carImages/GWM copy/Haval Jolion/Sensores y cámara de retroceso.png',
    },
    'mazda-3': {
      'Motor SKYACTIV-G 1.5 y AT 6 vel': '/carImages/Mazda copy/Mazda 3/Motor 1.5 y caja automática de 6 velocidades.png',
      'Frenos ABS, GVC y EPB': '/carImages/Mazda copy/Mazda 3/Frenado automático en pendiente y freno eléctrico.png',
      '7 bolsas de aire y protección': '/carImages/Mazda copy/Mazda 3/7 bolsas de aire y sensores de retroceso.png',
      'Pantalla con cámara de retroceso': '/carImages/Mazda copy/Mazda 3/Pantalla central con cámara de retroceso.png',
      'CarPlay y Android de fábrica': '/carImages/Mazda copy/Mazda 3/Apple CarPlay y Android Auto.png',
      'Confort y practicidad interior': '/carImages/Mazda copy/Mazda 3/Asientos cómodos y aire acondicionado.png',
      'Acceso inteligente e iluminación': '/carImages/Mazda copy/Mazda 3/Encendido sin llave y luces automáticas.png',
    },
    'cx-5': {
      'Motores SKYACTIV 2.0 y 2.5': '/carImages/Mazda copy/CX-5/motores.avif',
      'Control y frenado inteligente': '/carImages/Mazda copy/CX-5/frenos.jpeg',
      'Pantalla 10.25” y conectividad': '/carImages/Mazda copy/CX-5/pantalla.webp',
      'Confort y acabados': '/carImages/Mazda copy/CX-5/comfort.avif',
      'Asistencias y cámaras (según versión)': '/carImages/Mazda copy/CX-5/asistencias y cámaras.avif',
      'Exterior e iluminación': '/carImages/Mazda copy/CX-5/iluminacion.webp',
    },
    'bt-50': {
      'Motores turbodiésel 1.9 / 3.0': '/carImages/Mazda copy/BT-50/Motor 1.9 o 3.0.png',
      'Tracción 4x4 y control': '/carImages/Mazda copy/BT-50/Opción de tracción 4x4.png',
      'Transmisión MT / AT': '/carImages/Mazda copy/BT-50/Caja mecánica de 6 velocidades.png',
      'Confort práctico': '/carImages/Mazda copy/BT-50/Aire acondicionado y controles esenciales.png',
      'Conectividad (según versión)': '/carImages/Mazda copy/BT-50/Interior funcional y bien distribuido.png',
      'Seguridad (según versión)': '/carImages/Mazda copy/BT-50/Más equipamiento en la versión Full.png',
    },
  };

  const SectionCTA = ({
    className = '',
    downloadHref,
    downloadLabel,
  }: {
    className?: string;
    downloadHref?: string;
    downloadLabel?: string;
  }) => (
    <div className={`mt-8 flex flex-col sm:flex-row gap-3 justify-center ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent to-orange-500 text-white font-semibold hover:scale-105 transition"
      >
        <MessageCircle className="w-4 h-4" /> Cotizar por WhatsApp
      </a>
      <a
        href={downloadHref ?? '#versiones'}
        target={downloadHref ? '_blank' : undefined}
        rel={downloadHref ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/20"
      >
        <Download className="w-4 h-4" /> {downloadLabel ?? 'Ver fichas técnicas'}
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Sticky CTA bar */}
      {content && (
        <div
          className={`fixed z-[60] inset-x-4 md:left-1/2 md:-translate-x-1/2 md:w-[720px] lg:w-[860px] transition-all duration-300 ${
            showStickyCTA ? 'top-20 opacity-100 translate-y-0' : '-top-32 opacity-0 -translate-y-4'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-xl shadow-accent/10 px-4 py-3 flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-white/15">
                {gallery.length > 0 ? (
                  <img src={gallery[0]} alt={car.model} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/60">
                    <Car className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">{car.brand}</p>
                <p className="text-sm font-semibold truncate">{content.heroTitle || car.model}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
              {content.quickSpecs?.slice(0, 3).map((spec) => (
                <span key={spec.label} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                  {spec.value} {spec.label}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-accent to-orange-500 text-white text-sm font-semibold hover:scale-105 transition"
              >
                <MessageCircle className="w-4 h-4" /> Cotizar
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-semibold hover:bg-white/20"
              >
                <Download className="w-4 h-4" /> Ficha
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Immersive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px]" />
          <div className="absolute -right-1/4 top-1/4 w-[600px] h-[600px] bg-blue/20 rounded-full blur-[120px]" />
          <div className="absolute left-1/3 -bottom-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 lg:py-32">
          {/* Back Button */}
          <Link 
            to="/autos-nuevos" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Volver al catálogo</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Brand Badge */}
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {car.brand}
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-accent to-orange-500 rounded-full text-xs font-bold text-white shadow-lg shadow-accent/30">
                  {car.variants.length} {car.variants.length === 1 ? 'Versión' : 'Versiones'}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                  {content?.heroTitle || car.model}
                </h1>
                {content?.tagline && (
                  <p className="mt-4 text-xl md:text-2xl text-accent font-medium">
                    {content.tagline}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                {content?.heroDescription || 'Descubre la excelencia en diseño, tecnología y rendimiento.'}
              </p>

              {/* Key Specs Quick View */}
              {content?.quickSpecs && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {content.quickSpecs.map((spec, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <p
                        className={`font-bold text-white leading-tight tracking-tight ${
                          spec.value.trim().length > 10 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                        }`}
                      >
                        {spec.value}
                      </p>
                      <p className="text-xs text-white/50 uppercase tracking-wide mt-1">{spec.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar Ahora</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Ficha Técnica PDF</span>
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-accent via-white/20 to-accent rounded-3xl opacity-50" />
                
                <div className="absolute inset-[1px] bg-[#0a0a0f] rounded-3xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt={car.model}
                    className={`w-full h-full ${car.modelSlug === 'h6' ? 'object-contain' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Price Badge - Optional */}
                {content?.startingPrice && (
                  <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
                    <p className="text-xs text-white/60 uppercase tracking-wide">Desde</p>
                    <p className="text-2xl font-bold text-white">{content.startingPrice}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Poer-only visual break with extra imagery */}
      {car.modelSlug === 'poer' && (
        <section className="relative py-16 bg-[#0d0d14]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
          <div className="relative max-w-7xl mx-auto px-4">
            {/*
              Use two different visuals to avoid repetition; both tiles use dedicated Poer imagery.
              A stronger overlay increases text legibility on busy backgrounds.
            */}
            {(() => {
              const tileImages = [
                '/carImages/GWM copy/Poer/Poer power.jpg',
                '/carImages/GWM copy/Poer/Interior cabina.jpg',
              ];
              return (
                <>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {[0, 1].map((tile) => (
                      <div
                        key={tile}
                        className="flex-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl"
                      >
                        <div className="absolute inset-0">
                          <img
                            src={tileImages[tile] || gallery[0]}
                            alt="GWM Poer"
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85" />
                        </div>
                        <div className="relative p-8 space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wide text-white/70">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            {tile === 0 ? 'Trabajo y potencia' : 'Confort y tecnología'}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {tile === 0 ? 'Motor turbodiésel 161 HP, 410 Nm' : 'Cabina premium con conectividad total'}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {(tile === 0
                              ? ['4x4 en todas las versiones', '2.0L turbodiésel', 'Hasta 410 Nm de torque', 'Transmisión AT u MT']
                              : ['Pantalla 9" con CarPlay/Android Auto', 'Tapicería de cuero (Élite+)', 'Cámara 360° (Deluxe)', 'ADAS completo (Deluxe)']
                            ).map((pill) => (
                              <span
                                key={pill}
                                className="px-3 py-1 rounded-full bg-white/15 text-white text-xs border border-white/15 shadow-sm"
                              >
                                {pill}
                              </span>
                            ))}
                          </div>
                          <p className="text-white/80 leading-relaxed max-w-xl">
                            {tile === 0
                              ? 'Capacidad real de carga y remolque, con chasis tipo escalera y modos de manejo para ciudad o terreno.'
                              : 'Un interior que se siente de SUV: climatización automática, llave inteligente y asistencias que reducen el esfuerzo diario.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <SectionCTA />
                </>
              );
            })()}
          </div>
        </section>
      )}

      {/* Versions Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f16]" id="versiones">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {hasMultipleVariants ? 'Elige Tu Versión' : 'Versión Disponible'}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {hasMultipleVariants
                ? 'Cada versión está diseñada para diferentes necesidades. Encuentra la que mejor se adapta a tu estilo de vida.'
                : 'Este modelo cuenta con una única versión con todo el equipamiento de fábrica.'}
            </p>
          </div>

          {/* Version Cards */}
          <div
            className={`flex gap-3 py-2 ${
              hasMultipleVariants
                ? 'overflow-x-auto overflow-y-visible pb-4 px-3 snap-x snap-mandatory scroll-px-3 [-webkit-overflow-scrolling:touch]'
                : 'justify-center'
            }`}
          >
            {car.variants.map((variant, index) => (
              <button
                key={variant.baseFile}
                onClick={() => setActiveVariant(index)}
                className={`${hasMultipleVariants ? 'snap-start min-w-[220px]' : 'w-full max-w-md'} relative p-5 rounded-2xl text-left transition-all duration-300 ${
                  activeVariant === index
                    ? 'bg-gradient-to-br from-accent/20 to-orange-500/10 border-2 border-accent shadow-xl shadow-accent/20 scale-[1.02]'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {activeVariant === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
                <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                  {hasMultipleVariants ? 'Versión' : 'Única versión'}
                </p>
                <h3 className="text-lg font-bold text-white">{variant.name}</h3>
                {content?.variants?.[variant.name]?.highlight && (
                  <p className="text-sm text-accent mt-2">{content.variants[variant.name].highlight}</p>
                )}
              </button>
            ))}
          </div>

          <SectionCTA downloadHref={pdfUrl} downloadLabel={`Descargar ficha técnica de ${currentVariant.name}`} />
        </div>
      </section>

      {/* Features Showcase */}
      {content?.features && content.features.length > 0 && (
        isFeatureCarouselModel ? (
          <section className="relative py-20 bg-[#0f0f16]" id="caracteristicas">
            <div className="max-w-7xl mx-auto px-4 space-y-6">
              <div className="text-center mb-6">
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Características</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-3">
                  Lo Que Lo Hace Especial
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                  Pasa por cada highlight, mira la imagen y abre los detalles solo si quieres más.
                </p>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setIsFeatureHovered(true)}
                onMouseLeave={() => setIsFeatureHovered(false)}
              >
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeFeature * 100}%)` }}
                  >
                    {content.features.map((feature, idx) => {
                      const specs = feature.specs || [];
                      const preview = expandedFeatures[idx] ? specs : specs.slice(0, 3);
                      const modelOverrides = featureImageOverrides[car.modelSlug ?? ''];
                      const featureImageOverride =
                        car.modelSlug === 'poer' && feature.title === 'Capacidad de Carga Superior'
                          ? encodeURI('/carImages/GWM copy/Poer/Capacidad de Carga Superior.jpg')
                          : modelOverrides?.[feature.title]
                            ? encodeURI(modelOverrides[feature.title])
                            : undefined;
                      const mappedImageIndex = tank500FeatureSwap
                        ? idx === tank500FeatureSwap.powerIndex
                          ? tank500FeatureSwap.luxuryIndex
                          : idx === tank500FeatureSwap.luxuryIndex
                            ? tank500FeatureSwap.powerIndex
                            : idx
                        : idx;
                      const featureImage = featureImageOverride ?? featureImages[mappedImageIndex % featureImages.length];
                      return (
                        <div key={idx} className="min-w-full px-1">
                          <div
                            className={`grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch rounded-3xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 ${
                              activeFeature === idx ? 'shadow-2xl shadow-accent/20 scale-[1.01]' : 'opacity-80'
                            }`}
                          >
                            <div className="p-8 space-y-4 flex flex-col justify-center">
                              <div className="inline-flex items-center gap-3 text-white/70 text-xs uppercase tracking-[0.25em]">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                {feature.title}
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                {feature.title}
                              </h3>
                              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                                {feature.description}
                              </p>

                              {preview.length > 0 && (
                                <ul className="space-y-2">
                                  {preview.map((spec, specIdx) => (
                                    <li key={specIdx} className="flex items-start gap-3 text-sm md:text-base text-white/80">
                                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {specs.length > 3 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedFeatures((prev) => ({ ...prev, [idx]: !prev[idx] }))
                                  }
                                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors mt-2"
                                >
                                  <span>{expandedFeatures[idx] ? 'Ver menos' : `Ver ${specs.length - preview.length} más`}</span>
                                  <ChevronRight
                                    className={`w-3 h-3 transition-transform ${expandedFeatures[idx] ? 'rotate-90' : ''}`}
                                  />
                                </button>
                              )}
                            </div>

                            <div className="relative min-h-[260px] md:min-h-full">
                              <div
                                className={`absolute inset-0 transition-transform duration-700 ease-out ${
                                  activeFeature === idx ? 'scale-100' : 'scale-95 translate-y-2'
                                }`}
                              >
                                {featureImage ? (
                                  <img
                                    src={featureImage}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Controls */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveFeature((prev) => (prev - 1 + content.features.length) % content.features.length)
                  }
                  className="absolute left-3 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white rounded-full p-3 hover:bg-white/20 transition z-10"
                  aria-label="Anterior característica"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFeature((prev) => (prev + 1) % content.features.length)}
                  className="absolute right-3 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white rounded-full p-3 hover:bg-white/20 transition z-10"
                  aria-label="Siguiente característica"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-6">
                  {content.features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeFeature === idx ? 'w-6 bg-accent' : 'w-2 bg-white/30'
                      }`}
                      aria-label={`Ir a característica ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Contextual CTA after features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="lg:col-span-2 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Agenda</p>
                  <h3 className="text-2xl font-bold text-white">Agenda tu test drive hoy</h3>
                  <p className="text-white/60 text-sm md:text-base">Conoce el equipamiento en persona: manejo, conectividad y asistencias.</p>
                </div>
                <div className="flex gap-3 justify-start lg:justify-end">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent to-orange-500 text-white font-semibold hover:scale-105 transition"
                  >
                    <MessageCircle className="w-4 h-4" /> Agendar
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/20"
                  >
                    <Download className="w-4 h-4" /> Ver ficha
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="relative py-20 bg-[#0f0f16]" id="caracteristicas">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Características</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
                  Lo Que Lo Hace Especial
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                  Explora los highlights y despliega más detalles solo cuando los necesites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 transform hover:-translate-y-1"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    
                    <div className="relative">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <div className="text-accent">
                          {featureIcons[feature.icon] || <Star className="w-6 h-6" />}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed">{feature.description}</p>
                      
                      {feature.specs && feature.specs.length > 0 && (
                        <div className="mt-4 space-y-3">
                          <ul className="space-y-2">
                            {(expandedFeatures[idx] ? feature.specs : feature.specs.slice(0, 3)).map((spec, specIdx) => (
                              <li key={specIdx} className="flex items-start gap-2 text-sm text-white/60">
                                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                          {feature.specs.length > 3 && (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedFeatures((prev) => ({ ...prev, [idx]: !prev[idx] }))
                              }
                              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-white transition-colors"
                            >
                              <span>{expandedFeatures[idx] ? 'Ver menos' : 'Ver más'}</span>
                              <ChevronRight
                                className={`w-3 h-3 transition-transform ${expandedFeatures[idx] ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contextual CTA after features */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="lg:col-span-2 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Agenda</p>
                  <h3 className="text-2xl font-bold text-white">Agenda tu test drive hoy</h3>
                  <p className="text-white/60 text-sm md:text-base">Conoce el equipamiento en persona: manejo, conectividad y asistencias.</p>
                </div>
                <div className="flex gap-3 justify-start lg:justify-end">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent to-orange-500 text-white font-semibold hover:scale-105 transition"
                  >
                    <MessageCircle className="w-4 h-4" /> Agendar
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/20"
                  >
                    <Download className="w-4 h-4" /> Ver ficha
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {/* Detailed Specifications by Category */}
      {content?.specifications && (
        <section className="relative py-20 bg-gradient-to-b from-[#0f0f16] to-[#0a0a0f]" id="especificaciones">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Especificaciones</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Diseñado Para Impresionar
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                Ve primero lo esencial y expande solo lo que quieras revisar en detalle.
              </p>
            </div>

            <div className="space-y-6">
              {content.specifications.map((specGroup, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transform transition hover:-translate-y-1 hover:border-accent/40"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedSpecs((prev) => ({ ...prev, [idx]: !prev[idx] }))
                    }
                    className="w-full flex items-center gap-4 px-8 py-6 border-b border-white/10 bg-white/[0.02] text-left"
                    aria-expanded={!!expandedSpecs[idx]}
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                      {specGroup.icon === 'motor' && <Zap className="w-5 h-5 text-accent" />}
                      {specGroup.icon === 'interior' && <Monitor className="w-5 h-5 text-accent" />}
                      {specGroup.icon === 'exterior' && <Car className="w-5 h-5 text-accent" />}
                      {specGroup.icon === 'seguridad' && <Shield className="w-5 h-5 text-accent" />}
                      {specGroup.icon === 'tecnología' && <Smartphone className="w-5 h-5 text-accent" />}
                      {!specGroup.icon && <Settings className="w-5 h-5 text-accent" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{specGroup.title}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">
                        {specGroup.items.length} detalles
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-white/70 transition-transform ${expandedSpecs[idx] ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {expandedSpecs[idx] && (
                    <div className="p-8 pt-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                        {specGroup.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-3 py-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contextual CTA after specs */}
            <div className="mt-12 flex flex-col gap-3 bg-white/5 border border-white/10 rounded-3xl p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Consulta</p>
                <h3 className="text-xl font-bold text-white">Confirma disponibilidad y colores</h3>
                <p className="text-white/60 text-sm md:text-base">Te respondemos por WhatsApp con tiempos de entrega.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/20 w-full lg:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" /> Preguntar ahora
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Version Comparison Table */}
      {content?.variantComparison && car.variants.length > 1 && (
        <section className="relative py-20 bg-[#0a0a0f]" id="comparativa">
          <div className="max-w-7xl mx-auto px-4 space-y-10">
            <div className="text-center mb-8">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Comparativa</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Compara Las Versiones
              </h2>
              <p className="text-white/60 text-sm md:text-base">Vista rápida primero, tabla completa si quieres profundizar.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-white/5 rounded-tl-2xl font-medium text-white/60">Característica</th>
                    {car.variants.map((variant, idx) => (
                      <th 
                        key={variant.name} 
                        className={`text-center p-4 bg-white/5 font-bold text-white ${idx === car.variants.length - 1 ? 'rounded-tr-2xl' : ''}`}
                      >
                        {variant.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.variantComparison.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-t border-white/5">
                      <td className="p-4 text-white/80 font-medium">{row.feature}</td>
                      {row.values.map((value, valIdx) => (
                        <td key={valIdx} className="p-4 text-center">
                          {value === true ? (
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : value === false ? (
                            <span className="text-white/30">—</span>
                          ) : (
                            <span className="text-white/70">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SectionCTA />
          </div>
        </section>
      )}

      {/* Floating section dots for quick navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
        {[{ id: 'caracteristicas', label: 'Features' }, { id: 'especificaciones', label: 'Specs' }, { id: 'comparativa', label: 'Comparar' }].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="w-4 h-4 rounded-full border border-white/30 bg-white/10 hover:bg-accent transition"
            title={item.label}
          />
        ))}
      </div>

      {/* Gallery Section */}
      {gallery.length > 1 && (
        <section className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f16]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Galería</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Vívelo En Imágenes
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative aspect-video rounded-2xl overflow-hidden group ${
                    idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : ''
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${car.model} - ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <SectionCTA />
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-orange-500 to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white/90 mb-6">
            {car.brand}
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Listo Para Conducir Tu {car.model}?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {content?.closingCTA || 'Agenda tu test drive hoy y descubre por qué este es el vehículo perfecto para ti.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0a0a0f] hover:bg-[#1a1a24] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Ver Ficha Completa</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm">Garantía de Fábrica</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              <span className="text-sm">Taller Autorizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">Financiamiento Disponible</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetailPage;
