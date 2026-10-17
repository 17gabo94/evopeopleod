# Phase 5: Analytics & Form Integration Setup Guide

## ✅ Formspree Integration - COMPLETADO

Tu formulario de contacto está totalmente integrado con Formspree.

**Form ID**: `xrpejwag`  
**Endpoint**: `https://formspree.io/f/xrpejwag`

### 📁 Archivos Creados/Modificados

1. **`src/config/constants.ts`** ✨ (NUEVO)
   - Configuración centralizada de servicios externos
   - Contiene FORM_ID y otros parámetros

2. **`src/utils/formspree.ts`** ✨ (NUEVO)
   - Función `submitFormToFormspree()` reutilizable
   - Manejo de errores y respuestas
   - TypeScript types para seguridad

3. **`src/components/Forms/ContactForm.tsx`** (ACTUALIZADO)
   - Ahora usa `submitFormToFormspree()` utility
   - Código más limpio y mantenible
   - Mejor manejo de estados

### 🧪 Testeo del Formulario

Para probar que Formspree funciona:

```bash
npm run dev
```

Luego:
1. Abre http://localhost:5173/contact
2. Llena el formulario
3. Haz click en "Enviar Mensaje"
4. Deberías recibir un email de confirmación en tu email de Formspree

---

## 📊 Google Analytics 4 (GA4) - PENDIENTE

Cuando tengas tu **Measurement ID** de Google Analytics:

### PASO 1: Obtener Measurement ID

1. Ve a https://analytics.google.com
2. Haz login con tu cuenta Google
3. Crea nueva propiedad "EvoPeople OD"
4. Copia tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

### PASO 2: Actualizar Configuración

En `src/config/constants.ts`, reemplaza:

```typescript
export const GA4_CONFIG = {
  MEASUREMENT_ID: 'G-XXXXXXXXXX', // ← Reemplaza con tu ID
  IS_ENABLED: true, // ← Cambia a true
}
```

### PASO 3: Inyectar GA4 en HTML

En `index.html`, agrega antes del `</head>`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_path': window.location.pathname
  });
</script>
```

### PASO 4: Inicializar en main.tsx

En `src/main.tsx`, agrega después de imports:

```typescript
// Initialize Google Analytics
if (window.gtag && GA4_CONFIG.IS_ENABLED) {
  window.gtag('config', GA4_CONFIG.MEASUREMENT_ID)
}
```

---

## 📋 Próximos Pasos

1. **Crear cuenta Google Analytics** (gratuito)
2. **Obtener Measurement ID**
3. **Actualizar `src/config/constants.ts`** con tu ID
4. **Inyectar script en `index.html`**
5. **Inicializar en `src/main.tsx`**
6. **Crear analytics utility** (`src/utils/analytics.ts`)
7. **Agregar tracking events** en componentes

---

## 🔧 Archivos de Configuración

### `src/config/constants.ts`

```typescript
export const FORMSPREE_CONFIG = {
  FORM_ID: 'xrpejwag',  // Tu Form ID
  ENDPOINT: 'https://formspree.io/f/xrpejwag',
  CONTACT_EMAIL: 'contacto@evopeopleod.com',
}

export const GA4_CONFIG = {
  MEASUREMENT_ID: 'G-XXXXXXXXXX', // Reemplaza cuando tengas tu ID
  IS_ENABLED: false, // Activa cuando tengas ID válido
}
```

---

## ✨ Beneficios de esta Arquitectura

✅ **Modular**: Todo configurable en un archivo  
✅ **Seguro**: TypeScript types para todo  
✅ **Mantenible**: Código reutilizable  
✅ **Escalable**: Fácil agregar más servicios  
✅ **Flexible**: Fácil cambiar entre desarrollo/producción  

---

## 📝 Notas

- Formspree plan gratuito: **50 emails/mes**
- GA4 es completamente gratuito
- Ambos servicios tienen paneles admin para monitorear

---

**Status**: ✅ Formspree listo | ⏳ GA4 esperando Measurement ID
