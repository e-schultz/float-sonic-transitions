
# Component Documentation

## ProcessStage.tsx

### Purpose
Individual expandable timeline stages that represent each phase of the DE9/personal process mapping.

### Props Interface
```typescript
interface ProcessStageProps {
  stage: {
    id: string;           // Unique identifier for scrolling
    title: string;        // Display title
    sigil: string;        // Symbol representation
    description: string;  // Brief description
    hawtin: string;       // Hawtin's process description
    personal: string[];   // Array of personal process items
    color: string;        // Color theme key
  };
  index: number;          // Position in timeline
  isLast: boolean;        // Whether this is the final stage
}
```

### Features
- **Expandable Content**: Click to reveal detailed information
- **Color Theming**: Dynamic color application based on stage type
- **Responsive Layout**: Two-column desktop, stacked mobile
- **Animation**: Smooth expand/collapse with CSS transitions
- **Timeline Connector**: Visual connection between stages

### Color Mapping
```typescript
const colorMap = {
  cyan: 'text-cyan-400 border-cyan-400',
  magenta: 'text-magenta-400 border-magenta-400', 
  yellow: 'text-yellow-400 border-yellow-400',
  green: 'text-green-400 border-green-400'
};
```

## ProcessTimeline.tsx

### Purpose
Main container component that manages the timeline data and layout structure.

### Data Structure
Each stage contains:
- **ID**: For navigation targeting
- **Visual Elements**: Title, sigil, color scheme
- **Content**: Descriptions for both Hawtin's and personal processes
- **Metadata**: Position and relationship information

### Layout Features
- **Vertical Timeline**: Progressive revelation of stages
- **Final Reflection**: Synthesis section comparing algorithms
- **Spacing System**: Consistent vertical rhythm
- **Container Management**: Max-width and responsive padding

## SigilNavigation.tsx

### Purpose
Symbol-based navigation system with smooth scrolling capabilities.

### State Management
```typescript
const [activeSection, setActiveSection] = useState<string>('deconstruction');
```

### Navigation Data
```typescript
const sections = [
  { id: 'deconstruction', sigil: '{∇}', label: 'Deconstruction', color: 'text-cyan-400' },
  { id: 'palette', sigil: '{Ξ}', label: 'Loop Palette', color: 'text-magenta-400' },
  { id: 'composition', sigil: '{∷}', label: 'Real-time Composition', color: 'text-yellow-400' },
  { id: 'transitions', sigil: '{◊}', label: 'Seamless Transitions', color: 'text-green-400' }
];
```

### Interactive Features
- **Smooth Scrolling**: `scrollIntoView({ behavior: 'smooth' })`
- **Active State Tracking**: Visual feedback for current section
- **Responsive Labels**: Hidden on mobile, visible on desktop
- **Hover Effects**: Scale and color transitions

## WaveformAnimation.tsx

### Purpose
Canvas-based animated waveform visualization representing continuous audio transitions.

### Technical Implementation
```typescript
useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  
  // Multi-layer waveform rendering
  const layers = [
    { color: 'rgba(0, 255, 255, 0.1)', frequency: 0.01, amplitude: 30, speed: 0.02 },
    { color: 'rgba(255, 0, 255, 0.08)', frequency: 0.015, amplitude: 20, speed: 0.015 },
    { color: 'rgba(255, 255, 0, 0.06)', frequency: 0.008, amplitude: 25, speed: 0.025 }
  ];
}, []);
```

### Animation Loop
- **RequestAnimationFrame**: Smooth 60fps animation
- **Multiple Layers**: Overlapping waveforms with different properties
- **Mathematical Functions**: Sine waves with varying frequency and amplitude
- **Performance**: Optimized rendering with cleanup on unmount

### Canvas Management
- **Responsive Sizing**: Automatic resize on window changes
- **Device Pixel Ratio**: High-DPI display support
- **Memory Management**: Proper cleanup to prevent leaks

## Shared Patterns

### Responsive Design
All components follow mobile-first principles:
```scss
// Base: Mobile styles
.component { /* mobile styles */ }

// Enhanced: Desktop styles  
@media (min-width: 768px) {
  .component { /* desktop enhancements */ }
}
```

### Animation Principles
- **Smooth Transitions**: 300ms duration with easing functions
- **Hardware Acceleration**: Transform-based animations
- **Reduced Motion**: Respects user preferences
- **Performance**: CSS transforms over property changes

### Color System Integration
Each component integrates with the established color palette:
- **Cyan**: Primary navigation and borders
- **Magenta**: Secondary highlights and accents  
- **Yellow**: Tertiary emphasis and warnings
- **Green**: Success states and completion

### TypeScript Integration
All components use strict TypeScript:
- **Interface Definitions**: Clear prop and state types
- **Type Safety**: Compile-time error checking
- **IntelliSense**: Enhanced development experience
- **Maintainability**: Self-documenting code structure
