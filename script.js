document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle example buttons for REPL
    const exampleButtons = document.querySelectorAll('.example-btn');
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            insertCodeIntoREPL(code);
        });
    });

    // Add welcome message
    setTimeout(() => {
        showWelcomeMessage();
        // Add copy buttons to all code examples
        setTimeout(addCopyButtons, 200);
    }, 1000);
});

function insertCodeIntoREPL(code) {
    try {
        // Try to communicate with the embedded REPL iframe
        const iframe = document.getElementById('strudel-repl');
        if (iframe && iframe.contentWindow) {
            // Post message to the iframe to insert code
            iframe.contentWindow.postMessage({
                type: 'insertCode',
                code: code
            }, 'https://strudel.cc');
        }
        
        // Show feedback to user
        showCodeInserted(code);
        
    } catch (error) {
        console.log('Could not insert code into REPL:', error);
        showCodeExample(code);
    }
}

function showCodeInserted(code) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4facfe;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    message.innerHTML = `
        <strong>Code Ready!</strong><br>
        <code style="background: rgba(255,255,255,0.2); padding: 0.2rem; border-radius: 3px; font-size: 0.8rem;">${code.length > 50 ? code.substring(0, 50) + '...' : code}</code><br>
        <small>Press Ctrl+Enter in the REPL to play!</small>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 4000);
}

function showCodeExample(code) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #667eea;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 350px;
    `;
    message.innerHTML = `
        <strong>Example Code:</strong><br>
        <code style="background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 3px; display: block; margin: 0.5rem 0; font-size: 0.9rem;">${code}</code>
        <small>Copy this code and paste it into the REPL above!</small>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 6000);
}

function showWelcomeMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 400px;
        text-align: center;
        animation: fadeIn 0.5s ease;
    `;
    message.innerHTML = `
        <h3 style="margin-bottom: 1rem;">🎵 Welcome to Learn Strudel!</h3>
        <p style="margin-bottom: 1.5rem;">This interactive tutorial will teach you live coding with Strudel step by step.</p>
        <p style="margin-bottom: 1.5rem;"><strong>Scroll down</strong> to learn the basics, then try the <strong>Live REPL</strong> at the bottom!</p>
        <button onclick="this.parentElement.remove()" style="
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
        ">Let's Start! 🚀</button>
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(message);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 8000);
}

// Add keyboard shortcuts info
document.addEventListener('keydown', function(e) {
    // Show help on F1
    if (e.key === 'F1') {
        e.preventDefault();
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    const help = document.createElement('div');
    help.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: #2d3748;
        color: #e2e8f0;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 300px;
        font-family: monospace;
    `;
    help.innerHTML = `
        <h4 style="color: #ffd93d; margin-bottom: 1rem;">⌨️ Keyboard Shortcuts</h4>
        <div style="margin: 0.5rem 0;"><kbd style="background: #4a5568; padding: 0.2rem 0.4rem; border-radius: 3px;">Ctrl+Enter</kbd> Play code in REPL</div>
        <div style="margin: 0.5rem 0;"><kbd style="background: #4a5568; padding: 0.2rem 0.4rem; border-radius: 3px;">Ctrl+.</kbd> Stop all sounds</div>
        <div style="margin: 0.5rem 0;"><kbd style="background: #4a5568; padding: 0.2rem 0.4rem; border-radius: 3px;">F1</kbd> Show this help</div>
        <button onclick="this.parentElement.remove()" style="
            background: #667eea;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
        ">Got it!</button>
    `;
    document.body.appendChild(help);
    
    setTimeout(() => {
        if (help.parentElement) {
            help.remove();
        }
    }, 10000);
}

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
addScrollProgress();

// Add section highlighting in navigation
function highlightCurrentSection() {
    const sections = document.querySelectorAll('.tutorial-section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#333';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#764ba2';
                link.style.fontWeight = '700';
            } else {
                link.style.fontWeight = '500';
            }
        });
    });
}

// Initialize section highlighting
highlightCurrentSection();
// Copy button functionality
function addCopyButtons() {
    const codeExamples = document.querySelectorAll('.code-example');
    
    codeExamples.forEach(example => {
        // Skip if copy button already exists
        if (example.querySelector('.copy-btn')) return;
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy
        `;
        
        copyBtn.addEventListener('click', function() {
            const codeElement = example.querySelector('code');
            const codeText = codeElement.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText).then(() => {
                // Show success feedback
                copyBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Copied!
                `;
                copyBtn.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyBtn.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                        Copy
                    `;
                    copyBtn.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = codeText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
        
        example.appendChild(copyBtn);
    });
}

