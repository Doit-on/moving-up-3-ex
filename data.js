/**
 * ==============================================================================
 * Moving Up 3: Critical Reading (ม.6) - Master Exercise Dataset
 * Application Version: v1.0.0-canyon (Book Code: MU-B3)
 * Publisher: สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT
 * Author: Brady Fotheringham
 * ------------------------------------------------------------------------------
 * Zero Shared Dependencies | Fully Scoped Dataset | 10 Units x 3 Parts (150 Items)
 * ==============================================================================
 */

const APP_META = {
  "bookCode": "MU-B3",
  "version": "1.0.0",
  "buildTag": "v1.0.0-canyon",
  "title": "Moving Up 3: Critical Reading",
  "level": "ชั้นมัธยมศึกษาปีที่ 6 (Grade 12)",
  "publisher": "สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ)",
  "themePrimary": "#24292e",
  "themeAccent": "#d97706",
  "totalUnits": 10,
  "totalItems": 150
};

const PRODUCT_COVERS = [
  {
    "id": "mu3",
    "title": "Moving Up 3: Critical Reading",
    "level": "ม.6 (Grade 12)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu3.jpg",
    "tag": "เล่มปัจจุบัน"
  },
  {
    "id": "mu1",
    "title": "Moving Up 1: Critical Reading",
    "level": "ม.4 (Grade 10)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu1.jpg",
    "tag": "ม.4"
  },
  {
    "id": "mu2",
    "title": "Moving Up 2: Critical Reading",
    "level": "ม.5 (Grade 11)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu2.jpg",
    "tag": "ม.5"
  },
  {
    "id": "nw1",
    "title": "NEW Weaving It Together 1",
    "level": "ม.4 (Grade 10)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw1.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw2",
    "title": "NEW Weaving It Together 2",
    "level": "ม.5 (Grade 11)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw2.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw3",
    "title": "NEW Weaving It Together 3",
    "level": "ม.6 (Grade 12)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw3.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "step1",
    "title": "Step Up 1: Reading & Writing",
    "level": "ม.1 (Grade 7)",
    "series": "Step Up",
    "image": "assets/images/covers/step1.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step2",
    "title": "Step Up 2: Reading & Writing",
    "level": "ม.2 (Grade 8)",
    "series": "Step Up",
    "image": "assets/images/covers/step2.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step3",
    "title": "Step Up 3: Reading & Writing",
    "level": "ม.3 (Grade 9)",
    "series": "Step Up",
    "image": "assets/images/covers/step3.jpg",
    "tag": "หลักสูตรแกนกลาง"
  }
];

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "unit": 1,
    "title": "Digital Footprints",
    "skill": "Main Idea",
    "skill_desc": "For main idea, students should be able to identify the most important idea or message of the text.",
    "cover": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27.3
      },
      {
        "start": 27.3,
        "end": 57.1
      },
      {
        "start": 57.1,
        "end": 85.4
      },
      {
        "start": 85.4,
        "end": 113.11
      }
    ],
    "passage": [
      "Every time people use the internet, they leave behind a digital footprint. This includes photos, comments, videos, searches, and other information they share online. Although some posts may seem unimportant at the time, they can remain online for years. As a result, people may have less control over their online information than they realize.",
      "Digital footprints can have a significant influence on a person’s reputation. Universities, companies, and other organizations may look at someone’s online activity before making decisions about them. A joke, photograph, or comment that seemed harmless in the past could create a negative impression later. This is why teenagers should consider the possible consequences of their online actions before posting.",
      "Protecting personal information is another important part of managing a digital footprint. Teenagers should review their privacy settings and avoid sharing sensitive information with strangers. They should also think carefully about whether a post is appropriate for a public audience. Once something has been shared, it may be difficult or even impossible to completely remove it.",
      "However, a digital footprint can also have positive effects. Teenagers can use the internet to demonstrate their talents, interests, and achievements. For example, they might share creative projects, volunteer experiences, or useful ideas. By making thoughtful and responsible choices online, young people can build a positive digital reputation that may benefit them in the future."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Which title would best fit the passage?",
        "options": [
          "The Hidden Dangers of Social Media",
          "Understanding and Managing Your Digital Footprint",
          "How Teenagers Can Become Popular Online"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Understanding and Managing Your Digital Footprint\" เพราะบทอ่านกล่าวถึงความหมาย ผลกระทบ และวิธีการบริหารจัดการรอยเท้าดิจิทัลอย่างรอบคอบ"
      },
      {
        "id": 2,
        "question": "What is the writer mainly trying to tell teenagers?",
        "options": [
          "Be careful about what you share online.",
          "Use social media to become well-known.",
          "Avoid sharing your achievements on the internet."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Be careful about what you share online.\" ผู้เขียนเน้นย้ำให้วัยรุ่นตระหนักและระมัดระวังในการโพสต์หรือแชร์ข้อมูลบนโลกออนไลน์"
      },
      {
        "id": 3,
        "question": "Which statement best summarizes the passage?",
        "options": [
          "Online activities can have both positive and negative effects on a person’s future.",
          "Most universities and companies regularly reject people because of their social media posts.",
          "Teenagers should delete their social media accounts before applying to universities."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Online activities can have both positive and negative effects on a person’s future.\" บทสรุปใจความสำคัญคือกิจกรรมออนไลน์ส่งผลได้ทั้งด้านบวกและด้านลบต่ออนาคต"
      },
      {
        "id": 4,
        "question": "Which of the following is the passage mainly about?",
        "options": [
          "The ways teenagers can become successful online",
          "The importance of making responsible choices on the internet",
          "The reasons teenagers spend so much time on social media"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"The importance of making responsible choices on the internet\" ใจความหลักของบทความมุ่งเน้นการตัดสินใจและการกระทำอย่างมีความรับผิดชอบบนอินเทอร์เน็ต"
      },
      {
        "id": 5,
        "question": "Which statement best describes the writer’s message?",
        "options": [
          "Everything posted online will eventually disappear.",
          "Teenagers should be afraid of sharing anything online.",
          "Teenagers should think about how their online actions may affect their future."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Teenagers should think about how their online actions may affect their future.\" สารสำคัญที่ผู้เขียนต้องการสื่อคือวัยรุ่นควรคิดถึงผลกระทบในอนาคตจากการกระทำบนโลกออนไลน์"
      }
    ],
    "wordBank": {
      "words": [
        "consequences",
        "influence",
        "privacy",
        "appropriate",
        "responsible"
      ],
      "scrambledWords": [
        "influence",
        "privacy",
        "responsible",
        "consequences",
        "appropriate"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Teenagers should think about the possible __________ of their actions before posting something online.",
          "answer": "consequences"
        },
        {
          "id": 2,
          "sentence": "Social media can have a strong __________ on how other people see us.",
          "answer": "influence"
        },
        {
          "id": 3,
          "sentence": "Young people should check their __________ settings to protect their personal information.",
          "answer": "privacy"
        },
        {
          "id": 4,
          "sentence": "Before sharing a photo or comment, teenagers should ask whether it is __________ for a public audience.",
          "answer": "appropriate"
        },
        {
          "id": 5,
          "sentence": "Making __________ choices online can help teenagers build a positive digital reputation.",
          "answer": "responsible"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Online posts can remain available for a long period of time.",
        "tokens": [
          "available",
          "Online posts",
          "for",
          "can remain",
          "a long period of time"
        ],
        "shuffledTokens": [
          "available",
          "can remain",
          "Online posts",
          "for",
          "a long period of time."
        ]
      },
      {
        "id": 2,
        "target": "A person’s online behavior may affect their reputation.",
        "tokens": [
          "their reputation",
          "online behavior",
          "A person’s",
          "may affect"
        ],
        "shuffledTokens": [
          "online behavior",
          "may affect",
          "A person’s",
          "their reputation."
        ]
      },
      {
        "id": 3,
        "target": "We should be careful when sharing private information online.",
        "tokens": [
          "when sharing",
          "online",
          "We",
          "private information",
          "should be careful"
        ],
        "shuffledTokens": [
          "We",
          "should be careful",
          "when sharing",
          "private information",
          "online."
        ]
      },
      {
        "id": 4,
        "target": "Young people can use online platforms to demonstrate their talents.",
        "tokens": [
          "can use",
          "their talents",
          "Young people",
          "online platforms",
          "to demonstrate"
        ],
        "shuffledTokens": [
          "Young people",
          "can use",
          "online platforms",
          "to demonstrate",
          "their talents."
        ]
      },
      {
        "id": 5,
        "target": "Making responsible choices online can help create a positive image in the future.",
        "tokens": [
          "can help create",
          "Making",
          "a positive image",
          "responsible choices",
          "in the future",
          "online"
        ],
        "shuffledTokens": [
          "Making",
          "responsible choices",
          "online",
          "can help create",
          "a positive image",
          "in the future."
        ]
      }
    ]
  },
  {
    "id": 2,
    "unit": 2,
    "title": "Why Do We Get Goosebumps?",
    "skill": "Facts and Details",
    "skill_desc": "For facts and details, students should be able to find specific facts and details that are directly stated in the text.",
    "cover": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27.2
      },
      {
        "start": 27.2,
        "end": 61.4
      },
      {
        "start": 61.4,
        "end": 91.6
      },
      {
        "start": 91.6,
        "end": 121.29
      }
    ],
    "passage": [
      "Have you ever suddenly noticed small bumps on your skin when you feel cold or hear an exciting song? These are called goosebumps. They happen when tiny muscles around the hair on your skin tighten, making the hairs stand up. Although goosebumps may seem strange, they are a natural reaction controlled by the nervous system.",
      "Goosebumps are an old survival response that humans inherited from their ancestors. Thousands of years ago, humans had much more body hair than they do today. When early humans became cold, their hair stood up and created a layer of warm air close to the skin. This helped their bodies stay warm. Today, because humans have much less body hair, goosebumps do not provide much protection from the cold.",
      "Cold temperatures are not the only reason people get goosebumps. Strong emotions can also cause them. For example, people may experience goosebumps when they hear powerful music, watch an exciting movie, or feel frightened. In these situations, the brain sends signals that activate the body’s fight-or-flight response. This prepares the body to react quickly to a possible danger or sudden event.",
      "Interestingly, scientists believe goosebumps may also be connected to strong memories and emotional experiences. A particular song might remind someone of an important moment in their life and cause a physical reaction. Although goosebumps are no longer very useful for keeping humans warm, they are still a fascinating example of how the human body reacts to its environment and emotions."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What causes goosebumps to appear on the skin?",
        "options": [
          "Tiny muscles around the hairs tighten.",
          "The skin becomes warmer.",
          "The body produces more hair."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Tiny muscles around the hairs tighten.\" ในย่อหน้าที่ 1 ระบุโดยตรงว่าขนลุกเกิดจากกล้ามเนื้อเล็กๆ รอบรูขุมขนหดตัวแน่นขึ้น"
      },
      {
        "id": 2,
        "question": "Why were goosebumps more useful to early humans?",
        "options": [
          "They helped humans run faster.",
          "Their thicker body hair helped trap warm air.",
          "They protected humans from strong emotions."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Their thicker body hair helped trap warm air.\" ในย่อหน้าที่ 2 ระบุว่ามนุษย์ยุคก่อนมีขนหนากว่า ขนที่ลุกขึ้นจึงช่วยกักเก็บอากาศอุ่นให้อยู่ใกล้ผิวหนัง"
      },
      {
        "id": 3,
        "question": "Which of the following can cause goosebumps besides cold temperatures?",
        "options": [
          "Eating a large meal",
          "Feeling tired after studying",
          "Experiencing strong emotions"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Experiencing strong emotions\" ย่อหน้าที่ 3 ระบุว่าอารมณ์ความรู้สึกที่รุนแรง เช่น ฟังเพลงซึ้ง ตื่นเต้น หรือหวาดกลัว สามารถทำให้เกิดอาการขนลุกได้"
      },
      {
        "id": 4,
        "question": "What happens when the brain activates the fight-or-flight response?",
        "options": [
          "The body prepares to react quickly to possible danger.",
          "The body immediately becomes colder.",
          "The muscles around the hair stop working."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"The body prepares to react quickly to possible danger.\" ในย่อหน้าที่ 3 กล่าวว่าการตอบสนองแบบ fight-or-flight ช่วยเตรียมพร้อมให้ร่างกายตอบสนองต่ออันตรายอย่างรวดเร็ว"
      },
      {
        "id": 5,
        "question": "How can a song cause someone to experience goosebumps?",
        "options": [
          "It can remind the person of a powerful memory.",
          "It can make the person’s body produce more hair.",
          "It can reduce the activity of the nervous system."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"It can remind the person of a powerful memory.\" ย่อหน้าที่ 4 ระบุว่าบทเพลงอาจกระตุ้นความทรงจำและประสบการณ์ทางอารมณ์ที่สำคัญ จนเกิดปฏิกิริยาทางร่างกาย"
      }
    ],
    "wordBank": {
      "words": [
        "nervous system",
        "ancestors",
        "survival",
        "emotions",
        "protective"
      ],
      "scrambledWords": [
        "ancestors",
        "protective",
        "nervous system",
        "emotions",
        "survival"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Goosebumps are controlled by the __________.",
          "answer": "nervous system"
        },
        {
          "id": 2,
          "sentence": "Humans inherited this reaction from their __________.",
          "answer": "ancestors"
        },
        {
          "id": 3,
          "sentence": "Goosebumps were once an important __________ response.",
          "answer": "survival"
        },
        {
          "id": 4,
          "sentence": "Strong __________, such as fear or excitement, can cause goosebumps.",
          "answer": "emotions"
        },
        {
          "id": 5,
          "sentence": "Early humans had more body hair, which provided a __________ layer against the cold.",
          "answer": "protective"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "This physical reaction is controlled by the nervous system.",
        "tokens": [
          "is controlled by",
          "This physical",
          "the nervous system",
          "reaction"
        ],
        "shuffledTokens": [
          "This physical",
          "reaction",
          "is controlled by",
          "the nervous system."
        ]
      },
      {
        "id": 2,
        "target": "Goosebumps are a natural response passed down from early humans.",
        "tokens": [
          "a natural response",
          "early humans",
          "Goosebumps",
          "passed down from",
          "are"
        ],
        "shuffledTokens": [
          "Goosebumps",
          "are",
          "a natural response",
          "passed down from",
          "early humans."
        ]
      },
      {
        "id": 3,
        "target": "Early humans had thicker body hair that helped retain warmth.",
        "tokens": [
          "that helped retain",
          "Early humans",
          "thicker body hair",
          "warmth",
          "had"
        ],
        "shuffledTokens": [
          "Early humans",
          "had",
          "thicker body hair",
          "that helped retain",
          "warmth."
        ]
      },
      {
        "id": 4,
        "target": "Intense emotions, such as fear or excitement, can trigger goosebumps.",
        "tokens": [
          "can trigger",
          "Intense emotions,",
          "or excitement,",
          "goosebumps",
          "such as fear"
        ],
        "shuffledTokens": [
          "Intense emotions,",
          "such as fear",
          "or excitement,",
          "can trigger",
          "goosebumps."
        ]
      },
      {
        "id": 5,
        "target": "Certain songs can evoke strong memories and produce a physical reaction.",
        "tokens": [
          "can evoke",
          "and produce",
          "a physical reaction",
          "Certain songs",
          "strong memories"
        ],
        "shuffledTokens": [
          "Certain songs",
          "can evoke",
          "strong memories",
          "and produce",
          "a physical reaction."
        ]
      }
    ]
  },
  {
    "id": 3,
    "unit": 3,
    "title": "Turning the Sea into an Airport",
    "skill": "Sequence of Events",
    "skill_desc": "For sequence of events, students should be able to identify the order in which events or steps happen.",
    "cover": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 25.6
      },
      {
        "start": 25.6,
        "end": 58.9
      },
      {
        "start": 58.9,
        "end": 82.1
      },
      {
        "start": 82.1,
        "end": 114
      }
    ],
    "passage": [
      "In the 1970s, Singapore needed a larger airport because air travel was increasing. The existing airport at Paya Lebar had limited space for future development. The government chose Changi because it had more room and was located near the coast. However, much of the area needed to be prepared before construction could begin.",
      "In 1975, workers began preparing the site. They cleared vegetation, removed hills, and carried out large-scale earthworks. Engineers used dredging machines to remove material from the seabed and move soil and sand into coastal areas. This created new land for the airport. About 8.7 square kilometers of land were created or prepared for the project. The workers had to carefully control the height and position of the new land.",
      "One major challenge was the soft and unstable soil in the reclaimed areas. Heavy runways and buildings could not be built on weak ground. Engineers therefore used methods to strengthen and stabilize the soil before construction continued. Heavy rain also made earthworks more difficult and required careful planning.",
      "After the ground was prepared, workers built the runways, terminal buildings, roads, drainage systems, and other facilities. The runways had to be strong enough to support large aircraft. After several years of construction, Changi Airport opened in 1981, and the first commercial aircraft landed there in May. A coastal area had been transformed into a major international airport through land reclamation, ground improvement, and large-scale construction."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What happened first when work on the airport site began?",
        "options": [
          "Workers built the runways.",
          "Workers cleared vegetation and removed hills.",
          "Engineers strengthened the reclaimed soil."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Workers cleared vegetation and removed hills.\" ในปี 1975 ขั้นตอนแรกสุดคือคนงานถางพืชพรรณและปรับพื้นที่เนินเขา"
      },
      {
        "id": 2,
        "question": "What did engineers do after preparing the original site?",
        "options": [
          "They used dredging machines to create new land.",
          "They built the terminal buildings.",
          "They opened the airport to passengers."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They used dredging machines to create new land.\" หลังจากเตรียมพื้นที่ วิศวกรใช้เรือขุดลอกทรายและดินจากก้นทะเลเพื่อถมทะเลสร้างแผ่นดินใหม่"
      },
      {
        "id": 3,
        "question": "What happened after the new land was created?",
        "options": [
          "The airport immediately opened.",
          "Engineers strengthened and stabilized the soil.",
          "Workers began building aircraft."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Engineers strengthened and stabilized the soil.\" หลังจากถมทะเลสร้างแผ่นดินแล้ว วิศวกรต้องปรับปรุงดินให้อยู่ตัวและแข็งแรงก่อนเริ่มก่อสร้าง"
      },
      {
        "id": 4,
        "question": "What happened after the ground was made stable?",
        "options": [
          "Workers constructed the runways, terminals, and other facilities.",
          "Workers removed the reclaimed land.",
          "Engineers began dredging the seabed again."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Workers constructed the runways, terminals, and other facilities.\" เมี่อดินมั่นคงแข็งแรงแล้ว คนงานจึงเริ่มสร้างทางวิ่ง อาคารผู้โดยสาร และสิ่งอำนวยความสะดวก"
      },
      {
        "id": 5,
        "question": "Which sequence shows the main stages of building Changi Airport?",
        "options": [
          "Strengthen the soil → reclaim land → build facilities → open the airport",
          "Reclaim land → build facilities → strengthen the soil → open the airport",
          "Prepare the site → reclaim land → strengthen the soil → build facilities → open the airport"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Prepare the site → reclaim land → strengthen the soil → build facilities → open the airport\" ลำดับขั้นตอนที่ถูกต้องตามบทอ่าน"
      }
    ],
    "wordBank": {
      "words": [
        "vegetation",
        "dredging",
        "reclaimed",
        "stabilize",
        "facilities"
      ],
      "scrambledWords": [
        "dredging",
        "facilities",
        "vegetation",
        "stabilize",
        "reclaimed"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Workers first cleared __________ and removed hills to prepare the airport site.",
          "answer": "vegetation"
        },
        {
          "id": 2,
          "sentence": "Engineers used __________ machines to remove material from the seabed and create new land.",
          "answer": "dredging"
        },
        {
          "id": 3,
          "sentence": "After the coastal areas were filled, the newly __________ land needed to be prepared for construction.",
          "answer": "reclaimed"
        },
        {
          "id": 4,
          "sentence": "Engineers had to __________ the soft soil before heavy airport structures could be built.",
          "answer": "stabilize"
        },
        {
          "id": 5,
          "sentence": "Once the ground was ready, workers constructed runways, terminal buildings, and other airport __________.",
          "answer": "facilities"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Singapore needed a larger airport to meet rising demand for air travel.",
        "tokens": [
          "rising demand",
          "needed",
          "Singapore",
          "to meet",
          "a larger airport",
          "for air travel"
        ],
        "shuffledTokens": [
          "Singapore",
          "needed",
          "a larger airport",
          "to meet",
          "rising demand",
          "for air travel."
        ]
      },
      {
        "id": 2,
        "target": "Changi was chosen for its coastal location and space for development.",
        "tokens": [
          "its coastal location",
          "was chosen for",
          "Changi",
          "for development",
          "and space"
        ],
        "shuffledTokens": [
          "Changi",
          "was chosen for",
          "its coastal location",
          "and space",
          "for development."
        ]
      },
      {
        "id": 3,
        "target": "The reclaimed land had to be strengthened because the soil was soft and unstable.",
        "tokens": [
          "had to be strengthened",
          "the soil was soft",
          "The reclaimed land",
          "and unstable",
          "because"
        ],
        "shuffledTokens": [
          "The reclaimed land",
          "had to be strengthened",
          "because",
          "the soil was soft",
          "and unstable."
        ]
      },
      {
        "id": 4,
        "target": "Runways and terminal buildings were constructed after the ground was properly prepared.",
        "tokens": [
          "were constructed",
          "the ground",
          "Runways and terminal buildings",
          "after",
          "was properly prepared"
        ],
        "shuffledTokens": [
          "Runways and terminal buildings",
          "were constructed",
          "after",
          "the ground",
          "was properly prepared."
        ]
      },
      {
        "id": 5,
        "target": "The project transformed the coastline into a major transportation hub.",
        "tokens": [
          "a major transportation hub",
          "The project",
          "the coastline",
          "transformed",
          "into"
        ],
        "shuffledTokens": [
          "The project",
          "transformed",
          "the coastline",
          "into",
          "a major transportation hub."
        ]
      }
    ]
  },
  {
    "id": 4,
    "unit": 4,
    "title": "When a City Becomes Too Hot",
    "skill": "Cause and Effect",
    "skill_desc": "For cause and effect, students should be able to identify what causes something to happen and what happens as a result.",
    "cover": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27
      },
      {
        "start": 27,
        "end": 62.1
      },
      {
        "start": 62.1,
        "end": 86.5
      },
      {
        "start": 86.5,
        "end": 114.99
      }
    ],
    "passage": [
      "Imagine walking through a city on a summer afternoon when the temperature stays above 40°C for several days. The roads feel hot, buildings trap heat, and even the air seems difficult to breathe. This is a heatwave, a period of unusually high temperatures that can have serious effects on both people and cities.",
      "As temperatures rise, people depend more heavily on air conditioners and fans. This causes electricity use to increase rapidly and can place a strain on power systems. If electricity demand becomes too high, some areas may experience power cuts. At the same time, roads and other infrastructure can suffer. Extreme heat can cause road surfaces to soften and expand, while heavy traffic can make cracks and other damage worse.",
      "The effects on people can be even more serious. High temperatures cause the body to lose water through sweating, increasing the risk of dehydration and heat-related illness. Older adults, young children, and outdoor workers are especially vulnerable. In severe cases, prolonged exposure to extreme heat can become life-threatening.",
      "Cities can take precautions to reduce these risks. Planting trees and creating green spaces can provide shade and help cool urban areas. Cities can also open cooling centers, improve public warning systems, and encourage people to drink enough water. These measures cannot stop a heatwave, but they can reduce its effects and help communities stay safer."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What can happen when people use more air conditioners and fans during a heatwave?",
        "options": [
          "Electricity demand increases.",
          "Roads become cooler.",
          "Power systems use less energy."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Electricity demand increases.\" การใช้เครื่องปรับอากาศและพัดลมมากขึ้นส่งผลให้ความต้องการใช้ไฟฟ้าพุ่งสูงขึ้นอย่างรวดเร็ว"
      },
      {
        "id": 2,
        "question": "Why can heavy traffic make roads more damaged during a heatwave?",
        "options": [
          "High temperatures make roads longer.",
          "Heat can soften road surfaces, making them easier to damage.",
          "Traffic prevents roads from expanding."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Heat can soften road surfaces, making them easier to damage.\" ความร้อนจัดทำให้พื้นผิวถนนอ่อนตัว การจราจรที่หนาแน่นจึงทำให้เกิดรอยแตกและเสียหายหนักขึ้น"
      },
      {
        "id": 3,
        "question": "Which group is most likely to face greater health risks during extreme heat?",
        "options": [
          "People working outdoors",
          "People staying in air-conditioned buildings",
          "People visiting shopping centers"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"People working outdoors\" ผู้ที่ทำงานกลางแจ้งมีความเสี่ยงต่อภาวะขาดน้ำและอาการเจ็บป่วยจากความร้อนมากกว่ากลุ่มอื่น"
      },
      {
        "id": 4,
        "question": "What is one possible consequence of prolonged exposure to extreme heat?",
        "options": [
          "Improved physical health",
          "Reduced electricity use",
          "Heat-related illness"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Heat-related illness\" การอยู่ท่ามกลางอากาศร้อนจัดเป็นเวลานานอาจทำให้ร่างกายสูญเสียน้ำและป่วยด้วยโรคจากความร้อน เช่น โรคลมแดด"
      },
      {
        "id": 5,
        "question": "How can green spaces help reduce the effects of a heatwave?",
        "options": [
          "They provide shade and help cool urban areas.",
          "They increase electricity demand.",
          "They make roads expand more quickly."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They provide shade and help cool urban areas.\" พื้นที่สีเขียวและต้นไม้ช่วยสร้างร่มเงาและลดอุณหภูมิในเขตเมืองลงได้"
      }
    ],
    "wordBank": {
      "words": [
        "strain",
        "vulnerable",
        "dehydration",
        "infrastructure",
        "precautions"
      ],
      "scrambledWords": [
        "vulnerable",
        "precautions",
        "strain",
        "infrastructure",
        "dehydration"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Extreme heat can place a __________ on electricity systems when many people use air conditioners.",
          "answer": "strain"
        },
        {
          "id": 2,
          "sentence": "Older adults and outdoor workers are especially __________ during a heatwave.",
          "answer": "vulnerable"
        },
        {
          "id": 3,
          "sentence": "Losing too much water through sweating can lead to __________.",
          "answer": "dehydration"
        },
        {
          "id": 4,
          "sentence": "Roads, buildings, and power systems are examples of urban __________.",
          "answer": "infrastructure"
        },
        {
          "id": 5,
          "sentence": "Cities can take __________ such as opening cooling centers and planting trees.",
          "answer": "precautions"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "A heatwave can bring unusually high temperatures for several days.",
        "tokens": [
          "unusually high",
          "A heatwave",
          "for several days",
          "temperatures",
          "can bring"
        ],
        "shuffledTokens": [
          "A heatwave",
          "can bring",
          "unusually high",
          "temperatures",
          "for several days."
        ]
      },
      {
        "id": 2,
        "target": "Increased use of air conditioners can raise electricity demand.",
        "tokens": [
          "electricity demand",
          "Increased use of",
          "can raise",
          "air conditioners"
        ],
        "shuffledTokens": [
          "Increased use of",
          "air conditioners",
          "can raise",
          "electricity demand."
        ]
      },
      {
        "id": 3,
        "target": "High temperatures may weaken road surfaces and cause damage.",
        "tokens": [
          "road surfaces",
          "High temperatures",
          "and cause damage",
          "may weaken"
        ],
        "shuffledTokens": [
          "High temperatures",
          "may weaken",
          "road surfaces",
          "and cause damage."
        ]
      },
      {
        "id": 4,
        "target": "Outdoor workers may face greater risks during heatwaves.",
        "tokens": [
          "heatwaves",
          "Outdoor workers",
          "greater risks",
          "may face",
          "during"
        ],
        "shuffledTokens": [
          "Outdoor workers",
          "may face",
          "greater risks",
          "during",
          "heatwaves."
        ]
      },
      {
        "id": 5,
        "target": "Green spaces can provide shade and reduce urban temperatures.",
        "tokens": [
          "urban temperatures",
          "can provide",
          "Green spaces",
          "shade",
          "and reduce"
        ],
        "shuffledTokens": [
          "Green spaces",
          "can provide",
          "shade",
          "and reduce",
          "urban temperatures."
        ]
      }
    ]
  },
  {
    "id": 5,
    "unit": 5,
    "title": "Online Learning vs. Classroom Learning",
    "skill": "Compare and Contrast",
    "skill_desc": "For compare and contrast, students should look at the information and identify how the two things are similar or different.",
    "cover": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27.2
      },
      {
        "start": 27.2,
        "end": 51.7
      },
      {
        "start": 51.7,
        "end": 73.9
      },
      {
        "start": 73.9,
        "end": 93.96
      }
    ],
    "passage": [
      "Imagine having a lesson without leaving your bedroom. You can join a class with a laptop, watch a video, and complete an activity online. This is one of the main features of online learning. In contrast, classroom learning brings students and teachers together in the same physical space. Both methods help students learn, but the experience can be very different.",
      "Online learning offers greater flexibility. Students can study from home and, in some courses, choose when to complete their work. They can also use videos, online quizzes, and other digital resources. However, studying at home can be distracting. A phone, a game, or even a comfortable bed can make it difficult to stay focused.",
      "Classroom learning provides more direct interaction. Students can ask questions, exchange ideas, and receive immediate feedback from their teachers. They can also work with classmates and develop communication skills. On the other hand, students have to follow a fixed schedule and be in the classroom at a specific time.",
      "Neither method is perfect. Online learning is flexible and convenient, while classroom learning offers face-to-face interaction and a stronger sense of connection. The better choice may depend on how students learn best, how well they manage their time, and how much interaction they prefer."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What do online learning and classroom learning have in common?",
        "options": [
          "Both allow students to learn and develop useful skills.",
          "Both give students complete control over their schedules.",
          "Both require students to communicate with teachers in person."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Both allow students to learn and develop useful skills.\" ทั้งการเรียนออนไลน์และการเรียนในชั้นเรียนต่างช่วยให้นักเรียนได้เรียนรู้และพัฒนาทักษะที่มีประโยชน์"
      },
      {
        "id": 2,
        "question": "Which situation would probably be easier for a student who manages time well?",
        "options": [
          "Following a fixed classroom schedule",
          "Studying online with a flexible schedule",
          "Working only with classmates in a classroom"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Studying online with a flexible schedule\" นักเรียนที่จัดสรรเวลาได้ดีจะได้ประโยชน์อย่างมากจากความยืดหยุ่นของการเรียนออนไลน์"
      },
      {
        "id": 3,
        "question": "A student often loses focus when studying alone. Which method may suit this student better?",
        "options": [
          "Online learning at home",
          "Independent online study",
          "Classroom learning with a teacher and classmates"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Classroom learning with a teacher and classmates\" การเรียนในห้องเรียนช่วยลดสิ่งรบกวนและมีการปฏิสัมพันธ์โดยตรง จึงเหมาะกับผู้ที่หลุดโฟกัสง่ายเมื่ออยู่คนเดียว"
      },
      {
        "id": 4,
        "question": "Which difference is most important when comparing the two methods?",
        "options": [
          "Online learning uses digital resources, while classroom learning does not.",
          "Online learning emphasizes flexibility, while classroom learning emphasizes face-to-face interaction.",
          "Online learning requires students to follow a fixed schedule, while classroom learning is flexible."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Online learning emphasizes flexibility, while classroom learning emphasizes face-to-face interaction.\" ความแตกต่างหลักคือการเรียนออนไลน์เน้นความยืดหยุ่น ส่วนในห้องเรียนเน้นการพบปะปฏิสัมพันธ์ต่อหน้า"
      },
      {
        "id": 5,
        "question": "What can be inferred from the final paragraph?",
        "options": [
          "One learning method is always better than the other.",
          "Students should choose a method based only on their academic ability.",
          "The best method may vary depending on a student's needs and preferences."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"The best method may vary depending on a student's needs and preferences.\" ไม่มีวิธีใดสมบูรณ์แบบที่สุด การเลือกขึ้นอยู่กับความต้องการและความชอบในการเรียนรู้ของแต่ละบุคคล"
      }
    ],
    "wordBank": {
      "words": [
        "flexibility",
        "distracted",
        "interaction",
        "feedback",
        "independent"
      ],
      "scrambledWords": [
        "distracted",
        "independent",
        "flexibility",
        "interaction",
        "feedback"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Online learning gives students more __________ because they can often choose when and where to study.",
          "answer": "flexibility"
        },
        {
          "id": 2,
          "sentence": "Students may become __________ at home because of phones, games, or other activities.",
          "answer": "distracted"
        },
        {
          "id": 3,
          "sentence": "Classroom learning provides more direct __________ between students, teachers, and classmates.",
          "answer": "interaction"
        },
        {
          "id": 4,
          "sentence": "Teachers can give students immediate __________ when they ask questions or complete activities.",
          "answer": "feedback"
        },
        {
          "id": 5,
          "sentence": "Online learning requires students to be more __________ and responsible for managing their own study time.",
          "answer": "independent"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Online classes allow students to study from different locations.",
        "tokens": [
          "to study",
          "allow",
          "Online classes",
          "students",
          "from different locations"
        ],
        "shuffledTokens": [
          "Online classes",
          "allow",
          "students",
          "to study",
          "from different locations."
        ]
      },
      {
        "id": 2,
        "target": "Flexible schedules can make online learning more convenient for students.",
        "tokens": [
          "online learning",
          "can make",
          "more convenient",
          "Flexible schedules",
          "for students"
        ],
        "shuffledTokens": [
          "Flexible schedules",
          "can make",
          "online learning",
          "more convenient",
          "for students."
        ]
      },
      {
        "id": 3,
        "target": "Classroom lessons allow students to communicate directly with their teachers.",
        "tokens": [
          "to communicate directly",
          "allow",
          "Classroom lessons",
          "with their teachers",
          "students"
        ],
        "shuffledTokens": [
          "Classroom lessons",
          "allow",
          "students",
          "to communicate directly",
          "with their teachers."
        ]
      },
      {
        "id": 4,
        "target": "Collaboration with classmates can improve students' communication skills.",
        "tokens": [
          "classmates",
          "communication skills",
          "Collaboration with",
          "students'",
          "can improve"
        ],
        "shuffledTokens": [
          "Collaboration with",
          "classmates",
          "can improve",
          "students'",
          "communication skills."
        ]
      },
      {
        "id": 5,
        "target": "A fixed school schedule may be less convenient for some learners.",
        "tokens": [
          "may be less",
          "some learners",
          "A fixed school schedule",
          "convenient",
          "for"
        ],
        "shuffledTokens": [
          "A fixed school schedule",
          "may be less",
          "convenient",
          "for",
          "some learners."
        ]
      }
    ]
  },
  {
    "id": 6,
    "unit": 6,
    "title": "What Happens When AI Makes a Decision?",
    "skill": "Inference",
    "skill_desc": "For inference, students should use clues in a text and what they already know to understand something the writer does not say directly.",
    "cover": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 16.8
      },
      {
        "start": 16.8,
        "end": 43.1
      },
      {
        "start": 43.1,
        "end": 71.3
      },
      {
        "start": 71.3,
        "end": 97.65
      }
    ],
    "passage": [
      "Artificial intelligence is increasingly used to make decisions in areas such as banking, healthcare, education, and online services. AI can process huge amounts of information quickly, but its decisions are not always as objective as they seem.",
      "AI systems learn from large amounts of data. They identify patterns and use them to make predictions or recommendations. For example, a bank may use AI to examine a customer's financial history before deciding whether to approve a loan. The system does not think like a human; it produces a result based on patterns found in the data.",
      "The quality of an AI decision depends heavily on the data it receives. If the data contains errors or reflects unfair patterns, the system may produce biased outcomes. For example, an AI system may treat some groups differently if similar patterns already exist in its training data. It can also be difficult to understand why an AI system reached a particular conclusion.",
      "AI can save time and handle information efficiently, especially when there are thousands of decisions to make. However, speed does not guarantee accuracy or fairness. As AI becomes more common, human oversight remains important. People need to check important AI decisions and consider whether they are reliable, fair, and appropriate, especially when those decisions can affect people's lives."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why might an AI system produce a biased decision?",
        "options": [
          "It always ignores large amounts of information.",
          "It may learn unfair patterns from the data used to train it.",
          "It cannot process information quickly enough."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"It may learn unfair patterns from the data used to train it.\" AI อาจให้ผลลัพธ์ที่มีอคติหากข้อมูลที่นำมาฝึกสอนมีข้อผิดพลาดหรือสะท้อนรูปแบบที่ไม่เป็นธรรม"
      },
      {
        "id": 2,
        "question": "What does the passage suggest about how AI makes decisions?",
        "options": [
          "AI mainly relies on patterns found in data rather than human judgment.",
          "AI understands people's situations in the same way humans do.",
          "AI can make decisions without using previous information."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"AI mainly relies on patterns found in data rather than human judgment.\" ระบบ AI ตัดสินใจโดยอิงตามรูปแบบที่พบในข้อมูล ไม่ได้คิดหรือใช้วิจารณญาณแบบมนุษย์"
      },
      {
        "id": 3,
        "question": "Why is human oversight still necessary?",
        "options": [
          "Humans can make AI process information faster.",
          "Humans can prevent AI from using any data.",
          "Humans can check whether important decisions are reliable and fair."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Humans can check whether important decisions are reliable and fair.\" การกำกับดูแลโดยมนุษย์จำเป็นต่อการตรวจสอบว่าผลการตัดสินใจของ AI มีความน่าเชื่อถือ ถูกต้อง และเป็นธรรมหรือไม่"
      },
      {
        "id": 4,
        "question": "What does the passage suggest about the relationship between speed and accuracy?",
        "options": [
          "Faster decisions are always more accurate.",
          "Making a decision quickly does not necessarily make it correct.",
          "AI cannot make decisions quickly without human assistance."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Making a decision quickly does not necessarily make it correct.\" บทความระบุว่าความเร็วในการประมวลผลไม่ได้เป็นหลักประกันความถูกต้องหรือความเป็นธรรมเสมอไป"
      },
      {
        "id": 5,
        "question": "What does the passage suggest about the future use of AI?",
        "options": [
          "AI will probably become less common in important areas.",
          "Humans will no longer need to make important decisions.",
          "Responsible use of AI will become increasingly important."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Responsible use of AI will become increasingly important.\" เมื่อ AI แพร่หลายมากขึ้น การใช้งานอย่างมีความรับผิดชอบและรอบคอบจึงมีความสำคัญอย่างยิ่ง"
      }
    ],
    "wordBank": {
      "words": [
        "patterns",
        "data",
        "biased",
        "oversight",
        "reliable"
      ],
      "scrambledWords": [
        "oversight",
        "reliable",
        "patterns",
        "data",
        "biased"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "AI systems identify __________ in large amounts of information to make predictions.",
          "answer": "patterns"
        },
        {
          "id": 2,
          "sentence": "The quality of the __________ used to train an AI system can affect its decisions.",
          "answer": "data"
        },
        {
          "id": 3,
          "sentence": "If an AI system learns unfair information, it may produce __________ outcomes.",
          "answer": "biased"
        },
        {
          "id": 4,
          "sentence": "Human __________ is important when AI makes decisions that can affect people's lives.",
          "answer": "oversight"
        },
        {
          "id": 5,
          "sentence": "People need to make sure that important AI decisions are accurate and __________.",
          "answer": "reliable"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "AI systems can analyze large quantities of information in a short time.",
        "tokens": [
          "large quantities of",
          "AI systems",
          "in a short time",
          "can analyze",
          "information"
        ],
        "shuffledTokens": [
          "AI systems",
          "can analyze",
          "large quantities of",
          "information",
          "in a short time."
        ]
      },
      {
        "id": 2,
        "target": "These systems rely on data patterns to make predictions and recommendations.",
        "tokens": [
          "to make",
          "rely on",
          "These systems",
          "predictions and recommendations",
          "data patterns"
        ],
        "shuffledTokens": [
          "These systems",
          "rely on",
          "data patterns",
          "to make",
          "predictions and recommendations."
        ]
      },
      {
        "id": 3,
        "target": "Incorrect or unfair data may lead to biased outcomes.",
        "tokens": [
          "may lead to",
          "Incorrect or",
          "biased outcomes",
          "unfair data"
        ],
        "shuffledTokens": [
          "Incorrect or",
          "unfair data",
          "may lead to",
          "biased outcomes."
        ]
      },
      {
        "id": 4,
        "target": "AI can process large numbers of decisions more efficiently than humans.",
        "tokens": [
          "can process",
          "more efficiently",
          "AI",
          "large numbers of",
          "than humans",
          "decisions"
        ],
        "shuffledTokens": [
          "AI",
          "can process",
          "large numbers of",
          "decisions",
          "more efficiently",
          "than humans."
        ]
      },
      {
        "id": 5,
        "target": "Responsible AI use requires accuracy, fairness, and reliability.",
        "tokens": [
          "AI use",
          "accuracy, fairness,",
          "Responsible",
          "and reliability",
          "requires"
        ],
        "shuffledTokens": [
          "Responsible",
          "AI use",
          "requires",
          "accuracy, fairness,",
          "and reliability."
        ]
      }
    ]
  },
  {
    "id": 7,
    "unit": 7,
    "title": "Why Are Some Cities Sinking?",
    "skill": "Analyzing Language",
    "skill_desc": "For analyzing language, students should understand how a writer’s choice of words affects meaning and feelings.",
    "cover": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 24.5
      },
      {
        "start": 24.5,
        "end": 55.1
      },
      {
        "start": 55.1,
        "end": 91.2
      },
      {
        "start": 91.2,
        "end": 111.12
      }
    ],
    "passage": [
      "Some cities around the world are slowly sinking into the ground. This process, known as land subsidence, can happen for several reasons. In coastal cities, it can become especially serious because rising sea levels may increase the risk of flooding. Jakarta, Bangkok, and Venice are examples of cities that have experienced land subsidence.",
      "One major cause is the excessive use of groundwater. When people pump large amounts of water from underground, the water pressure between soil particles decreases. The layers of soil can then become compressed, causing the land above them to sink. In Jakarta, for example, groundwater extraction has contributed to significant land subsidence in some areas. The sinking can damage roads, buildings, pipelines, and other underground infrastructure.",
      "The problem can be made worse by the weight of growing cities. As more buildings, roads, and other structures are constructed, they place additional pressure on the ground. Soft clay-rich soil is particularly vulnerable because it can compress more easily than harder ground. In Bangkok, much of the city is built on soft sediments, which can gradually compact. Venice faces a different combination of problems, including natural ground movement, groundwater extraction in the past, and rising sea levels.",
      "Sinking land can increase the risk of flooding, especially during storms or high tides. When land subsidence occurs together with sea-level rise, the risk becomes even greater. Cities can reduce these risks by limiting groundwater extraction, improving drainage systems, and strengthening coastal defenses."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What does the phrase “land subsidence” mean in paragraph 1?",
        "options": [
          "The gradual sinking of the ground",
          "The movement of water underground",
          "The expansion of coastal land"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"The gradual sinking of the ground\" land subsidence หมายถึงการทรุดตัวหรือยุบตัวลงอย่างช้าๆ ของพื้นแผ่นดิน"
      },
      {
        "id": 2,
        "question": "What does “compressed” mean in paragraph 2?",
        "options": [
          "Spread apart",
          "Pushed or squeezed together",
          "Covered with water"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Pushed or squeezed together\" compressed หมายถึงการถูกบีบอัดหรือกดทับให้แน่นเข้าหากัน"
      },
      {
        "id": 3,
        "question": "Why does the writer use the phrase “the problem can be worse” in paragraph 2?",
        "options": [
          "To show that some conditions can increase land subsidence",
          "To suggest that sinking land is easy to prevent",
          "To explain why cities need more buildings"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To show that some conditions can increase land subsidence\" ผู้เขียนใช้วลีนี้เพื่อชี้ให้เห็นว่าปัจจัยบางประการทำให้อาการทรุดตัวของแผ่นดินทวีความรุนแรงยิ่งขึ้น"
      },
      {
        "id": 4,
        "question": "What does “clay-rich soil” suggest about the ground in paragraph 2?",
        "options": [
          "It is mainly made of rock.",
          "It contains very little water.",
          "It contains a large amount of clay."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"It contains a large amount of clay.\" clay-rich หมายถึงดินที่มีส่วนประกอบของดินเหนียวอยู่เป็นปริมาณมาก จึงบีบอัดตัวได้ง่าย"
      },
      {
        "id": 5,
        "question": "Why does the writer use the phrase “the risk becomes even greater” in the final paragraph?",
        "options": [
          "To emphasize that two environmental problems can increase the danger together",
          "To show that flooding is no longer a problem",
          "To suggest that sea levels are becoming lower"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To emphasize that two environmental problems can increase the danger together\" เพื่อเน้นย้ำว่าเมื่อการทรุดตัวของแผ่นดินผสานกับระดับน้ำทะเลที่สูงขึ้น อันตรายจากน้ำท่วมจะยิ่งทวีความรุนแรง"
      }
    ],
    "wordBank": {
      "words": [
        "subsidence",
        "compressed",
        "vulnerable",
        "extraction",
        "defenses"
      ],
      "scrambledWords": [
        "defenses",
        "vulnerable",
        "extraction",
        "subsidence",
        "compressed"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "The gradual sinking of land is called land __________.",
          "answer": "subsidence"
        },
        {
          "id": 2,
          "sentence": "When soil particles are pushed together, they become __________.",
          "answer": "compressed"
        },
        {
          "id": 3,
          "sentence": "Soft, clay-rich soil is particularly __________ to land subsidence.",
          "answer": "vulnerable"
        },
        {
          "id": 4,
          "sentence": "Groundwater __________ can cause the land above underground water sources to sink.",
          "answer": "extraction"
        },
        {
          "id": 5,
          "sentence": "Coastal cities can strengthen their coastal __________ to reduce the risk of flooding.",
          "answer": "defenses"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Land subsidence causes the ground in some cities to gradually sink.",
        "tokens": [
          "the ground",
          "in some cities",
          "Land subsidence",
          "causes",
          "to gradually sink"
        ],
        "shuffledTokens": [
          "Land subsidence",
          "causes",
          "the ground",
          "in some cities",
          "to gradually sink."
        ]
      },
      {
        "id": 2,
        "target": "Compressed soil can cause buildings and other structures to become unstable.",
        "tokens": [
          "can cause",
          "buildings and",
          "Compressed soil",
          "to become unstable",
          "other structures"
        ],
        "shuffledTokens": [
          "Compressed soil",
          "can cause",
          "buildings and",
          "other structures",
          "to become unstable."
        ]
      },
      {
        "id": 3,
        "target": "Jakarta and Bangkok have experienced significant land subsidence in some areas.",
        "tokens": [
          "have experienced",
          "land subsidence",
          "Jakarta and Bangkok",
          "significant",
          "in some areas"
        ],
        "shuffledTokens": [
          "Jakarta and Bangkok",
          "have experienced",
          "significant",
          "land subsidence",
          "in some areas."
        ]
      },
      {
        "id": 4,
        "target": "Sinking land can increase the risk of flooding in coastal communities.",
        "tokens": [
          "the risk of flooding",
          "can increase",
          "Sinking land",
          "in coastal communities"
        ],
        "shuffledTokens": [
          "Sinking land",
          "can increase",
          "the risk of flooding",
          "in coastal communities."
        ]
      },
      {
        "id": 5,
        "target": "Reducing groundwater use can help slow land subsidence.",
        "tokens": [
          "groundwater use",
          "land subsidence",
          "Reducing",
          "slow",
          "can help"
        ],
        "shuffledTokens": [
          "Reducing",
          "groundwater use",
          "can help",
          "slow",
          "land subsidence."
        ]
      }
    ]
  },
  {
    "id": 8,
    "unit": 8,
    "title": "The Real Cost of Being Always Available",
    "skill": "Writer’s Purpose",
    "skill_desc": "For writer’s purpose, students should be able to identify whether a writer wants to inform, explain, persuade, entertain, or warn.",
    "cover": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 26.7
      },
      {
        "start": 26.7,
        "end": 54.3
      },
      {
        "start": 54.3,
        "end": 82.8
      },
      {
        "start": 82.8,
        "end": 105.93
      }
    ],
    "passage": [
      "Smartphones have made communication faster and more accessible than ever. A message can reach someone within seconds, whether they are at school, at work, or relaxing at home. However, this convenience has also created a growing expectation that people should always be available. Many feel expected to read and respond to messages immediately, even when they are concentrating on something important.",
      "Being constantly connected can have a significant impact on concentration and productivity. Imagine trying to study while your phone lights up every few minutes. Even a brief interruption can disrupt your attention and make it difficult to return to a task. Repeatedly switching attention between activities can reduce efficiency. As a result, responding to every notification may actually make simple tasks take longer.",
      "Constant availability can also make it difficult to rest. Some teenagers continue checking messages late at night because they fear missing a conversation or appearing uninterested if they do not reply. Over time, this habit can interfere with sleep and create unnecessary stress. Setting clear boundaries, such as turning off unnecessary notifications or putting your phone away while studying, can help protect your personal time.",
      "Technology should support our lives rather than dominate them. We do not need to respond to every message immediately, and taking a break from our phones should not make us feel guilty. By becoming more intentional about when we communicate, we can benefit from technology without allowing it to constantly demand our attention."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is the writer’s main purpose in this passage?",
        "options": [
          "To explain how smartphones were developed",
          "To encourage readers to control when they use their phones",
          "To describe different types of communication"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"To encourage readers to control when they use their phones\" จุดประสงค์หลักคือกระตุ้นให้ผู้อ่านควบคุมการใช้โทรศัพท์และกำหนดขอบเขตเวลาอย่างมีสติ"
      },
      {
        "id": 2,
        "question": "Why does the writer mention studying while a phone lights up?",
        "options": [
          "To show how notifications can interrupt concentration",
          "To suggest that students should study online",
          "To explain why smartphones are useful for learning"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To show how notifications can interrupt concentration\" ผู้เขียนยกตัวอย่างนี้เพื่อแสดงให้เห็นว่าการแจ้งเตือนรบกวนสมาธิและทำให้เสียประสิทธิภาพในการทำงาน"
      },
      {
        "id": 3,
        "question": "Why does the writer discuss teenagers checking messages late at night?",
        "options": [
          "To compare teenagers with adults",
          "To explain why teenagers enjoy social media",
          "To show how constant availability can affect rest"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"To show how constant availability can affect rest\" เพื่อชี้ให้เห็นว่าความรู้สึกที่ต้องพร้อมตอบแชทตลอดเวลาส่งผลกระทบต่อการนอนหลับและการพักผ่อน"
      },
      {
        "id": 4,
        "question": "What does the writer want readers to understand about setting boundaries?",
        "options": [
          "It can help people protect their time and attention.",
          "It prevents people from communicating with friends.",
          "It is only necessary when people are studying."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"It can help people protect their time and attention.\" การกำหนดขอบเขตช่วยปกป้องเวลาส่วนตัวและรักษาสมาธิในการดำเนินชีวิต"
      },
      {
        "id": 5,
        "question": "What does the final paragraph mainly encourage readers to do?",
        "options": [
          "Stop using smartphones whenever possible.",
          "Use technology in a more intentional and balanced way.",
          "Respond to important messages as quickly as possible."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Use technology in a more intentional and balanced way.\" ย่อหน้าสุดท้ายสนับสนุนให้ใช้เทคโนโลยีอย่างมีสติ กำหนดขอบเขต และสร้างความสมดุล"
      }
    ],
    "wordBank": {
      "words": [
        "accessible",
        "disrupt",
        "efficiency",
        "boundaries",
        "intentional"
      ],
      "scrambledWords": [
        "boundaries",
        "disrupt",
        "accessible",
        "efficiency",
        "intentional"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Smartphones have made communication more __________ than ever.",
          "answer": "accessible"
        },
        {
          "id": 2,
          "sentence": "Frequent notifications can __________ a person’s concentration.",
          "answer": "disrupt"
        },
        {
          "id": 3,
          "sentence": "Switching between tasks too often may reduce __________.",
          "answer": "efficiency"
        },
        {
          "id": 4,
          "sentence": "Setting clear __________ can help protect your personal time.",
          "answer": "boundaries"
        },
        {
          "id": 5,
          "sentence": "Being more __________ about phone use can create a healthier balance.",
          "answer": "intentional"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Smartphones allow people to communicate from almost anywhere.",
        "tokens": [
          "to communicate",
          "almost anywhere",
          "Smartphones",
          "from",
          "allow people"
        ],
        "shuffledTokens": [
          "Smartphones",
          "allow people",
          "to communicate",
          "from",
          "almost anywhere."
        ]
      },
      {
        "id": 2,
        "target": "Frequent notifications can make it difficult to stay focused.",
        "tokens": [
          "difficult",
          "Frequent notifications",
          "to stay focused",
          "can make",
          "it"
        ],
        "shuffledTokens": [
          "Frequent notifications",
          "can make",
          "it",
          "difficult",
          "to stay focused."
        ]
      },
      {
        "id": 3,
        "target": "Setting personal boundaries can create healthier digital habits.",
        "tokens": [
          "can create",
          "digital habits",
          "Setting",
          "healthier",
          "personal boundaries"
        ],
        "shuffledTokens": [
          "Setting",
          "personal boundaries",
          "can create",
          "healthier",
          "digital habits."
        ]
      },
      {
        "id": 4,
        "target": "People should not feel pressured to reply to every message immediately.",
        "tokens": [
          "should not feel",
          "People",
          "to reply to",
          "pressured",
          "immediately",
          "every message"
        ],
        "shuffledTokens": [
          "People",
          "should not feel",
          "pressured",
          "to reply to",
          "every message",
          "immediately."
        ]
      },
      {
        "id": 5,
        "target": "Using technology wisely can improve our daily lives.",
        "tokens": [
          "wisely",
          "our daily lives",
          "technology",
          "Using",
          "can improve"
        ],
        "shuffledTokens": [
          "Using",
          "technology",
          "wisely",
          "can improve",
          "our daily lives."
        ]
      }
    ]
  },
  {
    "id": 9,
    "unit": 9,
    "title": "Why Some Habits Are Hard to Break",
    "skill": "Recognizing Coherence",
    "skill_desc": "For recognizing coherence, students should understand how ideas and sentences connect logically.",
    "cover": "assets/images/ex9.jpg",
    "audio": "assets/audio/ex9.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 22.3
      },
      {
        "start": 22.3,
        "end": 46.5
      },
      {
        "start": 46.5,
        "end": 71.6
      },
      {
        "start": 71.6,
        "end": 96.16
      }
    ],
    "passage": [
      "Most people have habits they would like to change, such as eating unhealthy snacks, staying up late, or delaying important tasks. Although people may recognize that these behaviors are unhelpful, changing them can be surprisingly difficult. Repeated behaviors can gradually become automatic, requiring very little conscious thought.",
      "Habits often develop through a repeated pattern. A particular situation can trigger a behavior, which is then followed by a reward. For example, stress may lead someone to eat a sugary snack, and the pleasant taste provides immediate satisfaction. Over time, this repeated pattern becomes more established and difficult to change.",
      "However, breaking a habit does not depend entirely on willpower. A person's surroundings can also have a significant influence on behavior. Someone trying to reduce unhealthy snacking may struggle if sweets and chips are always available. Therefore, modifying the environment, such as keeping healthier food nearby, can make unwanted habits easier to control.",
      "Changing an established habit requires patience and consistent effort. Rather than simply eliminating an old behavior, replacing it with a healthier alternative may be more effective. For instance, someone who eats when stressed could take a short walk instead. Understanding triggers and changing responses can gradually lead to healthier, more sustainable routines."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Which sentence best follows the idea that habits can become automatic?",
        "options": [
          "Repeated behaviors may eventually require very little conscious thought.",
          "Everyone develops exactly the same habits.",
          "Healthy food is often more expensive than snacks."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Repeated behaviors may eventually require very little conscious thought.\" ประโยคนี้เชื่อมโยงอย่างเป็นเหตุเป็นผลกับแนวคิดที่ว่าพฤติกรรมที่ทำซ้ำๆ จะกลายเป็นความเคยชินอัตโนมัติ"
      },
      {
        "id": 2,
        "question": "Which sentence does NOT belong in the second paragraph?",
        "options": [
          "Rewards can strengthen a behavior and make it more likely to happen again.",
          "Repeated behaviors can gradually become more established over time.",
          "Strong willpower is usually enough to eliminate an unwanted habit."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Strong willpower is usually enough to eliminate an unwanted habit.\" เพราะในย่อหน้าถัดไปชี้ชัดว่าการเลิกนิสัยเดิมไม่ได้ขึ้นอยู่กับพลังใจ (willpower) เพียงอย่างเดียว จึงขัดแย้งกับทิศทางของเนื้อหา"
      },
      {
        "id": 3,
        "question": "Which idea best connects the second and third paragraphs?",
        "options": [
          "All habits are caused by stress.",
          "Habits are influenced by both repeated patterns and our surroundings.",
          "Willpower is the only way to change behavior."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Habits are influenced by both repeated patterns and our surroundings.\" เชื่อมโยงแนวคิดเรื่องวงจรพฤติกรรมจากย่อหน้าที่ 2 กับอิทธิพลของสิ่งแวดล้อมในย่อหน้าที่ 3"
      },
      {
        "id": 4,
        "question": "Which sentence would logically follow “Changing the environment can make unwanted habits easier to control”?",
        "options": [
          "For example, keeping healthier snacks nearby may reduce unhealthy choices.",
          "Many people enjoy trying new types of food.",
          "Some habits develop during childhood."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"For example, keeping healthier snacks nearby may reduce unhealthy choices.\" ประโยคนี้ให้ตัวอย่างที่เป็นรูปธรรมของการปรับสภาพแวดล้อมเพื่อควบคุมนิสัย"
      },
      {
        "id": 5,
        "question": "Which sentence provides the most logical conclusion to the passage?",
        "options": [
          "Unhealthy habits should always be stopped immediately.",
          "People should avoid developing routines in their daily lives.",
          "Understanding triggers and changing responses can help create healthier habits."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Understanding triggers and changing responses can help create healthier habits.\" เป็นข้อสรุปที่สอดคล้องกับเนื้อหาทั้งหมดเกี่ยวกับการทำความเข้าใจสิ่งกระตุ้นและการปรับพฤติกรรม"
      }
    ],
    "wordBank": {
      "words": [
        "automatic",
        "trigger",
        "influence",
        "alternative",
        "sustainable"
      ],
      "scrambledWords": [
        "alternative",
        "trigger",
        "automatic",
        "influence",
        "sustainable"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Repeated behaviors can gradually become __________ and require little conscious thought.",
          "answer": "automatic"
        },
        {
          "id": 2,
          "sentence": "Stress can __________ certain habits, such as unhealthy snacking.",
          "answer": "trigger"
        },
        {
          "id": 3,
          "sentence": "A person’s surroundings can have a strong __________ on their behavior.",
          "answer": "influence"
        },
        {
          "id": 4,
          "sentence": "Replacing an unhealthy habit with a healthier __________ may be more effective.",
          "answer": "alternative"
        },
        {
          "id": 5,
          "sentence": "Small changes can help people develop healthier and more __________ routines.",
          "answer": "sustainable"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Daily habits can gradually become part of our regular routine.",
        "tokens": [
          "our regular routine",
          "Daily habits",
          "can gradually",
          "become part of"
        ],
        "shuffledTokens": [
          "Daily habits",
          "can gradually",
          "become part of",
          "our regular routine."
        ]
      },
      {
        "id": 2,
        "target": "Unhealthy habits may become difficult to change over time.",
        "tokens": [
          "over time",
          "difficult to change",
          "Unhealthy habits",
          "may become"
        ],
        "shuffledTokens": [
          "Unhealthy habits",
          "may become",
          "difficult to change",
          "over time."
        ]
      },
      {
        "id": 3,
        "target": "Small changes can encourage healthier behavior.",
        "tokens": [
          "healthier",
          "Small changes",
          "behavior",
          "can encourage"
        ],
        "shuffledTokens": [
          "Small changes",
          "can encourage",
          "healthier",
          "behavior."
        ]
      },
      {
        "id": 4,
        "target": "Modifying the environment can make unwanted habits easier to control.",
        "tokens": [
          "can make",
          "easier to control",
          "Modifying",
          "the environment",
          "unwanted habits"
        ],
        "shuffledTokens": [
          "Modifying",
          "the environment",
          "can make",
          "unwanted habits",
          "easier to control."
        ]
      },
      {
        "id": 5,
        "target": "Breaking an established habit requires patience and consistent effort.",
        "tokens": [
          "an established habit",
          "patience and",
          "Breaking",
          "consistent effort",
          "requires"
        ],
        "shuffledTokens": [
          "Breaking",
          "an established habit",
          "requires",
          "patience and",
          "consistent effort."
        ]
      }
    ]
  },
  {
    "id": 10,
    "unit": 10,
    "title": "Would You Eat Food Past Its Date?",
    "skill": "Drawing Conclusions",
    "skill_desc": "For drawing conclusions, students should be able to combine several details from the text to understand something that is not directly stated.",
    "cover": "assets/images/ex10.jpg",
    "audio": "assets/audio/ex10.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 26.6
      },
      {
        "start": 26.6,
        "end": 53.2
      },
      {
        "start": 53.2,
        "end": 73.1
      },
      {
        "start": 73.1,
        "end": 98.77
      }
    ],
    "passage": [
      "You open the fridge and find a yogurt that passed its date yesterday. It looks normal and smells fine, but would you still eat it? Many people immediately throw away food when they see an expired date. However, date labels do not always mean exactly what consumers think they do, and confusion about them can contribute to unnecessary food waste.",
      "Labels such as “best before” often describe quality rather than safety. A product may lose some freshness after this date but can sometimes still be suitable to eat. Other labels are more closely connected to food safety and should be taken more seriously. Because people do not always understand the distinction, perfectly usable food may end up in the bin.",
      "The consequences extend beyond the kitchen. Producing food requires water, land, energy, transportation, and human labor. When edible food is discarded, many of these valuable resources are wasted as well. Food sent to landfills can also decompose and release gases that contribute to environmental problems.",
      "This does not mean people should ignore food safety. Instead, consumers need to understand labels and make informed decisions about what they eat and discard. Better knowledge, careful food storage, and sensible shopping habits could prevent unnecessary waste. The next time you find something slightly past its “best before” date, the label may be worth a second look."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What can we conclude about “best before” dates?",
        "options": [
          "Food must always be thrown away after this date.",
          "They often indicate food quality rather than safety.",
          "They are only used on dairy products."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"They often indicate food quality rather than safety.\" สรุปได้ว่าวันที่ best before มักบ่งบอกถึงคุณภาพและความสดใหม่ ไม่ได้หมายถึงความปลอดภัยเสมอไป"
      },
      {
        "id": 2,
        "question": "Why might people throw away food that is still suitable to eat?",
        "options": [
          "They may misunderstand the meaning of date labels.",
          "They prefer buying food in large quantities.",
          "They do not have enough space to store food."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They may misunderstand the meaning of date labels.\" ผู้บริโภคทิ้งอาหารที่ยังรับประทานได้เนื่องจากเข้าใจความหมายของป้ายระบุวันที่บนบรรจุภัณฑ์คลาดเคลื่อน"
      },
      {
        "id": 3,
        "question": "What can we conclude about wasting edible food?",
        "options": [
          "It mainly affects supermarkets and restaurants.",
          "It has little effect if the food is inexpensive.",
          "It also wastes the resources used to produce it."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"It also wastes the resources used to produce it.\" การทิ้งอาหารที่ยังกินได้ส่งผลให้ทรัพยากรล้ำค่าที่ใช้ในกระบวนการผลิต เช่น น้ำ ที่ดิน และพลังงาน ต้องสูญเปล่าไปด้วย"
      },
      {
        "id": 4,
        "question": "What does the passage suggest responsible consumers should do?",
        "options": [
          "Ignore date labels on most products.",
          "Understand labels and make informed decisions.",
          "Avoid buying food with “best before” dates."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Understand labels and make informed decisions.\" ผู้เขียนแนะนำให้ผู้บริโภคทำความเข้าใจฉลากวันที่ และตัดสินใจอย่างรอบคอบก่อนทิ้งอาหาร"
      },
      {
        "id": 5,
        "question": "What conclusion can be drawn from the passage as a whole?",
        "options": [
          "Better understanding of food labels could reduce unnecessary waste.",
          "Food labels create more problems than benefits.",
          "Most food can safely be eaten after the date."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Better understanding of food labels could reduce unnecessary waste.\" สรุปใจความสำคัญของทั้งบทความได้ว่าความเข้าใจที่ถูกต้องเกี่ยวกับฉลากอาหารจะช่วยลดขยะอาหารที่ไม่จำเป็นลงได้"
      }
    ],
    "wordBank": {
      "words": [
        "quality",
        "distinction",
        "resources",
        "decompose",
        "informed"
      ],
      "scrambledWords": [
        "distinction",
        "resources",
        "informed",
        "decompose",
        "quality"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "A “best before” date often describes the __________ of food rather than its safety.",
          "answer": "quality"
        },
        {
          "id": 2,
          "sentence": "Consumers should understand the __________ between different types of food labels.",
          "answer": "distinction"
        },
        {
          "id": 3,
          "sentence": "Producing food requires valuable __________ such as water, land, and energy.",
          "answer": "resources"
        },
        {
          "id": 4,
          "sentence": "Food in landfills can __________ and release gases into the environment.",
          "answer": "decompose"
        },
        {
          "id": 5,
          "sentence": "Understanding food labels helps consumers make more __________ decisions.",
          "answer": "informed"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Many people discard food without checking whether it is still safe to consume.",
        "tokens": [
          "discard food",
          "it is still safe",
          "Many people",
          "to consume",
          "without checking",
          "whether"
        ],
        "shuffledTokens": [
          "Many people",
          "discard food",
          "without checking",
          "whether",
          "it is still safe",
          "to consume."
        ]
      },
      {
        "id": 2,
        "target": "Proper food storage can extend the freshness of food products.",
        "tokens": [
          "the freshness",
          "can extend",
          "Proper food storage",
          "of food products"
        ],
        "shuffledTokens": [
          "Proper food storage",
          "can extend",
          "the freshness",
          "of food products."
        ]
      },
      {
        "id": 3,
        "target": "Discarding edible food also wastes valuable natural resources.",
        "tokens": [
          "edible food",
          "wastes valuable",
          "also",
          "Discarding",
          "natural resources"
        ],
        "shuffledTokens": [
          "Discarding",
          "edible food",
          "also",
          "wastes valuable",
          "natural resources."
        ]
      },
      {
        "id": 4,
        "target": "We should consider food quality before throwing products away.",
        "tokens": [
          "food quality",
          "products away",
          "should consider",
          "We",
          "before throwing"
        ],
        "shuffledTokens": [
          "We",
          "should consider",
          "food quality",
          "before throwing",
          "products away."
        ]
      },
      {
        "id": 5,
        "target": "Reducing food waste can have a positive environmental impact.",
        "tokens": [
          "can have",
          "environmental impact",
          "Reducing",
          "food waste",
          "a positive"
        ],
        "shuffledTokens": [
          "Reducing",
          "food waste",
          "can have",
          "a positive",
          "environmental impact."
        ]
      }
    ]
  }
];

// Support CommonJS export for Node test suites while remaining pure browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APP_META, PRODUCT_COVERS, DEFAULT_EXERCISES };
}
