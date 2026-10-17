# Reparaciones Garabito – Sitio Web Oficial

Sitio web profesional de una sola página para taller de carrocería, varillaje, chupones, detallado automotriz y restauraciones en Guadalajara, Jalisco.

## 📍 Datos del Taller Configurados
- **Nombre:** Reparaciones Garabito
- **Dirección:** Av. Cruz del Sur 1977 (esq. Panamá), Col. Del Sur, C.P. 44920, Guadalajara, Jalisco, México
- **Google Maps:** [https://maps.app.goo.gl/i5cn5fMS7wVPUB9j7?g_st=awb](https://maps.app.goo.gl/i5cn5fMS7wVPUB9j7?g_st=awb)
- **Teléfono / WhatsApp:** +52 33 1584 3784
- **Correo Electrónico:** Martin.charro@hotmail.com

---

## 🚀 Despliegue en la Nube (Gratis en Vercel)

### Opción A – Desde GitHub (Recomendado)
1. Sube esta carpeta a un repositorio nuevo en [github.com](https://github.com)
2. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
3. Haz clic en **Add New Project** e importa tu repositorio
4. Haz clic en **Deploy** – queda activo en ~30 segundos
5. Tu sitio quedará publicado gratis con SSL en `https://reparaciones-garabito.vercel.app` (o el nombre que elijas)

### Opción B – Vercel CLI directo
```bash
npm install -g vercel
cd autopro-taller
vercel
```

---

## 📁 Estructura del Proyecto

```
autopro-taller/
├── index.html              ← Página principal completa con galería interactiva
├── vercel.json             ← Configuración para despliegue en Vercel
├── README.md               ← Documentación y datos del taller
└── assets/
    ├── css/
    │   └── style.css       ← Estilos dark / red automotive racing + comparador
    ├── js/
    │   └── main.js         ← Cotizador WhatsApp, alternador Antes/Después y Lightbox
    └── img/
        ├── logo.jpg        ← Logo oficial de Reparaciones Garabito
        ├── hero-bg.jpg     ← Fotografía del taller
        └── galeria/
            ├── trabajo1-antes.jpeg          (Chevrolet Silverado batea - Antes)
            ├── trabajo1-despues.jpeg        (Chevrolet Silverado batea - Después)
            ├── trabajo2-antes.jpeg          (Sedán plata puerta - Antes)
            ├── trabajo2-despues.jpeg        (Sedán plata puerta - Después)
            ├── trabajo3-antes.jpeg          (Nissan March cajuela chupones - Antes)
            ├── trabajo3-proceso.jpeg        (Nissan March lámpara PDR en taller)
            ├── trabajo3-despues.jpeg        (Nissan March cajuela - Después)
            └── trabajo3-despues-final.jpeg  (Nissan March terminado)
```

---

## ✨ Características del Sitio

- ✅ **Módulo Interactivo Antes & Después:**
  - Botones interactivos para alternar al instante entre **Antes**, **En Proceso** y **Después / Resultado Final**.
  - Insignias visuales dinámicas (roja para "Antes", verde para "100% Restaurado", ámbar para "En Proceso").
  - Visor **Lightbox a pantalla completa** al dar clic a cualquier imagen.
  - Botón directo en cada tarjeta para cotizar ese trabajo exacto por WhatsApp.
- ✅ **Diseño Ultra-Profesional:** Estética moderna deportiva que combina con el logo de Reparaciones Garabito (acabados negro, blanco y rojo deportivo).
- ✅ **Mapa Interactivo en Vivo:** Embed de Google Maps centrado exactamente en el taller en Av. Cruz del Sur 1977, con botón de un clic para abrir la ruta en el celular.
- ✅ **Cotizador Directo a WhatsApp:** Formulario que arma el mensaje detallado con nombre, servicio y descripción, abriendo WhatsApp directo al 33 1584 3784.
- ✅ **Llamada Telefónica Directa:** Botón directo para marcar con un toque.
- ✅ **Botón Flotante de WhatsApp:** Pulsante en la esquina inferior derecha.
- ✅ **100% Responsive:** Diseñado y optimizado para teléfonos celulares, tablets y computadoras.
