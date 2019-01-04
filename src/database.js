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
            component: 'CV',
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
            color: 'blue',
            icon: 'stack',
            size: 'medium'
        },
        {
            shortName: 'My first website',
            name: 'CDShop',
            link: 'https://nguyenhongphat0.github.io/phatcdshop',
            component: 'CDShop',
            color: 'green',
            icon: 'backward',
            size: 'wide',
        }
    ],
    projects: [
        {
            name: 'CD Shop',
            link: 'https://nguyenhongphat0.github.io/phatcdshop',
            component: 'CDShop',
            color: 'green',
            icon: 'gamepad',
            size: 'small',
            techs: ['JavaScript'],
            description: 'CD Shop is my school course final project and this is my first front end project. CD Shop was built with plain HTML, CSS and JS',
            important: true
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
                '/img/phatphone/1.png',
                '/img/phatphone/2.png',
                '/img/phatphone/3.png',
                '/img/phatphone/4.png',
                '/img/phatphone/5.png',
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
                '/img/tvcgvn/1.png',
                '/img/tvcgvn/2.png',
                '/img/tvcgvn/3.png',
                '/img/tvcgvn/4.png',
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
                '/img/linuxlover/1.png',
                '/img/linuxlover/2.png',
                '/img/linuxlover/3.png',
                '/img/linuxlover/4.png',
            ],
            techs: ['PHP', 'Materialize', 'MySQL', 'JavaScript'],
            description: 'A fanpage and forum for those who love linux! Clean and modern design, with recursive nested comment allowed.'
        },
        {
            name: 'Truong Ba Office',
            color: 'cyan',
            icon: 'css3',
            banners: [
                '/img/truongba/1.png',
                '/img/truongba/2.png',
                '/img/truongba/3.png',
                '/img/truongba/4.png',
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
                '/img/fujioh/1.png',
                '/img/fujioh/2.png',
                '/img/fujioh/3.png',
            ],
            techs: ['Angular', 'Bootstrap', 'JavaScript'],
            description: 'Fujioh warranty registration system, using Angular 6 and Bootstrap 4'
        },
        {
            name: 'Draft Pascal',
            color: 'cyan',
            icon: 'file-code',
            banners: [
                '/img/draftpascal/1.png',
                '/img/draftpascal/2.png',
                '/img/draftpascal/3.png',
                '/img/draftpascal/4.png',
            ],
            techs: ['C#'],
            description: 'A Pascal text editor, built with .NET Framework and MinGW compiler. Easy to write code, and run with prebuilt input',
            working: true
        }
    ],
    freelance: {
        Wordpress: [
            'lyon-mariage.com',
            'pro-plan.fr',
            'hotel-admiral.fr',
            'clubmedjobs.us'
        ],
        Prestashop: [
            'rvetec.com',
            'cie-bracelet-montre.com'
        ]
    }
}