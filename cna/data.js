/* ============================================================
   CNA Academy — course content
   All study content lives here so it's easy to review and extend.
   Content follows common state nurse-aide curricula (OBRA-based).
   ============================================================ */

const CNA_DATA = {

  /* ------------------------------------------------------------
     LEARN — six lesson modules with quick-check questions
     ------------------------------------------------------------ */
  modules: [
    {
      id: "role",
      icon: "🧑‍⚕️",
      title: "The CNA Role & Ethics",
      blurb: "What a nursing assistant does, scope of practice, and how to work ethically on the care team.",
      sections: [
        {
          heading: "What a CNA does",
          html: `
            <p>A Certified Nursing Assistant (CNA) provides hands-on, basic care to residents and patients
            under the supervision of a licensed nurse (RN or LPN/LVN). You are the eyes and ears of the
            care team — you spend more time with residents than anyone else.</p>
            <ul>
              <li><strong>Personal care:</strong> bathing, grooming, dressing, toileting, feeding</li>
              <li><strong>Measurement:</strong> vital signs, height and weight, intake and output</li>
              <li><strong>Mobility:</strong> transfers, ambulation, positioning, range-of-motion exercises</li>
              <li><strong>Observation & reporting:</strong> noticing and reporting changes to the nurse</li>
            </ul>
            <div class="callout"><p><strong>Key idea:</strong> CNAs <em>never</em> give medications, insert or remove
            tubes, perform sterile procedures, take verbal doctor's orders, or diagnose. If a task isn't in your
            scope or you weren't trained on it, politely decline and tell the nurse.</p></div>`
        },
        {
          heading: "Scope of practice & the care plan",
          html: `
            <p>Every resident has a <strong>care plan</strong> developed by the nurse and the care team.
            The CNA follows the care plan exactly and reports observations that may cause the team to update it.</p>
            <ul>
              <li>Perform only tasks you were trained on and that are in your job description.</li>
              <li>If a resident or family member asks you to do something outside your scope, explain kindly
              that you can't, and inform the nurse so the request is still addressed.</li>
              <li>Follow the <strong>chain of command</strong>: report problems to the charge nurse, who reports
              upward if needed.</li>
            </ul>
            <div class="callout warn"><p><strong>OBRA (Omnibus Budget Reconciliation Act, 1987)</strong> is the
            federal law that sets nurse-aide standards: at least <strong>75 hours</strong> of training, a competency
            exam, a state registry, and regular in-service education. Many states require more hours.</p></div>`
        },
        {
          heading: "Ethics and professionalism",
          html: `
            <ul>
              <li><strong>Be honest and dependable.</strong> Document only care you actually gave, right after you give it — never before.</li>
              <li><strong>Keep information confidential</strong> (HIPAA). Share resident information only with care-team members who need it to provide care.</li>
              <li><strong>Never accept tips or gifts.</strong> Politely refuse; it's an ethics violation in most facilities.</li>
              <li><strong>Report mistakes immediately.</strong> Everyone makes them — hiding one endangers the resident.</li>
              <li><strong>Objective vs. subjective:</strong> report <em>objective</em> facts you observe ("BP 152/94",
              "skin on left heel is red") and <em>subjective</em> statements in the resident's own words
              ("resident states 'my chest hurts'").</li>
            </ul>`
        }
      ],
      quickCheck: [
        {
          q: "A resident asks you to change the dressing on her surgical wound. What should you do?",
          options: [
            "Change it carefully using clean gloves",
            "Explain that a nurse must do that, and tell the nurse right away",
            "Ask another CNA to help you change it",
            "Tell the resident to wait until tomorrow"
          ],
          answer: 1,
          explain: "Sterile and wound-care procedures are outside CNA scope. Decline politely and pass the request to the nurse so the resident still gets the care."
        },
        {
          q: "Which is an example of OBJECTIVE information?",
          options: [
            "\"The resident seems depressed.\"",
            "\"The resident is probably in pain.\"",
            "\"The resident's oral temperature is 99.8°F.\"",
            "\"I think the resident dislikes the food.\""
          ],
          answer: 2,
          explain: "Objective information is measured or directly observed. Guesses and interpretations are subjective."
        }
      ]
    },

    {
      id: "infection",
      icon: "🧼",
      title: "Infection Control",
      blurb: "Hand hygiene, standard precautions, PPE, and breaking the chain of infection.",
      sections: [
        {
          heading: "The chain of infection",
          html: `
            <p>Infection spreads when six links connect: a <em>pathogen</em>, a <em>reservoir</em>, a
            <em>portal of exit</em>, a <em>mode of transmission</em>, a <em>portal of entry</em>, and a
            <em>susceptible host</em>. Break any link and the infection can't spread.</p>
            <div class="callout good"><p><strong>Hand hygiene is the single most important way to prevent the
            spread of infection.</strong> Wash before and after resident contact, after removing gloves, before
            handling food, and any time hands are visibly soiled.</p></div>`
        },
        {
          heading: "Handwashing that actually works",
          html: `
            <ul>
              <li>Wet hands and wrists, then apply soap.</li>
              <li>Lather with <strong>friction for at least 20 seconds</strong>, cleaning between fingers and under nails.</li>
              <li>Keep hands <strong>lower than elbows and fingertips pointed down</strong> so dirty water runs off your fingertips, not up your arms.</li>
              <li>Rinse, dry with a clean paper towel, then <strong>use a fresh paper towel to turn off the faucet</strong> — the faucet is contaminated.</li>
            </ul>
            <div class="callout warn"><p>Alcohol-based hand rub is fine for routine care, but <strong>not</strong> when
            hands are visibly soiled or when caring for a resident with <em>C. difficile</em> — then you must wash
            with soap and water.</p></div>`
        },
        {
          heading: "Standard precautions & PPE",
          html: `
            <p><strong>Standard precautions</strong> treat all blood, body fluids, non-intact skin, and mucous
            membranes as potentially infectious — for <strong>every resident, every time</strong>.</p>
            <ul>
              <li><strong>Donning (putting on) order:</strong> gown → mask → goggles/face shield → gloves.</li>
              <li><strong>Doffing (removing) order:</strong> gloves → goggles/face shield → gown → mask. Gloves come off first because they're the most contaminated.</li>
              <li>Hold soiled linen <strong>away from your uniform</strong> and never shake it.</li>
              <li>Dispose of sharps in a <strong>puncture-resistant sharps container</strong> — never recap a used needle.</li>
            </ul>`
        }
      ],
      quickCheck: [
        {
          q: "What is the single most effective way to prevent the spread of infection?",
          options: ["Wearing gloves for all care", "Hand hygiene", "Wearing a mask", "Disinfecting surfaces daily"],
          answer: 1,
          explain: "Gloves and masks help, but proper hand hygiene is consistently taught as the #1 way to break the chain of infection."
        },
        {
          q: "Which piece of PPE do you remove FIRST?",
          options: ["Mask", "Gown", "Gloves", "Goggles"],
          answer: 2,
          explain: "Gloves are the most contaminated item, so they come off first. The standard doffing order is gloves → goggles → gown → mask."
        }
      ]
    },

    {
      id: "safety",
      icon: "🦺",
      title: "Safety & Emergencies",
      blurb: "Fall prevention, fire safety (RACE & PASS), choking, and what to do when things go wrong.",
      sections: [
        {
          heading: "Preventing falls — the #1 accident",
          html: `
            <p><strong>Falls are the most common accident</strong> in long-term care. Most are preventable:</p>
            <ul>
              <li>Answer call lights promptly, and always leave the <strong>call light within reach</strong> before leaving the room.</li>
              <li>Keep the <strong>bed in its lowest position</strong> with wheels locked.</li>
              <li>Non-skid footwear for walking; wipe up spills immediately; keep walkways clear.</li>
              <li>Use a <strong>gait/transfer belt</strong> for transfers and ambulation when the care plan calls for it.</li>
            </ul>
            <div class="callout"><p><strong>If a resident starts to fall while you're walking them:</strong> do not try to
            hold them upright. Ease them gently to the floor, supporting and protecting the head, then call for help.
            <strong>Never leave the resident</strong>, and don't move them until the nurse checks for injury.</p></div>`
        },
        {
          heading: "Fire safety: RACE and PASS",
          html: `
            <p>If you discover a fire, remember <strong>RACE</strong>:</p>
            <ul>
              <li><strong>R</strong>escue — move residents in immediate danger.</li>
              <li><strong>A</strong>larm — activate the fire alarm / call for help.</li>
              <li><strong>C</strong>ontain — close doors and windows to contain smoke and fire.</li>
              <li><strong>E</strong>xtinguish — extinguish a small fire only if safe, or evacuate.</li>
            </ul>
            <p>To use a fire extinguisher, remember <strong>PASS</strong>: <strong>P</strong>ull the pin,
            <strong>A</strong>im at the base of the fire, <strong>S</strong>queeze the handle,
            <strong>S</strong>weep side to side.</p>`
        },
        {
          heading: "Choking and restraints",
          html: `
            <ul>
              <li>A choking person who <strong>can cough or speak</strong> — encourage coughing and stay with them.</li>
              <li>A conscious adult who <strong>cannot breathe, cough, or speak</strong> — call for help and give
              abdominal thrusts (Heimlich maneuver) if you are trained.</li>
              <li>If the person becomes unresponsive, help them to the floor and call for the nurse / activate the
              emergency response immediately.</li>
            </ul>
            <div class="callout warn"><p><strong>Restraints</strong> (including side rails used to limit movement)
            require a <strong>doctor's order</strong>, are a last resort, and restrained residents must be checked
            regularly with the restraint released and the resident repositioned per policy (commonly every 2 hours,
            with visual checks every 15 minutes). Restraints are never used for staff convenience or discipline.</p></div>`
        }
      ],
      quickCheck: [
        {
          q: "In the fire-response acronym RACE, what does the \"C\" stand for?",
          options: ["Call 911", "Contain the fire", "Check residents", "Cover your mouth"],
          answer: 1,
          explain: "RACE = Rescue, Alarm, Contain (close doors/windows), Extinguish or Evacuate."
        },
        {
          q: "A resident begins to fall while you are ambulating her. Your best action is to:",
          options: [
            "Hold her upright with all your strength",
            "Step away so you are not injured",
            "Ease her gently to the floor, protecting her head",
            "Sit her quickly into the nearest chair"
          ],
          answer: 2,
          explain: "Trying to hold a falling person up injures both of you. Ease her down your leg to the floor, protect the head, call for help, and stay with her."
        }
      ]
    },

    {
      id: "vitals",
      icon: "🌡️",
      title: "Vital Signs & Measurement",
      blurb: "Temperature, pulse, respirations, blood pressure, pain — and the normal adult ranges to memorize.",
      sections: [
        {
          heading: "The numbers to memorize",
          html: `
            <ul>
              <li><strong>Oral temperature:</strong> about 97.6–99.6&nbsp;°F (average 98.6&nbsp;°F). Rectal reads about 1° higher; axillary about 1° lower.</li>
              <li><strong>Pulse (adult):</strong> 60–100 beats per minute, regular and strong.</li>
              <li><strong>Respirations (adult):</strong> 12–20 breaths per minute, quiet and effortless.</li>
              <li><strong>Blood pressure (adult):</strong> normal is below 120/80 mm Hg. Report readings outside the range in the care plan.</li>
              <li><strong>Pain:</strong> the "fifth vital sign." It is whatever the resident says it is — always subjective, always reported.</li>
            </ul>
            <div class="callout"><p>Report any measurement outside normal limits — or any <em>change</em> from the
            resident's usual readings — to the nurse right away. Never guess or make up a reading you couldn't get.</p></div>`
        },
        {
          heading: "Taking pulse and respirations",
          html: `
            <ul>
              <li>The <strong>radial pulse</strong> is on the thumb side of the wrist. Use your first two or three
              <strong>fingertips — never your thumb</strong> (your thumb has its own pulse).</li>
              <li>Count a regular pulse for 30 seconds and multiply by two, or per facility policy.
              Count an <strong>irregular pulse for one full minute</strong>.</li>
              <li>Count respirations <strong>without telling the resident</strong> — people change their breathing
              when they know it's being watched. A common technique: keep your fingers on the wrist after taking
              the pulse and count chest rises.</li>
              <li>One respiration = one inhale <em>plus</em> one exhale.</li>
            </ul>`
        },
        {
          heading: "Blood pressure, height/weight, and I&O",
          html: `
            <ul>
              <li><strong>Systolic</strong> (top number) = pressure while the heart contracts.
              <strong>Diastolic</strong> (bottom number) = pressure while the heart rests.</li>
              <li>Use the correct cuff size on a bare arm at heart level. Don't take BP on an arm with an IV,
              a dialysis shunt/fistula, an injury, or on the side of a mastectomy.</li>
              <li><strong>Intake & output (I&O):</strong> measured in milliliters. Remember
              <strong>1 ounce = 30 mL</strong> (so an 8-oz cup = 240 mL).</li>
              <li><strong>Weight:</strong> 1 kg = 2.2 lb. Weigh at the same time of day, in similar clothing, on the same scale.</li>
            </ul>`
        }
      ],
      quickCheck: [
        {
          q: "Which adult pulse rate is within the normal range?",
          options: ["48 beats per minute", "76 beats per minute", "108 beats per minute", "130 beats per minute"],
          answer: 1,
          explain: "Normal adult pulse is 60–100 beats per minute. 76 is comfortably normal; the others should be reported."
        },
        {
          q: "Why do you count respirations without telling the resident?",
          options: [
            "It saves time during rounds",
            "Residents may change their breathing if they know it's being counted",
            "It is required by HIPAA",
            "So the resident can rest"
          ],
          answer: 1,
          explain: "Breathing is partly under voluntary control, so awareness changes the count. Keep your fingers on the wrist as if still taking the pulse."
        }
      ]
    },

    {
      id: "adl",
      icon: "🛁",
      title: "Personal Care & ADLs",
      blurb: "Bathing, dressing, feeding, positioning, and safe transfers — the heart of daily CNA work.",
      sections: [
        {
          heading: "The golden rules of personal care",
          html: `
            <ul>
              <li><strong>Knock, greet, identify, explain.</strong> Knock before entering, greet the resident by name,
              identify yourself, and explain what you're going to do — every time, even for confused residents.</li>
              <li><strong>Provide privacy:</strong> close doors and curtains, keep the resident covered, expose only the
              area you're working on.</li>
              <li><strong>Promote independence:</strong> let the resident do everything they safely can, even if it's slower.</li>
              <li><strong>Perineal care:</strong> always wipe/clean <strong>front to back</strong> to prevent urinary tract infections.</li>
            </ul>`
        },
        {
          heading: "Dressing, positioning, and skin",
          html: `
            <ul>
              <li>Dressing a resident with a weak or affected side: <strong>put clothing on the weak side FIRST</strong>;
              when undressing, <strong>take it off the strong side first</strong>. ("Dress the weak, undress the strong.")</li>
              <li>Reposition residents who can't move themselves <strong>at least every 2 hours</strong> to prevent
              pressure injuries. Check bony areas (heels, hips, tailbone, elbows) and report any redness that doesn't fade.</li>
              <li><strong>Fowler's position</strong> = head of bed raised 45–60°, used for eating and easier breathing.
              For meals, the resident should be <strong>upright as fully as tolerated (75–90°)</strong>.</li>
              <li>Support with pillows when side-lying: behind the back, between the knees, under the upper arm.</li>
            </ul>`
        },
        {
          heading: "Feeding and transfers",
          html: `
            <ul>
              <li>Check the <strong>diet card against the resident's identification</strong> before every meal.</li>
              <li>Sit at <strong>eye level</strong>, offer small bites, <strong>alternate food and fluids</strong>, and
              never rush. Tell a visually impaired resident where foods are using the <strong>clock method</strong>
              ("meat at 6 o'clock").</li>
              <li>Keep the resident upright at least 30 minutes after meals if aspiration is a risk (follow the care plan).</li>
              <li><strong>Transfers:</strong> lock the bed and wheelchair wheels, use a gait/transfer belt, and move the
              resident toward their <strong>stronger side</strong>. Bend your knees and keep your back straight — lift with your legs.</li>
            </ul>
            <div class="callout good"><p>Report appetite changes, swallowing trouble (coughing, pocketing food), and how
            much the resident ate (as a percentage) — nutrition problems are caught by observant CNAs.</p></div>`
        }
      ],
      quickCheck: [
        {
          q: "Mrs. Lopez had a stroke and her left side is weak. When dressing her, you should:",
          options: [
            "Put her shirt on the right (strong) arm first",
            "Put her shirt on the left (weak) arm first",
            "Ask her to dress herself completely",
            "Dress whichever arm is closer to you"
          ],
          answer: 1,
          explain: "Dress the affected (weak) side first — it's easier on the joint and less painful. Undress the strong side first."
        },
        {
          q: "When giving perineal care to a female resident, you should wipe:",
          options: ["Back to front", "Front to back", "Side to side", "In a circular motion"],
          answer: 1,
          explain: "Front to back prevents bacteria from the rectal area reaching the urethra, reducing urinary tract infections."
        }
      ]
    },

    {
      id: "rights",
      icon: "🗣️",
      title: "Communication & Residents' Rights",
      blurb: "OBRA rights, HIPAA, abuse reporting, and communicating with every resident with dignity.",
      sections: [
        {
          heading: "Residents' rights (OBRA 1987)",
          html: `
            <p>Every resident has legally protected rights, including the right to:</p>
            <ul>
              <li>Be treated with <strong>dignity and respect</strong></li>
              <li><strong>Privacy</strong> and confidentiality of records and care</li>
              <li><strong>Refuse treatment</strong> — you may not force care on anyone</li>
              <li>Make choices about care, schedule, clothing, and activities</li>
              <li>Be <strong>free from abuse, neglect, and restraints</strong> used for convenience</li>
              <li>Voice complaints without fear of punishment; manage their own money; have visitors</li>
            </ul>
            <div class="callout"><p><strong>If a resident refuses care:</strong> don't argue or force. Respect the
            refusal, try again later if appropriate, and <strong>report it to the nurse</strong> — the refusal may
            signal a problem, and the team must know care wasn't given.</p></div>`
        },
        {
          heading: "Abuse and neglect — you are a mandated reporter",
          html: `
            <ul>
              <li><strong>Abuse</strong> can be physical, verbal/emotional, sexual, or financial. <strong>Neglect</strong>
              is failing to provide needed care.</li>
              <li>Warning signs: unexplained bruises or injuries (especially in patterns), fear of a caregiver,
              sudden withdrawal, poor hygiene, missing belongings or money.</li>
              <li>If you witness or suspect abuse, you are <strong>legally required to report it immediately</strong> to
              the nurse or your supervisor (and per your state's rules). Never confront the suspected abuser yourself,
              and never ignore it hoping someone else reports.</li>
            </ul>`
        },
        {
          heading: "Communicating with every resident",
          html: `
            <ul>
              <li><strong>Hearing impaired:</strong> face the resident in good light, get their attention first, speak
              clearly at a normal-to-slightly-louder volume — <strong>don't shout</strong>, don't cover your mouth.</li>
              <li><strong>Vision impaired:</strong> identify yourself when entering, explain what you're doing, use the
              clock method for food, keep the room arrangement consistent.</li>
              <li><strong>Dementia:</strong> use short, simple sentences and one instruction at a time. Don't argue with
              or "correct" a confused reality — <strong>validate feelings and gently redirect</strong>. Stay calm; your tone
              matters more than your words.</li>
              <li><strong>HIPAA:</strong> resident information is shared only with care-team members who need it —
              never in hallways, elevators, break rooms, or on social media.</li>
            </ul>`
        }
      ],
      quickCheck: [
        {
          q: "Mr. Chen refuses his shower this morning. What should you do?",
          options: [
            "Firmly insist — hygiene is part of the care plan",
            "Skip it and say nothing",
            "Respect his refusal and report it to the nurse",
            "Ask two coworkers to help you shower him anyway"
          ],
          answer: 2,
          explain: "Residents have the right to refuse care. Forcing care can be abuse. Respect the refusal, offer again later, and always inform the nurse."
        },
        {
          q: "A resident with dementia keeps asking for her husband, who died years ago. Your best response is to:",
          options: [
            "Remind her clearly that her husband is dead",
            "Ignore the question and keep working",
            "Respond calmly to her feelings and gently redirect her attention",
            "Tell her he will visit tomorrow"
          ],
          answer: 2,
          explain: "Arguing or harsh reality checks cause distress; lying erodes trust. Acknowledge the feeling ('You miss him') and redirect to a comforting activity."
        }
      ]
    }
  ],

  /* ------------------------------------------------------------
     FLASHCARDS — three decks
     ------------------------------------------------------------ */
  decks: [
    {
      id: "terms",
      icon: "🩻",
      title: "Medical Terminology",
      blurb: "Core terms every CNA must recognize on the exam and on the floor.",
      cards: [
        { front: "Ambulation", back: "Walking. 'Ambulate the resident' = help them walk." },
        { front: "Aspiration", back: "Breathing food, fluid, or an object into the lungs — a major choking/pneumonia risk." },
        { front: "Atrophy", back: "Wasting or shrinking of muscle from lack of use." },
        { front: "Contracture", back: "Permanent tightening/shortening of a muscle or joint from lack of movement. Prevented with range-of-motion exercises." },
        { front: "Cyanosis", back: "Bluish color of skin, lips, or nail beds from lack of oxygen. Report immediately!" },
        { front: "Dysphagia", back: "Difficulty swallowing." },
        { front: "Dyspnea", back: "Difficult or labored breathing." },
        { front: "Edema", back: "Swelling caused by fluid trapped in body tissues, often in feet and ankles." },
        { front: "Emesis", back: "Vomiting / vomit." },
        { front: "Hemiplegia", back: "Paralysis on one side of the body (common after a stroke)." },
        { front: "Incontinence", back: "Inability to control urination or bowel movements." },
        { front: "Pressure injury (decubitus ulcer / bedsore)", back: "Skin and tissue breakdown over a bony area caused by unrelieved pressure. Prevented by repositioning at least every 2 hours." },
        { front: "Perineal care (peri-care)", back: "Cleaning the genital and anal area. Always wipe front to back." },
        { front: "Range of motion (ROM)", back: "Exercises that move each joint through its full movement to prevent contractures. 'Passive ROM' = the CNA moves the limb." },
        { front: "Syncope", back: "Fainting; a brief loss of consciousness." },
        { front: "Tachycardia", back: "Fast heart rate — over 100 beats per minute in an adult." },
        { front: "Bradycardia", back: "Slow heart rate — under 60 beats per minute in an adult." },
        { front: "Hypertension", back: "High blood pressure." },
        { front: "Hypotension", back: "Low blood pressure. 'Orthostatic hypotension' = BP drop when standing up — rise slowly!" },
        { front: "Aphasia", back: "Difficulty speaking or understanding language, often after a stroke." },
        { front: "Foot drop", back: "The foot falls into a permanently pointed position from weak/contracted muscles; prevented with support and ROM." },
        { front: "Gait belt (transfer belt)", back: "A belt placed around the resident's waist to give you a safe grip during transfers and walking." },
        { front: "Fowler's position", back: "Semi-sitting in bed with the head raised 45–60°. Used for eating and easier breathing." },
        { front: "Supine / Prone / Lateral", back: "Supine = flat on the back. Prone = on the stomach. Lateral = on the side." }
      ]
    },
    {
      id: "abbrev",
      icon: "🔤",
      title: "Abbreviations",
      blurb: "Charting shorthand you'll see on care plans and assignments.",
      cards: [
        { front: "ADL", back: "Activities of Daily Living — bathing, dressing, eating, toileting, transferring, grooming." },
        { front: "amb", back: "Ambulate / ambulatory — walking." },
        { front: "BID", back: "Twice a day." },
        { front: "TID", back: "Three times a day." },
        { front: "QID", back: "Four times a day." },
        { front: "PRN", back: "As needed (from Latin *pro re nata*)." },
        { front: "stat", back: "Immediately, right away." },
        { front: "NPO", back: "Nothing by mouth — no food or fluids at all, not even water." },
        { front: "I&O", back: "Intake and Output — measuring all fluids taken in and put out (in mL)." },
        { front: "BP", back: "Blood pressure." },
        { front: "TPR", back: "Temperature, Pulse, Respirations." },
        { front: "VS", back: "Vital signs." },
        { front: "WNL", back: "Within normal limits." },
        { front: "SOB", back: "Shortness of breath." },
        { front: "BM", back: "Bowel movement." },
        { front: "HOB", back: "Head of bed (e.g., 'HOB ↑ 45°')." },
        { front: "HS", back: "Hour of sleep — bedtime." },
        { front: "ROM", back: "Range of motion." },
        { front: "w/c", back: "Wheelchair." },
        { front: "PPE", back: "Personal protective equipment — gloves, gown, mask, goggles." },
        { front: "UTI", back: "Urinary tract infection." },
        { front: "CPR", back: "Cardiopulmonary resuscitation." },
        { front: "DNR", back: "Do Not Resuscitate — a doctor's order to withhold CPR." },
        { front: "DON", back: "Director of Nursing." }
      ]
    },
    {
      id: "numbers",
      icon: "🔢",
      title: "Numbers to Know",
      blurb: "Ranges, times, and conversions the exam loves to ask about.",
      cards: [
        { front: "Normal adult ORAL temperature", back: "About 97.6–99.6 °F (average 98.6 °F)." },
        { front: "Rectal vs. axillary temperature", back: "Rectal reads about 1 °F HIGHER than oral; axillary (armpit) about 1 °F LOWER." },
        { front: "Normal adult pulse", back: "60–100 beats per minute." },
        { front: "Normal adult respirations", back: "12–20 breaths per minute." },
        { front: "Normal adult blood pressure", back: "Below 120/80 mm Hg (systolic/diastolic)." },
        { front: "How long to lather when handwashing?", back: "At least 20 seconds of friction." },
        { front: "How often to reposition an immobile resident?", back: "At least every 2 hours." },
        { front: "Fluid conversion: 1 ounce = ? mL", back: "30 mL. (8-oz cup = 240 mL)" },
        { front: "Weight conversion: 1 kg = ? lb", back: "2.2 pounds." },
        { front: "Count an IRREGULAR pulse for…", back: "One full minute (60 seconds)." },
        { front: "OBRA minimum training hours for nurse aides", back: "75 hours (federal minimum; many states require more)." },
        { front: "Head-of-bed angle for eating", back: "Upright as tolerated — at least 45°, ideally 75–90° for meals." },
        { front: "The 'fifth vital sign'", back: "Pain — always subjective; it is whatever the resident says it is." },
        { front: "Restrained resident checks", back: "Commonly: visual check every 15 minutes; release, reposition & offer toileting/fluids every 2 hours (follow facility policy)." },
        { front: "Which BP number is systolic?", back: "The TOP (first) number — the pressure while the heart contracts." },
        { front: "One respiration equals…", back: "One inhale PLUS one exhale (rise + fall of the chest)." }
      ]
    }
  ],

  /* ------------------------------------------------------------
     QUIZ BANK — 48 exam-style questions with explanations
     ------------------------------------------------------------ */
  quizCategories: [
    "Role & Ethics",
    "Infection Control",
    "Safety & Emergencies",
    "Vital Signs",
    "Personal Care & ADLs",
    "Communication & Rights"
  ],

  quiz: [
    /* ---- Role & Ethics ---- */
    { cat: "Role & Ethics", q: "Which task is WITHIN the CNA scope of practice?",
      options: ["Giving oral medications", "Measuring and recording vital signs", "Inserting a urinary catheter", "Changing a sterile dressing"],
      answer: 1, explain: "CNAs measure vitals, assist with ADLs, and report observations. Medications, catheters, and sterile procedures belong to licensed nurses." },
    { cat: "Role & Ethics", q: "The CNA works under the direct supervision of:",
      options: ["The physician", "A licensed nurse (RN or LPN/LVN)", "The facility administrator", "The physical therapist"],
      answer: 1, explain: "Nurse aides are supervised by licensed nurses, who assign tasks and receive the CNA's reports." },
    { cat: "Role & Ethics", q: "A resident's family member offers you $20 for the wonderful care you give. You should:",
      options: ["Accept it so you don't offend them", "Accept it and split it with your shift", "Politely refuse and thank them", "Accept it but report it to the nurse"],
      answer: 2, explain: "Accepting tips or gifts violates professional ethics and most facility policies. Refuse graciously." },
    { cat: "Role & Ethics", q: "When should care be documented?",
      options: ["Before giving the care, to save time", "Immediately after giving the care", "At the end of the shift, all at once", "Only if something unusual happened"],
      answer: 1, explain: "Chart right after care is given — never before (that's falsification) and not hours later (details get lost)." },
    { cat: "Role & Ethics", q: "OBRA requires nurse aides to complete at least how many hours of training?",
      options: ["25 hours", "50 hours", "75 hours", "120 hours"],
      answer: 2, explain: "The federal minimum under OBRA 1987 is 75 hours plus a competency evaluation. Many states require more." },
    { cat: "Role & Ethics", q: "You notice a task on your assignment sheet that you were never trained to do. You should:",
      options: ["Try it — you'll figure it out", "Ask another CNA to secretly do it", "Tell the nurse you have not been trained on that task", "Skip it and hope no one notices"],
      answer: 2, explain: "Performing untrained tasks endangers residents. Tell the nurse so the task can be reassigned or you can be trained." },
    { cat: "Role & Ethics", q: "Which statement is SUBJECTIVE information?",
      options: ["\"Blood pressure is 118/76.\"", "\"The resident ate 75% of lunch.\"", "\"The resident says her head aches.\"", "\"The resident's urine is dark amber.\""],
      answer: 2, explain: "Subjective data is what the resident tells you — report it in their own words. The others are observed or measured (objective)." },
    { cat: "Role & Ethics", q: "The chain of command means the CNA reports problems first to:",
      options: ["The resident's doctor", "The charge nurse or immediate supervisor", "The facility administrator", "The resident's family"],
      answer: 1, explain: "Report up the chain: CNA → charge nurse → nursing supervisor/DON. Skipping levels causes confusion and delays." },

    /* ---- Infection Control ---- */
    { cat: "Infection Control", q: "The MOST important measure to prevent the spread of infection is:",
      options: ["Wearing gloves at all times", "Proper hand hygiene", "Disinfecting the room daily", "Wearing a mask with every resident"],
      answer: 1, explain: "Hand hygiene breaks the chain of infection more than any other single measure." },
    { cat: "Infection Control", q: "When washing your hands, you should scrub with friction for at least:",
      options: ["5 seconds", "10 seconds", "20 seconds", "2 minutes"],
      answer: 2, explain: "At least 20 seconds of friction, cleaning between fingers and under nails, fingertips pointed down." },
    { cat: "Infection Control", q: "What is the correct order for PUTTING ON (donning) PPE?",
      options: ["Gloves, gown, mask, goggles", "Gown, mask, goggles, gloves", "Mask, gloves, gown, goggles", "Goggles, gown, gloves, mask"],
      answer: 1, explain: "Don: gown → mask → goggles/face shield → gloves last (so gloves stay clean and cover the gown cuffs)." },
    { cat: "Infection Control", q: "Which piece of PPE is removed FIRST?",
      options: ["Gown", "Mask", "Goggles", "Gloves"],
      answer: 3, explain: "Gloves are the most contaminated, so they come off first: gloves → goggles → gown → mask." },
    { cat: "Infection Control", q: "Standard precautions are used with:",
      options: ["Only residents with known infections", "Only residents in isolation", "All residents, all the time", "Only when handling blood"],
      answer: 2, explain: "Standard precautions treat all blood, body fluids, and non-intact skin as infectious — for every resident, every time." },
    { cat: "Infection Control", q: "How should you handle soiled bed linens?",
      options: ["Shake them out to remove crumbs", "Hold them against your uniform to avoid dropping them", "Roll them away from you and carry them away from your uniform", "Place them on the floor until you finish the bed"],
      answer: 2, explain: "Never shake linens (spreads microbes), never touch them to your uniform, and never put them on the floor." },
    { cat: "Infection Control", q: "Alcohol-based hand rub should NOT be used when:",
      options: ["You are between residents", "Your hands are visibly soiled", "You have just removed gloves", "You are about to take vital signs"],
      answer: 1, explain: "Visible soil (and C. difficile exposure) requires soap and water — alcohol rub can't remove dirt or those spores." },
    { cat: "Infection Control", q: "A used razor blade should be disposed of in:",
      options: ["The regular trash can", "A plastic bag tied shut", "A puncture-resistant sharps container", "The resident's bathroom wastebasket"],
      answer: 2, explain: "All sharps go in the sharps container to prevent needle-stick and cut injuries." },

    /* ---- Safety & Emergencies ---- */
    { cat: "Safety & Emergencies", q: "The MOST common accident in long-term care facilities is:",
      options: ["Burns", "Choking", "Falls", "Poisoning"],
      answer: 2, explain: "Falls are #1. Call lights in reach, low locked beds, non-skid shoes, and prompt answers prevent most of them." },
    { cat: "Safety & Emergencies", q: "In the fire acronym RACE, the letters stand for:",
      options: ["Run, Alarm, Close, Exit", "Rescue, Alarm, Contain, Extinguish", "Rescue, Assess, Call, Evacuate", "Report, Alarm, Contain, Escape"],
      answer: 1, explain: "Rescue residents in danger, sound the Alarm, Contain by closing doors, then Extinguish (small fires) or evacuate." },
    { cat: "Safety & Emergencies", q: "Using a fire extinguisher, PASS stands for:",
      options: ["Push, Alarm, Spray, Stop", "Pull, Aim, Squeeze, Sweep", "Point, Activate, Spray, Sweep", "Pull, Alert, Squeeze, Spray"],
      answer: 1, explain: "Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep side to side." },
    { cat: "Safety & Emergencies", q: "Before leaving a resident's room, you should ALWAYS:",
      options: ["Turn off all the lights", "Raise the bed to its highest position", "Place the call light within the resident's reach", "Close all the window blinds"],
      answer: 2, explain: "Call light in reach, bed low, needed items close. A resident who can't call for help will try to get up alone — and fall." },
    { cat: "Safety & Emergencies", q: "A resident at lunch grabs his throat and cannot speak, cough, or breathe. You should:",
      options: ["Offer him a sip of water", "Slap his back while he sits", "Call for help and give abdominal thrusts", "Leave to find the nurse"],
      answer: 2, explain: "Silent choking with no air movement = complete obstruction. Shout for help and give abdominal thrusts (Heimlich) if trained. Never leave him alone." },
    { cat: "Safety & Emergencies", q: "Side rails used to keep a resident from getting out of bed:",
      options: ["Are a standard safety feature anyone can raise", "Are considered a restraint and require a doctor's order", "Should be up for all residents at night", "Are the CNA's decision"],
      answer: 1, explain: "Anything that restricts free movement is a restraint — it needs a doctor's order and careful monitoring." },
    { cat: "Safety & Emergencies", q: "Before transferring a resident from bed to wheelchair, the FIRST safety step with the chair is to:",
      options: ["Remove the armrests", "Lock the wheelchair brakes", "Recline the backrest", "Raise the footrests to the top"],
      answer: 1, explain: "Lock the wheelchair (and bed) wheels before any transfer — a rolling chair is a fall waiting to happen. (Footrests are moved out of the way, not raised up.)" },
    { cat: "Safety & Emergencies", q: "You find a resident lying on the floor. You should FIRST:",
      options: ["Help her back into bed quickly", "Check for injuries and call for the nurse — do not move her", "Ask her why she got up alone", "Finish your task, then report it"],
      answer: 1, explain: "Never move a fallen resident before the nurse assesses for injury. Stay with her, call for help, keep her calm." },

    /* ---- Vital Signs ---- */
    { cat: "Vital Signs", q: "Which oral temperature is within the normal adult range?",
      options: ["96.2 °F", "98.4 °F", "100.8 °F", "101.4 °F"],
      answer: 1, explain: "Normal oral range is about 97.6–99.6 °F. Readings above or below should be reported." },
    { cat: "Vital Signs", q: "The normal adult respiratory rate is:",
      options: ["6–10 breaths per minute", "12–20 breaths per minute", "22–28 breaths per minute", "30–40 breaths per minute"],
      answer: 1, explain: "12–20 quiet, effortless breaths per minute is normal for an adult at rest." },
    { cat: "Vital Signs", q: "You get a blood pressure reading of 168/96 on a normally 120/70 resident. You should:",
      options: ["Record it and move on", "Wait an hour and recheck without telling anyone", "Report it to the nurse right away", "Ask the resident to lie down and recheck tomorrow"],
      answer: 2, explain: "A significant change from the resident's baseline must be reported to the nurse immediately." },
    { cat: "Vital Signs", q: "The radial pulse is found:",
      options: ["On the neck beside the windpipe", "On the thumb side of the wrist", "Behind the knee", "On top of the foot"],
      answer: 1, explain: "Radial = wrist, thumb side. Use two or three fingertips — never your thumb, which has a pulse of its own." },
    { cat: "Vital Signs", q: "If a resident's pulse feels irregular, you should count it for:",
      options: ["15 seconds and multiply by 4", "30 seconds and multiply by 2", "One full minute", "10 seconds and multiply by 6"],
      answer: 2, explain: "Irregular rhythms need a full 60-second count for accuracy — shortcuts multiply the error." },
    { cat: "Vital Signs", q: "Why should you keep your fingers on the resident's wrist while counting respirations?",
      options: ["To keep the resident's arm still", "So the resident doesn't know breathing is being counted", "To take the pulse a second time", "To check skin temperature"],
      answer: 1, explain: "If residents know you're counting, they unconsciously change their breathing. Pretend you're still taking the pulse." },
    { cat: "Vital Signs", q: "The systolic blood pressure is:",
      options: ["The bottom number — the heart at rest", "The top number — the pressure as the heart contracts", "The difference between the two numbers", "Always below 80 in healthy adults"],
      answer: 1, explain: "Systolic (top) = heart contracting; diastolic (bottom) = heart resting between beats." },
    { cat: "Vital Signs", q: "A resident drank a 6-ounce cup of juice. For intake records, that equals:",
      options: ["60 mL", "120 mL", "180 mL", "240 mL"],
      answer: 2, explain: "1 ounce = 30 mL, so 6 oz × 30 = 180 mL." },

    /* ---- Personal Care & ADLs ---- */
    { cat: "Personal Care & ADLs", q: "When performing perineal care, always wipe:",
      options: ["Back to front", "Front to back", "In circles", "Whichever direction is easier"],
      answer: 1, explain: "Front to back keeps bacteria from the rectal area away from the urethra, preventing UTIs." },
    { cat: "Personal Care & ADLs", q: "A resident with a weak right arm is getting dressed. Put the shirt on:",
      options: ["The left arm first", "The right (weak) arm first", "Both arms at the same time", "Whichever arm the resident prefers, always"],
      answer: 1, explain: "Dress the affected/weak side first; undress the strong side first. It protects the weak joint." },
    { cat: "Personal Care & ADLs", q: "To help prevent pressure injuries, an immobile resident should be repositioned at least every:",
      options: ["30 minutes", "2 hours", "4 hours", "8 hours"],
      answer: 1, explain: "At least every 2 hours, with skin checks over bony areas. Report any redness that doesn't fade when pressure is relieved." },
    { cat: "Personal Care & ADLs", q: "Before feeding a resident, the FIRST thing to verify is:",
      options: ["That the food is hot", "The diet card matches the resident's identification", "That dessert is included", "The TV is turned on"],
      answer: 1, explain: "Feeding a resident the wrong diet (e.g., regular food to a puréed-diet resident) can cause choking or serious harm." },
    { cat: "Personal Care & ADLs", q: "The proper position for a resident during a meal is:",
      options: ["Lying flat on the back", "Sitting upright as fully as tolerated", "Lying on the left side", "Reclined at 20 degrees"],
      answer: 1, explain: "Upright (75–90° when possible) reduces the risk of aspiration. Keep them up at least 30 minutes after eating if aspiration is a risk." },
    { cat: "Personal Care & ADLs", q: "When transferring a resident from bed to wheelchair, position the chair:",
      options: ["On the resident's weaker side", "On the resident's stronger side", "Directly in front of the resident", "At the foot of the bed, facing away"],
      answer: 1, explain: "Transfer toward the strong side so the resident can lead and bear weight on their stronger leg." },
    { cat: "Personal Care & ADLs", q: "Before brushing a resident's dentures at the sink, you should:",
      options: ["Rinse them in hot water", "Line the sink with a towel or fill it with water", "Soak them in mouthwash", "Dry them with a paper towel"],
      answer: 1, explain: "Dentures are expensive and fragile. A towel-lined or water-filled sink cushions them if dropped. Use lukewarm water — hot water can warp them." },
    { cat: "Personal Care & ADLs", q: "To use good body mechanics while lifting, you should:",
      options: ["Bend at the waist and keep legs straight", "Keep feet together and twist toward the load", "Bend your knees, keep your back straight, and hold the load close", "Lift quickly to get it over with"],
      answer: 2, explain: "Wide base of support, bend the knees, back straight, load close to the body, pivot with your feet — never twist." },

    /* ---- Communication & Rights ---- */
    { cat: "Communication & Rights", q: "Residents' rights in long-term care are guaranteed by:",
      options: ["HIPAA", "OBRA (1987)", "OSHA", "The facility's marketing brochure"],
      answer: 1, explain: "OBRA 1987 established residents' rights and nurse-aide training standards. (HIPAA protects health information privacy; OSHA covers worker safety.)" },
    { cat: "Communication & Rights", q: "A resident refuses her bath. The CNA should:",
      options: ["Give the bath anyway — it's on the care plan", "Respect the refusal and inform the nurse", "Tell her she can't have breakfast until she bathes", "Document that the bath was given"],
      answer: 1, explain: "The right to refuse treatment is legally protected. Forcing care is abuse; falsifying the record is fraud. Report the refusal." },
    { cat: "Communication & Rights", q: "You may share a resident's health information with:",
      options: ["Your family at dinner (without using names)", "Care-team members who need it to provide care", "Other residents who ask about their friend", "Anyone who telephones and claims to be family"],
      answer: 1, explain: "HIPAA: minimum necessary, care team only. Even 'no-name' stories can identify a resident. Refer phone inquiries to the nurse." },
    { cat: "Communication & Rights", q: "The BEST way to describe food locations to a visually impaired resident is:",
      options: ["Guide their hand to each item", "Use the face of a clock (\"chicken at 6 o'clock\")", "Tell them to feel around carefully", "Feed them so they don't have to find anything"],
      answer: 1, explain: "The clock method preserves independence and dignity. Announce yourself when entering and explain what you're doing." },
    { cat: "Communication & Rights", q: "When speaking with a hearing-impaired resident, you should:",
      options: ["Shout as loudly as possible", "Speak while facing away so you can keep working", "Face the resident, get their attention first, and speak clearly", "Use written notes only"],
      answer: 2, explain: "Face them in good light so they can read lips and expressions. Shouting distorts sound and looks angry." },
    { cat: "Communication & Rights", q: "You see a coworker roughly yank a resident's arm and yell at him. You should:",
      options: ["Mind your own business", "Wait to see if it happens again", "Report it to the nurse/supervisor immediately", "Confront the coworker in front of the resident"],
      answer: 2, explain: "You are a mandated reporter. Suspected or witnessed abuse must be reported immediately — protecting residents outranks loyalty to coworkers." },
    { cat: "Communication & Rights", q: "Before entering a resident's room, you should always:",
      options: ["Knock and wait for permission", "Walk in quietly so you don't disturb them", "Call the front desk", "Announce yourself only if the door is closed"],
      answer: 0, explain: "Knocking respects the resident's right to privacy — their room is their home." },
    { cat: "Communication & Rights", q: "A resident with dementia insists she must \"go to work.\" The BEST response is:",
      options: ["\"You haven't worked in 30 years.\"", "\"You're confused again.\"", "\"Tell me about your job — what did you do there?\" then gently redirect", "Ignore her until she stops asking"],
      answer: 2, explain: "Arguing increases agitation. Validate the feeling, engage with the memory, and redirect to a meaningful activity." }
  ],

  /* ------------------------------------------------------------
     SKILLS LAB — put the steps in order
     All 22 skills from the standard NNAAP/Credentia exam list,
     plus one bonus skill. Steps are simplified from common state
     skill checklists; exact requirements vary by state.
     ------------------------------------------------------------ */
  skills: [
    {
      id: "handwash",
      icon: "🧼",
      title: "Hand Hygiene (Handwashing)",
      why: "The most-tested skill on every state exam — and the #1 defense against infection.",
      critical: "Lather with friction for at least 20 seconds, keep fingertips pointed DOWN, and use a clean, dry paper towel to turn off the faucet.",
      steps: [
        "Turn on the water and adjust to a comfortable warm temperature",
        "Wet hands and wrists, keeping hands lower than elbows and fingertips down",
        "Apply soap to hands",
        "Lather with friction for at least 20 seconds, cleaning between fingers and under nails",
        "Rinse thoroughly with fingertips pointed down",
        "Dry hands with a clean paper towel and dispose of it",
        "Use a new, dry paper towel to turn off the faucet, then dispose of it"
      ]
    },
    {
      id: "ppe",
      icon: "🧤",
      title: "Donning & Doffing Gown and Gloves",
      why: "Isolation precautions start here. Order matters — contaminated PPE spreads exactly what it's meant to stop.",
      critical: "Gloves go ON last and come OFF first. Remove everything without touching the contaminated outside surfaces.",
      steps: [
        "Perform hand hygiene",
        "Unfold the gown and slide your arms into the sleeves",
        "Secure the gown at the neck, then at the waist",
        "Put on gloves, pulling the cuffs over the gown sleeves",
        "Provide care, keeping the gown and gloves away from clean surfaces",
        "Remove gloves by peeling them inside out, without touching the outside with bare skin",
        "Unfasten the gown and remove it by touching only the inside, rolling it away from you",
        "Dispose of the gown and gloves in the proper container",
        "Perform hand hygiene again"
      ]
    },
    {
      id: "radial-pulse",
      icon: "❤️",
      title: "Counting & Recording the Radial Pulse",
      why: "A core measurement skill — evaluators check your finger placement, your timing, and your accuracy.",
      critical: "Use two or three FINGERTIPS on the thumb side of the wrist — never your thumb, which has its own pulse. Count for one full minute.",
      steps: [
        "Perform hand hygiene, greet the resident, and explain you'll be checking the pulse",
        "Have the resident rest their arm comfortably with the palm down",
        "Place two or three fingertips on the thumb side of the wrist",
        "Press gently until you feel the pulse",
        "Count the beats for one full minute",
        "Note whether the rhythm is regular and the beat strong or weak",
        "Record the pulse rate and report anything outside 60–100 to the nurse"
      ]
    },
    {
      id: "respirations",
      icon: "🫁",
      title: "Counting & Recording Respirations",
      why: "The sneakiest vital sign — done right, the resident never knows you counted.",
      critical: "Do NOT tell the resident you're counting — keep your fingers on the wrist as if still taking the pulse. One respiration = one inhale PLUS one exhale.",
      steps: [
        "Perform hand hygiene and position yourself where you can see the resident's chest",
        "Take the radial pulse first, then keep your fingers resting on the wrist",
        "Without announcing it, begin watching the rise and fall of the chest",
        "Count each rise-and-fall as one respiration for one full minute",
        "Note whether breathing is quiet and regular or labored and noisy",
        "Record the respiratory rate and report anything outside 12–20 to the nurse"
      ]
    },
    {
      id: "bp",
      icon: "🩸",
      title: "Measuring Blood Pressure (Manual)",
      why: "The most technical measurement skill on the exam — placement, inflation, and listening all get graded.",
      critical: "Cuff on a BARE upper arm at heart level, stethoscope over the brachial artery. First sound = systolic; sound disappears = diastolic.",
      steps: [
        "Perform hand hygiene, explain the procedure, and clean the stethoscope earpieces and diaphragm",
        "Seat the resident with the arm resting at heart level, palm up, sleeve out of the way",
        "Wrap the correct-size cuff snugly around the bare upper arm, about an inch above the elbow",
        "Locate the brachial artery at the inner elbow and place the stethoscope diaphragm over it",
        "Inflate the cuff smoothly to the level your instructor or policy directs",
        "Deflate the cuff slowly while listening",
        "Note the reading at the first sound — the systolic pressure",
        "Note the reading when the sound disappears — the diastolic pressure",
        "Deflate fully, remove the cuff, and record the reading",
        "Report a reading outside the resident's normal range to the nurse"
      ]
    },
    {
      id: "weight",
      icon: "⚖️",
      title: "Measuring Weight (Standing Scale)",
      why: "Weight changes flag fluid problems and poor nutrition — accuracy and safety both count.",
      critical: "Balance the scale at ZERO before the resident steps on, and stay close — the resident must stand still without holding on to anything.",
      steps: [
        "Perform hand hygiene, greet the resident, and explain the weight check",
        "Set the scale to zero and make sure it balances",
        "Help the resident step onto the center of the scale platform",
        "Ask the resident to stand still with arms at their sides, not holding on",
        "Read the weight accurately",
        "Help the resident step safely off the scale",
        "Record the weight and report significant changes to the nurse"
      ]
    },
    {
      id: "output",
      icon: "🧪",
      title: "Measuring & Recording Urinary Output",
      why: "Intake and output tracking catches dehydration and kidney problems early — precision matters.",
      critical: "Read the graduate on a FLAT surface at EYE LEVEL, and record in milliliters. Gloves on for the whole task.",
      steps: [
        "Perform hand hygiene and put on gloves",
        "Pour the urine from the bedpan or urinal into the measuring graduate without spilling",
        "Place the graduate on a flat surface",
        "Read the amount at eye level",
        "Empty the urine into the toilet and flush",
        "Rinse the graduate and bedpan and put them away properly",
        "Remove gloves and perform hand hygiene",
        "Record the output in milliliters and report anything unusual"
      ]
    },
    {
      id: "bedbath",
      icon: "🛁",
      title: "Modified Bed Bath (Face & One Arm)",
      why: "The exam version of bathing — evaluators watch water temperature checks, privacy, and gentle technique.",
      critical: "Check the water temperature and have the RESIDENT verify it. Wash the eyes first with plain water, inner corner to outer, using a different part of the cloth for each eye.",
      steps: [
        "Perform hand hygiene, explain the bath, and provide privacy",
        "Fill the basin with comfortably warm water and ask the resident to check the temperature",
        "Place a towel across the resident's chest",
        "Wash the eyes with a wet cloth and no soap, inner corner to outer, using a clean part of the cloth for each eye",
        "Wash, rinse, and pat dry the rest of the face",
        "Place a towel under the arm and wash the arm, shoulder to hand, with a soapy cloth",
        "Rinse the arm and hand and pat them dry",
        "Empty and rinse the basin and put used linens in the hamper",
        "Make the resident comfortable, place the call light in reach, and perform hand hygiene"
      ]
    },
    {
      id: "pericare",
      icon: "🚿",
      title: "Perineal Care (Female)",
      why: "The highest-stakes hygiene skill — technique errors cause urinary tract infections.",
      critical: "Always wipe FRONT TO BACK, using a clean part of the washcloth for each stroke. Check the water temperature first.",
      steps: [
        "Perform hand hygiene, explain the care, provide privacy, and put on gloves",
        "Position the resident on her back and place a waterproof pad beneath her",
        "Check that the water is comfortably warm",
        "Expose only the perineal area, keeping the rest of the body covered",
        "Separate the labia and wash front to back with a soapy cloth, using a clean area for each stroke",
        "Rinse front to back the same way",
        "Pat the area dry front to back",
        "Turn the resident to her side and wash, rinse, and dry the rectal area front to back",
        "Remove the pad, cover the resident, and dispose of used linens",
        "Remove gloves and perform hand hygiene"
      ]
    },
    {
      id: "catheter",
      icon: "🩹",
      title: "Catheter Care (Female)",
      why: "A urinary catheter is a highway for bacteria — careful cleaning keeps infections out.",
      critical: "Hold the catheter near the meatus and wipe AWAY from the body, at least 4 inches down the tubing, one direction only, clean cloth area per stroke. Never tug the catheter.",
      steps: [
        "Perform hand hygiene, explain the care, provide privacy, and put on gloves",
        "Position the resident on her back and place a waterproof pad beneath her",
        "Expose only the catheter area, keeping the resident draped",
        "Check that the water is comfortably warm",
        "Hold the catheter at the meatus without tugging, and wipe with a soapy cloth from the meatus down the tubing at least 4 inches",
        "Repeat with a clean area of the cloth for each stroke, always moving away from the body",
        "Rinse the same way, meatus outward, clean area per stroke",
        "Dry the tubing gently, remove the pad, and cover the resident",
        "Dispose of used supplies, remove gloves, and perform hand hygiene"
      ]
    },
    {
      id: "mouthcare",
      icon: "🪥",
      title: "Mouth Care (Brushing Teeth)",
      why: "Oral care prevents pneumonia and painful decay in residents who can't manage it alone.",
      critical: "Sit the resident UPRIGHT to prevent choking, and brush gently — gums bleed easily. Gloves on throughout.",
      steps: [
        "Perform hand hygiene, explain the care, and put on gloves",
        "Help the resident into an upright sitting position",
        "Place a towel across the resident's chest",
        "Moisten the toothbrush and apply toothpaste",
        "Brush all surfaces of the teeth and gently brush the tongue",
        "Help the resident rinse and spit into the emesis basin",
        "Wipe the resident's mouth and remove the towel",
        "Clean and store the supplies",
        "Remove gloves and perform hand hygiene"
      ]
    },
    {
      id: "dentures",
      icon: "🦷",
      title: "Cleaning Dentures",
      why: "Dentures are fragile and expensive — the exam checks that you protect them and the resident's dignity.",
      critical: "Line the sink with a towel or fill it with water before you start, and use LUKEWARM water — hot water warps dentures.",
      steps: [
        "Perform hand hygiene and put on gloves",
        "Line the sink with a towel or partially fill it with water",
        "Take the dentures to the sink in their denture cup",
        "Rinse the dentures under lukewarm running water",
        "Apply toothpaste or denture cleaner to the brush",
        "Brush all surfaces of the dentures over the protected sink",
        "Rinse the dentures thoroughly under lukewarm water",
        "Place the dentures in a clean denture cup with fresh solution or cool water",
        "Rinse the brush, clean up, remove gloves, and perform hand hygiene"
      ]
    },
    {
      id: "footcare",
      icon: "🦶",
      title: "Foot Care (One Foot)",
      why: "Feet reveal circulation problems — and for residents with diabetes, small foot injuries become big emergencies.",
      critical: "Dry THOROUGHLY between the toes, and apply lotion to the top and bottom of the foot but NEVER between the toes (trapped moisture invites infection).",
      steps: [
        "Perform hand hygiene, explain the care, and put on gloves",
        "Fill the basin with comfortably warm water and check the temperature",
        "Place the basin on a bath mat or towel and soak the resident's foot",
        "Wash the entire foot, including between the toes",
        "Rinse the foot and pat it completely dry, especially between the toes",
        "Apply lotion to the top and bottom of the foot, but not between the toes",
        "Help the resident into clean socks or footwear as appropriate",
        "Empty and rinse the basin and dispose of used linens",
        "Remove gloves and perform hand hygiene"
      ]
    },
    {
      id: "dressing",
      icon: "👕",
      title: "Dressing a Resident with a Weak Arm",
      why: "\"Dress the weak, undress the strong\" — the exam's favorite dressing rule in action.",
      critical: "Clothing goes ON the WEAK/affected arm first and comes OFF the strong arm first. Let the resident choose what to wear.",
      steps: [
        "Perform hand hygiene, explain the task, and provide privacy",
        "Ask the resident to choose what they'd like to wear",
        "Remove the old top from the strong arm first",
        "Then slide the old top gently off the weak arm",
        "Slide the clean sleeve onto the weak arm first",
        "Guide the strong arm into the other sleeve",
        "Smooth and adjust the clothing so it's comfortable and straight",
        "Make sure the resident is comfortable and place the call light within reach",
        "Perform hand hygiene"
      ]
    },
    {
      id: "stocking",
      icon: "🧦",
      title: "Applying a Knee-High Elastic Stocking",
      why: "Anti-embolism stockings prevent blood clots — but only if they're on smoothly and correctly.",
      critical: "Apply while the resident is LYING DOWN (before swelling starts), turn the stocking inside out to the heel first, and smooth out every wrinkle and twist.",
      steps: [
        "Perform hand hygiene, explain the task, and provide privacy",
        "Position the resident lying on their back",
        "Turn the stocking inside out down to the heel",
        "Slip the foot of the stocking over the toes, foot, and heel",
        "Pull the top of the stocking up over the calf toward the knee",
        "Smooth out all wrinkles and twists so the stocking lies flat",
        "Check that the heel is centered and the toes aren't pinched",
        "Make the resident comfortable and place the call light within reach"
      ]
    },
    {
      id: "transfer",
      icon: "🦽",
      title: "Transfer: Bed to Wheelchair (with Transfer Belt)",
      why: "Transfers cause more injuries — to residents AND CNAs — than almost any other task.",
      critical: "Lock ALL the wheels (bed and chair), place the chair on the resident's STRONGER side, and count \"1-2-3\" so you lift together.",
      steps: [
        "Perform hand hygiene, greet the resident, and explain the transfer",
        "Position the wheelchair next to the bed on the resident's stronger side",
        "Lock the wheelchair brakes and lock the bed wheels; move footrests out of the way",
        "Lower the bed and help the resident sit up on the edge with feet flat on the floor",
        "Put non-skid footwear on the resident",
        "Apply the transfer belt snugly around the resident's waist, over clothing",
        "Grasp the belt with both hands and, on the count of three, help the resident stand",
        "Have the resident pivot in small steps and reach for the far armrest",
        "Lower the resident slowly into the chair, hips to the back of the seat",
        "Remove the transfer belt and position the resident's feet on the footrests"
      ]
    },
    {
      id: "ambulate",
      icon: "🚶",
      title: "Ambulating with a Gait Belt",
      why: "Walking keeps residents strong and independent — your job is to make sure a walk never becomes a fall.",
      critical: "Non-skid footwear ON, belt snug over clothing, and walk slightly BEHIND on the resident's WEAKER side, holding the belt.",
      steps: [
        "Perform hand hygiene, greet the resident, and explain the walk",
        "Put non-skid footwear on the resident",
        "Apply the gait belt snugly around the waist, over clothing",
        "Help the resident stand, grasping the belt with an upward grip",
        "Allow the resident to gain balance before walking",
        "Walk slightly behind and to the side, on the resident's weaker side, holding the belt",
        "Match the resident's pace and watch for fatigue or dizziness",
        "Return the resident to a chair or bed and lower them slowly",
        "Remove the gait belt and place the call light within reach"
      ]
    },
    {
      id: "position",
      icon: "🛏️",
      title: "Positioning a Resident on Their Side",
      why: "Repositioning every two hours prevents pressure injuries — this is the bread-and-butter version.",
      critical: "Roll the resident toward you or use the far side rail for safety. Pillows go behind the back, between the knees, and under the top arm.",
      steps: [
        "Perform hand hygiene, greet the resident, and explain the repositioning",
        "Lower the head of the bed and raise the bed to a safe working height",
        "Raise the side rail on the far side of the bed",
        "Move the resident gently toward you, in sections if needed",
        "Cross the resident's near arm over the chest and bend the near knee",
        "Roll the resident away from you onto their side, toward the raised rail",
        "Place a pillow behind the back for support",
        "Place a pillow between the knees and support the top arm on a pillow",
        "Check body alignment, lower the bed, and place the call light within reach"
      ]
    },
    {
      id: "rom-leg",
      icon: "🦵",
      title: "Passive Range of Motion: Knee & Ankle",
      why: "Joints that don't move develop contractures — passive ROM keeps immobile residents flexible.",
      critical: "SUPPORT the joint above and below, move slowly and smoothly, and stop immediately at any pain or resistance. Never force a joint.",
      steps: [
        "Perform hand hygiene, explain the exercises, and provide privacy",
        "Position the resident lying on their back with the leg supported",
        "Support the leg under the knee and under the ankle",
        "Slowly bend the knee and then straighten it, repeating at least three times",
        "Support the foot and ankle with both hands",
        "Gently push the foot up toward the head, then point it down, repeating at least three times",
        "Watch the resident's face for signs of pain and stop at any resistance",
        "Make the resident comfortable and place the call light within reach"
      ]
    },
    {
      id: "rom-shoulder",
      icon: "💪",
      title: "Passive Range of Motion: Shoulder",
      why: "The shoulder loses mobility fastest — gentle daily movement preserves dressing and reaching ability.",
      critical: "Support the arm at the WRIST and ELBOW, keep every movement slow and smooth, and stop at pain or resistance.",
      steps: [
        "Perform hand hygiene, explain the exercises, and provide privacy",
        "Position the resident lying on their back with the arm at their side",
        "Support the resident's arm at the wrist and at the elbow",
        "Raise the straight arm forward and overhead, then return it down, repeating at least three times",
        "Move the straight arm out to the side and back to the body, repeating at least three times",
        "Keep all movements slow, smooth, and gentle",
        "Watch the resident's face for signs of pain and stop at any resistance",
        "Make the resident comfortable and place the call light within reach"
      ]
    },
    {
      id: "feeding",
      icon: "🍽️",
      title: "Feeding a Dependent Resident",
      why: "Aspiration is a killer. Position, pacing, and attention make mealtimes safe and dignified.",
      critical: "Verify the diet card against the resident's ID, sit the resident UPRIGHT, sit at EYE LEVEL, and alternate food with fluids.",
      steps: [
        "Perform hand hygiene and verify the diet card matches the resident's identification",
        "Explain the meal and help the resident sit upright as fully as tolerated",
        "Help the resident clean their hands and place a clothing protector if they wish",
        "Sit at the resident's eye level",
        "Describe the food and ask what they'd like first",
        "Offer small bites, giving plenty of time to chew and swallow",
        "Alternate solid food with sips of fluid",
        "Wipe the resident's mouth as needed during and after the meal",
        "Note how much was eaten and keep the resident upright after the meal",
        "Record intake and report any coughing, choking, or swallowing trouble"
      ]
    },
    {
      id: "bedpan",
      icon: "🚽",
      title: "Assisting with a Bedpan",
      why: "Dignity under pressure — this skill tests privacy, positioning, and infection control all at once.",
      critical: "Head of bed LOWERED when placing and removing the pan, RAISED while the resident uses it. Leave toilet paper and the call light within reach, and give privacy.",
      steps: [
        "Perform hand hygiene, explain the task, provide privacy, and put on gloves",
        "Lower the head of the bed before placing the bedpan",
        "Help the resident raise their hips and slide the bedpan into place",
        "Raise the head of the bed so the resident can sit comfortably",
        "Leave toilet paper and the call light within reach, and step out for privacy",
        "Return when signaled, lower the head of the bed, and remove the bedpan carefully",
        "Help the resident clean up, wiping front to back, and help them wash their hands",
        "Empty the bedpan, observing and measuring output if required, then rinse it",
        "Remove gloves, perform hand hygiene, and report anything unusual"
      ]
    },
    {
      id: "occupied-bed",
      icon: "🧺",
      bonus: true,
      title: "Making an Occupied Bed",
      why: "Bonus practice: wrinkle-free linens aren't fussiness — wrinkles cause pressure injuries on fragile skin.",
      critical: "Keep the resident covered and safe (far rail up) the whole time, and never let soiled linen touch your uniform.",
      steps: [
        "Perform hand hygiene, explain the task, and gather clean linens in order of use",
        "Raise the bed to working height and lower the head of the bed",
        "Raise the far side rail and turn the resident onto their side facing away from you",
        "Loosen the soiled bottom linens and roll them toward the resident's back",
        "Place clean bottom linens on your side, tucking and smoothing them",
        "Roll the resident over the linen hump toward you onto the clean side",
        "Move to the other side, remove the soiled linens, and pull the clean linens through",
        "Tuck and smooth all bottom linens so there are no wrinkles",
        "Center the resident, replace top linens and pillowcase",
        "Lower the bed, raise rails as ordered, and place the call light within reach"
      ]
    }
  ],

  /* ------------------------------------------------------------
     SCENARIOS — branching "what would you do?" simulations
     quality: best (2 pts) | ok (1 pt) | bad (0 pts)
     ------------------------------------------------------------ */
  scenarios: [
    {
      id: "fall",
      icon: "🚨",
      title: "The Fall in Room 214",
      setting: "It's 6:45 AM. You're answering call lights on the east wing when you hear a thud from room 214 — Mr. Alvarez, 84, who walks with a walker and has fragile skin.",
      debrief: "Falls demand three things every time: don't move the resident, stay with them while summoning help, and give the nurse objective facts. The nurse assesses; you observe, comfort, and report.",
      steps: [
        {
          text: "You enter and find Mr. Alvarez on the floor beside his bed. He's awake and says, \"I'm fine, just help me up.\" What do you do first?",
          choices: [
            { label: "Help him up quickly before he gets embarrassed", quality: "bad",
              feedback: "Never move a fallen resident before the nurse assesses — he could have a hip fracture or head injury that moving would worsen." },
            { label: "Stay with him, don't move him, and use the call light to summon the nurse", quality: "best",
              feedback: "Exactly right. Stay, keep him still and calm, and get the nurse — assessment comes before any movement." },
            { label: "Run to the nurses' station to find the nurse", quality: "ok",
              feedback: "The nurse does need to come, but never leave a fallen resident alone — use the call light or shout for help from the room." }
          ]
        },
        {
          text: "While waiting for the nurse, Mr. Alvarez shivers and says his hip hurts \"a little.\" What's your best move?",
          choices: [
            { label: "Cover him with a blanket, reassure him, and note exactly what he said", quality: "best",
              feedback: "Keep him warm and calm without moving him, and remember his exact words — \"hip hurts a little\" is important subjective data for the nurse." },
            { label: "Gently pull his leg straight to check the hip yourself", quality: "bad",
              feedback: "Assessing injuries is the nurse's job, and moving a possibly fractured hip can cause severe damage." },
            { label: "Tell him everyone falls sometimes and he shouldn't worry", quality: "ok",
              feedback: "Reassurance is kind, but you also need to keep him warm and capture his pain report for the nurse." }
          ]
        },
        {
          text: "The nurse arrives and asks what happened. What's the best report?",
          choices: [
            { label: "\"He fell because he's careless with his walker.\"", quality: "bad",
              feedback: "That's an opinion, and it's disrespectful. Report only what you observed and what he told you." },
            { label: "\"I heard a thud at 6:45, found him on the floor beside the bed, awake. He says his hip hurts a little. I didn't move him.\"", quality: "best",
              feedback: "Perfect: time, what you observed, his exact complaint, and what you did. Objective, complete, and useful." },
            { label: "\"He fell. He seems okay to me.\"", quality: "ok",
              feedback: "Too vague — and \"seems okay\" is a judgment you can't make. Give the time, position, what he said, and what you did." }
          ]
        }
      ]
    },
    {
      id: "choking",
      icon: "🍎",
      title: "Trouble in the Dining Room",
      setting: "Lunchtime in the main dining room. You're helping Mrs. Beck when, two tables over, Mr. Okafor suddenly pushes back his chair, clutching his throat.",
      debrief: "The key distinction: coughing = air is moving, so encourage coughing and stay close. Silent + can't breathe = complete obstruction, needing immediate help and abdominal thrusts. And afterward, the nurse must always be told — even if 'nothing happened.'",
      steps: [
        {
          text: "Mr. Okafor is clutching his throat. You reach him and ask, \"Are you choking?\" He is coughing forcefully. What do you do?",
          choices: [
            { label: "Immediately give abdominal thrusts", quality: "bad",
              feedback: "Forceful coughing means air is moving — thrusts aren't indicated yet and could cause injury. Encourage coughing and stay ready." },
            { label: "Encourage him to keep coughing and stay right with him", quality: "best",
              feedback: "Correct. A forceful cough is the body's best tool. Stay with him, watch closely, and be ready to act if it worsens." },
            { label: "Give him water to wash the food down", quality: "bad",
              feedback: "Never give food or fluids to someone who's choking — it can worsen the obstruction." }
          ]
        },
        {
          text: "Suddenly his cough goes silent. His lips are turning bluish and he can't speak or breathe. Now what?",
          choices: [
            { label: "Shout for help and begin abdominal thrusts", quality: "best",
              feedback: "Yes — silence, cyanosis, and no air movement mean complete obstruction. Summon help loudly and give abdominal thrusts if you're trained." },
            { label: "Run to the kitchen to call 911 yourself", quality: "bad",
              feedback: "Leaving him alone wastes the seconds that matter most. Shout so others call for help while you act." },
            { label: "Pat him firmly on the back while he sits", quality: "ok",
              feedback: "Back blows have a role in some protocols, but a seated pat is ineffective — he needs abdominal thrusts and loud calls for help now." }
          ]
        },
        {
          text: "The food dislodges and he breathes again, shaken but talking. The nurse is on her way. What else must happen?",
          choices: [
            { label: "Everything's fine now — help him finish lunch", quality: "bad",
              feedback: "After a choking episode he needs assessment before eating anything — and the event must be reported and documented." },
            { label: "Stay with him, keep him calm, and give the nurse a full report of what happened", quality: "best",
              feedback: "Right. He needs monitoring (aspiration risk, injury from thrusts) and the team may need to update his care plan — maybe a swallowing evaluation." },
            { label: "Tell him to eat more slowly next time", quality: "ok",
              feedback: "Pace matters, but lecturing isn't the priority — he needs monitoring and the nurse needs a complete report." }
          ]
        }
      ]
    },
    {
      id: "refusal",
      icon: "🛑",
      title: "\"I Don't Want a Shower\"",
      setting: "Tuesday morning. Your assignment sheet says Mrs. Dubois gets a shower today. When you mention it, she crosses her arms: \"No. I'm not showering today, and you can't make me.\"",
      debrief: "Refusals are rights in action. Your tools are respect, curiosity about the reason, creative alternatives, honest documentation — and always looping in the nurse. Force is never one of your tools.",
      steps: [
        {
          text: "Mrs. Dubois has clearly refused. What's your first response?",
          choices: [
            { label: "\"It's on the schedule, so we have to do it. Let's go.\"", quality: "bad",
              feedback: "Residents have the legal right to refuse care. Forcing her would be abuse — schedules never override rights." },
            { label: "Stay friendly and ask gently why she doesn't want to shower today", quality: "best",
              feedback: "Great instinct. Refusals usually have reasons — pain, fear of falling, feeling cold, modesty, a bad morning. Understanding the 'why' often solves it." },
            { label: "Say \"okay\" and move on to your next resident", quality: "ok",
              feedback: "Respecting the refusal is right, but leaving without exploring why — or telling the nurse — misses the real problem and leaves care undone." }
          ]
        },
        {
          text: "She admits the shower room \"is freezing and that chair feels like it's going to tip over.\" How do you respond?",
          choices: [
            { label: "Offer options: warm the room first, extra towels, or a bed bath today instead", quality: "best",
              feedback: "You found the real barrier and offered choices — that's resident-centered care. Choice restores her control, and most refusals melt when the reason is fixed." },
            { label: "Tell her the chair is perfectly safe and she's worrying over nothing", quality: "bad",
              feedback: "Dismissing her fear disrespects her and guarantees the next refusal. Her concern about the chair is also a safety report you should pass on." },
            { label: "Promise her a shower tomorrow when the aide she likes is working", quality: "ok",
              feedback: "Flexible, but it postpones hygiene and dodges the actual problems — a cold room and equipment she doesn't trust — which will still be there tomorrow." }
          ]
        },
        {
          text: "She happily accepts a bed bath instead. What still needs to happen?",
          choices: [
            { label: "Nothing — problem solved", quality: "bad",
              feedback: "Two things remain: the nurse must know the shower was refused and replaced with a bed bath, and someone should check that shower chair she called unsafe." },
            { label: "Tell the nurse about the refusal, the bed bath, and her concern about the shower chair", quality: "best",
              feedback: "Exactly. The care team tracks changes, the record must reflect what actually happened, and her equipment concern could prevent a future fall." },
            { label: "Chart that she received her scheduled shower", quality: "bad",
              feedback: "That's falsifying the record — a serious violation that can end your certification. Document what actually happened." }
          ]
        }
      ]
    },
    {
      id: "fire",
      icon: "🔥",
      title: "Smoke on the West Wing",
      setting: "You're restocking linens when you smell smoke. Down the hall, gray smoke is drifting from the doorway of room 108 — a resident room. The hallway is otherwise full of the usual afternoon activity.",
      debrief: "RACE in action: Rescue anyone in immediate danger, Alarm, Contain by closing doors, Extinguish only if small and safe. In a fire, closed doors and calm movement save more lives than heroics.",
      steps: [
        {
          text: "Smoke is coming from room 108. What's your FIRST action?",
          choices: [
            { label: "Check room 108 and move anyone inside away from the danger", quality: "best",
              feedback: "R comes first: Rescue. Residents in the smoke-filled room are in immediate danger — get them out first." },
            { label: "Run to find a fire extinguisher", quality: "bad",
              feedback: "Extinguish is the LAST step of RACE. A person in that room can't wait while you hunt for equipment." },
            { label: "Pull the fire alarm on the wall next to you", quality: "ok",
              feedback: "The alarm matters — but it's second. If someone is in that room, Rescue comes before Alarm." }
          ]
        },
        {
          text: "You've moved the resident from 108 into the hallway, away from the smoke. What now?",
          choices: [
            { label: "Activate the fire alarm and close the door to room 108", quality: "best",
              feedback: "Alarm, then Contain — the closed door starves the fire of oxygen and holds back smoke, buying everyone time." },
            { label: "Go back in to grab the resident's belongings", quality: "bad",
              feedback: "Never re-enter for possessions. Property is replaceable; you are not." },
            { label: "Open the hallway windows to let the smoke out", quality: "bad",
              feedback: "Fresh airflow feeds a fire. Contain means CLOSE doors and windows, not open them." }
          ]
        },
        {
          text: "The alarm is sounding, the door is closed, and staff are responding. A resident with a walker is frozen in the hallway, frightened. You should:",
          choices: [
            { label: "Calmly guide her away from the fire area, following the evacuation route", quality: "best",
              feedback: "Calm, steady guidance prevents panic and falls. Move residents methodically away from danger along the planned route, and follow the charge nurse's directions." },
            { label: "Tell her to wait there while you check other rooms", quality: "bad",
              feedback: "Don't leave a frightened, mobility-limited resident standing in a fire zone. Move her to safety first." },
            { label: "Carry her to the exit to move faster", quality: "ok",
              feedback: "Speed isn't worth a dropped resident and two injuries. Guide her at her own pace with her walker unless she truly cannot move." }
          ]
        }
      ]
    },
    {
      id: "abuse",
      icon: "🛡️",
      title: "The Bruises on Mrs. Tanaka",
      setting: "During Mrs. Tanaka's morning care, you notice several oval bruises on her upper arm — they look like fingertip marks. Lately she's been unusually quiet and flinches when a particular aide from the night shift is mentioned.",
      debrief: "Fingertip-pattern bruises, flinching, and withdrawal are classic warning signs. Your legal duties: observe objectively, report immediately to the nurse, never investigate or confront on your own — and never stay silent to protect a coworker.",
      steps: [
        {
          text: "You've noticed the bruises and her flinching. What's your first responsibility?",
          choices: [
            { label: "Ask the night-shift aide directly what happened", quality: "bad",
              feedback: "Never confront a suspected abuser yourself — it can endanger the resident, contaminate an investigation, and delay protection." },
            { label: "Report what you observed to the nurse immediately", quality: "best",
              feedback: "Correct. You are a mandated reporter. Suspicious injuries plus behavior changes must go to the nurse/supervisor right away — the facility takes it from there." },
            { label: "Watch her for a few more days to be sure before saying anything", quality: "bad",
              feedback: "Waiting leaves her unprotected. You report suspicions — proving what happened is the investigators' job, not yours." }
          ]
        },
        {
          text: "While you finish her care, Mrs. Tanaka whispers, \"Please don't make trouble. He'll be angry with me.\" How do you respond?",
          choices: [
            { label: "Promise her you'll keep it a secret", quality: "bad",
              feedback: "You can't promise secrecy — the law requires you to report. A false promise also destroys her trust when the report is made." },
            { label: "Reassure her she's done nothing wrong and that keeping her safe is your job — and still report", quality: "best",
              feedback: "Kind and honest. Comfort her, don't promise secrecy, and make the report — her safety outweighs her fear of 'making trouble.'" },
            { label: "Tell her nothing bad will ever happen again", quality: "ok",
              feedback: "Comforting, but you can't guarantee that. Be honest about caring for her safety and let the process protect her." }
          ]
        },
        {
          text: "The nurse asks you to describe what you saw. Which report is best?",
          choices: [
            { label: "\"That night aide has been abusing her — I'm sure of it.\"", quality: "bad",
              feedback: "That's an accusation, not an observation. State facts; let investigators draw conclusions." },
            { label: "\"Four oval bruises on her right upper arm, in a fingertip pattern. She flinched when the night aide was mentioned and asked me not to 'make trouble.'\"", quality: "best",
              feedback: "Objective, specific, and complete — locations, patterns, behaviors, and her exact words. This is exactly what protects her." },
            { label: "\"She has some bruises and seems scared.\"", quality: "ok",
              feedback: "It reports the concern but loses the details that matter — number, location, pattern, and her exact words strengthen her protection." }
          ]
        }
      ]
    }
  ],

  /* ------------------------------------------------------------
     BADGES
     ------------------------------------------------------------ */
  badges: [
    { id: "first-lesson", icon: "📖", name: "First Steps", desc: "Complete your first lesson" },
    { id: "bookworm", icon: "🎓", name: "Bookworm", desc: "Complete all six lessons" },
    { id: "quiz-rookie", icon: "✏️", name: "Quiz Rookie", desc: "Finish your first quiz" },
    { id: "perfectionist", icon: "💯", name: "Perfectionist", desc: "Score 100% on a quiz" },
    { id: "exam-ready", icon: "🏆", name: "Exam Ready", desc: "Score 80%+ on a 30-question exam simulation" },
    { id: "deck-master", icon: "🃏", name: "Deck Master", desc: "Master every card in a flashcard deck" },
    { id: "skill-pro", icon: "🧤", name: "Skill Pro", desc: "Complete a skill sequence with zero mistakes" },
    { id: "skills-champion", icon: "🥇", name: "Skills Champion", desc: "Complete every skill in the Skills Lab" },
    { id: "quick-thinker", icon: "🎭", name: "Quick Thinker", desc: "Finish a scenario with all-best choices" },
    { id: "storyteller", icon: "🌟", name: "Storyteller", desc: "Complete all five scenarios" },
    { id: "on-fire", icon: "🔥", name: "On Fire", desc: "Study 3 days in a row" }
  ]
};
