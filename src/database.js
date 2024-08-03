import React from "react";

export default {
  background: "https://picsum.photos/1920/1080/?random",
  fallback: "img/shared/confidential.png",
  width: 800,
  height: 550,
  name: 'Phat "Teddy" Nguyen Hong',
  avatar: "https://avatars2.githubusercontent.com/u/29925961",
  email: "hongphat.js@gmail.com",
  phone: "(84) 961 676 560",
  address: {
    name: (
      <>
        64 Hoang Quoc Viet, Phu My Ward
        <br />
        District 7, Ho Chi Minh City
      </>
    ),
    link: "https://goo.gl/maps/bwwPqTnYiFc7PUds9",
  },
  titleColor: "dark",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nguyenhongphat0",
      icon: "linkedin",
      color: "darkBlue",
    },
    {
      name: "Github",
      url: "https://github.com/teddyos",
      icon: "github",
      color: "black",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100004240774642",
      icon: "facebook2",
      color: "blue",
    },
  ],
  windows: [
    {
      name: "Resume",
      component: "Iframe",
      link: "pdf/cv.pdf",
      color: "red",
      icon: "profile",
      size: "medium",
    },
    {
      name: "Projects",
      component: "Projects",
      tileComponent: "Projects",
      color: "white",
      icon: "stack",
      size: "large",
    },
    {
      name: "Site Builder",
      component: "Freelance",
      tileComponent: "Freelance",
      color: "black",
      icon: "vpn-publ",
      size: "wide",
    },
    {
      shortName: "First website",
      name: "CDShop",
      component: "Iframe",
      link: "https://teddyos.github.io/phatcdshop",
      color: "dark",
      icon: "backward",
      size: "medium",
    },
    {
      name: "Timeline",
      component: "Timeline",
      color: "dark",
      icon: "history",
      size: "wide",
    },
  ],
  timeline: {
    categories: [
      {
        name: "Experience",
        icon: "suitcase",
        color: "cyan",
        events: [
          {
            title: "Bamboo Dev.",
            subtitle: "Start working",
            description: "PHP Developer",
            day: 10,
            month: 4,
            year: 2017,
            preview: "img/logos/bamboo.png",
          },
          {
            title: "FPT Software (OJT)",
            subtitle: "On the job training",
            day: 21,
            month: 12,
            year: 2018,
            preview: "img/logos/fpt-software.png",
            photos: ["img/timeline/merits/ojt.jpg"],
          },
          {
            title: "FPT Software",
            subtitle: "Start working",
            description: "Front-End Developer",
            day: 7,
            month: 2,
            year: 2019,
            preview: "img/logos/fpt-software.png",
            detail: (
              <div style={{ height: 450 }}>
                <iframe
                  title="First fulltime job"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1581954698622541%26id%3D100004240774642&width=500&show_text=true&appId=483014678906039&height=608"
                  width="500"
                  height="608"
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
            ),
          },
          {
            title: "UpStage.org & URBN",
            subtitle: "Start working",
            description: "JavaScript & Python Freelancer",
            day: 1,
            month: 1,
            year: 2020,
            preview: "img/logos/upstage.png",
          },
          {
            title: "VNG, Zalo",
            subtitle: "Start working",
            description: "Fullstack Software Engineer",
            day: 7,
            month: 7,
            year: 2021,
            preview: "img/logos/zalo.svg",
          },
        ],
      },
      {
        name: "Education",
        icon: "profile",
        color: "orange",
        events: [
          {
            title: "Graduate High School",
            subtitle: "Hau Nghia High School",
            description: (
              <>
                Performance: Good
                <br />
                Conduct: Good
              </>
            ),
            day: 17,
            month: 4,
            year: 2016,
            photos: [
              "img/timeline/merits/1.jpg",
              "img/timeline/merits/1-all.jpg",
              "img/timeline/merits/2.jpg",
              "img/timeline/merits/3.jpg",
              "img/timeline/merits/4.jpg",
              "img/timeline/merits/5.jpg",
              "img/timeline/merits/6.jpg",
              "img/timeline/merits/7.jpg",
              "img/timeline/merits/8.jpg",
              "img/timeline/merits/9.jpg",
              "img/timeline/merits/10.jpg",
              "img/timeline/merits/11.jpg",
              "img/timeline/merits/12.jpg",
              "img/timeline/merits/12-social.jpg",
              "img/timeline/merits/math.jpg",
              "img/timeline/merits/12-best-subject.jpg",
              "img/timeline/merits/12-province.jpg",
            ],
          },
          {
            title: "Defend graduation thesis",
            subtitle: "FPT University",
            description: (
              <>
                Question Bank Checking System
                <br />
                Grade: 8.4
              </>
            ),
            day: 27,
            month: 12,
            year: 2019,
            preview: "img/qbcs2/logo.png",
          },
          {
            title: "Graduate University",
            subtitle: "FPT University",
            description: (
              <>
                Major: Software Engineering
                <br />
                GPA: 8.05
              </>
            ),
            day: 9,
            month: 3,
            year: 2020,
            preview: "img/timeline/fpt-university-logo.png",
            photos: ["img/timeline/merits/bachelor-degree.jpg"],
            detail: (
              <a
                className="button primary"
                href="pdf/interim-academic-transcript.pdf"
                target="_blank"
              >
                View Transcript
              </a>
            ),
          },
        ],
      },
      {
        name: "Honors & Awards",
        icon: "gift",
        color: "green",
        events: [
          {
            title: "Valedictorian",
            subtitle: "Hau Nghia High School",
            description: "Grade: 47/50",
            day: 1,
            month: 10,
            year: 2013,
          },
          {
            title: "Provincial Excellent Student",
            subtitle: "First prize",
            description: (
              <>
                Informatics - Algorithm and
                <br />
                Data Structre with Pascal
              </>
            ),
            day: 20,
            month: 11,
            year: 2014,
            photos: [
              "img/timeline/merits/tht-first.jpg",
              "img/timeline/merits/tht-second.jpg",
              "img/timeline/merits/tht-third.jpg",
              "img/timeline/merits/hsg-second.jpg",
            ],
          },
          {
            title: "National Computer Science Contest",
            subtitle: "Consolation prize",
            day: 17,
            month: 4,
            year: 2015,
          },
          {
            title: "Odon Vallet Scholarship",
            subtitle: "Odon Vallet",
            day: 11,
            month: 9,
            year: 2016,
            photos: ["img/timeline/merits/odon-vallet.jpg"],
          },
          {
            title: "70% Scholarship",
            subtitle: "FPT University",
            day: 5,
            month: 10,
            year: 2017,
            photos: ["img/timeline/merits/70-scholarship.jpg"],
          },
          {
            title: "Excellent Student of the Semester",
            subtitle: "FPT University",
            description: "GPA > 9.0 in a semester",
            day: 28,
            month: 9,
            year: 2018,
            photos: ["img/timeline/merits/fptu-esots.jpg"],
          },
          {
            title: "MCSA & MCSD",
            subtitle: "Microsoft Professional Certifications",
            day: 15,
            month: 12,
            year: 2020,
            photos: [
              "img/timeline/merits/mcsa.jpg",
              "img/timeline/merits/mcsd.jpg",
            ],
          },
          {
            title: "Top 1 NAVER UP",
            subtitle: "Coding Challenge",
            day: 3,
            month: 3,
            year: 2023,
            detail: (
              <div style={{ height: 150, overflow: "hidden" }}>
                <iframe
                  title="The Winner of NAVER UP Coding Challenge 2023"
                  src="https://event.navercorp.vn/event/naver-up-coding-challenge-2023/"
                  style={{
                    width: "400%",
                    height: "400%",
                    border: "none",
                    transform: "scale(0.25)",
                    transformOrigin: "top left",
                  }}
                ></iframe>
              </div>
            ),
          },
        ],
      },
      {
        name: "Life",
        icon: "user",
        color: "pink",
        events: [
          {
            title: "Birthday",
            subtitle: "The day I was born",
            day: 28,
            month: 12,
            year: 1998,
          },
        ],
      },
      {
        name: "Other",
        icon: "vpn-publ",
        color: "gray",
        events: [
          {
            title: "The Corona Virus",
            subtitle: "Global disease",
            description: "WFH at UpStage.org & URBN",
            preview: "img/timeline/covid-19.jpg",
            day: 1,
            month: 1,
            year: 2020,
          },
        ],
      },
    ],
  },
  projects: [
    {
      name: "Zalo Mini App Studio",
      color: "white",
      logo: "img/zalo/studio/logo.png",
      techs: [
        "OpenSumi",
        "Electron",
        "TypeScript",
        "React",
        "TailwindCSS",
        "MobX",
      ],
      description: (
        <p>
          Zalo Mini App Studio is an IDE developed by Zalo to provide a complete
          solution for building Mini App applications running on Zalo more
          efficiently and conveniently.
          <br />I built the project on top of the OpenSumi framework. At the
          moment of writing this (14/01/2023), I am the only
          developer/maintainer of the project.
        </p>
      ),
      important: true,
      actions: [
        {
          name: "Download",
          link: "https://mini.zalo.me/docs/dev-tools/?lang=en",
        },
        {
          name: "OpenSumi",
          link: "https://opensumi.com/en",
        },
      ],
      screenshots: [
        "https://stc-zmp.zadn.vn/zmp-docs/v1.28.18/assets/images/create-3-6799b18bc48041c2a0f291005acfa99f.webp",
        "https://stc-zmp.zadn.vn/zmp-docs/v1.28.18/assets/images/start-2-6267b1e9a47630139610200ef25bd34c.webp",
        "https://stc-zmp.zadn.vn/zmp-docs/v1.28.18/assets/images/deploy-3-1fe875b7c608dacf66515f34424ffb5d.webp",
        "https://stc-zmp.zadn.vn/zmp-docs/v1.28.18/assets/images/ext-3-0d7d1eb22498b9e8e775b0c30a9318a3.webp",
      ],
    },
    {
      name: "Zalo Mini App Store",
      color: "white",
      logo: "img/zalo/store/logo.png",
      techs: ["Zalo Mini App", "React", "Recoil", "TypeScript", "TailwindCSS"],
      description:
        "The main entry point of all the mini apps in the Zalo Mini App ecosystem. At the moment of writing this (14/01/2023), I am the only developer/maintainer of the project.",
      important: true,
      mobile: true,
      framed: true,
      screenshots: [
        "img/zalo/store/1.png",
        "img/zalo/store/2.png",
        "img/zalo/store/3.png",
        "img/zalo/store/4.png",
        "img/zalo/store/5.png",
      ],
    },
    {
      name: "ZCheckin",
      color: "white",
      logo: "img/zalo/zcheckin/logo.png",
      techs: ["Zalo Mini App", "Vue", "TypeScript"],
      description:
        "Internal application for checking attendance, late/off registering, paying fines, viewing team budget/rules, and booking lunch. At the moment of writing this (14/01/2023), I am the only developer/maintainer of the project.",
      important: true,
      mobile: true,
      screenshots: [
        "img/zalo/zcheckin/1.jpg",
        "img/zalo/zcheckin/2.jpg",
        "img/zalo/zcheckin/3.png",
        "img/zalo/zcheckin/4.jpg",
        "img/zalo/zcheckin/5.jpg",
      ],
    },
    {
      name: "Mini Game CrackIT",
      color: "white",
      logo: "img/zalo/crackit/logo.png",
      techs: [
        "Zalo Mini App",
        "React",
        "Recoil",
        "TypeScript",
        "TailwindCSS",
        "ThreeJS",
      ],
      description:
        "A quiz-taking mini app. Support 7 different types of questions, from single choice to matching, drag & drop marker to map and so on. At the moment of writing this (14/01/2023), I am the only developer/maintainer of the project.",
      important: true,
      mobile: true,
      screenshots: [
        "img/zalo/crackit/1.jpg",
        "img/zalo/crackit/2.jpg",
        "img/zalo/crackit/3.jpg",
        "img/zalo/crackit/4.png",
        "img/zalo/crackit/5.jpg",
      ],
    },
    {
      name: "Slideshow Maker",
      color: "white",
      logo: "img/zalo/slideshow/logo.png",
      actions: [
        {
          name: "Open",
          link: "https://zalo.me/s/4451495723088707154/",
        },
      ],
      techs: [
        "Zalo Mini App",
        "React",
        "Recoil",
        "TypeScript",
        "TailwindCSS",
        "AnimeJS",
        "FFMPEG",
        "Bull Queue",
        "Selenium",
      ],
      description:
        "Combine your favourite photos into a short video using templates and share it with your friends. Specially crafted for National Vietnamese Woman's day.",
      mobile: true,
      screenshots: [
        "img/zalo/slideshow/1.png",
        "img/zalo/slideshow/2.png",
        "img/zalo/slideshow/3.png",
        "img/zalo/slideshow/4.png",
      ],
    },
    {
      name: "GMAT Practice Question",
      color: "white",
      logo: "img/zalo/gmat/logo.png",
      techs: [
        "Zalo Mini App",
        "React",
        "Recoil",
        "TypeScript",
        "TailwindCSS",
        "Deno",
        "GitHub Actions",
      ],
      actions: [
        {
          name: "Open",
          link: "https://zalo.me/s/724237147568902829/",
        },
        {
          name: "Mini App Soure Code",
          link: "https://github.com/teddyos/gmat-miniapp",
        },
        {
          name: "Server Soure Code",
          link: "https://github.com/teddyos/gmat-database/actions",
        },
      ],
      description:
        "Because I wanted to practice GMAT wherever I go, I crawled those retired public questions on the GMAT Club and built this mini app. The mini app can also set a reminder to pop up at 7 PM daily.",
      personal: true,
      mobile: true,
      screenshots: [
        "img/zalo/gmat/1.png",
        "img/zalo/gmat/2.png",
        "img/zalo/gmat/3.png",
        "img/zalo/gmat/4.png",
      ],
    },
    {
      name: "UpStage",
      color: "green",
      logo: "img/upstage/logo.png",
      techs: [
        "MQTT",
        "Vue",
        "Python",
        "GraphQL",
        "PostgreSQL",
        "AnimeJS",
        "Playwright",
        "GitHub Actions",
      ],
      description: (
        <p>
          UpStage is an online venue for live performance: remote performers
          collaborate in real time using digital media. Online audiences
          anywhere in the world join events by clicking a link to open the
          virtual stage in their web browser.
          <br />
          UpStage is open source and available to anyone who would like to use
          it.
        </p>
      ),
      important: true,
      actions: [
        {
          name: "Home",
          link: "https://upstage.live",
        },
        {
          name: "Github",
          link: "https://github.com/upstage-org/upstage/graphs/contributors",
        },
      ],
      src: "https://upstage.live/8thMarch",
    },
    {
      name: "Question Bank Checking System - Season 2",
      color: "blue",
      logo: "img/qbcs2/logo.png",
      component: "QBCS2",
      src: "pdf/qbcs2_document_full.pdf",
      techs: [
        "C#",
        "JavaScript",
        "Vue",
        "SQL Server",
        "SQL Assembly",
        "DeepSpeech",
      ],
      description: (
        <p>
          Question Bank Checking System (Hệ thống quản lý và soạn thảo câu hỏi
          thi trắc nghiệm) is an application to help lecturers and head of
          departments manage questions bank based on their duty and courses. The
          system includes below main features:
          <ul>
            <li>Import xml/gift/word questions and export to these.</li>
            <li>
              Check duplicate questions or similar questions regarding text and
              image contents.
            </li>
            <li>
              Help lecturers create quizzes and categorise questions in
              units/chapters.
            </li>
            <li>
              Users could classify questions into several types, such as basic
              knowledge or advanced knowledge
            </li>
            <li>Statistics data</li>
          </ul>
          In the second season, we maintain and upgrade 90% of system functions,
          heavily on import questions and examinations core flow. We also
          implement new features:
          <ul>
            <li>
              Support other formats such as multiple choice, matching, short
              answer, essay, fill in blanks​, passage, and listening questions.
            </li>
            <li>
              Create questions directly on QBCS without importing from the old
              Moodle system.
            </li>
            <li>
              Check duplicate audio by finding similarities between 2 audio
              contents.
            </li>
            <li>Review and verify examination processes</li>
          </ul>
          Our project source code and data are confidential, but the document is
          public for everyone to view. Feel free to read it in the section
          below:
        </p>
      ),
      important: true,
    },
    {
      name: "Volunteer World",
      color: "orange",
      logo: "img/volunteerworld/logo.png",
      component: "VolunteerWorld",
      techs: ["Android", "JavaScript", "Vue", "C#", "SQL Server"],
      description: (
        <p>
          Volunteer World is a project for my System Architecture, Human
          Computer Interaction and Mobile Programming courses. It's a fully
          designed system with a Database Server for storing business
          information, Web Admin for managing system entities and Mobile App for
          user interaction.
        </p>
      ),
      important: true,
    },
    {
      name: "Distribution Portal",
      color: "white",
      logo: "img/logos/fpt-software.png",
      techs: ["JavaScript", "ReactJS", "Redux", "Power BI"],
      description:
        "FPT Software is a world-class software company mainly working on outsourcing and offshore development centre (ODC) business. Distribution Portal was an ODC project in which I've been participating, aiming at enterprise insurance and financial business.",
      confidential: true,
    },
    {
      name: "MDM",
      color: "white",
      logo: "img/logos/fpt-software.png",
      techs: [
        "JavaScript",
        "ReactJS",
        "Redux",
        "Umi.JS",
        "DVA.JS",
        "Ant Design",
      ],
      description:
        "FPT Software is a world-class software company mainly working on outsourcing and offshore development centre (ODC) business. Along with building new systems, FPT also maintains old systems and rebuilds better ones based on the functions of the old system with the latest technology stack. MDM was one of those.",
      confidential: true,
    },
    {
      name: "AI Security Camera",
      color: "white",
      logo: "img/logos/fpt-software.png",
      techs: ["JavaScript", "ReactJS", "ExpressJS", "MongoDB", "Node.js"],
      description: (
        <quote style={{ fontSize: 15, fontStyle: "italic" }}>
          AI Security Camera was my very first big-budget project and an
          unforgettable life experience. We use full JavaScript (MERN Stack) to
          develop a web-based system to handle data from cameras and analyse
          them using smart algorithms. I worked on both the client and server
          sides. The project took 12 months to complete and closed to our
          customer's satisfaction! Unfortunately this is a{" "}
          <b className="fg-red">private project</b>, no further information or
          any screenshot of the product is allowed to be shared, sorry!
        </quote>
      ),
      confidential: true,
    },
    {
      name: "Arena Of Evolution: Red Tides Guide",
      component: "Showcase",
      src: "https://evolutionchess.github.io",
      color: "yellow",
      logo: "https://evolutionchess.github.io/assets/img/shared/logo.png",
      techs: [
        "Jekyll",
        "JavaScript",
        "Vue",
        "Bootstrap",
        "Google Adsense",
        "Google Analytics",
        "Facebook Comment API",
      ],
      description: (
        <p>
          Arena Of Evolution: Red Tides Guide is a fandom wiki crafted with
          Jekyll and hosted on GitHub Pages. This website used to have lots of
          traffic before Red Tides lost popularity due to competition among
          auto-battler like Auto Chess and Team Fight Tactics. It provided not
          only in-game database lookup, guides and tips to play the game but
          also helpful tools like the mix, tiers list and update log comparison.
          If you are a fan of AoE: Red Tides, you probably have visited this
          site before; it has very good order in the search result of Google and
          Bing.
        </p>
      ),
      personal: true,
      actions: [
        {
          name: "Visit site",
          link: "https://evolutionchess.github.io",
        },
        {
          name: "View code on GitHub",
          link: "https://github.com/evolutionchess/evolutionchess.github.io",
        },
      ],
      screenshots: [
        "img/evolutionchess/ga.png",
        "img/evolutionchess/sc.png",
        "img/evolutionchess/fb.png",
      ],
    },
    {
      name: "Người Ấy Là Ai Database",
      component: "Showcase",
      color: "purple",
      logo: "https://nguoiaylaai.github.io/assets/img/brand/nala.png",
      techs: [
        "Jekyll",
        "JavaScript",
        "Vue",
        "Bootstrap",
        "Google Adsense",
        "Google Analytics",
        "Facebook Comment API",
      ],
      description: (
        <p>
          Người Ấy Là Ai is a famous Vietnamese gameshow where in each episode,
          a female main can choose between 5 random handsome male players. Each
          of them can be single (green), married (red) and gay (purple). Người
          Ấy Là Ai Database (NALADB) is a place where all aggregated information
          about the male characters in the gameshow is stored. The website also
          supports statistics from gameshow episodes to give interesting facts,
          such as the guy who was thought to be the most single, unpredictable
          guy, and so on.
        </p>
      ),
      personal: true,
      actions: [
        {
          name: "Visit site",
          link: "https://nguoiaylaai.github.io",
        },
        {
          name: "View code on GitHub",
          link: "https://github.com/nguoiaylaai/nguoiaylaai.github.io",
        },
      ],
      screenshots: ["img/nguoiaylaai/1.png", "img/nguoiaylaai/2.png"],
    },
    {
      name: "Wordpress Developerpack",
      color: "black",
      logo: "img/developerpack/wordpress.png",
      techs: ["PHP", "Wordpress"],
      screenshots: [
        "https://ps.w.org/developer-pack/assets/screenshot-1.png",
        "https://ps.w.org/developer-pack/assets/screenshot-2.png",
      ],
      description: (
        <p>
          Developer Pack allows you to view PHP information, download WordPress
          site source code with advanced options, and edit online code with a
          powerful code editor. You don’t have to use FTP or SSH anymore.
          <br />
          Developer Pack was built for the developers/freelancers. If you don’t
          know how to code PHP or how WordPress work, it is massively dangerous.
          Please only install it when you know what you are doing!
          <br />
          <b>Remember:</b> This plugin can modify your file system. Use it
          wisely!
        </p>
      ),
      actions: [
        {
          name: "Download in Wordpress Plugins",
          link: "https://wordpress.org/plugins/developer-pack/",
        },
        {
          name: "View code on GitHub",
          link: "https://github.com/teddyos/wordpress-developerpack",
        },
      ],
      personal: true,
    },
    {
      name: "Prestashop Developerpack",
      color: "black",
      logo: "img/developerpack/prestashop.png",
      techs: ["PHP", "Prestashop"],
      description: (
        <p>
          Freelancer/Developer use only!
          <br />
          This module allows you to download your website source code for local
          debugging and editing your file directly in your back office with a
          powerful code editor.
        </p>
      ),
      actions: [
        {
          name: "View code & download on Github",
          link: "https://github.com/teddyos/prestashop-developerpack",
        },
      ],
    },
    {
      name: "Thu Vien Cong Giao Viet Nam",
      color: "white",
      logo: "img/logos/thuvienconggiaovietnam.png",
      techs: ["Bootstrap", "JQuery", "JavaScript"],
      description: (
        <p>
          The official thuvienconggiaovietnam.net mockup site, which has a
          vintage design pattern with complete feature pages and is fully
          responsive. The website was built on top of Bootstrap 4 and jQuery.
        </p>
      ),
      src: "https://teddyos.github.io/thuvienconggiaovietnam.net",
      actions: [
        {
          name: "View code on GitHub",
          link: "https://github.com/teddyos/thuvienconggiaovietnam.net",
        },
      ],
    },
    {
      name: "KETRI Fieldwork Student",
      color: "white",
      logo: "img/logos/etboard.png",
      techs: ["PHP", "Laravel", "PHP", "JQuery", "MySQL"],
      description: <p>My freelance projects for customers from South Korea.</p>,
      confidential: true,
    },
    {
      name: "teddyos.github.io",
      shortName: "Portfolio",
      color: "dark",
      icon: "profile",
      techs: ["JavaScript", "ReactJS"],
      description: <p>This is my portfolio, and you are viewing it :D</p>,
      actions: [
        {
          name: "View code on GitHub",
          link: "https://github.com/teddyos/teddyos.github.io",
        },
      ],
    },
    {
      name: "CD Shop",
      component: "Showcase",
      src: "https://teddyos.github.io/phatcdshop",
      color: "green",
      icon: "gamepad",
      techs: ["JavaScript"],
      description: (
        <p>
          CD Shop is my school course's final project, and this is my very first
          front-end project. I built CD Shop on top of plain HTML, CSS and JS.
        </p>
      ),
      actions: [
        {
          name: "View online",
          link: "https://teddyos.github.io/phatcdshop",
        },
        {
          name: "View code on GitHub",
          link: "https://github.com/teddyos/phatcdshop",
        },
      ],
    },
    {
      name: "Draft Pascal",
      color: "white",
      logo: "img/draftpascal/logo.ico",
      screenshots: [
        "img/draftpascal/1.png",
        "img/draftpascal/2.png",
        "img/draftpascal/3.png",
        "img/draftpascal/4.png",
      ],
      techs: ["C#"],
      description: (
        <p>
          A Pascal text editor, built with .NET Framework and MinGW compiler. It
          was much easier to code and test the output with prebuilt input
          compared to traditional tools at the moment, such as Turbo Pascal or
          Free Pascal.
          <br />
          <small>
            I built this app when I first studied .NET at university.
          </small>
        </p>
      ),
      working: false,
    },
    {
      name: "Plants Vs. Zombies in shell ",
      color: "white",
      logo: "img/logos/8-bit_bucket-head.png",
      screenshots: ["img/pvzshell/1.gif"],
      techs: ["C++"],
      description: (
        <p>
          <i>
            Plants Vs. Zombies <b>in shell</b>
          </i>{" "}
          is a shell-based strategy game that use <u>C++</u> and a shell-based
          graphical library called <u>ncurses</u>. This game use only one thread
          with a manual time-slicing technique to create animation. All object's
          stats, including damage, health point, and respawn time, is
          configurable easily in one module.
          <br />
          <small>
            I built this app with excitement when I first studied C++ at
            university.
          </small>
        </p>
      ),
      actions: [
        {
          name: "View on Github",
          link: "https://github.com/teddyos/pvz_shell",
        },
      ],
    },
  ],
  freelance: {
    WordPress: [
      "help.zalo.me",
      "thuyduong.com.vn",
      "tinibui-couture.com",
      "thingstobloom.fr",
      "ecodair.org",
      "lefournildevillabe.com",
      "lyon-mariage.com",
      "pro-plan.fr",
      "hotel-admiral.fr",
      "taxi-cadoretmistigri.com",
      "parentauquotidien.com",
      "bamboo-dev.fr",
      "co-access.fr",
      "groupe-sid.com",
      "cleanwash.fr",
      "besideskimchi.com",
      "resine2000.com",
      "wao-passy.com",
      "jumbopneus.fr",
      "pimlicom.com",
      "marbrerie.com",
      "autoque.fr",
      "pasion.fr",
      "blackflag.agency",
      "sossantegrace.fr",
      "carterandfont.com",
      "nvburo.fr",
      "transports-schubel.com",
      "lyon-paysagiste.fr",
    ],
    PrestaShop: [
      "thecosmohouse.vn",
      "idocaps.com",
      "mecaplastic-80.com",
      "rvetec.com",
      "cie-bracelet-montre.com",
      "lappartementfrancais.fr",
      "miriaform.com",
      "conseil-scpi.com",
      "plinthe-cie.com",
    ],
    Joomla: [
      "cabinet-vandame.com",
      "rouxel-mold.com",
      "agence-no-stress.com",
      "roze.fr",
      "duseaux.com",
    ],
    Drupal: ["clubmedjobs.us"],
  },
};
