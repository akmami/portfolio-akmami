const projects = {
    "None" : [
        {
            title: 'akhal',
            issue: 'Apr 2025 - present',
            repo: 'https://github.com/akmami/akhal',
            description: [
                'A command-line tool designed to process and analyze r/GFA (Graphical Fragment Assembly) files. It provides functionality for validating, analyzing statistics, and converting GAF (Graphical Alignment Format) to SAM (Sequence Alignment Map).',
            ]
        },
        {
            title: 'LCPan',
            issue: 'Dec 2024 - present',
            repo: 'https://github.com/BilkentCompGen/lcpan',
            description: [
                'A novel method for variation graph construction leveraging Locally Consistent Parsing (LCP) to efficiently incorporate genomic variations. Unlike existing tools with high memory usage, LCPan ensures linear memory scalability, making it fast, parallelizable, and memory-efficient.',
            ]
        },
        {
            title: 'GenCore',
            issue: 'Jun 2024 - present',
            repo: 'https://github.com/BilkentCompGen/gencore',
            description: [
                'A tool designed for the comparison of genomic sequences. Unlike traditional genomic comparison methods that rely on hashing techniques, gencore utilizes Locally Consistent Parsing (LCP), a novel approach that processes strings iteratively. This technique allows for the paritioning genomic data into small modules, called cores, leading to highly accurate comparisons when evaluating genetic distances and constructing phylogenetic trees.',
            ]
        },
        {
            title: 'lcptools',
            issue: 'Aug 2023 - present',
            repo: 'https://github.com/BilkentCompGen/lcptools',
            description: [
                'Locally Consistent Parsing (LCP) is a string processing technique that partitions and labels strings into nearly even lengths of substrings, known as cores. Unlike sketching techniques, LCP ensures (1) a uniform positional distribution of cores over the input string, (2) identical cores share the same labels, and (3) each character in the input string is included in at least one core. The implementation is in C and is designed for efficient computation of LCP on large datasets.',
            ]
        },
        {
            title: 'SVTrek',
            issue: 'May 2022 - present',
            repo: 'https://github.com/akmami/SVTrek',
            description: [
                'A tool that aims to perform Structural Variation discovery on seqeunce-to-graph alignments.',
            ]
        }
    ],
    "Hobby" : [
        {
            title: 'e-JAAM',
            issue: 'Dec 2023 - Jun 2024',
            repo: 'https://ejaam.org',
            description: [
                'The e-Journal of Analysis and Applied Mathematics is an international journal dedicated to the latest analysis and applied mathematics advancements. This journal aims to provide a forum for researchers and scientists to communicate their recent developments and present their original results in various fields of analysis and applied mathematics.',
                'I led the design and implementation of the e-JAAM website, a platform dedicated to advancing the field of analysis and applied mathematics. Utilizing React, a JavaScript library, I built a responsive and user-friendly interface. The website is hosted on an AWS Lightsail server running Ubuntu, configured with Nginx for optimal performance. To ensure security, I integrated GoDaddy for domain management and Let\'s Encrypt for SSL certification.'
            ]
        },
        {
            title: 'pport',
            platform: 'App Store',
            issue: 'Nov 2022',
            repo: 'https://github.com/pport-application',
            description: [
                'pport is Personal Portfolio mobile application for IOS devices that allow users to monitor the markets and other financial sources.'
            ]
        }
    ]
}

export default projects;