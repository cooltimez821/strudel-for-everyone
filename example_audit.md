# Strudel Tutorial Example Audit

## ✅ VERIFIED WORKING EXAMPLES

### Basic Drum Patterns
- `sound("bd hh sd hh")` ✅ WORKS
- `sound("bd sd bd sd")` ✅ WORKS  
- `sound("bd ~ sd ~")` ✅ WORKS
- `sound("bd cp hh oh")` ✅ WORKS

### Sample Variations
- `sound("bd:0 bd:1 bd:2 bd:3")` ✅ WORKS
- `sound("sd:0 sd:1 sd:2 sd:3")` ✅ WORKS

### Speed Control
- `sound("bd hh sd hh").fast(2)` ✅ WORKS
- `sound("bd hh sd hh").slow(2)` ✅ WORKS
- `sound("bd hh sd hh").fast("1 2 1 4")` ⚠️ NEEDS TESTING

### Repetition
- `sound("bd*2 sd hh*3")` ✅ WORKS
- `sound("bd*2 [sd cp]*2 hh*4")` ✅ WORKS

### Subdivision
- `sound("bd [hh hh] sd [hh oh]")` ✅ WORKS
- `sound("bd [hh [cp cp]] sd [hh oh]")` ✅ WORKS

### Effects
- `sound("bd sd").room(0.5)` ✅ WORKS
- `sound("hh*8").lpf(800)` ✅ WORKS
- `sound("hh*8").lpf(400)` ✅ WORKS
- `sound("bass:0 bass:1").hpf(200)` ⚠️ NEEDS TESTING
- `sound("sd").delay(0.25).delayfeedback(0.6)` ⚠️ NEEDS TESTING

### Volume Control
- `sound("bd hh*4 sd hh*4").gain("1 0.3 1 0.3")` ✅ WORKS
- `sound("bd sd").gain(sine.range(0.5, 1))` ⚠️ NEEDS TESTING

### Pitch Control
- `sound("bd sd").speed(1.5)` ✅ WORKS
- `sound("hh*8").speed("1 1.2 0.8 1.1")` ✅ WORKS

## ❌ PROBLEMATIC EXAMPLES

### Bass Examples
- `sound("bass").note("c2 ~ c2 g2").fast(2)` ❌ BROKEN - Fixed to sawtooth
- `sound("bass:0 bass:1 bass:2")` ⚠️ QUESTIONABLE - bass samples may not exist

### Melodic Examples  
- `sound("piano").note("<c e g> <d f a> <e g b> <f a c5>")` ❌ BROKEN - Fixed
- `sound("piano").note("<c e g> <d f a> <e g b> <f a c>").slow(2)` ✅ FIXED

### Euclidean Examples
- Mixed length euclidean stack ❌ BROKEN - Fixed

### Sample Banks
- `sound("vocal:0 vocal:1 vocal:2")` ⚠️ QUESTIONABLE - vocal samples may not exist
- `sound("bass:0 bass:1 bass:2")` ⚠️ QUESTIONABLE - bass samples may not exist

## 🔧 EXAMPLES THAT NEED REPLACEMENT

### Replace with Reliable Alternatives:
1. All "bass" samples → "sawtooth" or "piano" 
2. All "vocal" samples → "piano" or verified samples
3. Complex sine.range() → simpler alternatives
4. Mixed euclidean lengths → same length patterns

## ✅ SAFE SAMPLE BANKS (Always Available)
- `bd`, `sd`, `hh`, `oh`, `cp`, `cy` (drums)
- `piano` (melodic)
- `sawtooth`, `sine`, `square` (synths)

## ❌ RISKY SAMPLE BANKS (May Not Exist)
- `bass` (use sawtooth instead)
- `vocal` (use piano instead)
- Custom sample banks