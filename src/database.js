export default {
    background: 'https://picsum.photos/1920/1080/?random',
    width: 800,
    height: 550,
    name: 'Nguyen Hong Phat',
    avatar: 'https://avatars2.githubusercontent.com/u/29925961',
    email: 'phatnhse63348@fpt.edu.vn',
    phone: '0903670437',
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
            link: 'cv.pdf',
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
            color: 'green',
            icon: 'backward',
            size: 'medium',
        }
    ],
    projects: [
        {
            name: 'Hanwha AI Camera',
            link: 'https://github.com/nguyenhongphat0/prestashop-developerpack',
            color: 'white',
            logo: 'https://www.intercom.com.eg/wp-content/uploads/2018/01/SamsungWisenet-300x300.jpg',
            techs: ['JavaScript', 'ReactJS', 'ExpressJS', 'MongoDB'],
            note: 'Release date: 22/12/2018',
            description: '<p><b class="fg-red">This is a private project! No screenshot or client information is allowed to be explored.</b></p><p><div><em>Customer: Hanwha Techwin.</em></div><div><em>Developed team: FPT Software</em></div><div>This is a FPT Software project that I have contributed to. This project using full Javascript stack, I have worked on both client and server side.</div></p>',
            important: true
        },
        {
            name: 'nguyenhongphat0.github.io',
            shortName: 'Portfolio',
            color: 'dark',
            icon: 'profile',
            techs: ['JavaScript', 'ReactJS'],
            description: 'This is my portfolio and you are viewing it :D. You can view full sourcecode of this project <a href="https://github.com/nguyenhongphat0/nguyenhongphat0.github.io" target="_blank">here</a>.'
        },
        {
            name: 'CD Shop',
            link: 'https://nguyenhongphat0.github.io/phatcdshop',
            component: 'CDShop',
            color: 'green',
            icon: 'gamepad',
            techs: ['JavaScript'],
            description: 'CD Shop is my school course final project and this is my first front end project. CD Shop was built with plain HTML, CSS and JS',
        },
        {
            name: 'Wordpress Developerpack',
            link: 'https://wordpress.org/plugins/developer-pack/',
            color: 'white',
            logo: 'https://ps.w.org/developer-pack/assets/icon.svg',
            techs: ['PHP', 'Wordpress'],
            banners: [
                'https://ps.w.org/developer-pack/assets/screenshot-1.png',
                'https://ps.w.org/developer-pack/assets/screenshot-2.png'
            ],
            description: 'Developer Pack allow you to view PHP information, download WordPress site source code with advanced options, and online code editing with a powerful code editor. You don’t have to use FTP or SSH anymore.<br>Developer Pack is built for the developers/freelancers. If you don’t know how to code PHP or how WordPress work, it is massive dangerous. Please only install it when you know what you are doing!<br>Remember: This plugin can modify your file system. Use it wisely!',
            important: true
        },
        {
            name: 'Prestashop Developerpack',
            link: 'https://github.com/nguyenhongphat0/prestashop-developerpack',
            color: 'white',
            logo: 'img/platforms/Prestashop.png',
            techs: ['PHP', 'Prestashop'],
            description: 'Freelancer/Developer use only!<br>This module allow you to download you website source code for local debugging and edit your file directly in your back office with a powerful code editor. Click <a href="https://github.com/nguyenhongphat0/prestashop-developerpack/blob/master/docs/readme_en.pdf" target="_blank">here</a> to download.',
        },
        {
            name: 'Plants Vs. Zombies in shell ',
            link: 'https://github.com/nguyenhongphat0/pvz_shell',
            color: 'cyan',
            icon: 'swarm',
            banners: [
                'https://raw.githubusercontent.com/nguyenhongphat0/pvz_shell/master/screenshot.png'
            ],
            techs: ['C++'],
            description: '<i>Plants Vs. Zombies <b>in shell</b></i> is a shell-based strategy game that use <u>C++</u> and a shell-based graphical library called <u>ncurses</u>. This game use only 1 thread with manual time slicing technique to create animated. All object\'s stats including damage, health point and respawn time is configable easily in one module.'
        },
        {
            name: 'PhatPhone ',
            link: 'https://github.com/nguyenhongphat0/phatphone',
            color: 'cyan',
            icon: 'mobile',
            banners: [
                'img/phatphone/1.png',
                'img/phatphone/2.png',
                'img/phatphone/3.png',
                'img/phatphone/4.png',
                'img/phatphone/5.png',
            ],
            techs: ['PHP', 'Bootstrap', 'JQuery', 'JavaScript'],
            description: 'PhatPhone is my official phone shop\'s web site, using many front end technologies like: Bootstrap, JQuery, Marsony grid, AJAX searching and local storage cart system. The website use plain PHP for server side scripting, such as saving orders and manage product.'
        },
        {
            shortName: 'TVCGVN ',
            name: 'Thu Vien Cong Giao Viet Nam',
            link: 'https://nguyenhongphat0.github.io/thuvienconggiaovietnam.net',
            color: 'cyan',
            icon: 'books',
            banners: [
                'img/tvcgvn/1.png',
                'img/tvcgvn/2.png',
                'img/tvcgvn/3.png',
                'img/tvcgvn/4.png',
            ],
            techs: ['Bootstrap', 'JQuery', 'JavaScript'],
            description: 'This is the offcial thuvienconggiaovietnam.net mockup site, using responsive Bootstrap 4, JQuery and old woody design pattern, with full feature pages.'
        },
        {
            name: 'Linuxlover',
            link: 'https://github.com/nguyenhongphat0/linuxlover',
            color: 'cyan',
            icon: 'linux',
            banners: [
                'img/linuxlover/1.png',
                'img/linuxlover/2.png',
                'img/linuxlover/3.png',
                'img/linuxlover/4.png',
            ],
            techs: ['PHP', 'Materialize', 'MySQL', 'JavaScript'],
            description: 'A fanpage and forum for those who love linux! Clean and modern design, with recursive nested comment allowed.'
        },
        {
            name: 'Truong Ba Office',
            color: 'cyan',
            icon: 'css3',
            banners: [
                'img/truongba/1.png',
                'img/truongba/2.png',
                'img/truongba/3.png',
                'img/truongba/4.png',
            ],
            techs: ['PHP', 'Vue', 'JavaScript'],
            description: 'Truong Ba Inc. official office application. Run on Vue.JS and plain PHP api'
        },
        {
            shortName: 'Fujioh',
            name: 'Fujioh Warranty Registration Service',
            color: 'cyan',
            icon: 'widgets',
            banners: [
                'img/fujioh/1.png',
                'img/fujioh/2.png',
                'img/fujioh/3.png',
            ],
            techs: ['Angular', 'Bootstrap', 'JavaScript'],
            description: 'Fujioh warranty registration system, using Angular 6 and Bootstrap 4'
        },
        {
            name: 'Draft Pascal',
            color: 'cyan',
            icon: 'file-code',
            banners: [
                'img/draftpascal/1.png',
                'img/draftpascal/2.png',
                'img/draftpascal/3.png',
                'img/draftpascal/4.png',
            ],
            techs: ['C#'],
            description: 'A Pascal text editor, built with .NET Framework and MinGW compiler. Easy to write code, and run with prebuilt input',
            working: true
        }
    ],
    freelance: {
        Wordpress: [
            'thuyduong.com.vn',
            'tinibui-couture.com',
            'lyon-mariage.com',
            'pro-plan.fr',
            'hotel-admiral.fr',
            'clubmedjobs.us',
            'taxi-cadoretmistigri.com',
            'parentauquotidien.com',
            'bamboo-dev.fr',
            'co-access.fr',
            'groupe-sid.com',
            'cleanwash.fr',
            'besideskimchi.com',
            'resine2000.com',
            'wao-passy.com'
        ],
        Prestashop: [
            'thecosmohouse.vn',
            'rvetec.com',
            'cie-bracelet-montre.com',
            'lappartementfrancais.fr',
            'miriaform.com',

        ],
        Joomla: [
            'cabinet-vandame.com',
            'rouxel-mold.com'
        ],
        Drupal: [
            'clubmedjobs.fr'
        ]
    }
}