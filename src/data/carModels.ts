export type CarVariant = {
  name: string;
  baseFile: string; // file name without extension
};

export type CarModel = {
  brand: string;
  brandSlug: string;
  model: string;
  modelSlug: string;
  heroImage: string;
  variants: CarVariant[];
};

export const carModels: CarModel[] = [
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'Mazda 2',
    modelSlug: 'mazda-2',
    heroImage: '/carImages/Mazda copy/Mazda 2/Imagen principal.png',
    variants: [
      { name: 'Hatchback', baseFile: '2. DEMD-LAC - Mazda 2 HB' },
      { name: 'Sedán Intermedia', baseFile: '3. DNEE-LAP - Mazda 2 Sedan Inter.' },
      { name: 'Sedán Full', baseFile: '4. DNEE-LAQ - Mazda 2 Sedan Full' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'Mazda 3 Sedán',
    modelSlug: 'mazda-3',
    heroImage: '/carImages/Mazda copy/Mazda 3/Imagen principal.png',
    variants: [{ name: 'Sedán', baseFile: '1. BHVN-LAC - mazda 3 Sedan' }],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-3',
    modelSlug: 'cx-3',
    heroImage: '/carImages/Mazda copy/CX-3/Imagen principal.png',
    variants: [{ name: 'Única versión', baseFile: '5. DNHC-LA2 - CX-3' }],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-30',
    modelSlug: 'cx-30',
    heroImage: '/carImages/Mazda copy/CX-30/Imagen principal.png',
    variants: [
      { name: 'CX-30 (LAD)', baseFile: '6. DSAC-LAD - CX-30' },
      { name: 'CX-30 (LAE)', baseFile: '7. DSAC-LAE- CX-30' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-5',
    modelSlug: 'cx-5',
    heroImage: '/carImages/Mazda copy/CX-5/imagen principal.avif',
    variants: [
      { name: 'Inicial', baseFile: '9. KGTG-LBF - CX-5 Inicial' },
      { name: 'Equipada Tela', baseFile: '10. KGTG-LA8 - CX-5 Equipada Tela' },
      { name: 'Equipada Cuero', baseFile: '11. KGTG-LBA - CX-5 Equipada Cuero' },
      { name: 'Full', baseFile: '12. KGTG-LBL - CX-5 Full' },
      { name: '2.5 4X4', baseFile: '13. KGTP-LAN - CX-5 2.5 4X4' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-9',
    modelSlug: 'cx-9',
    heroImage: '/carImages/Mazda copy/CX-9/Imagen principal.png',
    variants: [
      { name: 'CX-9 (LB1)', baseFile: '14. TC9F-LB1 CX-9' },
      { name: 'CX-9 (LBY)', baseFile: '15. TC9F-LBY CX-9' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-60',
    modelSlug: 'cx-60',
    heroImage: '/carImages/Mazda copy/CX-60/Imagen principal.png',
    variants: [
      { name: '2.5 AT 4X4', baseFile: '21. KS1M LAJ - CX-60 4X4 2.5 AT' },
      { name: 'Hybrid AT', baseFile: '24. KST8 LAM - CX60 Hybrid AT' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'CX-90',
    modelSlug: 'cx-90',
    heroImage: '/carImages/Mazda copy/CX-90/Imagen principal.png',
    variants: [
      { name: 'Gasolina', baseFile: '8. KDMK-LAA - CX-90' },
      { name: 'Hybrid', baseFile: '25. KDMK LAA - CX90 Hybrid' },
    ],
  },
  {
    brand: 'Mazda',
    brandSlug: 'mazda',
    model: 'BT-50',
    modelSlug: 'bt-50',
    heroImage: '/carImages/Mazda copy/BT-50/Imagen principal.png',
    variants: [
      { name: 'Cabina Sencilla', baseFile: '17. ZR53 LAY (BT50 CS)' },
      { name: 'Freestyle', baseFile: '18. ZR54-LAT (BT-50 Freestyle)' },
      { name: 'DC MT', baseFile: '22. ZR58 LBK - BT-50 DC MT' },
      { name: 'MT Aros de Hierro', baseFile: '27. ZR58 LCJ - BT50 MT aros de Hierro' },
      { name: 'MT Full 3.0', baseFile: '26. ZR60 LCL - BT50 MT Full 3.0' },
      { name: '1.9 AT Aros Aluminio 2025', baseFile: '23. ZR59 LBB - BT-50 1.9 AT V AROS ALUMINIO 2025' },
      { name: 'AT Full 3.0 DC 2025', baseFile: '19. ZR61-LEF BT-50 AT Full - 3.0 DC 2025' },
      { name: 'AT Full Plus 3.0 DC 2025', baseFile: '20. ZR61-LEG BT-50 AT Full Plus - 3.0 DC 2025' },
    ],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Haval H6',
    modelSlug: 'h6',
    heroImage: '/carImages/GWM copy/Haval H6/Imagen principal.png',
    variants: [
      { name: 'H6 Élite', baseFile: 'Ficha Técnica H6 Élite' },
      { name: 'H6 Deluxe', baseFile: 'Ficha Técnica H6 Deluxe' },
      { name: 'H6 GT', baseFile: 'Ficha Técnica H6 GT (1)' },
      { name: 'H6 HEV', baseFile: 'Ficha Técnica H6 HEV' },
    ],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Haval Jolion',
    modelSlug: 'jolion',
    heroImage: '/carImages/GWM copy/Haval Jolion/Imagen principal.png',
    variants: [
      { name: 'Jolion Élite', baseFile: 'Ficha Técnica JOLION Élite' },
      { name: 'Jolion Deluxe', baseFile: 'Ficha Técnica JOLION Deluxe' },
      { name: 'Jolion HEV', baseFile: 'Ficha Técnica JOLION HEV' },
    ],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Poer',
    modelSlug: 'poer',
    heroImage: '/carImages/GWM copy/Poer/Imagen principal.png',
    variants: [
      { name: 'Poer Active', baseFile: 'Ficha Técnica POER Active' },
      { name: 'Poer Élite', baseFile: 'Ficha Técnica POER Élite' },
      { name: 'Poer Plus', baseFile: 'Ficha Técnica POER Plus' },
      { name: 'Poer Deluxe', baseFile: 'Ficha Técnica POER Deluxe' },
    ],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Wingle',
    modelSlug: 'wingle',
    heroImage: '/carImages/GWM copy/Wingle/Imagen principal.png',
    variants: [{ name: 'Ficha Técnica', baseFile: 'Ficha Tecnica Wingle' }],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Tank 300',
    modelSlug: 'tank-300',
    heroImage: '/carImages/GWM copy/Tank 300/Imagen principal.png',
    variants: [{ name: 'Ficha Técnica', baseFile: 'Ficha Técnica TANK300' }],
  },
  {
    brand: 'GWM',
    brandSlug: 'gwm',
    model: 'Tank 500',
    modelSlug: 'tank-500',
    heroImage: '/carImages/GWM copy/Tank 500/Imagen principal.png',
    variants: [{ name: 'Ficha Técnica', baseFile: 'Ficha Técnica TANK500' }],
  },
];
