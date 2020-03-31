import React from 'react';

export default {
    background: 'https://picsum.photos/1920/1080/?random',
    width: 800,
    height: 550,
    name: 'Nguyen Hong Phat',
    avatar: 'https://avatars2.githubusercontent.com/u/29925961',
    email: 'phatnhse63348@fpt.edu.vn',
    phone: '+84589424815',
    address: 'Hau Nghia, Duc Hoa, Long An',
    titleColor: 'dark',
    links: [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=100004240774642',
            icon: 'facebook2',
            color: 'darkBlue'
        },
        {
            name: 'Github',
            url: 'https://github.com/nguyenhongphat0',
            icon: 'github',
            color: 'black'
        }
    ],
    windows:[
        {
            name: 'My CV',
            component: 'Iframe',
            link: 'pdf/cv.pdf',
            color: 'orange',
            icon: 'profile',
            size: 'medium'
        },
        {
            name: 'My Projects',
            component: 'Projects',
            tileComponent: 'Projects',
            color: 'white',
            icon: 'stack',
            size: 'large'
        },
        {
            name: 'Freelance Logs',
            component: 'Freelance',
            tileComponent: 'Freelance',
            color: 'black',
            icon: 'vpn-publ',
            size: 'wide'
        },
        {
            shortName: 'My first website',
            name: 'CDShop',
            component: 'Iframe',
            link: 'https://nguyenhongphat0.github.io/phatcdshop',
            color: 'dark',
            icon: 'backward',
            size: 'medium',
        },
        {
            name: 'Timeline',
            component: 'Timeline',
            color: 'dark',
            icon: 'history',
            size: 'wide',
        }
    ],
    timeline: {
        categories: [
            {
                name: 'Jobs',
                icon: 'suitcase',
                color: 'cyan',
                events: [
                    {
                        title: 'Bamboo Dev.',
                        subtitle: 'Start working',
                        description: 'WordPress & Prestashop Developer',
                        day: 10,
                        month: 4,
                        year: 2017,
                        preview: 'img/logos/bamboo.png',
                    },
                    {
                        title: 'FPT Software',
                        subtitle: 'Start working',
                        description: 'Front-End Developer',
                        day: 7,
                        month: 2,
                        year: 2020,
                        preview: 'img/timeline/fpt-software-logo.png',
                        detail: <div style={{height: 430}}><iframe title="First fulltime job" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1581954698622541%26id%3D100004240774642&width=500&show_text=true&appId=483014678906039&height=608" width="500" height="608" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe></div>
                    }
                ]
            },
            {
                name: 'Education',
                icon: 'profile',
                color: 'orange',
                events: [
                    {
                        title: 'Graduate High School',
                        subtitle: 'Hau Nghia High School',
                        description: <div>Performance: Good<br/>Conduct: Good</div>,
                        day: 17,
                        month: 4,
                        year: 2016,
                    },
                    {
                        title: 'Defend graduation thesis',
                        subtitle: 'FPT University',
                        description: <div>Question Bank Checking System<br/>Grade: 8.4</div>,
                        day: 27,
                        month: 12,
                        year: 2019,
                        preview: 'img/qbcs2/logo.png'
                    },
                    {
                        title: 'Graduate University',
                        subtitle: 'FPT University',
                        description: <div>Major: Software Engineering<br/>GPA: 8.05</div>,
                        day: 9,
                        month: 3,
                        year: 2020,
                        preview: 'img/timeline/fpt-university-logo.png',
                        detail: <a className="button primary" href="pdf/interim-academic-transcript.pdf" target="_blank">View Transcript</a>
                    }
                ]
            },
            {
                name: 'Honors & Awards',
                icon: 'gift',
                color: 'green',
                events: [
                    {
                        title: 'Thủ khoa',
                        subtitle: 'Hau Nghia High School',
                        description: 'Grade: 47/50',
                        day: 1,
                        month: 10,
                        year: 2013,
                    },
                    {
                        title: 'Học sinh giỏi cấp tỉnh',
                        subtitle: 'First prize',
                        description: 'Informatics - Algorithm and Data Structre with Pascal',
                        day: 20,
                        month: 11,
                        year: 2014,
                    },
                    {
                        title: 'Tin học trẻ không chuyên quốc gia',
                        subtitle: 'Consolation prize',
                        description: 'Binh Dinh, Viet Nam',
                        day: 17,
                        month: 4,
                        year: 2015,
                    },
                    {
                        title: '70% Scholarship',
                        subtitle: 'FPT University',
                        day: 5,
                        month: 10,
                        year: 2016,
                    },
                    {
                        title: 'Excellent Student of the Semester',
                        subtitle: 'FPT University',
                        description: 'GPA > 9.0 in a semester',
                        day: 28,
                        month: 9,
                        year: 2017,
                    },
                ]
            },
            {
                name: 'Life',
                icon: 'user',
                color: 'pink',
                description: 'Wonderful things that happen in my live',
                events: [
                    {
                        title: 'Birthday',
                        subtitle: 'The day I was born',
                        day: 28,
                        month: 12,
                        year: 1998
                    },
                    {
                        title: 'First love',
                        description: 'With someone special!',
                        preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1111px-Love_Heart_symbol.svg.png',
                        day: 20,
                        month: 11,
                        year: 2014,
                    },
                ]
            },
            {
                name: 'Other',
                icon: 'vpn-publ',
                color: 'gray',
                events: [
                    {
                        title: 'The corona virus',
                        subtitle: 'Global disease',
                        description: 'Everyone is isolated, work from home',
                        preview: 'img/timeline/covid-19.jpg',
                        day: 1,
                        month: 1,
                        year: 2020,
                    },
                ]
            }
        ]
    },
    projects: [
        {
            name: 'Question Bank Checking System - Season 2',
            color: 'white',
            logo: 'img/qbcs2/logo.png',
            component: 'QBCS2',
            src: 'pdf/qbcs2_document_full.pdf',
            techs: ['C#', 'JavaScript', 'Vue', 'SQL Server', 'SQL Assembly', 'DeepSpeech'],
            important: true
        },
        {
            name: 'Volunteer World',
            color: 'white',
            logo: 'img/volunteerworld/logo.png',
            component: 'VolunteerWorld',
            techs: ['Android', 'JavaScript', 'Vue', 'C#', 'SQL Server'],
            description: <p>Volunteer World is a project for my System Architecture, Human Computer Interaction and Mobile Programing courses. It's a full designed system that has Database for business information, Web Admin for manage system entities and Mobile App for user interaction.</p>,
            important: true
        },
        {
            name: 'AIA Distribution Portal',
            color: 'white',
            logo: 'img/logos/aia.png',
            techs: ['JavaScript', 'ReactJS', 'Redux', 'Power BI'],
            description: 'FPT Software is a world class software company mainly working on outsourcing and offshore development center business. AIA is one of FPT\'s biggest customers. Distribution Portal (ADP4) is a system that manages AIA\'s invoice, insurance, hierarchy,... and so on.',
            working: true,
            confidential: true
        },
        {
            name: 'AIA MDM - Phase 2',
            color: 'white',
            logo: 'img/logos/aia.png',
            techs: ['JavaScript', 'ReactJS', 'Redux', 'Umi.JS', 'DVA.JS', 'Ant Design'],
            description: 'MDM is an outdated and unusable system of AIA. FPT takes care of database maintenance and builds a new system with improved features based on functions of the old system and latest technology stack.',
            working: true,
            confidential: true
        },
        {
            name: 'Hanwha AI Camera',
            color: 'white',
            logo: 'https://www.intercom.com.eg/wp-content/uploads/2018/01/SamsungWisenet-300x300.jpg',
            techs: ['JavaScript', 'ReactJS', 'ExpressJS', 'MongoDB', 'Node.js'],
            description: <quote style={{fontSize: 15, fontStyle: 'italic'}}>"Hanwha AI Camera was my very first big-budget project (over 200M+ KRW), and definitely an unforgetable experience of my life. The project was outsourced from the Korea Hanwha Techwin to the Vietnam FPT Software (the company I've worked on at that moment). We use full JavaScript (M.E.R.N Stack) to develope a web based system to handle data from camera and analize them using smart algorithm. I worked on it both client and server side. The project last 12 months to be completed and it was closed in full of customer's satisfication! Unfortunately this is a <b className="fg-red">private project</b>, no further information or any screenshot of the product is allowed to be sharing, sorry!"</quote>,
            important: true,
            confidential: true
        },
        {
            name: 'nguyenhongphat0.github.io',
            shortName: 'Portfolio',
            color: 'dark',
            icon: 'profile',
            techs: ['JavaScript', 'ReactJS'],
            description: <p>This is my portfolio and you are viewing it :D</p>,
            actions: [
                {
                    name: 'View code on Github',
                    link: 'https://github.com/nguyenhongphat0/nguyenhongphat0.github.io'
                }
            ]
        },
        {
            name: 'CD Shop',
            component: 'Showcase',
            src: 'https://nguyenhongphat0.github.io/phatcdshop',
            color: 'green',
            icon: 'gamepad',
            techs: ['JavaScript'],
            description: <p>CD Shop is my school course final project and this is my first front end project. CD Shop was built with plain HTML, CSS and JS</p>,
            actions: [
                {
                    name: 'View online',
                    link: 'https://nguyenhongphat0.github.io/phatcdshop'
                },
                {
                    name: 'View code on Github',
                    link: 'https://github.com/nguyenhongphat0/phatcdshop'
                }
            ]
        },
        {
            name: 'Arena Of Evolution: Red Tides Guide',
            component: 'Showcase',
            src: 'https://evolutionchess.github.io',
            color: 'white',
            logo: 'https://evolutionchess.github.io/assets/img/shared/logo.png',
            techs: ['Jekyll', 'JavaScript', 'Vue', 'Bootstrap', 'Google Adsense', 'Google Analytics', 'Facebook Comment API'],
            description: <p>Arena Of Evolution: Red Tides Guide is a fandom wiki crafted with Jekyll and hosted on Github Pages. This website used to have lots of traffics before Red Tides lost it popular due to competition among other auto-battler like Auto Chess and Team Fight Tactics. It was not only provide in game database lookup, guides and tips to play the game but also some other helful tools like mix, tiers list and update log comparision. If you are a fan of AoE: Red Tides you probably have came to visit this site before, it has very good order in the search result of Google and Bing.</p>,
            important: true,
            working: true,
            actions: [
                {
                    name: 'Visit site',
                    link: 'https://evolutionchess.github.io'
                },
                {
                    name: 'View code on Github',
                    link: 'https://github.com/evolutionchess/evolutionchess.github.io'
                }
            ],
            screenshots: [
                'img/evolutionchess/ga.png',
                'img/evolutionchess/sc.png',
                'img/evolutionchess/fb.png'
            ],
        },
        {
            name: 'Wordpress Developerpack',
            color: 'white',
            logo: 'https://ps.w.org/developer-pack/assets/icon.svg',
            techs: ['PHP', 'Wordpress'],
            screenshots: [
                'https://ps.w.org/developer-pack/assets/screenshot-1.png',
                'https://ps.w.org/developer-pack/assets/screenshot-2.png'
            ],
            description: <p>Developer Pack allow you to view PHP information, download WordPress site source code with advanced options, and online code editing with a powerful code editor. You don’t have to use FTP or SSH anymore.<br/>Developer Pack is built for the developers/freelancers. If you don’t know how to code PHP or how WordPress work, it is massive dangerous. Please only install it when you know what you are doing!<br/>Remember: This plugin can modify your file system. Use it wisely!</p>,
            important: true,
            actions: [
                {
                    name: 'Download in Wordpress Plugins',
                    link: 'https://wordpress.org/plugins/developer-pack/'
                },
                {
                    name: 'View code on Github',
                    link: 'https://github.com/nguyenhongphat0/wordpress-developerpack'
                }
            ]
        },
        {
            name: 'Prestashop Developerpack',
            color: 'white',
            logo: 'img/platforms/Prestashop.png',
            techs: ['PHP', 'Prestashop'],
            description: <p>Freelancer/Developer use only!<br/>This module allow you to download you website source code for local debugging and edit your file directly in your back office with a powerful code editor.</p>,
            actions: [{
                name: 'View code & download on Github',
                link: 'https://github.com/nguyenhongphat0/prestashop-developerpack',
            }]
        },
        {
            name: 'Plants Vs. Zombies in shell ',
            color: 'white',
            logo: 'img/logos/8-bit_bucket-head.png',
            screenshots: [
                'https://raw.githubusercontent.com/nguyenhongphat0/pvz_shell/master/screenshot.png'
            ],
            techs: ['C++'],
            description: <p><i>Plants Vs. Zombies <b>in shell</b></i> is a shell-based strategy game that use <u>C++</u> and a shell-based graphical library called <u>ncurses</u>. This game use only 1 thread with manual time slicing technique to create animated. All object\'s stats including damage, health point and respawn time is configable easily in one module.</p>,
            actions: [{
                name: 'View on Github',
                link: 'https://github.com/nguyenhongphat0/pvz_shell'
            }]
        },
        {
            name: 'PhatPhone ',
            color: 'black',
            logo: 'img/phatphone/logo.png',
            screenshots: [
                'img/phatphone/1.png',
                'img/phatphone/2.png',
                'img/phatphone/3.png',
                'img/phatphone/4.png',
                'img/phatphone/5.png',
            ],
            techs: ['PHP', 'Bootstrap', 'JQuery', 'JavaScript'],
            description: <p>PhatPhone is my official phone shop's web site, using many front end technologies like: Bootstrap, JQuery, Marsony grid, AJAX searching and local storage cart system. The website use plain PHP for server side scripting, such as saving orders and manage product.</p>,
            actions: [{
                name: 'View code on Github',
                link: 'https://github.com/nguyenhongphat0/phatphone'
            }]
        },
        {
            name: 'Thu Vien Cong Giao Viet Nam',
            color: 'white',
            logo: 'img/logos/thuvienconggiaovietnam.png',
            techs: ['Bootstrap', 'JQuery', 'JavaScript'],
            description: <p>This is the offcial thuvienconggiaovietnam.net mockup site, using responsive Bootstrap 4, JQuery and old woody design pattern, with full feature pages.</p>,
            actions: [
                {
                    name: 'Preview online',
                    link: 'https://nguyenhongphat0.github.io/thuvienconggiaovietnam.net'
                },
                {
                    name: 'View code on Github',
                    link: 'https://github.com/nguyenhongphat0/thuvienconggiaovietnam.net'
                }
            ]
        },
        {
            shortName: 'Fujioh Warranty Registration Service',
            name: 'Fujioh Warranty Registration Service',
            color: 'red',
            icon: 'widgets',
            screenshots: [
                'img/fujioh/1.png',
                'img/fujioh/2.png',
                'img/fujioh/3.png',
            ],
            techs: ['Angular', 'Bootstrap', 'JavaScript'],
            description: <p>Fujioh warranty registration system, using Angular 6 and Bootstrap 4</p>
        },
        {
            name: 'Linuxlover',
            color: 'black',
            logo: 'img/linuxlover/logo.png',
            screenshots: [
                'img/linuxlover/1.png',
                'img/linuxlover/2.png',
                'img/linuxlover/3.png',
                'img/linuxlover/4.png',
            ],
            techs: ['PHP', 'Materialize', 'MySQL', 'JavaScript'],
            description: <p>A fanpage and forum for those who love linux! Clean and modern design, with recursive nested comment allowed.</p>,
            actions: [{
                name: 'View code on Github',
                link: 'https://github.com/nguyenhongphat0/linuxlover'
            }]
        },
        {
            name: 'Truong Ba Office',
            color: 'white',
            logo: 'img/truongba/logo.jpg',
            screenshots: [
                'img/truongba/1.png',
                'img/truongba/2.png',
                'img/truongba/3.png',
                'img/truongba/4.png',
            ],
            techs: ['PHP', 'Vue', 'JavaScript'],
            description: <p>Truong Ba Inc. official office application. Run on Vue.JS and plain PHP api'</p>
        },
        {
            name: 'Draft Pascal',
            color: 'white',
            logo: 'img/draftpascal/logo.ico',
            screenshots: [
                'img/draftpascal/1.png',
                'img/draftpascal/2.png',
                'img/draftpascal/3.png',
                'img/draftpascal/4.png',
            ],
            techs: ['C#'],
            description: <p>A Pascal text editor, built with .NET Framework and MinGW compiler. Easy to write code, and run with prebuilt input</p>,
            working: true
        }
    ],
    freelance: {
        Wordpress: [
            'thuyduong.com.vn',
            'tinibui-couture.com',
            'thingstobloom.fr',
            'ecodair.org',
            'lefournildevillabe.com',
            'lyon-mariage.com',
            'pro-plan.fr',
            'hotel-admiral.fr',
            'taxi-cadoretmistigri.com',
            'parentauquotidien.com',
            'bamboo-dev.fr',
            'co-access.fr',
            'groupe-sid.com',
            'cleanwash.fr',
            'besideskimchi.com',
            'resine2000.com',
            'wao-passy.com',
            'jumbopneus.fr',
            'pimlicom.com',
            'marbrerie.com',
            'autoque.fr',
            'pasion.fr',
            'blackflag.agency',
            'sossantegrace.fr',
            'carterandfont.com',
            'nvburo.fr',
            'transports-schubel.com',
            'lyon-paysagiste.fr'
        ],
        Prestashop: [
            'thecosmohouse.vn',
            'idocaps.com',
            'mecaplastic-80.com',
            'rvetec.com',
            'cie-bracelet-montre.com',
            'lappartementfrancais.fr',
            'miriaform.com',
            'conseil-scpi.com',
            'plinthe-cie.com'
        ],
        Joomla: [
            'cabinet-vandame.com',
            'rouxel-mold.com',
            'agence-no-stress.com',
            'roze.fr',
            'duseaux.com'
        ],
        Drupal: [
            'clubmedjobs.us'
        ]
    }
}