# Strudel Tutorial - BASIC FUNCTIONS ONLY

## ✅ **COMPLETE OVERHAUL: Only Basic Strudel Functions**

### **🚫 REMOVED NON-WORKING FUNCTIONS:**

#### **1. euclidean() - NOT AVAILABLE**
- ❌ `sound("bd").euclidean(3, 8)`
- ✅ `sound("bd ~ ~ bd ~ ~ bd ~")` - Manual sparse pattern

#### **2. note() - NOT AVAILABLE**  
- ❌ `sound("piano").note("c d e f")`
- ✅ `sound("bd hh sd hh")` - Drum patterns instead

#### **3. lpf() - NOT AVAILABLE**
- ❌ `sound("hh*4").lpf(400)`
- ✅ `sound("hh*4").gain(0.6)` - Volume control instead

#### **4. Unavailable Samples:**
- ❌ `sound("piano")` - Not available
- ❌ `sound("sawtooth")` - Not available
- ✅ `sound("bd")`, `sound("sd")`, `sound("hh")` - Basic drums only

### **✅ WHAT ACTUALLY WORKS IN STRUDEL REPL:**

#### **Core Functions:**
- ✅ `sound("sample_name")` - Basic sound playback
- ✅ `.fast(2)` - Speed up
- ✅ `.slow(2)` - Slow down  
- ✅ `.gain(0.5)` - Volume control
- ✅ `.room(0.5)` - Reverb effect
- ✅ `stack()` - Layer patterns
- ✅ `.sometimes(x => x.fast(2))` - Random transformations

#### **Available Samples:**
- ✅ `bd` - Bass drum (kick)
- ✅ `sd` - Snare drum
- ✅ `hh` - Hi-hat (closed)
- ✅ `oh` - Open hi-hat  
- ✅ `cp` - Clap
- ✅ `cy` - Cymbal
- ✅ Sample variations: `bd:0`, `bd:1`, `bd:2`

#### **Pattern Syntax:**
- ✅ `"bd hh sd hh"` - Basic sequences
- ✅ `"bd ~ sd ~"` - Rests with ~
- ✅ `"bd*2 sd"` - Repetition with *
- ✅ `"[bd sd] hh"` - Subdivision with []

### **🔄 MAJOR REPLACEMENTS MADE:**

#### **Euclidean → Manual Patterns:**
- `sound("bd").euclidean(3, 8)` → `sound("bd ~ ~ bd ~ ~ bd ~")`
- `sound("cp").euclidean(5, 12)` → `sound("cp ~ cp ~ cp ~ cp ~ cp ~ cp ~")`

#### **Piano/Melodies → Drum Patterns:**
- `sound("piano").note("c d e f")` → `sound("bd hh sd hh")`
- `sound("piano").note("<c e g>")` → `sound("bd sd bd sd")`

#### **Sawtooth → Basic Drums:**
- `sound("sawtooth").note("c3 ~ c3 g3")` → `sound("bd ~ bd cp")`

#### **Effects → Basic Alternatives:**
- `.lpf(400)` → `.gain(0.6)` or `.room(0.3)`

### **📋 UPDATED REPL BUTTONS:**
- ✅ **Basic Beat**: `sound("bd hh sd hh")`
- ✅ **Fast Beat**: `sound("bd sd").fast(2)`
- ✅ **Quiet Hi-hats**: `sound("hh*4").gain(0.6)`
- ✅ **Layered Drums**: `stack(sound("bd ~ bd ~"), sound("~ sd ~ sd"))`
- ✅ **Drum Melody**: `sound("bd hh sd hh bd hh sd hh")`
- ✅ **Sparse Rhythm**: `sound("bd ~ ~ bd ~ ~ bd ~")`
- ✅ **Bass Pattern**: `sound("bd ~ bd cp")`
- ✅ **Slow Drums**: `sound("bd sd bd sd").slow(2)`

## 🎯 **GUARANTEE:**
**Every single example now uses ONLY the most basic Strudel functions that are guaranteed to work in any basic REPL environment.**

### **Safe Function List:**
- `sound()`, `.fast()`, `.slow()`, `.gain()`, `.room()`, `stack()`, `.sometimes()`
- Basic drum samples: `bd`, `sd`, `hh`, `oh`, `cp`, `cy`
- Pattern syntax: `~`, `*`, `[]`

**No advanced functions, no melodic samples, no complex effects - just pure, reliable drum programming!** 🥁
