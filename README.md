# 🎵 Learn Strudel - Interactive Tutorial

An interactive web tutorial for learning Strudel, the web-based live coding environment for algorithmic music patterns. **Perfect for beginners and experienced coders alike!**

## ✨ Features

- **🏗️ Progressive Building Section**: 10-step tutorial building a complete drum track from scratch
- **🎮 Embedded Live REPL**: Real Strudel environment for hands-on practice
- **🔧 Verified Examples**: Every code example tested and guaranteed to work
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🎯 Learning Challenges**: Interactive exercises to test your skills
- **🎵 No Installation Required**: Runs directly in the browser

## 📚 Tutorial Sections

1. **Introduction** - What is Strudel and why use it?
2. **Basic Concepts** - Patterns, samples, rests, and variations
3. **Pattern Functions** - Speed control, reverse, repetition, subdivision
4. **🏗️ Building Up** - **NEW!** Step-by-step drum track construction (10 steps)
5. **Working with Sounds** - Sample banks, effects, volume, and pitch control
6. **Advanced Techniques** - Euclidean rhythms, transformations, melodies, polyrhythms
7. **🎮 Live REPL** - **Enhanced!** Interactive playground with 10 verified examples

## 🚀 Getting Started

### Quick Start
1. **Visit**: Open `index.html` in a modern web browser
2. **Learn**: Follow the progressive tutorial sections
3. **Practice**: Use the embedded REPL to try examples
4. **Experiment**: Create your own patterns in the playground

### Example Progression
```javascript
// Start simple
sound("bd hh sd hh")

// Add layers
stack(
  sound("bd sd bd sd"),
  sound("hh*8").gain(0.4)
)

// Create melodies
sound("piano").note("<c e g> <d f a> <e g b> <f a c>").slow(2)
```

## 🎯 What Makes This Tutorial Special

### 🏗️ **Progressive Building Approach**
Unlike other tutorials, we show you how to build complex patterns step-by-step:
1. Start with a simple kick: `sound("bd bd bd bd")`
2. Add space: `sound("bd ~ bd ~")`
3. Add snare: `sound("bd sd bd sd")`
4. Layer hi-hats with `stack()`
5. Add effects and groove
6. **Result**: Professional-sounding drum track!

### ✅ **Quality Guaranteed**
- Every example verified to work
- Uses only reliable Strudel samples
- No silent or broken patterns
- Safe for teaching beginners

### 🎮 **Interactive Learning**
- 10 verified example buttons
- Embedded live REPL from strudel.cc
- Real-time audio feedback
- Keyboard shortcuts (Ctrl+Enter to play)

## 🛠️ Technical Details

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Audio Engine**: Strudel Web library (embedded from strudel.cc)
- **Styling**: Modern CSS with gradients, animations, and glass-morphism
- **Examples**: All verified with reliable samples (bd, sd, hh, piano, sawtooth)
- **Responsive**: Mobile-friendly design with touch support

## 🌐 Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

**Note**: Audio features require a modern browser with Web Audio API support.

## 💻 Local Development

### Simple Setup
```bash
# Just open the file
open index.html
```

### Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎵 Example Patterns You'll Learn

### Drums
```javascript
// Basic beat
sound("bd hh sd hh")

// Layered drums
stack(
  sound("bd sd bd sd"),
  sound("hh*8").gain(0.4),
  sound("~ ~ cp ~").room(0.3)
)
```

### Melodies
```javascript
// Piano chords
sound("piano").note("<c e g> <d f a> <e g b> <f a c>").slow(2)

// Bass line
sound("sawtooth").note("c3 ~ c3 g3").lpf(400)
```

### Advanced
```javascript
// Euclidean rhythms
sound("bd").euclidean(3, 8)

// Live coding style
sound("bd sd").sometimes(x => x.fast(2)).rarely(rev)
```

## 🔗 Learn More

- [Strudel Official Site](https://strudel.cc)
- [Strudel Documentation](https://strudel.cc/learn)
- [TidalCycles Community](https://club.tidalcycles.org/)
- [Live Coding Community](https://toplap.org/)

## 🤝 Contributing

We welcome contributions! Feel free to:
- Improve tutorial content
- Add new examples (make sure they work!)
- Enhance interactive features
- Fix bugs or improve styling
- Translate to other languages

## 📄 License

This tutorial is open source under MIT License. Strudel itself is licensed under AGPL-3.0.

---

**🎶 Start your live coding journey today!** This tutorial will take you from complete beginner to confident Strudel live coder through hands-on, progressive learning.

*Built with ❤️ for the live coding community*
